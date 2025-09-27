# My Personal Blog

This is my personal blog hosted on GitHub Pages using Jekyll.

## 🌐 Live Site
Visit the blog at: [https://magicxcr7.github.io](https://magicxcr7.github.io)

## 📝 Features
- Clean, responsive design using Jekyll's Dinky theme
- Blog post listings and individual post pages
- About page with personal information
- Automatic RSS feed generation
- SEO-friendly URLs and meta tags

## 🚀 Local Development

To run this site locally:

```bash
# Clone the repository
git clone https://github.com/magicxcr7/magicxcr7.github.io.git
cd magicxcr7.github.io

# Install Jekyll and dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve
```

Visit `http://localhost:4000` to view the site.

## ✍️ Adding New Posts

Create new blog posts in the `_posts` directory with the filename format:
`YYYY-MM-DD-post-title.md`

Each post should include front matter:
```yaml
---
layout: default
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +0000
categories: [category1, category2]
tags: [tag1, tag2]
---
```

## 📄 Pages
- **Home** (`/`) - Homepage with recent posts
- **Blog** (`/blog/`) - All blog posts
- **About** (`/about/`) - About me page

## 🛠️ Built With
- [Jekyll](https://jekyllrb.com/) - Static site generator
- [GitHub Pages](https://pages.github.com/) - Hosting
- [Dinky Theme](https://github.com/pages-themes/dinky) - Jekyll theme
