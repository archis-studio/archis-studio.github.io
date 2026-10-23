# 專案文件整理：章節搬移對照與衝突清單
# Version 1.1.1 | Updated: 2026-10-23

**狀態：第一階段對照完成；第二階段入口文件已整理，尚未封存或搬檔。**

本文件提供人類與 AI 審查後續文件整理的依據，不取代現行專案規則，也不授權 commit、push、刪除文件或變更設計。

盤點基準：commit `d6b054a`，17 份維護／規格文件、約 5,446 行；另有 6 篇文章及 12 份網站頁面 Markdown。本方案是額外的暫時工作紀錄，不列入八份常用文件。

## 目前進度

| 階段 | 狀態 | 交付與剩餘工作 |
|---|---|---|
| 第一階段：盤點與對照 | 已完成 | 17 份來源、八份責任分工、逐章去向、12 項衝突及驗收條件 |
| 第二階段：入口與流程 | 已完成 | 四份入口已整理；執行與驗證見第 9 節 |
| 第三階段 A：內容與資源 | 尚未執行 | 整理 Content／Asset，整併建文與圖片操作 |
| 第三階段 B：設計與版面 | 尚未執行 | 核對 Design／Layout，整併 Navigation |
| 第四階段：封存與驗收 | 尚未執行 | 封存六份舊文件、標示歷史計畫、更新引用並完整驗證 |

接下來先處理第三階段 A；前次提出的操作優先編排與圖片章節示範尚未實作。原文件均未搬移或封存，commit／push 仍依使用者指示。

## 1. 第一階段交付與邊界

以下記錄第一階段當時的工作範圍；不代表第二階段尚未改寫入口文件。

- 完成原文件章節到目標章節的對照、衝突分類與後續批次安排。
- 本階段只新增本方案；不修改原文件、程式、設定、文章、網址或部署。
- 八份是常用文件的責任分工，不是刪減比例、字數限制或文件數量上限。
- 有效決策、專案範圍、必要操作與驗證限制均需有明確去向。
- 後續以封存取代刪除；歷史構想不自動轉成待實作需求。
- 後續若發現未列入對照的重要章節，先補對照，不直接捨棄。

## 2. 八份常用文件的責任

下列為第一階段提出的目標結構；入口文件已於第二階段整理，主題規格仍待後續整併。連結指向現有檔案。

| 文件 | 讀者與主要問題 | 提議的目標章節 |
|---|---|---|
| [README.md](../../../README.md) | 訪客、第一次接手的人：專案是什麼、從哪開始 | 專案定位；目標與範圍；現有能力；快速開始；文件入口；聯絡與授權 |
| [agents.MD](../../../agents.MD) | AI 與審查者：能改什麼、如何驗證、哪些動作需要指示 | 指令優先與授權；修改邊界；依任務閱讀；修改與驗證流程；Git 規則；文件維護規則 |
| [DEVELOPMENT.md](../../../DEVELOPMENT.md) | 維護者：專案怎麼運作、如何開發與部署 | 架構地圖；環境與啟動；修改與測試；CI 與 Pages 部署；作者資料設定；疑難排解；診斷與升級 |
| [DESIGN_SYSTEM_SPEC.md](../../DESIGN_SYSTEM_SPEC.md) | 設計與前端維護者：視覺有哪些約束 | 設計原則；Tokens 與實作來源；共用元件；無障礙與動態效果原則；設計決策與已知落差 |
| [LAYOUT_SPEC.md](../../LAYOUT_SPEC.md) | 前端維護者：頁面如何組合、互動如何運作 | 頁面與模板對照；首頁；文章與目錄；列表／分類／標籤；About／證書；導覽與搜尋；響應式行為 |
| [CONTENT_STRATEGY.md](../../CONTENT_STRATEGY.md) | 作者、內容協作者：如何寫與發文 | 內容定位；文章 front matter；分類與標籤；正文與程式範例；SEO 與分享欄位；發布與內容檢查 |
| [ASSET_SPEC.md](../../ASSET_SPEC.md) | 作者、資源維護者：如何準備與引用資源 | 現有資源與命名；共用文章封面；頭像；原圖與衍生檔；圖片欄位與 alt；品牌／圖示／字型資源 |
| [DOC_INDEX.md](../../DOC_INDEX.md) | 所有人：這個任務該讀哪裡 | 依任務查找；八份文件分工；實作來源入口；歷史資料入口 |

