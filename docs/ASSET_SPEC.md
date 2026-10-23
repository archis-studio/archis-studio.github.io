# Asset 資源檔案規格書
# Version 3.0.1 | Updated: 2026-10-23

> **🤖 For Agents**: 本文件定義所有視覺資源規格與檔案管理規則

## 📁 資源檔案架構

**目標**: 系統化管理所有視覺資源，支援 Autumn Noir Future 主題

```
assets/
├── css/                    # 樣式檔案
│   ├── main.scss          # 主樣式入口
│   └── gaming-hero.scss   # 特殊頁面樣式
├── images/                # 圖片資源
│   ├── icons/             # SVG 圖示
│   ├── backgrounds/       # 背景圖片
│   ├── avatars/          # 頭像圖片
│   └── posts/            # 文章圖片
└── js/                   # JavaScript 檔案 (如需要)
    └── custom.js         # 自訂腳本
```

---

## 🎨 圖示系統 (Icons)

### SVG 圖示規格
**尺寸**: 24x24px (基準)  
**風格**: 像素風格 + 未來科技感  
**色彩**: 使用設計系統變數

### 必要圖示清單

#### 導航圖示
```
assets/images/icons/
├── home-planet-icon.svg           # 🏠 首頁 - 星球圖示
├── posts-scroll-icon.svg          # 📖 文章 - 卷軸圖示
├── categories-grid-icon.svg       # 📂 分類 - 網格圖示
├── about-user-icon.svg           # ℹ️ 關於 - 用戶圖示
├── future-portal-icon.svg        # 🎨 展示空間 - 傳送門圖示
└── hamburger-pixel-icon.svg      # ☰ 漢堡選單 - 像素風格
```

#### 功能圖示
```
assets/images/icons/
├── search-icon.svg               # 🔍 搜尋
├── close-icon.svg               # ✕ 關閉
├── arrow-up-icon.svg            # ↑ 回到頂部
├── external-link-icon.svg       # 🔗 外部連結
├── download-icon.svg            # ⬇ 下載
└── share-icon.svg              # 📤 分享
```

#### 社群圖示
```
assets/images/icons/social/
├── github-icon.svg              # GitHub
├── email-icon.svg               # Email
├── twitter-icon.svg             # Twitter (如需要)
└── linkedin-icon.svg            # LinkedIn (如需要)
```

### SVG 圖示範本
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
  <defs>
    <!-- 漸變定義 -->
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#D4A017;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4A90B8;stop-opacity:1" />
    </linearGradient>
    
    <!-- 發光效果 -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- 圖示內容 -->
  <path d="..." fill="url(#iconGradient)" filter="url(#glow)"/>
</svg>
```

### SVG 佔位符系統 (Placeholders)

#### 動態背景 SVG
```
assets/images/backgrounds/svg-placeholders/
├── space-starfield-bg.svg         # 動態星空背景，包含閃爍星星
├── space-nebula-overlay.svg       # 星雲疊加層，提供深度感
├── ai-neural-grid.svg             # AI 神經網路格線
├── retro-grid-pattern.svg         # 復古網格圖案
├── crt-scanlines.svg              # CRT 掃描線效果
└── space-particles.svg            # 太空粒子效果
```

#### UI 元素 SVG
```
assets/images/icons/svg-placeholders/
├── ai-agent-avatar.svg            # AI 代理頭像
├── pixel-spaceship.svg           # 像素太空船
├── pixel-ai-chip.svg             # 像素 AI 晶片
├── pixel-game-console.svg        # 像素遊戲機
└── pixel-quantum-core.svg        # 像素量子核心
```

#### SVG 佔位符使用說明
這些 SVG 檔案用於創建動態背景、UI 元素和視���效果，融合未來太空、AI 代理、像素藝術與復古遊戲美學。所有 SVG 都應使用設計系統中定義的色彩變數。

---

## 🖼️ 背景圖片系統

### 背景圖片規格
**格式**: SVG (向量) + WebP (點陣備用)  
**主題**: 太空星雲 + 像素藝術風格

### 背景圖片清單

#### 主要背景
```
assets/images/backgrounds/
├── masthead-cosmic-bg.svg         # 導航背景 - 星雲漸變
├── hero-starfield-bg.svg          # 首頁英雄區背景 - 星空
├── page-nebula-bg.svg             # 頁面背景 - 星雲
├── sidebar-ai-bg.svg              # 側邊欄背景 - AI 風格
└── footer-void-bg.svg             # 頁腳背景 - 太空虛空
```

#### 裝飾背景
```
assets/images/backgrounds/decorative/
├── particle-overlay.svg           # 粒子疊加層
├── scanlines-overlay.svg          # 掃描線效果
├── grid-pattern.svg               # 網格圖案
└── circuit-pattern.svg            # 電路圖案
```

### 背景 SVG 範本
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 120" preserveAspectRatio="xMidYMid slice">
  <defs>
    <!-- 星雲漸變 -->
    <linearGradient id="nebulaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0F0F12;stop-opacity:0.98" />
      <stop offset="50%" style="stop-color:#1A1B2E;stop-opacity:0.95" />
      <stop offset="100%" style="stop-color:#0F0F12;stop-opacity:0.98" />
    </linearGradient>
    
    <!-- 星光效果 -->
    <filter id="starGlow">
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- 基礎背景 -->
  <rect width="1920" height="120" fill="url(#nebulaGradient)"/>
  
  <!-- 星星點點 -->
  <g filter="url(#starGlow)">
    <rect x="100" y="20" width="2" height="2" fill="#E8E1D3"/>
    <rect x="300" y="40" width="2" height="2" fill="#D4A017"/>
    <!-- 更多星星... -->
  </g>
</svg>
```

