# 🚀 本地開發環境設置指南

**快速啟動 Jekyll 部落格進行本地測試與開發**

## 📋 系統需求

- **Ruby** 2.7+ (建議使用 rbenv 管理版本)
- **Bundler** gem 管理工具
- **Git** 版本控制

## ⚡ 快速啟動步驟

### 1. 安裝相依套件
```bash
# 安裝 bundler (如果尚未安裝)
gem install bundler

# 安裝專案相依套件
bundle install
```

### 2. 啟動開發伺服器 (Gaming Style)
```bash
# 啟動 Jekyll 開發伺服器 (含自動重新載入)
bundle exec jekyll serve --livereload

# 或使用簡化指令
bundle exec jekyll s -l

# 🎮 Gaming Style 專用測試指令
bundle exec jekyll serve --livereload --future --drafts
```

### 3. 瀏覽網站
開啟瀏覽器，前往: **http://localhost:4000**

**🎯 重點測試頁面**:
- **首頁**: http://localhost:4000 - AI Gaming Hero Section
- **關於頁面**: http://localhost:4000/about/ - 個人介紹
- **文章列表**: http://localhost:4000/posts/ - 所有文章
- **分類頁面**: http://localhost:4000/categories/ - 按分類瀏覽

**🎨 設計重點檢查**:
- [ ] 像素風格的 terminal 動畫
- [ ] Neural network 節點脈動效果
- [ ] Gaming panel 發光邊框
- [ ] Responsive 在手機上的顯示
- [ ] 深色背景與霓虹配色

## 🔧 開發指令參考

### 基本指令
```bash
# 建立靜態網站檔案
bundle exec jekyll build

# 啟動開發伺服器 (基本)
bundle exec jekyll serve

# 啟動開發伺服器 (進階選項)
bundle exec jekyll serve --livereload --drafts --future

# 清理建立的檔案
bundle exec jekyll clean
```

### 常用開發參數
- `--livereload` - 檔案變更時自動重新載入瀏覽器
- `--drafts` - 包含草稿文章 (_drafts 資料夾)
- `--future` - 包含未來日期的文章
- `--incremental` - 增量建立 (僅重建變更的檔案)

## 📁 重要檔案與資料夾

```
/
├── _config.yml          # Jekyll 主要設定檔
├── _data/               # 網站資料檔案
├── _includes/           # 可重用的 HTML 片段
├── _layouts/            # 頁面版面模板
├── _pages/              # 靜態頁面
├── _posts/              # 部落格文章
├── _sass/               # Sass/SCSS 樣式檔案
├── assets/              # 靜態資源 (CSS, JS, 圖片)
├── docs/                # 📋 專案規格文件
└── index.html           # 網站首頁
```

## ✏️ 建立新文章

### 快速建立文章
```bash
# 在 _posts/ 資料夾建立新檔案
# 檔案名稱格式: YYYY-MM-DD-title.md

touch _posts/$(date +%Y-%m-%d)-my-new-post.md
```

### 文章範本
```markdown
---
title: "文章標題"
date: 2025-10-11 18:00:00 +0800
categories: [technical, ai-applications]  # 最多 3 個
tags: [Python, AI工具, 實戰心得]        # 最多 6 個  
excerpt: "文章摘要，最多 150 字"
header:
  overlay_color: "#2563eb"
  overlay_filter: "0.5"
toc: true           # 顯示目錄
toc_sticky: true    # 固定目錄
---

## 文章內容

你的精彩內容...
```

## 🎨 客製化樣式

### 修改設計系統
1. 編輯 `_sass/design-system/_variables.scss` - 修改顏色、字型等變數
2. 編輯 `_sass/design-system.scss` - 新增自訂樣式
3. 重新啟動開發伺服器以載入變更

### 覆寫主題檔案
若需要客製化 Minimal Mistakes 主題檔案：
1. 從 [主題 GitHub](https://github.com/mmistakes/minimal-mistakes) 複製原始檔案
2. 放置到對應的專案資料夾 (例: `_layouts/`, `_includes/`)
3. 進行客製化修改

## 🐛 常見問題排解

### Bundle 相關問題
```bash
# 更新 gems
bundle update

# 重新安裝 gems  
rm Gemfile.lock
bundle install

# 清理並重建
bundle exec jekyll clean
bundle exec jekyll build
```

### 樣式未更新
```bash
# 清理 Sass cache
rm -rf .sass-cache
bundle exec jekyll clean
bundle exec jekyll serve --livereload
```

### 文章未顯示
- 檢查檔案名稱格式: `YYYY-MM-DD-title.md`
- 檢查 front matter 語法
- 確認日期不是未來時間 (除非使用 `--future` 參數)

## 📊 效能監控

### 建立時間分析
```bash
# 顯示建立時間詳細資訊
bundle exec jekyll build --profile

# 僅建立增量變更
bundle exec jekyll build --incremental
```

### 檔案大小檢查
```bash
# 檢查 _site 資料夾大小
du -sh _site/

# 列出最大的檔案
find _site -type f -exec ls -la {} \; | sort -nrk 5 | head -10
```

## 🚀 部署前檢查

### 生產環境建立
```bash
# 使用生產環境設定建立
JEKYLL_ENV=production bundle exec jekyll build

# 檢查建立結果
bundle exec jekyll doctor
```

### SEO 與效能檢查
- 確認所有文章都有 `excerpt`
- 檢查圖片是否最佳化
- 驗證 HTML 結構
- 測試 mobile responsiveness

---

## 💡 開發技巧

1. **使用 `--livereload`** 提升開發效率
2. **定期執行 `bundle update`** 保持套件更新  
3. **遵循 [docs/](./docs/) 資料夾的規格文件** 確保一致性
4. **在本地充分測試後再推送到 GitHub** 

**Happy Coding!** 🎉