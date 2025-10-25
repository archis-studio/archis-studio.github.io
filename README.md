# Archis Studio Blog
# Version 2.0.0 | Updated: 2025-10-26

> **時尚與科技的完美融合** - 用 Editorial 風格分享 AI 工具、程式開發與像素藝術創作

🎨 **Design Theme**: Autumn Noir Future (Fashion + Gaming + AI + Space)  
⚡ **Tech Stack**: Jekyll 4.4.1 + Ruby 3.3.10 + Minimal Mistakes Theme  
🌏 **Language**: 繁體中文 (Traditional Chinese)  
🎮 **Style**: Terminal + RPG Pixel + Cyberpunk + Fashion Editorial

---

## 🚀 Quick Start

### For Developers
```bash
# 1. Install dependencies
bundle install

# 2. Start local server
bundle exec jekyll serve --livereload

# 3. Visit http://localhost:4000
```

📖 **完整開發指南**: 查看 [`DEVELOPMENT.md`](DEVELOPMENT.md)

### For AI Agents
```bash
# Read AI collaboration guidelines first
cat agents.MD
```

🤖 **AI 協作指南**: 查看 [`agents.MD`](agents.MD)

---

## 🎨 Design Features (v2.0)

### ✨ Implemented Features
- **Hero Section**: 8 Skill Badges with unique color schemes & animations
- **About Page**: Terminal + RPG Pixel style with cyberpunk effects
- **Journey Timeline**: Active/Archive career & education history
- **Posts Page**: Fashion magazine layout with 3-column card grid
- **Article View**: Clean reading experience without sidebar, TOC only
- **Responsive Design**: Mobile-first, optimized for all devices

### 🎯 Key Pages
- `/` - Home with Featured & Categories preview
- `/about` - About with terminal-style journey timeline
- `/posts` - All posts in fashion magazine grid layout
- `/categories` - Browse by 8 main categories

## 📖 Documentation Map

### 🎯 Start Here

| 文件 | 用途 | 對象 |
|------|------|------|
| `README.md` | 專案概覽與快速導航 | 所有人 |
| `DEVELOPMENT.md` | 開發環境設定與指令 | 開發者 |
| `agents.MD` | AI 協作規範與指引 | AI Agents |
| `HOW-TO-EDIT-BIO.md` | Author Bio 編輯指南 | 內容編輯 |
| `PROFILE-IMAGE-TODO.md` | 頭像圖片更新清單 | 維護者 |

### 📋 Detailed Specifications

完整的設計與實作規格請見 `docs/` 目錄：

```
docs/
├── PROJECT.md          # 專案管理（目標 + 實作階段）
├── DESIGN_SYSTEM.md    # 設計系統（色彩 + 字型 + 間距）
├── LAYOUT.md           # 版面設計（Layout + Navigation）
├── WORKFLOW.md         # 工作流程（內容策略 + AI 協作細節）
└── ASSETS.md           # 資源管理（圖片 + Icon + 字型）
```

---

## 🎯 Project Overview

### What is Archis Studio?
AI Coding 教育部落格，專注於：
- 🤖 AI 工具實戰教學
- 💻 Backend 開發經驗分享
- 📊 Data Science 應用案例
- 🎮 Pixel Art 創作展示

### Core Principles
- **📋 Specification-Driven**: 所有功能都有明確規格文件
- **🎨 Design System First**: 系統化、可擴展的設計
- **🤖 AI-Collaborative**: 為人機協作優化的開發流程
- **📱 Mobile-First**: 響應式設計，完美適配各種裝置

### Design Philosophy
融合四種風格的獨特美學：
- 🎭 **Fashion Editorial** - 優雅的時尚編輯排版
- 🍂 **Autumn Noir** - 溫暖的秋日黑色基調
- 🎮 **Gaming Pixel Art** - 復古的像素藝術元素
- 🚀 **AI Future Space** - 科幻的未來太空氛圍

---

## 📁 Project Structure

