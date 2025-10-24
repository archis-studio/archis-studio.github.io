# Layout 版面配置規格書
# Version 2.0.0 | Updated: 2025-10-24

## 🏗️ 版面架構總覽

**基於**: Jekyll Minimal Mistakes Theme  
**風格**: Autumn Noir Future (Fashion + Gaming + AI + Space)  
**定位**: Portfolio + Tutorial + Learning Journal  
**設計理念**: 現代化、可收合、內容優先

```
┌─────────────────────────────────────────────────┐
│              Navigation (Fixed Top)             │
│       Home | Blog | Category | About            │
├─────────────────────────────────────────────────┤
│                                                 │
│                  Hero Section                   │
│          (首頁 Banner / 頁面標題)                │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│              Main Content Area                  │
│         (全寬設計，最佳閱讀體驗)                  │
│                                                 │
│    [Collapsible TOC]    Content   [Related]    │
│                                                 │
├─────────────────────────────────────────────────┤
│                    Footer                       │
│         Contact | Social Links | Info           │
└─────────────────────────────────────────────────┘
```

---

## 🧭 Navigation (Modern Minimal)

### 選單架構
**主選單** (4 項 + 保留擴充空間):
```yaml
main:
  - title: "Home"
    url: /
  - title: "Blog" 
    url: /posts/
  - title: "Category"
    url: /categories/
  - title: "About"
    url: /about/
  # 保留空間供未來擴充 (Projects, Portfolio, Uses, Contact)
```

### 設計特點
- **Fixed Header**: 置頂導航，滾動時始終可見
- **極簡設計**: 乾淨俐落，不搶走內容焦點
- **Logo + Title**: 左側品牌識別
- **Menu**: 右側水平選單
- **Mobile**: 漢堡選單 (< 768px)

### 設計規格
```scss
.masthead {
  // 固定頂部導航
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
  // 背景：半透明 + 模糊效果
  background: rgba($noir-black, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba($autumn-gold, 0.2);
  
  // 尺寸
  height: 70px;
  padding: 0 2rem;
  
  // 陰影（滾動時增強）
  box-shadow: 0 2px 10px rgba(#000, 0.3);
  
  // Logo & Title
  .site-title {
    font-family: $serif-editorial;
    font-size: 1.5rem;
    color: $autumn-gold;
    text-decoration: none;
  }
  
  // Menu Links
  nav a {
    font-family: $sans-serif;
    font-size: 0.95rem;
    color: $noir-text;
    padding: 0.5rem 1rem;
    
    &:hover {
      color: $autumn-gold;
      border-bottom: 2px solid $autumn-gold;
    }
    
    &.active {
      color: $autumn-gold;
    }
  }
}
```

### 響應式行為
- **Desktop (> 1024px)**: Logo 左 + 水平選單右
- **Tablet (768px - 1024px)**: 選單項目保留
- **Mobile (< 768px)**: Logo + 漢堡選單

---

## 🎨 Hero Section

### 使用場景分佈

#### 首頁 Hero (Portfolio Style)
```scss
.home-hero {
  // 大型橫幅
  min-height: 60vh;
  padding: 8rem 0 4rem;
  
  // 背景：星雲漸變
  background: linear-gradient(135deg, 
    $space-void, $space-nebula, $noir-gray);
  
  // 內容居中
  text-align: center;
  
  h1 {
    font-family: $serif-editorial;
    font-size: 3.5rem;
    color: $autumn-gold;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-family: $sans-serif;
    font-size: 1.3rem;
    color: $space-starlight;
    margin-bottom: 2rem;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
}
```

#### 內頁 Hero (Simple Header)
```scss
.page-hero {
  // 簡潔標題區
  padding: 6rem 0 3rem;
  background: rgba($space-nebula, 0.3);
  border-bottom: 1px solid rgba($autumn-gold, 0.2);
  
  h1 {
    font-family: $serif-editorial;
    font-size: 2.5rem;
    color: $autumn-gold;
    text-align: center;
  }
  
  .breadcrumb {
    text-align: center;
    color: $noir-text-muted;
    margin-top: 1rem;
  }
}
```

---

## 📄 Main Content Layouts

### Layout Type 1: 首頁 (Home)

