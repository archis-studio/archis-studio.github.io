# 導航選單下拉功能更新

**更新日期**: 2025-10-14  
**功能**: 下拉選單 (Dropdown Menu)

---

## ✨ 更新內容

### 1. 導航結構調整

**之前**:
```yaml
- 🏠 首頁
- 📖 文章
- 📂 分類
- 🍂 Future Demo    ← 直接顯示
- ℹ️ 關於          ← 直接顯示
```

**現在**:
```yaml
- 🏠 首頁
- 📖 文章
- 📂 分類
- 🎨 展示空間 ▼     ← 新增父選單
  └─ 🍂 Future Demo  ← 移入下拉選單
- ℹ️ 關於           ← 移出到主選單
```

### 2. navigation.yml 設定

```yaml
main:
  - title: "🏠 首頁"
    url: /
  - title: "📖 文章"
    url: /posts/
  - title: "📂 分類"
    url: /categories/
  - title: "🎨 展示空間"      # 新增父項目
    children:                  # 子選單
      - title: "🍂 Future Demo"
        url: /future-demo/
  - title: "ℹ️ 關於"
    url: /about/
```

### 3. 未來擴充

可以在「展示空間」下新增更多頁面：

```yaml
- title: "🎨 展示空間"
  children:
    - title: "🍂 Future Demo"
      url: /future-demo/
    - title: "🎮 Gaming Theme"    # 未來可新增
      url: /gaming-demo/
    - title: "🤖 AI Showcase"     # 未來可新增
      url: /ai-showcase/
    - title: "🎨 Pixel Gallery"   # 未來可新增
      url: /pixel-gallery/
```

---

## 🎨 下拉選單設計特色

### **視覺風格**
- ✨ 未來太空漸層背景 (`$space-nebula` → `$space-void`)
- ✨ 毛玻璃效果 (`backdrop-filter: blur(20px)`)
- ✨ AI 光暈邊框 (`$space-comet` 邊框 + 多層陰影)
- ✨ 像素掃描線效果
- ✨ 上方三角形箭頭指示器

### **互動效果**
- 🎯 父項目顯示 "▼" 箭頭
- 🎯 Hover 父項目時箭頭旋轉 180°
- 🎯 Hover 時下拉選單滑入顯示
- 🎯 子項目 Hover 變金色 + 左側邊框
- 🎯 右側霓虹光點脈衝動畫

### **過渡動畫**
- 下拉選單：淡入 + 向上滑動
- 父項目箭頭：旋轉動畫
- 子項目：背景色 + 左內距增加
- 圖示：放大旋轉 + 光暈效果

---

## 📐 技術細節

### **定位方式**
```scss
.dropdown-menu {
  position: absolute;
  top: 100%;              // 在父元素下方
  left: 50%;              // 水平置中
  transform: translateX(-50%);  // 完全置中
}
```

### **顯示/隱藏控制**
```scss
// 初始狀態：隱藏
opacity: 0;
visibility: hidden;
transform: translateY(10px);

// Hover 時：顯示
&:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

### **子項目樣式**
```scss
a {
  padding: 0.75rem 1.5rem;
  font-size: 0.8rem;
  border-left: 3px solid transparent;
  
  &:hover {
    background: rgba($autumn-gold, 0.15);
    border-left-color: $autumn-gold;
    padding-left: 2rem;  // 向右推移
  }
}
```

---

## 🎯 優點

### **1. 空間管理**
- ✅ 主導航欄保持簡潔
- ✅ 未來可輕鬆擴充更多頁面
- ✅ 避免導航欄過度擁擠

### **2. 內容組織**
- ✅ 邏輯分組："展示空間"包含所有 Demo 頁面
- ✅ 主要功能（文章、分類、關於）保持直接可達
- ✅ 實驗性/展示性內容放在子選單

### **3. 使用者體驗**
- ✅ 清晰的視覺層級
- ✅ 流暢的動畫過渡
- ✅ 明確的互動反饋（箭頭、顏色變化）
- ✅ 符合整體 Future Space 主題

### **4. 可擴展性**
- ✅ 輕鬆新增更多子項目
- ✅ 可創建多個下拉選單（如需要）
- ✅ 樣式系統化，易於調整

---

## 📱 響應式行為

### **桌機版 (>1024px)**
- 顯示完整主導航
- Hover 顯示下拉選單
- 下拉選單水平置中

### **平板/手機版 (≤1024px)**
- 折疊為漢堡選單
- 點擊展開垂直選單
- 子項目內縮顯示

---

## 🧪 測試檢查清單

請在瀏覽器中測試：

- [ ] 主導航顯示：首頁、文章、分類、展示空間、關於
- [ ] "展示空間" 右側顯示 "▼" 箭頭
- [ ] Hover "展示空間" 時箭頭旋轉
- [ ] 下拉選單滑入顯示
- [ ] 下拉選單顯示 "Future Demo"
- [ ] 下拉選單有星雲背景 + 光暈邊框
- [ ] 上方有三角形箭頭
- [ ] Hover "Future Demo" 變金色 + 左側邊框
- [ ] 右側出現脈衝光點
- [ ] 圖示放大旋轉
- [ ] 移開滑鼠，下拉選單隱藏
- [ ] 手機版漢堡選單正常運作

---

## 🎨 自訂建議

### **更改父選單名稱**
```yaml
- title: "🌟 更多精彩"  # 或其他名稱
  children:
    - title: "🍂 Future Demo"
      url: /future-demo/
```

### **調整下拉選單寬度**
```scss
.dropdown-menu {
  min-width: 250px;  // 改為 250px
}
```

### **調整動畫速度**
```scss
transition: all $ease-cyber 0.5s;  // 改為 0.5 秒
```

### **新增圖示到父項目**
```yaml
- title: "🎨 展示空間"
  # CSS 中可以用 ::before 添加自訂 SVG
```

---

## 📝 下次可新增的內容

當你想在「展示空間」新增頁面時：

1. 在 `navigation.yml` 的 `children` 下新增項目
2. 創建對應的頁面檔案（如 `/gaming-demo.md`）
3. （可選）在 CSS 中為新頁面添加專屬圖示

範例：
```yaml
- title: "🎨 展示空間"
  children:
    - title: "🍂 Future Demo"
      url: /future-demo/
    - title: "🎮 Gaming Theme"
      url: /gaming-demo/
```

---

## 🚀 部署

確認效果滿意後：
```bash
git add _data/navigation.yml assets/css/main.scss
git commit -m "✨ Add dropdown menu for showcase pages, move About to main nav"
git push origin main
```

---

**測試網址**: http://127.0.0.1:4001/

**相關文檔**: `docs/MASTHEAD_UPDATE.md`
