# 📝 如何修改 Author Bio 內容

## 🎯 修改位置

### **檔案路徑**
```
_config.yml
```

### **具體位置（第 22-28 行左右）**
```yaml
author:
  name: "Archi Chen"
  avatar: "/assets/images/placeholder-avatar.svg"
  bio: "Digital Craftsman | AI Explorer        ← 這裡修改！
        🍂 在程式與設計之間尋找美學平衡           ← 這裡修改！
        Building intelligent systems with elegance and purpose"  ← 這裡修改！
  location: "Taipei, Taiwan"
  email: "magic83w@gmail.com"
```

---

## ✍️ 修改步驟

### **Step 1: 開啟檔案**
```bash
# 使用你習慣的編輯器
nano _config.yml
# 或
vim _config.yml
# 或
code _config.yml  # VS Code
```

### **Step 2: 找到 author 區塊**
搜尋關鍵字 `author:` 或 `bio:`

### **Step 3: 修改 bio 內容**
```yaml
bio: "你的第一行文字（職稱、身份）
      你的第二行文字（理念、標語）
      你的第三行文字（使命、價值觀）"
```

### **Step 4: 儲存檔案**
```bash
# Ctrl+O (nano)
# :wq (vim)
# Ctrl+S (VS Code)
```

### **Step 5: 提交更改**
```bash
git add _config.yml
git commit -m "docs(profile): update author bio"
```

---

## 📐 格式規則

### **換行方式**
```yaml
# ✅ 正確：使用縮排 + 換行
bio: "第一行
      第二行
      第三行"

# ❌ 錯誤：沒有縮排
bio: "第一行
第二行
第三行"
```

### **特殊字元**
```yaml
# Emoji 可直接使用
bio: "🍂 這是 emoji"

# 引號需要跳脫
bio: "She said \"Hello\""  # 或使用單引號
bio: 'She said "Hello"'
```

### **Markdown 支援**
```yaml
# 可以使用 Markdown 語法
bio: "**粗體文字**
      *斜體文字*
      [連結](https://example.com)"
```

---

## 💡 內容建議

### **三行結構推薦**

#### **格式 A：職稱 + 理念 + 使命**
```yaml
bio: "Software Developer | Data Scientist
      🍂 用數據說故事，用程式創造價值
      Turning data into insights, code into impact"
```

#### **格式 B：身份 + 專長 + 風格**
```yaml
bio: "Full-Stack Developer
      💻 後端 × 前端 × AI 應用
      Crafting elegant solutions with modern tech"
```

#### **格式 C：品牌標語式**
```yaml
bio: "🎯 Digital Innovator
      在科技與人文之間尋找平衡點
      Technology meets humanity"
```

### **長度建議**
- 每行：20-40 字（中文）/ 40-60 字元（英文）
- 總共：3 行（最佳）
- 最多：4-5 行

---

## 🎨 風格參考

### **1. 專業技術型**
```yaml
bio: "Backend Engineer | Cloud Architect
      專注於可擴展系統設計與效能優化
      Building scalable systems that matter"
```

### **2. 創意個性型**
```yaml
bio: "Code Poet | Digital Dreamer
      🌟 用程式譜寫數位詩篇
      Weaving dreams into digital reality"
```

### **3. 教育分享型**
```yaml
bio: "Tech Educator | Open Source Contributor
      📚 分享知識，傳遞技術熱情
      Teaching, learning, and growing together"
```

### **4. 創業者型**
```yaml
bio: "Entrepreneur | Product Builder
      🚀 從 0 到 1 打造有意義的產品
      Building products people love"
```

### **5. 跨領域型**
```yaml
bio: "Designer × Developer × AI Explorer
      🎨 在設計、開發與 AI 之間穿梭
      Bridging design, code, and intelligence"
```

---

## 🔍 當前內容分析

### **你目前的 Bio**
```yaml
bio: "Digital Craftsman | AI Explorer
      🍂 在程式與設計之間尋找美學平衡
      Building intelligent systems with elegance and purpose"
```

### **結構拆解**
| 行 | 語言 | 內容 | 功能 |
|----|------|------|------|
| 1 | 英文 | Digital Craftsman \| AI Explorer | 專業身份定位 |
| 2 | 中文 | 🍂 在程式與設計之間尋找美學平衡 | 品牌理念 + Emoji |
| 3 | 英文 | Building intelligent systems... | 使命宣言 |

### **特點**
- ✅ 雙語混搭（國際化 + 在地化）
- ✅ Emoji 點綴（🍂 秋日美學）
- ✅ 三行清晰結構
- ✅ 專業 + 個性平衡

---

## 🚀 快速修改範例

如果你想要更簡潔：
```yaml
bio: "Software Developer | AI Enthusiast
      🍂 用程式創造美好體驗"
```

如果你想要更技術：
```yaml
bio: "Full-Stack Developer | DevOps Engineer
      💻 Python × React × AWS × Docker
      Building scalable web applications"
```

如果你想要更個性：
```yaml
bio: "Digital Nomad | Code Artist
      🌍 環遊世界，用程式記錄生活
      Living the laptop lifestyle"
```

---

## ⚠️ 注意事項

1. **修改後需重新啟動 Jekyll**
   ```bash
   # 如果正在運行 jekyll serve
   Ctrl+C
   bundle exec jekyll serve
   ```

2. **YAML 語法檢查**
   - 確保縮排正確（使用空格，不用 Tab）
   - 引號配對正確
   - 冒號後面有空格

3. **避免過長**
   - Bio 太長會影響版面
   - 建議控制在 3-4 行

4. **預覽效果**
   - 修改後在 Sidebar 查看顯示效果
   - 確認文字沒有溢出

---

## 📋 檢查清單

修改完成後，確認：
- [ ] YAML 語法正確
- [ ] 引號配對正確
- [ ] 縮排一致（2 或 4 個空格）
- [ ] 換行正確顯示
- [ ] Emoji 正常顯示
- [ ] 文字長度適中
- [ ] Git commit 提交

---

**修改位置總結**：
- 📂 檔案：`_config.yml`
- 📍 位置：`author:` → `bio:` 欄位
- 🔧 格式：YAML 字串（3 行建議）
- ⚡ 生效：重啟 Jekyll 服務

需要我幫你設計特定風格的 Bio 內容嗎？🎨✨
