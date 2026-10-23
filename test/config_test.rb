require "minitest/autorun"
require "jekyll"
require "nokogiri"
require "tmpdir"
require_relative "../scripts/validate"

class ConfigTest < Minitest::Test
  def test_rejects_duplicate_keys_before_values_are_lost
    error = assert_raises(SiteValidation::Error) do
      SiteValidation.check_yaml("defaults: []\ndefaults: []\n", "example.yml")
    end
    assert_match(/defaults/, error.message)
  end

  def test_rejects_nested_duplicates_but_allows_keys_in_separate_mappings
    assert_raises(SiteValidation::Error) do
      SiteValidation.check_yaml("author:\n  name: A\n  name: B\n", "example.yml")
    end
    SiteValidation.check_yaml("first:\n  name: A\nsecond:\n  name: B\n", "example.yml")
  end

  def test_scoped_defaults_and_social_fallback_coexist
    SiteValidation.check_yaml(File.read("_config.yml"), "_config.yml")
    site = Jekyll::Site.allocate
    site.instance_variable_set(:@config, Jekyll.configuration("quiet" => true))
    site.instance_variable_set(:@source, Dir.pwd)
    defaults = Jekyll::FrontmatterDefaults.new(site)
    assert_equal "post", defaults.find("_posts/example.md", :posts, "layout")
    assert_equal true, defaults.find("_posts/example.md", :posts, "comments")
    assert_equal "single", defaults.find("_pages/example.md", :pages, "layout")
    assert_equal "home", defaults.find("index.html", :pages, "layout")
    assert_equal "/favicon.png", defaults.find("_posts/example.md", :posts, "image")
  end

  def test_build_output_requires_article_markup_not_just_an_html_file
    Dir.mktmpdir do |directory|
      path = File.join(directory, "index.html")
      File.write(path, "<html><body><p>Unwrapped article</p></body></html>")
      assert_raises(SiteValidation::Error) do
        SiteValidation.check_html(path, "article.post-single .post-content")
      end
      File.write(path, '<article class="post-single"><div class="post-content">Article</div></article>')
      assert SiteValidation.check_html(path, "article.post-single .post-content")
    end
  end
end
