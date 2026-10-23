require "psych"

module SiteValidation
  class Error < StandardError; end

  def self.check_yaml(text, filename)
    visit = lambda do |node|
      if node.is_a?(Psych::Nodes::Mapping)
        keys = {}
        node.children.each_slice(2) do |key, _value|
          raise Error, "#{filename}: duplicate YAML key #{key.value.inspect} at line #{key.start_line + 1}" if keys[key.value]
          keys[key.value] = true
        end
      end
      Array(node.children).each { |child| visit.call(child) } if node.respond_to?(:children)
    end
    visit.call(Psych.parse_stream(text, filename: filename))
  end

  def self.check_html(path, selector)
    raise Error, "Missing output: #{path}" unless File.file?(path)
    document = Nokogiri::HTML(File.read(path))
    raise Error, "Missing #{selector} in #{path}" unless document.at_css(selector)
    document
  end

  def self.run
    require "jekyll"
    require "nokogiri"
    require "tmpdir"
    require "uri"
    require "json"

    root = File.expand_path("..", __dir__)
    Dir.chdir(root) do
      (["_config.yml"] + Dir.glob("{_data,.github/workflows}/**/*.{yml,yaml}")).each do |path|
        check_yaml(File.read(path), path)
      end
      ENV["JEKYLL_ENV"] = "production"
      Dir.mktmpdir("archis-validation-") do |destination|
        site = Jekyll::Site.new(Jekyll.configuration(
          "source" => root, "destination" => destination, "incremental" => false
        ))
        site.process

        routes = {
          "/" => ".home-page", "/posts/" => ".posts-archive",
          "/categories/" => "h1", "/about/" => "h1",
          "/tags/" => ".tags-page-container", "/certificates/" => "h1"
        }
        route_documents = routes.to_h do |route, selector|
          [route, check_html(File.join(destination, route.delete_prefix("/"), "index.html"), selector)]
        end
        documents = route_documents.values
        raise Error, "Homepage shows more than four featured posts" if route_documents.fetch("/").css(".featured-card").size > 4
        tag_page = route_documents.fetch("/tags/")
        tag_ids = tag_page.css(".tag-detail-section[id]").map { |section| section["id"] }
        raise Error, "Duplicate tag section IDs" unless tag_ids.uniq.size == tag_ids.size
        raise Error, "Incorrect tag page article count" unless tag_page.at_css("#tags-total-posts")&.text == site.posts.docs.size.to_s
        site.posts.docs.each do |post|
          path = post.destination(destination)
          document = check_html(path, "article.post-single .post-content")
          raise Error, "Missing article title: #{path}" unless document.at_css("h1.post-title")
          document.css(".tag-link").each do |link|
            raise Error, "Broken article tag link: #{link['href']}" unless tag_ids.include?(link["href"].split("#", 2).last)
          end
          documents << document
        end
        raise Error, "No published posts found" if site.posts.docs.empty?
        site.pages.select { |page| page.data["layout"] == "category-archive" }.each do |page|
          documents << check_html(page.destination(destination), ".posts-archive")
        end

        documents.each do |document|
          legacy_search = document.at_css(".search-content") || document.css("script[src]").any? { |script| script["src"].include?("/assets/js/lunr/") }
          raise Error, "Redundant theme search is still loaded" if legacy_search
          raise Error, "Expected one custom search overlay" unless document.css("#searchOverlay").size == 1
          search_data = document.at_css('script#searchData[type="application/json"]')
          raise Error, "Missing search JSON data" unless search_data
          search = JSON.parse(search_data.text)
          raise Error, "Search index omits published posts" unless search.fetch("posts").size == site.posts.docs.size
          (search.fetch("posts") + search.fetch("categories")).each do |entry|
            path = URI::DEFAULT_PARSER.unescape(entry.fetch("url"))
            baseurl = site.baseurl.to_s
            path = path.delete_prefix(baseurl) unless baseurl.empty?
            output = File.join(destination, path.delete_prefix("/"), "index.html")
            raise Error, "Broken search destination: #{entry.fetch('url')}" unless File.file?(output)
          end
          document.css("img[src], script[src], link[rel='stylesheet'][href]").each do |element|
            url = element["src"] || element["href"]
            next unless url.start_with?("/") && !url.start_with?("//")
            path = URI::DEFAULT_PARSER.unescape(url.split(/[?#]/).first)
            baseurl = site.baseurl.to_s
            path = path.delete_prefix(baseurl) unless baseurl.empty?
            asset = File.join(destination, path.delete_prefix("/"))
            raise Error, "Missing local asset: #{url}" unless File.file?(asset)
          end
        end
        stylesheet = File.join(destination, "assets/css/main.css")
        raise Error, "Missing or empty main stylesheet" unless File.file?(stylesheet) && File.size(stylesheet).positive?
        %w[scripts test docs].each do |directory|
          raise Error, "Development files published: #{directory}" if File.exist?(File.join(destination, directory))
        end
        puts "PASS: production build, #{site.posts.docs.size} article layouts, #{documents.size} pages, search destinations, local assets and publish exclusions"
      end
    end
  end
end

if $PROGRAM_NAME == __FILE__
  begin
    SiteValidation.run
  rescue SiteValidation::Error, Psych::SyntaxError => error
    warn "FAIL: #{error.message}"
    exit 1
  end
end
