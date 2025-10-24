# 開發指南 - Development Guide

## 🚀 本地開發環境啟動

### 前置需求
- Ruby 3.3.10 (透過 rbenv 管理)
- Bundler
- Jekyll 4.4.1

### 啟動本地伺服器

#### 標準啟動（推薦）
```bash
bundle exec jekyll serve --livereload
```

訪問網址：`http://localhost:4000`

#### 其他啟動選項

**僅建置（不啟動伺服器）**：
```bash
bundle exec jekyll build
```

**指定 Port**：
```bash
bundle exec jekyll serve --port 4001
```

**增量建置（faster）**：
```bash
bundle exec jekyll serve --incremental --livereload
```

**草稿模式（顯示 _drafts）**：
```bash
bundle exec jekyll serve --drafts --livereload
```

**顯示未來文章**：
```bash
bundle exec jekyll serve --future --livereload
```

---

## 🔧 常用指令

### Ruby 環境
```bash
# 檢查當前 Ruby 版本
ruby --version

# 檢查 Jekyll 版本
bundle exec jekyll --version

# 更新 Gems
bundle update

# 清除建置快取
bundle exec jekyll clean
```

### 開發流程
```bash
# 1. 啟動開發伺服器
bundle exec jekyll serve --livereload

# 2. 在瀏覽器開啟
open http://localhost:4000

# 3. 編輯檔案，LiveReload 會自動重新整理頁面

# 4. 完成後按 Ctrl+C 停止伺服器
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

## ⚠️ 常見問題

### 1. LiveReload 不工作
重新啟動伺服器：
```bash
bundle exec jekyll serve --livereload --force_polling
```

### 2. Sass Deprecation 警告
這些是 Minimal Mistakes 主題的警告，不影響功能。可以忽略或使用 `--quiet` 減少輸出：
```bash
bundle exec jekyll serve --quiet --livereload
```

### 3. Port 已被佔用
指定其他 port：
```bash
bundle exec jekyll serve --port 4001 --livereload
```

### 4. 清除快取重建
```bash
bundle exec jekyll clean
bundle exec jekyll serve --livereload
```

---

## 🎨 自訂樣式開發

### SCSS 檔案位置
- `_sass/design-system/` - 設計系統變數與元件
- `assets/css/main.scss` - 主樣式入口

### 修改後重新整理
Jekyll 會自動偵測 SCSS 變更並重新編譯，LiveReload 會自動刷新瀏覽器。

---

## 📦 部署

### GitHub Pages 部署
```bash
# 1. 確保所有變更已提交
git status

# 2. 推送到 GitHub
git push origin main

# 3. GitHub Pages 會自動建置並部署
```

**注意**：由於使用 Jekyll 4.x，需要設定 GitHub Actions workflow（而非直接用 GitHub Pages 建置）。

---

## 🔍 除錯技巧

### 詳細輸出模式
```bash
bundle exec jekyll serve --verbose --livereload
```

### 檢查設定
```bash
bundle exec jekyll doctor
```

### 查看環境資訊
```bash
bundle exec jekyll build --profile
```

---

**最後更新**: 2025-10-24  
**Jekyll 版本**: 4.4.1  
**Ruby 版本**: 3.3.10
