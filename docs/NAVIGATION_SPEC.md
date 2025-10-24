# Navigation 導航規格書
# Version 1.0.0 | Updated: 2025-10-16

## 🧭 導航架構

**基於**: Minimal Mistakes Masthead  
**風格**: Gaming Pixel + Future Space  
**字型**: JetBrains Mono (像素風格)

---

## 📋 導航項目結構

### 主選單 (_data/navigation.yml)
```yaml
main:
  - title: "🏠 首頁"
    url: /
  - title: "📖 文章"
    url: /posts/
  - title: "📂 分類"
    url: /categories/
  - title: "ℹ️ 關於"
    url: /about/
  - title: "🎨 展示空間"
    children:
      - title: "🍂 Future Demo"
        url: /future-demo/
```

### 品牌區域
```yaml
# _config.yml
masthead_title: "Archis Studio"
masthead_subtitle: "Crafting the Future: AI, Pixel Art & Autumn Vibes"
logo: "/assets/images/autumn-logo.png"
```

---

## 🎨 視覺設計規格

### 背景設計
```scss
.masthead {
  // 太空星雲背景
  background: linear-gradient(135deg, 
    $space-void 0%,      // #0F0F12
    $space-nebula 25%,   // #1A1B2E  
    $noir-black 50%,     // #0E0E10
    $space-nebula 75%,   // #1A1B2E
    $space-void 100%     // #0F0F12
  );
  
  // 星空點點效果 (可選)
  background-image: 
    radial-gradient(2px 2px at 20px 30px, $space-starlight, transparent),
    radial-gradient(2px 2px at 40px 70px, $autumn-gold, transparent),
    radial-gradient(1px 1px at 90px 40px, $space-comet, transparent);
  background-size: 200px 100px;
  background-repeat: repeat;
  
  // 基本屬性
  height: 80px;
  padding: 1rem 0;
  border-bottom: 2px solid $noir-border;
  position: relative;
  z-index: 20;
}
```

### 品牌標題樣式
```scss
.site-title {
  font-family: $serif-editorial; // Playfair Display
  font-size: 1.8rem;
  font-weight: $font-bold;
  color: $autumn-gold;
  text-decoration: none;
  text-shadow: 0 0 10px rgba($autumn-gold, 0.5);
  
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
