# Layout 版面配置規格書
# Version 3.0.0 | Updated: 2025-10-28

> **🤖 For AI Agents**: 本文件定義所有頁面版面配置規格

## 🏗️ 版面架構總覽

**基於**: Jekyll Minimal Mistakes Theme  
**風格**: Autumn Noir Future (Fashion + Gaming + AI + Space)

```
┌─────────────────────────────────────────────────┐
│                Navigation (masthead)            │
├─────────────────────────────────────────────────┤
│                Page Hero (optional)             │
├──────────────┬──────────────────┬───────────────┤
│   Left       │   Main Content   │   Right       │
│   Sidebar    │     Area         │   Sidebar     │
│  (Author)    │                  │   (TOC)       │
│              │                  │               │
├──────────────┴──────────────────┴───────────────┤
│                    Footer                       │
└─────────────────────────────────────────────────┘
```

---

## 🧭 Navigation (Masthead)

### 結構
- **Logo/Title**: Archis Studio
- **Subtitle**: Crafting the Future: AI, Pixel Art & Autumn Vibes
- **Menu Items**: 首頁、文章、分類、關於、展示空間
- **Search Toggle**: 搜尋按鈕
- **Mobile Menu**: 漢堡選單

### 設計規格
```scss
// 背景: 太空星雲漸變
background: linear-gradient(135deg, $space-void, $space-nebula, $noir-black);

// 高度: 固定高度
height: 80px;
padding: 1rem 0;

// 字型: 像素風格
font-family: $pixel-font;
text-transform: uppercase;
letter-spacing: 1.5px;

// 互動效果
&:hover {
  box-shadow: 0 2px 30px rgba($ai-neural, 0.6);
}
```

### 響應式行為
- **Desktop**: 水平選單
- **Tablet**: 部分選單收合
- **Mobile**: 漢堡選單

---

## 🎨 Page Hero (可選)

### 使用場景
- 首頁橫幅
- 分類頁面標題
- 特殊頁面介紹

### 設計規格
```scss
// 背景: 動態星空
background: $bg-gradient-space;
min-height: 300px;
padding: 4rem 0;

// 標題樣式
h1 {
  font-family: $serif-editorial;
  font-size: 3rem;
  color: $autumn-gold;
  text-shadow: $text-shadow-glow;
}

// 副標題
.subtitle {
  font-family: $futura-font;
  color: $space-starlight;
  font-size: 1.2rem;
}
```

---

## 👤 Left Sidebar (Author Profile)

### 內容組件
- **Avatar**: 作者頭像
- **Bio**: 個人簡介
- **Location**: 地理位置
- **Links**: 社群連結 (GitHub, Email)

### 設計規格
```scss
// 背景: AI 漸變
background: $bg-gradient-ai;
border-right: 2px solid rgba($space-comet, 0.4);
backdrop-filter: blur(10px);
padding: 2rem;

// 頭像樣式
.author__avatar img {
  border: 3px solid $autumn-gold;
  box-shadow: $box-shadow-hologram;
  border-radius: 50%;
  
  &:hover {
    transform: scale(1.05);
  }
}

// 個人簡介
.author__bio {
  color: $space-starlight;
  font-style: italic;
  line-height: 1.5;
}
```

### 響應式行為
- **Desktop**: 固定左側 (300px)
- **Tablet**: 收合為頂部
- **Mobile**: 隱藏或最小化

---

## 📄 Main Content Area

### Layout Types

#### Single Layout (文章/頁面)
```scss
.page__content {
  background: rgba($space-nebula, 0.4);
  border: 1px solid rgba($space-comet, 0.3);
  border-radius: $pixel-border-radius;
  padding: 2rem;
  box-shadow: $box-shadow-space;
}
```

#### Archive Layout (列表頁面)
```scss
.archive {
  .page__title {
    font-family: $futura-font;
    color: $autumn-gold;
    text-align: center;
    text-transform: uppercase;
  }
}

.list__item {
  padding: 1rem;
  border-bottom: 1px solid rgba($space-comet, 0.2);
  
  &:hover {
    background: rgba($autumn-gold, 0.08);
    transform: translateX(5px);
  }
}
```

