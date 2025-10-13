---
permalink: /categories/
title: "Content Database"
excerpt: "AI-powered content classification system"
layout: single
classes: wide space-starfield
author_profile: true
toc: false
header:
  overlay_color: "#0B0B0F"
  overlay_filter: "0.9"
  overlay_image: /assets/images/categories-space-bg.jpg
  caption: "Neural Network Content Mapping"
---

<div class="space-particles"></div>

<!-- Categories Header -->
<div class="ai-neural-network" style="margin-bottom: 3rem;">
  <div class="ai-agent-card">
    <div class="agent-header">
      <div class="agent-avatar"></div>
      <div class="agent-info">
        <h2 class="agent-name">CONTENT-MAPPER v1.8</h2>
        <p class="agent-type">Neural Classification System</p>
      </div>
      <span class="agent-status online">INDEXING</span>
    </div>
    <div class="agent-capabilities">
      <p>🧠 <strong>Neural_Network_Analysis()</strong> - 智能內容分類系統，使用 AI 語義分析將文章按主題、技術類型和難度等級進行精確分類。</p>
      
      <div class="capability-list">
        <span class="capability">Semantic Analysis</span>
        <span class="capability">Auto-Tagging</span>
        <span class="capability">Content Mapping</span>
        <span class="capability">Smart Search</span>
      </div>
    </div>
  </div>
</div>

## 📊 **Content Analytics Dashboard**

<div class="retro-game-grid" style="margin-bottom: 3rem;">
  <div class="crt-screen" style="padding: 1.5rem;">
    <h3 style="color: #6BAAB8; font-family: 'JetBrains Mono', monospace; text-align: center; margin-bottom: 1.5rem;">
      === CONTENT STATISTICS ===
    </h3>
    
    <div class="row">
      <div class="col-md-3 col-sm-6 text-center" style="margin-bottom: 1rem;">
        <div class="pixel-icon-future ai-chip"></div>
        <h4 style="color: #D4A017; font-family: 'JetBrains Mono', monospace; margin: 0.5rem 0; font-size: 0.9rem;">TOTAL POSTS</h4>
        <p style="color: #9BB85F; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;">{{ site.posts.size }} Articles</p>
      </div>
      <div class="col-md-3 col-sm-6 text-center" style="margin-bottom: 1rem;">
        <div class="pixel-icon-future space-ship"></div>
        <h4 style="color: #D4A017; font-family: 'JetBrains Mono', monospace; margin: 0.5rem 0; font-size: 0.9rem;">CATEGORIES</h4>
        <p style="color: #9BB85F; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;">{{ site.categories.size }} Types</p>
      </div>
      <div class="col-md-3 col-sm-6 text-center" style="margin-bottom: 1rem;">
        <div class="pixel-icon-future retro-console"></div>
        <h4 style="color: #D4A017; font-family: 'JetBrains Mono', monospace; margin: 0.5rem 0; font-size: 0.9rem;">TAGS</h4>
        <p style="color: #9BB85F; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;">{{ site.tags.size }} Keywords</p>
      </div>
      <div class="col-md-3 col-sm-6 text-center" style="margin-bottom: 1rem;">
        <div class="pixel-icon-future quantum-core"></div>
        <h4 style="color: #D4A017; font-family: 'JetBrains Mono', monospace; margin: 0.5rem 0; font-size: 0.9rem;">LAST UPDATE</h4>
        <p style="color: #9BB85F; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;">{{ site.time | date: "%Y-%m-%d" }}</p>
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 1rem;">
      <div class="future-progress" style="margin: 0.5rem auto; max-width: 300px;">
        <div class="progress-bar" style="width: 87%;"></div>
      </div>
      <p style="color: #6BAAB8; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;">
        > INDEXING_STATUS: 87% | NEURAL_MAPPING: COMPLETE
      </p>
    </div>
  </div>
</div>

## 🤖 **AI Content Categories**