```
┌─────────────────────────────────────────┐
│            Hero Banner                  │
│    個人介紹 + Tagline + CTA             │
├─────────────────────────────────────────┤
│         Featured Section                │
│    📌 精選文章 / 最新作品               │
├─────────────────────────────────────────┤
│        Recent Posts (3-6篇)            │
│    [Card] [Card] [Card]                │
├─────────────────────────────────────────┤
│       Categories Overview               │
│    快速分類連結                         │
└─────────────────────────────────────────┘
```

**設計規格**:
```scss
.home-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  .featured-section {
    margin: 4rem 0;
  }
  
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
  }
}
```

### Layout Type 2: 文章頁 (Post)

```
┌─────────────────────────────────────────┐
│         Article Header                  │
│    標題 + Meta (日期/分類/標籤)         │
├──────────────┬──────────────────────────┤
│  [TOC] (可   │    Article Content      │
│   收合)      │                         │
│              │    (最佳閱讀寬度)        │
│              │                         │
│              ├──────────────────────────┤
│              │   Author Bio (Bottom)   │
│              ├──────────────────────────┤
│              │   Related Posts         │
└──────────────┴──────────────────────────┘
```

**設計規格**:
```scss
.post-layout {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  
  .post-content {
    max-width: 75ch; // 最佳閱讀寬度
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.7;
  }
  
  .toc {
    // 桌面：固定左側
    @media (min-width: 1024px) {
      position: sticky;
      top: 100px;
      max-height: calc(100vh - 120px);
      overflow-y: auto;
    }
    
    // 平板/手機：可收合
    @media (max-width: 1023px) {
      position: relative;
      margin-bottom: 2rem;
    }
  }
}
```

### Layout Type 3: 文章列表 (Blog)

```
┌─────────────────────────────────────────┐
│       Page Title (Blog)                 │
├─────────────────────────────────────────┤
│   Filter: [All] [AI] [Code] [Design]   │
├─────────────────────────────────────────┤
│        Post List (時間序)               │
│   ┌─────────────────────────────┐       │
│   │ [Thumbnail] Title           │       │
│   │ Excerpt... | Date | Cat     │       │
│   └─────────────────────────────┘       │
│   ┌─────────────────────────────┐       │
│   │ [Thumbnail] Title           │       │
│   └─────────────────────────────┘       │
├─────────────────────────────────────────┤
│          Pagination                     │
└─────────────────────────────────────────┘
```

**設計規格**:
```scss
.blog-layout {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  
  .post-item {
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    margin-bottom: 2rem;
    background: rgba($noir-gray, 0.5);
    border-radius: 8px;
    border: 1px solid rgba($autumn-gold, 0.1);
    
    &:hover {
      border-color: rgba($autumn-gold, 0.4);
      transform: translateY(-2px);
    }
  }
}
```

### Layout Type 4: 分類頁 (Category)

```
┌─────────────────────────────────────────┐
│      Category Title (e.g., "AI")        │
├─────────────────────────────────────────┤
│      Post Count: 12 篇文章               │
├─────────────────────────────────────────┤
│         Grid or List View               │
│   [Card] [Card] [Card]                  │
│   [Card] [Card] [Card]                  │
└─────────────────────────────────────────┘
```

### Layout Type 5: 關於頁 (About)

```
┌─────────────────────────────────────────┐
│          Profile Section                │
│    大頭貼 + 自我介紹                     │
├─────────────────────────────────────────┤
│            Skills & Tech                │
│    技能標籤雲 or 圖示列                  │
├─────────────────────────────────────────┤
│           Experience                    │
│    時間軸 or 卡片列表                    │
├─────────────────────────────────────────┤
│          Contact Form                   │
│    聯絡表單 or 社群連結                  │
└─────────────────────────────────────────┘
```

---

## 🧩 Reusable Components

### TOC (Table of Contents) - 可收合

**桌面版** (> 1024px):
```scss
.toc-sidebar {
  position: sticky;
  top: 100px;
  width: 260px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding: 1.5rem;
  background: rgba($noir-gray, 0.6);
  border-radius: 8px;
  border: 1px solid rgba($autumn-gold, 0.2);
  
  .toc-title {
    font-weight: 600;
    color: $autumn-gold;
    margin-bottom: 1rem;
  }
  
  a {
    display: block;
    padding: 0.4rem 0;
    color: $noir-text-muted;
    font-size: 0.9rem;
    
    &:hover {
      color: $autumn-gold;
      padding-left: 0.5rem;
    }
    
    &.active {
      color: $autumn-gold;
      border-left: 2px solid $autumn-gold;
      padding-left: 0.5rem;
    }
  }
}
```

