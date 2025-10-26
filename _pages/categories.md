---
layout: single
title: "分類導航"
permalink: /categories/
author_profile: false
classes: wide
---

<div class="categories-futuristic">
  
  <!-- Animated Background -->
  <div class="cyber-bg">
    <div class="cyber-grid"></div>
    <div class="particles"></div>
    <div class="scanline"></div>
  </div>
  
  <!-- Page Header -->
  <header class="cyber-header">
    <div class="glitch-wrapper">
      <h1 class="cyber-title" data-text="CATEGORY_NEXUS">CATEGORY_NEXUS</h1>
    </div>
    <p class="cyber-subtitle">
      <span class="blink">▌</span>SYSTEM.READY 
      <span class="cyber-divider">///</span> 
      8_DOMAINS_ONLINE 
      <span class="cyber-divider">///</span> 
      {{ site.posts.size }}_ENTRIES_INDEXED
    </p>
  </header>

  <!-- Hexagonal Grid -->
  <div class="hex-grid">
    
    <!-- Category 1: AI Tools -->
    <div class="hex-wrapper">
      <article id="ai" class="hex-card hex-card--ai" data-category="ai-tools">
        <div class="hex-inner">
          <div class="hex-glow"></div>
          
          <div class="hex-content">
            <div class="hex-header">
              <span class="hex-icon">🤖</span>
              <div class="hex-signal"></div>
            </div>
            
            <h2 class="hex-title">AI_TOOLS</h2>
            <p class="hex-subtitle">人工智慧工具</p>
            
            <div class="hex-stats">
              <div class="stat">
                <span class="stat-label">ENTRIES</span>
                <span class="stat-value">{{ site.categories['AI Tools'] | size | default: 0 }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">STATUS</span>
                <span class="stat-value status-active">ACTIVE</span>
              </div>
            </div>
            
            <p class="hex-description">
              探索 AI 工具的實際應用 / ChatGPT / Claude / Midjourney
            </p>
            
            <a href="#ai-posts" class="hex-btn">
              <span>ACCESS_DATA</span>
              <span class="hex-arrow">→</span>
            </a>
          </div>
          
          <div class="hex-corner hex-corner--tl"></div>
          <div class="hex-corner hex-corner--tr"></div>
          <div class="hex-corner hex-corner--bl"></div>
          <div class="hex-corner hex-corner--br"></div>
        </div>
      </article>
    </div>
    
    <!-- Category 2: Software Dev -->
    <div class="hex-wrapper">
      <article id="dev" class="hex-card hex-card--dev" data-category="software-dev">
        <div class="hex-inner">
          <div class="hex-glow"></div>
          
          <div class="hex-content">
            <div class="hex-header">
              <span class="hex-icon">💻</span>
              <div class="hex-signal"></div>
            </div>
            
            <h2 class="hex-title">SOFTWARE_DEV</h2>
            <p class="hex-subtitle">軟體開發</p>
            
            <div class="hex-stats">
              <div class="stat">
                <span class="stat-label">ENTRIES</span>
                <span class="stat-value">{{ site.categories['Software Dev'] | size | default: 0 }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">STATUS</span>
                <span class="stat-value status-active">ACTIVE</span>
              </div>
            </div>
            
            <p class="hex-description">
              程式開發技術 / 框架使用 / 開發工具 / 最佳實踐
            </p>
            
            <a href="#dev-posts" class="hex-btn">
              <span>ACCESS_DATA</span>
              <span class="hex-arrow">→</span>
            </a>
          </div>
          
          <div class="hex-corner hex-corner--tl"></div>
          <div class="hex-corner hex-corner--tr"></div>
          <div class="hex-corner hex-corner--bl"></div>
          <div class="hex-corner hex-corner--br"></div>
        </div>
      </article>
    </div>
    
    <!-- Category 3: Data Science -->
    <div class="hex-wrapper">
      <article id="data" class="hex-card hex-card--data" data-category="data-science">
        <div class="hex-inner">
          <div class="hex-glow"></div>
          
          <div class="hex-content">
            <div class="hex-header">
              <span class="hex-icon">📊</span>
              <div class="hex-signal"></div>
            </div>
            
            <h2 class="hex-title">DATA_SCIENCE</h2>
            <p class="hex-subtitle">資料科學</p>
            
            <div class="hex-stats">
              <div class="stat">
                <span class="stat-label">ENTRIES</span>
                <span class="stat-value">{{ site.categories['Data Science'] | size | default: 0 }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">STATUS</span>
                <span class="stat-value status-active">ACTIVE</span>
              </div>
            </div>
            
            <p class="hex-description">
              資料分析 / 機器學習 / 視覺化工具 / 統計方法
            </p>
            
            <a href="#data-posts" class="hex-btn">
              <span>ACCESS_DATA</span>
              <span class="hex-arrow">→</span>
            </a>
          </div>
          
          <div class="hex-corner hex-corner--tl"></div>
          <div class="hex-corner hex-corner--tr"></div>
          <div class="hex-corner hex-corner--bl"></div>
          <div class="hex-corner hex-corner--br"></div>
        </div>
      </article>
    </div>
    
    <!-- Category 4: Digital Marketing -->
    <div class="hex-wrapper">
      <article id="marketing" class="hex-card hex-card--marketing" data-category="marketing">
        <div class="hex-inner">
          <div class="hex-glow"></div>
          
          <div class="hex-content">
            <div class="hex-header">
              <span class="hex-icon">🌐</span>
              <div class="hex-signal"></div>
            </div>
            
            <h2 class="hex-title">MARKETING</h2>
            <p class="hex-subtitle">數位行銷</p>
            
            <div class="hex-stats">
              <div class="stat">
                <span class="stat-label">ENTRIES</span>
                <span class="stat-value">{{ site.categories['Marketing'] | size | default: 0 }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">STATUS</span>
                <span class="stat-value status-active">ACTIVE</span>
              </div>
            </div>
            
            <p class="hex-description">
              數位行銷策略 / 社群經營 / 內容創作 / 品牌建立
            </p>
            
            <a href="#marketing-posts" class="hex-btn">
              <span>ACCESS_DATA</span>
              <span class="hex-arrow">→</span>
            </a>
          </div>
          
          <div class="hex-corner hex-corner--tl"></div>
          <div class="hex-corner hex-corner--tr"></div>
          <div class="hex-corner hex-corner--bl"></div>
          <div class="hex-corner hex-corner--br"></div>
        </div>
      </article>
    </div>
    
    <!-- Category 5: Quant Trading -->
    <div class="hex-wrapper">
      <article id="quant" class="hex-card hex-card--quant" data-category="quant-trading">
        <div class="hex-inner">
          <div class="hex-glow"></div>
          
          <div class="hex-content">
            <div class="hex-header">
              <span class="hex-icon">💹</span>
              <div class="hex-signal"></div>
            </div>
            
            <h2 class="hex-title">QUANT_TRADE</h2>
            <p class="hex-subtitle">量化交易</p>
            
            <div class="hex-stats">
              <div class="stat">
                <span class="stat-label">ENTRIES</span>
                <span class="stat-value">{{ site.categories['Quant Trading'] | size | default: 0 }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">STATUS</span>
                <span class="stat-value status-active">ACTIVE</span>
              </div>
            </div>
            
            <p class="hex-description">
              量化策略 / 技術分析 / 投資組合管理 / 風險控制
            </p>
            
            <a href="#quant-posts" class="hex-btn">
              <span>ACCESS_DATA</span>
              <span class="hex-arrow">→</span>
            </a>
          </div>
          
          <div class="hex-corner hex-corner--tl"></div>
          <div class="hex-corner hex-corner--tr"></div>
          <div class="hex-corner hex-corner--bl"></div>
          <div class="hex-corner hex-corner--br"></div>
        </div>
      </article>
    </div>
    
    <!-- Category 6: Reading Notes -->
    <div class="hex-wrapper">
      <article id="reading" class="hex-card hex-card--reading" data-category="reading">
        <div class="hex-inner">
          <div class="hex-glow"></div>
          
          <div class="hex-content">
            <div class="hex-header">
              <span class="hex-icon">📘</span>
              <div class="hex-signal"></div>
            </div>
            
            <h2 class="hex-title">READING_LOG</h2>
            <p class="hex-subtitle">閱讀筆記</p>
            
            <div class="hex-stats">
              <div class="stat">
                <span class="stat-label">ENTRIES</span>
                <span class="stat-value">{{ site.categories['Reading'] | size | default: 0 }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">STATUS</span>
                <span class="stat-value status-active">ACTIVE</span>
              </div>
            </div>
            
            <p class="hex-description">
              書籍筆記 / 學習心得 / 知識整理 / 思考啟發
            </p>
            
            <a href="#reading-posts" class="hex-btn">
              <span>ACCESS_DATA</span>
              <span class="hex-arrow">→</span>
            </a>
          </div>
          
          <div class="hex-corner hex-corner--tl"></div>
          <div class="hex-corner hex-corner--tr"></div>
          <div class="hex-corner hex-corner--bl"></div>
          <div class="hex-corner hex-corner--br"></div>
        </div>
      </article>
    </div>
    
    <!-- Category 7: Green Energy -->
    <div class="hex-wrapper">
      <article id="green" class="hex-card hex-card--green" data-category="green-energy">
        <div class="hex-inner">
          <div class="hex-glow"></div>
          
          <div class="hex-content">
            <div class="hex-header">
              <span class="hex-icon">🌱</span>
              <div class="hex-signal"></div>
            </div>
            
            <h2 class="hex-title">GREEN_TECH</h2>
            <p class="hex-subtitle">綠色能源</p>
            
            <div class="hex-stats">
              <div class="stat">
                <span class="stat-label">ENTRIES</span>
                <span class="stat-value">{{ site.categories['Green Energy'] | size | default: 0 }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">STATUS</span>
                <span class="stat-value status-active">ACTIVE</span>
              </div>
            </div>
            
            <p class="hex-description">
              永續能源 / 環境保護 / 綠色科技 / 未來能源方案
            </p>
            
            <a href="#green-posts" class="hex-btn">
              <span>ACCESS_DATA</span>
              <span class="hex-arrow">→</span>
            </a>
          </div>
          
          <div class="hex-corner hex-corner--tl"></div>
          <div class="hex-corner hex-corner--tr"></div>
          <div class="hex-corner hex-corner--bl"></div>
          <div class="hex-corner hex-corner--br"></div>
        </div>
      </article>
    </div>
    
    <!-- Category 8: Growth Journey -->
    <div class="hex-wrapper">
      <article id="growth" class="hex-card hex-card--growth" data-category="growth">
        <div class="hex-inner">
          <div class="hex-glow"></div>
          
          <div class="hex-content">
            <div class="hex-header">
              <span class="hex-icon">🎯</span>
              <div class="hex-signal"></div>
            </div>
            
            <h2 class="hex-title">GROWTH_PATH</h2>
            <p class="hex-subtitle">成長旅程</p>
            
            <div class="hex-stats">
              <div class="stat">
                <span class="stat-label">ENTRIES</span>
                <span class="stat-value">{{ site.categories['Growth'] | size | default: 0 }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">STATUS</span>
                <span class="stat-value status-active">ACTIVE</span>
              </div>
            </div>
            
            <p class="hex-description">
              個人成長 / 職涯發展 / 生活反思 / 持續進化
            </p>
            
            <a href="#growth-posts" class="hex-btn">
              <span>ACCESS_DATA</span>
              <span class="hex-arrow">→</span>
            </a>
          </div>
          
          <div class="hex-corner hex-corner--tl"></div>
          <div class="hex-corner hex-corner--tr"></div>
          <div class="hex-corner hex-corner--bl"></div>
          <div class="hex-corner hex-corner--br"></div>
        </div>
      </article>
    </div>
    
  </div>
  
</div>

<style>
/* Inject critical inline styles for immediate rendering */
.categories-futuristic {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>

    
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