若未來架構內容需要獨立維護，再評估新增 ARCHITECTURE.md；不為維持八份而把不同責任硬塞在一起。

## 3. 資訊的主要維護位置

| 資訊 | 主要位置 | 其他文件如何使用 |
|---|---|---|
| 專案目的與範圍 | README | agents／規格引用，不重寫另一套定位 |
| 授權、commit／push、修改邊界 | agents | Development 只說明流程並連回規則 |
| 架構、啟動、測試與部署 | Development | README 留最短啟動步驟；細節連回指南 |
| 配色／字型／間距約束 | Design System | Layout 說明使用方式，不重複列完整數值表 |
| 頁面結構、選單、搜尋與互動 | Layout | Development 保留原理圖與驗證指令，細節引用 Layout |
| 寫作、分類、標籤及文章欄位 | Content | Development 的建文操作連到 Content |
| 圖片產生、尺寸、命名及資源欄位 | Asset | Content 引用圖片契約與一個最小範例，不抄整套指令 |
| 目前版本與檔案事實 | lockfile、設定、workflow、實際來源 | 文件標出來源；版本快照需註明查核時間，避免多份手動抄表 |
| 品質目標與實際證據 | README 目標；Development 驗證方法及限制 | 不以目標值或舊勾選清單宣稱實測達標 |
| 歷史過程與未採用構想 | archive／已完成計畫 | 常用文件只保留仍有效的決策與原因 |

程式與測試用來確認目前行為；經確認的設計規格仍代表設計約束。兩者不一致時先記錄落差，不能直接把程式現況當成修改設計的授權。

## 4. 逐份章節搬移對照

以下保留第一階段提出的搬移對照；目前完成狀態見上方進度表，第二階段實際採用的決策見第 9 節。

動作定義：**保留**＝維持責任並校正；**整併**＝保留有效資訊到指定位置；**去重**＝保留一份完整版本，其餘改引用；**封存**＝保留歷史來源，退出現行指引。

### 4.1 README.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 部落格介紹、適合讀者、聯絡方式、授權 | 保留於 README | 保留品牌與作者原意；授權敘述與實際檔案需核對，不自行補授權 |
| 設計亮點、八大分類 | 摘要留 README；詳細視覺到 Design／Layout，分類名稱到 Content | 不再維護與實作不同的分類色彩表 |
| 已完成功能、未來規劃、Phase 進度 | 現有能力留 README；歷史 Phase 封存；構想另標未採用 | 搜尋、留言、證書、RSS、圖片與 Analytics 等逐項核對，設定存在不等於服務效果已驗證 |
| 快速開始、技術架構、專案結構 | 最短入口留 README；詳解到 Development | 核對 Jekyll／主題版本與不存在的 layout；減少重複版本及檔案清單 |
| 文件導航、參與貢獻 | 簡短入口留 README；詳查連到 Doc Index／agents／Development | 避免每次新增測試都要同步多份清單 |
| 版本履歷 | 摘要或歷史封存 | 細節以 Git 歷史追溯；本項涉及紀錄政策，見 C03 |

