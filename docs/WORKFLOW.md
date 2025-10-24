# 內容策略 - Content Strategy  
# Version 1.0.0 | Updated: 2025-10-11

## 🎯 內容定位

**目標**: AI Coding 教育，繁體中文，實戰導向

**主要內容類型**:
1. AI 工具應用教學
2. Backend 開發技巧  
3. 數據科學實務
4. 學習心得分享

---

## 🎯 內容定位 (Content Positioning)

### 品牌定位
- **專業教育者** (Professional Educator): Archi Chen 的技術權威性
- **實戰導向** (Practice-Oriented): 真實專案經驗分享
- **AI 時代先行者** (AI Era Pioneer): 擁抱 AI 工具的現代開發者
- **知識橋樑** (Knowledge Bridge): 降低技術學習門檻

### 獨特價值主張 (Unique Value Proposition)
> "用最實用的方式學習 AI Coding - 不只是工具教學，更是思維升級"

---

## 📝 內容類型架構 (Content Type Framework)

### 主要內容類型

#### 1. 🛠️ 工具實戰 (Tool Mastery)
**目標**: 教讀者如何有效使用 AI 工具提升開發效率

```yaml
categories: [ai-applications]
typical_tags: [ChatGPT, GitHub-Copilot, 工具應用, 效率提升]
content_structure:
  - 工具介紹與特色
  - 實際使用場景
  - 最佳實務與技巧
  - 常見問題與解決方案
  - 進階應用案例
```

#### 2. 💻 技術深度 (Technical Deep Dive)  
**目標**: 提供紮實的技術知識與最佳實務

```yaml
categories: [technical, backend]
typical_tags: [Python, FastAPI, 系統設計, 效能優化]
content_structure:
  - 技術背景與重要性
  - 核心概念解釋
  - 實作步驟與程式範例
  - 效能考量與最佳化
  - 實際專案應用
```

#### 3. 📊 數據應用 (Data Applications)
**目標**: 數據科學與工程的實務應用

```yaml  
categories: [data-science, fintech]
typical_tags: [Pandas, 數據分析, 量化交易, 機器學習]
content_structure:
  - 問題定義與資料來源
  - 數據處理與清理
  - 分析方法與工具
  - 結果解讀與洞察
  - 商業應用與價值
```

#### 4. 🌱 成長心得 (Growth Insights)
**目標**: 職涯發展與學習方法分享

```yaml
categories: [personal-growth]  
typical_tags: [學習方法, 職涯發展, 技能提升, 心得分享]
content_structure:
  - 個人經驗背景
  - 挑戰與困難點
  - 解決方案與策略
  - 學到的重要教訓
  - 給讀者的建議
```

---

## ✍️ 寫作規範 (Writing Guidelines)

### 語言使用標準

#### Technical Terms (技術用語)
**保持英文，首字母大寫**
```
✅ 正確: API、Backend、Machine Learning、GitHub、Python
❌ 錯誤: api、後端、機器學習、github、派森
```

#### 說明內容 (Explanatory Content)
**使用繁體中文，搭配適當的技術用語**
```
✅ 正確: "這個 API 的設計重點在於提升使用者體驗"
✅ 正確: "我們使用 FastAPI 來建立高效能的 Backend 服務"
❌ 錯誤: "這個 Application Programming Interface 的設計重點..."
```

### 文章結構範本 (Article Structure Template)

#### 標準文章結構
```markdown
# 文章標題 (清楚、具體、包含關鍵字)

> **摘要**: 2-3 句話說明文章要解決的問題與提供的價值

## 🎯 為什麼要讀這篇文章？
- 明確列出讀者能獲得的具體收穫
- 適合的讀者程度與背景
- 預計閱讀時間

## 📋 前置需求 (如果需要)
- 必要的技術背景
- 需要準備的工具或環境
- 相關的前置知識

## 🚀 主要內容
### 第一部分: [具體小節標題]
- 清楚的概念解釋
- 豐富的程式範例
- 實際的執行結果

### 第二部分: [具體小節標題]
- 進階技巧或最佳實務
- 常見錯誤與避免方法
- 效能或安全性考量

## 💡 重點整理
- 3-5 個關鍵重點
- 可直接應用的 takeaways
- 延伸學習的方向

## 🔗 延伸資源
- 官方文件連結
- 相關工具或套件
- 推薦的進階讀物

---

**標籤**: #相關標籤 #技術分類 #工具名稱
**分類**: 主要分類
**難度**: 入門/中級/進階
```

