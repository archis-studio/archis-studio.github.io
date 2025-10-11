# Design System 規格書
# Version 1.0.0 | Updated: 2025-10-11

## 🎨 設計原則

**Keep It Simple**:
- 現代簡約風格
- 內容優先設計
- 系統化可擴展

**品牌特質**: 專業、友善、教育導向

---

## 🎨 色彩系統

### 像素遊戲風格配色
```scss
// 主要色彩 - AI + Gaming 主題
$pixel-blue: #00BFFF;     // 電子藍 - 主要 AI 色彩
$pixel-green: #00FF7F;    // 駭客綠 - 成功/完成狀態
$pixel-purple: #9370DB;   // 神秘紫 - AI 神經網路
$pixel-orange: #FF6347;   // 警示橙 - 重要提醒
$pixel-cyan: #00FFFF;     // 螢光青 - 連結/互動

// 遊戲 UI 色彩
$game-bg-dark: #0A0A0F;   // 深空背景
$game-bg-mid: #1A1A2E;    // 中層背景
$game-text: #FFFFFF;      // 主文字
$game-text-dim: #B0B0C4;  // 次要文字
$game-border: #16213E;    // 邊框色彩

// 灰階系統 (保持原有但調整為遊戲風格)
$gray-900: #0A0A0F;  // 深空黑
$gray-700: #1A1A2E;  // 太空灰
$gray-500: #B0B0C4;  // 次要文字
$gray-300: #16213E;  // 邊框
$gray-100: #F0F0F5;  // 淺背景
$white: #FFFFFF;     // 純白
```

---

## ✍️ Typography System (文字系統)

### Font Families (字型家族)
```scss
// 英文字型
$font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
$font-heading: 'Montserrat', $font-primary;
$font-code: 'JetBrains Mono', 'SF Mono', Monaco, Consolas, monospace;

// 繁體中文字型
$font-chinese: 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif;
$font-display: 'Noto Serif TC', Georgia, serif; // 特殊標題使用
```

### Typography Scale (文字比例)
```scss
// 基於 1.25 倍率的 modular scale
$font-size-xs:   0.75rem;   // 12px - 小標籤、輔助資訊
$font-size-sm:   0.875rem;  // 14px - 次要文字、說明
$font-size-base: 1rem;      // 16px - 內文、基礎文字
$font-size-lg:   1.125rem;  // 18px - 重要文字、引言
$font-size-xl:   1.25rem;   // 20px - 小標題
$font-size-2xl:  1.5rem;    // 24px - 中標題  
$font-size-3xl:  1.875rem;  // 30px - 大標題
$font-size-4xl:  2.25rem;   // 36px - 主標題
$font-size-5xl:  3rem;      // 48px - 特大標題
$font-size-6xl:  4rem;      // 64px - 展示標題
```

### Line Heights (行高)
```scss
$line-height-tight: 1.25;   // 緊密 - 大標題
$line-height-snug: 1.375;   // 適中 - 小標題  
$line-height-normal: 1.5;   // 標準 - 內文
$line-height-relaxed: 1.625; // 寬鬆 - 長文章
$line-height-loose: 2;      // 極寬 - 特殊用途
```

### Font Weights (字重)
```scss
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
$font-weight-extrabold: 800;
```

---

## 📏 Spacing System (間距系統)

### Spacing Scale (間距比例)
```scss
// 基於 8px grid system
$space-0:  0;
$space-1:  0.25rem;  // 4px
$space-2:  0.5rem;   // 8px  
$space-3:  0.75rem;  // 12px
$space-4:  1rem;     // 16px
$space-5:  1.25rem;  // 20px
$space-6:  1.5rem;   // 24px
$space-8:  2rem;     // 32px
$space-10: 2.5rem;   // 40px
$space-12: 3rem;     // 48px
$space-16: 4rem;     // 64px
$space-20: 5rem;     // 80px
$space-24: 6rem;     // 96px
$space-32: 8rem;     // 128px
```

### Container Sizes (容器尺寸)
```scss
// Responsive container widths
$container-xs: 480px;   // 手機橫向
$container-sm: 640px;   // 小平板
$container-md: 768px;   // 大平板
$container-lg: 1024px;  // 小筆電
$container-xl: 1280px;  // 大螢幕
$container-2xl: 1536px; // 超大螢幕

// Content max-widths  
$content-width: 65ch;   // 最佳閱讀寬度
$prose-width: 75ch;     // 長文章寬度
```

---

## 🔲 Component System (元件系統)