<div class="row" style="margin-bottom: 3rem;">
  <div class="col-md-6" style="margin-bottom: 1.5rem;">
    <div class="hologram-panel">
      <div class="panel-header">
        <h3 class="panel-title">🤖 AI Applications</h3>
        <span class="panel-status">
          {% assign ai_posts = site.categories['ai-applications'] | size %}
          {% if ai_posts > 0 %}{{ ai_posts }} POSTS{% else %}COMING SOON{% endif %}
        </span>
      </div>
      <div class="panel-content">
        <p>探索 AI 工具在開發工作中的實際應用，從 ChatGPT 提示工程到 GitHub Copilot 整合，掌握 AI 輔助開發的最新趨勢。</p>
        
        <div style="margin: 1rem 0;">
          <span style="color: #D4A017; font-size: 0.9rem;">🔗 熱門主題:</span>
          <div style="margin-top: 0.5rem;">
            <span class="capability" style="font-size: 0.8rem;">Prompt Engineering</span>
            <span class="capability" style="font-size: 0.8rem;">GitHub Copilot</span>
            <span class="capability" style="font-size: 0.8rem;">AI Workflows</span>
          </div>
        </div>
        
        {% if site.categories['ai-applications'] %}
          <div style="margin-top: 1rem;">
            {% for post in site.categories['ai-applications'] limit: 3 %}
            <div style="margin-bottom: 0.5rem; padding: 0.5rem; background: rgba(74, 144, 184, 0.1); border-radius: 4px;">
              <a href="{{ post.url | relative_url }}" style="color: #E8E1D3; text-decoration: none; font-size: 0.9rem;">
                {{ post.title }}
              </a>
              <small style="color: #A0A0A5; display: block;">{{ post.date | date: "%Y-%m-%d" }}</small>
            </div>
            {% endfor %}
          </div>
        {% endif %}
        
        <a href="#ai-applications-section" class="pixel-btn-future ai-neural">瀏覽全部</a>
      </div>
    </div>
  </div>
  
  <div class="col-md-6" style="margin-bottom: 1.5rem;">
    <div class="hologram-panel">
      <div class="panel-header">
        <h3 class="panel-title">💻 Technical Systems</h3>
        <span class="panel-status">
          {% assign tech_posts = site.categories['technical'] | size %}
          {% if tech_posts > 0 %}{{ tech_posts }} POSTS{% else %}COMING SOON{% endif %}
        </span>
      </div>
      <div class="panel-content">
        <p>Backend 開發、系統架構與程式設計的深度技術分享，涵蓋 Python、API 設計、雲端服務等專業技術內容。</p>
        
        <div style="margin: 1rem 0;">
          <span style="color: #D4A017; font-size: 0.9rem;">🔗 核心技術:</span>
          <div style="margin-top: 0.5rem;">
            <span class="capability" style="font-size: 0.8rem;">Python & FastAPI</span>
            <span class="capability" style="font-size: 0.8rem;">System Architecture</span>
            <span class="capability" style="font-size: 0.8rem;">Cloud Services</span>
          </div>
        </div>
        
        {% if site.categories['technical'] %}
          <div style="margin-top: 1rem;">
            {% for post in site.categories['technical'] limit: 3 %}
            <div style="margin-bottom: 0.5rem; padding: 0.5rem; background: rgba(90, 139, 95, 0.1); border-radius: 4px;">
              <a href="{{ post.url | relative_url }}" style="color: #E8E1D3; text-decoration: none; font-size: 0.9rem;">
                {{ post.title }}
              </a>
              <small style="color: #A0A0A5; display: block;">{{ post.date | date: "%Y-%m-%d" }}</small>
            </div>
            {% endfor %}
          </div>
        {% endif %}
        
        <a href="#technical-section" class="pixel-btn-future">瀏覽技術文章</a>
      </div>
    </div>
  </div>
  
  <div class="col-md-6" style="margin-bottom: 1.5rem;">
    <div class="hologram-panel">
      <div class="panel-header">
        <h3 class="panel-title">📊 Data Science</h3>
        <span class="panel-status">
          {% assign data_posts = site.categories['data-science'] | size %}
          {% if data_posts > 0 %}{{ data_posts }} POSTS{% else %}COMING SOON{% endif %}
        </span>
      </div>
      <div class="panel-content">
        <p>數據科學、機器學習與量化分析的實戰應用，分享 Pandas、數據視覺化、量化交易等專業技能與創意方法。</p>
        
        <div style="margin: 1rem 0;">
          <span style="color: #D4A017; font-size: 0.9rem;">🔗 數據領域:</span>
          <div style="margin-top: 0.5rem;">
            <span class="capability" style="font-size: 0.8rem;">Pandas & Analysis</span>
            <span class="capability" style="font-size: 0.8rem;">ML Applications</span>
            <span class="capability" style="font-size: 0.8rem;">Quantitative Trading</span>
          </div>
        </div>
        
        {% if site.categories['data-science'] %}
          <div style="margin-top: 1rem;">
            {% for post in site.categories['data-science'] limit: 3 %}
            <div style="margin-bottom: 0.5rem; padding: 0.5rem; background: rgba(184, 123, 154, 0.1); border-radius: 4px;">
              <a href="{{ post.url | relative_url }}" style="color: #E8E1D3; text-decoration: none; font-size: 0.9rem;">
                {{ post.title }}
              </a>
              <small style="color: #A0A0A5; display: block;">{{ post.date | date: "%Y-%m-%d" }}</small>
            </div>
            {% endfor %}
          </div>
        {% endif %}
        
        <a href="#data-science-section" class="pixel-btn-future retro-neon">數據探索</a>
      </div>
    </div>
  </div>
  
  <div class="col-md-6" style="margin-bottom: 1.5rem;">
    <div class="hologram-panel">
      <div class="panel-header">
        <h3 class="panel-title">🌱 Personal Growth</h3>
        <span class="panel-status">
          {% assign growth_posts = site.categories['personal-growth'] | size %}
          {% if growth_posts > 0 %}{{ growth_posts }} POSTS{% else %}ACTIVE{% endif %}
        </span>
      </div>
      <div class="panel-content">
        <p>個人成長、學習方法與職涯發展的深度思考，分享技術學習策略、效率提升技巧，以及在快速變化科技世界中的成長心得。</p>
        
        <div style="margin: 1rem 0;">
          <span style="color: #D4A017; font-size: 0.9rem;">🔗 成長主題:</span>
          <div style="margin-top: 0.5rem;">
            <span class="capability" style="font-size: 0.8rem;">Learning Strategies</span>
            <span class="capability" style="font-size: 0.8rem;">Productivity</span>
            <span class="capability" style="font-size: 0.8rem;">Career Growth</span>
          </div>
        </div>
        
        {% if site.categories['personal-growth'] %}
          <div style="margin-top: 1rem;">
            {% for post in site.categories['personal-growth'] limit: 3 %}
            <div style="margin-bottom: 0.5rem; padding: 0.5rem; background: rgba(212, 184, 115, 0.1); border-radius: 4px;">
              <a href="{{ post.url | relative_url }}" style="color: #E8E1D3; text-decoration: none; font-size: 0.9rem;">
                {{ post.title }}
              </a>
              <small style="color: #A0A0A5; display: block;">{{ post.date | date: "%Y-%m-%d" }}</small>
            </div>
            {% endfor %}
          </div>
        {% endif %}
        
        <a href="#personal-growth-section" class="pixel-btn-future space-primary">成長旅程</a>
      </div>
    </div>
  </div>