### 程式範例規範 (Code Example Guidelines)

#### Code Block 格式
```python
# 清楚的註解說明程式目的
def calculate_performance_metrics(data: pd.DataFrame) -> Dict[str, float]:
    """
    計算投資組合的效能指標
    
    Args:
        data: 包含價格與報酬資料的 DataFrame
        
    Returns:
        效能指標的字典 (年化報酬率、夏普比率等)
    """
    # 實際的程式實作
    return metrics
```

#### 程式說明原則
1. **中文註解**: 解釋商業邏輯與重要概念
2. **英文變數**: 變數與函數名稱使用英文  
3. **完整範例**: 提供可執行的完整程式碼
4. **輸出展示**: 顯示執行結果與預期輸出

---

## 🏷️ 分類與標籤系統 (Category & Tag System)

### 主要分類 (Primary Categories)
```yaml
technical:
  name: "技術分享"
  description: "程式設計、系統架構、開發工具"
  color: "#2563eb"

ai-applications:
  name: "AI 應用"  
  description: "AI 工具使用、提示工程、自動化"
  color: "#7c3aed"

backend:
  name: "Backend 開發"
  description: "後端架構、API 設計、資料庫"  
  color: "#059669"

data-science:
  name: "資料科學"
  description: "數據分析、機器學習、視覺化"
  color: "#dc2626"

fintech:
  name: "金融科技"  
  description: "量化交易、風險管理、金融數據"
  color: "#ea580c"

personal-growth:
  name: "個人成長"
  description: "學習方法、職涯發展、心得分享"  
  color: "#16a34a"
```

### 標籤使用規範 (Tag Usage Guidelines)

#### 技術標籤 (Technical Tags)
```yaml
# 程式語言
languages: [Python, JavaScript, TypeScript, SQL, Go]

# 框架與套件  
frameworks: [FastAPI, Django, Flask, React, Vue.js, Pandas, NumPy]

# 工具與平台
tools: [Docker, Kubernetes, AWS, GCP, GitHub, VS-Code]

# AI 工具
ai_tools: [ChatGPT, GitHub-Copilot, Claude, Midjourney]
```

#### 概念標籤 (Concept Tags)  
```yaml
# 開發概念
dev_concepts: [API設計, 系統架構, 效能優化, 測試策略, 部署策略]

# 資料科學概念
ds_concepts: [數據分析, 機器學習, 深度學習, 特徵工程, 模型評估]

# 軟技能概念  
soft_skills: [學習方法, 時間管理, 溝通技巧, 團隊協作, 問題解決]
```

---

## 📊 內容品質標準 (Content Quality Standards)

### 文章長度指標
- **入門文章**: 800-1200 字
- **中級文章**: 1200-2000 字  
- **進階文章**: 2000-3500 字
- **系列文章**: 各篇 1000-1500 字

### 品質檢查清單

#### 內容品質 (Content Quality)
- [ ] 標題清楚且包含關鍵字
- [ ] 摘要簡潔有力，說明價值主張
- [ ] 結構清晰，使用適當的標題層次
- [ ] 程式範例完整且可執行
- [ ] 包含實際的應用場景  
- [ ] 提供延伸學習資源

#### 技術準確性 (Technical Accuracy)
- [ ] 程式碼經過測試驗證
- [ ] 技術概念解釋正確
- [ ] 版本資訊明確標註
- [ ] 相依套件清單完整

#### 讀者體驗 (Reader Experience)  
- [ ] 適合目標讀者程度
- [ ] 步驟說明清楚易懂
- [ ] 視覺元素輔助理解
- [ ] 重點資訊突出顯示

