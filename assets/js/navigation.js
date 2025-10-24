/**
 * Navigation Interactions
 * Handles scroll state, active links, and mobile menu
 */

(function() {
  'use strict';
  
  // Scroll State Detection
  function handleScroll() {
    const masthead = document.querySelector('.masthead');
    if (!masthead) return;
    
    if (window.scrollY > 50) {
      masthead.classList.add('scrolled');
    } else {
      masthead.classList.remove('scrolled');
    }
  }
  
  // Active Link Detection
  function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.visible-links a');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      
      // Exact match or home page
      if (linkPath === currentPath || 
          (currentPath === '/' && linkPath === '/') ||
          (currentPath !== '/' && linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Mobile Menu Toggle
  function setupMobileMenu() {
    const toggle = document.querySelector('.greedy-nav__toggle');
    const menu = document.querySelector('.visible-links');
    const body = document.body;
    
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', function() {
      this.classList.toggle('close');
      menu.classList.toggle('show');
      body.classList.toggle('no-scroll');
    });
    
    // Close menu on link click
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        toggle.classList.remove('close');
        menu.classList.remove('show');
        body.classList.remove('no-scroll');
      });
    });
    
    // Close menu on outside click
    document.addEventListener('click', function(e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        toggle.classList.remove('close');
        menu.classList.remove('show');
        body.classList.remove('no-scroll');
      }
    });
  }
  
  // Prevent body scroll when mobile menu is open
  const style = document.createElement('style');
  style.textContent = `
    body.no-scroll {
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
  
  // Initialize
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', function() {
    setActiveLink();
    setupMobileMenu();
  });
  
  // Update active link on navigation
  window.addEventListener('popstate', setActiveLink);
  
})();
