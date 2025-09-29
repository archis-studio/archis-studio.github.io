// 像素風格互動效果
document.addEventListener('DOMContentLoaded', function() {
  // 進度條動畫
  const progressBar = document.querySelector('.progress-fill');
  if (progressBar) {
    setTimeout(() => {
      progressBar.style.width = '75%';
    }, 1000);
  }
  
  // 技能圖標懸停效果
  const skillIcons = document.querySelectorAll('.skill-icon');
  skillIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.classList.add('pixel-glow');
    });
    
    icon.addEventListener('mouseleave', function() {
      this.classList.remove('pixel-glow');
    });
  });
});