#### SEO 最佳化 (SEO Optimization)
- [ ] Meta description 撰寫完成
- [ ] 內部連結適當配置  
- [ ] 圖片 alt text 完整
- [ ] 相關文章推薦設定

---

## 📅 內容排程策略 (Content Scheduling Strategy)

### 發文頻率
- **主要文章**: 每週 1-2 篇
- **快速技巧**: 每週 1 篇
- **系列文章**: 每兩週完成一個系列

### 內容主題輪替
```
週一: AI 工具應用
週三: 技術深度分享  
週五: 實戰專案案例
週日: 學習心得與成長
```

### 季節性內容規劃
- **Q1**: 新年學習計劃、基礎技能建立
- **Q2**: 進階技術應用、專案實戰  
- **Q3**: 工具評測、效率優化
- **Q4**: 年度回顧、未來趨勢

---

## 🎨 視覺內容規範 (Visual Content Guidelines)

### 圖片需求
- **封面圖**: 1200x630px (適合社群分享)
- **內文圖**: 800x450px (16:9 比例)
- **程式截圖**: 高解析度，清楚可讀
- **圖表製作**: 使用品牌色彩，簡潔明瞭

### 程式碼分享
- **語法高亮**: 使用適當的 syntax highlighting
- **行號顯示**: 便於討論與參考
- **複製功能**: 讀者可直接複製使用
- **執行環境**: 標註 Python 版本、套件版本

---

## ✅ 內容策略檢查清單 (Content Strategy Checklist)

### 策略規劃
- [ ] 目標受眾明確定義
- [ ] 內容類型架構建立
- [ ] 分類標籤系統完成  
- [ ] 品質標準制定完成

### 寫作規範
- [ ] 語言使用規範建立
- [ ] 文章結構範本制定
- [ ] 程式範例格式統一
- [ ] SEO 最佳化規範完成

### 維運機制
- [ ] 內容排程策略制定
- [ ] 品質檢查流程建立
- [ ] 讀者回饋收集機制
- [ ] 內容效果追蹤指標

---

**下一步**: 開始建立實際的 Jekyll 網站架構與第一篇示範文章# AI 協作指南 - AI Collaboration Guide
# Version 1.6.0 | Updated: 2025-10-16

## 🔄 工作流程 (Workflows)

### 🚀 簡化流程 (Simple Tasks)
適用於：文件修正、小幅更新、錯誤修復

```
1. 🛠️ 執行 (Execute)
   - 直接執行修改
   - Commit 變更

2. ✅ 確認 (Confirm)  
   - 簡要回報完成內容
   - 等待人類確認
```

### 🏗️ 完整流程 (Complex Tasks)
適用於：新功能開發、大幅重構、多檔案變更

```
1. 📊 規劃階段 (Planning)
   - 大綱整理 (Outline)
   - 資訊分析 (Information Analysis) 
   - 策略制定 (Strategy)
   - 行動計劃 (Action Plan)
   - 目標確認 (Goal Confirmation)

2. ✅ 確認階段 (Confirmation)
   - 與人類討論並確認計劃
   - 調整方案直到滿意

3. 🛠️ 實作階段 (Implementation)
   - 按計劃逐步執行
   - 每個步驟都 commit (不 push)
   - 實時回報進度

4. 🔍 驗證階段 (Verification)  
   - 功能測試與品質檢查
   - 文檔同步更新
   - 最終確認後才 push
```

## 📁 檔案操作規則

**必須遵守**:
- 修改前先讀取檔案確認狀態
- 使用 `str_replace` 精確修改
- 更新文件版本號與日期
- 更新 `docs/DOC_INDEX.md` 記錄

**Git 規則**:
- ✅ 可執行: `git status`, `git diff`, `git add`, `git commit`
- ❌ 禁止: `git push` (需人類確認)

## 🎯 品質檢查

每次完成任務後檢查:
- [ ] 符合 Design System 規格
- [ ] Mobile responsive
- [ ] 文件版本已更新
- [ ] 功能測試通過

---

## 📝 CHANGELOG

### v1.6.0 (2025-10-16)
- 新增簡化流程 (Simple Tasks) 適用於小幅修改
- 區分簡單任務與複雜任務的工作流程
- 提供簡化版進度回報格式
- 提升簡單任務的協作效率

