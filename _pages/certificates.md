---
layout: single
title: "證書收藏"
permalink: /certificates/
author_profile: true
classes: wide
---

<div class="terminal-container">
  <div class="terminal-header">
    <span class="terminal-button red"></span>
    <span class="terminal-button yellow"></span>
    <span class="terminal-button green"></span>
    <span class="terminal-title">archi@archis-studio:~/certificates</span>
  </div>
  
  <div class="terminal-body">
    <!-- Achievement Collection -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">ls achievements/</span>
    </div>
    <div class="terminal-output">
      <div class="achievement-message">
        <div class="cosmic-icon">🌌</div>
        <div class="message-text">
          <h3>Achievement Gallery Under Construction</h3>
          <p>正在整理過去的冒險證明...</p>
          <p class="hint">📜 證書與成就將陸續解鎖</p>
        </div>
      </div>
    </div>

    <!-- Preview Grid -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">preview --grid</span>
    </div>
    <div class="terminal-output">
      <div class="certificates-preview">
        <!-- Placeholder Cards -->
        <div class="cert-placeholder">
          <div class="placeholder-icon">🎓</div>
          <div class="placeholder-label">Education</div>
          <div class="placeholder-status">Soon™</div>
        </div>
        
        <div class="cert-placeholder">
          <div class="placeholder-icon">💻</div>
          <div class="placeholder-label">Technical</div>
          <div class="placeholder-status">Soon™</div>
        </div>
        
        <div class="cert-placeholder">
          <div class="placeholder-icon">☁️</div>
          <div class="placeholder-label">Cloud</div>
          <div class="placeholder-status">Soon™</div>
        </div>
        
        <div class="cert-placeholder">
          <div class="placeholder-icon">🏆</div>
          <div class="placeholder-label">Awards</div>
          <div class="placeholder-status">Soon™</div>
        </div>
        
        <div class="cert-placeholder">
          <div class="placeholder-icon">🚀</div>
          <div class="placeholder-label">Projects</div>
          <div class="placeholder-status">Soon™</div>
        </div>
        
        <div class="cert-placeholder">
          <div class="placeholder-icon">⚡</div>
          <div class="placeholder-label">Misc</div>
          <div class="placeholder-status">Soon™</div>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="terminal-line">
      <span class="prompt">$</span>
      <span class="command">stats</span>
    </div>
    <div class="terminal-output">
      <div class="cert-stats">
        <div class="stat-item">
          <span class="stat-icon">📊</span>
          <span class="stat-label">Total Achievements:</span>
          <span class="stat-value">0 / ∞</span>
        </div>
        <div class="stat-item">
          <span class="stat-icon">⏳</span>
          <span class="stat-label">Loading Progress:</span>
          <span class="stat-value">42%</span>
        </div>
        <div class="stat-item">
          <span class="stat-icon">🔮</span>
          <span class="stat-label">Next Update:</span>
          <span class="stat-value">When the stars align</span>
        </div>
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

/* Achievement Message */
.achievement-message {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(25, 25, 112, 0.1) 100%);
  border: 1px solid rgba(210, 180, 140, 0.2);
  border-radius: 12px;
  margin: 1rem 0 2rem 0;
}

.cosmic-icon {
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.message-text h3 {
  color: #d4af37;
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.message-text p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0.25rem 0;
  font-size: 1rem;
}

.message-text .hint {
  color: #8b7355;
  font-style: italic;
  margin-top: 0.75rem;
}

/* Certificates Preview Grid */
.certificates-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.cert-placeholder {
  position: relative;
  aspect-ratio: 1;
  background: linear-gradient(135deg, rgba(139, 69, 19, 0.05) 0%, rgba(25, 25, 112, 0.05) 100%);
  border: 2px dashed rgba(210, 180, 140, 0.3);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  overflow: hidden;
}

.cert-placeholder::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(210, 180, 140, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cert-placeholder:hover {
  border-color: rgba(210, 180, 140, 0.5);
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.cert-placeholder:hover::before {
  opacity: 1;
}

.placeholder-icon {
  font-size: 3rem;
  filter: grayscale(50%);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.cert-placeholder:hover .placeholder-icon {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.1);
}

.placeholder-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.placeholder-status {
  color: #8b7355;
  font-size: 0.85rem;
  font-style: italic;
  font-family: 'Courier New', monospace;
}

/* Certificate Stats */
.cert-stats {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(210, 180, 140, 0.15);
  border-radius: 8px;
  margin: 1.5rem 0;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.stat-icon {
  font-size: 1.25rem;
}

.stat-label {
  color: #8b7355;
  min-width: 160px;
}

.stat-value {
  color: #d4af37;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
  .achievement-message {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .cosmic-icon {
    font-size: 3rem;
  }
  
  .message-text h3 {
    font-size: 1.25rem;
  }
  
  .certificates-preview {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .cert-placeholder {
    padding: 1rem;
  }
  
  .placeholder-icon {
    font-size: 2.5rem;
  }
  
  .stat-item {
    flex-direction: column;
    text-align: center;
    gap: 0.25rem;
  }
  
  .stat-label {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .certificates-preview {
    grid-template-columns: 1fr;
  }
}
</style>
