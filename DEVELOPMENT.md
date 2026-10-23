# 開發指南
# Version 3.0.0 | Updated: 2026-10-23

供人類與 AI 維護者查閱架構、環境、測試與部署。修改授權與 Git 規則見 [agents.MD](agents.MD)，主題規格見[文件索引](docs/DOC_INDEX.md)。

## 架構地圖

這是以 Markdown／YAML 作為內容來源的 Jekyll 靜態網站，Minimal Mistakes 提供基礎版型，本 repository 覆寫必要模板與樣式。

| 層次 | 主要來源與責任 |
|---|---|
| 設定與依賴 | `_config.yml`、`Gemfile`、`Gemfile.lock`、`.ruby-version` |
| 文章與頁面 | `_posts/`、`_pages/`；front matter 選擇 layout 與網址 |
| 頁面組合 | `_layouts/`、`_includes/`，共用圖片由 `_includes/post-image.html` 輸出 |
| 首頁與文章 | `_layouts/home.html`、`_layouts/post.html`；文章庫實際位於 `_pages/posts.html` |
| 設計系統 | `_sass/design-system/_variables.scss`、`_mixins.scss`；頁面樣式位於 `_sass/custom/` |
| 樣式入口 | `assets/css/main.scss` 編譯為網站 CSS |
| 互動 | `assets/js/navigation.js`、`assets/js/search.js` 與部分模板內的頁面互動 |
| 圖片與靜態檔 | `assets/`；圖片轉換在本機執行，Pages 直接使用產出 |
| 驗證 | `test/`、`scripts/validate.rb`、`.github/workflows/validate.yml` |
| 維護說明 | 根目錄指南、`docs/`；不屬於文章來源 |

內容經 Liquid 模板組合，SCSS 編譯後產生靜態 HTML／CSS／JavaScript，再由 Pages 提供。驗證 workflow 另行建置暫存網站，與實際 Pages 部署獨立。

模板缺少檔案時可能來自主題，不應直接建立另一套覆寫。查修改入口時先追蹤 front matter、`_config.yml` 的 scoped defaults、layout 與 include，再比對相關測試。

## 環境與啟動

2026-10-23 查核：本機 Ruby 3.3.10、Bundler 2.5.22；`github-pages ~> 232` 鎖定的 Jekyll 為 3.10.0，遠端主題為 Minimal Mistakes 4.27.0。之後以 `.ruby-version`、`Gemfile.lock` 與 `_config.yml` 為準，不從舊規格的 Jekyll 4.x 推斷環境。

Ruby 建站環境可使用 macOS、Linux 或 Windows WSL。DOM 測試另需 Node 24；Node 不參與 legacy Pages 建站。圖片重製才需要 ImageMagick（`magick`）。

### 首次安裝

macOS 可用 Homebrew 安裝 `rbenv` 與 `ruby-build`：

```bash
brew install rbenv ruby-build
```

依 rbenv 安裝說明初始化 shell；zsh 的設定為 `eval "$(rbenv init - zsh)"`，只在尚未設定時加入 `~/.zshrc`。重新開啟終端機後，在專案根目錄執行：

```bash
rbenv install -s "$(cat .ruby-version)"
gem install bundler -v 2.5.22
bundle install
npm ci --prefix test --ignore-scripts --no-audit --no-fund
bundle exec jekyll serve
```

開啟 `http://localhost:4000`，以 Ctrl+C 停止。一般內容修改會觸發重建，瀏覽器重新整理後查看；修改 `_config.yml` 後需重啟服務。

### 常用指令

```bash
bundle exec jekyll build
bundle exec jekyll serve --port 4001
bundle exec jekyll serve --drafts
bundle exec jekyll serve --future
bundle exec jekyll clean
bundle exec jekyll doctor
bundle exec jekyll build --profile
```

`--drafts` 與 `--future` 用於本機預覽，不代表 Pages 會發布這些內容。增量建置可能保留快取，提交前仍使用下方全新 production 驗證；`doctor` 不會檢查所有 HTML 與連結。

## 建立內容

寫作要求、發布節奏與分類政策仍見 [CONTENT_STRATEGY.md](docs/CONTENT_STRATEGY.md)。該文件尚待校正；下列最小範例依目前模板使用既有分類，暫留本指南，待第三階段整併。

文章位於 `_posts/YYYY-MM-DD-title.md`：

```yaml
---
title: "文章標題"
categories: [AI Tools]
tags: [ChatGPT, tutorial]
---
```

