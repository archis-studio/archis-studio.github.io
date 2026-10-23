# 開發指南 - Development Guide
# Version 2.0.5 | Updated: 2026-10-23

> **技術文件** - 本地開發環境設定、常用指令與故障排除

📖 **另見**: [`README.md`](README.md) - 專案概覽 | [`agents.MD`](agents.MD) - AI 協作規範

---

## 📋 Prerequisites

### System Requirements
- **OS**: macOS / Linux / Windows WSL
- **Ruby**: 3.3.10 (via rbenv)
- **Bundler**: 2.5.22
- **Jekyll**: 3.10.0

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
cd /path/to/archis-studio.github.io

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
bundle exec jekyll -v   # Should show: 3.10.0

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

### 現有部署方式

GitHub Pages API 於 2026-10-23 確認：`build_type: legacy`，從 `main` 分支根目錄 `/` 建置。實際部署狀態與來源應以 repository Settings → Pages 為準。

本專案使用 `github-pages ~> 232`，lockfile 中的 Jekyll 為 3.10.0、Minimal Mistakes 固定為 4.27.0。`.ruby-version` 為本機與驗證 workflow 的 Ruby 版本來源；它不控制 GitHub Pages 的內建建置環境。

### 自動驗證（不部署）

`.github/workflows/validate.yml` 在 PR、push 或手動執行時：

1. 依 `.ruby-version` 與 `Gemfile.lock` 安裝套件，啟用 `BUNDLE_FROZEN`，禁止自動改寫 lockfile。
2. 執行 `test/*_test.rb` 的 Ruby 設定／Liquid 回歸測試。
3. 使用 Node 24 與 `test/package-lock.json` 安裝 jsdom 測試依賴，執行搜尋 DOM 測試。
4. 執行 `bundle exec ruby scripts/validate.rb`。

驗證工作僅使用 `contents: read`，不要求部署 secret、不發布網站、不修改 Pages 設定。它與 legacy Pages 部署獨立運作；如果要在合併前強制通過，需另行設定 branch protection required status check：`Validate site / validate`（以 GitHub 顯示的 check 名稱為準）。直接 push 到 main 仍可能觸發部署，不會等待這個驗證工作。

### 更新上線流程

1. 先在本機執行下方驗證指令。
2. 在 PR 檢查 `Validate site` 通過，並完成頁面預覽。
3. 人類確認後才 commit／push／merge，依當次指示操作。
4. 確認 GitHub Pages 實際建置與部署成功，再檢查線上頁面。

本機驗證不等於遠端部署成功；GitHub 權限、服務狀態與網路仍可能造成獨立失敗。

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

### 提交前驗證

```bash
bundle check
bundle exec ruby -Itest -e 'Dir["test/*_test.rb"].sort.each { |file| require_relative file }'
npm ci --prefix test --ignore-scripts --no-audit --no-fund
npm test --prefix test
bundle exec ruby scripts/validate.rb
```

驗證程式會檢查設定／資料／workflow YAML 的重複 key，在全新的暫存目錄執行 production build，檢查主要頁面、所有已發布文章版型、分類頁、本地圖片／script／stylesheet 資源，以及開發檔案排除規則。暫存輸出在結束時自動清除，不使用舊 `_site` 判定成功。

遠端主題需要網路；下載失敗時應排除網路問題後重試，不要跳過檢查。這個 smoke check 不執行瀏覽器 JavaScript、不驗證所有連結或第三方服務，不取代響應式／視覺測試。

補充診斷可使用 `bundle exec jekyll doctor`，但它不會驗證所有 HTML 與連結。

### 搜尋回歸測試

需要 Node 24（jsdom 28.1.0 支援 Node >=24.0.0）。Node 只用於測試，不參與 legacy Pages 的網站建置。`test/` 與 `node_modules/` 不會發布。

`test/search_test.cjs` 使用 jsdom 執行實際 `assets/js/search.js`，涵蓋中文／特殊符號、文字安全呈現、結果排序與上限、清空選取、IME、Tab／Escape 與焦點還原。`test/search_data_test.rb` 驗證 Liquid 輸出的分類 URL、baseurl 與 JSON script 安全。

