# 🎨 像素圖創作詳細規格表
# Pixel Art Creation Specifications

## 📋 **Phase 1 創作清單**

### ✅ **需要 SVG 支援的項目**
這些項目建議使用 **SVG 格式**，因為需要響應式縮放和互動效果：

#### 1️⃣ **學習曲線主視覺 (Hero 區塊)**
#### 2️⃣ **進度條和 UI 元素**

### ✅ **適合 PNG 格式的項目** 
這些項目使用 **PNG 格式**，因為是靜態圖標：

#### 3️⃣ **四大技能領域圖標**

---

## 🎯 **1. 學習曲線主視覺 (Hero 區塊) - SVG**

### **檔案規格**
```
格式: SVG (可縮放向量圖)
尺寸: 800x400px (viewBox)
檔名: learning-curve-main.svg
路徑: /assets/images/pixel-art/hero/learning-curve-main.svg
```

### **設計要求**
```scss
// 使用舒適閱讀版配色
主色調: 
- 新手階段: #388E3C (深森林綠)
- AI工具階段: #FF9800 (溫暖橙)  
- 程式設計階段: #7B1FA2 (深紫)
- 專業化階段: #0277BD (信任藍)
- 專家階段: #E91E63 (強調粉)

背景色: #0a0a0a (深黑)
文字色: #f5f5f5 (柔和白)
輔助色: #b3b3b3 (舒適灰)
```

### **核心元素**
1. **學習階段柱狀圖** (5根柱子，高度遞增)
2. **連接線/成長路徑** (像素風格箭頭或點線)
3. **階段標籤** (新手→AI工具→程式設計→專業化→專家)
4. **進度指示器** (75% 完成度顯示)
5. **裝飾元素** (星星、經驗值點、成就圖標)

### **SVG 優勢需求**
- ✅ **響應式縮放** (Desktop 800px → Mobile 400px)
- ✅ **互動動畫** (懸停效果、進度條動畫)
- ✅ **文字清晰度** (各種解析度下文字清楚)
- ✅ **色彩漸變** (多階段漸變效果)

### **當前 SVG 結構參考**
```xml
<!-- 你可以基於現有的 learning-curve-hero.svg 優化 -->
<svg width="800" height="400" viewBox="0 0 800 400">
  <!-- 5個學習階段的像素柱 -->
  <!-- 連接路徑動畫 -->
  <!-- 進度條元素 -->
  <!-- 裝飾性像素元素 -->
</svg>
```

---

## 🎮 **2. 四大技能領域圖標 - PNG**

### **檔案規格**
```
格式: PNG (透明背景)
尺寸: 64x64px (主要), 32x32px (小版本)
像素網格: 8x8 基準對齊
檔案路徑:
├── /assets/images/pixel-art/skills/ai-tools-64px.png
├── /assets/images/pixel-art/skills/programming-64px.png  
├── /assets/images/pixel-art/skills/data-analysis-64px.png
└── /assets/images/pixel-art/skills/personal-growth-64px.png
```

### **設計規格詳細說明**

#### **🤖 AI 工具圖標**
```
主題: 智能機器人/AI大腦
主色: #0277BD (信任藍)
輔色: #388E3C (成功綠)
元素建議:
- 像素風格機器人頭部 (方形設計)
- 發光的 "眼睛" (2x2 像素)
- 天線或信號符號
- 電路板紋路裝飾
- 可選: "AI" 字樣像素字體

像素構成 (64x64 網格):
┌─────────────────┐
│    ░░░░░░░░    │  ← 8px 邊距
│  ████████████  │  ← 機器人輪廓  
│  ██░░██░░████  │  ← 眼睛 + 面部
│  ██████████    │  ← 嘴部/介面
│      ░░░░      │  ← 天線
└─────────────────┘
```

#### **💻 程式設計圖標**
```
主題: 代碼編輯器/終端
主色: #7B1FA2 (創意紫)
輔色: #FF9800 (活力橙)
元素建議:
- 代碼括號 { }
- 像素字體程式碼片段  
- 終端游標閃爍效果
- 語法高亮顏色
- 可選: 螢幕邊框裝飾

像素構成:
┌─────────────────┐
│ ████████████████│  ← 螢幕邊框
│ █{           }█ │  ← 括號
│ █  if(true)   █ │  ← 程式碼
│ █    return;  █ │  
│ █          ░  █ │  ← 游標
└─────────────────┘
```

#### **📊 數據分析圖標** 
```
主題: 圖表/統計圖
主色: #FF9800 (溫暖橙)
輔色: #388E3C (成功綠), #E91E63 (強調粉)
元素建議:
- 柱狀圖 (不同高度)
- 趨勢線 (上升曲線)
- 數據點裝飾
- 坐標軸
- 可選: 百分比符號

像素構成:
┌─────────────────┐
│       ●───●     │  ← 趨勢線
│      ███ ███    │  ← 柱狀圖
│    ███ █████    │
│  ███ ███████    │
│ ████ ████████   │
└─┴─┴─┴─┴─┴─┴─┴─┘  ← 坐標軸
```