### Typography
- **標題**: Playfair Display (Fashion Editorial)
- **內文**: Inter (現代易讀)
- **程式碼**: JetBrains Mono (像素風格)

---

## 📚 Right Sidebar (TOC & Related)

### 內容組件
- **Table of Contents**: 文章目錄
- **Related Posts**: 相關文章
- **Tags**: 標籤雲
- **Recent Posts**: 最新文章

### 設計規格
```scss
// TOC 樣式
.toc {
  background: rgba($ai-core, 0.1);
  border: 2px solid $ai-neural;
  border-radius: $pixel-border-radius;
  backdrop-filter: blur(10px);
  
  .toc__title {
    color: $autumn-gold;
    font-family: $futura-font;
    text-transform: uppercase;
    
    &::before {
      content: '📋 ';
    }
  }
  
  a {
    color: $space-starlight;
    
    &:hover {
      color: $space-comet;
      padding-left: 10px;
    }
  }
}
```

### 黏性行為
```scss
.toc {
  position: sticky;
  top: 2rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}
```

---

## 🦶 Footer

### 內容組件
- **Copyright**: 版權資訊
- **Social Links**: 社群連結
- **Site Info**: 網站資訊

### 設計規格
```scss
.page__footer {
  background: $space-void;
  border-top: 2px solid $space-comet;
  color: $space-starlight;
  padding: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      $autumn-gold 0%, 
      $space-aurora 50%, 
      $autumn-gold 100%);
    animation: footerGlow 6s ease-in-out infinite alternate;
  }
}
```

---

## 📱 響應式斷點

### Breakpoints
```scss
$breakpoints: (
  'xs': 0,
  'sm': 640px,   // 手機
  'md': 768px,   // 平板
  'lg': 1024px,  // 筆電
  'xl': 1280px,  // 桌機
  '2xl': 1536px  // 大螢幕
);
```

### Layout Behavior
- **Mobile (< 768px)**: 單欄布局，側邊欄收合
- **Tablet (768px - 1024px)**: 兩欄布局，右側邊欄收合
- **Desktop (> 1024px)**: 三欄布局，完整顯示

---

## 🎮 互動效果

### Hover States
- **Navigation**: 霓虹發光效果
- **Cards**: 上浮 + 陰影增強
- **Links**: 底線動畫
- **Buttons**: 漸變變化

### Loading States
- **Page Transitions**: 淡入效果
- **Image Loading**: 模糊到清晰
- **Content Loading**: 骨架屏效果

### Animations
```scss
// 頁面載入動畫
@keyframes pageLoad {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

// 元素浮現動畫
@keyframes elementFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## ✅ 實作檢查清單

### Layout Structure
- [ ] Navigation 組件建立
- [ ] Page Hero 組件建立
- [ ] Left Sidebar 組件建立
- [ ] Main Content 區域設定
- [ ] Right Sidebar 組件建立
- [ ] Footer 組件建立

### Responsive Design
- [ ] Mobile 版面測試
- [ ] Tablet 版面測試
- [ ] Desktop 版面測試
- [ ] 跨瀏覽器相容性測試

### Interactive Elements
- [ ] Navigation 互動效果
- [ ] Hover 狀態設定
- [ ] Loading 動畫實作
- [ ] Smooth scrolling 設定

### Performance
- [ ] CSS 最佳化
- [ ] 圖片載入最佳化
- [ ] 字型載入最佳化
- [ ] 動畫效能測試

---

## 📝 CHANGELOG

### v3.0.0 (2025-10-28)
- 版本號統一更新
- 明確標示文件受眾（AI Agents）

### v1.0.0 (2025-10-16)
- 建立完整版面配置規格

---

**Maintained by**: Archi Chen & AI Assistants  
**Last Updated**: 2025-10-28