### v1.5.0 (2025-10-15)
- 新增 AI Agent 識別規範於 commit message
- 建立多 AI 協作的標準化流程
- 定義 AI agent 命名規則與格式

### v1.3.0 (2025-10-14)
- 新增「錯誤處理」標準流程
- 具體化 Git 操作範例
- 整合並精簡溝通協定結構

### v1.2.0 (2025-10-11)
- 新增 AI Agent 互換性設計標準
- 建立標準化規劃格式模板
- 定義 Conventional Commits 規範
- 新增進度回報標準格式
- 確保任何 AI assistant 都能順利接手

### v1.1.0 (2025-10-11)
- Enhanced 協作工作流程 (4階段模式)
- 更新 Git 操作規範 (允許 commit，禁止 push)
- 新增規劃階段的詳細要求

### v1.0.0 (2025-10-11)
- 建立基礎協作流程
- 定義語言使用規範
- 制定檔案操作規則

## 🗣️ 溝通協定 (Communication Protocols)

### 語言使用規範
- **Technical Terms**: 英文 (API, Component, CSS, JavaScript)
- **說明與討論**: 繁體中文
- **Code & Comments**: 英文
- **Documentation**: 依讀者需求，技術文件英文，使用指南中文

### Git 操作標準規範
- ✅ **允許**: `git status`, `git diff`, `git add`, `git commit`
- ❌ **禁止**: `git push origin main` (需人類明確指令)
- 📝 **Commit 策略**: 
  - 每完成一個功能模組就 commit
  - 使用 Conventional Commits 格式 + AI Agent 識別
  - 所有 commits 保持在本地，等確認後再 push

### AI Agent 識別規範
每個 AI assistant 在 commit message 中必須標註自己的身份。我們採用 Git 標準的 `trailer` 格式。

**格式**:
```
<type>(<scope>): <description>

[optional body]

Authored-by: <ai-agent-name>
```

**AI Agent 命名規則**:
- **Amazon Q**: `Q`
- **Claude**: `Claude`
- **ChatGPT**: `GPT`
- **Copilot**: `Copilot`
- **Gemini**: `Gemini`

**範例**:
```bash
# Gemini 的 commit
git commit -m "refactor(theme): rewrite masthead styles
> 
> This refactor clarifies the navigation styling by moving all related
> rules to a dedicated partial.
> 
> Authored-by: Gemini"

# Q 的 commit
git commit -m "fix(css): resolve infinite scroll issue
>
> - Add overflow-x: hidden to html and body
> - Set explicit width/height for background layer
>
> Authored-by: Q"

# 人類的 commit (不需要標註)
git commit -m "docs: update project requirements"
```

### 決策請求標準格式
AI 需要人類決策時的標準格式：

```markdown  
## 🤔 需要您的決定

**背景**: [簡述情況]
**問題**: [具體需要決定的事項]

**選項**:
A) [選項 A 描述]
   - 優點: [列出優點]
   - 缺點: [列出缺點]

B) [選項 B 描述]  
   - 優點: [列出優點]
   - 缺點: [列出缺點]

**建議**: [AI 的推薦選項與理由]
```

### 錯誤處理標準格式 (Error Handling Protocol)
當操作失敗或發生非預期錯誤時，AI 應使用此格式回報：

```markdown
## ⚠️ 錯誤報告 (Error Report)

**執行動作**: [描述嘗試執行的命令或動作]
**錯誤訊息**: 
```
[貼上完整的錯誤訊息]
```
**初步分析**: [對錯誤原因的初步判斷]
**建議操作**: [建議下一步如何處理，或請求人類指示]
```

### 進度回報格式

**簡單任務回報**：
```markdown
## ✅ 完成 (Completed)
- [具體完成內容]
- Commit: [hash]
```

