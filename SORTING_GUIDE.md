# 文章排序功能指南
# Post Sorting Guide

## 📊 目前支援的排序方式

### 1. 按更新時間排序 (預設)
- **路徑**: `/posts/`
- **排序依據**: `last_modified_at` 欄位
- **排序方向**: 最新更新在前 (reverse)
- **適用場景**: 日常瀏覽，確保看到最新內容

### 2. 按分類+日期排序 
- **路徑**: `/posts/by-category/`
- **排序依據**: 先按分類分組，組內按發布日期排序
- **適用場景**: 主題式學習，系統性閱讀

## 🔧 技術實作細節

### Front Matter 設定
```yaml
# 每篇文章需要包含的欄位
date: YYYY-MM-DD HH:MM:SS +0800          # 發布時間
last_modified_at: YYYY-MM-DD HH:MM:SS +0800  # 最後更新時間
categories: [category-name]               # 分類
```

### 頁面設定
```yaml
# posts.md - 按更新時間排序
layout: posts
sort: last_modified_at
sort_direction: reverse

# posts-by-category.md - 按分類排序  
layout: posts
sort: category
```

### 自定義 Layout 邏輯
```liquid
{%- assign sort_order = page.sort | default: 'last_modified_at' -%}

{%- if sort_order == 'category' -%}
  {%- assign posts_by_category = site.posts | group_by: 'categories' -%}
  // 分類排序邏輯
{%- else -%}
  {%- assign sorted_posts = site.posts | sort: sort_order | reverse -%}
  // 時間排序邏輯
{%- endif -%}
```

## 📋 維護指南

### 更新文章時間
1. **新文章**: 設定 `date` 和 `last_modified_at` 為發布時間
2. **修改文章**: 只更新 `last_modified_at` 為當前時間
3. **小幅修正**: 可選擇性更新 `last_modified_at`

### 範例
```yaml
# 新文章
date: 2024-12-20 10:00:00 +0800
last_modified_at: 2024-12-20 10:00:00 +0800

# 修改後
date: 2024-12-20 10:00:00 +0800  # 保持不變
last_modified_at: 2024-12-25 15:30:00 +0800  # 更新為修改時間
```

## 🎯 排序效果示例

### 當前文章排序 (按更新時間)
```
📅 按 last_modified_at 排序（實際時間）:
1. Pandas 效能調校 (2025-09-28 18:04:54) ← 最近更新
2. Backend API (2025-09-28 18:04:54)      ← 同時更新  
3. 歡迎文章 (2025-09-28 18:04:54)        ← 同時更新

💡 由於三篇文章在同一次 commit 中修改，具有相同的更新時間
當時間相同時，Jekyll 會按照檔名或其他因素排序
```

### 分類排序效果
```
📂 按分類+日期排序：

💻 technical:
  - Backend API (2025-09-27)
  - Pandas 效能調校 (2025-09-27)

🌟 personal-growth:  
  - 歡迎文章 (2025-09-27)
```

## 🕐 時間戳記工具

### 快速取得當前時間
```bash
# 使用內建的時間戳記工具
./scripts/get-timestamp.sh

# 手動取得台北時間
date '+%Y-%m-%d %H:%M:%S +0800'

# 查看檔案的 Git 修改歷史
./scripts/get-timestamp.sh _posts/檔名.md
```

## 🔄 未來擴展

### 可能的排序選項
- 按閱讀時間排序 (`reading_time`)
- 按字數排序 (`word_count`) 
- 按標籤熱度排序 (`tag_popularity`)
- 自訂權重排序 (`weight` 欄位)

### 實作範例
```yaml
# 在頁面 front matter 中指定
sort: reading_time
sort_direction: asc  # 短文章優先

# 或組合排序
sort: [category, last_modified_at]
```

## 💡 使用建議

### 讀者角度
- **追蹤更新**: 使用預設的時間排序
- **系統學習**: 使用分類排序深入某個領域
- **快速瀏覽**: 首頁顯示最新 6 篇即可

### 作者角度  
- **新文章**: 正常發布即可出現在首頁
- **重要更新**: 修改 `last_modified_at` 讓文章重新置頂
- **內容維護**: 定期檢視並更新舊文章

---

這個排序系統平衡了**內容新鮮度**和**學習系統性**，讓讀者能夠選擇最適合的瀏覽方式！