**手機版** (< 1024px):
```scss
.toc-collapsible {
  background: rgba($noir-gray, 0.8);
  border-radius: 8px;
  margin-bottom: 2rem;
  
  .toc-toggle {
    padding: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    
    &::after {
      content: '▼';
      transition: transform 0.3s;
    }
    
    &.expanded::after {
      transform: rotate(180deg);
    }
  }
  
  .toc-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s;
    
    &.show {
      max-height: 500px;
      padding: 1rem;
    }
  }
}
```

### Author Bio Card

```scss
.author-bio {
  padding: 2rem;
  background: rgba($noir-gray, 0.6);
  border-radius: 8px;
  border: 1px solid rgba($autumn-gold, 0.2);
  margin: 3rem 0;
  
  .author-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid $autumn-gold;
    margin-bottom: 1rem;
  }
  
  .author-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: $autumn-gold;
  }
  
  .author-description {
    color: $noir-text-muted;
    line-height: 1.6;
    margin: 1rem 0;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    
    a {
      color: $noir-text;
      &:hover { color: $autumn-gold; }
    }
  }
}
```

### Post Card (for Grid/List)

```scss
.post-card {
  background: rgba($noir-gray, 0.5);
  border-radius: 8px;
  border: 1px solid rgba($autumn-gold, 0.1);
  overflow: hidden;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    border-color: rgba($autumn-gold, 0.4);
    box-shadow: 0 8px 20px rgba(#000, 0.3);
  }
  
  .card-thumbnail {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 1.5rem;
    
    .card-title {
      font-size: 1.3rem;
      color: $autumn-gold;
      margin-bottom: 0.5rem;
    }
    
    .card-meta {
      font-size: 0.85rem;
      color: $noir-text-muted;
      margin-bottom: 1rem;
    }
    
    .card-excerpt {
      color: $noir-text;
      line-height: 1.6;
    }
  }
}
```

---

## 🦶 Footer

### 內容架構

```
┌─────────────────────────────────────────┐
│          Footer Container               │
├─────────────────────────────────────────┤
│   Contact Info    |    Quick Links      │
│   Email, Social   |   Home, Blog, About │
├─────────────────────────────────────────┤
│         Copyright & Credits             │
│   © 2025 Archis Studio | Built with ❤️  │
└─────────────────────────────────────────┘
```

### 設計規格

```scss
.site-footer {
  background: $noir-black;
  border-top: 1px solid rgba($autumn-gold, 0.2);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .footer-section {
    h4 {
      color: $autumn-gold;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    
    a {
      display: block;
      color: $noir-text-muted;
      padding: 0.4rem 0;
      
      &:hover {
        color: $autumn-gold;
      }
    }
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid rgba($autumn-gold, 0.1);
    color: $noir-text-muted;
    font-size: 0.9rem;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    
    a {
      color: $noir-text;
      font-size: 1.5rem;
      
      &:hover {
        color: $autumn-gold;
        transform: scale(1.2);
      }
    }
  }
}
```

---

## 📱 響應式設計策略

### Breakpoints
```scss
$breakpoints: (
  'mobile': 320px,   // 手機直立
  'tablet': 768px,   // 平板
  'laptop': 1024px,  // 筆電
  'desktop': 1280px, // 桌機
  'wide': 1440px     // 寬螢幕
);
```

### Layout Behavior by Device

#### Mobile (< 768px)
- Navigation: 漢堡選單
- Hero: 全寬，調整字體大小
- Content: 單欄，全寬
- TOC: 收合在頂部（可展開）
- Cards: 單欄堆疊
- Footer: 單欄堆疊

#### Tablet (768px - 1024px)
- Navigation: 完整水平選單
- Hero: 全寬
- Content: 最大寬度 720px
- TOC: 可收合區塊
- Cards: 2 欄 grid
- Footer: 2 欄 grid

