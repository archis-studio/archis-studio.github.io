# Archis Digital Compass 🧭

**透過科技與 AI，成就每一個人的成長**

## 🌟 網站簡介

這是 Archi Chen 的個人技術部落格，專為台灣的技術社群打造。我們專注於分享 Backend 開發、Data Science、量化交易與個人成長的實戰經驗，用繁體中文讓技術變得更親近、更實用。

### 🎯 網站特色
- ✅ **繁體中文內容** - 專為台灣讀者設計，技術術語保持英文
- ✅ **實戰導向** - 每篇文章都包含可執行的程式碼與實際案例
- ✅ **專業分類** - 9 大技術領域，內容結構清晰
- ✅ **個人溫度** - 結合技術深度與個人經驗，偶爾來點幽默 😊
- ✅ **SEO 優化** - 完整的 meta data 與 structured data 設定
- ✅ **響應式設計** - 在各種裝置上都有良好的閱讀體驗

## 🏗️ 技術架構

### 核心技術
- **Jekyll 3.9.5** - 靜態網站生成器
- **Minimal Mistakes Theme** - 專業、簡潔的主題
- **GitHub Pages** - 免費託管與自動部署
- **Liquid Templating** - 彈性的模板系統

### 相依套件
```ruby
# 主要套件
jekyll (~> 3.9.5)
github-pages  
minimal-mistakes-jekyll

# 功能外掛
jekyll-feed          # RSS 訂閱
jekyll-sitemap       # 網站地圖  
jekyll-seo-tag       # SEO 優化
jekyll-paginate      # 分頁功能
jekyll-include-cache # 效能優化
```

## 📂 專案結構

```
├── _config.yml              # 網站主要設定
├── _site_guideline.yml      # AI 內容創作指引
├── _data/
│   └── navigation.yml       # 導航選單設定
├── _pages/                  # 靜態頁面
│   ├── about.md            # 關於我頁面
│   ├── posts.md            # 文章總覽
│   ├── categories.md       # 分類總覽
│   └── category-*.md       # 各分類頁面
├── _posts/                  # 部落格文章
├── _templates/              # 文章模板
├── assets/
│   ├── images/             # 圖片資源
│   └── css/                # 自訂樣式
├── scripts/
│   └── new-post.sh         # 新文章建立腳本
└── README.md               # 專案說明
```

## 🎨 內容分類系統

### 技術開發類
- **💻 技術分享** (`technical`) - 程式設計通用經驗
- **🔧 Backend 開發** (`backend`) - 伺服器端技術
- **📊 Data Engineering** (`data-engineer`) - 資料工程實務
- **🤖 Data Science** (`data-science`) - 機器學習與資料分析

### 金融科技類
- **📈 量化交易** (`quant-trading`) - 演算法交易策略
- **💰 金融科技** (`finance`) - FinTech 技術應用

### 其他專業類
- **⚡ 能源管理** (`energy-management`) - 智慧電網技術
- **📢 數位廣告** (`digital-advertising`) - 行銷技術分析
- **🌟 個人成長** (`personal-growth`) - 職涯發展心得

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

# 4. 開啟瀏覽器
open http://localhost:4000
```

### 建立新文章

使用我們提供的腳本快速建立文章：

```bash
# 基本用法
./scripts/new-post.sh "文章標題"

# 指定分類與標籤
./scripts/new-post.sh "Python 效能優化技巧" "technical,backend" "Python,效能優化,最佳實務"

# 查看使用說明
./scripts/new-post.sh
```

## ✍️ 內容創作指南

### 文章撰寫原則

1. **語言使用**
   - 主要使用繁體中文
   - 技術術語保持英文 (如 Backend, API, DataFrame)
   - 適度使用 emoji 增加親切感

2. **內容結構**
   ```markdown
   ---
   title: "引人入勝的標題"
   categories: [primary-category, secondary-category]
   tags: [tag1, tag2, tag3]
   excerpt: "150 字內的摘要"
   ---
   
   開場白 + 個人經驗
   
   <!--more-->
   
   ## 主要內容
   ### 程式碼範例  
   ### 實戰經驗
   
   ## 總結與延伸
   ```

3. **品質要求**
   - 文章長度至少 800 字
   - 包含實用的程式碼範例
   - 提供可立即執行的解決方案
   - 加入個人心得與踩坑經驗

### SEO 優化建議

- ✅ 標題包含目標關鍵字
- ✅ excerpt 控制在 150 字內
- ✅ 使用適當的內部連結
- ✅ 圖片加上描述性 alt 文字
- ✅ 適當使用 H2, H3 標題結構

## 🎯 設計規範

### 視覺風格
- **主色調**: `#2c3e50` (深藍灰)
- **輔助色**: `#3498db` (藍色), `#e74c3c` (紅色)
- **字體**: Noto Sans TC (中文), Source Sans Pro (英文)