```
.
├── docs/                   # 📋 完整規格文件系統
├── _config.yml             # Jekyll 主要設定
├── _data/                  # 資料檔案 (導航、作者等)
├── _includes/              # 可重用模板元件
├── _layouts/               # 頁面版面配置
├── _sass/                  # SCSS 樣式系統
│   └── design-system/      # 設計系統變數與元件
├── _posts/                 # 部落格文章
├── _pages/                 # 靜態頁面
├── assets/                 # 靜態資源
│   ├── css/                # 編譯後的 CSS
│   ├── images/             # 圖片資源
│   └── js/                 # JavaScript
├── README.md               # 專案概覽 (本文件)
├── DEVELOPMENT.md          # 開發指南
├── agents.MD               # AI 協作指南
└── Gemfile                 # Ruby 依賴管理
```

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Language** | Ruby | 3.3.10 |
| **SSG** | Jekyll | 4.4.1 |
| **Theme** | Minimal Mistakes | 4.27.3 |
| **CSS** | SCSS | - |
| **Deployment** | GitHub Pages / Actions | - |
| **Version Control** | Git + GitHub | - |

---

## 🤝 Contributing

### For Humans
1. 閱讀 [`docs/PROJECT_CHARTER.md`](docs/PROJECT_CHARTER.md) 了解專案目標
2. 查看 [`docs/AI_COLLABORATION_GUIDE.md`](docs/AI_COLLABORATION_GUIDE.md) 學習協作流程
3. 遵循規格驅動開發原則
4. 提交前確保通過品質檢查

### For AI Agents
1. 先閱讀 [`agents.MD`](agents.MD)
2. 遵循 Specification-Driven Development
3. 使用標準化的 commit message 格式
4. 標註 `Authored-by: <AI-Agent-Name>`

---

## 📝 Documentation Standards

### Version Control
每個文件都標註版本號與更新時間：
```markdown
# File Title
# Version X.Y.Z | Updated: YYYY-MM-DD
```

### Update Rules
- **Major (+1.0.0)**: 重大架構變更
- **Minor (+0.1.0)**: 新增功能或規格
- **Patch (+0.0.1)**: 錯誤修正或小幅調整

### Change Tracking
所有變更必須記錄在文件底部的 `CHANGELOG` 區塊。

---

## 📊 Project Status

### Current Phase
- ✅ Phase 0-6: Foundation Complete
  - Jekyll 4.4.1 + Ruby 3.3.10 環境
  - Design System (Autumn Noir Future)
  - Hero Section & Homepage
  - Navigation & Sidebar
  - Author Profile
- ✅ Phase 7: Content Pages (About, Posts Archive)
- 🚧 Phase 8: Post Template & Typography (In Progress)
- ⏳ Phase 9-10: Interactive Features & Deployment

### Completed Features
- ✨ Gaming Terminal Style About Page
- 🎨 Fashion Magazine Posts Archive
- 📝 Post Single Page with TOC Sidebar
- 🎭 8 Skill Categories with Custom Colors
- 🖼️ Author Profile with Placeholder System

### Roadmap
查看 [`docs/IMPLEMENTATION_CHECKLIST.md`](docs/IMPLEMENTATION_CHECKLIST.md) 了解完整的 10 階段實作計畫。

---

## 📞 Contact & Links