#### Desktop (> 1024px)
- Navigation: 完整水平選單
- Hero: 全寬（內容置中）
- Content: 最大寬度 75ch + 側邊 TOC
- TOC: Fixed sidebar
- Cards: 3 欄 grid
- Footer: 3-4 欄 grid

### 響應式 Mixin
```scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'mobile' {
    @media (max-width: 767px) { @content; }
  }
  @else if $breakpoint == 'tablet' {
    @media (min-width: 768px) and (max-width: 1023px) { @content; }
  }
  @else if $breakpoint == 'desktop' {
    @media (min-width: 1024px) { @content; }
  }
}

// Usage:
.element {
  @include respond-to('mobile') {
    // Mobile styles
  }
}
```

---

## 🎮 互動效果與動畫

### Scroll Behavior
```scss
// Smooth scrolling
html {
  scroll-behavior: smooth;
}

// Navbar on scroll
.masthead {
  transition: all 0.3s ease;
  
  &.scrolled {
    box-shadow: 0 4px 20px rgba(#000, 0.5);
    background: rgba($noir-black, 0.98);
  }
}
```

### Hover States
```scss
// Links
a {
  transition: color 0.2s ease;
  
  &:hover {
    color: $autumn-gold;
  }
}

// Cards
.post-card {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(#000, 0.3);
  }
}

// Buttons
.btn {
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba($autumn-gold, 0.4);
  }
}
```

### Loading & Transitions
```scss
// Page transition
.page-enter {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease;
}

// Image lazy load
img {
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.loaded {
    opacity: 1;
  }
}
```

---

## ✅ 實作檢查清單

### Phase 2A: Navigation 實作
- [ ] 建立 `_data/navigation.yml` 檔案
- [ ] 設定 4 個主選單項目（Home, Blog, Category, About）
- [ ] 建立 Fixed header SCSS
- [ ] 實作響應式漢堡選單
- [ ] 測試導航在各裝置的顯示

### Phase 2B: 首頁布局
- [ ] 設計 Hero Section
- [ ] 實作 Featured Section
- [ ] 建立 Recent Posts Grid
- [ ] 加入 Category Overview
- [ ] 測試響應式顯示

### Phase 2C: 文章頁布局
- [ ] 設定最佳閱讀寬度（75ch）
- [ ] 實作可收合 TOC
- [ ] 加入 Author Bio Card
- [ ] 建立 Related Posts Section
- [ ] 測試長文章滾動體驗

### Phase 2D: 列表頁布局
- [ ] 建立 Post Card Component
- [ ] 實作 Grid/List 切換
- [ ] 加入分類篩選
- [ ] 設定分頁功能
- [ ] 測試載入效能

### Phase 2E: 其他頁面
- [ ] 建立 About 頁面布局
- [ ] 建立 Category 頁面布局
- [ ] 加入 404 錯誤頁面
- [ ] 測試所有頁面連結

### Phase 2F: Footer & Components
- [ ] 實作 Footer 結構
- [ ] 加入社群連結
- [ ] 建立可重用 Components
- [ ] 測試 Footer 響應式

### Phase 2G: 響應式測試
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)
- [ ] 測試橫向/直向切換
- [ ] 測試不同瀏覽器

### Phase 2H: 互動效果
- [ ] Navigation scroll effect
- [ ] Card hover animations
- [ ] Smooth scrolling
- [ ] TOC 收合/展開
- [ ] Image lazy loading

---

## 📝 CHANGELOG

### v2.0.0 (2025-10-24)
- **重大更新**: 完全重新設計版面架構
- **定位調整**: Portfolio + Tutorial + Learning Journal
- **導航簡化**: Home | Blog | Category | About (4項)
- **布局現代化**: 無傳統側邊欄，改用可收合 TOC
- **新增頁面類型**: 5種主要 Layout (Home, Post, Blog, Category, About)
- **元件化設計**: TOC, Author Bio, Post Card 等可重用元件
- **響應式優化**: Mobile-first 設計，完整斷點規劃
- **互動增強**: Hover effects, scroll animations
- **移除**: 舊的三欄式布局、左側 Author Sidebar
- **保留**: Autumn Noir Future 設計風格

---

**下一步**: 開始實作 Phase 2A - Navigation 導航系統
# Navigation 導航規格書
# Version 2.0.0 | Updated: 2025-10-24

