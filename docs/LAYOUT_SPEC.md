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