### 4.2 agents.MD

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| Project Overview、Core Principles | 簡短上下文留 agents；定位到 README | 不重複版本／功能總覽 |
| Mandatory Reading、Implementation References、Quick Start | 改為 agents 的依任務閱讀 | 首次接手先看入口與架構；不要求每次修小問題讀完所有文件 |
| Implementation Phases、設計系統介紹與範例 | Phase 封存；有效設計內容到 Design；實作入口改引用 | 不把建站階段當成目前進度 |
| File Operations、Git Workflow、Do NOT Do、Success Criteria、Respect Boundaries | 整併為 agents 核心規則 | 保留設計修改、推送、文件保存等邊界；commit 規則依 C01 待確認 |
| Quality Checklist、Troubleshooting、Getting Help、Learning Resources | agents 留驗證要求；指令與排錯到 Development；視覺要求到 Design／Layout | 不用全勾選清單宣稱瀏覽器與無障礙已驗證 |
| Decision／Progress／Error 模板、Final Notes | 去重並濃縮成溝通原則 | 保留需回報問題、驗證結果與限制的要求；原始模板隨舊版保留 |
| Documentation Standards、CHANGELOG | 現行規則整理到 agents；歷史留舊版 | 新的日期／版本／changelog 規則依 C03 待確認，不能提前套用 |

### 4.3 DEVELOPMENT.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| Prerequisites、Initial Setup、First-Time Setup、Local Development、Common Issues | 整併為環境與啟動／疑難排解 | 保留實際需要的環境步驟；合併重複 LiveReload／快取說明，核對示範指令 |
| Environment Management、診斷與更新指令 | Development／診斷與升級 | 明確區分日常驗證與刻意升級，避免把全量 bundle update 當成必要步驟 |
| 建立新文章、front matter 範例 | Content／文章建立與欄位 | 使用既有分類，保留實際 permalink／featured／圖片欄位操作 |
| 新增頁面 | Development／修改入口；內容編輯連 Content | 區別網站頁面與維護說明文件，不隨文件整理改路由 |
| 自訂樣式開發、Custom Development | Development 留來源位置；元件與 Tokens 使用移到 Design | 移除不存在的 components／utilities／masthead／overrides 範例，改引用實際檔案 |
| Deployment、Testing & Quality、Browser Testing | 保留並重組 | 清楚記錄 legacy Pages、驗證 workflow 與實際部署的差別，以及 DOM 測試限制 |
| 搜尋、文章導覽、閱讀時間、動態效果、導覽精簡的行為說明 | Layout／對應互動章節；Development 留測試方法及重要架構關係 | 保留自訂搜尋不受 search:false 關閉、標籤錨點、500 字元估算等有效約定 |
| 共用文章封面、頭像壓縮 | Asset／封面與頭像 | 壓縮指令只在 Asset 維護；Development 的作者設定連到該章節 |
| Useful Resources、Changelog | 留精選操作參考；歷史依 C03 整理 | 不持續把每次修正過程加回維護手冊 |
| 新增架構地圖（由既有資訊重組） | Development／架構地圖 | 說明內容→layout／include→SCSS／資源→Pages，以及 CI 獨立驗證；不引入新架構 |

### 4.4 HOW-TO-EDIT-BIO.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 修改位置、步驟、注意事項、檢查清單 | Development／作者資料設定 | 保留 author.bio、author-profile、About 內容分別從何處修改，以及改 config 後重啟 |
| 格式規則、Markdown 支援 | 保留一個有效範例與 YAML 說明 | YAML 多行雙引號字串會折疊；顯示換行需依模板／Markdown 實際行為驗證 |
| 內容建議、風格參考、目前 Bio 分析、多套範例 | 有用的撰寫原則併入作者設定；其餘保留於封存原文 | 不把過時 Bio 當成現況；不重新替作者決定品牌文案 |
| 整份文件 | 完成上述轉移後，提議封存到 docs/archive/HOW-TO-EDIT-BIO.md | 同步 README、agents、索引引用後才搬移 |

### 4.5 assets/images/README.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| Image Requirements、Naming Convention | Asset／頭像、命名與原圖管理 | 記錄現行 400x400 WebP 頭像與實際命名；不再標示尚未上傳 |
| Design Aesthetic Guide、替代頭像構想 | 已確認原則到 Design；備選構想保留歷史 | 不因整理而重做頭像或新增圖片版本 |
| 整份文件 | 提議封存到 docs/archive/assets-images-README.md | 避免 archive 內與其他 README 檔名混淆，保留來源路徑註記 |