分類需與現有分類頁一致，標籤統一大小寫。精選文章使用 `featured: true`；封面使用下方 `header` 欄位。文章 layout 與 permalink 優先沿用 `_config.yml` defaults，特殊網址修改需檢查既有連結。不要把主題的 `toc` 選項直接當成自訂文章模板的行為開關。

新頁面位於 `_pages/`，先確認該頁與網址在授權範圍內。以下為沿用主題單頁版型的最小範例，不代表現有每個頁面都使用它：

```yaml
---
layout: single
title: "頁面標題"
permalink: /my-page/
author_profile: true
---
```

樣式修改從 `assets/css/main.scss` 的既有 import 順序追蹤對應 partial，使用現有 variables／mixins 與命名。不要複製舊文件中不存在的 `_components.scss`、`_utilities.scss` 或 `_overrides.scss`；視覺約束仍依 [Design System](docs/DESIGN_SYSTEM_SPEC.md)。

## 作者資料設定

全站作者名稱、簡介、位置、信箱與頭像位於 `_config.yml` 的 `author`。側欄由 `_includes/author-profile.html` 顯示，bio 經 `markdownify` 處理；About 的正文、職涯與技能另在 `_pages/about.md`，修改 bio 不會同步改寫 About。

例如只修改既有 `author` 下的 `bio` 欄位：

```yaml
bio: '**Software Developer** | 分享 AI 與開發實戰'
```

使用空格縮排，確認冒號、引號配對與 YAML 語法。YAML 多行雙引號字串及 `>-` 會折疊換行；`|-` 保留字串換行，也不保證 Markdown 畫面出現硬換行。需要分行時使用 Markdown 段落或 `<br>`，並預覽實際顯示。

簡介以身份、專長與寫作方向為主，避免過長造成溢出；行數由側欄寬度與文字換行決定，不強制三行。重啟 Jekyll 後在有啟用作者側欄的頁面檢查；部分頁面關閉 `author_profile`，單篇作者設定也可能覆寫全站作者。頭像尺寸與重製方式見下節。

原 [HOW-TO-EDIT-BIO.md](HOW-TO-EDIT-BIO.md) 保留原位供追溯；其中舊圖片路徑、三行字串與自動提交步驟不作為目前操作依據。

## 圖片處理

本節保留現行圖片契約與完整操作，待第三階段移交 [ASSET_SPEC.md](docs/ASSET_SPEC.md) 後再改成引用。

### 共用文章封面

本機需要 ImageMagick（`magick`），GitHub Pages 不需要安裝圖片工具。產生後的圖片直接加入版本控制：

```bash
bash scripts/generate-post-images.sh assets/images/posts/example.png
```

程式保留原圖、維持比例、不放大，只產生一張最大寬度 1280px 的 `example-cover.webp`（quality 82），供首頁卡片、文章列表、相關文章與文章頁共用。如果轉換後不比原圖小，會移除該衍生檔並提示繼續使用原圖。請目視檢查畫質，再填入實際尺寸：

```yaml
header:
  image: /assets/images/posts/example-cover.webp
  image_width: 1280
  image_height: 853
```

高度僅為範例，必須填入檔案的實際尺寸。`_includes/post-image.html` 在所有位置優先使用同一個 `header.image`：卡片延遲載入；文章封面立即載入並提高優先權。舊文章只有 `header.teaser` 時仍可 fallback；缺少尺寸的舊圖不會輸出假的尺寸值。不需要另外維護縮圖或重複的 teaser 欄位。

頂層 `image` 是社群分享圖片，本次保留原始 PNG/JPEG。既有 CSS 控制卡片裁切，不改變圖片本身構圖。`test/post_image_test.rb` 由既有 Ruby workflow 自動執行，Pages 使用已生成的檔案，不執行圖片轉換。

### 頭像壓縮

全站使用一張 400x400 WebP，原始 PNG 保留。重新產生不需要擴充圖片工具或安裝 Pages 套件：

```bash
magick assets/images/profile_picture_xaos_engineer.png -auto-orient -resize '400x>' -strip -quality 82 assets/images/profile_picture_xaos_engineer.webp
```

`_config.yml` 的 `author.avatar` 指向 WebP；`avatar_width`／`avatar_height` 填入實際檔案尺寸，模板僅在兩者都有設定時輸出，既有 CSS 繼續控制顯示大小。

## 現行互動約定

以下約定保留近期改善的有效決策，待第三階段整併至 [LAYOUT_SPEC.md](docs/LAYOUT_SPEC.md)。舊建站階段清單不代表這些功能尚未完成。

