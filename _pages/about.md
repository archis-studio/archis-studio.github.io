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
        <div class="player-header">
          <div class="player-name-level">
            <span class="player-name">ARCHI CHEN</span>
            <span class="player-level">LV 27</span>
          </div>
          <div class="player-class">
            <span class="class-badge">⚔️ Software Engineer</span>
          </div>
        </div>
        
        <div class="player-stats-grid">
          <div class="stat-box">
            <div class="stat-label">Location</div>
            <div class="stat-value">📍 Taipei, TW</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Education</div>
            <div class="stat-value">🎓 NYCU CS</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Status</div>
            <div class="stat-value status-active">● ACTIVE</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Total EXP</div>
            <div class="stat-value">✨ 3,300</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quest History -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">quest --history</span>
    </div>
    <div class="terminal-output">
      <div class="quest-list">
        <div class="quest-item main-quest">
          <div class="quest-icon">⚔️</div>
          <div class="quest-details">
            <div class="quest-meta">
              <span class="quest-type">MAIN QUEST</span>
              <span class="quest-period">2022.7 - Present</span>
            </div>
            <div class="quest-title">Software Engineer</div>
            <div class="quest-location">@ [公司名稱] · Taipei</div>
          </div>
          <div class="quest-reward">
            <div class="exp-badge">+1500 EXP</div>
            <div class="quest-status">IN PROGRESS</div>
          </div>
        </div>

        <div class="quest-item side-quest">
          <div class="quest-icon">📚</div>
          <div class="quest-details">
            <div class="quest-meta">
              <span class="quest-type">SIDE QUEST</span>
              <span class="quest-period">2020.9 - 2022.6</span>
            </div>
            <div class="quest-title">Master's Degree (CS)</div>
            <div class="quest-location">@ NYCU · Hsinchu</div>
          </div>
          <div class="quest-reward">
            <div class="exp-badge">+1000 EXP</div>
            <div class="quest-status completed">COMPLETED</div>
          </div>
        </div>

        <div class="quest-item tutorial-quest">
          <div class="quest-icon">🎯</div>
          <div class="quest-details">
            <div class="quest-meta">
              <span class="quest-type">TUTORIAL</span>
              <span class="quest-period">2016.9 - 2020.6</span>
            </div>
            <div class="quest-title">Bachelor's Degree</div>
            <div class="quest-location">@ [學校名稱]</div>
          </div>
          <div class="quest-reward">
            <div class="exp-badge">+800 EXP</div>
            <div class="quest-status completed">COMPLETED</div>
          </div>
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


