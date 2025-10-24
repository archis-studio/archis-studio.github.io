# 開發指南 - Development Guide

> **技術文件** - 本地開發環境設定、常用指令與故障排除

📖 **另見**: [`README.md`](README.md) - 專案概覽 | [`agents.MD`](agents.MD) - AI 協作規範

---

## 📋 Prerequisites

### System Requirements
- **OS**: macOS / Linux / Windows WSL
- **Ruby**: 3.3.10 (via rbenv)
- **Bundler**: 2.5.22
- **Jekyll**: 4.4.1

### Initial Setup

#### 1. Install rbenv (if not installed)
```bash
# macOS with Homebrew
brew install rbenv ruby-build

# Add to shell (~/.zshrc or ~/.bashrc)
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc
```

#### 2. Install Ruby 3.3.10
```bash
rbenv install 3.3.10
rbenv local 3.3.10
```

#### 3. Install Dependencies
```bash
bundle install
```

---

## ⚠️ Troubleshooting First-Time Setup

### Issue: `Could not find 'bundler'` error

**原因**: Shell 還在使用系統的舊版 Ruby

**解決方法**:
```bash
# 方法 1: 重新載入 shell 配置
source ~/.zshrc  # or ~/.bashrc

# 方法 2: 重新開啟終端機視窗

# 驗證 Ruby 版本
ruby --version
# 應該顯示: ruby 3.3.10 (2025-10-23 revision 343ea05002)
```

### Issue: Ruby 版本還是 2.6.10

**檢查 rbenv 是否正確初始化**:
```bash
# 檢查 rbenv 路徑
which rbenv
# 應該顯示: /opt/homebrew/bin/rbenv

# 檢查 Ruby 來源
which ruby
# 應該顯示: /Users/<username>/.rbenv/shims/ruby

# 如果顯示 /usr/bin/ruby，表示 rbenv 未生效
```

**修復方法**:
```bash
# 確認 .zshrc 有 rbenv init
grep rbenv ~/.zshrc

# 如果沒有，手動加入
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc
```

---

## 🚀 Local Development

### Standard Workflow

```bash
# 1. Navigate to project
cd /path/to/magicxcr7.github.io

# 2. Start development server
bundle exec jekyll serve --livereload

# 3. Open browser
# Visit: http://localhost:4000

# 4. Edit files - LiveReload auto-refreshes browser

# 5. Stop server (when done)
# Press Ctrl+C
```

### Jekyll Commands

#### Basic Commands
```bash
# Build site (output to _site/)
bundle exec jekyll build

# Serve with live reload (recommended)
bundle exec jekyll serve --livereload

# Serve on different port
bundle exec jekyll serve --port 4001 --livereload

# Clean build artifacts
bundle exec jekyll clean
```

#### Advanced Options
```bash
# Incremental build (faster, but may have cache issues)
bundle exec jekyll serve --incremental --livereload

# Show draft posts (from _drafts/)
bundle exec jekyll serve --drafts --livereload

# Show future-dated posts
bundle exec jekyll serve --future --livereload

# Quiet mode (less output)
bundle exec jekyll serve --quiet --livereload

# Verbose mode (debug output)
bundle exec jekyll serve --verbose --livereload

# Force polling (if LiveReload not working)
bundle exec jekyll serve --livereload --force_polling
```

---

### Environment Management

```bash
# Check versions
ruby --version          # Should show: 3.3.10
bundle --version        # Should show: 2.5.22
bundle exec jekyll -v   # Should show: 4.4.1

# Update dependencies
bundle update           # Update all gems
bundle update jekyll    # Update specific gem

# Check for issues
bundle exec jekyll doctor

# View build performance
bundle exec jekyll build --profile
```

---

## 📝 建立新內容

### 新增文章
```bash
# 在 _posts/ 目錄建立檔案，格式：YYYY-MM-DD-title.md
touch _posts/2025-10-24-my-new-post.md
```

文章 Front Matter 範例：
```yaml
---
title: "文章標題"
categories: [AI, Coding]
tags: [tutorial, jekyll]
toc: true
toc_sticky: true
---

文章內容...
```

### 新增頁面
```bash
# 在 _pages/ 目錄建立檔案
touch _pages/my-page.md
```

