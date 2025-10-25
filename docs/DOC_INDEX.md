# 文件索引 - Documentation Index
# Version 1.4.0 | Updated: 2025-10-25

## 📚 文件追蹤系統

**AI & 人類協作者**: 使用此文件追蹤所有規格文件的狀態與版本

### 🗂️ 核心規格文件 (docs/)

| 文件 | 版本 | 更新日期 | 狀態 | 用途 |
|------|------|----------|------|------|
| `PROJECT_CHARTER.md` | 1.0.0 | 2025-10-11 | ✅ Complete | 專案目標與原則 |
| `DESIGN_SYSTEM_SPEC.md` | 1.2.0 | 2025-10-16 | 🚧 Needs Update | 完整設計系統規格 (需補充 8 色配色) |
| `LAYOUT_SPEC.md` | 1.0.0 | 2025-10-16 | 🚧 Needs Update | 版面配置規格 (需補充簡化版首頁) |
| `NAVIGATION_SPEC.md` | 1.0.0 | 2025-10-16 | 🚧 Needs Update | 導航設計規格 (需補充 Sidebar 結構) |
| `ASSET_SPEC.md` | 1.0.0 | 2025-10-16 | 🚧 Needs Update | 資源檔案規格 (需補充 Avatar SVG) |
| `IMPLEMENTATION_CHECKLIST.md` | 1.0.0 | 2025-10-16 | 🚧 Needs Update | 10階段實作指南 (需更新實際進度) |
| `AI_COLLABORATION_GUIDE.md` | 1.6.0 | 2025-10-16 | ✅ Complete | AI 協作流程 |
| `MINIMAL_MISTAKES_CUSTOMIZATION.md` | 1.1.0 | 2025-10-16 | ✅ Complete | MM 主題客製化指南 |
| `CONTENT_STRATEGY.md` | 1.0.0 | 2025-10-11 | ✅ Complete | 內容創作規範 |
| `AUTUMN_NOIR_FUTURE_THEME.md` | 2.1.0 | 2025-10-16 | ✅ Complete | 主題概念與視覺指南 |

### 📝 操作指南文件 (Root)

| 文件 | 版本 | 建立日期 | 狀態 | 用途 |
|------|------|----------|------|------|
| `HOW-TO-EDIT-BIO.md` | 1.0.0 | 2025-10-25 | ✅ Complete | Author Bio 編輯完整指南 |
| `PROFILE-IMAGE-TODO.md` | 1.0.0 | 2025-10-25 | ✅ Complete | Profile 頭像替換清單與指南 |
| `DOCUMENTATION-AUDIT-2025-10-25.md` | 1.0.0 | 2025-10-25 | ✅ Complete | 文件與實作一致性審計報告 |
| `assets/images/README.md` | 1.0.0 | 2025-10-25 | ✅ Complete | 圖片資源規格與要求 |

### 📖 文件閱讀順序

**第一次接觸專案**:
1. `PROJECT_CHARTER.md` - 了解專案目標
2. `AI_COLLABORATION_GUIDE.md` - 學習協作方式
3. `DESIGN_SYSTEM_SPEC.md` - 掌握設計規範

**開始實作前**:
4. `LAYOUT_SPEC.md` - 了解版面配置
5. `NAVIGATION_SPEC.md` - 了解導航設計
6. `ASSET_SPEC.md` - 了解資源需求

**技術實作**:
7. `IMPLEMENTATION_CHECKLIST.md` - 按階段實作
8. `MINIMAL_MISTAKES_CUSTOMIZATION.md` - MM 客製化
9. `CONTENT_STRATEGY.md` - 內容創作

### 🔄 版本更新規則

**版本格式**: `主版本.次版本.修訂版本` (例: 1.2.3)
- **主版本** (+1.0.0): 重大架構改變
- **次版本** (+0.1.0): 新增功能或規格
- **修訂版本** (+0.0.1): 錯誤修正或小幅調整

**更新步驟**:
1. 修改文件內容
2. 更新文件標頭的版本號與日期
3. 更新此 `DOC_INDEX.md` 的對應記錄
4. 在文件底部記錄 CHANGELOG

### 🏷️ 狀態標籤說明

- ✅ **Complete**: 完整且可直接使用
- 🚧 **In Progress**: 持續完善中  
- 📝 **Draft**: 初稿，待完善
- ⏳ **Planned**: 已規劃，尚未開始
- 🔒 **Frozen**: 已鎖定，不再修改

### 🔍 文件搜尋技巧

