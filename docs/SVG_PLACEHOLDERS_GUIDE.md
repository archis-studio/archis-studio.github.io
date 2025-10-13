# SVG Placeholders Guide - Autumn Noir Future Theme
## 未來太空主題 SVG 佔位符使用指南

**Version**: 1.0.0 | **Created**: 2025-10-11 | **Theme**: Autumn Noir Future

---

## 🚀 概述

本文檔列出了 Autumn Noir Future 主題中所需的所有 SVG 佔位符檔案。這些 SVG 檔案用於創建動態背景、UI 元素和視覺效果，融合未來太空、AI 代理、像素藝術與復古遊戲美學。

## 📁 檔案結構

所有 SVG 佔位符應放置在 `/assets/svg-placeholders/` 目錄中。

```
assets/
└── svg-placeholders/
    ├── space-starfield-bg.svg
    ├── space-nebula-overlay.svg
    ├── ai-neural-grid.svg
    ├── retro-grid-pattern.svg
    ├── crt-scanlines.svg
    ├── space-particles.svg
    ├── ai-agent-avatar.svg
    ├── pixel-spaceship.svg
    ├── pixel-ai-chip.svg
    ├── pixel-game-console.svg
    └── pixel-quantum-core.svg
```

---

## 🌌 太空背景系統

### 1. space-starfield-bg.svg
**用途**: 動態星空背景，包含閃爍星星與移動效果
**尺寸**: 1920x1080px (16:9)
**描述**: 
- 深空背景中的隨機分佈星點
- 不同大小的星星 (1-3px)
- 色彩: #FFF4E6 (星光白) 與 #00D9FF (彗星藍)
- 透明背景，支援疊加動畫

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/space-starfield-bg.svg');
animation: starfieldMove 60s linear infinite;
```

### 2. space-nebula-overlay.svg
**用途**: 星雲疊加層，提供深度感與色彩變化
**尺寸**: 1920x1080px (16:9)
**描述**:
- 抽象的星雲形狀與漸變
- 色彩: #1A0B2E (星雲紫) 到 #FF6B9D (等離子粉)
- 柔和的邊緣與流動感
- 透明度支援 (opacity: 0.3)

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/space-nebula-overlay.svg');
animation: nebulaFloat 45s ease-in-out infinite alternate;
```

### 3. space-particles.svg
**用途**: 動態太空粒子效果，包含星塵與能量粒子
**尺寸**: 400x400px (可重複)
**描述**:
- 小型粒子點 (0.5-2px)
- 不同透明度的粒子 (0.3-0.8)
- 色彩: #00FF88 (極光綠) 與 #00D9FF (彗星藍)
- 可無縫重複的圖案

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/space-particles.svg');
animation: particleFloat 30s linear infinite;
```

---

## 🤖 AI 神經網路系統

### 4. ai-neural-grid.svg
**用途**: AI 神經網路連接圖，展示節點間的數據流動
**尺寸**: 800x800px
**描述**:
- 互相連接的節點與線條
- 節點大小: 4-8px 圓圈
- 連接線: 1-2px 粗細
- 色彩: #3498DB (神經網路藍) 與 #9B59B6 (AI 核心紫)
- 幾何式分佈，體現 AI 運算邏輯

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/ai-neural-grid.svg');
animation: neuralPulse 8s ease-in-out infinite;
```

### 5. ai-agent-avatar.svg
**用途**: AI 代理的抽象化身圖像，幾何形狀與電路圖案
**尺寸**: 200x200px
**描述**:
- 抽象幾何形狀組合
- 電路板式的線條圖案
- 色彩: #F39C12 (全息金) 與 #3498DB (神經網路藍)
- 現代科技感的視覺元素
- 透明背景，適合疊加

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/ai-agent-avatar.svg');
opacity: 0.1;
```

---

## 🕹️ 復古遊戲系統

### 6. retro-grid-pattern.svg
**用途**: 80年代風格的霓虹網格線，呈現復古科幻感
**尺寸**: 100x100px (可重複)
**描述**:
- 規則網格線條 (1px 粗細)
- 80年代霓虹色彩: #FF0080 (霓虹粉) 與 #00FFFF (霓虹青)
- 透視效果的網格消失點
- 可無縫重複的圖案

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/retro-grid-pattern.svg');
animation: gridScroll 20s linear infinite;
```

