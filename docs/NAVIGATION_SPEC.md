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