**快速定位內容**:
```bash
# 搜尋所有規格文件中的特定概念
grep -r "Design System" docs/

# 找出所有需要 AI 注意的標記
grep -r "🤖\|AI:" docs/

# 檢查文件版本狀態
head -n 2 docs/*.md
```

### 📝 修改文件的標準流程

1. **檢查當前版本**: 確認文件標頭的版本號
2. **進行修改**: 保持簡潔清楚的表達
3. **更新版本資訊**: 修改標頭版本號與日期  
4. **記錄變更**: 在文件底部新增 CHANGELOG 條目
5. **更新索引**: 修改此 `DOC_INDEX.md` 對應記錄

### 💡 AI 助手使用指南

**開始任務前**:
1. 先閱讀 `DOC_INDEX.md` 了解文件狀態
2. 確認相關文件的最新版本
3. 遵循 `AI_COLLABORATION_GUIDE.md` 的流程

**文件修改時**:
- 保持 "Keep It Simple" 原則
- 更新版本號與時間戳
- 記錄變更原因與內容

---

## 📊 專案進度追蹤

### 當前階段: 🚀 主題實作完成
- [x] 基礎文件架構建立
- [x] AI 協作流程定義  
- [x] Design System 規格完善
- [x] Autumn Noir Future Theme 實作完成
- [x] 示範頁面與新主題整合
- [ ] 主頁面完全整合新主題
- [ ] 技術實作指南完成
- [ ] 內容策略詳細規劃

### 下個階段: 🏗️ 基礎建設
- [ ] Jekyll 基礎架構建立
- [ ] Design System SCSS 實作
- [ ] 示範頁面與內容
- [ ] 測試與最佳化

---

---

## 📝 CHANGELOG

### v1.3.0 (2025-10-16)
- **文件優化與合併**:
  - 刪除 `SVG_PLACEHOLDERS_GUIDE.md`，內容合併至 `ASSET_SPEC.md`
  - 簡化 `AUTUMN_NOIR_FUTURE_THEME.md` 為主題概念文件
  - 移除技術細節重複，專注於設計理念
  - 文件系統更加精簡且無冗餘

### v1.2.0 (2025-10-16)
- 新增 `LAYOUT_SPEC.md` - 完整版面配置規格
- 新增 `NAVIGATION_SPEC.md` - 詳細導航設計規格  
- 新增 `ASSET_SPEC.md` - 資源檔案管理規格
- 新增 `IMPLEMENTATION_CHECKLIST.md` - 10階段實作指南
- 更新文件閱讀順序，包含新規格文件
- 文件系統現已完整，可支援完全重構

### v1.1.0 (2025-10-16)
- 移除重複的 AUTUMN_NOIR_THEME.md 文件
- 更新 DESIGN_SYSTEM_SPEC.md 到 v1.2.0 (四重風格融合)
- 更新 AI_COLLABORATION_GUIDE.md 到 v1.6.0 (新增簡化流程)
- 更新 MINIMAL_MISTAKES_CUSTOMIZATION.md 到 v1.1.0 (同步 Dark Mode)
- 統一所有文件版本號格式
- 修正 CONTENT_STRATEGY.md 狀態為 Complete

### v1.0.0 (2025-10-11)
- 建立文件追蹤系統
- 定義文件版本更新規則

**維護者**: Archi Chen & AI Assistants  
**最後檢查**: 2025-10-25

---

## 📋 v1.4.0 更新說明 (2025-10-25)

### 新增內容
- 新增操作指南文件表格，追蹤根目錄的 HOW-TO 文件
- 新增 `DOCUMENTATION-AUDIT-2025-10-25.md` - 文件與實作一致性審計報告
- 新增 `HOW-TO-EDIT-BIO.md` - Author Bio 編輯完整指南
- 新增 `PROFILE-IMAGE-TODO.md` - Profile 頭像替換清單與指南
- 新增 `assets/images/README.md` - 圖片資源規格與要求

### 狀態更新
- 標記需要更新的規格文件狀態為 🚧 Needs Update:
  * DESIGN_SYSTEM_SPEC.md - 需補充 8 色配色系統
  * LAYOUT_SPEC.md - 需補充簡化版首頁佈局
  * NAVIGATION_SPEC.md - 需補充 Sidebar Navigation 結構
  * ASSET_SPEC.md - 需補充 Placeholder Avatar SVG 規格
  * IMPLEMENTATION_CHECKLIST.md - 需更新實際實作進度

### 實作進度反映
- Phase 1-6 已大致完成（Hero, Homepage, Sidebar, Author Profile）
- Phase 7-10 待實作（Content Pages, Post Template, 互動功能, 部署）

---