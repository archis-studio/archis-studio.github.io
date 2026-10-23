# 文件索引

Version 6.0.0 | Updated: 2026-10-24

供人／Agent 依任務查找現行文件。舊指南與已完成計畫只供追溯，不代表目前規則、進度或授權。

## 依任務查找

| 任務 | 從這裡開始 |
|---|---|
| 第一次接手 | [README](../README.md) → [agents](../agents.MD) → [架構地圖](../DEVELOPMENT.md#架構地圖) |
| 啟動、安裝、排錯、升級 | [Development](../DEVELOPMENT.md#環境與啟動) |
| 測試、驗證、確認 Pages 上線 | [測試與驗證](../DEVELOPMENT.md#測試與驗證)、[部署與上線](../DEVELOPMENT.md#部署與上線) |
| 發文章、分類／標籤、作者與圖片 | [發文](../DEVELOPMENT.md#建立內容)、[作者設定](../DEVELOPMENT.md#作者資料設定)、[圖片](../DEVELOPMENT.md#圖片處理) |
| 協助整理文章 | [寫作參考](CONTENT_STRATEGY.md)；作者自行決定內容與發布 |
| 視覺、tokens、mixins 與資源原則 | [Design System](DESIGN_SYSTEM_SPEC.md) |
| 頁面、導覽、搜尋與互動 | [Layout](LAYOUT_SPEC.md) |
| 查舊決策與整理過程 | [歷史與封存](#歷史與封存) |

## 現行文件分工

| 文件 | 主要責任 |
|---|---|
| [README](../README.md) | 專案定位、範圍與維護入口 |
| [agents](../agents.MD) | 修改邊界、協作、Git 與文件規則 |
| [Development](../DEVELOPMENT.md) | 架構、環境、發文／圖片操作、測試與部署 |
| [Design System](DESIGN_SYSTEM_SPEC.md) | 設計約束、可用 API、視覺原則與已知落差 |
| [Layout](LAYOUT_SPEC.md) | 實際頁面組成、導覽、搜尋與互動約定 |
| [寫作參考](CONTENT_STRATEGY.md) | 可選編輯建議與 Agent 協助方式，沒有硬性字數、格式或排程要求 |
| [文件索引](DOC_INDEX.md) | 任務導覽、資訊分工與歷史入口 |

七份是本次整併後的分工，不是固定數量限制。操作、規格與歷史各有主要位置，避免重複維護。版本／CHANGELOG 由各文件維護，索引不抄版本表、行數或測試數量。

程式與測試說明目前行為，設計規格保留約束與未決落差。已知落差不代表可直接改寫設計或補做新功能；是否發布文章由作者決定。

## 實作來源入口

| 事實／行為 | 主要來源 |
|---|---|
| Ruby、套件與主題版本 | [Ruby](../.ruby-version)、[Gemfile](../Gemfile)、[lockfile](../Gemfile.lock)、[設定](../_config.yml) |
| 設計工具與樣式 | [variables](../_sass/design-system/_variables.scss)、[mixins](../_sass/design-system/_mixins.scss)、[main.scss](../assets/css/main.scss) |
| 搜尋與導覽 | [search.js](../assets/js/search.js)、[navigation.js](../assets/js/navigation.js)、[masthead](../_includes/masthead.html) |
| 文章圖片 | [共用 include](../_includes/post-image.html)、[圖片工具](../scripts/generate-post-images.sh) |
| 自動驗證 | [workflow](../.github/workflows/validate.yml)、[validator](../scripts/validate.rb)、[測試](../test/) |

## 歷史與封存

封存文件保留原文、原路徑與來源 commit，只有相對連結因搬移調整。其舊操作、未完成狀態與未採用構想不作為現行工作要求：

| 歷史來源 | 現行資訊去向 |
|---|---|
| [PROJECT_CHARTER](archive/PROJECT_CHARTER.md) | README 的目標／範圍、Design 的原則、agents 的協作邊界 |
| [AI_COLLABORATION_GUIDE](archive/AI_COLLABORATION_GUIDE.md) | agents 與 Development |
| [NAVIGATION_SPEC](archive/NAVIGATION_SPEC.md) | Layout 的導覽／搜尋與 Design |
| [IMPLEMENTATION_CHECKLIST](archive/IMPLEMENTATION_CHECKLIST.md) | 現行能力查 README，要求與來源查 Design／Layout，驗證查 Development；舊 Phase 不是待辦 |
| [HOW-TO-EDIT-BIO](archive/HOW-TO-EDIT-BIO.md) | Development 的作者設定 |
| [assets/images/README](archive/assets-images-README.md) | Development 的圖片操作與 Design 的視覺原則 |
| [ASSET_SPEC](archive/ASSET_SPEC.md) | Development 的操作、Design 的視覺原則與 Layout 的頁面／歷史構想核對 |

三份已完成計畫保留原路徑並標示歷史：

- [Pages 驗證](superpowers/plans/2026-10-23-pages-validation.md)
- [搜尋可靠性](superpowers/plans/2026-10-23-search-reliability.md)
- [共用文章圖片](superpowers/plans/2026-10-23-post-images.md)

[文件整理紀錄](superpowers/plans/2026-10-23-documentation-reorganization.md)保留逐章去向、決策與驗收。歷史中的「未 commit／push」只代表當時狀態；整份計畫不會持續同步測試數量或遠端部署結果。

## CHANGELOG

### v6.0.0 (2026-10-24)

- 七份現行文件與七份封存來源分開導覽，整併過程改由歷史紀錄承接。
- 完成相對引用更新，舊指南與已完成計畫不再列為工作入口。

### v5.0.7 (2026-10-23)

- 同步 B2 頁面與互動整併，導覽／搜尋改連 Layout；原 Navigation／Asset 保留待封存。

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