### 文章導覽與首頁驗證

- 文章標籤連結與標籤頁統一採用 `tag-` 錨點；標籤名稱應統一大小寫，避免 slug 相同造成重複 ID。
- 目錄保留 Markdown／自訂 heading ID；只有缺少 ID 時才生成不撞名的 fallback，標題以文字節點呈現。
- 首頁精選最多四篇；沒有精選時顯示最新四篇，有少量精選時不混入其他文章。
- 標籤／文章總數由 Liquid 直接輸出，不加總每個標籤的文章數，因此不會重複計算。
- `test/navigation_test.rb`、`test/navigation_test.cjs` 分別檢查模板輸出與實際 inline JavaScript。`npm test --prefix test` 執行全部 `*_test.cjs`。
- production 驗證額外檢查標籤 ID 唯一性、文章標籤目標、文章統計及首頁卡片上限。閱讀時間以移除 HTML、修剪首尾空白後的字元數計算：每 500 字元一分鐘，向上取整，至少一分鐘；不區分中英文，不新增手動設定欄位。

### 動態效果與音效

- 直接尊重系統 `prefers-reduced-motion: reduce`，不新增設定面板或偏好儲存。
- 首頁 Matrix 僅在可見畫面、分頁未隱藏且允許動態效果時繪製；離開畫面／切換分頁暫停，返回時恢復。支援執行中切換系統偏好與重新計算視窗縮放後的欄數；以現代瀏覽器的 matchMedia、IntersectionObserver 與標準 change 事件為支援範圍，不維護舊 API 相容分支。
- 主樣式在減少動態效果模式下將動畫／transition 縮短至近乎即時，取消延遲與平滑捲動，同時保留動畫完成狀態，避免 About 技能條停在零寬度。搜尋視窗與閱讀完成提示保留可見狀態。
- 文章在減少動態效果模式下不建立捲動粒子或浮動 EXP；複製文字與成功回饋仍可使用。
- 閱讀完成提示在所有模式下都不播放音效，每篇頁面只顯示一次，保留文字狀態通知。
- `test/motion_test.cjs` 在 DOM 測試中模擬瀏覽器 Canvas／排程／可見性邊界，驗證暫停、恢復與偏好變更。它不取代真實瀏覽器的 CSS 動畫、版面或耗電測量。

手動檢查：在系統或 DevTools 切換減少動態效果，確認首頁、搜尋、About 技能條、複製按鈕與閱讀完成提示仍可使用；一般模式的 Matrix 離開畫面後暫停，返回後恢復。

### 搜尋與導覽精簡

- `_config.yml` 的 `search: false` 只關閉 Minimal Mistakes 內建搜尋，避免重複輸出搜尋表單與 Lunr scripts。自訂搜尋由 masthead 直接引入，仍正常使用；不需重新開啟主題搜尋。
- 導覽互動統一由既有 `assets/js/navigation.js` 負責，使用 `.masthead__menu`、`.mobile-toggle` 與 `.nav-link`。masthead 不再重複輸出 inline 導覽程式，也不注入舊選單的 scroll-lock 樣式；移除未使用的 `.visible-links.show` 與 `slideDown` 動畫。
- 保留目前選單開關、點擊連結收合、當前網址標示與捲動狀態；初始化會同步已還原的捲動位置。
- 標籤頁移除不會觸發的 fragment-only 事件處理，沿用原生錨點；搜尋與排序仍由 tag cloud 元件負責。減少動態效果仍由全站 CSS 處理。
- production 驗證會攔下主題搜尋表單／Lunr scripts 回歸，並確認自訂搜尋覆蓋層只有一份。

## 測試與驗證

初次安裝或 `test/package-lock.json` 改變時，先執行 `npm ci --prefix test --ignore-scripts --no-audit --no-fund`。日常修改後依範圍執行測試；提交前完整驗證：

```bash
bundle check
BUNDLE_FROZEN=true bundle exec ruby -Itest -e 'Dir["test/*_test.rb"].sort.each { |file| require_relative file }'
npm test --prefix test
BUNDLE_FROZEN=true bundle exec ruby scripts/validate.rb
```

