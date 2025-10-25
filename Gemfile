source "https://rubygems.org"

# GitHub Pages - Use github-pages gem for compatibility
gem "github-pages", "~> 232", group: :jekyll_plugins

# Remote theme support (already included in github-pages, but explicit for clarity)
gem "jekyll-remote-theme", group: :jekyll_plugins

# Additional Jekyll plugins (most are already in github-pages)
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-include-cache"
  gem "jekyll-paginate"
  gem "jekyll-gist"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Required for Ruby 3.0+
gem "webrick", "~> 1.8"