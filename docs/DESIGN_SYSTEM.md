# Design System 規格書
# Version 1.2.0 | Updated: 2025-10-16

## 🎨 設計原則

**Jekyll 基礎**: Minimal Mistakes Theme + Dark Mode

**四重風格融合**:
- 🎭 **Fashion Editorial**: 時尚編輯版面，優雅排版
- 🍂 **Autumn Noir**: 秋日黑色美學，溫暖深色調
- 🎮 **Gaming Pixel Art**: 遊戲像素風格，復古科技感
- 🚀 **AI Future Space**: 人工智慧未來太空，科幻元素

**Keep It Simple**: 內容優先，系統化可擴展

---

## 🎨 色彩系統

### Autumn Noir 核心色彩
```scss
// 深色基調 (Dark Mode Base)
$noir-black: #0E0E10;     // 深邃黑 - 主背景
$noir-gray: #1C1C1E;      // 暖灰 - 中層背景  
$noir-border: #2C2C2E;    // 邊框灰
$noir-text: #EDEDED;      // 主文字 - 溫暖白
$noir-text-muted: #A0A0A5; // 次要文字 - 優雅灰
```

### Fashion Editorial 色彩調色盤
```scss
$autumn-gold: #D4A017;    // 秋日金 - 主要強調色
$autumn-burgundy: #8B3A3A; // 勃艮第紅 - 時尚重點
$autumn-moss: #6B8E23;    // 苔蘚綠 - 自然元素
$autumn-copper: #B87333;  // 銅棕色 - 金屬質感
$autumn-cream: #F5DEB3;   // 奶油色 - 柔和對比
```

### AI Future Space 色彩
```scss
$space-void: #0F0F12;     // 太空虛空
$space-nebula: #1A1B2E;   // 星雲紫
$space-comet: #4A90B8;    // 彗星藍
$space-aurora: #5A8B5F;   // 極光綠
$space-starlight: #E8E1D3; // 星光白
```

### Gaming Pixel Art 色彩
```scss
$ai-neural: #9B59B6;      // AI 神經紫
$pixel-cyan: #17A2B8;     // 像素青
$gaming-neon: #E74C3C;    // 遊戲霓虹
$retro-neon-pink: #C97A8F; // 復古霓虹粉
$retro-amber: #D4B36A;    // 琥珀黃
```

---

## ✍️ Typography System (文字系統)

### Font Families (字型家族)
```scss
// Fashion Editorial 字型
$serif-editorial: 'Playfair Display', 'Georgia', serif; // 時尚編輯標題
$sans-serif: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; // 現代內文

// Gaming Pixel Art 字型  
$pixel-font: 'JetBrains Mono', monospace; // 像素風格程式碼
$monospace: 'JetBrains Mono', 'SF Mono', Monaco, Consolas, monospace;

// AI Future 字型
$futura-font: 'Futura', 'Arial', sans-serif; // 未來感標題

// 繁體中文字型
$font-chinese: 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif;
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

**下一步**: 閱讀 `MINIMAL_MISTAKES_CUSTOMIZATION.md` 了解如何在 MM 主題中實作此設計系統# Autumn Noir Future Theme - 主題概念
# Version 2.1.0 | Updated: 2025-10-16

## 🎭 主題理念

**Autumn Noir Future Theme** 融合四種美學風格：

- **🍂 Fashion Editorial** - 時尚雜誌的優雅排版
- **🌌 Future Space** - 未來太空的深邃神秘
- **🤖 AI Agent** - 人工智慧的科技感
- **🎮 Retro Gaming** - 80年代復古遊戲霓虹魅力

## 🎨 視覺風格指南

### 色彩情感
- **深邃與溫暖並存** - 太空的深邃 + 秋日的溫暖
- **科技與自然融合** - AI 的冷調 + 秋季的暖調
- **復古與未來交織** - 像素藝術 + 未來科技

### 設計原則
1. **Keep It Simple** - 內容優先，避免過度裝飾
2. **系統化設計** - 所有元素都有明確規格
3. **響應式優先** - Mobile-first 設計思維
4. **無障礙友善** - 符合 WCAG 標準

## 🌟 主題特色

### 獨特的視覺元素
- **星空背景** - 動態星雲與閃爍星星
- **像素圖示** - 復古遊戲風格的 UI 元素
- **霓虹效果** - Hover 時的發光動畫
- **掃描線** - CRT 螢幕的復古質感

### 互動體驗
- **流暢動畫** - 60fps 的平滑過渡
- **觸覺回饋** - 清晰的視覺反饋
- **直覺導航** - 符合用戶習慣的操作邏輯

## 📚 相關文件

**技術實作請參考**:
- `DESIGN_SYSTEM_SPEC.md` - 完整的色彩、字型、間距規格
- `LAYOUT_SPEC.md` - 版面配置與響應式設計
- `NAVIGATION_SPEC.md` - 導航系統設計
- `ASSET_SPEC.md` - 視覺資源管理

---

## 📝 CHANGELOG

### v2.1.0 (2025-10-16)
- 簡化為主題概念文件
- 移除與 DESIGN_SYSTEM_SPEC.md 重複的技術細節
- 專注於設計理念與視覺指南

### v2.0.0 (2025-10-11)
- 融合四重風格：Fashion + Space + AI + Gaming
- 建立完整的色彩與字型系統
