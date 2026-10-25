# 頁面結構與互動

Version 4.0.6 | Updated: 2026-10-25

供人／Agent 查找頁面組成、互動約定及實作來源。設計原則與 tokens 見 [Design System](DESIGN_SYSTEM_SPEC.md)，修改入口、測試指令與部署見 [Development](../DEVELOPMENT.md)。來源、DOM 測試、瀏覽器與效能量測各有驗證範圍，不能互相替代。

## 頁面與模板對照

| 頁面 | 網址 | 內容／模板 | 主要樣式 |
|---|---|---|---|
| 首頁 | `/` | [index](../index.html) → [home layout](../_layouts/home.html)、[Hero](../_includes/page__hero.html) | [homepage](../_sass/custom/_homepage.scss)、[sidebar](../_sass/custom/_sidebar.scss) |
| 文章 | 依 `_config.yml` permalink 與文章欄位 | `_posts/` → [post layout](../_layouts/post.html) | [post-single](../_sass/custom/_post-single.scss) |
| 文章庫 | `/posts/` | [posts 頁面](../_pages/posts.html) | [posts-archive](../_sass/custom/_posts-archive.scss) |
| 分類入口 | `/categories/` | [categories 頁面](../_pages/categories.md) → [categories layout](../_layouts/categories.html) | [categories](../_sass/custom/_categories.scss) |
| 單一分類 | `/categories/<slug>/` | [_pages/categories](../_pages/categories/) → [category-archive](../_layouts/category-archive.html) | posts-archive |
| 標籤 | `/tags/` | [tags 頁面](../_pages/tags.md) → [tags layout](../_layouts/tags.html) | [tags](../_sass/custom/_tags.scss)、posts-archive |
| 關於作者 | `/about/` | [about 頁面](../_pages/about.md) → 主題 `single` | [about](../_sass/custom/_about.scss)、sidebar |
| 證書 | `/certificates/` | [certificates 頁面](../_pages/certificates.md) → [certificates layout](../_layouts/certificates.html) | [certificates](../_sass/custom/_certificates.scss) |

自訂 layout 多繼承主題 `default`；`single`、`default`、`sidebar.html` 與全站 footer 等未在本地覆寫的部分需追蹤 Minimal Mistakes。文章庫直接在 `_pages/posts.html`，不存在 `_layouts/posts.html`。

全站不是固定三欄。首頁與 About 可顯示作者／導覽側欄；自訂文章頁由 `.post-single` 與 `.post-toc` 組成，不使用作者側欄；列表、分類、標籤與證書有各自結構。`author_profile`、sidebar 與 defaults 的生效方式需連同實際 layout 確認。

## 共用導覽與搜尋

### 品牌與選單

來源：[masthead](../_includes/masthead.html)、[navigation data](../_data/navigation.yml)、[navigation.js](../assets/js/navigation.js)、[navigation SCSS](../_sass/custom/_navigation.scss)。

- masthead 實際顯示 `ARCHIS.STUDIO`／`DIGITAL·COMPASS` 與 CSS pixel rocket。品牌文案寫在 include，不能只改舊文件的 `masthead_title`／`masthead_subtitle` 便假定畫面更新。
- 主選單由 `navigation.main` 輸出首頁、文章、分類、證書、關於我；sidebar 導覽是另一份資料，不保證所有頁面都使用。
- 自訂選單使用 `.masthead__menu`、`.mobile-toggle`、`.nav-link`。navigation.js 統一負責切換 `.show` 與 `aria-expanded`；在寬度不大於 768px 時，點擊連結收合選單。
- `.active` 由 href 與當前 pathname 完全相同比對，不能描述為子路由都會自動反白；目前沒有由該 script 設定 `aria-current`。
- 捲動超過 50px 時切換 `.scrolled`，初始化也同步瀏覽器還原的位置；masthead 不再重複輸出 inline 導覽程式或舊 scroll-lock 樣式。
- 不重加 `.visible-links.show`、`slideDown`、`.greedy-nav__toggle`／`.hidden-links` 等舊選單方案。展示空間 dropdown 是舊構想，現行資料／模板不提供 children 下拉行為。

### 搜尋資料與呈現

