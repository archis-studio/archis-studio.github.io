# Archis Digital Compass

**透過科技與 AI，成就每一個人的成長**

A professional blog and portfolio website built with Jekyll and the Minimal Mistakes theme, focused on technology, data science, and digital strategy insights.

## 🌐 Live Site
Visit: [https://magicxcr7.github.io](https://magicxcr7.github.io)

## 🎯 Content Focus Areas

### Technical Excellence
- **Programming & Backend**: Server-side development, APIs, system architecture
- **Data Engineering**: ETL pipelines, data warehousing, big data processing
- **Data Science**: Machine learning, analytics, visualization

### Business Strategy  
- **Digital Advertising**: Marketing analytics, campaign optimization
- **Energy Management**: Smart grid technology, renewable energy solutions
- **Personal Growth**: Tech-driven productivity and self-improvement

## 🚀 Features

- **Minimal Mistakes Theme**: Professional, responsive Jekyll theme
- **Category Organization**: Clean taxonomy for content discovery
- **Portfolio Showcase**: Project case studies with detailed technical insights
- **SEO Optimized**: Structured data, social media integration, analytics ready
- **Performance Focused**: Fast loading, mobile-optimized, accessible design

## 📁 Site Structure

```
├── _config.yml              # Site configuration
├── _data/
│   └── navigation.yml       # Menu structure
├── _pages/                  # Static pages
│   ├── about.md            # About page
│   ├── categories.md       # Category archive
│   ├── tags.md             # Tag archive
│   ├── posts.md            # All posts
│   └── portfolio.md        # Portfolio overview
├── _posts/                  # Blog posts
├── _portfolio/             # Portfolio items
├── _sass/                  # Custom styling
├── assets/
│   └── images/             # Site images
└── index.html              # Homepage
```

## ✍️ Content Creation

### Writing New Posts

Create files in `_posts/` with the naming convention: `YYYY-MM-DD-post-title.md`

```yaml
---
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +0800
categories: [primary-category, secondary-category]
tags: [specific, searchable, keywords]
header:
  overlay_color: "#2c3e50"
  overlay_image: /assets/images/your-header.jpg
  teaser: /assets/images/your-teaser.jpg
excerpt: "Compelling summary for social sharing and SEO"
toc: true
toc_sticky: true
---

Your content here...

<!--more-->

Extended content after the excerpt break...
```

### Available Categories
- `technical` - Core programming and development
- `backend` - Server-side and infrastructure
- `data-engineering` - ETL, pipelines, data architecture  
- `data-science` - ML, analytics, visualization
- `energy-management` - Smart grid, renewable energy
- `digital-advertising` - Marketing analytics, campaigns
- `personal-growth` - Productivity, career development

### Adding Portfolio Items

Create files in `_portfolio/` directory:

```yaml
---
title: "Project Name"
excerpt: "Brief project description for listings"
header:
  image: /assets/images/portfolio-project.jpg
  teaser: /assets/images/portfolio-project-th.jpg
sidebar:
  - title: "Technologies"
    text: "Tech stack used"
  - title: "Category"
    text: "Project category"
---

Project details, implementation, and results...
```

## 🎨 Visual Assets

### Required Images
Add these images to `/assets/images/`:

#### Site Branding
- `bio-photo.jpg` (400x400px) - Your profile photo
- `logo.png` (120x120px) - Site logo
- `teaser-default.jpg` (400x200px) - Default post teaser

#### Header Images (1200x600px)
- `header-home.jpg` - Homepage hero
- `header-about.jpg` - About page header
- `header-categories.jpg` - Categories page
- `header-posts.jpg` - Blog listing
- `header-portfolio.jpg` - Portfolio page
- Category-specific headers for each focus area

#### Feature Images (400x300px)
- `feature-technical.jpg` - Technical content highlight
- `feature-data.jpg` - Data science highlight  
- `feature-growth.jpg` - Personal growth highlight

### Image Optimization
- **Headers**: 1200x600px, JPEG, <200KB
- **Teasers**: 400x200px, JPEG, <50KB
- **Profile**: 400x400px, JPEG, <100KB
- Use descriptive alt text for accessibility

## 🛠️ Local Development

### Prerequisites
- Ruby 2.7+ 
- Bundler gem
- Git

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/magicxcr7/magicxcr7.github.io.git
cd magicxcr7.github.io

# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Access at http://localhost:4000
```

### Development Workflow

```bash
# Create new post
touch _posts/$(date +%Y-%m-%d)-your-post-title.md

# Add images to assets/images/

# Test locally
bundle exec jekyll serve

# Commit and push
git add .
git commit -m "Add new post: Your Post Title"
git push origin main

# Site updates automatically via GitHub Pages
```

## ⚙️ Configuration

### Theme Customization
- **Color Scheme**: Edit `_sass/minimal-mistakes/skins/_custom.scss`
- **Navigation**: Modify `_data/navigation.yml`
- **Site Settings**: Update `_config.yml`

### Analytics & SEO
- Add Google Analytics tracking ID in `_config.yml`
- Configure social media metadata
- Submit sitemap to search engines

### Performance Optimization
- Compress images before uploading
- Use Jekyll's built-in SASS compilation
- Enable GitHub Pages CDN (automatic)
- Monitor site speed with Google PageSpeed Insights

## 📈 Content Strategy

### Publishing Schedule
- **Weekly Posts**: Aim for consistent 1-2 posts per week
- **Series Content**: Multi-part tutorials and deep dives
- **Portfolio Updates**: Quarterly project showcases

### SEO Best Practices
- **Descriptive Titles**: Include target keywords naturally
- **Meta Descriptions**: Compelling 150-160 character excerpts
- **Internal Linking**: Cross-reference related posts
- **Image Alt Text**: Descriptive, accessible image descriptions
- **Schema Markup**: Automatic via jekyll-seo-tag plugin

### Engagement Optimization
- **Clear Value Proposition**: Lead with practical benefits
- **Actionable Content**: Include downloadable resources
- **Visual Elements**: Screenshots, diagrams, code examples
- **Call-to-Actions**: Guide readers to next steps

## 🔧 Maintenance

### Regular Tasks
- **Monthly**: Review and update outdated content
- **Quarterly**: Check all external links
- **Bi-annually**: Update dependencies and theme
- **Annually**: Review and optimize site performance

### Backup Strategy
- **Git History**: Complete version control via GitHub
- **Image Assets**: Store originals in separate repository/cloud storage
- **Content Export**: Regular JSON exports for migration flexibility

## 📞 Support & Contact

- **Site Issues**: Create GitHub issue in repository
- **Content Questions**: Email [magic83w@gmail.com](mailto:magic83w@gmail.com)
- **Collaboration**: Professional inquiries welcome

## 📄 License

Content is licensed under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/).
Code examples are licensed under [MIT License](https://opensource.org/licenses/MIT).

---

**Built with ❤️ using Jekyll and Minimal Mistakes**

*Empowering growth through technology & AI* 🚀
