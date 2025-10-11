# Minimal Mistakes 客製化指南
# MM Theme Customization Guide - Version 1.0.0

**建立時間**: 2025-10-11  
**主題版本**: Minimal Mistakes 4.x  
**目標**: 在 MM 基礎上實作自訂 Design System

---

## 🎯 客製化策略 (Customization Strategy)

### 核心原則
1. **最小侵入式** (Minimal Invasive): 只覆寫必要檔案，保持主題升級能力
2. **系統性覆寫** (Systematic Override): 使用 SCSS variables 與 mixins 進行系統性客製化
3. **向後相容** (Backward Compatible): 確保 MM 核心功能正常運作
4. **性能優先** (Performance First): 避免不必要的 CSS 膨脹

### 檔案結構策略
```
_sass/
├── minimal-mistakes/          # MM 主題覆寫區
│   ├── _variables.scss        # 覆寫 MM variables
│   ├── _base.scss            # 覆寫 base styles  
│   └── skins/                # 自訂 skin
│       └── _archis.scss      # Archis Studio 主題
└── design-system/            # 自訂 Design System
    ├── _tokens.scss          # Design tokens (colors, spacing)
    ├── _typography.scss      # Typography system
    ├── _components.scss      # Custom components  
    └── _utilities.scss       # Utility classes
```

---

## 🎨 MM Variables 覆寫 (Variable Overrides)

### Color System Override
```scss
// _sass/minimal-mistakes/_variables.scss

// 覆寫 MM 預設色彩
$background-color: #ffffff !default;
$text-color: #1a1a1a !default;
$muted-text-color: #666666 !default;
$primary-color: #2563eb !default;
$border-color: #d9d9d9 !default;
$footer-background-color: #f8f8f8 !default;

// 連結色彩
$link-color: #2563eb !default;
$link-color-hover: darken(#2563eb, 10%) !default;
$link-color-visited: #7c3aed !default;

// Code highlighting
$code-background-color: #f8f9fa !default;
$code-background-color-dark: #1a1a1a !default;
```

### Typography Override  
```scss
// Font families
$sans-serif: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !default;
$monospace: 'JetBrains Mono', 'SF Mono', Monaco, Consolas, monospace !default;

// Font sizes (MM 使用 em 單位)
$type-size-1: 2.441em !default;  // ~39px - h1
$type-size-2: 1.953em !default;  // ~31px - h2  
$type-size-3: 1.563em !default;  // ~25px - h3
$type-size-4: 1.25em !default;   // ~20px - h4
$type-size-5: 1em !default;      // ~16px - h5, body
$type-size-6: 0.875em !default;  // ~14px - h6, small
$type-size-7: 0.75em !default;   // ~12px - smaller
$type-size-8: 0.625em !default;  // ~10px - smallest

// Global font size
$doc-font-size: 16 !default; // Base font size in px
```

### Layout Override
```scss
// Container widths
$right-sidebar-width-narrow: 200px !default;
$right-sidebar-width: 300px !default;
$right-sidebar-width-wide: 400px !default;

// Content width
$max-width: 1280px !default; // 覆寫 MM 預設 1024px
```

---

## 🏗️ Layout 客製化 (Layout Customization)

### 主版面 Layout Override
建立 `_layouts/default.html` 覆寫 MM 預設版面：

```html
---
---

<!doctype html>
<html lang="{{ site.locale | slice: 0,2 | default: "en" }}" class="no-js">
  <head>
    {% include head.html %}
    {% include head/custom.html %}
  </head>

  <body class="layout--{{ page.layout | default: layout.layout }}{{ page.classes | join: ' ' | prepend: ' ' }}">
    {% include_cached skip-links.html %}
    {% include_cached masthead.html %}

    <div class="initial-content">
      {{ content }}
    </div>

    {% if site.search == true %}
      <div class="search-content">
        {% include_cached search/search_form.html %}
      </div>
    {% endif %}

    <div id="footer" class="page__footer">
      <footer>
        {% include footer/custom.html %}
        {% include_cached footer.html %}
      </footer>
    </div>

    {% include scripts.html %}

  </body>
</html>
```

### Navigation 客製化
建立 `_includes/masthead.html` 覆寫導航：