- **Author**: Archi Chen
- **Email**: magic83w@gmail.com
- **GitHub**: [@magicxcr7](https://github.com/magicxcr7)
- **Repository**: [magicxcr7.github.io](https://github.com/magicxcr7/magicxcr7.github.io)

---

**Version**: 2.0.0 | **Updated**: 2025-10-26  
**Maintained by**: Archi Chen & AI Assistants

---

## 📝 CHANGELOG

### v2.0.0 (2025-10-26)
- ✅ About 頁面完成 (Gaming Terminal + RPG Style + Journey Timeline)
- ✅ Posts Archive 頁面完成 (Fashion Magazine 3-column Grid Layout)  
- ✅ Post Single 頁面完成 (TOC Sidebar Only + Optimized Typography)
- ✅ 8 Skill Categories 顏色系統完成 (語義化配色)
- ✅ Author Profile 重構完成 (Placeholder Avatar System)
- ✅ Homepage 精簡設計 (4 Featured Cards + 8 Category Badges)
- ✅ Hero Section 完成 (8 Skill Badges with Animations)
- 📝 所有文件同步更新至 v2.0.0

### v1.0.0 (2025-10-24)
- 🎨 Autumn Noir Future 主題完整實作
- 🏗️ Design System 建立
- 🎯 Hero Section & Homepage 完成
- 🧭 Navigation & Sidebar 完成
---

## 📝 Recent Updates (v2.0.0)

### 2025-10-26: Major Implementation Milestone

#### Home Page (/)
- ✅ Hero section with 8 custom skill badges
- ✅ Animated skill badges with unique colors
- ✅ Featured section (4 cards preview)
- ✅ Categories section (8 categories matching skill badges)
- ✅ Optimized mobile responsiveness

#### About Page (/about)
- ✅ Terminal command style header (`$ cat about.txt`)
- ✅ RPG pixel art inspired layout
- ✅ Cyberpunk visual effects
- ✅ Journey timeline (career & education)
- ✅ Active/Archive status indicators
- ✅ Fashion-forward color scheme

#### Posts Page (/posts)
- ✅ Fashion magazine style grid layout
- ✅ 3-column responsive card design
- ✅ Uniform card sizing
- ✅ Optimized spacing and readability
- ✅ Category and date badges

#### Article View
- ✅ Clean reading layout without author sidebar
- ✅ Table of Contents (TOC) sidebar only
- ✅ Optimized typography for readability
- ✅ Proper article metadata display

#### Theme & Styling
- ✅ Custom color schemes for 8 categories
- ✅ Dark mode optimized (Autumn Noir base)
- ✅ Gaming + Fashion fusion aesthetics
- ✅ Pixel art accents throughout
- ✅ Smooth animations and transitions

---

## 🛠️ Configuration Files

### Key Files Structure
```
├── _config.yml              # Jekyll configuration
├── _layouts/
│   ├── home.html           # Home page layout
│   ├── post.html           # Article page layout
│   └── posts.html          # Posts archive layout
├── _includes/
│   ├── author-profile.html # Author sidebar
│   ├── masthead.html       # Navigation header
│   └── page__hero.html     # Hero section
├── _pages/
│   ├── about.md            # About page
│   ├── posts.md            # Posts archive
│   └── categories.md       # Categories page
├── _sass/
│   └── custom.scss         # Custom styling
└── assets/
    ├── css/main.scss       # Main stylesheet
    └── images/             # Image assets
```

### Editing Content

#### Update Author Bio
See [`HOW-TO-EDIT-BIO.md`](HOW-TO-EDIT-BIO.md) for complete instructions.

Quick edit locations:
- **Author info**: `_config.yml` → `author:` section
- **Journey timeline**: `_pages/about.md` → Journey items
- **Profile images**: See [`PROFILE-IMAGE-TODO.md`](PROFILE-IMAGE-TODO.md)

#### Create New Post
```bash
# Create new post file
touch _posts/YYYY-MM-DD-post-title.md

# Add front matter
---
title: "Post Title"
date: YYYY-MM-DD
categories: [Category Name]
tags: [tag1, tag2]
excerpt: "Post summary"
header:
  teaser: /assets/images/post-image.jpg
---
```

#### Customize Skill Badges
Edit `_includes/page__hero.html` → Skill Badges section  
8 categories with custom colors defined in hero section.

---

## 🚀 Deployment

### GitHub Pages
- **URL**: https://magicxcr7.github.io
- **Branch**: `main`
- **Build**: Automatic on push

### Local Development
```bash
# Start server with live reload
bundle exec jekyll serve --livereload

# Build static site
bundle exec jekyll build

# Check for broken links
bundle exec htmlproofer ./_site
```

---

## 🤝 Contributing

### For Developers
1. Read `DEVELOPMENT.md` for setup
2. Check `docs/` for specifications
3. Follow `agents.MD` guidelines
4. Test locally before committing
5. Use Conventional Commits format

### For AI Agents
1. **Read first**: `agents.MD` (mandatory)
2. **Check specs**: Always refer to `docs/` specifications
3. **Plan before execute**: Use planning workflow for complex tasks
4. **Commit properly**: Use Conventional Commits with `Authored-by: <Agent-Name>`
5. **Never push**: All pushes require human approval

---

## �� Support & Contact

**Maintainer**: Archi Chen  
**Project**: Archis Studio Blog  
**Repository**: https://github.com/magicxcr7/magicxcr7.github.io

For issues or suggestions, please open an issue on GitHub.

---

## 📄 License

MIT License - Feel free to use this as a template for your own Jekyll blog.

---

**Built with ❤️ using Jekyll, Minimal Mistakes, and AI collaboration**
