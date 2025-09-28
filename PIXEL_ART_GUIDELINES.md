# 像素圖畫資源管理指南
# Pixel Art Assets Guidelines

## 📁 檔案結構規劃

### 主要資源目錄
```
assets/
├── images/
│   └── pixel-art/
│       ├── hero/              # 主視覺像素圖
│       ├── learning-curve/    # 學習曲線相關
│       ├── skills/            # 技能圖標
│       ├── icons/             # 通用圖標
│       └── backgrounds/       # 背景紋理
├── svg-placeholders/          # SVG 預留位置 (當前使用)
└── css/
    └── pixel-animations.scss  # 像素動畫樣式
```

## 🎨 檔案命名規範

### 命名格式
```
[類型]-[用途]-[變體].[副檔名]
```

### 具體範例
```
hero-learning-curve-main.png          # 主要學習曲線視覺
hero-learning-curve-mobile.png        # 手機版學習曲線
skill-icon-ai-tools-32px.png         # AI工具圖標 32像素
skill-icon-programming-32px.png       # 程式設計圖標 32像素
progress-bar-horizontal.png           # 水平進度條
progress-bar-vertical.png             # 垂直進度條
bg-pattern-grid-dark.png              # 深色網格背景
ui-button-primary-normal.png          # 主要按鈕 (正常狀態)
ui-button-primary-hover.png           # 主要按鈕 (懸停狀態)
```

## 🎯 當前預留位置對應

### Hero 區塊
- **預留檔案**: `assets/svg-placeholders/learning-curve-hero.svg`
- **最終檔案**: `assets/images/pixel-art/hero/learning-curve-main.png`
- **尺寸規格**: 800x400px (2x), 400x200px (1x)
- **內容**: 學習曲線進度圖，從新手到專家的視覺化

### 技能圖標
- **預留檔案**: `assets/svg-placeholders/skill-icons.svg`
- **最終檔案**: 
  ```
  assets/images/pixel-art/skills/ai-tools-32px.png
  assets/images/pixel-art/skills/programming-32px.png
  assets/images/pixel-art/skills/data-analysis-32px.png
  assets/images/pixel-art/skills/growth-32px.png
  ```
- **尺寸規格**: 32x32px, 64x64px (高解析度)

### 進度條元素
- **預留檔案**: `assets/svg-placeholders/progress-bar.svg`
- **最終檔案**: `assets/images/pixel-art/ui/progress-bar-segments.png`
- **尺寸規格**: 300x60px

## 🛠️ 技術規格

### 像素圖規格
- **解析度**: 原生像素 (無反鋸齒)
- **色彩**: 限制調色盤 (AI藍 #00d9ff, AI綠 #00ff88, AI紫 #8b5cf6 等)
- **格式**: PNG (透明背景) 或 PNG (有背景)
- **網格**: 8x8 像素基準網格

### 響應式考量
```
Desktop:  原尺寸 (800x400)
Tablet:   0.75x  (600x300) 
Mobile:   0.5x   (400x200)
```

## 🔄 替換流程

### 步驟 1: 準備新資源
1. 按照命名規範建立像素圖檔案
2. 確保尺寸符合規格
3. 測試在不同裝置上的顯示效果

### 步驟 2: 更新程式碼
```html
<!-- 從 SVG 預留位置 -->
<img src="/assets/svg-placeholders/learning-curve-hero.svg" alt="Learning Curve">

<!-- 替換為像素圖 -->
<img src="/assets/images/pixel-art/hero/learning-curve-main.png" 
     srcset="/assets/images/pixel-art/hero/learning-curve-main@2x.png 2x"
     alt="Learning Curve - Pixel Art">
```

### 步驟 3: CSS 優化
```css
.pixel-art {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  shape-rendering: crispEdges;
}
```

## 🎮 像素風格設計原則

### 色彩調色盤
```css
/* AI Coding Theme Colors */
--pixel-ai-blue:    #00d9ff;
--pixel-ai-green:   #00ff88;
--pixel-ai-purple:  #8b5cf6;
--pixel-ai-yellow:  #fbbf24;
--pixel-bg-dark:    #0a0a0a;
--pixel-surface:    #1a1a1a;
--pixel-text:       #ffffff;
--pixel-accent:     #ff6b6b;
```

### 視覺元素
- **網格感**: 8px 基準網格，保持像素對齊
- **簡化設計**: 避免複雜細節，突出核心概念
- **動畫效果**: 簡單的像素動畫 (閃爍、移動、變色)
- **一致性**: 所有像素圖使用相同的視覺語言

## 📋 待建立的像素圖清單

### Priority 1 (立即需要)
- [ ] 主要學習曲線視覺 (Hero)
- [ ] 5個技能領域圖標
- [ ] 進度條和UI元素

### Priority 2 (後續優化)
- [ ] 背景紋理和裝飾
- [ ] 動畫序列圖
- [ ] 互動狀態圖標

### Priority 3 (進階功能)
- [ ] 個人成長時間軸
- [ ] 技能樹展開圖
- [ ] 成就徽章系統

## 💡 創作工具建議

### 像素圖編輯器
- **Aseprite** (推薦，專業像素動畫)
- **Piskel** (免費線上工具)
- **Adobe Photoshop** (像素模式)
- **GIMP** (免費替代)

### 色彩工具
- **Coolors.co** (調色盤生成)
- **Adobe Color** (色彩搭配)

## 🚀 實現計畫

1. **Week 1**: 完成主要 Hero 學習曲線視覺
2. **Week 2**: 建立技能圖標套組  
3. **Week 3**: 設計 UI 元素和進度條
4. **Week 4**: 整合測試和優化

---

**記住**: 所有像素圖都應該體現「學習成長」和「個人品牌」的核心理念！