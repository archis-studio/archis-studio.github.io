# Archis Digital Compass 🧭

**透過科技與 AI，成就每一個人的成長**

## 🌟 網站簡介

這是 Archi Chen 的個人技術部落格，專為台灣的技術社群打造。我們專注於分享 Backend 開發、Data Science、量化交易與個人成長的實戰經驗，用繁體中文讓技術變得更親近、更實用。

## 🤖 AI 協作指南 (Collaboration with AI)

本專案已針對與 AI 助手的協作進行優化。為確保最高效率與一致性，所有協作者 (無論是人類或 AI) 都必須遵守以下原則：

1.  **遵守共同的規則手冊**: `_site_guideline.yml` 是我們唯一的真相來源 (Single Source of Truth)。它包含了所有關於內容、設計、SEO 和協作流程的規則。
2.  **遵循協作流程**: 我們採用一個結構化的工作流程：定義目標 -> AI 提出計畫 -> 使用者透過選擇題做決定 -> AI 執行 -> 使用者驗證。
3.  **清晰的溝通**: 我們根據議題使用不同的語言進行溝通（工程用英文，內容與視覺用中文），並期望 AI 在做決定時提供選項。

詳細的協作協議、工作流程和規則都定義在 `_site_guideline.yml` 的 `collaboration_protocols` 區塊中。

## 🏗️ 技術架構

- **Jekyll 3.9.5** - 靜態網站生成器
- **Minimal Mistakes Theme** - 專業、簡潔的主題
- **GitHub Pages** - 免費託管與自動部署
- **Liquid Templating** - 彈性的模板系統

## ✍️ 內容與設計規範

本專案的所有內容創作與視覺設計都遵循一套統一的規範，以確保品牌一致性與高品質。

- **詳細規則**: 所有詳細的規範，包括語言風格、文章結構、圖片比例、色彩系統等，都明確定義在 **`_site_guideline.yml`** 檔案中。
- **唯一真相來源**: 請將 `_site_guideline.yml` 視為所有內容與設計決策的最終依據。

## 🚀 快速開始

### 本地開發環境設定

```bash
# 1. 複製專案
git clone https://github.com/magicxcr7/magicxcr7.github.io.git
cd magicxcr7.github.io

# 2. 安裝相依套件
bundle install --path vendor/bundle

# 3. 啟動開發伺服器
bundle exec jekyll serve --livereload
```

### 建立新文章

使用我們提供的腳本快速建立文章：

```bash
# 腳本會自動遵循 `_site_guideline.yml` 中定義的檔案命名規則
./scripts/new-post.sh "您的文章標題" "category1,category2" "tag1,tag2"
```

## 🔧 維護與部署

### 定期維護
- **每月**: 更新 Jekyll 與相依套件 (`bundle update`)。
- **每季**: 檢查所有外部連結是否有效。
- **每半年**: 審查並更新過時內容。

### 部署流程
```bash
# 1. 根據 `_site_guideline.yml` 中的 git_protocol 進行操作
git status
git add .
# 遵循 git log 的風格來撰寫 commit message
git commit -m "feat: Add new article about XYZ"
# 推送到 GitHub (會自動部署到 GitHub Pages)
git push origin main
```

---
*This README has been refactored for clarity and effective AI collaboration.*
