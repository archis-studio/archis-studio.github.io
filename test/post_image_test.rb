require "minitest/autorun"
require "jekyll"
require "nokogiri"

class PostImageTest < Minitest::Test
  def setup
    @site = Jekyll::Site.new(Jekyll.configuration(
      "quiet" => true, "remote_theme" => nil, "plugins" => [], "theme" => nil,
      "baseurl" => "/preview"
    ))
    @post = {
      "title" => 'Title "quoted"', "image_alt" => 'Cover "description"',
      "url" => "/blog/example/", "featured" => true,
      "header" => { "teaser" => "/thumb.webp", "teaser_width" => 640, "teaser_height" => 426,
                    "image" => "/cover.webp", "image_width" => 1280, "image_height" => 852 }
    }
  end

  def render(path, variables)
    source = File.read(path).sub(/\A---\n.*?\n---\n/m, "")
    html = Liquid::Template.parse(source).render!({ "content" => "Article" }.merge(variables), registers: { site: @site })
    Nokogiri::HTML(html)
  end

  def test_archive_card_shares_cover_with_intrinsic_dimensions_and_safe_alt
    image = render("_includes/post-card.html", { "post" => @post }).at_css("img")
    assert_equal "/preview/cover.webp", image["src"]
    assert_equal "1280", image["width"]
    assert_equal "852", image["height"]
    assert_equal "lazy", image["loading"]
    assert_equal 'Cover "description"', image["alt"]
    assert_nil image["description"]
  end

  def test_article_loads_shared_cover_eagerly
    image = render("_layouts/post.html", { "page" => @post, "content" => "Article", "site" => { "related_posts" => [] } }).at_css(".post-featured-image img")
    assert_equal "/preview/cover.webp", image["src"]
    assert_equal "1280", image["width"]
    assert_equal "852", image["height"]
    assert_equal "eager", image["loading"]
    assert_equal "high", image["fetchpriority"]
  end

  def test_homepage_uses_teaser_when_article_only_has_a_teaser
    @post["header"].delete("image")
    document = render("index.html", { "page" => {}, "site" => { "posts" => [@post], "categories" => {} } })
    image = document.at_css(".featured-card-image img")
    refute_nil image
    assert_equal "/preview/thumb.webp", image["src"]
    assert_equal "lazy", image["loading"]
  end

  def test_archive_falls_back_to_cover_if_no_teaser_is_available
    @post["header"].delete("teaser")
    image = render("_includes/post-card.html", { "post" => @post }).at_css("img")
    refute_nil image
    assert_equal "/preview/cover.webp", image["src"]
    assert_equal "1280", image["width"]
  end

  def test_article_falls_back_to_legacy_teaser_with_matching_dimensions
    @post["header"].delete("image")
    image = render("_layouts/post.html", { "page" => @post, "site" => { "related_posts" => [] } }).at_css(".post-featured-image img")
    assert_equal "/preview/thumb.webp", image["src"]
    assert_equal "640", image["width"]
  end

  def test_article_without_images_does_not_render_a_broken_image
    @post.delete("header")
    document = render("_layouts/post.html", { "page" => @post, "site" => { "related_posts" => [] } })
    assert_nil document.at_css(".post-featured-image")
  end

  def test_related_posts_share_cover_with_lazy_loading
    document = render("_layouts/post.html", { "page" => @post, "site" => { "related_posts" => [@post] } })
    image = document.at_css(".related-post__image img")
    assert_equal "/preview/cover.webp", image["src"]
    assert_equal "lazy", image["loading"]
    assert_equal "1280", image["width"]
  end

  def test_legacy_image_without_dimensions_does_not_get_invented_dimensions
    @post["header"] = { "teaser" => "https://example.test/legacy.jpg" }
    image = render("_includes/post-card.html", { "post" => @post }).at_css("img")
    assert_equal "https://example.test/legacy.jpg", image["src"]
    assert_nil image["width"]
    assert_nil image["height"]
  end
end
