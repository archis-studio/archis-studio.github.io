---
title: "學習文章"
permalink: /blog/
layout: posts
sort: last_modified_at
sort_direction: reverse
author_profile: true
sidebar:
  nav: "collections"
header:
  overlay_color: "#0a0a0a"
  overlay_filter: "0.6"
  overlay_image: /assets/images/blog-header.svg
  caption: "Learning AI Coding · 有趣且易懂"
excerpt: "用最有趣的方式學習 AI Coding 🚀 探索程式設計、AI 工具、數據分析的實戰技巧"
description: "Archis Digital Compass 技術學習文章 - AI 工具、程式設計、數據分析、個人成長，適合所有想學 Coding 的人"
keywords: "AI Coding, 程式設計學習, ChatGPT, GitHub Copilot, Python 教學, 數據分析, 機器學習"
---

<div class="blog-intro">
  <div class="intro-content">
    <h2>🎯 讓學習變得有趣</h2>
    <p>這裡不是枯燥的技術文件，而是充滿樂趣的學習園地！每篇文章都用最簡單易懂的方式，帶你探索 AI 和程式設計的奇妙世界。</p>
  </div>
</div>

## 📚 文章分類快速導覽

<div class="category-quick-nav">
  <div class="category-card">
    <div class="category-icon">🤖</div>
    <h3><a href="/categories/ai-applications/">AI 工具應用</a></h3>
    <p>ChatGPT, GitHub Copilot, n8n 等 AI 工具的實戰應用技巧</p>
    <span class="post-count">{{ site.categories['ai-applications'] | size }} 篇文章</span>
  </div>
  
  <div class="category-card">
    <div class="category-icon">💻</div>
    <h3><a href="/categories/technical/">程式設計</a></h3>
    <p>Backend 開發、資料科學、系統設計的實務分享</p>
    <span class="post-count">{{ site.categories['technical'] | size }} 篇文章</span>
  </div>
  
  <div class="category-card">
    <div class="category-icon">💰</div>
    <h3><a href="/categories/fintech/">金融科技</a></h3>
    <p>量化交易、程式交易、回測分析的技術實作</p>
    <span class="post-count">{{ site.categories['fintech'] | size }} 篇文章</span>
  </div>
  
  <div class="category-card">
    <div class="category-icon">📊</div>
    <h3><a href="/categories/digital-marketing/">數位行銷</a></h3>
    <p>GA 分析、廣告投放、電商工具的技術應用</p>
    <span class="post-count">{{ site.categories['digital-marketing'] | size }} 篇文章</span>
  </div>
  
  <div class="category-card">
    <div class="category-icon">🌱</div>
    <h3><a href="/categories/personal-growth/">學習成長</a></h3>
    <p>學習方法、職場經驗、個人成長的心得分享</p>
    <span class="post-count">{{ site.categories['personal-growth'] | size }} 篇文章</span>
  </div>
</div>

## 🔄 瀏覽方式

<div class="view-options">
  <div class="option-card active">
    <h4>⏰ 時間排序 (目前)</h4>
    <p>按最後更新時間排序，確保看到最新修訂的內容</p>
  </div>
  
  <div class="option-card">
    <h4><a href="/posts/by-category/">📂 分類排序</a></h4>
    <p>按分類整理瀏覽，適合系統性學習特定主題</p>
  </div>
  
  <div class="option-card">
    <h4><a href="/categories/">🏷️ 分類總覽</a></h4>
    <p>查看所有分類的詳細說明和學習路徑</p>
  </div>
</div>

---

<style>
/* Blog 頁面自定義樣式 */
.blog-intro {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(0, 217, 255, 0.2);
}

.intro-content h2 {
  background: linear-gradient(135deg, #00d9ff 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.intro-content p {
  color: #a1a1aa;
  font-size: 1.1rem;
  line-height: 1.6;
}

.category-quick-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.category-card {
  background: #1a1a1a;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: #00d9ff;
  box-shadow: 0 10px 25px rgba(0, 217, 255, 0.1);
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  margin-bottom: 0.5rem;
}

.category-card h3 a {
  color: #00d9ff !important;
  text-decoration: none;
  font-size: 1.1rem;
}

.category-card h3 a:hover {
  color: #00ff88 !important;
}

.category-card p {
  color: #a1a1aa;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.post-count {
  display: inline-block;
  background: rgba(0, 217, 255, 0.1);
  color: #00d9ff;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'JetBrains Mono', monospace;
}

.view-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.option-card {
  background: #2a2a2a;
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.option-card.active {
  border-color: #00ff88;
  background: rgba(0, 255, 136, 0.05);
}

.option-card:hover {
  border-color: #00d9ff;
}

.option-card h4 {
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.option-card h4 a {
  color: #00d9ff !important;
  text-decoration: none;
}

.option-card p {
  color: #a1a1aa;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .category-quick-nav,
  .view-options {
    grid-template-columns: 1fr;
  }
}
</style>