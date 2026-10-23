# 文件索引
# Version 5.0.6 | Updated: 2026-10-23

供人／Agent 依任務找到主要文件。入口文件已整理，第三階段 A 已完成範例與發文指南；Content 已改為可選寫作參考，Design 已完成 B1 來源與範例校正；Layout／Navigation 待 B2 整併，原指南尚未封存。不以舊版 Complete 標籤判定內容與現況一致。

## 依任務查找

| 任務 | 從這裡開始 |
|---|---|
| 第一次接手 | [README](../README.md) → [agents](../agents.MD) → [架構地圖](../DEVELOPMENT.md#架構地圖) |
| 啟動、安裝、排錯、套件升級 | [開發指南](../DEVELOPMENT.md#環境與啟動) |
| 驗證修改、確認 Pages 上線流程 | [測試與驗證](../DEVELOPMENT.md#測試與驗證)、[部署與上線](../DEVELOPMENT.md#部署與上線) |
| 調整視覺與元件 | [Design System](DESIGN_SYSTEM_SPEC.md)、[Layout](LAYOUT_SPEC.md) 與相關實作 |
| 導覽、搜尋、文章互動 | [現行互動約定](../DEVELOPMENT.md#現行互動約定)、[Layout](LAYOUT_SPEC.md)、[Navigation](NAVIGATION_SPEC.md) |
| 新增文章、分類、標籤 | [建立內容](../DEVELOPMENT.md#建立內容)與既有範例 |
| 協助整理文章 | [寫作參考](CONTENT_STRATEGY.md)；內容與發布由作者決定 |
| 共用封面、頭像與作者簡介 | [圖片處理](../DEVELOPMENT.md#圖片處理)、[作者資料設定](../DEVELOPMENT.md#作者資料設定) |
| 查看整理去向、衝突與後續批次 | [文件整理方案](superpowers/plans/2026-10-23-documentation-reorganization.md) |

## 文件責任與整理狀態

| 文件 | 主要責任 | 整理狀態 |
|---|---|---|
| [README.md](../README.md) | 定位、範圍、現有能力與最短啟動入口 | 第二階段已整理 |
| [agents.MD](../agents.MD) | Agent 授權邊界、修改流程、Git 與文件規則 | 第二階段已整理 |
| [DEVELOPMENT.md](../DEVELOPMENT.md) | 架構、環境、測試、部署與排錯 | 操作優先；提供修改／測試入口，保留現行契約 |
| [DESIGN_SYSTEM_SPEC.md](DESIGN_SYSTEM_SPEC.md) | 設計約束、tokens／mixins、元件入口與已知落差 | B1 已校正，接收視覺原則；不代表全部落差已消除 |
| [LAYOUT_SPEC.md](LAYOUT_SPEC.md) | 頁面結構、導覽、搜尋與互動 | 待第三階段整併 Navigation 與互動契約 |
| [CONTENT_STRATEGY.md](CONTENT_STRATEGY.md) | 可選寫作建議與 Agent 協助方式 | 已依作者決定取消硬性寫作與排程要求 |
| [ASSET_SPEC.md](ASSET_SPEC.md) | 待轉移的視覺／品牌規範與舊資源方案 | 操作查 Development；通用視覺原則已到 Design，剩餘頁面內容待 B2 核對 |
| [DOC_INDEX.md](DOC_INDEX.md) | 任務路由、文件責任及歷史入口 | 第二階段已整理 |

原八份分工已調整：日常發文以 Development 與既有範例為入口，Content 保留簡短的寫作參考；Asset 的通用視覺原則已轉入 Design，待其餘內容核對後評估封存。各文件自行維護版本與 CHANGELOG，索引不重複抄寫版本、日期、行數或測試數量。

尚未校正的主題規格仍有約束效力；其中舊環境版本、檔案範例與功能進度需對照實作。操作以開發指南的已核對內容為準，設計政策不因程式現況自動改寫。文章由作者自行把關；舊發布節奏、篇幅、固定結構與語言格式要求已取消，決策由整理計畫追溯。

## 實作來源入口

| 事實／行為 | 主要來源 |
|---|---|
| Ruby、套件與主題版本 | [Ruby](../.ruby-version)、[Gemfile](../Gemfile)、[lockfile](../Gemfile.lock)、[設定](../_config.yml) |
| 樣式 token 與共用工具 | [variables](../_sass/design-system/_variables.scss)、[mixins](../_sass/design-system/_mixins.scss)、[樣式入口](../assets/css/main.scss) |
| 搜尋與導覽 | [search.js](../assets/js/search.js)、[navigation.js](../assets/js/navigation.js)、[masthead](../_includes/masthead.html) |
| 文章圖片 | [共用 include](../_includes/post-image.html)、[本機圖片工具](../scripts/generate-post-images.sh) |
| 自動驗證 | [workflow](../.github/workflows/validate.yml)、[production validator](../scripts/validate.rb)、[測試目錄](../test/) |

目前行為由程式與測試確認，設計要求由經確認的規格約束；有落差時記錄並依任務授權處理。

## 補充與待整併來源

以下檔案保留原位。表中指出有效內容的主要去向，並非宣告整份原文失效。

| 原文件 | 現在如何使用 |
|---|---|
| [PROJECT_CHARTER.md](PROJECT_CHARTER.md) | 目標、範圍、品質與協作原則已吸收到 README／agents；舊技術版本與完成勾選不代表現況 |
| [AI_COLLABORATION_GUIDE.md](AI_COLLABORATION_GUIDE.md) | 核心協作規則已吸收到 agents；相衝突的自動 commit 流程由 agents 取代 |
| [HOW-TO-EDIT-BIO.md](../HOW-TO-EDIT-BIO.md) | 作者設定操作已吸收到 Development；舊文案範例保留供追溯 |
| [NAVIGATION_SPEC.md](NAVIGATION_SPEC.md) | 尚待整併至 Layout；與當前導覽／搜尋差異列於整理方案 |
| [assets/images/README.md](../assets/images/README.md) | 構圖與視覺建議已由 Design 接收；頭像操作查 Development，原文留待最後封存 |
| [IMPLEMENTATION_CHECKLIST.md](IMPLEMENTATION_CHECKLIST.md) | 建站階段與歷史設計背景，待封存；不作為目前待辦清單 |
| 原索引的 `PROFILE-IMAGE-TODO.md` 引用 | repository 查無此檔，不另建空文件；目前共用 WebP 頭像見 Development |

## 計畫與歷史紀錄

計畫記錄當時問題、決策與驗收，不取代現行指南；歷史中的「待確認」或「尚未提交」只描述當時狀態：

- [Pages 驗證計畫](superpowers/plans/2026-10-23-pages-validation.md)
- [搜尋可靠性計畫](superpowers/plans/2026-10-23-search-reliability.md)
- [文章圖片計畫](superpowers/plans/2026-10-23-post-images.md)
- [文件整理方案](superpowers/plans/2026-10-23-documentation-reorganization.md)：目前進行中的跨階段工作紀錄。

完整舊版索引與變更紀錄可由 Git 追溯，整理前基準為 `d6b054a`。封存須待有效內容搬移與引用更新後進行。

## CHANGELOG

### v5.0.6 (2026-10-23)

- 同步 B1 設計來源／範例與 Asset 視覺原則接收狀態，保留 B2 與封存待辦。

### v5.0.5 (2026-10-23)

- 圖片操作直達 Development，Asset 與圖片 README 改列待轉移來源，明確區別歷史狀態。

### v5.0.4 (2026-10-23)

- Content 改列可選寫作參考，移除舊政策待確認狀態。

### v5.0.3 (2026-10-23)

- Content 改列品質／政策參考，發文操作直達 Development 與既有範例。

### v5.0.2 (2026-10-23)

- 同步 Development 操作優先編排、目前進度與人／Agent 稱呼。

### v5.0.1 (2026-10-23)

- 同步以既有文章範例與 Development 為發文入口，不預設 Content／Asset 必須獨立維護。


### v5.0.0 (2026-10-23)

- 改為任務導覽與八份常用文件的責任地圖，明確標示未完成整併項目。
- 移除重複版本／行數追蹤與過時 Complete 標籤，保留補充文件及計畫入口。

### 歷史摘要

- v4.0.1–4.0.8 (2026-10-23)：加入建置、搜尋、圖片、導覽與動態效果驗證入口。
- v4.0.0 (2025-11-01)：加入 Design System 實作入口。
- v3.0.0–3.1.0 (2025-10-26–28)：整理規格與閱讀受眾。
- v1.0.0–2.0.0 (2025-10)：建立文件追蹤及建站進度索引。