### 4.6 DOC_INDEX.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 文件表、實作檔案、操作指南、閱讀順序 | 重組為依任務查找與八份分工 | 去除不存在的 PROFILE-IMAGE-TODO 引用，不重新建立該檔案 |
| 版本表、程式行數、功能逐次改善清單 | 改為實作來源連結；歷史留舊版 | 行數並非文件完整性依據；不建立第二套測試／版本清單 |
| 版本更新規則、狀態標籤、指令 | 規則到 agents；操作到 Development | 索引只負責找到資訊，避免規則重複 |
| CHANGELOG | 按 C03 整理 | 整理方案及 archive 要可查，但不列為日常必讀 |

### 4.7 PROJECT_CHARTER.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 目標、內容定位、專案範圍 | README／目標與範圍；內容定位連 Content | 保留繁中技術分享、內容優先、靜態站及排除範圍，不新增或刪除專案使命 |
| 兩套設計原則、技術架構、方法論 | Design／設計原則；Development／架構；agents／修改流程 | 去重不改設計意圖；Jekyll 版本依 lockfile 校正 |
| 語言、AI 協作 | Content／文章語言；agents／協作規則 | 衝突依 C06 記錄處理 |
| 成功標準、技術與內容指標 | README／品質目標；Development／驗證證據與限制 | 效能 >90 等保留為目標，沒有量測不標成達標 |
| 整份文件及 changelog | 提議封存到 docs/archive/PROJECT_CHARTER.md | 所有有效目標與限制完成對照後才能退出現行入口 |

### 4.8 AI_COLLABORATION_GUIDE.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| Workflows、Git、File Operations、禁止事項、確認操作、文件規則 | agents／核心流程與邊界 | 明列保留 Git remote 修改限制、重要設定不得刪除、protected 區域保護，以及重要設定修改／主要頁面新增刪除的確認要求；設計規格與文件保存邊界同樣保留。矛盾 commit 規則依 C01 確認，使用者當次明確指示仍優先 |
| Communication、Decision／Progress／Error 模板 | agents／溝通要求 | 留下可審查的結果與限制；模板不必逐份重複 |
| Design System 協作、技術規範、品質清單 | agents 留原則；Design／Layout 留規格；Development 留驗證操作 | 不將尚未測量的品質項目標為已通過 |
| Best Practices、兩段 CHANGELOG | 有效原則去重；歷史隨原檔保留 | 不新增另一份流程手冊 |
| 整份文件 | 提議封存到 docs/archive/AI_COLLABORATION_GUIDE.md | agents 成為唯一現行 AI 工作規則入口後才封存 |

### 4.9 DESIGN_SYSTEM_SPEC.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 設計原則、色彩、字型、間距 | 留在 Design | 保留設計決策，註明 variables／mixins 的實作來源；不因搬移改值 |
| Components、Focus、Typography、Responsive Mixins、Grid | Design／可用元件與約束 | 將未定義變數的示意與可直接使用的範例分清楚，見 C04 |
| Responsive、Accessibility、Animation | Design 留跨頁原則；頁面行為到 Layout | 補充已採用的 reduced-motion 約定，不承諾未做的瀏覽器量測 |
| Implementation Guide、Usage、新增分類 | Design 留 Token／mixin 操作；分類名稱與文章設定連 Content／Layout | 新增 map 顏色只會生成樣式，不代表分類路由與內容已建立 |
| 效益統計、勾選清單、Changelog | 歷史敘述與目前證據分開 | 原有「硬編碼已全數消除」等說法需核對，不把目標寫成事實 |

