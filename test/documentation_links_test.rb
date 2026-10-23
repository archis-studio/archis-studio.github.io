require "minitest/autorun"
require "tmpdir"
require "fileutils"
require "open3"
require "rbconfig"
require_relative "../scripts/check-documentation-links"

class DocumentationLinksTest < Minitest::Test
  def setup
    @root = Dir.mktmpdir("documentation-links-")
  end

  def teardown
    FileUtils.remove_entry(@root)
  end

  def write(path, text)
    target = File.join(@root, path)
    FileUtils.mkdir_p(File.dirname(target))
    File.write(target, text)
  end

  def check
    DocumentationLinks::Checker.new(@root).check
  end

  def test_scans_root_and_nested_maintenance_docs_but_not_site_or_dependencies
    %w[README.md agents.MD docs/archive/old.md docs/plans/task.md].each { |path| write(path, "[bad](missing.md)\n") }
    %w[_posts/post.md vendor/readme.md test/fixture.md].each { |path| write(path, "[bad](missing.md)\n") }
    errors = check
    assert_equal 4, errors.size
    assert errors.any? { |error| error.include?("docs/archive/old.md:1:") }
    refute errors.any? { |error| error.include?("vendor/readme.md") }
  end

  def test_reports_each_missing_file_and_heading_with_source_line_and_target
    write("README.md", "# Start\n\n[missing](lost.md)\n[heading](docs/guide.md#lost)\n[local](#missing)\n")
    write("docs/guide.md", "# Present\n")
    errors = check
    assert_equal 3, errors.size
    assert errors.any? { |error| error.include?("README.md:3:") && error.include?("lost.md") }
    assert errors.any? { |error| error.include?("README.md:4:") && error.include?("docs/guide.md#lost") }
    assert errors.any? { |error| error.include?("README.md:5:") && error.include?("#missing") }
  end

  def test_unicode_formatted_and_repeated_headings_have_unique_anchors
    write("docs/guide.md", "# 中文與 `API` **Guide**！\n\n## Repeat\n## Repeat\n## Repeat-1\n## Repeat\n")
    write("README.md", "[a](docs/guide.md#中文與-api-guide)\n[b](docs/guide.md#repeat-1)\n[c](docs/guide.md#repeat-1-1)\n[d](docs/guide.md#repeat-2)\n")
    assert_empty check
  end

  def test_reference_links_balanced_parentheses_and_encoded_paths
    write("docs/guide (old).md", "# 中文章節\n")
    write("docs/C++ guide.md", "# API\n")
    write("README.md", "[ref][guide]\n\n[guide]: <docs/guide (old).md#%E4%B8%AD%E6%96%87%E7%AB%A0%E7%AF%80>\n\n[inline](docs/guide%20%28old%29.md#中文章節)\n[plus](<docs/C++ guide.md?plain=1#api>)\n")
    assert_empty check
  end

  def test_code_blocks_inline_code_and_comments_do_not_create_links_or_headings
    write("README.md", <<~'MARKDOWN')
      # Real
      `[inline](lost.md)`
      ```markdown
      # Fake
      [bad](lost.md)
      ```
      ~~~markdown
      [bad](lost.md)
      ~~~
      <!-- [bad](lost.md) -->
      [real](#real)
    MARKDOWN
    assert_empty check
    write("README.md", File.read(File.join(@root, "README.md")) + "[fake](#fake)\n")
    assert_equal 1, check.size
  end

  def test_relative_parent_root_directory_asset_and_html_anchors
    write("docs/guide.md", "<a id=\"手動\"></a>\n\n<a name=\"legacy\"></a>\n")
    write("assets/image.png", "image bytes")
    write("README.md", "[directory](docs/)\n![image](assets/image.png)\n[custom](docs/guide.md#手動)\n[legacy](docs/guide.md#legacy)\n")
    write("docs/nested/check.md", "[root](/README.md)\n[parent](../guide.md#手動)\n")
    assert_empty check
  end

  def test_external_urls_and_non_markdown_fragments_are_not_fetched
    write("file.txt", "not Markdown")
    write("README.md", "[web](https://invalid.example/lost#missing)\n[mail](mailto:person@example.com)\n[cdn](//invalid.example/file)\n[text](file.txt#not-checked)\n")
    assert_empty check
  end

  def test_custom_html_anchor_does_not_consume_duplicate_heading_suffix
    write("README.md", "<a id=\"repeat-1\"></a>\n\n# Repeat\n# Repeat\n\n[heading](#repeat-1)\n[missing](#repeat-2)\n")
    errors = check
    assert_equal 1, errors.size
    assert_includes errors.first, "#repeat-2"
  end

  def test_rejects_paths_outside_repository_including_encoded_traversal
    write("README.md", "[outside](../outside.md)\n[encoded](%2e%2e/outside.md)\n")
    assert_equal 2, check.size
    assert check.all? { |error| error.include?("outside repository") }
  end

  def test_markdown_links_and_headings_inside_details_are_checked
    write("README.md", <<~'MARKDOWN')
      <details>
      <summary>More</summary>

      [broken](missing.md)

      ## Hidden heading

      </details>

      [jump](#hidden-heading)
    MARKDOWN
    errors = check
    assert_equal 1, errors.size
    assert_includes errors.first, "missing.md"
    refute errors.any? { |error| error.include?("#hidden-heading") }
  end

  def test_unclosed_fence_extends_to_end_of_document
    write("README.md", "# Example\n\n```markdown\n[example](missing.md)\n## Not a heading\n")
    assert_empty check
  end

  def test_missing_markdown_image_is_reported
    write("README.md", "![illustration](assets/missing.png)\n")
    errors = check
    assert_equal 1, errors.size
    assert_includes errors.first, "assets/missing.png"
  end

  def test_symlink_cannot_make_an_outside_target_look_local
    Dir.mktmpdir("outside-doc-links-") do |outside|
      target = File.join(outside, "guide.md")
      File.write(target, "# External\n")
      File.symlink(target, File.join(@root, "linked.md"))
      write("README.md", "[linked](linked.md#external)\n")
      errors = check
      assert_equal 2, errors.size
      assert errors.all? { |error| error.include?("outside repository") }
    end
  end

  def test_cli_exit_status_and_failure_output
    script = File.expand_path("../scripts/check-documentation-links.rb", __dir__)
    write("README.md", "# Start\n[ok](#start)\n")
    stdout, stderr, status = Open3.capture3(RbConfig.ruby, script, chdir: @root)
    assert status.success?, stderr
    assert_includes stdout, "PASS:"
    write("README.md", "[bad](lost.md)\n")
    _stdout, stderr, status = Open3.capture3(RbConfig.ruby, script, chdir: @root)
    refute status.success?
    assert_includes stderr, "README.md:1:"
    assert_includes stderr, "lost.md"
  end
end