頁面 Front Matter 範例：
```yaml
---
layout: single
title: "頁面標題"
permalink: /my-page/
author_profile: true
---

頁面內容...
```

---

## 🐛 Common Issues & Solutions

### LiveReload Not Working
```bash
# Try force polling
bundle exec jekyll serve --livereload --force_polling

# Or restart with full rebuild
bundle exec jekyll clean
bundle exec jekyll serve --livereload
```

### Sass Deprecation Warnings
這些是 Minimal Mistakes 主題的警告（上游問題），不影響功能。

**Options**:
```bash
# Suppress warnings with quiet mode
bundle exec jekyll serve --quiet --livereload

# Or ignore them (they're harmless)
bundle exec jekyll serve --livereload
```

### Port Already in Use
```bash
# Find process using port 4000
lsof -ti:4000

# Kill the process
kill -9 $(lsof -ti:4000)

# Or use different port
bundle exec jekyll serve --port 4001 --livereload
```

### Stale Cache Issues
```bash
# Clean all caches
bundle exec jekyll clean
rm -rf _site .jekyll-cache .sass-cache

# Rebuild from scratch
bundle exec jekyll build
```

### Bundler Version Mismatch
```bash
# Check Gemfile.lock for bundler version
grep -A1 "BUNDLED WITH" Gemfile.lock

# Install specific bundler version
gem install bundler:2.5.22

# Or update Gemfile.lock
bundle update --bundler
```

---

## 🎨 自訂樣式開發

### SCSS 檔案位置
- `_sass/design-system/` - 設計系統變數與元件
- `assets/css/main.scss` - 主樣式入口

### 修改後重新整理
Jekyll 會自動偵測 SCSS 變更並重新編譯，LiveReload 會自動刷新瀏覽器。

---

## 📦 Deployment

### GitHub Actions (Required for Jekyll 4.x)

由於使用 Jekyll 4.4.1，GitHub Pages 無法直接建置（僅支援 3.9.x）。需要使用 GitHub Actions。

**Workflow 範例** (`.github/workflows/jekyll.yml`):
```yaml
name: Deploy Jekyll site

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.3.10'
          bundler-cache: true
      
      - name: Build site
        run: bundle exec jekyll build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

### Manual Deployment Steps
```bash
# 1. Ensure all changes committed
git status

# 2. Build locally (optional - test first)
bundle exec jekyll build

# 3. Push to GitHub
git push origin main

# 4. GitHub Actions will auto-build and deploy
```

---

## 🎨 Custom Development

### SCSS Structure
```
_sass/
├── design-system/
│   ├── _variables.scss      # Colors, fonts, spacing
│   ├── _components.scss     # Reusable components
│   └── _utilities.scss      # Helper classes
└── custom/
    ├── _masthead.scss       # Navigation customization
    └── _overrides.scss      # Theme overrides
```

### Adding Custom Styles

**1. Edit SCSS files in `_sass/`**:
```scss
// _sass/design-system/_variables.scss
$custom-color: #D4A017;
```

**2. Import in main.scss**:
```scss
// assets/css/main.scss
---
---
@import "minimal-mistakes/skins/dark";
@import "minimal-mistakes";
@import "design-system/variables";
@import "custom/overrides";
```

**3. Jekyll auto-compiles on save** (with LiveReload)

---

## 🧪 Testing & Quality

### Pre-commit Checks
```bash
# Validate HTML/links
bundle exec jekyll doctor

# Build performance check
bundle exec jekyll build --profile

# Check for broken links (if installed)
bundle exec htmlproofer ./_site --disable-external
```

### Browser Testing
- **Chrome/Edge**: Primary testing
- **Firefox**: Secondary testing
- **Safari**: macOS/iOS testing
- **Mobile**: Responsive design testing

---

## 📚 Useful Resources

### Jekyll Documentation
- [Jekyll Official Docs](https://jekyllrb.com/docs/)
- [Minimal Mistakes Docs](https://mmistakes.github.io/minimal-mistakes/docs/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

### Tools
- [Jekyll Cheatsheet](https://devhints.io/jekyll)
- [YAML Validator](https://www.yamllint.com/)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Last Updated**: 2025-10-24  
**Jekyll**: 4.4.1 | **Ruby**: 3.3.10 | **Theme**: Minimal Mistakes 4.27.3