### Button Components (按鈕元件)
```scss
// Base button styles
.btn {
  // 基礎樣式
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $space-3 $space-6;
  font-family: $font-primary;
  font-weight: $font-weight-medium;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;

  // Sizes
  &--sm { padding: $space-2 $space-4; font-size: $font-size-sm; }
  &--md { padding: $space-3 $space-6; font-size: $font-size-base; } // default
  &--lg { padding: $space-4 $space-8; font-size: $font-size-lg; }

  // Variants
  &--primary {
    background-color: $accent-blue;
    color: $primary-50;
    &:hover { background-color: darken($accent-blue, 8%); }
  }

  &--secondary {
    background-color: $primary-200;
    color: $primary-800;
    &:hover { background-color: $primary-300; }
  }

  &--outline {
    background-color: transparent;
    color: $accent-blue;
    border-color: $accent-blue;
    &:hover {
      background-color: $accent-blue;
      color: $primary-50;
    }
  }
}
```

### Card Components (卡片元件)
```scss
.card {
  background-color: $primary-50;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba($primary-900, 0.1);
  overflow: hidden;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba($primary-900, 0.15);
  }

  &__header {
    padding: $space-6;
    border-bottom: 1px solid $primary-200;
  }

  &__body {
    padding: $space-6;
  }

  &__footer {
    padding: $space-4 $space-6;
    background-color: $primary-100;
    border-top: 1px solid $primary-200;
  }
}
```

### Navigation Components (導航元件)
```scss
.nav {
  &__item {
    color: $primary-600;
    text-decoration: none;
    font-weight: $font-weight-medium;
    padding: $space-2 $space-4;
    border-radius: 0.25rem;
    transition: all 0.2s ease;

    &:hover {
      color: $accent-blue;
      background-color: $primary-100;
    }

    &--active {
      color: $accent-blue;
      background-color: rgba($accent-blue, 0.1);
    }
  }
}
```

---

## 📱 Responsive Design (響應式設計)

### Breakpoints (中斷點)
```scss
$breakpoints: (
  'xs': 0,
  'sm': 640px,
  'md': 768px,  
  'lg': 1024px,
  'xl': 1280px,
  '2xl': 1536px
);
```

### Responsive Mixins (響應式 Mixins)
```scss
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    $value: map-get($breakpoints, $breakpoint);
    @if $value > 0 {
      @media (min-width: $value) { @content; }
    } @else {
      @content;
    }
  }
}
```

---

## ♿ Accessibility (無障礙設計)

### Color Contrast (色彩對比)
- 標準文字: 最少 4.5:1 對比度
- 大文字 (18px+): 最少 3:1 對比度  
- 非文字元素: 最少 3:1 對比度

### Focus States (焦點狀態)
```scss
.focus-visible {
  outline: 2px solid $accent-blue;
  outline-offset: 2px;
}
```

### Screen Reader Support (螢幕閱讀器支援)
```scss
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 🎭 Animation System (動畫系統)

### Easing Functions (緩動函數)
```scss
$ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
$ease-in-out-quint: cubic-bezier(0.83, 0, 0.17, 1);
```

### Animation Durations (動畫時長)
```scss
$duration-fast: 150ms;
$duration-normal: 250ms;
$duration-slow: 350ms;
```

---

## 📐 Layout System (版面系統)

### Grid System (網格系統)
```scss
.grid {
  display: grid;
  gap: $space-6;
  
  &--cols-1 { grid-template-columns: 1fr; }
  &--cols-2 { grid-template-columns: repeat(2, 1fr); }
  &--cols-3 { grid-template-columns: repeat(3, 1fr); }
  &--cols-4 { grid-template-columns: repeat(4, 1fr); }

  // Responsive variants
  @include respond-to('md') {
    &--md-cols-2 { grid-template-columns: repeat(2, 1fr); }
    &--md-cols-3 { grid-template-columns: repeat(3, 1fr); }
  }

  @include respond-to('lg') {
    &--lg-cols-3 { grid-template-columns: repeat(3, 1fr); }
    &--lg-cols-4 { grid-template-columns: repeat(4, 1fr); }
  }
}
```

---

## ✅ 實作檢查清單 (Implementation Checklist)

### Design Token 實作
- [ ] 所有 color variables 定義完成
- [ ] Typography scale 建立完成
- [ ] Spacing system 建立完成
- [ ] Responsive breakpoints 設定完成

### Component 實作  
- [ ] Base components (Button, Card, Nav) 建立
- [ ] Responsive behavior 測試完成
- [ ] Accessibility attributes 新增完成
- [ ] Browser compatibility 驗證完成

### Documentation
- [ ] Component usage examples 建立
- [ ] Code snippets 提供完整
- [ ] Implementation notes 記錄清楚

---

**下一步**: 閱讀 `MINIMAL_MISTAKES_CUSTOMIZATION.md` 了解如何在 MM 主題中實作此設計系統