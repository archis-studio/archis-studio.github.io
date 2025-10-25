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

    <!-- Journey Timeline -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">cat journey.log</span>
    </div>
    <div class="terminal-output">
      <div class="journey-container">
        
        <!-- ACTIVE Section -->
        <div class="journey-section active-section">
          <div class="section-header">
            <span class="section-icon">⚡</span>
            <span class="section-title">ACTIVE</span>
            <span class="section-subtitle">Current Career Path</span>
          </div>
          
          <div class="journey-item">
            <div class="item-timeline">2022.07 - Present</div>
            <div class="item-content">
              <div class="item-title">Software Engineer</div>
              <div class="item-company">[Company Name]</div>
              <div class="item-location">📍 Taipei, Taiwan</div>
            </div>
            <div class="item-exp">+1500 EXP</div>
          </div>
          
          <!-- Add more active items here using the same structure -->
          
        </div>

        <!-- ARCHIVE Section -->
        <div class="journey-section archive-section">
          <div class="section-header">
            <span class="section-icon">📦</span>
            <span class="section-title">ARCHIVE</span>
            <span class="section-subtitle">Past Experiences & Education</span>
          </div>
          
          <div class="journey-item">
            <div class="item-timeline">2020.09 - 2022.06</div>
            <div class="item-content">
              <div class="item-title">Master's Degree in Computer Science</div>
              <div class="item-company">National Yang Ming Chiao Tung University</div>
              <div class="item-location">📍 Hsinchu, Taiwan</div>
            </div>
            <div class="item-exp">+1000 EXP</div>
          </div>

          <div class="journey-item">
            <div class="item-timeline">2016.09 - 2020.06</div>
            <div class="item-content">
              <div class="item-title">Bachelor's Degree</div>
              <div class="item-company">[University Name]</div>
              <div class="item-location">📍 Taiwan</div>
            </div>
            <div class="item-exp">+800 EXP</div>
          </div>
          
          <!-- 
            ✨ Add New Experience:
            Copy this template and modify:
            
            <div class="journey-item">
              <div class="item-timeline">YYYY.MM - YYYY.MM</div>
              <div class="item-content">
                <div class="item-title">Your Job Title</div>
                <div class="item-company">Company Name</div>
                <div class="item-location">📍 Location</div>
              </div>
              <div class="item-exp">+XXX EXP</div>
            </div>
          -->
          
        </div>
        
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