來源：[search overlay](../_includes/search-overlay.html)、[search.js](../assets/js/search.js)、[search SCSS](../_sass/_search-overlay.scss)。

- masthead 直接引入自訂搜尋覆蓋層，全站維持一份。`_config.yml` 的 `search: false` 只關閉主題搜尋表單與 Lunr，不關閉自訂搜尋。
- Liquid 產生 `application/json` 資料，字串經 `jsonify` 並將 `<` 轉義；文章網址使用 `relative_url`。分類優先連到對應 `category-archive` 頁，找不到才以 slug fallback，baseurl 只套用一次。
- 搜尋比對標題、摘要、分類與標籤，採不分大小寫的字面匹配；標記關鍵字前跳脫 regex 符號，以文字節點建立內容，不把查詢／文章文字當 HTML 注入。
- 分類結果先顯示，文章依加總分數排序：標題 10、分類 8、標籤 6、摘要 5；文章最多顯示 10 篇，多出的數量另提示，分類不套用文章上限。
- 空查詢回到歡迎畫面與統計；每次替換結果都清除舊選取，Enter 不得開啟已移除的結果。

### 搜尋操作與焦點

- 搜尋按鈕在手機與桌面均保留；按鈕或 Cmd／Ctrl+K 開啟，快捷鍵可再次關閉。關閉鈕、覆蓋層本身的背景點擊、Escape 可關閉。
- 對話框受視窗高度限制，結果區依剩餘空間縮小並捲動；極短視窗可捲動整個面板，保留輸入、結果與關閉控制的可達性。
- 開啟時先重設面板與結果區捲動位置，再聚焦輸入框、限制背景捲動，將背景設為 inert；關閉時還原原有 overflow 與新增的 inert 狀態，焦點回到開啟者，失效時回搜尋按鈕。
- 維持 dialog／`aria-modal`／`aria-hidden`／狀態通知與 toggle 關聯，Tab／Shift+Tab 循環在覆蓋層內，外移焦點會拉回輸入框。
- 輸入框的上下鍵選取結果，Enter 開啟有效選取；IME 組字期間不攔截相關快捷鍵，避免中文選字誤導覽。

以上焦點約定屬搜尋，不可直接宣稱手機選單或證書 lightbox 具備同樣能力。

## 各頁面行為

### 首頁

home layout 在 `#main` 雙欄區域之前輸出滿版 Hero；`index.html` 提供下方精選與八分類內容，主題 sidebar 與內容欄並列，從 Hero 下方開始。Hero 由 `page.hero` 的標題、文字與 CTA 資料控制，並包含徽章、裝飾及 Matrix Canvas。窄螢幕的 Hero 標題採局部流動字級與換行保護，不重設全站文字尺度。

Hero 描述未設定、為空字串或只有空白時不輸出描述段落；有文字時保留原文。production 驗證確認首頁只有一個 Hero 與其 Matrix Canvas，且 Hero 在主內容地標內、雙欄區域之前。這些結構檢查不取代瀏覽器的裁切與重疊驗收。

這是本專案目前的首頁契約；若決定停用 Matrix、移除 Hero 或改變區塊位置，需同步更新 `scripts/validate.rb`、對應測試與本節，不以略過驗證處理。

精選依 `site.posts` 順序取 `featured: true`，最多四篇；只有沒有精選時才改取最新四篇。有少量精選時不混入其他文章。沒有文章時顯示空狀態。首頁精選卡片不是共用 post-card 的完整結構，但圖片仍共用 post-image。

分類入口連到既有八分類頁，計數來自對應 `site.categories`；空分類可保留入口，不等於網站壞掉。

### 文章與目錄

post layout 輸出主標題、日期、分類、標籤、閱讀時間、可選封面、正文、分享、最多三篇相關文章、前後篇導覽及條件式 Giscus。相關文章位於正文後，不是右側 TOC 的內容；外部留言實際可用性需另驗證。

