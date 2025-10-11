# Autumn Noir - Editorial AI Theme
## Fashion + Gaming + Pixel Art + AI Aesthetics

**Version**: 1.0.0 | **Created**: 2025-10-11 | **Style**: Editorial Fashion + Gaming Pixel Art

---

## 🍂 主題概述 (Theme Overview)

**Autumn Noir** 是為 Archis Studio 設計的自訂主題，完美融合了：

- **🍂 Fashion Editorial Style** - 時尚雜誌般的優雅排版
- **🤖 AI Technology Aesthetics** - 人工智慧的未來感設計
- **🎮 Gaming Pixel Art** - 像素遊戲的復古魅力  
- **🍃 Autumn Color Palette** - 秋日色彩的溫暖質感

## 🎨 色彩系統 (Color System)

### Autumn Noir 核心色彩
```scss
// 核心 Noir 色彩
$noir-black: #0E0E10;        // 深邃黑
$noir-gray: #1C1C1E;         // 暖灰
$noir-border: #2C2C2E;       // 邊框灰
$noir-text: #EDEDED;         // 溫暖白
$noir-text-muted: #A0A0A5;   // 優雅灰

// Autumn Fashion 調色盤
$autumn-gold: #D4A017;       // 秋日金 - 主要強調
$autumn-burgundy: #8B3A3A;   // 勃艮第紅 - 時尚重點
$autumn-moss: #6B8E23;       // 苔蘚綠 - 自然元素
$autumn-copper: #B87333;     // 銅棕色 - 金屬質感
$autumn-cream: #F5DEB3;      // 奶油色 - 柔和對比

// AI + Gaming 科技色彩
$ai-neural: #9B59B6;         // AI 神經紫
$pixel-cyan: #17A2B8;        // 像素青
$gaming-neon: #E74C3C;       // 遊戲霓虹
```

## 🖋️ 字體系統 (Typography)

### Fashion Editorial 字體層級
- **主標題**: `Playfair Display` (時尚編輯字體)
- **內文**: `Inter` (現代無襯線字體)
- **程式碼**: `JetBrains Mono` (像素風格等寬字體)

### 字重設定
- Light: 300 (優雅細體)
- Regular: 400 (標準內文)
- Medium: 500 (副標題)
- Semibold: 600 (重點強調)
- Bold: 700 (主標題)

## 🎭 組件系統 (Components)

### 1. Gaming Panel (遊戲面板)
```scss
.gaming-panel {
  // Autumn 漸變背景
  background: $bg-gradient-main;
  border: 2px solid $autumn-gold;
  box-shadow: $box-shadow-editorial;
  
  // 動畫邊框效果
  &::before {
    animation: autumnGlow 4s ease-in-out infinite;
  }
}
```

### 2. Editorial Card (編輯卡片)
```scss
.editorial-card {
  // Fashion 風格卡片
  background: $bg-gradient-main;
  border-left: 4px solid $autumn-gold;
  
  .card-category {
    background: rgba($autumn-gold, 0.1);
    color: $autumn-gold;
  }
}
```

### 3. Pixel Button (像素按鈕)
```scss
.pixel-btn {
  // 時尚按鈕變體
  &.editorial-primary {
    background: linear-gradient(135deg, $autumn-gold, darken($autumn-gold, 15%));
  }
  
  &.ai-neural {
    background: linear-gradient(135deg, $ai-neural, darken($ai-neural, 20%));
  }
}
```

## 🌟 特殊效果 (Special Effects)

### 1. AI Typing Animation
```scss
.ai-typing::after {
  content: '▋';
  animation: autumnCursor 1.5s infinite;
  text-shadow: 0 0 10px rgba($autumn-gold, 0.7);
}
```

### 2. Neural Background Pattern
```scss
.neural-bg::before {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba($autumn-gold, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 80% 50%, rgba($ai-neural, 0.06) 1px, transparent 1px);
}
```

### 3. Pixel Grid Overlay
```scss
.autumn-pixel-grid::after {
  background-image: 
    linear-gradient(rgba($autumn-gold, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba($autumn-copper, 0.02) 1px, transparent 1px);
  background-size: 25px 25px;
}
```

## 🎮 Pixel Art Icons

### 自訂像素圖標
- **🧠 AI Brain**: `pixel-icon ai-brain`
- **</> Fashion Code**: `pixel-icon fashion-code` 
- **🍂 Autumn Leaf**: `pixel-icon autumn-leaf`
- **🎮 Gaming Pixel**: `pixel-icon gaming-pixel`

## 📱 響應式設計 (Responsive Design)

### 斷點設定
- **Desktop**: > 1024px (完整版面)
- **Tablet**: 768px - 1024px (調整間距)
- **Mobile**: < 768px (單欄布局)

### 行動裝置優化
```scss
@media (max-width: 768px) {
  .gaming-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .editorial-card {
    padding: $space-4;
  }
}
```

## 🎨 使用指南 (Usage Guide)

### 1. 在頁面中啟用主題
```yaml
---
layout: home
classes: wide autumn-noir-theme
---
```

### 2. 使用編輯卡片
```html
<div class="editorial-card">
  <div class="card-header">
    <span class="card-category">AI Fashion</span>
    <h3 class="card-title">文章標題</h3>
  </div>
  <div class="card-content">
    <p>文章內容...</p>
  </div>
</div>
```

### 3. 添加像素按鈕
```html
<a href="#" class="pixel-btn editorial-primary">主要按鈕</a>
<a href="#" class="pixel-btn ai-neural">AI 按鈕</a>
```

## 🔄 主題自定義 (Customization)

### 修改色彩
在 `_sass/design-system/_variables.scss` 中調整色彩變數：

```scss
// 自訂秋日色彩
$autumn-gold: #YOUR_COLOR;
$autumn-burgundy: #YOUR_COLOR;
```

### 添加新組件
在 `_sass/design-system/_pixel-components.scss` 中添加新的組件樣式。

### 調整動畫
修改 keyframes 來自訂動畫效果：

```scss
@keyframes customAnimation {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}
```

## 📦 檔案結構 (File Structure)

```
_sass/
├── design-system/
│   ├── _variables.scss      // 主題變數
│   └── _pixel-components.scss // 組件樣式
├── design-system.scss       // 設計系統入口
assets/css/
└── main.scss               // 主樣式表
```

## 🚀 部署注意事項 (Deployment Notes)

1. **GitHub Pages**: 完全相容，無需額外配置
2. **圖片資源**: 確保 `/assets/images/` 中有對應的秋日主題圖片
3. **字體載入**: 確保 Google Fonts 正確載入 Playfair Display

---

**創作者**: Archi Chen  
**設計理念**: 讓技術分享如秋日時裝週般優雅而充滿詩意  
**適用場景**: 技術部落格、創意作品集、AI 工具分享