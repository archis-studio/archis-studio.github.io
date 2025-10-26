---
layout: page
title: "分類導航"
permalink: /categories/
author_profile: false
---

<div class="categories-page">
  <!-- Page Header -->
  <header class="categories-header">
    <h1 class="categories-title">探索分類</h1>
    <p class="categories-subtitle">8 個專業領域 · {{ site.posts.size }} 篇文章 · 持續更新中</p>
  </header>

  <!-- Categories Grid -->
  <div class="categories-grid">
    
    <!-- Category 1: AI Tools -->
    <article id="ai" class="category-card category-card--ai">
      <div class="category-card__header">
        <span class="category-icon">🤖</span>
        <div class="category-info">
          <h2 class="category-title">AI 工具</h2>
          <p class="category-title-en">AI Tools</p>
        </div>
        <span class="category-count">{{ site.categories['AI Tools'] | size | default: 0 }}</span>
      </div>
      
      <div class="category-card__body">
        <p class="category-description">
          探索 AI 工具的實際應用，包括 ChatGPT、Claude、Midjourney 等工具的使用技巧與自動化流程。
        </p>
        
        {% assign ai_posts = site.categories['AI Tools'] | limit: 3 %}
        {% if ai_posts.size > 0 %}
          <ul class="category-posts-preview">
            {% for post in ai_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
                  <span class="post-title">{{ post.title | truncate: 40 }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p class="category-empty">即將推出相關內容</p>
        {% endif %}
      </div>
      
      <div class="category-card__footer">
        <a href="#ai-posts" class="category-explore-btn">探索文章 →</a>
      </div>
    </article>
    
    <!-- Category 2: Software Dev -->
    <article id="dev" class="category-card category-card--dev">
      <div class="category-card__header">
        <span class="category-icon">💻</span>
        <div class="category-info">
          <h2 class="category-title">軟體開發</h2>
          <p class="category-title-en">Software Dev</p>
        </div>
        <span class="category-count">{{ site.categories['Software Dev'] | size | default: 0 }}</span>
      </div>
      
      <div class="category-card__body">
        <p class="category-description">
          程式開發技術、框架使用、開發工具與最佳實踐，涵蓋前端、後端與 DevOps。
        </p>
        
        {% assign dev_posts = site.categories['Software Dev'] | limit: 3 %}
        {% if dev_posts.size > 0 %}
          <ul class="category-posts-preview">
            {% for post in dev_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
                  <span class="post-title">{{ post.title | truncate: 40 }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p class="category-empty">即將推出相關內容</p>
        {% endif %}
      </div>
      
      <div class="category-card__footer">
        <a href="#dev-posts" class="category-explore-btn">探索文章 →</a>
      </div>
    </article>
    
    <!-- Category 3: Data Science -->
    <article id="data" class="category-card category-card--data">
      <div class="category-card__header">
        <span class="category-icon">📊</span>
        <div class="category-info">
          <h2 class="category-title">資料科學</h2>
          <p class="category-title-en">Data Science</p>
        </div>
        <span class="category-count">{{ site.categories['Data Science'] | size | default: 0 }}</span>
      </div>
      
      <div class="category-card__body">
        <p class="category-description">
          資料分析、機器學習、視覺化工具與統計方法，從資料中挖掘洞察。
        </p>
        
        {% assign data_posts = site.categories['Data Science'] | limit: 3 %}
        {% if data_posts.size > 0 %}
          <ul class="category-posts-preview">
            {% for post in data_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
                  <span class="post-title">{{ post.title | truncate: 40 }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p class="category-empty">即將推出相關內容</p>
        {% endif %}
      </div>
      
      <div class="category-card__footer">
        <a href="#data-posts" class="category-explore-btn">探索文章 →</a>
      </div>
    </article>
    
    <!-- Category 4: Digital Marketing -->
    <article id="marketing" class="category-card category-card--marketing">
      <div class="category-card__header">
        <span class="category-icon">🌐</span>
        <div class="category-info">
          <h2 class="category-title">數位行銷</h2>
          <p class="category-title-en">Marketing</p>
        </div>
        <span class="category-count">{{ site.categories['Marketing'] | size | default: 0 }}</span>
      </div>
      
      <div class="category-card__body">
        <p class="category-description">
          數位行銷策略、社群經營、內容創作與品牌建立的實戰經驗分享。
        </p>
        
        {% assign marketing_posts = site.categories['Marketing'] | limit: 3 %}
        {% if marketing_posts.size > 0 %}
          <ul class="category-posts-preview">
            {% for post in marketing_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
                  <span class="post-title">{{ post.title | truncate: 40 }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p class="category-empty">即將推出相關內容</p>
        {% endif %}
      </div>
      
      <div class="category-card__footer">
        <a href="#marketing-posts" class="category-explore-btn">探索文章 →</a>
      </div>
    </article>
    
    <!-- Category 5: Quant Trading -->
    <article id="quant" class="category-card category-card--quant">
      <div class="category-card__header">
        <span class="category-icon">💹</span>
        <div class="category-info">
          <h2 class="category-title">量化交易</h2>
          <p class="category-title-en">Quant Trading</p>
        </div>
        <span class="category-count">{{ site.categories['Quant Trading'] | size | default: 0 }}</span>
      </div>
      
      <div class="category-card__body">
        <p class="category-description">
          量化交易策略、技術分析、投資組合管理與風險控制的系統化方法。
        </p>
        
        {% assign quant_posts = site.categories['Quant Trading'] | limit: 3 %}
        {% if quant_posts.size > 0 %}
          <ul class="category-posts-preview">
            {% for post in quant_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
                  <span class="post-title">{{ post.title | truncate: 40 }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p class="category-empty">即將推出相關內容</p>
        {% endif %}
      </div>
      
      <div class="category-card__footer">
        <a href="#quant-posts" class="category-explore-btn">探索文章 →</a>
      </div>
    </article>
    
    <!-- Category 6: Reading Notes -->
    <article id="reading" class="category-card category-card--reading">
      <div class="category-card__header">
        <span class="category-icon">📘</span>
        <div class="category-info">
          <h2 class="category-title">閱讀筆記</h2>
          <p class="category-title-en">Reading</p>
        </div>
        <span class="category-count">{{ site.categories['Reading'] | size | default: 0 }}</span>
      </div>
      
      <div class="category-card__body">
        <p class="category-description">
          書籍筆記、學習心得與知識整理，記錄閱讀旅程中的思考與啟發。
        </p>
        
        {% assign reading_posts = site.categories['Reading'] | limit: 3 %}
        {% if reading_posts.size > 0 %}
          <ul class="category-posts-preview">
            {% for post in reading_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
                  <span class="post-title">{{ post.title | truncate: 40 }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p class="category-empty">即將推出相關內容</p>
        {% endif %}
      </div>
      
      <div class="category-card__footer">
        <a href="#reading-posts" class="category-explore-btn">探索文章 →</a>
      </div>
    </article>
    
    <!-- Category 7: Green Energy -->
    <article id="green" class="category-card category-card--green">
      <div class="category-card__header">
        <span class="category-icon">🌱</span>
        <div class="category-info">
          <h2 class="category-title">綠色能源</h2>
          <p class="category-title-en">Green Energy</p>
        </div>
        <span class="category-count">{{ site.categories['Green Energy'] | size | default: 0 }}</span>
      </div>
      
      <div class="category-card__body">
        <p class="category-description">
          永續能源、環境保護與綠色科技，探索未來能源解決方案。
        </p>
        
        {% assign green_posts = site.categories['Green Energy'] | limit: 3 %}
        {% if green_posts.size > 0 %}
          <ul class="category-posts-preview">
            {% for post in green_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
                  <span class="post-title">{{ post.title | truncate: 40 }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p class="category-empty">即將推出相關內容</p>
        {% endif %}
      </div>
      
      <div class="category-card__footer">
        <a href="#green-posts" class="category-explore-btn">探索文章 →</a>
      </div>
    </article>
    
    <!-- Category 8: Growth Journey -->
    <article id="growth" class="category-card category-card--growth">
      <div class="category-card__header">
        <span class="category-icon">🎯</span>
        <div class="category-info">
          <h2 class="category-title">成長旅程</h2>
          <p class="category-title-en">Growth</p>
        </div>
        <span class="category-count">{{ site.categories['Growth'] | size | default: 0 }}</span>
      </div>
      
      <div class="category-card__body">
        <p class="category-description">
          個人成長、職涯發展與生活反思，記錄持續進化的旅程。
        </p>
        
        {% assign growth_posts = site.categories['Growth'] | limit: 3 %}
        {% if growth_posts.size > 0 %}
          <ul class="category-posts-preview">
            {% for post in growth_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  <span class="post-date">{{ post.date | date: "%m/%d" }}</span>
                  <span class="post-title">{{ post.title | truncate: 40 }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p class="category-empty">即將推出相關內容</p>
        {% endif %}
      </div>
      
      <div class="category-card__footer">
        <a href="#growth-posts" class="category-explore-btn">探索文章 →</a>
      </div>
    </article>
    
  </div>
</div>
