# 文件索引 - Documentation Index
# Version 3.1.0 | Updated: 2025-10-28

## 📚 文件追蹤系統

**🤖 For AI Agents**: 使用此文件快速定位所需規格文件

> **本文件用途**: 提供文件地圖、版本追蹤、閱讀順序指引

### 🗂️ 核心規格文件 (docs/)

| 文件 | 版本 | 更新日期 | 狀態 | 用途 |
|------|------|----------|------|------|
| `PROJECT_CHARTER.md` | 3.0.0 | 2025-10-28 | ✅ Complete | 專案目標與原則 |
| `DESIGN_SYSTEM_SPEC.md` | 3.0.0 | 2025-10-28 | ✅ Complete | 完整設計系統規格 (色彩、字體、間距) |
| `LAYOUT_SPEC.md` | 3.0.0 | 2025-10-28 | ✅ Complete | 版面配置規格 |
| `NAVIGATION_SPEC.md` | 3.0.0 | 2025-10-28 | ✅ Complete | 導航設計規格 |
| `ASSET_SPEC.md` | 3.0.0 | 2025-10-28 | ✅ Complete | 資源檔案規格 |
| `IMPLEMENTATION_CHECKLIST.md` | 3.0.0 | 2025-10-28 | ✅ Complete | 10階段實作指南 |
| `AI_COLLABORATION_GUIDE.md` | 3.0.0 | 2025-10-28 | ✅ Complete | AI 協作流程 |
| `CONTENT_STRATEGY.md` | 3.0.0 | 2025-10-28 | ✅ Complete | 內容創作規範 |
| `DOC_INDEX.md` | 3.1.0 | 2025-10-28 | ✅ Complete | 文件索引（本文件）|

### 📝 操作指南文件 (Root)

| 文件 | 版本 | 受眾 | 狀態 | 用途 |
|------|------|------|------|------|
| `README.md` | 3.0.0 | 👥 訪客 | ✅ Complete | 專案介紹與快速開始 |
| `agents.MD` | 3.0.0 | 🤖 AI | ✅ Complete | AI Agent 入口與指引 |
| `DEVELOPMENT.md` | 3.0.0 | 👥/🤖 | ✅ Complete | 開發環境與工作流程 |
| `HOW-TO-EDIT-BIO.md` | 3.0.0 | 🤖 AI | ✅ Complete | Author Bio 編輯指南 |
| `PROFILE-IMAGE-TODO.md` | 3.0.0 | 🤖 AI | ✅ Complete | Profile 頭像替換指南 |
| `assets/images/README.md` | 3.0.0 | 🤖 AI | ✅ Complete | 圖片資源規格 |

### 📖 AI Agent 閱讀順序

**🚀 第一次接觸專案** (必讀):
1. `agents.MD` ← 你的入口點
2. `DOC_INDEX.md` ← 文件地圖（本文件）
3. `PROJECT_CHARTER.md` ← 專案目標與原則
4. `AI_COLLABORATION_GUIDE.md` ← 協作流程與規則
5. `DESIGN_SYSTEM_SPEC.md` ← 設計系統完整規格

**🛠️ 開始任務前查閱**:
- 設計相關 → `DESIGN_SYSTEM_SPEC.md`, `LAYOUT_SPEC.md`, `NAVIGATION_SPEC.md`
- 內容創作 → `CONTENT_STRATEGY.md`
- 資源處理 → `ASSET_SPEC.md`
- 實作進度 → `IMPLEMENTATION_CHECKLIST.md`

**💡 特定任務查閱**:
- 編輯 Bio → `HOW-TO-EDIT-BIO.md`
- 更換頭像 → `PROFILE-IMAGE-TODO.md`
- 圖片規格 → `assets/images/README.md`

### 🔄 版本更新規則

**版本格式**: `主版本.次版本.修訂版本`
- **主版本** (+1.0.0): 架構重大變更
- **次版本** (+0.1.0): 新增章節或規格
- **修訂版本** (+0.0.1): 內容修正或補充

**🤖 AI Agent 更新文件步驟**:
1. 修改文件內容
2. 更新文件標頭版本號與日期
3. 更新本文件 (DOC_INDEX.md) 對應記錄
4. 在文件底部新增 CHANGELOG 條目
5. Commit 時註明變更原因

### 🏷️ 文件狀態標籤

- ✅ **Complete**: 規格完整，可直接參考使用
- 🚧 **In Progress**: 持續更新中
- 📝 **Draft**: 初稿階段
- ⏳ **Planned**: 已規劃但未建立

### 🔍 AI Agent 快速查找指令

```bash
# 搜尋特定設計規格
grep -r "color\|font\|spacing" docs/DESIGN_SYSTEM_SPEC.md

# 查找實作狀態
grep "Phase" docs/IMPLEMENTATION_CHECKLIST.md

# 檢查所有文件版本
head -n 2 docs/*.md
```

---

## 📝 CHANGELOG

### v3.1.0 (2025-10-28)
- **文件受眾明確化**: 在操作指南表格中標示受眾（訪客/AI）
- **簡化 DOC_INDEX**: 移除實作進度詳情（已保留於 IMPLEMENTATION_CHECKLIST）
- **優化閱讀順序**: 針對 AI Agent 提供更清晰的查閱指引
- **精簡 CHANGELOG**: 僅記錄文件系統變更，移除功能實作記錄
- **統一版本號**: 所有核心文件更新至 v3.0.0 (2025-10-28)

### v3.0.0 (2025-10-26)
- 文件系統優化：移除 7 個重複/過時文件，保留 9 個核心文件（簡化 44%）
- 文件閱讀順序更新：以 agents.MD 為起點

### v2.0.0 (2025-10-26)
- 所有核心規格文件完成並同步實作狀態
- Phase 1-9 完成標記與詳細記錄

### v1.0.0 (2025-10-11)
- 建立文件追蹤系統
- 定義版本更新規則

---

**🤖 Note for AI Agents**: 詳細的實作進度、技術細節、部署資訊請查閱：
- 實作進度 → `IMPLEMENTATION_CHECKLIST.md`
- 設計規格 → `DESIGN_SYSTEM_SPEC.md`
- 開發流程 → `DEVELOPMENT.md`

---

**Maintained by**: Archi Chen & AI Assistants  
**Last Updated**: 2025-10-28