---

## 👤 頭像與個人圖片

### 頭像規格
**尺寸**: 200x200px (最小), 400x400px (推薦)  
**格式**: WebP (主要) + JPG (備用)  
**風格**: 圓形裁切，符合 Fashion Editorial 風格

### 頭像檔案
```
assets/images/avatars/
├── autumn-bio-photo.webp          # 主要頭像 (WebP)
├── autumn-bio-photo.jpg           # 備用頭像 (JPG)
├── autumn-bio-photo-sm.webp       # 小尺寸頭像 (100x100)
└── autumn-bio-photo-lg.webp       # 大尺寸頭像 (600x600)
```

### 響應式圖片設定
```html
<picture>
  <source srcset="/assets/images/avatars/autumn-bio-photo-lg.webp" media="(min-width: 1024px)" type="image/webp">
  <source srcset="/assets/images/avatars/autumn-bio-photo.webp" media="(min-width: 768px)" type="image/webp">
  <source srcset="/assets/images/avatars/autumn-bio-photo-sm.webp" type="image/webp">
  <img src="/assets/images/avatars/autumn-bio-photo.jpg" alt="Archi Chen" loading="lazy">
</picture>
```

---

## 📝 文章圖片系統

### 文章圖片規格
**尺寸**: 1200x630px (社群分享最佳比例)  
**格式**: WebP (主要) + JPG (備用)  
**命名**: `YYYY-MM-DD-post-title-feature.webp`

### 圖片類型

#### Feature Images (特色圖片)
```
assets/images/posts/
├── 2025-10-16-ai-coding-tutorial-feature.webp
├── 2025-10-15-pixel-art-guide-feature.webp
└── 2025-10-14-autumn-design-feature.webp
```

#### Teaser Images (預覽圖片)
```
assets/images/posts/teasers/
├── ai-coding-teaser.webp          # 400x200px
├── pixel-art-teaser.webp          # 400x200px
└── autumn-design-teaser.webp      # 400x200px
```

#### In-Post Images (文章內圖片)
```
assets/images/posts/content/
├── ai-coding-tutorial/
│   ├── step-1-screenshot.webp
│   ├── step-2-diagram.webp
│   └── final-result.webp
└── pixel-art-guide/
    ├── tools-overview.webp
    └── technique-demo.webp
```

---

## 🎭 品牌資源

### Logo 系統
```
assets/images/branding/
├── autumn-logo.svg                # 主要 Logo (SVG)
├── autumn-logo.png               # 備用 Logo (PNG)
├── autumn-logo-sm.svg            # 小尺寸 Logo
├── autumn-favicon.svg            # Favicon 來源
└── autumn-apple-touch-icon.png   # Apple Touch Icon
```