</div>

## 🔍 **Neural Search Interface**

<div class="ai-neural-network" style="margin-bottom: 3rem;">
  <div class="hologram-panel">
    <div class="panel-header">
      <h3 class="panel-title">🧠 Semantic Search Engine</h3>
      <span class="panel-status">READY</span>
    </div>
    <div class="panel-content">
      <p>使用 AI 語義搜尋快速找到相關內容。輸入關鍵字、主題或技術名稱，系統將智能匹配最相關的文章。</p>
      
      <div style="margin: 1.5rem 0;">
        <div style="position: relative;">
          <input type="text" 
                 placeholder="輸入搜尋關鍵字 (例如: AI工具, Python, 學習方法)..." 
                 style="width: 100%; padding: 0.75rem 1rem; background: rgba(11, 11, 15, 0.8); border: 1px solid #4A90B8; border-radius: 4px; color: #E8E1D3; font-family: 'JetBrains Mono', monospace;"
                 id="search-input">
          <button style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%); background: #D4A017; border: none; padding: 0.5rem 1rem; border-radius: 3px; color: #0B0B0F; font-weight: bold; cursor: pointer;"
                  onclick="searchContent()">
            🔍 搜尋
          </button>
        </div>
      </div>
      
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
        <span style="color: #D4A017; font-size: 0.9rem;">快速搜尋:</span>
        <button class="capability" onclick="quickSearch('AI')" style="cursor: pointer; border: none; background: none;">AI工具</button>
        <button class="capability" onclick="quickSearch('Python')" style="cursor: pointer; border: none; background: none;">Python</button>
        <button class="capability" onclick="quickSearch('數據')" style="cursor: pointer; border: none; background: none;">數據科學</button>
        <button class="capability" onclick="quickSearch('成長')" style="cursor: pointer; border: none; background: none;">個人成長</button>
      </div>
      
      <div id="search-results" style="margin-top: 1rem; display: none;">
        <!-- 搜尋結果將顯示在這裡 -->
      </div>
    </div>
  </div>
