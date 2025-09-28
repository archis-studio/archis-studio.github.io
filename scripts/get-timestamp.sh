#!/bin/bash
# 時間戳記輔助工具
# Timestamp Helper Tool

echo "=== Jekyll 時間戳記輔助工具 ==="
echo ""

# 當前時間
CURRENT_TIME=$(date '+%Y-%m-%d %H:%M:%S +0800')
echo "📅 當前時間（台北）: $CURRENT_TIME"

# ISO 格式
ISO_TIME=$(date -u '+%Y-%m-%dT%H:%M:%SZ')
echo "🌐 UTC 時間: $ISO_TIME"

echo ""
echo "📝 Jekyll Front Matter 格式:"
echo "date: $CURRENT_TIME"
echo "last_modified_at: $CURRENT_TIME"

echo ""
echo "🔄 更新現有文章時，只需修改 last_modified_at:"
echo "last_modified_at: $CURRENT_TIME"

echo ""
echo "📋 複製以下內容到新文章："
echo "---"
echo "title: \"文章標題\""
echo "date: $CURRENT_TIME"
echo "last_modified_at: $CURRENT_TIME" 
echo "categories: [technical]"
echo "tags: [標籤1, 標籤2]"
echo "---"

# 如果有參數，顯示檔案的 Git 修改歷史
if [ $# -gt 0 ]; then
    echo ""
    echo "📄 檔案 Git 歷史: $1"
    if [ -f "$1" ]; then
        git log --format="  %ai - %s" -- "$1" | head -5
    else
        echo "  檔案不存在: $1"
    fi
fi