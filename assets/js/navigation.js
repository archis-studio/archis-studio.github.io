/** Navigation for the custom masthead. */
(function() {
  'use strict';

  function initialize() {
    const masthead = document.querySelector('.masthead');
    if (!masthead) return;
    const menu = masthead.querySelector('.masthead__menu');
    const toggle = masthead.querySelector('.mobile-toggle');
    const links = masthead.querySelectorAll('.nav-link');

    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === window.location.pathname);
    });

    if (menu && toggle) {
      toggle.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') !== 'true';
        this.setAttribute('aria-expanded', String(expanded));
        menu.classList.toggle('show', expanded);
      });
      links.forEach(link => link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          menu.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }));
    }

    function updateScrollState() {
      masthead.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
