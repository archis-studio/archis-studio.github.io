source "https://rubygems.org"

# Jekyll 4.x - Latest stable version with Ruby 3.3+
gem "jekyll", "~> 4.4.0"

# Minimal Mistakes theme - Latest version
gem "minimal-mistakes-jekyll", "~> 4.27.0"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-include-cache", "~> 0.2"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-gist", "~> 1.5"
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