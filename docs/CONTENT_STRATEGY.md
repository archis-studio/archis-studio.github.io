# 內容策略 - Content Strategy  
# Version 2.0.0 | Updated: 2025-10-26

> **核心指南**: 文章創作規範、寫作標準、內容品質管理
> **設計規範**: 請參考 DESIGN_SYSTEM_SPEC.md

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

## 🏷️ 標籤使用規範 (Tag Usage Guidelines)

> **分類系統**: 完整的分類定義請參考 `DESIGN_SYSTEM_SPEC.md` § 分類系統

### 標籤使用規範

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

> **設計規範**: 完整的視覺規範請參考 `DESIGN_SYSTEM_SPEC.md` 和 `ASSET_SPEC.md`

### 程式碼分享標準
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

## 📝 CHANGELOG

### v2.0.0 (2025-10-26)
- 移除與 DESIGN_SYSTEM_SPEC.md 重複的分類系統定義
- 移除與 ASSET_SPEC.md 重複的視覺規範
- 簡化為純內容創作指南
- 聚焦於寫作規範與品質標準

### v1.0.0 (2025-10-11)
- 初版內容策略建立

---

**維護者**: Archi Chen & AI Assistants  
**最後更新**: 2025-10-26