## 🧭 導航架構

**基於**: Minimal Mistakes Masthead  
**設計理念**: 極簡現代、固定頂部、Mobile-first  
**字型策略**: 品牌用 Serif，選單用 Sans-serif

---

## 📋 導航結構

### 主選單架構 (_data/navigation.yml)

```yaml
# 主導航 - 4 個核心項目
main:
  - title: "Home"
    url: /
    
  - title: "Blog" 
    url: /posts/
    
  - title: "Category"
    url: /categories/
    
  - title: "About"
    url: /about/

# 保留未來擴充空間
# 可能的擴充項目：
# - Projects (專案作品集)
# - Portfolio (個人作品)
# - Uses (使用工具)
# - Contact (聯絡頁面)
```

### 品牌識別 (_config.yml)

```yaml
# Site branding
title: "Archis Studio"
subtitle: "Crafting the Future: AI, Pixel Art & Autumn Vibes"
logo: "/assets/images/logo.png"  # Optional

# Masthead settings
masthead_title: "Archis Studio"  # 顯示在導航列
```

---

## 🎨 視覺設計規格

### 整體結構

```scss
.masthead {
  // 固定頂部
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
  // 背景與效果
  background: rgba($noir-black, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba($autumn-gold, 0.2);
  
  // 尺寸
  height: 70px;
  padding: 0 2rem;
  
  // 陰影
  box-shadow: 0 2px 10px rgba(#000, 0.3);
  
  // Flex 佈局
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  // Smooth transitions
  transition: all 0.3s ease;
  
  // 滾動時增強陰影
  &.scrolled {
    box-shadow: 0 4px 20px rgba(#000, 0.5);
    background: rgba($noir-black, 0.98);
  }
}
```

### Logo & Brand

```scss
.site-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  
  img {
    height: 40px;
    width: auto;
  }
  
  .site-title {
    font-family: $serif-editorial; // Playfair Display
    font-size: 1.5rem;
    font-weight: 700;
    color: $autumn-gold;
    letter-spacing: -0.5px;
    
    // Subtle glow
    text-shadow: 0 0 10px rgba($autumn-gold, 0.3);
    
    // Hover effect
    transition: all 0.3s ease;
    
    &:hover {
      color: lighten($autumn-gold, 10%);
      text-shadow: 0 0 15px rgba($autumn-gold, 0.5);
    }
  }
}
```

### Navigation Menu

```scss
.nav-menu {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  li {
    margin: 0;
  }
  
  a {
    display: block;
    padding: 0.75rem 1.25rem;
    font-family: $sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: $noir-text;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease;
    
    // Hover state
    &:hover {
      color: $autumn-gold;
      background: rgba($autumn-gold, 0.1);
    }
    
    // Active state
    &.active {
      color: $autumn-gold;
      background: rgba($autumn-gold, 0.15);
      font-weight: 600;
    }
  }
}
```
  
  &:hover {
    color: lighten($autumn-gold, 10%);
    text-shadow: 0 0 20px rgba($autumn-gold, 0.8);
  }
}

.site-subtitle {
  font-family: $futura-font;
  font-size: 0.9rem;
  color: $space-starlight;
  opacity: 0.8;
  display: block;
  margin-top: 0.2rem;
}
```

### 選單項目樣式
```scss
.masthead__menu-item a {
  // 基本樣式
  font-family: $pixel-font; // JetBrains Mono
  font-weight: $font-medium;
  font-size: 0.85rem;
  color: $space-starlight;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  
  // Hover 效果
  &:hover {
    color: $gaming-neon;
    background: rgba($gaming-neon, 0.1);
    text-shadow: 
      0 0 10px rgba($gaming-neon, 0.8),
      0 0 20px rgba($pixel-cyan, 0.5);
    transform: translateY(-2px);
  }
  
  // 當前頁面標示
  &.active,
  &[aria-current="page"] {
    color: $autumn-gold;
    font-weight: $font-bold;
    background: rgba($autumn-gold, 0.1);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 2px;
      background: $autumn-gold;
      box-shadow: 0 0 10px rgba($autumn-gold, 0.6);
    }
  }
}
```

---

## 🎮 互動效果

### 動畫效果
```scss
// 底部漸變流動線
.masthead::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    $space-comet 20%, 
    $ai-neural 40%, 
    $autumn-gold 60%, 
    $space-aurora 80%, 
    transparent 100%);
  animation: spaceGradientFlow 6s ease-in-out infinite;
  filter: blur(1px);
}