jsdom 不實作真實瀏覽器版面，仍需手動確認手機／平板／桌面搜尋視窗、可見焦點與捲動。

### 共用文章封面

本機需要 ImageMagick（`magick`），GitHub Pages 不需要安裝圖片工具。產生後的圖片直接加入版本控制：

```bash
bash scripts/generate-post-images.sh assets/images/posts/example.png
```

程式保留原圖、維持比例、不放大，只產生一張最大寬度 1280px 的 `example-cover.webp`（quality 82），供首頁卡片、文章列表、相關文章與文章頁共用。如果轉換後不比原圖小，會移除該衍生檔並提示繼續使用原圖。請目視檢查畫質，再填入實際尺寸：

```yaml
header:
  image: /assets/images/posts/example-cover.webp
  image_width: 1280
  image_height: 853
```

高度僅為範例，必須填入檔案的實際尺寸。`_includes/post-image.html` 在所有位置優先使用同一個 `header.image`：卡片延遲載入；文章封面立即載入並提高優先權。舊文章只有 `header.teaser` 時仍可 fallback；缺少尺寸的舊圖不會輸出假的尺寸值。不需要另外維護縮圖或重複的 teaser 欄位。

頂層 `image` 是社群分享圖片，本次保留原始 PNG/JPEG。既有 CSS 控制卡片裁切，不改變圖片本身構圖。`test/post_image_test.rb` 由既有 Ruby workflow 自動執行，Pages 使用已生成的檔案，不執行圖片轉換。

### 文章導覽與首頁驗證

- 文章標籤連結與標籤頁統一採用 `tag-` 錨點；標籤名稱應統一大小寫，避免 slug 相同造成重複 ID。
- 目錄保留 Markdown／自訂 heading ID；只有缺少 ID 時才生成不撞名的 fallback，標題以文字節點呈現。
- 首頁精選最多四篇；沒有精選時顯示最新四篇，有少量精選時不混入其他文章。
- 標籤／文章總數由 Liquid 直接輸出，不加總每個標籤的文章數，因此不會重複計算。
- `test/navigation_test.rb`、`test/navigation_test.cjs` 分別檢查模板輸出與實際 inline JavaScript。`npm test --prefix test` 執行全部 `*_test.cjs`。
- production 驗證額外檢查標籤 ID 唯一性、文章標籤目標、文章統計及首頁卡片上限。閱讀時間以移除 HTML、修剪首尾空白後的字元數計算：每 500 字元一分鐘，向上取整，至少一分鐘；不區分中英文，不新增手動設定欄位。

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

**Last Updated**: 2026-10-23
**Version**: 2.0.5
**Jekyll**: 3.10.0 | **Ruby**: 3.3.10 | **Theme**: Minimal Mistakes 4.27.0

---

## 📝 Changelog

### v2.0.5 (2026-10-23)
- 閱讀時間簡化為每 500 字元一分鐘，補上取整與最小值邊界測試。

### v2.0.4 (2026-10-23)
- 記錄文章標籤、目錄錨點、首頁精選上限與唯一文章統計規則。
- 新增導覽模板／DOM 回歸測試及 production 驗證說明。

### v2.0.3 (2026-10-23)
- 新增本機圖片壓縮流程與共用封面載入規則；依使用者決定，每篇只維護一張壓縮圖。
- 說明保留原圖、只縮不放大與轉換未節省容量時的處理。

### v2.0.2 (2026-10-23)
- 新增搜尋 DOM／Liquid 回歸測試與 Node 測試環境說明。
- 驗證 workflow 執行全部 Ruby 測試與搜尋互動測試。

### v2.0.1 (2026-10-23)
- 校正實際 Jekyll／主題版本與 legacy Pages 部署方式。
- 新增 production 輸出驗證與自動檢查說明，區分驗證與部署。

### v2.0.0 (2025-10-26)
- ✅ Core implementation complete
- ✅ All pages functional (Home, About, Posts, Article)
- ✅ Custom layouts and components
- ✅ Design system fully implemented
- ✅ Responsive design optimized

### v1.0.0 (2025-10-24)
- Initial project setup
- Basic Jekyll configuration
- Minimal Mistakes theme integration
