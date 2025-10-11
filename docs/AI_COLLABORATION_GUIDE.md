# AI 協作指南 - AI Collaboration Guide  
# Version 1.0.0 | Updated: 2025-10-11

## 🔄 標準工作流程

```
1. 人類: 提供目標
2. AI: 分析並提出方案選項 (A/B/C)  
3. 人類: 選擇方案
4. AI: 執行實作
5. 人類: 驗證結果
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

### 決策提供格式
AI 在需要人類決策時，必須使用以下格式：

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

C) [選項 C 描述]
   - 優點: [列出優點] 
   - 缺點: [列出缺點]

**建議**: [AI 的推薦選項與理由]
```

## 📁 檔案操作規範 (File Operation Guidelines)

### 檔案修改協定
1. **讀取前確認**: 使用 `view` 確認檔案當前狀態
2. **精確修改**: 使用 `str_replace` 進行最小範圍修改
3. **驗證結果**: 修改後重新讀取確認結果正確

### Git 操作限制
- ✅ **允許**: `git status`, `git diff`, `git add`
- ❌ **禁止**: `git commit`, `git push` (需人類確認)
- 📝 **規範**: 所有 commit message 需人類最終確認

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