**複雜任務回報**：
```markdown
## 🔄 進度回報 (Progress Report)

### ✅ 已完成 (Completed)
- [具體完成的任務]
- [相關檔案異動]

### 🔧 技術細節 (Technical Details)
- [使用的技術/方法]
- [遇到的挑戰與解決方案]

### 📝 Git 狀態 (Git Status)  
- Commit Hash: [hash]
- Files Changed: [檔案列表]
- Next Steps: [下一步計劃]

### 🧪 測試確認 (Testing)
- [ ] 功能正常運作
- [ ] 響應式設計正確
- [ ] 文檔已同步更新
- [ ] 符合設計規範
```

## 📁 檔案操作規範 (File Operation Guidelines)

### 檔案修改協定
1. **讀取前確認**: 使用 `view` 確認檔案當前狀態
2. **精確修改**: 使用 `str_replace` 進行最小範圍修改
3. **驗證結果**: 修改後重新讀取確認結果正確

### Git Commit 標準格式
使用 Conventional Commits 規範，確保任何 AI 都能理解：

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**類型 (Types)**:
- `feat`: 新功能
- `fix`: 修復問題  
- `docs`: 文檔更新
- `style`: 樣式調整
- `refactor`: 重構程式碼
- `test`: 測試相關
- `chore`: 建置或輔助工具變動

**範例**:
```
feat(components): add hologram panel with scan animation

- Implement CSS keyframe animations
- Add responsive design breakpoints  
- Include accessibility attributes
- Update component documentation

Closes #123
```

## 🎨 Design System 協作

### Component 開發流程
1. **規格確認**: 確保 component 在 `DESIGN_SYSTEM_SPEC.md` 中有明確規格
2. **實作準備**: 檢查相關 dependencies 與 base styles
3. **程式實作**: 建立 SCSS、HTML template、JavaScript (如需要)
4. **測試驗證**: 確保 responsive 與 accessibility 合規
5. **文件更新**: 更新 component 使用範例與說明

### 設計決策記錄
所有設計決策都必須記錄在對應的規格文件中，包含：
- 決策背景與理由
- 考慮的替代方案
- 實作細節與限制
- 未來改進空間

## 🔧 技術實作規範

### Jekyll & Minimal Mistakes 客製化
1. **主題覆寫**: 只覆寫必要的檔案，保持主題升級能力
2. **SCSS 組織**: 遵循 `_sass/design-system/` 結構
3. **Component 命名**: 使用 BEM methodology
4. **Performance**: 確保 CSS/JS 最佳化

### 程式碼品質標準
- **CSS**: 使用 SCSS，遵循 design system variables
- **HTML**: Semantic markup，accessibility attributes 完整
- **JavaScript**: ES6+, 漸進式增強 (Progressive Enhancement)
- **Images**: 最佳化大小，提供 alt text

## 📊 品質檢查清單

### 每次實作完成後檢查
- [ ] 符合 Design System 規格
- [ ] Mobile responsive (320px - 1920px)
- [ ] Accessibility (WCAG 2.1 AA)
- [ ] Performance (避免不必要的重複程式碼)
- [ ] Browser compatibility (Modern browsers)
- [ ] Documentation updated (如有新 components)

### 定期檢查項目
- [ ] 所有 components 有完整規格文件
- [ ] External links 有效性
- [ ] Image optimization
- [ ] SEO meta data 完整性

## 🚫 限制與禁止事項

### AI Assistant 不得執行
- 修改 Git remote 設定
- 推送到 remote repository
- 刪除重要設定檔案 (如 `_config.yml`)
- 修改 protected 區域的設定

### 需要人類確認的操作
- 所有 Git commits
- 重要設定檔案修改
- 新增/刪除主要頁面
- Design System 規格變更

## 💡 最佳實務建議

### 提升協作效率
1. **批次操作**: 相關檔案修改儘量一次完成
2. **文件同步**: 實作與文件同時更新
3. **測試驅動**: 先定義預期結果，再實作
4. **漸進改善**: 採用小步迭代，避免大幅重構

### 溝通技巧
1. **具體明確**: 避免模糊的需求描述
2. **範例導向**: 提供具體的範例與參考
3. **選項思考**: 主動提供多種解決方案
4. **結果驗證**: 確保雙方對結果有共同理解

---

**注意**: 此協作指南是活文件，會根據實際協作經驗持續改善更新。