### 4.10 LAYOUT_SPEC.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 架構總覽、Main、Hero、Author、TOC、Footer | Layout／各頁面結構 | 用實際模板對照描述差異，不用通用三欄圖概括所有頁面 |
| Navigation 與響應式行為 | Layout／導覽，吸收 Navigation Spec 的有效內容 | 現行選單、搜尋、class、斷點與 JS 位置需核對 |
| 顏色、字體、元件 SCSS、斷點表 | 通用約束到 Design；Layout 改為引用 | 不保留兩套會獨立漂移的數值表 |
| Hover、Loading、Animations、實作檢查清單 | 實際行為留 Layout；構想／待驗證明確標示 | 骨架屏、模糊載入等未確認功能不因文件存在而要求實作 |
| 新吸收的搜尋／目錄／標籤／閱讀時間／動態效果 | Layout／對應章節 | 來源包含 Development 與 Navigation Spec；保留目前行為和驗證限制 |

### 4.11 NAVIGATION_SPEC.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 架構、選單、品牌、搜尋、互動、無障礙、響應式 | Layout／導覽與搜尋 | 依 navigation.yml、masthead、navigation.js、search.js 核對；保留仍有效的要求 |
| 視覺 SCSS 與共用元件要求 | Design／元件；頁面特有結構留 Layout | 不照抄舊 class 或不存在的字體／變數 |
| 展示空間、下拉選單等未採用結構 | 封存為歷史構想 | 不列為目前能力或本次待實作需求 |
| 整份文件及檢查清單、Changelog | 提議封存到 docs/archive/NAVIGATION_SPEC.md | Layout 的導覽章節驗收後才更新引用與搬移 |

### 4.12 ASSET_SPEC.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 資源架構、命名、頭像、文章圖、品牌／圖示／字型 | 保留於 Asset，合併圖片 README 及 Development 的有效操作 | 實際存在的路徑與原始構想分開，不建立空資料夾來遷就舊文件 |
| 響應式圖、分離 teaser、不同尺寸頭像 | 保留歷史方案；現行契約改為共用圖片 | 記錄使用者已決定單張封面與單張頭像；舊 teaser 是相容 fallback |
| CSS 組織、視覺設計範例 | Design／實作方式；Development／來源入口 | 不在 Asset 重複維護 SCSS 架構 |
| 圖片最佳化、工具與檢查清單 | Asset／操作與畫質檢查 | 現行生成工具需記錄不放大、保留原圖、轉換更大時不用衍生圖，以及輸出實際尺寸 |
| Critical CSS、額外字型載入等建議 | 僅保留有依據的約定；其餘標示構想或歷史 | 不把建議誤寫成目前載入方式 |

### 4.13 CONTENT_STRATEGY.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 定位、內容類型、寫作、程式範例、品質 | Content／寫作與品質 | 保留作者原意；語言要求衝突見 C06，不把範本變成所有文章必須遵循的格式 |
| 分類與標籤、文章範本 | Content／實際欄位契約 | 使用既有八分類名稱、統一標籤命名、正文由 H2 起、保留 permalink 穩定性 |
| 內容排程、季節規劃 | 保留原策略並標示待確認 | 是否仍具約束力、改為選用建議或轉歷史，依 C12 確認後決定；不在整理時直接降級 |
| Visual Content、圖片與 SEO | Content 留如何引用及發布檢查；圖片操作連 Asset | 清楚區分 header.image、頂層分享 image 與 alt，不複製壓縮參數全文 |
| 從 Development 移入建文指令／front matter | Content／發文流程 | 給一份可用範例；不因文件整併修改現有文章標題、內容或網址 |
| 自我建置清單與 Changelog | 保留有用發文檢查；文件建置過程轉歷史 | 移除「尚未建立寫作規範」這類過時狀態，不刪有效品質要求 |

### 4.14 IMPLEMENTATION_CHECKLIST.md

| 原章節 | 動作與去向 | 保留／修正要求 |
|---|---|---|
| 多套 Phase、進度總覽、舊檔案建立步驟與範例 | 整份歷史封存 | 不繼續修補成新的總進度表，保留原始矛盾供追溯 |
| 仍有效的功能／品質要求、部署與測試目標 | Design／Layout／Content／Asset／Development 依責任取出 | 逐項分類為現行要求、品質目標、待驗證或未採用，不能只因勾選就承認完成 |
| 尚未落實的分頁、主題切換、其他構想 | 記錄為歷史／候選項目 | 需未來明確採納才成為需求；本次不實作 |
| 整份文件 | 提議封存到 docs/archive/IMPLEMENTATION_CHECKLIST.md | 有效要求完成對照後才退出現行入口 |

