#!/bin/bash

# 建立新的技術文章 - 繁體中文版
# 使用方法: ./scripts/new-post.sh "文章標題" "category1,category2" "tag1,tag2,tag3"

if [ $# -lt 1 ]; then
    echo "使用方法: $0 \"文章標題\" [\"category1,category2\"] [\"tag1,tag2,tag3\"]"
    echo ""
    echo "可用的分類:"
    echo "  technical, backend, data-engineer, data-science"
    echo "  quant-trading, finance, energy-management"  
    echo "  digital-advertising, personal-growth"
    echo ""
    echo "範例: ./scripts/new-post.sh \"Python 效能優化技巧\" \"technical,backend\" \"Python,效能優化,最佳實務\""
    exit 1
fi

TITLE="$1"
CATEGORIES="${2:-technical,personal-growth}"
TAGS="${3:-技術分享,學習筆記,程式設計}"

# 產生英文檔名 (簡化版，實際可能需要更複雜的轉換)
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g')
if [ ${#FILENAME} -gt 50 ]; then
    FILENAME="${FILENAME:0:50}"
fi

DATE=$(date +%Y-%m-%d)
DATETIME=$(date +"%Y-%m-%d %H:%M:%S +0800")
FULLFILENAME="_posts/${DATE}-${FILENAME}.md"

# 轉換分類和標籤為 YAML 格式
CATEGORIES_YAML=$(echo "$CATEGORIES" | sed 's/,/, /g')
TAGS_YAML=$(echo "$TAGS" | sed 's/,/, /g')

# 根據主要分類選擇顏色
PRIMARY_CATEGORY=$(echo "$CATEGORIES" | cut -d',' -f1)
case $PRIMARY_CATEGORY in
    "technical")     COLOR="#2c3e50" ;;
    "backend")       COLOR="#34495e" ;;
    "data-engineer") COLOR="#16a085" ;;
    "data-science")  COLOR="#3498db" ;;
    "quant-trading") COLOR="#e74c3c" ;;
    "finance")       COLOR="#f39c12" ;;
    "energy-management") COLOR="#27ae60" ;;
    "digital-advertising") COLOR="#9b59b6" ;;
    "personal-growth") COLOR="#1abc9c" ;;
    *)               COLOR="#2c3e50" ;;
esac

cat > "$FULLFILENAME" << EOF
---
title: "$TITLE"
date: $DATETIME
categories: [$CATEGORIES_YAML]
tags: [$TAGS_YAML]
header:
  overlay_color: "$COLOR"
  overlay_filter: "0.5"
  overlay_image: /assets/images/${FILENAME}-header.jpg
  teaser: /assets/images/${FILENAME}-teaser.jpg
excerpt: "在這裡寫一段吸引人的摘要，描述文章的主要內容與價值 🚀"
toc: true
toc_sticky: true
---

寫一個吸引人的開頭，可以是個人經驗、問題描述或是有趣的觀察。記住用繁體中文寫作，技術術語保持英文 😊

<!--more-->

## 主要內容標題 📚

### 子標題

在這裡詳細說明概念、提供程式碼範例，並加入個人心得。

\`\`\`python
# 程式碼範例
def example_function():
    """清楚的註解說明"""
    return "實用的範例程式碼"

result = example_function()
print(result)
\`\`\`

### 實戰技巧

分享實際應用的技巧與經驗。

## 常見問題與解決方案 💡

### 問題 1
**症狀**: 描述問題現象  
**解決**: 提供具體解法

## 總結 🎯

### 重點整理
1. **要點一**: 簡潔說明
2. **要點二**: 簡潔說明
3. **要點三**: 簡潔說明

### 下一步
建議讀者的後續行動...

---

## 延伸閱讀 📖

- 📝 [相關文章](連結)
- 📚 [推薦資源](連結)

<div class="notice--info">
  <h4>💬 有問題或想法嗎？</h4>
  <p>歡迎在下方留言討論，或透過 <a href="mailto:magic83w@gmail.com">Email</a> 聯繫我！</p>
</div>
EOF

echo "✅ 新文章建立完成: $FULLFILENAME"
echo "📷 別忘了準備這些圖片:"
echo "   - Header 圖片: /assets/images/${FILENAME}-header.jpg (1200x675px)"
echo "   - Teaser 圖片: /assets/images/${FILENAME}-teaser.jpg (400x200px)"
echo ""
echo "🎨 使用顏色: $COLOR (根據分類 $PRIMARY_CATEGORY)"
echo "📝 現在可以開始編輯內容囉！"