</div>

## 📚 **Complete Content Archive**

<!-- AI Applications Section -->
<div id="ai-applications-section" style="margin-bottom: 3rem;">
  <h3 style="color: #D4A017; margin-bottom: 1rem;">🤖 AI Applications Archive</h3>
  {% if site.categories['ai-applications'] %}
    <div class="row">
      {% for post in site.categories['ai-applications'] %}
      <div class="col-md-6" style="margin-bottom: 1rem;">
        <div style="background: rgba(74, 144, 184, 0.1); padding: 1rem; border-radius: 8px; border-left: 3px solid #4A90B8;">
          <h4><a href="{{ post.url | relative_url }}" style="color: #E8E1D3; text-decoration: none;">{{ post.title }}</a></h4>
          <p style="color: #A0A0A5; font-size: 0.9rem; margin: 0.5rem 0;">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          <small style="color: #D4A017;">{{ post.date | date: "%Y年%m月%d日" }}</small>
        </div>
      </div>
      {% endfor %}
    </div>
  {% else %}
    <div class="hologram-panel">
      <div class="panel-content">
        <p>🚀 AI Applications 文章正在準備中...敬請期待最新的 AI 工具應用分享！</p>
      </div>
    </div>
  {% endif %}
</div>

<!-- Technical Section -->
<div id="technical-section" style="margin-bottom: 3rem;">
  <h3 style="color: #D4A017; margin-bottom: 1rem;">💻 Technical Systems Archive</h3>
  {% if site.categories['technical'] %}
    <div class="row">
      {% for post in site.categories['technical'] %}
      <div class="col-md-6" style="margin-bottom: 1rem;">
        <div style="background: rgba(90, 139, 95, 0.1); padding: 1rem; border-radius: 8px; border-left: 3px solid #5A8B5F;">
          <h4><a href="{{ post.url | relative_url }}" style="color: #E8E1D3; text-decoration: none;">{{ post.title }}</a></h4>
          <p style="color: #A0A0A5; font-size: 0.9rem; margin: 0.5rem 0;">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          <small style="color: #D4A017;">{{ post.date | date: "%Y年%m月%d日" }}</small>
        </div>
      </div>
      {% endfor %}
    </div>
  {% else %}
    <div class="hologram-panel">
      <div class="panel-content">
        <p>⚙️ Technical Systems 文章正在開發中...將分享最新的技術實戰經驗！</p>
      </div>
    </div>
  {% endif %}
</div>

