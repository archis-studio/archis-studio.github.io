require "minitest/autorun"
require "jekyll"
require "nokogiri"
require "json"

class SearchDataTest < Minitest::Test
  def render_data(baseurl: "", pages: [], categories: [], posts: [])
    site = { "pages" => pages, "categories" => categories, "posts" => posts }
    configuration = Struct.new(:config).new({ "baseurl" => baseurl })
    html = Liquid::Template.parse(File.read("_includes/search-overlay.html")).render!(
      { "site" => site }, registers: { site: configuration }
    )
    document = Nokogiri::HTML(html)
    data = document.at_css('script#searchData[type="application/json"]')
    refute_nil data, "Search data must be inert JSON"
    [JSON.parse(data.text), document]
  end

  def test_existing_category_page_url_is_not_wrapped_in_another_categories_path
    data, = render_data(
      pages: [{ "layout" => "category-archive", "category" => "AI Tools", "url" => "/categories/ai-tools/", "permalink" => "/categories/ai-tools/" }],
      categories: [["AI Tools", [{}]]]
    )
    assert_equal "/categories/ai-tools/", data["categories"][0]["url"]
  end

  def test_category_urls_apply_baseurl_once_and_fallback_uses_a_slug
    data, = render_data(
      baseurl: "/preview",
      pages: [{ "layout" => "category-archive", "category" => "AI Tools", "url" => "/topics/ai/" }],
      categories: [["AI Tools", [{}]], ["Software Dev", [{}]]]
    )
    assert_equal ["/preview/topics/ai/", "/preview/categories/software-dev/"], data["categories"].map { |category| category["url"] }
  end

  def test_article_text_cannot_terminate_the_json_script_element
    title = '</script><img src=x onerror="alert(1)">'
    data, document = render_data(posts: [{ "title" => title, "url" => "/blog/test/", "categories" => [], "tags" => [] }])
    assert_equal title, data["posts"][0]["title"]
    assert_nil document.at_css("img")
    assert_equal [], data["posts"][0]["tags"]
  end
end
