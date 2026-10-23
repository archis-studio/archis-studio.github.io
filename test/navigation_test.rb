require "minitest/autorun"
require "jekyll"
require "nokogiri"

class NavigationTest < Minitest::Test
  def setup
    @site = Jekyll::Site.new(Jekyll.configuration(
      "quiet" => true, "remote_theme" => nil, "plugins" => [], "theme" => nil,
      "baseurl" => "/preview"
    ))
  end

  def render(path, variables)
    source = File.read(path).sub(/\A---\n.*?\n---\n/m, "")
    html = Liquid::Template.parse(source).render!({ "content" => "Article" }.merge(variables), registers: { site: @site })
    Nokogiri::HTML(html)
  end

  def posts(count, featured: true)
    Array.new(count) { |index| { "title" => "Post #{index}", "url" => "/blog/#{index}/", "featured" => featured } }
  end

  def homepage(entries)
    render("index.html", { "page" => {}, "site" => { "posts" => entries, "categories" => {} } })
  end

  def test_featured_posts_are_limited_to_four_in_existing_order
    document = homepage(posts(6))
    assert_equal ["Post 0", "Post 1", "Post 2", "Post 3"], document.css(".featured-card-title").map { |title| title.text.strip }
  end

  def test_latest_posts_fallback_is_also_limited_to_four
    assert_equal 4, homepage(posts(6, featured: false)).css(".featured-card").size
  end

  def test_fewer_featured_posts_are_not_padded_with_unfeatured_posts
    assert_equal 2, homepage(posts(2) + posts(4, featured: false)).css(".featured-card").size
    assert_equal 0, homepage([]).css(".featured-card").size
  end

  def test_article_tag_link_resolves_to_actual_tag_section_with_baseurl
    post = { "title" => "Example", "url" => "/blog/example/", "tags" => ["ChatGPT"] }
    data = { "posts" => [post], "tags" => [["ChatGPT", [post]]], "related_posts" => [] }
    article = render("_layouts/post.html", { "page" => post, "site" => data })
    tags = render("_layouts/tags.html", { "site" => data })
    href = article.at_css(".tag-link")["href"]
    assert_equal "/preview/tags/#tag-chatgpt", href
    assert tags.at_css("[id='#{href.split('#').last}']")
  end

  def test_tag_statistics_count_posts_once_without_javascript
    entries = posts(2)
    document = render("_includes/tag-cloud-compact.html", {
      "include" => { "id_prefix" => "tags" },
      "site" => { "posts" => entries, "tags" => [["AI", entries], ["ChatGPT", entries], ["Tools", entries]] }
    })
    assert_equal "2", document.at_css("#tags-total-posts").text
    assert_equal "3", document.at_css("#tags-total-tags").text
  end

  def test_tag_cloud_markup_provides_script_controls_and_data_for_each_prefix
    entries = posts(2)
    %w[posts tags].each do |prefix|
      document = render("_includes/tag-cloud-compact.html", {
        "include" => { "id_prefix" => prefix },
        "site" => { "posts" => entries, "tags" => [["ChatGPT", entries.first(1)], ["AI", entries]] }
      })
      ids = document.css("[id]").map { |node| node["id"] }
      assert_equal ids.uniq, ids, "#{prefix}: duplicate control ID"
      assert_equal 1, document.css("input.search-input-compact[id='#{prefix}-tag-search']").size
      assert_equal 1, document.css("button.search-clear-compact[id='#{prefix}-clear-search']").size
      clouds = document.css(".tag-cloud-container-compact[id='#{prefix}-tag-cloud']")
      assert_equal 1, clouds.size

      buttons = document.css(".sort-controls-compact button.sort-btn-compact")
      assert_equal [["name", prefix], ["popular", prefix]], buttons.map { |node|
        [node["data-sort"], node["data-group"]]
      }.sort
      items = clouds.first.css("a.tag-cloud-item-compact")
      assert_equal [["AI", "2", prefix], ["ChatGPT", "1", prefix]], items.map { |node|
        [node["data-tag"], node["data-count"], node["data-group"]]
      }
    end
  end

  def test_published_tag_names_do_not_collide_after_slugification
    names = Dir["_posts/*.md"].flat_map do |path|
      data = YAML.unsafe_load(File.read(path)[/\A---\n(.*?)\n---/m, 1])
      Array(data["tags"])
    end.uniq
    collisions = names.group_by { |name| Jekyll::Utils.slugify(name) }.select { |_slug, tags| tags.size > 1 }
    assert_empty collisions
  end

  def test_reading_time_rounds_up_every_500_text_characters_with_a_one_minute_minimum
    { 0 => 1, 1 => 1, 499 => 1, 500 => 1, 501 => 2, 1000 => 2, 1200 => 3, 3000 => 6 }.each do |length, minutes|
      document = render("_layouts/post.html", {
        "page" => { "title" => "Example" }, "site" => { "related_posts" => [] },
        "content" => "\n<p class=\"article-text\">#{'文' * length}</p>\n"
      })
      assert_equal "約 #{minutes} 分鐘閱讀", document.at_css(".reading-time").text.strip, "#{length} text characters"
    end
  end
end
