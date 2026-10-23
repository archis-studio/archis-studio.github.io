/* Search portal: literal matching, safe text rendering and modal keyboard support. */
(function() {
  'use strict';

  function initialize() {
    const overlay = document.getElementById('searchOverlay');
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    const dataElement = document.getElementById('searchData');
    const toggle = document.querySelector('.search-toggle');
    if (!overlay || !input || !results || !dataElement || !toggle) return;

    const data = JSON.parse(dataElement.textContent);
    const status = document.getElementById('searchStatus');
    const welcome = results.firstElementChild.cloneNode(true);
    const close = overlay.querySelector('.search-close');
    let items = [];
    let selectedIndex = -1;
    let opener = null;
    let previousOverflow = '';
    let inertElements = [];

    function element(tag, className, text) {
      const node = document.createElement(tag);
      node.className = className;
      if (text != null) node.textContent = text;
      return node;
    }

    function highlight(text, query) {
      const fragment = document.createDocumentFragment();
      const pattern = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      let position = 0;
      for (const match of String(text).matchAll(pattern)) {
        fragment.append(document.createTextNode(text.slice(position, match.index)));
        fragment.append(element('mark', '', match[0]));
        position = match.index + match[0].length;
      }
      fragment.append(document.createTextNode(text.slice(position)));
      return fragment;
    }

    function resetSelection() {
      items = [];
      selectedIndex = -1;
    }

    function showWelcome() {
      resetSelection();
      const content = welcome.cloneNode(true);
      content.querySelector('#totalPosts').textContent = data.posts.length;
      content.querySelector('#totalCategories').textContent = data.categories.length;
      results.replaceChildren(content);
      status.textContent = '';
    }

    function isOpen() {
      return overlay.classList.contains('active');
    }

    function openSearch(event) {
      event.preventDefault();
      if (isOpen()) return;
      opener = document.activeElement;
      previousOverflow = document.body.style.overflow;
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      for (let branch = overlay; branch.parentElement; branch = branch.parentElement) {
        Array.from(branch.parentElement.children).forEach(sibling => {
          if (sibling !== branch && !sibling.hasAttribute('inert')) {
            sibling.setAttribute('inert', '');
            inertElements.push(sibling);
          }
        });
        if (branch.parentElement === document.body) break;
      }
      input.focus();
    }

    function closeSearch() {
      if (!isOpen()) return;
      overlay.classList.remove('active');
      document.body.style.overflow = previousOverflow;
      inertElements.forEach(node => node.removeAttribute('inert'));
      inertElements = [];
      input.value = '';
      showWelcome();
      toggle.setAttribute('aria-expanded', 'false');
      (opener && opener.isConnected ? opener : toggle).focus();
      overlay.setAttribute('aria-hidden', 'true');
    }

    function resultLink(item, type, query) {
      const link = element('a', 'search-result-item');
      link.href = item.url;
      link.dataset.type = type;
      const content = element('div', 'search-result__content');
      const title = element('div', 'search-result__title');
      title.append(highlight(type === 'category' ? item.name : item.title, query));
      content.append(title);
      if (type === 'post') {
        const excerpt = element('div', 'search-result__excerpt');
        excerpt.append(highlight(item.excerpt || '', query));
        content.append(excerpt);
      }
      const meta = element('div', 'search-result__meta');
      if (type === 'category') {
        meta.textContent = `${item.count} 篇文章`;
      } else {
        meta.append(element('span', 'meta-date', item.date));
        (item.categories || []).forEach(category => meta.append(element('span', 'meta-tag', category)));
      }
      content.append(meta);
      link.append(element('div', 'search-result__icon', type === 'category' ? '📁' : '📄'), content);
      return link;
    }

    function performSearch() {
      const query = input.value.trim();
      if (!query) {
        showWelcome();
        return;
      }
      resetSelection();
      const lowerQuery = query.toLowerCase();
      const matches = text => String(text || '').toLowerCase().includes(lowerQuery);
      const posts = data.posts.map(post => {
        const score = (matches(post.title) ? 10 : 0) + (matches(post.excerpt) ? 5 : 0) +
          ((post.categories || []).some(matches) ? 8 : 0) + ((post.tags || []).some(matches) ? 6 : 0);
        return { ...post, score };
      }).filter(post => post.score > 0).sort((a, b) => b.score - a.score);
      const categories = data.categories.filter(category => matches(category.name));
      results.replaceChildren();
      status.textContent = `找到 ${posts.length} 篇文章、${categories.length} 個分類`;

      if (!posts.length && !categories.length) {
        const message = element('div', 'search-no-results');
        message.append(element('div', 'search-no-results__icon', '🔭'),
          element('p', '', `找不到「${query}」的相關結果`), element('small', '', '試試其他關鍵字'));
        results.append(message);
        return;
      }

      function section(title, entries, type) {
        if (!entries.length) return;
        const container = element('div', 'search-section');
        container.append(element('h3', 'search-section__title', title));
        entries.forEach(item => container.append(resultLink(item, type, query)));
        results.append(container);
      }
      section('🏷️ 分類', categories, 'category');
      section('📝 文章', posts.slice(0, 10), 'post');
      if (posts.length > 10) results.append(element('div', 'search-more', `還有 ${posts.length - 10} 個結果...`));
      items = Array.from(results.querySelectorAll('.search-result-item'));
    }

    toggle.setAttribute('aria-controls', 'searchOverlay');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', openSearch);
    close.addEventListener('click', closeSearch);
    overlay.addEventListener('click', event => {
      if (event.target === overlay) closeSearch();
    });
    input.addEventListener('input', performSearch);
    input.addEventListener('keydown', event => {
      if (event.isComposing || event.keyCode === 229) return;
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        selectedIndex = Math.max(-1, Math.min(items.length - 1, selectedIndex + direction));
        items.forEach((item, index) => item.classList.toggle('selected', index === selectedIndex));
        if (selectedIndex >= 0) items[selectedIndex].scrollIntoView({ block: 'nearest' });
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (selectedIndex >= 0 && results.contains(items[selectedIndex])) items[selectedIndex].click();
      }
    });

    document.addEventListener('focusin', event => {
      if (isOpen() && !overlay.contains(event.target)) input.focus();
    });
    document.addEventListener('keydown', event => {
      if (event.isComposing || event.keyCode === 229) return;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (isOpen()) closeSearch();
        else openSearch(event);
      } else if (isOpen() && event.key === 'Escape') {
        event.preventDefault();
        closeSearch();
      } else if (isOpen() && event.key === 'Tab') {
        const focusable = Array.from(overlay.querySelectorAll('button, input, a[href]'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
    showWelcome();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
