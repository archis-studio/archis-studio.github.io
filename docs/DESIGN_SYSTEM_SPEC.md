# Design System 設計與實作參考

Version 5.0.0 | Updated: 2026-10-23

供人／Agent 維護視覺與共用樣式。本文區分設計約束、已定義工具與尚未實作的舊示意；不以程式現況授權改變設計。頁面與互動見 [Layout](LAYOUT_SPEC.md)，操作及驗證見 [Development](../DEVELOPMENT.md)。

## 設計原則

以 Jekyll／Minimal Mistakes 的深色主題為基礎，保留四種風格：Fashion Editorial 的文字層次與留白、Autumn Noir 的深色暖調、Gaming Pixel Art 的像素與終端機元素、AI Future Space 的太空與未來感。

內容優先、Typography First、mobile-first、跨頁一致與可及性仍是約束。顏色、字型、間距優先沿用現有 token 與元件；只覆寫必要主題樣式，避免為效果增加閱讀干擾。設計變更需在使用者授權範圍內；落差見[已知落差](#已知落差)。

## 實作入口

| 來源 | 責任 |
|---|---|
| [variables](../_sass/design-system/_variables.scss) | 分類色、背景／文字色、字型、字級、行高、字重、間距、斷點與 transition |
| [mixins](../_sass/design-system/_mixins.scss) | 分類樣式生成器、視覺與響應式工具 |
| [main.scss](../assets/css/main.scss) | 先載入主題 skin／主題，再載入 variables、mixins、custom partials 與搜尋樣式；末尾處理減少動態效果 |
| [custom](../_sass/custom/) | 各頁面與元件的實際樣式；不是所有樣式都已使用共用 token |
| [custom head](../_includes/head/custom.html) | 額外字型載入與 favicon 引用 |

改元件時依序找模板、class 與樣式來源；工具「已定義」不代表每個頁面都採用。不要重設整份 `$category-colors`、複製主題 import 或為符合舊文件新增空 partial。

## Tokens 與使用方式

### 色彩與分類

精確色值以 variables 為主要維護位置，不在文件重建另一份完整調色盤。現有色彩家族如下：

| 語義 | 變數 |
|---|---|
| 深色背景、邊框與文字 | `$noir-black`、`$noir-gray`、`$noir-border`、`$noir-text`、`$noir-text-muted` |
| 秋日暖色 | `$autumn-gold`、`$autumn-burgundy`、`$autumn-moss`、`$autumn-copper`、`$autumn-cream` |
| 太空色 | `$space-void`、`$space-nebula`、`$space-comet`、`$space-aurora`、`$space-starlight` |
| 遊戲／未來點綴 | `$ai-neural`、`$pixel-cyan`、`$gaming-neon`、`$retro-neon-pink`、`$retro-amber` |

分類以 `$category-colors` 管理，透過 `category-color('ai')` 等函數取得。key 與文章分類名稱不同：

| 樣式 key | 文章分類 |
|---|---|
| `ai` | `AI Tools` |
| `dev` | `Software Dev` |
| `data` | `Data Science` |
| `marketing` | `Marketing` |
| `quant` | `Quant Trading` |
| `reading` | `Reading` |
| `green` | `Green Energy` |
| `growth` | `Growth` |

未知 key 會警告並返回預設金色，這是 fallback，不代表新分類已建立。新增分類須另確認內容名稱、分類頁／路由、模板 key 與樣式；只改 map 只會影響使用該 map 的輸出。

以下 SCSS 是用法示例，放在已載入 variables／mixins 的 custom partial 中；不代表網站已有 `.example-*` 元件：

```scss
.example-label {
  color: category-color('ai');
  border-color: $noir-border;
  padding: $space-2 $space-4;
}
```

### 字型與文字層次

| 現有 token | 用途與限制 |
|---|---|
| `$serif-editorial` | Playfair Display／Georgia／serif，用於 editorial 文字 |
| `$sans-serif` | Inter／系統 sans-serif 堆疊 |
| `$monospace` | JetBrains Mono／SF Mono／Monaco／Consolas／monospace 堆疊 |
| `$font-chinese` | Noto Sans TC／PingFang TC／Microsoft JhengHei／sans-serif 堆疊 |
| `$font-size-xs` 至 `$font-size-6xl` | 現有字級尺度；名稱與值查 variables，不能由倍率推算不存在的 token |
| `$font-weight-light` 至 `$font-weight-extrabold` | 字重尺度；載入的字型是否提供相應字重仍需核對 |
| `$line-height-tight`、`$line-height-snug`、`$line-height-normal`、`$line-height-relaxed`、`$line-height-loose` | 精確行高查 variables |

字型堆疊不等於字型已下載。custom head 明確載入 Google Fonts 的 Playfair Display 400／700；各元件另有 Georgia、Courier New、Noto Serif TC 等直接宣告。實際字型取決於主題／外部載入、裝置安裝與 fallback，不保證所有頁面使用相同字體。

### 間距、斷點與過渡

間距使用 variables 中實際存在的 `$space-*`，例如 `$space-1` 為 `0.25rem`、`$space-2` 為 `0.5rem`、`$space-4` 為 `1rem`；不是 0–32 每個數字都已定義。舊文件以 8px grid 描述設計意圖，現有尺度另含 4px 步進；本次不重定義或調整間距。

現有獨立斷點變數：

| Token | 值 |
|---|---|
| `$breakpoint-xs` | 480px |
| `$breakpoint-sm` | 640px |
| `$breakpoint-md` | 768px |
| `$breakpoint-lg` | 1024px |
| `$breakpoint-xl` | 1280px |
| `$breakpoint-2xl` | 1536px |

此表不是所有元件的實際切換表。現有樣式亦含 1400px、968px、64em、767／768／769px 等頁面條件，需查對應 partial；不因表格存在而統一改寫。頁面邊界由 Layout 後續核對。

過渡使用 `$transition-fast`、`$transition-base`、`$transition-slow`，值依序為 `0.15s ease`、`0.3s cubic-bezier(0.4, 0, 0.2, 1)`、`0.5s cubic-bezier(0.4, 0, 0.2, 1)`。元件中仍有直接定義的 duration／easing，不宣稱已全部集中管理。

## Mixins 與元件沿用

以下 API 定義於 mixins；參數名稱與預設值以來源為準：

| API | 行為與使用範圍 |
|---|---|
| `category-badge($color, $hover-color: null)` | 單一 badge 的分類色、背景、陰影與 hover；尺寸／基礎版面由呼叫處提供 |
| `generate-category-badges($prefix: '--')` | 對目前 selector 附加 prefix 與分類 key；首頁已有呼叫 |
| `category-card($color, $hover-color: null)` | 卡片背景、邊框、hover，及巢狀標題／連結色；不包含完整卡片結構 |
| `generate-category-cards($prefix: '--')` | 對目前 selector 生成分類 modifier；已定義，不代表現有卡片都使用它 |
| `portal-ring($color, $size: 200px)` | 相對定位、尺寸與偽元素；使用同檔的 `portal-rotate` keyframes |
| `generate-category-portals($prefix: 'portal-')` | 生成子 selector，與 badge／card 的 modifier 生成方式不同；不等同分類頁現有 portal 實作 |
| `glow-text($color, $intensity: 0.8)` | 文字與 hover 發光 |
| `glass-effect($opacity: 0.1, $blur: 10px)` | 透明背景、模糊與邊框；實際可讀性需預覽 |
| `neon-border($color, $width: 2px)` | 邊框與 hover 發光 |
| `responsive-font($min-size, $max-size, $min-width: $breakpoint-sm, $max-width: $breakpoint-xl)` | 使用 `strip-units($number)` 的流動字級計算；定義存在，不代表所有單位組合或頁面已驗證 |
| `container-padding($vertical: 3rem, $horizontal: 2rem)` | 在 md／sm 的 max-width 條件縮小內距；不是全站容器寬度設定 |

可編譯的生成器示例：

```scss
.example-badge {
  @include generate-category-badges('--');
}

.example-card {
  @include category-card(category-color('dev'));
}

.example-portals {
  @include generate-category-portals();
}
```

會產生 `.example-badge--ai` 等 modifier，以及 `.example-portals .portal-ai` 等子 selector。先確認模板 class 對得上，再使用生成器；不要只根據 mixin 名稱猜 selector。

實際沿用入口：

| 元件 | 來源 |
|---|---|
| 首頁精選分類 badge／技能徽章 | [homepage SCSS](../_sass/custom/_homepage.scss)，分別使用 `--` 與 `.skill-category--` prefix |
| 共用文章卡片 | [post-card include](../_includes/post-card.html)、[文章庫 SCSS](../_sass/custom/_posts-archive.scss) |
| 導覽與搜尋 | [masthead](../_includes/masthead.html)、[navigation SCSS](../_sass/custom/_navigation.scss)、[search SCSS](../_sass/_search-overlay.scss) |
| 分類 portal | [categories SCSS](../_sass/custom/_categories.scss)，目前採頁面自訂樣式及分類色函數 |

## 品牌、圖示與圖片原則

本節接收 Asset 與圖片 README 中仍適用的視覺意圖，操作仍只在 Development 維護：

- 維持深色暖調、專業而有個性的 Fashion／Gaming／Future Space 組合；裝飾不得妨礙正文、控制項與焦點可見性。
- 圖示維持可辨識、跨頁一致的風格與設計色彩；舊 24×24 SVG 是原基準示意，不代表目前所有 emoji、CSS 像素圖示、Font Awesome 或主題圖示都採此尺寸。沿用現有來源，不要求重建一套 SVG 圖庫。
- 頭像主體置中、背景不搶焦點、有清楚對比；專業照片或插畫皆可。保留圓形裁切的原視覺意圖，不新增多尺寸檔案或更換現有頭像。
- 向量資源保留比例與清晰度，點陣資源注意裁切與畫質；WebP 壓縮需目視檢查。封面與頭像沿用[圖片處理](../DEVELOPMENT.md#圖片處理)的單圖契約；舊社群 1200×630 是原規劃尺寸，不強制新裁切或第二張圖。
- 品牌目前在 masthead 顯示 `ARCHIS.STUDIO`／`DIGITAL·COMPASS` 與 CSS pixel rocket；favicon 由 custom head 引用根目錄 [favicon.ico](../favicon.ico)／[favicon.png](../favicon.png)，全域分享 fallback 由 `_config.yml` 的 `image` 指向 favicon.png。頁面可覆寫分享圖片，不能把舊 branding／social 目錄示例當成已存在資源。
- 不為舊字型 preload 範例新增 Inter／JetBrains Mono 本地檔；是否改字型載入另立需求，避免重複載入。

## 無障礙與動態效果

以 WCAG 2.1 AA 為原有目標，功能與驗證結果分開描述：

- 一般文字對比至少 4.5:1，大字至少 3:1。大字依 W3C 為至少 18pt（24 CSS px），或 14pt（約 18.7 CSS px）粗體，不能把所有 18px 文字視為大字。定義見 [W3C 對比說明](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)。
- 控制項與傳達必要資訊的圖形依非文字對比要求核對；舊 3:1 目標保留，不代表所有裝飾、logo 或停用狀態同一適用範圍。
- 保留語意 HTML、必要可存取名稱、鍵盤操作、可見焦點、圖片替代文字與螢幕閱讀器可讀性。不要為沿用舊 focus 示例，重建未定義的 `$accent-blue`。
- 系統 `prefers-reduced-motion: reduce` 由主樣式縮短動畫／transition、取消延遲和平滑捲動，並保留完成狀態及搜尋／提示可見性。Matrix、粒子與閱讀完成提示的完整行為暫見 [Development](../DEVELOPMENT.md#現行互動約定)，待 B2 移交 Layout。

token 或編譯通過不代表配色、焦點、響應式或瀏覽器已達標。視覺修改仍需真實瀏覽器、不同寬度、鍵盤與減少動態效果預覽；需要時量測實際對比，不以未勾選或歷史統計替代驗證。

## 已知落差

| 原文件內容 | 核對結果與保留方式 |
|---|---|
| `$accent-blue`、`$primary-*`、`$font-primary` 與通用 `.btn`／`.card`／`.nav` SCSS | 原示例不是目前設計系統可直接使用的 component API；保留其按鈕層次、卡片區塊與狀態意圖於舊版，現在引用真實元件，不自行另定配色 |
| `$pixel-font`、`$futura-font` | 原字型意圖未定義於現有 variables；不自行新增或視為已載入 |
| `$container-*`、`$content-width: 65ch`、`$prose-width: 75ch` | 原容器／閱讀寬度意圖未定義為這些 token；現有頁面使用各自 max-width，未決定統一 |
| `$breakpoints` map 的 xs=0 與 `respond-to()` | 舊示意與現有獨立 `$breakpoint-xs: 480px` 不同；原 map、工具與 `.grid--*` 並非現有共用 API，不新增它們來遷就文件 |
| `$ease-*`、`$duration-*` 與固定 grid 示例 | 原動畫／版面示意未集中為這些共用 token；保留設計背景，沿用現有 transition 與頁面樣式，不改動時長或欄數 |
| 8px grid、1.25 modular scale | 舊理念不能直接推算完整數值；現有間距含 4px 步進，字級亦非每階嚴格 1.25 倍，本次不重做尺度 |
| 所有元件已規格化、硬編碼為零、重複減少 98% 等 | 舊實作時期的宣稱，非本次量測；仍有硬編碼與頁面特定值，不當成目前品質保證 |
| Asset 的背景／placeholder／branding 清單、多尺寸圖與字型 preload | 原規劃不等於已建資源或本次需求；圖片工具、已用資源與後續範圍以 Development／整理計畫為準 |

這些落差不授權改程式、撤銷設計意圖或新增元件。若要採用舊構想或統一設計值，需另列選項、影響與驗證後取得使用者決定。

## 歷史來源

本次改寫前完整規格保留於 commit `2ab75a5` 的本檔；舊元件 SCSS、精確示意值、效益統計與建置 checklist 可由 Git 追溯。Asset 與圖片 README 仍保留原位，尚未封存。逐項接收與未完成範圍見[整理計畫](superpowers/plans/2026-10-23-documentation-reorganization.md)。

## CHANGELOG

### v5.0.0 (2026-10-23)

- 依 variables／mixins／元件來源重整查閱方式，提供可驗證的用法示例。
- 接收品牌、圖示與圖片視覺原則，區分字型宣告、資源載入與歷史構想。
- 保留設計意圖與未決落差；修正對比大字單位，不改網站樣式或設定。


### v4.0.1 (2026-10-23)

- 維護協作對象改稱人／Agent；技術規範與專案目標不變。

### v4.0.0 (2025-11-01)
- **新增「實作說明」章節** (💻 Implementation Guide)
  - 詳細說明設計系統檔案結構（_sass/design-system/）
  - 完整的 _variables.scss 和 _mixins.scss 使用指南
  - Mixin 使用範例與最佳實踐
  - 新增分類的步驟說明
  - 效益統計表格
- 設計系統完整實作完成：
  - ✅ 消除 75+ 處硬編碼顏色
  - ✅ 減少 303 行重複代碼
  - ✅ 建立單一真相來源（Single Source of Truth）

### v3.0.0 (2025-10-28)
- 版本號統一更新
- 明確標示文件受眾（Agents）

### v1.2.0 (2025-10-16)
- 四重風格融合設計系統定義
- 8 色配色系統完整規格

### v1.0.0 (2025-10-11)
- 建立 Design System 基礎規格


**Maintained by**: Archi Chen & Agents