### 4.15 三份已完成計畫

| 原文件 | 去向 | 處理要求 |
|---|---|---|
| [pages-validation](2026-10-23-pages-validation.md) | 保留原路徑，列入歷史入口 | 保留當時基準與驗證記錄；「尚未 push」只代表當時，不覆蓋現況 |
| [search-reliability](2026-10-23-search-reliability.md) | 保留原路徑，列入歷史入口 | 保留搜尋安全與操作決策；當前使用方式由 Layout／Development 負責 |
| [post-images](2026-10-23-post-images.md) | 保留原路徑，列入歷史入口 | 保留單張封面的取捨與當時容量；目前指令與欄位由 Asset 負責 |

三份計畫不再是日常必讀，不持續同步測試數量。增加歷史標示不代表重寫當時結果。

## 5. 衝突與修正清單

下表保留第一階段的發現與建議，不代表全部仍未處理。C01、C11 已落實；C03 採保留單檔版本、停止索引重複追蹤的做法；C02、C05、C07、C08、C09、C10 僅完成入口中的校正。C04、C06、C12 與對應主題規格仍待後續處理，詳見第 9 節。

**事實校正**可在對應批次依來源核對；**規則／設計確認**需在改寫該規範前確認，不能從程式現況直接推導授權。

| ID | 類型 | 發現 | 建議與依據 |
|---|---|---|---|
| C01 | 規則確認 | agents／協作指南同時要求直接 commit、每單位 commit、所有 commit 要確認 | 建議統一為「預設不 commit／push，收到當次明確指示才執行」，符合本次合作方式；Conventional Commits 與 AI attribution 保留。現行指令優先關係仍適用 |
| C02 | 事實校正 | README、Charter、agents 寫 Jekyll 4.x／主題 4.27.3 | 基準實作是 github-pages 232、Jekyll 3.10.0、主題 4.27.0；來源為 Gemfile.lock、_config.yml、.ruby-version、workflow。不要以改文件為由升級套件 |
| C03 | 規則確認 | 每個小改都要求更新各文件版本、索引版本及多份 changelog | 建議 Git 歷史記錄細節，常用文件保留最後查核日期與重大決策；若仍保留文件版本規則，則只維護受影響文件，索引不再複製版本表。尚未批准前沿用現規則 |
| C04 | 設計確認 | Design／Layout 範例使用未定義的 accent-blue、primary-50 等，README 分類色彩也與實作不同 | 保留既有設計意圖與分類語義，核對 variables／mixins 與現有樣式；逐項標明有效規範或歷史示意，不自行重畫配色／版面 |
| C05 | 事實校正 | Phase 重複、分頁被標為完成，搜尋／留言／證書等仍列未完成 | 依模板、設定及驗證確認目前能力；目標與未驗證品質分開。實作清單封存，不再作現況依據 |
| C06 | 規則確認 | 協作規則要求程式註解英文，內容指南又要求中文註解；技術詞範例過度一律化 | 建議儲存庫程式註解英文、文章解說繁中並保留常用英文技術詞；文章教學範例的註解要求需確認，不能把所有中文技術說明視為錯誤 |
| C07 | 事實校正／保留原意 | Asset 與圖片 README 要求多尺寸／placeholder，近期已採用單張圖；Bio 範例過時且 YAML 換行說明不精確 | 對照 author 設定、post-image include、產生工具與實際圖檔，記錄已確認的共用圖契約；Bio 以可驗證範例取代過時的「當前內容」，不改作者文案 |
| C08 | 事實校正 | Content／Development 的分類範例使用未建立的名稱 | 改用既有 AI Tools、Software Dev、Data Science、Marketing、Quant Trading、Reading、Green Energy、Growth；來源為分類頁與實際文章。新增分類須另做內容／路由／樣式調整 |
| C09 | 事實校正 | 引用不存在的 PROFILE-IMAGE-TODO、_layouts/posts.html、部分 SCSS 檔案 | 查核來源後移除錯誤引用或指向現有位置；示意路徑明確標成示意，不為符合文件而建立無用檔案 |
| C10 | 品質狀態 | README／規格的「完美適配」「全數消除硬編碼」「效能 >90」與測試狀態混用 | 功能存在、自動測試、瀏覽器驗證、效能／無障礙量測分別記錄；品質目標保留，沒有證據就不宣稱通過 |
| C11 | 規則確認 | 常用文件與建站歷史皆被列為 AI 必讀 | 建議 agents／索引作入口，其餘依任務閱讀；已完成計畫與 archive 不列入現行工作規則 |
| C12 | 內容策略確認 | Content Strategy 明列每週／每兩週發文頻率與季節主題，但目前是否仍適用尚未確認 | 先保留原策略；由作者確認保留為要求、改為建議或封存，不能以精簡為由取消發文承諾 |

