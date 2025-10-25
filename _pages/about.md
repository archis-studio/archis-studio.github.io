---
layout: single
title: "關於我"
permalink: /about/
author_profile: true
classes: wide
---

<div class="terminal-container">
  <div class="terminal-header">
    <span class="terminal-button red"></span>
    <span class="terminal-button yellow"></span>
    <span class="terminal-button green"></span>
    <span class="terminal-title">archi@archis-studio:~</span>
  </div>
  
  <div class="terminal-body">
    <!-- Player Card -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">player --info</span>
    </div>
    <div class="terminal-output">
      <div class="player-card">
        <div class="card-shine"></div>
        <div class="player-header">
          <div class="player-name-level">
            <span class="player-name">Archi</span>
            <span class="player-level">LV 31</span>
          </div>
          <div class="player-class">
            <span class="class-badge">⚔️ Software Engineer</span>
          </div>
        </div>
        
        <div class="player-stats-grid">
          <div class="stat-box">
            <div class="stat-label">Location</div>
            <div class="stat-value">📍 New Taipei, TW</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Education</div>
            <div class="stat-value">🎓 NYCU CS</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Status</div>
            <div class="stat-value status-active">● SURVIVING</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Total EXP</div>
            <div class="stat-value">✨ 3,300</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Log -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">cat experience.log</span>
    </div>
    <div class="terminal-output">
      <div class="journey-container">
        
        <!-- Journey Item - Active -->
        <div class="journey-item active">
          <div class="item-status">
            <span class="status-indicator active-indicator">● ACTIVE</span>
            <span class="item-exp">+1500 EXP</span>
          </div>
          <div class="item-timeline">2025.09 - Present</div>
          <div class="item-header">
            <div class="item-title">AIoT Backend Engineer</div>
            <div class="item-badge">⚔️ Current</div>
          </div>
          <div class="item-meta">
            <span class="item-company">🏢 Mobius-Nexsys</span>
            <span class="item-location">📍 Taipei, Taiwan</span>
          </div>
        </div>
        
        <!-- Journey Item - Archived -->
        <div class="journey-item archived">
          <div class="item-status">
            <span class="status-indicator archived-indicator">◆ ARCHIVED</span>
            <span class="item-exp">+1000 EXP</span>
          </div>
          <div class="item-timeline">2025.04 - 2025.08</div>
          <div class="item-header">
            <div class="item-title">Cross-Functional Explorer</div>
            <div class="item-badge">🎯 Venture</div>
          </div>
          <div class="item-meta">
            <span class="item-company">🏢 Venture</span>
            <span class="item-location">📍 Free Market, Taiwan</span>
          </div>
        </div>
        
        <div class="journey-item archived">
          <div class="item-status">
            <span class="status-indicator archived-indicator">◆ ARCHIVED</span>
            <span class="item-exp">+1000 EXP</span>
          </div>
          <div class="item-timeline">2023.03 - 2025.03</div>
          <div class="item-header">
            <div class="item-title">Venture Builder</div>
            <div class="item-badge">🎯 Venture</div>
          </div>
          <div class="item-meta">
            <span class="item-company">🏢 Venture</span>
            <span class="item-location">📍 Free Market, Taiwan</span>
          </div>
        </div>
        
        <div class="journey-item archived">
          <div class="item-status">
            <span class="status-indicator archived-indicator">◆ ARCHIVED</span>
            <span class="item-exp">+1000 EXP</span>
          </div>
          <div class="item-timeline">2020.09 - 2022.06</div>
          <div class="item-header">
            <div class="item-title">Master's Degree in Computer Science</div>
            <div class="item-badge">🎓 Education</div>
          </div>
          <div class="item-meta">
            <span class="item-company">🏢 National Yang Ming Chiao Tung University</span>
            <span class="item-location">📍 Hsinchu, Taiwan</span>
          </div>
        </div>

        <div class="journey-item archived">
          <div class="item-status">
            <span class="status-indicator archived-indicator">◆ ARCHIVED</span>
            <span class="item-exp">+800 EXP</span>
          </div>
          <div class="item-timeline">2016.09 - 2020.06</div>
          <div class="item-header">
            <div class="item-title">Bachelor's Degree</div>
            <div class="item-badge">🎓 Education</div>
          </div>
          <div class="item-meta">
            <span class="item-company">🏢 [University Name]</span>
            <span class="item-location">📍 Taiwan</span>
          </div>
        </div>
        
        <!-- 
          ✨ Add New Experience - Simple Template:
          Copy this block and modify the content:
          
          <div class="journey-item active">  <!-- Use 'active' or 'archived' -->
            <div class="item-status">
              <span class="status-indicator active-indicator">● ACTIVE</span>
              <span class="item-exp">+XXX EXP</span>
            </div>
            <div class="item-timeline">YYYY.MM - Present/YYYY.MM</div>
            <div class="item-header">
              <div class="item-title">Your Job Title</div>
              <div class="item-badge">⚔️ Your Badge</div>
            </div>
            <div class="item-meta">
              <span class="item-company">🏢 Company Name</span>
              <span class="item-location">📍 Location</span>
            </div>
          </div>
        -->
        
      </div>
    </div>

    <!-- Skills -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">skills --display</span>
    </div>
    <div class="terminal-output">
      <div class="skills-container">
        <div class="skill-row">
          <div class="skill-icon">🐍</div>
          <div class="skill-info">
            <div class="skill-name">Python</div>
            <div class="skill-bar-container">
              <div class="skill-bar">
                <div class="skill-fill" data-skill="90"></div>
              </div>
              <span class="skill-level">90</span>
            </div>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-icon">⚡</div>
          <div class="skill-info">
            <div class="skill-name">JavaScript</div>
            <div class="skill-bar-container">
              <div class="skill-bar">
                <div class="skill-fill" data-skill="85"></div>
              </div>
              <span class="skill-level">85</span>
            </div>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-icon">⚛️</div>
          <div class="skill-info">
            <div class="skill-name">React</div>
            <div class="skill-bar-container">
              <div class="skill-bar">
                <div class="skill-fill" data-skill="80"></div>
              </div>
              <span class="skill-level">80</span>
            </div>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-icon">🐙</div>
          <div class="skill-info">
            <div class="skill-name">Git</div>
            <div class="skill-bar-container">
              <div class="skill-bar">
                <div class="skill-fill" data-skill="85"></div>
              </div>
              <span class="skill-level">85</span>
            </div>
          </div>
        </div>

        <div class="skill-row">
          <div class="skill-icon">🐳</div>
          <div class="skill-info">
            <div class="skill-name">Docker</div>
            <div class="skill-bar-container">
              <div class="skill-bar">
                <div class="skill-fill" data-skill="75"></div>
              </div>
              <span class="skill-level">75</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Achievements -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">achievements</span>
    </div>
    <div class="terminal-output">
      <div class="achievements-grid">
        <div class="achievement unlocked">
          <div class="achievement-icon">🎓</div>
          <div class="achievement-name">Master Scholar</div>
        </div>
        <div class="achievement unlocked">
          <div class="achievement-icon">💻</div>
          <div class="achievement-name">Code Warrior</div>
        </div>
        <div class="achievement unlocked">
          <div class="achievement-icon">🚀</div>
          <div class="achievement-name">Launcher</div>
        </div>
        <div class="achievement unlocked">
          <div class="achievement-icon">📝</div>
          <div class="achievement-name">Blogger</div>
        </div>
        <div class="achievement unlocked">
          <div class="achievement-icon">🏆</div>
          <div class="achievement-name">Problem Solver</div>
        </div>
        <div class="achievement unlocked">
          <div class="achievement-icon">⚡</div>
          <div class="achievement-name">Fast Learner</div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">contact</span>
    </div>
    <div class="terminal-output">
      <div class="contact-grid">
        <a href="mailto:magic83w@gmail.com" class="contact-item">
          <span class="contact-icon">📧</span>
          <span class="contact-text">magic83w@gmail.com</span>
        </a>
        <a href="https://github.com/magicxcr7" target="_blank" class="contact-item">
          <span class="contact-icon">🐙</span>
          <span class="contact-text">@magicxcr7</span>
        </a>
      </div>
    </div>

    <!-- Cursor -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="cursor">▊</span>
    </div>
  </div>
</div>

<style>
.terminal-container {
  max-width: 900px;
  margin: 2rem auto;
}
</style>