#### **🌱 個人成長圖標**
```
主題: 成長樹/升級箭頭
主色: #388E3C (成長綠)  
輔色: #FFC107 (經驗金)
元素建議:
- 像素風格樹木 (分層生長)
- 升級箭頭符號
- 星星/光環裝飾
- 等級指示器
- 可選: 成長環圈

像素構成:
┌─────────────────┐
│      ★ ★ ★      │  ← 成就星星
│    ████████     │  ← 樹冠
│   ██████████    │
│      ████       │  ← 樹幹
│   ↑ ████ ↑     │  ← 成長箭頭
└─────────────────┘
```

### **PNG 製作要求**
- ✅ **透明背景** (去除白色背景)
- ✅ **像素完美** (無反鋸齒，crisp edges)
- ✅ **8px 網格對齊** (所有元素對齊網格)
- ✅ **一致風格** (相同的像素密度和設計語言)

---

## 📊 **3. 進度條和 UI 元素 - SVG** 

### **檔案規格**
```
格式: SVG (支援動畫)
主檔案: progress-bar-complete.svg  
尺寸: 400x60px (可縮放)
路徑: /assets/images/pixel-art/ui/
```

### **需要創作的元素**

#### **A. 主進度條**
```xml
<!-- 像素風格進度條 -->
<svg width="400" height="60" viewBox="0 0 400 60">
  <!-- 外框 (遊戲風格邊框) -->
  <!-- 背景條 (深色) -->
  <!-- 進度填充 (漸變) -->
  <!-- 像素分段標記 -->
  <!-- 百分比文字 -->
</svg>
```

#### **B. 技能等級條**
```
用途: 顯示各技能領域精通度
樣式: RPG 風格血條設計
顏色: 對應各技能主色
```

#### **C. 經驗值條**
```
用途: 學習經驗累積顯示
樣式: 金色漸變 + 發光效果
動畫: 填充動畫 + 脈衝效果
```

### **SVG 動畫需求**
- ✅ **填充動畫** (`<animateTransform>`)
- ✅ **發光脈衝** (`<animate attributeName="opacity">`)
- ✅ **漸變效果** (`<linearGradient>`)
- ✅ **響應式縮放** (viewBox 縮放)

---

## 🛠️ **技術整合規格**

### **SVG 檔案結構**
```xml
<!-- 標準 SVG 檔頭 -->
<svg width="800" height="400" viewBox="0 0 800 400" 
     xmlns="http://www.w3.org/2000/svg">
     
  <defs>
    <!-- 色彩定義 -->
    <linearGradient id="skillGradient">
      <stop offset="0%" stop-color="#388E3C"/>
      <stop offset="100%" stop-color="#0277BD"/>
    </linearGradient>
    
    <!-- 像素網格 pattern -->
    <pattern id="pixelGrid" patternUnits="userSpaceOnUse" 
             width="8" height="8">
      <rect width="8" height="8" fill="none" 
            stroke="rgba(2,119,189,0.05)"/>
    </pattern>
  </defs>
  
  <!-- 主要圖形元素 -->
  <!-- 動畫元素 -->
</svg>
```

### **CSS 整合**
```scss
// SVG 像素完美渲染
.pixel-art-svg {
  image-rendering: pixelated;
  shape-rendering: crispEdges;
  
  // 響應式縮放
  width: 100%;
  max-width: 800px;
  height: auto;
}

// PNG 圖標渲染  
.skill-icon-png {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  width: 64px;
  height: 64px;
}
```

### **HTML 使用範例**
```html
<!-- SVG 主視覺 -->
<div class="hero-pixel-learning">
  <object data="/assets/images/pixel-art/hero/learning-curve-main.svg" 
          type="image/svg+xml" class="pixel-art-svg">
    <!-- PNG 後備 -->
    <img src="/assets/images/pixel-art/hero/learning-curve-fallback.png" 
         alt="學習曲線">
  </object>
</div>

<!-- PNG 技能圖標 -->
<div class="skill-icons-grid">
  <div class="skill-icon">
    <img src="/assets/images/pixel-art/skills/ai-tools-64px.png" 
         alt="AI 工具" class="skill-icon-png">
  </div>
</div>
```

---

## 🎯 **創作優先級和時程建議**

### **Week 1: 技能圖標 PNG (4個)**
```
優先級: 🔥 HIGH
理由: 相對簡單，可快速看到效果
工作量: 每個圖標約 2-3 小時
```

### **Week 2: 進度條 UI 元素 SVG**  
```
優先級: 🔥 HIGH
理由: 網站互動體驗核心
工作量: 約 4-6 小時
```

### **Week 3: 學習曲線主視覺 SVG**
```
優先級: 🔥 CRITICAL  
理由: 網站首頁核心視覺
工作量: 約 8-10 小時 (最複雜)
```

---

## 💡 **創作工具建議**

### **SVG 創作**
- **推薦**: Adobe Illustrator + 像素網格設定
- **替代**: Inkscape (免費) + 自定義網格
- **線上**: SVG-Edit + 手動編碼優化

### **PNG 像素圖** 
- **推薦**: Aseprite (像素動畫專業)
- **替代**: Piskel (免費線上)
- **進階**: Photoshop 像素模式

### **色彩工具**
- **調色盤**: 使用我提供的舒適閱讀版色碼
- **對比度檢查**: WebAIM Color Contrast Checker

---

**🚀 準備好開始創作了嗎？我建議從技能圖標開始，因為它們相對簡單但效果明顯！**

你希望我詳細說明哪個部分的創作細節？或是你有其他技術問題需要討論？ 🎨✨