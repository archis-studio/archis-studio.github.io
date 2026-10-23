# ARCHIS.STUDIO
# Version 4.0.2 | Updated: 2026-10-24

**MEMORY IS THE NEW IMMORTALITY**

Archis Studio 是以繁體中文分享 AI 工具、Backend、Data Science 與跨領域學習的技術部落格。網站以 Jekyll 與 Minimal Mistakes 為基礎，部署於 GitHub Pages，供人／Agent 共同維護。

[探索文章](https://archis-studio.github.io/posts/) · [關於作者](https://archis-studio.github.io/about/) · [分類導航](https://archis-studio.github.io/categories/)

## 目標與範圍

提供技術教學、實戰分享、工具評測與學習筆記，用繁體中文降低學習門檻，保留英文技術術語。讀者包含 AI 工具使用者、開發者、設計與創意工作者，以及持續學習的人。

設計融合 Fashion Editorial 的文字層次、Autumn Noir 的深色暖調、Gaming Pixel 的終端機與 RPG 元素，以及 AI Future Space 的未來感。維護時以內容與閱讀體驗優先，採用一致的 Design System、可重用元件與 mobile-first 版面，避免不必要的視覺干擾。

專案範圍包括主題客製化、Design System、響應式部落格、內容管理流程，以及 SEO 與效能改善。不包含電子商務、多語言網站、複雜 JavaScript application 或動態後端；留言服務是原規劃允許的例外，是否啟用需依設定與實際服務確認。

品質目標包含元件規格完整、PageSpeed 超過 90、WCAG 2.1 AA、手機閱讀品質，以及人／Agent 能順利接手。這些是持續改善的目標；達成情況需附測量條件與驗證結果。

## 現有能力

- 首頁 Hero、技能徽章、最多四篇精選文章與分類入口。
- 文章庫、分類與標籤頁；文章頁提供目錄、閱讀時間、程式碼高亮與相關文章。
- 自訂文字搜尋，支援鍵盤操作與中文輸入；搜尋資料由 Jekyll 產生。
- Terminal／RPG 風格 About、職涯時間軸、技能與證書展示頁。
- 每篇文章共用一張壓縮封面、卡片延遲載入，以及共用 WebP 頭像。
- 尊重系統減少動態效果偏好；Matrix 在不可見時暫停，閱讀完成提示保持靜音。
- Ruby、DOM 回歸測試與 production 建置驗證，協助檢查 GitHub Pages 相容性。

八個內容領域包含 AI 工具、軟體開發、資料科學、數位行銷、量化交易、閱讀筆記、綠色能源與成長旅程。文章範例、欄位及分類命名見[發文指南](DEVELOPMENT.md#建立內容)；內容取捨與發布由作者決定，可選建議見[寫作參考](docs/CONTENT_STRATEGY.md)。

舊文件中的 Phase 0–10 是建站歷史。尚未採用的構想與待確認的第三方服務，不視為目前待辦或已驗證能力。

## 快速開始

先依[開發指南](DEVELOPMENT.md#環境與啟動)準備 Ruby 與 Bundler，再執行：

```bash
git clone https://github.com/archis-studio/archis-studio.github.io.git
cd archis-studio.github.io
bundle install
bundle exec jekyll serve
```

開啟 `http://localhost:4000`。Ruby 版本以 [.ruby-version](.ruby-version)、套件以 [Gemfile.lock](Gemfile.lock)、遠端主題以 [_config.yml](_config.yml) 為準；環境、測試與部署細節集中於開發指南。

## 維護入口

| 需要了解的事 | 文件 |
|---|---|
| 專案如何運作、如何測試與部署 | [DEVELOPMENT.md](DEVELOPMENT.md) |
| Agent 的修改邊界、工作流程與 Git 規則 | [agents.MD](agents.MD) |
| 設計、版面、內容與資源該查哪裡 | [文件索引](docs/DOC_INDEX.md) |

修改前先查相關規格與實作，完成驗證後再依使用者指示提交。歡迎以 Issue 或 PR 討論內容與改善建議。

日常維護依文件入口查閱；舊指南保留於 [docs/archive](docs/archive/)，已完成計畫與歷史去向由[文件索引](docs/DOC_INDEX.md#歷史與封存)導覽。

## 聯絡與授權

作者：Archi Chen · Email：magic83w@gmail.com · GitHub：[@archis-studio](https://github.com/archis-studio)

原 README 標示 MIT License，歡迎作為 Jekyll 部落格模板。目前 repository 尚無獨立 `LICENSE` 檔；本次整理保留原授權說明，不另行制定授權條款。

## CHANGELOG

### v4.0.2 (2026-10-24)

- 更新現行發文入口與歷史封存導覽，移除整併中的過渡狀態。

### v4.0.1 (2026-10-23)

- 維護協作對象改稱人／Agent。

### v4.0.0 (2026-10-23)

- 整併專案憲章的目標、範圍與品質原則，區分目標與實測成果。
- 校正現有能力、啟動方式及文件入口，移除重複版本表與過時路線圖。

### 歷史摘要

- v3.0.0 (2025-10-28)：區分訪客與 Agent 文件入口。
- v2.1.0 (2025-10-27)：加入設計亮點與內容分類介紹。
- v2.0.0 (2025-10-26)：記錄 About、文章庫與文章版型實作。
- v1.0.0 (2025-10-24)：建立 Autumn Noir Future 與 Design System。

完整舊版內容與變更細節保留於 Git 歷史；整理前基準為 `d6b054a`。