## 6. 整理批次與驗收範圍

| 批次 | 實際處理內容 | 驗收重點 |
|---|---|---|
| 第二階段：入口與流程（已完成） | README、agents、Development、Doc Index；吸收 Charter／AI Guide／Bio 的有效內容 | 規則衝突有明確結論；可理解架構、啟動、測試、部署與修改邊界；原檔先保留 |
| 第三階段 A：內容與資源 | Content、Asset；吸收 Development 的建文／圖片操作及圖片 README | 一份可用文章範例；現有分類；單張封面／頭像；圖片與分享欄位不混淆；原文案與網址不變 |
| 第三階段 B：設計與版面 | Design、Layout；吸收 Navigation Spec | 設計約束仍完整；實際模板／class／斷點有來源；歷史示意不會被照抄為現況 |
| 第四階段：封存與驗收 | 完成合併的六份舊常用文件移到 archive；三份已完成計畫標示歷史 | 逐章搬移對照完成；所有現行引用改到有效位置；檔案保留、沒有刪除 |

第四階段的六份候選封存來源：PROJECT_CHARTER、AI_COLLABORATION_GUIDE、NAVIGATION_SPEC、IMPLEMENTATION_CHECKLIST、HOW-TO-EDIT-BIO、assets/images/README。先完成內容轉移，再移動檔案，不提前讓現行閱讀順序失效。

每批獨立驗證與審查；是否 commit／push 依使用者當次指示。本方案不是執行後續全部階段的指令。

## 7. 防止資訊失真的驗收條件

以下為全案最終驗收清單，留待各批完成後逐項核對；第二階段已執行的驗證另記於第 9 節，不以本清單概括宣稱全案完成。

- [ ] 17 份來源均已對照；有價值的段落都有保留目的地或歷史去向。
- [ ] 專案定位、既有設計意圖、禁止事項與品質目標沒有被默默刪改。
- [ ] C01／C03／C04／C06／C11／C12 有確認結論，再改寫對應規則／規格與內容策略。
- [ ] Git remote、重要設定／protected 區域、主要頁面、設計規格與文件保存的修改邊界逐項核對，沒有被過度概括而遺漏。
- [ ] 尚未採用的構想沒有被當成新功能實作；過時狀態沒有被當成實測結果。
- [ ] 範例路徑、欄位與分類存在；示例 YAML 可解析，操作步驟與實際工具相符。
- [ ] 原文檔封存時保留正文與來源位置，增加歷史標示；現行文件不再以其作工作規則。
- [ ] 文件相對連結、章節引用及入口閱讀順序有效，沒有指向已搬走的舊路徑。
- [ ] _posts、_pages、index.html、網址、圖片及實作未因本次文件整理而改動。
- [ ] docs 與封存檔仍被排除於網站輸出；根目錄／assets 下的搬移也檢查輸出差異。
- [ ] 實際搬移後執行既有 production 驗證；僅新增本方案時只核對內容與文件連結。