### Favicon 系統
```
assets/images/favicons/
├── favicon.ico                   # 傳統 Favicon
├── favicon-16x16.png            # 16x16 PNG
├── favicon-32x32.png            # 32x32 PNG
├── apple-touch-icon.png         # 180x180 Apple
└── android-chrome-192x192.png   # Android Chrome
```

### 社群分享圖片
```
assets/images/social/
├── og-default.webp              # 預設 Open Graph 圖片
├── twitter-card-default.webp    # 預設 Twitter Card
└── site-preview.webp            # 網站預覽圖
```

---

## 🎨 CSS 資源管理

### 主要樣式檔案
```
assets/css/
├── main.scss                    # 主樣式入口點
├── gaming-hero.scss            # 特殊頁面樣式
└── design-system.css           # 編譯後的設計系統
```

### SCSS 架構
```scss
// assets/css/main.scss
---
---

/* Autumn Noir Future Theme - Main Entry */

// Import Minimal Mistakes
@import "minimal-mistakes";

// Import Design System
@import "design-system";

// Import Custom Components
@import "custom/masthead";
@import "custom/hero";
@import "custom/sidebar";
@import "custom/footer";

// Global Overrides
body {
  background: $bg-gradient-space;
  color: $space-starlight;
}
```

---

## ⚡ 效能最佳化

### 圖片最佳化
- **WebP 格式**: 現代瀏覽器優先
- **響應式圖片**: 不同螢幕尺寸載入適當大小
- **Lazy Loading**: 延遲載入非關鍵圖片
- **壓縮**: 保持品質下最小檔案大小

### CSS 最佳化
- **Critical CSS**: 內聯關鍵樣式
- **非同步載入**: 非關鍵 CSS 延遲載入
- **壓縮**: 生產環境壓縮 CSS
- **快取**: 設定適當的快取標頭

### 字型最佳化
```html
<!-- 預載入關鍵字型 -->
<link rel="preload" href="/assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/jetbrains-mono.woff2" as="font" type="font/woff2" crossorigin>

<!-- 字型顯示策略 -->
<style>
@font-face {
  font-family: 'Inter';
  src: url('/assets/fonts/inter-var.woff2') format('woff2');
  font-display: swap;
}
</style>
```

---

## 📱 響應式資源

### 圖片斷點
```scss
// 響應式圖片 Mixin
@mixin responsive-image($base-path, $filename) {
  background-image: url('#{$base-path}/#{$filename}-sm.webp');
  
  @media (min-width: 768px) {
    background-image: url('#{$base-path}/#{$filename}.webp');
  }
  
  @media (min-width: 1200px) {
    background-image: url('#{$base-path}/#{$filename}-lg.webp');
  }
}
```

### 設備特定資源
```scss
// 高 DPI 螢幕
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .logo {
    background-image: url('/assets/images/logo@2x.png');
    background-size: 100px 50px;
  }
}
```

---

## ✅ 資源檢查清單

### 圖示系統
- [ ] 所有導航圖示建立完成
- [ ] 功能圖示建立完成
- [ ] 社群圖示建立完成
- [ ] SVG 最佳化完成

### 背景系統
- [ ] 主要背景 SVG 建立
- [ ] 裝飾背景建立
- [ ] 響應式背景設定
- [ ] 效能測試通過

### 圖片系統
- [ ] 頭像圖片準備完成
- [ ] 文章特色圖片建立
- [ ] 響應式圖片設定
- [ ] WebP 格式轉換完成

### 品牌資源
- [ ] Logo 系統建立
- [ ] Favicon 系統建立
- [ ] 社群分享圖片準備
- [ ] 品牌一致性檢查

### 效能最佳化
- [ ] 圖片壓縮完成
- [ ] CSS 最佳化完成
- [ ] 字型載入最佳化
- [ ] 快取策略設定

---

## 📝 CHANGELOG

### v3.0.1 (2026-10-23)

- 維護協作對象改稱人／Agent；技術規範與專案目標不變。

### v3.0.0 (2025-10-28)
- 版本號統一更新
- 明確標示文件受眾（Agents）

### v1.0.0 (2025-10-16)
- 建立資源檔案管理規格

---

**Maintained by**: Archi Chen & Agents
**Last Updated**: 2026-10-23