- 閱讀時間以 `content | strip_html | strip | size` 的字元數，每 500 字元一分鐘，向上取整、至少一分鐘；不區分中英文，不加手動時間欄位。
- 標題下方顯示發布日期；`last_modified_at` 的日曆日期晚於發布日才額外顯示「更新於」，缺值、空值、同日或較早日期皆省略。日期使用語意化 `time` 與機器可讀的 `datetime`，資訊列沿用 flex 換行；列表與排序仍使用發布日期。
- 分類連結目前指向 `/categories/#<category-slug>` 的 portal；標籤連到 `/tags/#tag-<tag-slug>`。單一分類列表另有獨立路由，不能把這兩種連結描述成同一種。
- TOC 由 JavaScript 掃描正文 H2／H3／H4，保留 Markdown／自訂 heading ID，缺 ID 才生成不撞名 fallback；標題以文字節點呈現，href 對 ID 編碼。無標題時隱藏目錄。
- 捲動更新目錄目前項目與閱讀進度。目錄為自訂實作，不由主題 `toc`／`toc_sticky` 選項控制。
- 圖片由 [post-image](../_includes/post-image.html) 輸出，封面 eager／高優先權，卡片 lazy；選圖與尺寸契約維持 [Development](../DEVELOPMENT.md#圖片處理) 的單一說明。
- 程式碼區塊使用既有 `$font-size-sm` 與 `$line-height-normal`，內層 `code` 繼承區塊字級，避免語法高亮容器與 `em` 累乘縮小；保留高亮與區塊內水平捲動，頂部預留複製按鈕空間，避免遮住第一行。行內程式碼維持原有相對字級。
- 複製按鈕與 EXP 回饋置於 `pre` 的非捲動外層，水平捲動後按鈕仍可操作，也不混入複製內容；保留成功文字回饋。浮動 EXP／粒子與閱讀完成提示遵循下方動態約定。閱讀提示在 480px 以下使用左右安全間距，不沿用桌面的最小寬度。

### 文章庫與單一分類

文章庫輸出 `site.posts` 與共用 [post-card](../_includes/post-card.html)，底部有標籤雲。原分頁只留註解示意，不能宣稱已啟用分頁。

category-archive 依 `page.category` 取分類文章、排除 `draft: true` 並依日期倒序；無文章顯示空狀態。post-card 顯示圖片／placeholder、分類、標題、摘要、日期與最多三個標籤。

### 分類與標籤

分類入口目前是八個 portal，各有與分類 slug 對應的 ID 與分類列表連結。分類色與 key 映射見 [Design System](DESIGN_SYSTEM_SPEC.md#色彩與分類)。

[標籤雲](../_includes/tag-cloud-compact.html) 共用於文章庫與標籤頁，用 `posts`／`tags` prefix 區分控制項 ID；提供名稱篩選、清除與熱門／名稱排序。初始 Liquid 依名稱排序，熱門／名稱按鈕的互動排序由元件處理；不因按鈕標為 active 就宣稱初始已依熱門排序。

- 所有標籤目標採 `tag-<slug>`；標籤頁依 include 產生的 `sorted_tags` 輸出明細與文章卡片。此變數依賴若要重構需一併處理。
- 名稱大小寫應一致，避免不同標籤 slug 相同導致重複 ID；目前統一 `ChatGPT`。
- 標籤／文章總數直接由 Liquid 的 `site.tags`／`site.posts` 輸出，不累加每個標籤的文章數，避免同篇重複計算。排序、篩選不得改壞統計。
- 錨點使用原生導覽，不重加不會觸發的 fragment-only 處理；減少動態效果由共用 CSS 處理。

### About 與作者側欄

About 內容在 `_pages/about.md`，使用主題 single、`author_profile: true` 與 sidebar navigation；Terminal、Player Card、技能與職涯時間軸由正文及 about SCSS 提供。不是專用 `_layouts/about.html`。

作者側欄的頭像、bio、位置與社群連結由 [author-profile](../_includes/author-profile.html) 及作者資料輸出；全站 bio 與 About 正文分開維護，操作見 [作者資料設定](../DEVELOPMENT.md#作者資料設定)。側欄位置／顯示由 layout、主題與 sidebar SCSS 合併決定，不一律固定左側。

### 證書

certificates layout 由 `page.certificates` 產生卡片與分類篩選，圖片可開 lightbox，關閉鈕、背景與 Escape 可關閉。證書資料目前為空，顯示既有空狀態；有模板不等於已有證書或 lightbox 的全部可及性已驗證。

證書的圖片／星空與事件處理在該 layout，不能把首頁 Matrix 的暫停機制直接推論到此頁的裝飾。

## 響應式與共用區域

下表記錄目前來源，並非重新定義全站 breakpoint；精確 cascade、字體與瀏覽器結果需預覽。

| 區域 | 目前條件與來源 |
|---|---|
| 自訂導覽 | navigation SCSS：不大於 768px 的手機選單，769–1023px 的平板調整，另有 480px 條件；切換 script 的收合條件亦為不大於 768px |
| 文章 | post-single SCSS：正文＋240px TOC，gap 4rem、max-width 1400px；不大於 1024px 改單欄並隱藏 TOC，不大於 768px 調整內距；TOC sticky top 100px、可視高度扣除 120px |
| 文章庫／單分類共用 grid | posts-archive SCSS：預設四欄，max-width 1400／1024／768px 依序覆寫為三／二／一欄；與外層容器內距分開 |
| 分類 portal | categories SCSS：1400px 起四欄、1024–1399px 三欄、768–1023px 二欄、767px 以下一欄；不是所有卡片沿用此表 |
| 首頁與作者側欄 | homepage／sidebar SCSS 另含 64em、63.9375em 等主題相關條件；保留現況，不轉換或統一成 token |
| About／標籤／證書 | 各 partial 有自己的網格與 media query；查頁面來源，不套用舊通用三欄圖 |

全站 footer 等主題共用區域來自 Minimal Mistakes，文章內 `.post-footer` 是分享區，兩者不同。favicon／字型／品牌原則由 [Design System](DESIGN_SYSTEM_SPEC.md#品牌圖示與圖片原則)維護；不複製 Asset 的背景 SVG、假想資源目錄或額外字型 preload。

## 動態效果與音效約定

- 直接尊重系統 `prefers-reduced-motion: reduce`，不新增設定面板或偏好儲存。
- 首頁 Matrix 僅在畫面可見、分頁未隱藏且允許動態效果時繪製；離開畫面／切換分頁暫停，返回恢復。支援執行中偏好變更與 resize 後重算欄數；支援範圍為現代 matchMedia、IntersectionObserver 與標準 change 事件，不維護舊 API 相容分支。
- 主樣式在減少動態效果時將動畫／transition 縮短至近乎即時，取消延遲與平滑捲動，保留動畫完成狀態，避免 About 技能條停在零寬度；搜尋與閱讀提示仍可見。
- 文章在減少動態效果時不建立捲動粒子或浮動 EXP；執行中切換偏好會更新裝飾狀態，複製文字及成功回饋仍可用。
- 所有模式的閱讀完成提示均不播放音效，每篇頁面載入期間只顯示一次，保留文字狀態通知；不是跨重新載入的永久紀錄。

來源：[Hero Matrix](../_includes/page__hero.html)、[文章互動](../_layouts/post.html)、[共用 CSS](../assets/css/main.scss)。不得將單一元件的暫停／恢復能力推論成全站動畫都已做可見性控制。

## 驗證入口與限制

| 範圍 | 既有驗證來源 |
|---|---|
| 精選、統計、標籤、閱讀時間 | [navigation Ruby 測試](../test/navigation_test.rb) |
| 選單、TOC ID／安全文字與標籤互動 | [navigation DOM 測試](../test/navigation_test.cjs) |
| 搜尋 JSON／分類 URL 與腳本安全 | [search data 測試](../test/search_data_test.rb) |
| 搜尋文字、排序／上限、IME、焦點／背景狀態 | [search DOM 測試](../test/search_test.cjs) |
| 圖片選擇、尺寸、fallback 與載入策略 | [post image 測試](../test/post_image_test.rb) |
| Matrix、偏好變更、粒子與靜音提示 | [motion DOM 測試](../test/motion_test.cjs) |
| 全新 production 輸出 | [validator](../scripts/validate.rb)：頁面、文章、標籤 ID／目標、統計、卡片上限、本地資源、開發檔排除、自訂搜尋唯一且無主題表單／Lunr |

指令與手動預覽方式見 [Development](../DEVELOPMENT.md#測試與驗證)。jsdom 不實作真實 CSS 版面，Canvas／排程模擬不等於耗電測量，production 檢查也不執行瀏覽器 JavaScript；均不取代手機／平板／桌面、鍵盤焦點及動態效果預覽。

## 舊方案與已知落差

保留以下原設計意圖與限制，不為符合文件而新增功能或改寫樣式：

| 舊方案 | 目前處理 |
|---|---|
| 全站三欄、左側 300px、右側整合 TOC／相關文章／標籤／最新文章 | 保留資訊分區與閱讀清晰的意圖；實際各頁分開對照，不視為所有頁面既有能力 |
| 舊品牌副標、autumn-logo.png、展示空間與 dropdown | 原構想保留於 Navigation／Git 歷史；目前品牌與平面主選單依實作，未決定補做子選單 |
| `.search-content`、`.search__toggle` 與主題 Lunr | 自訂搜尋已採另一套結構，不重啟舊表單；`search: false` 維持 |
| `$pixel-font`、`$futura-font`、`$bg-gradient-*`、`$box-shadow-*`、`$pixel-border-radius`、`$ai-core` 等示例 | 不能當成目前已定義 token；設計背景可追溯，但本文件只引用現有來源，通用落差見 Design |
| Hero 的 300px、高度 80px 導覽、footerGlow 與假想 SVG 背景 | 原數值／裝飾示意保留於舊版，不以此取代現有元件 cascade；不新增資源 |
| 模糊到清晰、骨架屏、全站轉場與分頁 | 舊載入／導覽構想未因文件存在而成為現行保證或本次需求 |
| role=menubar／menuitem、aria-current、sr-only 示意與 focus SCSS | 原可及性意圖保留，現行標記與狀態逐元件核對；搜尋已有焦點管理不代表其他控制項同樣完成 |
| 品質 checklist 與動畫效能目標 | 不將空白勾選當成當前全部未完成，也不將來源存在當成瀏覽器實測通過 |

舊 Layout 完整內容可由 commit `94dfac1` 的本檔追溯；[Navigation 原文](archive/NAVIGATION_SPEC.md)已封存，現行行為約定以本文件為準。Asset 的通用視覺原則已在 Design，剩餘頁面結構／載入／裝飾構想已於本文件分清實作與歷史；[Asset 原文](archive/ASSET_SPEC.md)已封存。

## CHANGELOG

### v4.0.6 (2026-10-25)

- 文章資訊列顯示晚於發布日的更新日期，保留原發布日期與列表排序，補上日期顯示回歸驗證。

### v4.0.5 (2026-10-24)

- 程式碼區塊改用明確字級並由內層繼承，窄螢幕閱讀提示改為左右留白的自適應寬度。
- 複製控制移至非捲動外層，補上重複複製與文字完整性的回歸測試。

### v4.0.4 (2026-10-24)

- 省略空白 Hero 描述，補上描述條件輸出與首頁 Hero／Canvas 結構驗證。
- 說明停用或調整 Hero／Matrix 時須同步維護的驗證範圍。

### v4.0.3 (2026-10-24)

- Hero 移至首頁雙欄區域上方，移除 viewport 負 margin 定位，限制內容寬度並改善窄螢幕標題。

### v4.0.2 (2026-10-24)

- 搜尋入口保留手機顯示，補上結果區與短視窗面板的捲動約定。
- 搜尋重開時重設捲動位置，避免短視窗的關閉控制被舊位置裁切。

### v4.0.1 (2026-10-24)

- 更新 Navigation／Asset 歷史來源的封存位置，不變更頁面或互動約定。

### v4.0.0 (2026-10-23)

- 以真實頁面、模板與響應式來源重整 Layout，整併 Navigation 有效內容。
- 接收 Development 的完整導覽、統計、閱讀時間與動態約定，操作及測試指令仍留原指南。
- 區分目前行為、原設計意圖、歷史構想與未驗證品質，不修改網站實作。


### v3.0.1 (2026-10-23)

- 維護協作對象改稱人／Agent；技術規範與專案目標不變。

### v3.0.0 (2025-10-28)
- 版本號統一更新
- 明確標示文件受眾（Agents）

### v1.0.0 (2025-10-16)
- 建立完整版面配置規格


**Maintained by**: Archi Chen & Agents