### 維護情境驗收

1. 新維護者能從入口找到環境、啟動與驗證指令，理解 CI 與部署不是同一件事。
2. 作者能依指南建立含有效分類、穩定網址與共用封面的文章。
3. AI 能依任務找到規格與實作，知道目前授權及應執行的驗證。
4. 改視覺時能分辨已確認約束、程式現況與尚未採用構想。
5. 查歷史決策時能找到原文，但不會把當時的指令當成目前授權。

## 8. 第一階段結案紀錄（歷史狀態）

已完成：來源盤點、八份責任分工、章節去向、12 項衝突／校正項、後續批次與驗收條件。獨立審查後補明禁止事項的逐項保留要求，以及內容排程需由作者確認。

第一階段結束時，尚未執行原文件改寫、規則決策套用、搬移、封存、程式變更、commit 或 push；當時也未修改索引。第二階段其後已改寫四份入口並更新索引，詳見第 9 節。目前仍未搬移、封存或修改程式，亦未執行 commit／push。

## 9. 第二階段執行紀錄

2026-10-23，依使用者「keep going」繼續已提出的第二階段，只整理 README、agents、Development 與 Doc Index：

- README 吸收 Charter 的目標、範圍及品質原則，區分目標與實測成果。
- agents 吸收 AI Guide 的流程、品質與操作邊界，統一為使用者指示後才 stage／commit／push，依任務查閱規格。
- Development 補上架構地圖，吸收 Bio 的有效操作，校正內容範例、路徑與排錯方式。圖片與互動契約完整保留，等待第三階段接手。
- Doc Index 改為任務路由、責任與整理狀態，不再重複維護各檔版本與行數。
- C01、C11 的入口工作規則已落實；C02、C05、C07、C08、C09、C10 只校正本批入口中的事實，對應主題規格仍待處理。
- C03 採保守處理：保留單檔版本／CHANGELOG，僅停止索引重複追蹤；未全面改成無版本文件。
- C04 設計落差、C06 文章註解語言與 C12 發布節奏均保留原規格，未在本批調整政策。
- 原六份待整併來源、三份既有計畫及四份主題規格維持原位；PROFILE-IMAGE-TODO.md 查無此檔，索引改為說明而非失效連結；完整舊版入口可由基準 commit 追溯。
- 本批不修改程式、設定、文章、網址或部署，不執行 commit／push。

### 第二階段驗證

- `git diff --check` 通過；既有檔案只修改四份入口，主題規格、程式與設定未變。
- 檢查本批五份文件中的 101 個本地連結與章節錨點，全部有效；不存在的 PROFILE-IMAGE-TODO.md 改為說明文字。
- `BUNDLE_FROZEN=true bundle exec ruby scripts/validate.rb` 通過：全新 production build、6 篇文章版型、20 個頁面、搜尋目標、本地資源與發布排除規則。
- 初次建置受沙箱 DNS 限制，允許網路下載既定版本主題後重跑通過。未重新執行無關的 DOM／Ruby 回歸測試，也未宣稱完成瀏覽器或遠端部署驗證。

## CHANGELOG

### v1.1.1 (2026-10-23)

- 新增目前進度摘要，標示第二階段已完成與後續未執行批次。
- 將第一階段結案敘述標為歷史狀態，補明衝突清單的處理進度與全案驗收範圍。
- 集中版本紀錄於文件末尾，保留第二階段執行與當時驗證結果。
- 本次僅調整計畫文件；檢查本地連結、章節結構與 diff，不重跑網站建置。

### v1.1.0 (2026-10-23)

- 記錄第二階段入口整理範圍、實際決策與暫留內容；第一階段盤點資料保留為歷史基準。

### v1.0.0 (2026-10-23)

- 建立第一階段章節搬移對照與衝突清單，供審查後續文件整理範圍。