```html
<div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="masthead__menu">
      <nav id="site-nav" class="greedy-nav">
        {% unless logo_path == empty %}
          <a class="site-logo" href="{{ '/' | relative_url }}">
            <img src="{{ logo_path | relative_url }}" alt="{{ site.masthead_title | default: site.title }}">
          </a>
        {% endunless %}
        
        <a class="site-title" href="{{ '/' | relative_url }}">
          {{ site.masthead_title | default: site.title }}
          {% if site.subtitle %}<span class="site-subtitle">{{ site.subtitle }}</span>{% endif %}
        </a>
        
        <ul class="visible-links">
          {%- for link in site.data.navigation.main -%}
            <li class="masthead__menu-item">
              <a href="{{ link.url | relative_url }}"{% if link.description %} title="{{ link.description }}"{% endif %}>{{ link.title }}</a>
            </li>
          {%- endfor -%}
        </ul>
        
        {% if site.search == true %}
        <button class="search__toggle" type="button">
          <span class="visually-hidden">{{ site.data.ui-text[site.locale].search_label | default: "Toggle search" }}</span>
          <i class="fas fa-search"></i>
        </button>
        {% endif %}
        
        <button class="greedy-nav__toggle hidden" type="button">
          <span class="visually-hidden">{{ site.data.ui-text[site.locale].menu_label | default: "Toggle menu" }}</span>
          <div class="navicon"></div>
        </button>
        
        <ul class="hidden-links hidden"></ul>
      </nav>
    </div>
  </div>
</div>
```

---

## 🎨 Custom Skin 建立

### Archis Studio Skin
建立 `_sass/minimal-mistakes/skins/_archis.scss`：

```scss
/* ==========================================================================
   Archis Studio skin
   ========================================================================== */

/* Colors */
$background-color: #ffffff !default;
$text-color: #1a1a1a !default;
$primary-color: #2563eb !default;
$border-color: mix(#fff, $text-color, 75%) !default;
$code-background-color: #f8f9fa !default;
$code-background-color-dark: #1a1a1a !default;
$form-background-color: #f8f9fa !default;
$footer-background-color: #f8f8f8 !default;

/* masthead */
$masthead-link-color: $text-color !default;
$masthead-link-color-hover: $primary-color !default;
$navicon-link-color-hover: mix(#fff, $text-color, 75%) !default;

/* notices */
$notice-background-mix: 90% !default;
$code-notice-background-mix: 95% !default;

/* syntax highlighting (base16) */
$base00: #ffffff !default; // background
$base01: #f8f9fa !default; // lighter background
$base02: #e9ecef !default; // selection background  
$base03: #adb5bd !default; // comments, invisibles
$base04: #6c757d !default; // dark foreground
$base05: #495057 !default; // default foreground
$base06: #343a40 !default; // light foreground
$base07: #212529 !default; // light background
$base08: #dc3545 !default; // variables, XML tags
$base09: #fd7e14 !default; // integers, boolean, constants
$base0a: #ffc107 !default; // classes, markup bold
$base0b: #28a745 !default; // strings, inherited class
$base0c: #17a2b8 !default; // support, regular expressions
$base0d: #007bff !default; // functions, methods, attribute IDs
$base0e: #6f42c1 !default; // keywords, storage
$base0f: #e83e8c !default; // deprecated, opening/closing embedded
```

### 在 _config.yml 中啟用
```yaml
minimal_mistakes_skin: "archis"
```

---

## 🧩 Component 客製化 (Component Customization)

### Archive Single (文章列表項目)
建立 `_includes/archive-single.html`：