| 檢查 | 能證明的範圍與限制 |
|---|---|
| Ruby 回歸測試 | 設定、Liquid 輸出、搜尋資料安全、圖片選擇與載入、導覽及閱讀時間等既有契約 |
| DOM 測試 | 實際搜尋程式、模板互動與動態效果；jsdom 模擬 DOM，不實作真實版面與 CSS 動畫 |
| production 驗證 | 重複 YAML key、全新暫存建置、主要頁面與已發布文章、分類、標籤目標／唯一 ID、文章統計、首頁卡片上限、本地資源與開發檔案排除 |
| 搜尋輸出檢查 | 自訂覆蓋層只出現一次，不回歸主題搜尋表單與 Lunr scripts |
| 手動瀏覽器 | Chrome／Edge、Firefox、Safari／iOS 的版面、鍵盤焦點、捲動、圖片與動態效果；手機、平板、桌面需實際預覽 |

`scripts/validate.rb` 會自動清除暫存輸出，不使用舊 `_site` 判定成功。它不執行瀏覽器 JavaScript、不驗證所有外部連結、第三方服務或效能分數。遠端主題需網路；下載失敗時回報原因，不能略過後宣稱建置成功。

搜尋測試涵蓋中文／特殊符號、安全文字呈現、排序與上限、清空選取、IME、Tab／Escape 與焦點還原；仍需手動確認搜尋視窗在不同螢幕的可見焦點與捲動。動畫測試模擬 Canvas、排程與可見性邊界，不等於耗電測量。

## 部署與上線

2026-10-23 由 GitHub Pages API 確認部署為 `build_type: legacy`，來源為 `main` 分支根目錄 `/`。變更後仍以 repository Settings → Pages 與實際部署結果為準；`.ruby-version` 控制本機與驗證 workflow，不控制 Pages 內建環境。

[驗證 workflow](.github/workflows/validate.yml) 在 PR、push 或手動執行時：

1. 依 Ruby 設定與 lockfile 安裝套件，啟用 `BUNDLE_FROZEN`，禁止自動改寫 lockfile。
2. 執行全部 `test/*_test.rb`。
3. 使用 Node 24 及 `test/package-lock.json` 安裝測試依賴，執行 DOM 測試。
4. 執行 production 驗證。

workflow 僅使用 `contents: read`，不需部署 secret、不發布網站、不修改 Pages。它與 legacy 部署獨立，直接 push 到 main 可能立即觸發部署，不會等待此驗證。若要強制合併前檢查，需另外設定 branch protection 的 required status check，以 GitHub 實際顯示名稱為準。

建議流程：本機驗證與預覽 → 依[授權規則](agents.MD#git-規則)提交／建立 PR → 確認 `Validate site` 通過 → 經使用者指示合併或推送 → 確認 Pages 建置、部署與線上頁面。使用者手動提交時，AI 僅提供結果與 commit message，不自行操作。

本機與 CI 通過無法保證遠端部署成功；權限、服務狀態與主題下載仍可能影響 Pages。部署故障需查看實際 Pages 建置紀錄。

## 疑難排解與升級

| 問題 | 檢查與處理 |
|---|---|
| Ruby／Bundler 找不到或版本不符 | 執行 `ruby --version`、`bundle --version`、`which ruby`、`rbenv version`；確認 shell 已初始化，Ruby 來自 rbenv shims，而非系統 Ruby |
| Bundler 不符 lockfile | 查 `Gemfile.lock` 的 `BUNDLED WITH`，安裝對應版本；不要只為排錯改寫 lockfile |
| 埠號已使用 | 用 `lsof -i :4000` 確認程序；停止自己開的服務或用 `--port 4001`，不要批次強制終止未知程序 |
| 修改沒有反映 | 重新整理瀏覽器；設定修改需重啟。必要時停止服務、執行 `bundle exec jekyll clean` 後重建 |
| 檔案監看無效 | 嘗試 `bundle exec jekyll serve --force_polling`，再確認儲存路徑與服務日誌 |
| Sass 警告 | 依日誌定位主題或專案來源，區分 deprecation 與編譯錯誤；不能一律認定無害或以隱藏日誌取代排查 |
| 遠端主題下載失敗 | 檢查網路與實際錯誤；保留失敗結果，不用舊輸出冒充成功 |

依賴升級另開明確範圍，先看 `Gemfile`／lockfile／主題 pin 與測試依賴，確認 GitHub Pages 相容限制後才更新。日常安裝使用 `bundle install`，不把全量 `bundle update` 或 `bundle update --bundler` 當成排錯必要步驟；刻意升級後檢查 lockfile diff 並重跑完整驗證。

官方參考：[Jekyll](https://jekyllrb.com/docs/)、[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/)、[Liquid](https://shopify.github.io/liquid/)。

## CHANGELOG

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