### 圖片規範
- **Header 圖片**: 1200x675px (16:9 比例)
- **Teaser 圖片**: 400x200px (2:1 比例)
- **檔案大小**: 建議 < 200KB
- **格式**: JPG, PNG, WebP

### 色彩對應
每個分類都有專屬的主題色彩：

| 分類 | 顏色代碼 | 說明 |
|------|----------|------|
| Technical | `#2c3e50` | 深藍灰 |
| Backend | `#34495e` | 深灰 |
| Data Engineer | `#16a085` | 藍綠 |
| Data Science | `#3498db` | 藍色 |
| Quant Trading | `#e74c3c` | 紅色 |
| Finance | `#f39c12` | 橙色 |
| Energy | `#27ae60` | 綠色 |
| Digital Ads | `#9b59b6` | 紫色 |
| Personal Growth | `#1abc9c` | 青綠 |

## 🔧 維護與更新

### 定期維護檢查清單

- [ ] **每月**: 更新 Jekyll 與相依套件
- [ ] **每季**: 檢查所有外部連結是否有效
- [ ] **每半年**: 審查並更新過時內容
- [ ] **每年**: 分析網站效能並進行優化

### 備份策略
- **程式碼**: GitHub 自動版本控制
- **圖片資源**: 建議額外備份至雲端儲存
- **內容匯出**: 定期匯出 JSON 格式以備移轉

### 部署流程
```bash
# 1. 完成內容編輯
git add .
git commit -m "📝 Add new article: 文章標題"

# 2. 推送到 GitHub (會自動部署到 GitHub Pages)
git push origin main

# 3. 等待 GitHub Actions 完成建置 (~2-5 分鐘)
# 4. 檢查 https://magicxcr7.github.io 確認更新
```

## 📊 網站分析

### 效能指標
- **建置時間**: ~4 秒 (Jekyll build)
- **檔案大小**: 壓縮後 < 100KB (主要頁面)
- **載入速度**: < 2 秒 (First Contentful Paint)

### SEO 設定
- ✅ 自動產生 sitemap.xml
- ✅ 結構化資料 (JSON-LD)
- ✅ Open Graph meta tags
- ✅ Twitter Card 支援
- ✅ RSS Feed 自動生成

## 🤝 貢獻指南

歡迎提供建議或回報問題！

### 回報問題
1. 前往 [GitHub Issues](https://github.com/magicxcr7/magicxcr7.github.io/issues)
2. 描述問題現象與重現步驟
3. 提供瀏覽器與裝置資訊

### 建議內容主題
- 📧 Email: [magic83w@gmail.com](mailto:magic83w@gmail.com)
- 💻 GitHub: [github.com/magicxcr7](https://github.com/magicxcr7)
- 🔗 LinkedIn: [linkedin.com/in/archi-chen](https://linkedin.com/in/archi-chen)

## 📜 版權聲明

- **內容**: [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)
- **程式碼**: [MIT License](https://opensource.org/licenses/MIT)
- **主題**: [MIT License](https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE) (Minimal Mistakes)

---

## 🏆 致謝

感謝以下開源專案讓這個網站成為可能：

- [Jekyll](https://jekyllrb.com/) - 靜態網站生成器
- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) - 優雅的 Jekyll 主題  
- [GitHub Pages](https://pages.github.com/) - 免費的靜態網站託管
- [Font Awesome](https://fontawesome.com/) - 圖示字體庫

**用 ❤️ 與 ☕ 在台北製作**

*讓我們一起透過技術讓世界變得更美好！* 🚀