### 7. crt-scanlines.svg
**用途**: CRT 顯示器的掃描線效果，營造復古電視感
**尺寸**: 100%x4px (水平重複)
**描述**:
- 水平掃描線條
- 交替透明度 (0.1-0.3)
- 色彩: #FFFFFF (白色)
- 極細線條 (0.5px)

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/crt-scanlines.svg');
animation: scanlines 0.1s linear infinite;
```

---

## 🎮 像素藝術圖標

### 8. pixel-spaceship.svg
**用途**: 像素風格太空船圖標，用於導航與探索主題
**尺寸**: 32x32px
**描述**:
- 8-bit 像素藝術風格
- 太空船側面視角
- 色彩: #D4A017 (秋日金) 與 #00D9FF (彗星藍)
- 清晰的像素邊界

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/pixel-spaceship.svg');
animation: spaceshipFloat 3s ease-in-out infinite;
```

### 9. pixel-ai-chip.svg
**用途**: 像素風格 AI 晶片圖標，代表人工智慧與運算
**尺寸**: 32x32px
**描述**:
- 16-bit 像素藝術風格
- 電腦晶片的俯視圖
- 色彩: #9B59B6 (AI 核心紫) 與 #E67E22 (量子橙)
- 電路板細節

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/pixel-ai-chip.svg');
animation: chipPulse 2s ease-in-out infinite;
```

### 10. pixel-game-console.svg
**用途**: 像素風格遊戲手把圖標，代表遊戲與互動
**尺寸**: 32x32px
**描述**:
- 經典遊戲手把造型
- 復古 8-bit 風格
- 色彩: #8B3A3A (勃艮第紅) 與 #A0A0A5 (優雅灰)
- 按鈕與方向鍵細節

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/pixel-game-console.svg');
animation: consoleBlink 4s ease-in-out infinite;
```

### 11. pixel-quantum-core.svg
**用途**: 像素風格量子核心圖標，代表高科技與未來
**尺寸**: 32x32px
**描述**:
- 抽象的量子核心設計
- 幾何對稱圖案
- 色彩: #00FF88 (極光綠) 與 #FF6B9D (等離子粉)
- 能量流動的視覺效果

**SCSS 使用**:
```scss
background-image: url('/assets/svg-placeholders/pixel-quantum-core.svg');
animation: quantumSpin 6s linear infinite;
```

---

## 🎨 色彩規範

### 主要色彩 (保留秋季色系)
- **秋日金**: #D4A017
- **勃艮第紅**: #8B3A3A
- **苔蘚綠**: #6B8E23
- **銅棕色**: #B87333

### 太空色彩
- **彗星藍**: #00D9FF
- **極光綠**: #00FF88
- **等離子粉**: #FF6B9D
- **星光白**: #FFF4E6

### AI 色彩
- **AI 核心紫**: #9B59B6
- **神經網路藍**: #3498DB
- **量子橙**: #E67E22
- **全息金**: #F39C12

### 復古色彩
- **霓虹粉**: #FF0080
- **霓虹青**: #00FFFF
- **霓虹綠**: #CCFF00
- **琥珀黃**: #FFBF00

---

## 📐 設計準則

### 1. 像素完美
- 所有像素藝術圖標必須對齊像素網格
- 避免抗鋸齒效果
- 使用明確的像素邊界

### 2. 色彩一致性
- 遵循上述色彩規範
- 保持色彩的和諧統一
- 適當運用漸變效果

### 3. 動畫友善
- SVG 元素應支援 CSS 動畫
- 考慮動畫性能優化
- 提供多種透明度變化

### 4. 響應式設計
- 支援不同解析度
- 可縮放的向量圖形
- 適配深色與淺色模式

---

## 🛠️ 技術規格

### 檔案格式
- **格式**: SVG (Scalable Vector Graphics)
- **編碼**: UTF-8
- **壓縮**: 優化但保留可讀性

### 兼容性
- **瀏覽器**: 支援現代瀏覽器 (Chrome 60+, Firefox 55+, Safari 12+)
- **框架**: 兼容 Jekyll + Minimal Mistakes
- **性能**: 檔案大小 < 10KB per file

### 使用建議
- 使用 CSS `background-image` 屬性載入
- 配合 CSS 動畫實現動態效果
- 適當設定 `z-index` 層級
- 考慮行動裝置性能優化

---

**創建者**: Archi Chen  
**設計理念**: 融合秋季溫暖與未來科技，創造獨特的視覺體驗  
**更新頻率**: 根據主題發展需求更新