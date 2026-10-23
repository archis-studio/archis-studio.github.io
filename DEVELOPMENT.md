# 開發指南

Version 4.2.3 | Updated: 2026-10-24

供人／Agent 查閱操作、修改位置與驗證方式。授權規則見 [agents.MD](agents.MD)，規格入口見[文件索引](docs/DOC_INDEX.md)。

## 快速操作

依[環境與啟動](#環境與啟動)準備環境後，在專案根目錄執行：

```bash
bundle install
npm ci --prefix test --ignore-scripts --no-audit --no-fund
bundle exec jekyll serve
```

開啟 `http://localhost:4000`；Ctrl+C 停止。一般修改會重建，瀏覽器需重新整理；修改 `_config.yml` 需重啟服務。Node 依賴只需在首次安裝或 lockfile 變更後重裝。

提交前完整驗證：

```bash
bundle check
BUNDLE_FROZEN=true bundle exec ruby scripts/check-documentation-links.rb
BUNDLE_FROZEN=true bundle exec ruby -Itest -e 'Dir["test/*_test.rb"].sort.each { |file| require_relative file }'
npm test --prefix test
BUNDLE_FROZEN=true bundle exec ruby scripts/validate.rb
```

遠端主題下載需要網路；檢查範圍與限制見[測試與驗證](#測試與驗證)。

## 修改入口

| 任務 | 主要來源 | 驗證入口 |
|---|---|---|
| 發文章 | `_posts/`、[文章範例](#建立內容)、`_config.yml` defaults | production 驗證、文章預覽 |
| 封面與卡片 | `_includes/post-image.html`、`post-card.html`、產圖工具 | `test/post_image_test.rb`、圖片預覽 |
| 搜尋 | `assets/js/search.js`、`_includes/search-overlay.html` | `test/search_data_test.rb`、`test/search_test.cjs` |
| 選單與導覽 | `_includes/masthead.html`、`assets/js/navigation.js`、`_sass/custom/_navigation.scss` | `test/navigation_test.rb`、`test/navigation_test.cjs` |
| 文章目錄、標籤、閱讀時間 | `_layouts/post.html`、`_layouts/tags.html`、`_includes/tag-cloud-compact.html` | navigation 測試、production 驗證 |
| 首頁與動態效果 | `_layouts/home.html`、`_includes/page__hero.html`、主樣式、文章模板 | `test/motion_test.cjs`、navigation 測試、瀏覽器預覽 |
| 視覺與元件 | `assets/css/main.scss` → `_sass/design-system/`、`_sass/shared/`、`_sass/custom/` | production 驗證、響應式與鍵盤預覽 |
| 作者與 About | `_config.yml` 的 `author`、`_includes/author-profile.html`、`_pages/about.md` | production 驗證、側欄與 About 預覽 |
| 文件連結 | `scripts/check-documentation-links.rb`、根目錄 Markdown 與 `docs/` | `test/documentation_links_test.rb`、直接執行檢查工具 |
| 設定與 CI | `_config.yml`、`.github/workflows/validate.yml`、`scripts/validate.rb` | `test/config_test.rb`、production 驗證 |

Ruby 單檔測試：`bundle exec ruby -Itest test/post_image_test.rb`；DOM 單檔測試：`node --test test/search_test.cjs`。依任務替換檔名；完整驗證使用上方指令。

## 環境與啟動

2026-10-23 查核：Ruby 3.3.10、Bundler 2.5.22、Jekyll 3.10.0（`github-pages ~> 232`）、Minimal Mistakes 4.27.0。版本來源為 `.ruby-version`、`Gemfile.lock`、`_config.yml`；DOM 測試使用 Node 24，圖片轉換才需 ImageMagick。

macOS 可執行 `brew install rbenv ruby-build`。zsh 尚未初始化 rbenv 時，在 `~/.zshrc` 加入 `eval "$(rbenv init - zsh)"`，重新開啟終端機，再執行：

```bash
rbenv install -s "$(cat .ruby-version)"
gem install bundler -v 2.5.22
```

Linux／WSL 使用對應環境安裝方式。完成後回到[快速操作](#快速操作)。Node 僅用於測試，ImageMagick 僅用於本機圖片處理，Pages 不執行這些工具。

## 架構地圖

Markdown／YAML → Liquid layout／include → 靜態 HTML；SCSS → CSS；Pages 提供建置結果。Minimal Mistakes 提供基礎版型，本專案只覆寫必要檔案。

| 層次 | 來源 |
|---|---|
| 環境與設定 | `.ruby-version`、`Gemfile`、`Gemfile.lock`、`_config.yml` |
| 內容 | `_posts/`、`_pages/`；front matter 與 scoped defaults 決定 layout／網址 |
| 頁面與元件 | `_layouts/`、`_includes/`；文章庫位於 `_pages/posts.html` |
| 樣式 | `assets/css/main.scss`、`_sass/design-system/`、`_sass/shared/`、`_sass/custom/` |
| 互動與資源 | `assets/js/`、部分模板 inline script、`assets/images/` |
| 驗證 | `test/`、`scripts/validate.rb`、`.github/workflows/validate.yml` |

查版型時先追蹤 front matter → defaults → layout → include；本機沒有的模板可能來自主題。CI 的暫存建置與實際 Pages 部署各自執行。

## 建立內容

### 從範例建立文章

選擇範例，複製原始 Markdown：

| 範例 | 適合用途 |
|---|---|
| [pixel-art-intro](_posts/2025-10-23-pixel-art-intro.md) | 基本欄位、摘要與 H2／H3 正文結構，不需要封面的文章 |
| [ai-tools-guide](_posts/2025-10-24-ai-tools-guide.md) | 另示範共用封面、實際圖片尺寸、分享圖片及替代文字 |

1. 複製一篇為 `_posts/YYYY-MM-DD-your-title.md`，日期改成新文章的發布日期；原範例維持原日期。
2. 修改 `title`、`excerpt`、`categories`、`tags` 與正文；只有需要精選時才保留 `featured: true`，否則刪除此欄位或設為 `false`。
3. 有圖片時更換路徑、實際尺寸與替代文字；無圖片則移除 `header`、`image`、`image_alt`。處理方式見[圖片處理](#圖片處理)。
4. 用 `bundle exec jekyll serve` 預覽文章、分類、標籤與圖片；日期在未來時加 `--future` 僅供本機預覽。
5. 依[測試與驗證](#測試與驗證)確認建置，提交與上線依當次使用者指示。

### 欄位與正文約定

| 欄位 | 用途 |
|---|---|
| `title` | 頁面主標題，由版型輸出；正文從 H2 開始，不再放 H1 |
| `categories` | 使用既有名稱：`AI Tools`、`Software Dev`、`Data Science`、`Marketing`、`Quant Trading`、`Reading`、`Green Energy`、`Growth` |
| `tags` | 描述文章主題，沿用現有名稱與大小寫，例如 `ChatGPT` |
| `excerpt` | 列表與搜尋摘要，依文章內容撰寫 |
| `featured` | 可選精選標記；首頁最多四篇，不保證標記後一定出現在首頁 |
| `header.image` | 可選共用封面，供文章頁與卡片使用；不需另維護 teaser |
| `header.image_width`／`header.image_height` | 封面檔案的實際像素尺寸 |
| 頂層 `image` | 可選社群分享圖片，與畫面封面用途分開，可引用同一檔案 |
| `image_alt` | 共用圖片替代文字，省略時以文章標題作為 fallback |

文章 layout 與 permalink 沿用 `_config.yml` defaults；更改既有文章的日期、檔名或分類可能影響網址，修改前需查實際 permalink 設定與連結。不要把主題的 `toc` 選項當成自訂文章模板的行為開關。

兩篇範例本身是已發布文章，也參與搜尋、分類與精選，複製時不要覆寫原檔。較完整範例沿用現有 275×183 圖片示範欄位；這不是新圖片的建議解析度，也不需為範例維護第二張圖片。

作者自行決定內容與發布時機；可選建議見[寫作參考](docs/CONTENT_STRATEGY.md)。圖片操作見[圖片處理](#圖片處理)，視覺與資源原則見 [Design System](docs/DESIGN_SYSTEM_SPEC.md#品牌圖示與圖片原則)。

### 新增頁面與樣式

新頁面位於 `_pages/`，先確認該頁與網址在授權範圍內。以下為沿用主題單頁版型的最小範例，不代表現有每個頁面都使用它：

```yaml
---
layout: single
title: "頁面標題"
permalink: /my-page/
author_profile: true
---
```

樣式從 `assets/css/main.scss` 追蹤 import，使用既有 variables／mixins。共用動畫集中於 `_sass/shared/_animations.scss`，在頁面樣式之前載入；不同效果使用元件專屬動畫名稱，避免依賴載入順序覆蓋。約束見 [Design System](docs/DESIGN_SYSTEM_SPEC.md)。

首頁內容區塊、About、文章留言與標籤區塊的間距由各自 custom partial 管理；避免用全域 `section` 規則設定頁面留白。

## 作者資料設定

全站作者名稱、簡介、位置、信箱與頭像位於 `_config.yml` 的 `author`。側欄由 `_includes/author-profile.html` 顯示，bio 經 `markdownify` 處理；About 的正文、職涯與技能另在 `_pages/about.md`，修改 bio 不會同步改寫 About。

例如只修改既有 `author` 下的 `bio` 欄位：

```yaml
bio: '**Software Developer** | 分享 AI 與開發實戰'
```

使用空格縮排，確認冒號、引號配對與 YAML 語法。YAML 多行雙引號字串及 `>-` 會折疊換行；`|-` 保留字串換行，也不保證 Markdown 畫面出現硬換行。需要分行時使用 Markdown 段落或 `<br>`，並預覽實際顯示。

簡介以身份、專長與寫作方向為主，避免過長造成溢出；行數由側欄寬度與文字換行決定，不強制三行。重啟 Jekyll 後在有啟用作者側欄的頁面檢查；部分頁面關閉 `author_profile`，單篇作者設定也可能覆寫全站作者。頭像尺寸與重製方式見下節。

## 圖片處理

### 共用文章封面

將原圖放進 `assets/images/posts/`，以實際檔名替換下方 `example.png`：

```bash
bash scripts/generate-post-images.sh assets/images/posts/example.png
magick identify -format '%w %h\n' assets/images/posts/example-cover.webp
```

工具保留原圖，只縮不放大，產生最大寬 1280px、quality 82 的單張 `*-cover.webp`。若沒有節省容量，衍生圖會移除，改用原圖並查其尺寸。檢查畫質後填入實際路徑與寬高：

```yaml
header:
  image: /assets/images/posts/example-cover.webp
  image_width: 1280
  image_height: 853
```

尺寸為範例；所有寬高均需符合檔案。文章頁、列表、首頁與相關文章共用此圖：卡片 lazy load，文章封面 eager／高優先權。`header.image` 優先，舊 `header.teaser` 仍可 fallback；缺少尺寸不會輸出假值。

頂層 `image` 是分享圖片，可引用同一檔案或保留原始 PNG／JPEG；`image_alt` 見[欄位說明](#欄位與正文約定)。卡片裁切由 CSS 控制。產圖後將使用的圖片納入提交，Pages 不執行轉換。

### 頭像

目前共用一張 400×400 WebP，原 PNG 保留。重新產生：

```bash
magick assets/images/profile_picture_xaos_engineer.png -auto-orient -resize '400x>' -strip -quality 82 assets/images/profile_picture_xaos_engineer.webp
```

更新 `_config.yml` 的 `author.avatar` 與實際 `avatar_width`／`avatar_height`；兩個尺寸都有設定才輸出尺寸屬性，顯示大小仍由 CSS 控制。

## 測試與驗證

完整指令見[快速操作](#快速操作)，單檔測試見[修改入口](#修改入口)。

| 檢查 | 範圍與限制 |
|---|---|
| 文件連結 | 根目錄 Markdown 與 `docs/`（含封存／計畫）的本地檔案與 Markdown 章節；不發送外部請求 |
| Ruby 測試 | 設定、Liquid、文件檢查器、搜尋 JSON／URL 安全、圖片與導覽契約 |
| DOM 測試 | 執行搜尋與模板互動，涵蓋排序、上限、特殊字元、IME、Tab／Escape、焦點還原及動態偏好；jsdom 不實作真實版面與 CSS 動畫 |
| production 驗證 | 重複 YAML key、全新暫存建置、主要頁面與全部已發布文章、分類、標籤連結／唯一 ID、統計、首頁卡片上限、本地資源、發布排除與重複搜尋輸出 |
| 瀏覽器預覽 | Chrome／Edge、Firefox、Safari／iOS；手機、平板、桌面檢查版面、圖片、焦點、鍵盤與捲動 |

production 驗證結束後清除暫存目錄，不依賴舊 `_site`；不執行瀏覽器 JavaScript、不驗證全部外部連結、第三方服務或效能分數。DOM 的 Canvas／排程模擬不等於動畫或耗電量測。

動態效果修改需切換減少動態效果，確認搜尋、About 技能條、複製按鈕與閱讀提示仍可用；一般模式確認 Matrix 離開畫面暫停、返回恢復。未執行的檢查需明列。

### 文件連結檢查

`bundle exec ruby scripts/check-documentation-links.rb` 在專案根目錄執行，掃描根目錄 `.md`／`.MD` 與 `docs/` 下的 Markdown。使用既有 CommonMarker GFM parser，檢查一般／參照式連結與 Markdown 圖片，支援 `<details>` 內的 Markdown，忽略 code fence（含延伸至檔尾的未關閉區塊）、inline code 與註解內的示例。

Markdown 章節採常用 GitHub 標題錨點規則，支援中文、格式化文字、重複標題及 HTML `id`／`a name` 錨點；規則參考 [GitHub 文件](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#section-links)。路徑支援相對／根目錄路徑與 URL encoding，不把 `+` 當成空格，也不允許連結或 symlink 越出 repository。

失敗會一次列出 `來源檔案:行號: 原因: 目標` 並以非零狀態結束；CI 在 Ruby 測試後獨立執行。非 Markdown 檔只查存在，外部網址、Jekyll／Liquid 產生的網站路由及瀏覽器 HTML 錨點不在檢查範圍。它不取代 production 或瀏覽器驗證，歷史文件中的純文字舊路徑也不會被視為連結。

## 部署與上線

2026-10-23 Pages API 查核：`build_type: legacy`，來源 `main` 根目錄 `/`；現況以 Settings → Pages 為準。`.ruby-version` 控制本機與驗證 CI，不控制 Pages 內建環境。

[Validate site](.github/workflows/validate.yml) 於 PR、push、手動觸發，使用 frozen lockfile、Ruby 測試、離線文件連結檢查、Node 24 DOM 測試與 production 驗證。權限為 `contents: read`，不需部署 secret、不發布網站或修改 Pages。

直接 push main 可觸發 legacy 部署，不會等待驗證 CI。若要強制合併前檢查，另設 branch protection required status check，名稱依 GitHub 顯示為準。

上線流程：

1. 本機驗證與頁面預覽。
2. 依 [Git 授權](agents.MD#git-規則)提交／建立 PR，確認 `Validate site` 通過。
3. 經使用者指示合併／推送，檢查 Pages 建置與部署紀錄，再確認線上頁面。

本機／CI 通過不代表 Pages 已成功部署；遠端權限、服務狀態與主題下載需由實際日誌確認。

## 疑難排解與升級

| 症狀 | 檢查與處理 |
|---|---|
| Ruby／Bundler 不符 | `ruby --version`、`bundle --version`、`which ruby`、`rbenv version`；確認使用 shims，Bundler 對照 lockfile 的 `BUNDLED WITH` |
| 4000 埠已使用 | `lsof -i :4000`；停止自己開的服務或改用 `bundle exec jekyll serve --port 4001`，不要強制終止未知程序 |
| 修改未反映 | 重新整理；設定修改需重啟。必要時停止服務，執行 `bundle exec jekyll clean` 再重建 |
| 監看無效 | `bundle exec jekyll serve --force_polling`，確認路徑與日誌 |
| Sass 警告 | 定位主題或專案來源，區分 deprecation 與編譯錯誤；不以隱藏日誌取代排查 |
| 遠端主題下載失敗 | 查網路與實際錯誤，不以舊輸出當成成功 |

其他指令：`bundle exec jekyll build --profile` 查看建置耗時；`bundle exec jekyll doctor` 作基本診斷，但不驗證全部 HTML／連結。預覽未發布內容可用 `serve --drafts` 或 `serve --future`；增量建置可能保留快取，不能取代完整 production 驗證。

日常安裝用 `bundle install`。刻意升級才更新依賴，先核對 Pages 相容限制，檢查 lockfile diff，再執行完整驗證；不要以全量 `bundle update` 或更新 Bundler 當成一般排錯步驟。

參考：[Jekyll](https://jekyllrb.com/docs/)、[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/)、[Liquid](https://shopify.github.io/liquid/)。

## 現行互動約定

頁面結構、搜尋／導覽、TOC／標籤、精選／統計、閱讀時間及動態效果的完整約定集中於 [Layout](docs/LAYOUT_SPEC.md)。修改位置見[修改入口](#修改入口)，驗證指令與限制見[測試與驗證](#測試與驗證)。

## CHANGELOG

### v4.2.3 (2026-10-24)

- 將全域 section 間距歸回各頁面元件，保留既有尺寸與斷點。

### v4.2.2 (2026-10-24)

- 導覽列、證照、搜尋、About 與標籤火焰動畫分別命名，共用動畫改於頁面樣式之前載入。

### v4.2.1 (2026-10-24)

- 補上共用動畫來源與載入順序，保留現有動畫效果。

### v4.2.0 (2026-10-24)

- 新增不需網路或額外套件的文件連結檢查，說明操作、範圍與限制，CI 自動執行。

### v4.1.1 (2026-10-24)

- 資源約束直達 Design，舊 Asset 手冊已封存。

### v4.1.0 (2026-10-23)

- 完整互動約定移交 Layout；保留原章節連結入口，操作與驗證方式仍在本指南。

### v4.0.2 (2026-10-23)

- 同步自由寫作與不定期發文決策，移除待確認政策入口。

### v4.0.1 (2026-10-23)

- 發文指南分別連到內容品質與待確認政策，操作維持單一來源。

### v4.0.0 (2026-10-23)

- 改為操作優先，新增任務／來源／測試對照，精簡重複敘述。
- 保留圖片例外、部署限制與互動契約，整理過程移由計畫追蹤。
- 協作對象稱呼統一為人／Agent。


### v3.1.0 (2026-10-23)

- 以兩篇既有文章作為基本／完整發文範例，集中複製步驟、欄位用途與發布檢查。
- 圖片操作保留於本指南，不再預設另移至 Asset 手冊；內容政策保持原規範待整理。


### v3.0.0 (2026-10-23)

- 補上架構地圖，整併作者資料、開發操作與疑難排解。
- 校正檔案位置與文章範例，保留圖片及互動完整契約，待主題規格整併。
- 區分本機驗證、CI 與 Pages 部署；移除不必要的危險排錯及預設升級指令。


### v2.0.8 (2026-10-23)
- 關閉重複主題搜尋、合併導覽程式並移除無效標籤事件。
- 補上現有選單 DOM 測試與重複搜尋產出檢查。

### v2.0.7 (2026-10-23)
- 加入系統動態效果偏好、Matrix 暫停與靜音閱讀提示說明。
- 新增動態效果 DOM 回歸測試與瀏覽器驗證範圍。

### v2.0.6 (2026-10-23)
- 改用單張 400x400 WebP 頭像，補上尺寸與重製指令，保留原圖。

### v2.0.5 (2026-10-23)
- 閱讀時間簡化為每 500 字元一分鐘，補上取整與最小值邊界測試。

### v2.0.4 (2026-10-23)
- 記錄文章標籤、目錄錨點、首頁精選上限與唯一文章統計規則。
- 新增導覽模板／DOM 回歸測試及 production 驗證說明。

### v2.0.3 (2026-10-23)
- 新增本機圖片壓縮流程與共用封面載入規則；依使用者決定，每篇只維護一張壓縮圖。
- 說明保留原圖、只縮不放大與轉換未節省容量時的處理。

### v2.0.2 (2026-10-23)
- 新增搜尋 DOM／Liquid 回歸測試與 Node 測試環境說明。
- 驗證 workflow 執行全部 Ruby 測試與搜尋互動測試。

### v2.0.1 (2026-10-23)
- 校正實際 Jekyll／主題版本與 legacy Pages 部署方式。
- 新增 production 輸出驗證與自動檢查說明，區分驗證與部署。

### v2.0.0 (2025-10-26)
- ✅ Core implementation complete
- ✅ All pages functional (Home, About, Posts, Article)
- ✅ Custom layouts and components
- ✅ Design system fully implemented
- ✅ Responsive design optimized

### v1.0.0 (2025-10-24)
- Initial project setup
- Basic Jekyll configuration
- Minimal Mistakes theme integration