// 掃描線效果
.masthead::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(0deg, 
    transparent, 
    transparent 2px, 
    rgba($pixel-cyan, 0.03) 2px, 
    rgba($pixel-cyan, 0.03) 4px);
  pointer-events: none;
  opacity: 0.6;
  z-index: 1;
}

// 關鍵幀動畫
@keyframes spaceGradientFlow {
  0% {
    background-position: 0% 50%;
    opacity: 0.7;
  }
  50% {
    background-position: 100% 50%;
    opacity: 1;
  }
  100% {
    background-position: 0% 50%;
    opacity: 0.7;
  }
}
```

### Hover 狀態
```scss
.masthead:hover {
  box-shadow: 
    0 2px 30px rgba($ai-neural, 0.6),
    0 4px 60px rgba($pixel-cyan, 0.4),
    inset 0 -1px 0 rgba($autumn-gold, 0.5);
}
```

---

## 📱 響應式設計

### Desktop (> 1024px)
```scss
@media (min-width: 1024px) {
  .masthead {
    .visible-links {
      display: flex;
      gap: 1rem;
    }
    
    .site-title {
      font-size: 1.8rem;
    }
    
    .masthead__menu-item a {
      padding: 0.5rem 1rem;
    }
  }
}
```

### Tablet (768px - 1024px)
```scss
@media (max-width: 1024px) {
  .masthead {
    .site-title {
      font-size: 1.4rem;
    }
    
    .masthead__menu-item a {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
  }
}
```

### Mobile (< 768px)
```scss
@media (max-width: 768px) {
  .masthead {
    padding: 0.8rem 0;
    
    .site-title {
      font-size: 1.2rem;
    }
    
    .site-subtitle {
      font-size: 0.8rem;
    }
    
    // 漢堡選單
    .greedy-nav__toggle {
      display: block;
      background: rgba($space-nebula, 0.8);
      border: 2px solid $space-comet;
      border-radius: 4px;
      
      .navicon {
        background: $space-starlight;
        
        &::before,
        &::after {
          background: $space-starlight;
        }
      }
    }
    
    // 隱藏的選單
    .hidden-links {
      background: rgba($space-nebula, 0.95);
      backdrop-filter: blur(20px);
      border: 2px solid $space-comet;
      border-radius: 8px;
      box-shadow: 0 8px 32px rgba($noir-black, 0.8);
      
      a {
        color: $space-starlight;
        padding: 0.8rem 1rem;
        border-bottom: 1px solid rgba($space-comet, 0.3);
        
        &:hover {
          background: rgba($autumn-gold, 0.1);
          color: $autumn-gold;
        }
      }
    }
  }
}
```

---

## 🔍 搜尋功能

### 搜尋按鈕
```scss
.search__toggle {
  background: transparent;
  border: 2px solid $space-comet;
  color: $space-starlight;
  border-radius: 4px;
  padding: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba($space-comet, 0.2);
    color: $autumn-gold;
    border-color: $autumn-gold;
    box-shadow: 0 0 15px rgba($autumn-gold, 0.4);
  }
  
  i {
    font-size: 1rem;
  }
}
```

### 搜尋覆蓋層
```scss
.search-content {
  background: rgba($space-void, 0.95);
  backdrop-filter: blur(20px);
  
  .search-input {
    background: rgba($space-nebula, 0.8);
    border: 2px solid $space-comet;
    color: $space-starlight;
    border-radius: 8px;
    font-family: $pixel-font;
    padding: 1rem;
    
    &:focus {
      border-color: $autumn-gold;
      box-shadow: 0 0 20px rgba($autumn-gold, 0.4);
    }
    
    &::placeholder {
      color: rgba($space-starlight, 0.6);
    }
  }
}
```

---

## 🎯 下拉選單 (Dropdown)

### 展示空間子選單
```scss
.dropdown-menu {
  background: linear-gradient(135deg, 
    rgba($space-nebula, 0.98) 0%, 
    rgba($noir-black, 0.95) 100%);
  backdrop-filter: blur(20px);
  border: 2px solid $space-comet;
  border-radius: 8px;
  box-shadow: 
    0 8px 32px rgba($noir-black, 0.8),
    0 0 20px rgba($ai-neural, 0.4),
    inset 0 1px 0 rgba($autumn-gold, 0.2);
  
  a {
    color: $space-starlight;
    padding: 0.8rem 1.2rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba($autumn-gold, 0.1);
      color: $autumn-gold;
      transform: translateX(5px);
    }
  }
}
```

---

## ♿ 無障礙設計

### 鍵盤導航
```scss
.masthead__menu-item a:focus {
  outline: 2px solid $autumn-gold;
  outline-offset: 2px;
  background: rgba($autumn-gold, 0.1);
}
```

### 螢幕閱讀器
```html
<!-- 隱藏文字 -->
<span class="sr-only">主選單</span>