```html
{% if post.header.teaser %}
  {% capture teaser %}{{ post.header.teaser }}{% endcapture %}
{% else %}
  {% assign teaser = site.teaser %}
{% endif %}

<div class="{{ include.type | default: 'list' }}__item">
  <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
    {% if include.type == "grid" and teaser %}
      <div class="archive__item-teaser">
        <img src="{{ teaser | relative_url }}" alt="{{ post.title }}">
      </div>
    {% endif %}
    
    <h2 class="archive__item-title no_toc" itemprop="headline">
      {% if post.link %}
        <a href="{{ post.link }}">{{ post.title }}</a> 
        <a href="{{ post.url | relative_url }}" rel="permalink">
          <i class="fas fa-link" aria-hidden="true" title="permalink"></i>
          <span class="sr-only">Permalink</span>
        </a>
      {% else %}
        <a href="{{ post.url | relative_url }}" rel="permalink">{{ post.title }}</a>
      {% endif %}
    </h2>
    
    {% include page__meta.html type=include.type %}
    
    {% if post.excerpt %}
      <p class="archive__item-excerpt" itemprop="description">
        {{ post.excerpt | markdownify | strip_html | truncate: 160 }}
      </p>
    {% endif %}
  </article>
</div>
```

### Post Meta 資訊
建立 `_includes/page__meta.html`：

```html
{% assign document = post | default: page %}
{% if document.read_time or document.date %}
  <p class="page__meta">
    {% if document.date %}
      <time datetime="{{ document.date | date_to_xmlschema }}">
        <i class="far fa-calendar" aria-hidden="true"></i>
        {{ document.date | date: "%Y-%m-%d" }}
      </time>
    {% endif %}
    
    {% if document.read_time and document.date %}
      <span class="page__meta-sep"></span>
    {% endif %}
    
    {% if document.read_time %}
      <i class="far fa-clock" aria-hidden="true"></i>
      {% assign words = document.content | number_of_words %}
      {% if words < 360 %}
        {{ site.data.ui-text[site.locale].less_than | default: "less than" }} 1 {{ site.data.ui-text[site.locale].minute_read | default: "minute read" }}
      {% elsif words < 1800 %}
        {{ words | divided_by: 180 }} {{ site.data.ui-text[site.locale].minute_read | default: "minute read" }}
      {% else %}
        {{ words | divided_by: 180 }} {{ site.data.ui-text[site.locale].minutes_read | default: "minutes read" }}
      {% endif %}
    {% endif %}
  </p>
{% endif %}
```

---

## 📱 Responsive 增強 (Responsive Enhancement)

### Mobile Navigation 改善
```scss
// _sass/minimal-mistakes/_navigation.scss override

.greedy-nav {
  @include respond-to('md') {
    .visible-links {
      display: flex;
      gap: $space-4;
    }
    
    .masthead__menu-item {
      a {
        padding: $space-2 $space-3;
        border-radius: 0.25rem;
        transition: all 0.2s ease;
        
        &:hover {
          background-color: rgba($primary-color, 0.1);
          color: $primary-color;
        }
      }
    }
  }
}
```

---

## ⚡ Performance 最佳化 (Performance Optimization)

### CSS 載入最佳化
建立 `_includes/head/custom.html`：

```html
<!-- Preload critical fonts -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"></noscript>

<!-- Custom CSS -->
<link rel="stylesheet" href="{{ '/assets/css/design-system.css' | relative_url }}">

<!-- Favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="{{ '/assets/images/apple-touch-icon.png' | relative_url }}">
<link rel="icon" type="image/png" sizes="32x32" href="{{ '/assets/images/favicon-32x32.png' | relative_url }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ '/assets/images/favicon-16x16.png' | relative_url }}">

<!-- Theme color -->
<meta name="theme-color" content="#2563eb">
```

---

## ✅ 客製化檢查清單 (Customization Checklist)

### MM Theme Integration
- [ ] `_config.yml` 設定完成 (theme, skin, plugins)
- [ ] Custom skin 建立並啟用
- [ ] Navigation 客製化完成
- [ ] Layout overrides 建立

### Design System Integration  
- [ ] SCSS variables 覆寫完成
- [ ] Typography system 整合完成
- [ ] Color system 整合完成
- [ ] Component styles 建立完成

### Performance & SEO
- [ ] Font loading 最佳化
- [ ] Critical CSS 識別並內聯
- [ ] Image optimization 設定
- [ ] Meta tags 完整設定

### Testing
- [ ] 各 breakpoint 顯示正常
- [ ] MM 核心功能運作正常
- [ ] Custom components 顯示正確
- [ ] Performance metrics 達標

---

**下一步**: 閱讀 `CONTENT_STRATEGY.md` 了解內容創作規範與策略