<!-- Data Science Section -->
<div id="data-science-section" style="margin-bottom: 3rem;">
  <h3 style="color: #D4A017; margin-bottom: 1rem;">📊 Data Science Archive</h3>
  {% if site.categories['data-science'] %}
    <div class="row">
      {% for post in site.categories['data-science'] %}
      <div class="col-md-6" style="margin-bottom: 1rem;">
        <div style="background: rgba(184, 123, 154, 0.1); padding: 1rem; border-radius: 8px; border-left: 3px solid #B87B9A;">
          <h4><a href="{{ post.url | relative_url }}" style="color: #E8E1D3; text-decoration: none;">{{ post.title }}</a></h4>
          <p style="color: #A0A0A5; font-size: 0.9rem; margin: 0.5rem 0;">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          <small style="color: #D4A017;">{{ post.date | date: "%Y年%m月%d日" }}</small>
        </div>
      </div>
      {% endfor %}
    </div>
  {% else %}
    <div class="hologram-panel">
      <div class="panel-content">
        <p>📈 Data Science 文章正在分析中...將帶來數據科學的精彩內容！</p>
      </div>
    </div>
  {% endif %}
</div>

<!-- Personal Growth Section -->
<div id="personal-growth-section" style="margin-bottom: 3rem;">
  <h3 style="color: #D4A017; margin-bottom: 1rem;">🌱 Personal Growth Archive</h3>
  {% if site.categories['personal-growth'] %}
    <div class="row">
      {% for post in site.categories['personal-growth'] %}
      <div class="col-md-6" style="margin-bottom: 1rem;">
        <div style="background: rgba(212, 184, 115, 0.1); padding: 1rem; border-radius: 8px; border-left: 3px solid #D4B873;">
          <h4><a href="{{ post.url | relative_url }}" style="color: #E8E1D3; text-decoration: none;">{{ post.title }}</a></h4>
          <p style="color: #A0A0A5; font-size: 0.9rem; margin: 0.5rem 0;">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          <small style="color: #D4A017;">{{ post.date | date: "%Y年%m月%d日" }}</small>
        </div>
      </div>
      {% endfor %}
    </div>
  {% else %}
    <div class="hologram-panel">
      <div class="panel-content">
        <p>🌟 Personal Growth 內容正在成長中...分享學習與成長的珍貴經驗！</p>
      </div>
    </div>
  {% endif %}
</div>

<div class="energy-ripple" style="height: 120px; display: flex; align-items: center; justify-content: center; margin: 3rem 0;">
  <div style="text-align: center; z-index: 10; position: relative;">
    <h3 style="color: #D4A017; margin-bottom: 1rem;">Content Discovery Complete</h3>
    <p style="color: #E8E1D3; font-size: 1rem; margin-bottom: 1.5rem;">
      探索更多精彩內容，開始你的學習之旅
    </p>
    <div>
      <a href="/posts/" class="pixel-btn-future" style="margin: 0 0.5rem;">所有文章</a>
      <a href="/about/" class="pixel-btn-future space-primary" style="margin: 0 0.5rem;">關於作者</a>
    </div>
  </div>
</div>

<script>
function searchContent() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const resultsDiv = document.getElementById('search-results');
  
  if (!query.trim()) {
    resultsDiv.style.display = 'none';
    return;
  }
  
  // 這裡可以實現實際的搜尋邏輯
  resultsDiv.innerHTML = `
    <div style="background: rgba(212, 160, 23, 0.1); padding: 1rem; border-radius: 4px; margin-top: 1rem;">
      <p style="color: #D4A017;">🔍 搜尋結果 "${query}":</p>
      <p style="color: #E8E1D3; font-size: 0.9rem;">搜尋功能正在開發中...請使用上方分類瀏覽相關內容。</p>
    </div>
  `;
  resultsDiv.style.display = 'block';
}

function quickSearch(term) {
  document.getElementById('search-input').value = term;
  searchContent();
}

// Enter key support
document.getElementById('search-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchContent();
  }
});
</script>