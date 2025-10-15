# AI 協作指南 - AI Collaboration Guide
# Version 1.4.0 | Updated: 2025-10-15

## 🔄 標準工作流程 (Enhanced)

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
- ✅ 可執行: `git status`, `git diff`, `git add`
- ❌ 禁止: `git commit`, `git push` (需人類確認)

## 🎯 品質檢查

每次完成任務後檢查:
- [ ] 符合 Design System 規格
- [ ] Mobile responsive
- [ ] 文件版本已更新
- [ ] 功能測試通過

---

## 📝 CHANGELOG

### v1.4.0 (2025-10-15)
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
每個 AI assistant 在 commit message 中必須標註自己的身份：

**格式**: `<type>(<scope>): <description> [by <ai-agent>]`

**AI Agent 命名規則**:
- **Amazon Q**: `[by Q]`
- **Claude**: `[by Claude]` 
- **ChatGPT**: `[by GPT]`
- **Copilot**: `[by Copilot]`
- **其他**: `[by <AI名稱>]`

**範例**:
```bash
# Amazon Q 的 commit
git commit -m "fix(css): resolve infinite scroll issue [by Q]

- Add overflow-x: hidden to html and body
- Set explicit width/height for background layer"

# Claude 的 commit  
git commit -m "feat(components): add hologram panel component [by Claude]

- Implement CSS keyframe animations
- Add responsive design breakpoints"

# 人類的 commit (不需要標註)
git commit -m "docs: update project requirements

- Add new feature specifications
- Update timeline and milestones"
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

### 進度回報標準格式

每完成一個功能模組後的標準回報：

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