<!-- ARIA 標籤 -->
<nav aria-label="主要導航">
  <ul role="menubar">
    <li role="none">
      <a href="/" role="menuitem" aria-current="page">首頁</a>
    </li>
  </ul>
</nav>
```

---

## ✅ 實作檢查清單

### 基本結構
- [ ] navigation.yml 設定完成
- [ ] masthead 品牌資訊設定
- [ ] 選單項目正確顯示
- [ ] Logo/標題正確載入

### 視覺樣式
- [ ] 背景漸變效果實作
- [ ] 字型載入正確
- [ ] 色彩變數正確套用
- [ ] 動畫效果運作正常

### 互動功能
- [ ] Hover 效果正常
- [ ] 當前頁面標示正確
- [ ] 下拉選單功能正常
- [ ] 搜尋功能正常

### 響應式設計
- [ ] Desktop 版面正常
- [ ] Tablet 版面正常
- [ ] Mobile 漢堡選單正常
- [ ] 跨瀏覽器測試通過

### 無障礙
- [ ] 鍵盤導航正常
- [ ] 螢幕閱讀器支援
- [ ] 色彩對比度符合標準
- [ ] ARIA 標籤完整

---

**實作檔案**:
- `_data/navigation.yml` - 選單結構
- `_sass/custom/_masthead.scss` - 樣式定義
- `_includes/masthead.html` - HTML 結構 (如需客製化)

---

## ✅ 實作檢查清單

### 基礎設定
- [ ] 建立 `_data/navigation.yml` 並設定 4 個選單項目
- [ ] 更新 `_config.yml` 設定 masthead_title
- [ ] 準備 Logo 圖片 (optional)

### SCSS 實作
- [ ] 建立 `_sass/custom/_navigation.scss`
- [ ] 實作 fixed header 樣式
- [ ] 實作 Logo & Brand 樣式
- [ ] 實作 Menu Links 樣式
- [ ] 實作 Hover & Active 狀態

### 響應式設計
- [ ] Desktop 版面 (> 1024px)
- [ ] Tablet 版面 (768px - 1023px)
- [ ] Mobile 版面 (< 768px)
- [ ] Hamburger 選單按鈕
- [ ] Mobile menu panel

### JavaScript 互動
- [ ] Scroll state 偵測
- [ ] Active link 標示
- [ ] Mobile menu toggle
- [ ] Body scroll lock (menu open 時)

### 測試驗證
- [ ] 各裝置尺寸測試
- [ ] 橫向/直向切換測試
- [ ] 滾動行為測試
- [ ] 連結功能測試
- [ ] 動畫流暢度測試

---

## 📝 CHANGELOG

### v2.0.0 (2025-10-24)
- **重大更新**: 完全重新設計導航系統
- **簡化選單**: 從 5 項減至 4 項 (Home, Blog, Category, About)
- **移除 Emoji**: 改用純文字，更專業現代
- **Fixed Header**: 置頂導航，滾動時保持可見
- **半透明背景**: backdrop-filter 模糊效果
- **新增**: Scroll state 動態陰影效果
- **優化**: Mobile hamburger menu 動畫
- **保留**: 未來擴充空間（可加入 Projects, Portfolio 等）
- **移除**: 下拉子選單（展示空間）

---

**下一步**: 實作 `_data/navigation.yml` 與基礎 SCSS
