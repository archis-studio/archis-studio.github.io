const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const root = path.join(__dirname, '..');
const postSource = fs.readFileSync(path.join(root, '_layouts/post.html'), 'utf8')
  .split('<!-- Gaming Features & TOC Script -->')[1].match(/<script>([\s\S]*?)<\/script>/)[1];
const navigationSource = fs.readFileSync(path.join(root, 'assets/js/navigation.js'), 'utf8');

async function masthead(t, { baseurl = '', scrollY = 0 } = {}) {
  const dom = new JSDOM(`<div class="masthead"><nav class="masthead__menu"><ul class="nav-links">
    <li><a class="nav-link" href="${baseurl}/">Home</a></li>
    <li><a class="nav-link" href="${baseurl}/posts/">Posts</a></li>
    </ul></nav><button class="mobile-toggle" aria-expanded="false">Menu</button></div>`, {
    url: `https://example.test${baseurl}/posts/`, runScripts: 'outside-only'
  });
  t.after(() => dom.window.close());
  const { window } = dom;
  Object.defineProperty(window, 'innerWidth', { value: 375 });
  Object.defineProperty(window, 'scrollY', { get: () => scrollY });
  window.document.addEventListener('click', event => {
    if (event.target.closest('a')) event.preventDefault();
  });
  window.eval(navigationSource);
  await new Promise(resolve => window.document.addEventListener('DOMContentLoaded', resolve, { once: true }));
  return {
    document: window.document,
    scroll(value) { scrollY = value; window.dispatchEvent(new window.Event('scroll')); }
  };
}

test('external navigation script toggles the current mobile menu once and closes on link click', async t => {
  const view = await masthead(t);
  const toggle = view.document.querySelector('.mobile-toggle');
  const menu = view.document.querySelector('.masthead__menu');
  toggle.click();
  assert.equal(toggle.getAttribute('aria-expanded'), 'true');
  assert.ok(menu.classList.contains('show'));
  toggle.click();
  assert.equal(toggle.getAttribute('aria-expanded'), 'false');
  assert.equal(menu.classList.contains('show'), false);
  toggle.click();
  menu.querySelector('a').click();
  assert.equal(toggle.getAttribute('aria-expanded'), 'false');
  assert.equal(menu.classList.contains('show'), false);
});

test('external navigation marks the current link with a configured baseurl', async t => {
  const view = await masthead(t, { baseurl: '/preview' });
  assert.deepEqual(Array.from(view.document.querySelectorAll('.nav-link.active')).map(link => link.textContent), ['Posts']);
});

test('masthead scroll state initializes at a restored scroll position and updates', async t => {
  const view = await masthead(t, { scrollY: 100 });
  const header = view.document.querySelector('.masthead');
  assert.ok(header.classList.contains('scrolled'));
  view.scroll(0);
  assert.equal(header.classList.contains('scrolled'), false);
  view.scroll(100);
  assert.ok(header.classList.contains('scrolled'));
});

async function toc(t, headings, hash = '') {
  const dom = new JSDOM(`<div id="heading-1"></div><article class="post-content">${headings}</article><aside class="post-toc"><nav id="toc"></nav></aside>`, {
    url: `https://example.test/blog/example/${hash}`, runScripts: 'outside-only'
  });
  t.after(() => dom.window.close());
  dom.window.matchMedia = () => Object.assign(new dom.window.EventTarget(), { matches: false });
  dom.window.eval(postSource);
  await new Promise(resolve => dom.window.document.addEventListener('DOMContentLoaded', resolve, { once: true }));
  return dom.window.document;
}

test('TOC preserves existing Markdown and custom IDs, including the incoming hash target', async t => {
  const document = await toc(t, '<h2 id="中文章節">Intro</h2><h3 id="custom-anchor">Details</h3>', '#custom-anchor');
  assert.ok(document.getElementById('custom-anchor'));
  assert.ok(document.getElementById('中文章節'));
  const destinations = Array.from(document.querySelectorAll('.toc-link')).map(link => decodeURIComponent(link.hash.slice(1)));
  assert.deepEqual(destinations, ['中文章節', 'custom-anchor']);
});

test('generated heading IDs avoid existing document IDs', async t => {
  const document = await toc(t, '<h2 id="intro">Intro</h2><h3>Missing ID</h3><h4>Another</h4>');
  const ids = Array.from(document.querySelectorAll('[id]')).map(element => element.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const link of document.querySelectorAll('.toc-link')) {
    assert.ok(document.getElementById(decodeURIComponent(link.hash.slice(1))));
  }
});

test('TOC renders heading text literally, including code-like HTML and quotes', async t => {
  const document = await toc(t, '<h2 id="safe">Use &lt;img src=x onerror="alert(1)"&gt; &amp; API</h2>');
  const link = document.querySelector('.toc-link');
  assert.equal(link.querySelector('img'), null);
  assert.equal(link.textContent, 'Use <img src=x onerror="alert(1)"> & API');
});

test('TOC is hidden when an article has no headings', async t => {
  const document = await toc(t, '<p>Article</p>');
  assert.equal(document.querySelector('.post-toc').style.display, 'none');
});

const tagCloudSource = fs.readFileSync(path.join(root, '_includes/tag-cloud-compact.html'), 'utf8')
  .match(/<script>([\s\S]*?)<\/script>/)[1];

async function tagCloud(t, prefix) {
  const tags = [['gamma', 7], ['AlphaAI', 2], ['zebra', 10], ['Betaai', 3]];
  const dom = new JSDOM(`<span id="${prefix}-total-tags">4</span>
    <span id="${prefix}-total-posts">12</span>
    <input id="${prefix}-tag-search">
    <button id="${prefix}-clear-search" style="display:none">Clear</button>
    <button class="sort-btn-compact active" data-sort="popular" data-group="${prefix}">Popular</button>
    <button class="sort-btn-compact" data-sort="name" data-group="${prefix}">Name</button>
    <div id="${prefix}-tag-cloud">${tags.map(([name, count]) =>
      `<a class="tag-cloud-item-compact" data-group="${prefix}" data-tag="${name}" data-count="${count}">${name}</a>`
    ).join('')}</div>`, { runScripts: 'outside-only' });
  t.after(() => dom.window.close());
  dom.window.eval(tagCloudSource.replaceAll('{{ include.id_prefix }}', prefix));
  await new Promise(resolve => dom.window.document.addEventListener('DOMContentLoaded', resolve, { once: true }));
  const document = dom.window.document;
  const input = document.getElementById(`${prefix}-tag-search`);
  return {
    document,
    input,
    clear: document.getElementById(`${prefix}-clear-search`),
    items() { return Array.from(document.querySelectorAll('.tag-cloud-item-compact')); },
    search(query) {
      input.value = query;
      input.dispatchEvent(new dom.window.Event('input'));
    },
    sort(order) { document.querySelector(`[data-sort="${order}"]`).click(); },
    assertCounts() {
      assert.equal(document.getElementById(`${prefix}-total-tags`).textContent, '4');
      assert.equal(document.getElementById(`${prefix}-total-posts`).textContent, '12');
    }
  };
}

for (const prefix of ['posts', 'tags']) {
  test(`${prefix} tag search matches case-insensitive substrings and handles no results`, async t => {
    const view = await tagCloud(t, prefix);
    for (const [query, expected] of [
      ['AI', ['AlphaAI', 'Betaai']],
      ['phaa', ['AlphaAI']],
      ['__missing__', []]
    ]) {
      view.search(query);
      const visible = view.items().filter(item => item.style.display !== 'none');
      assert.deepEqual(visible.map(item => item.dataset.tag), expected);
      for (const item of view.items()) {
        assert.equal(item.classList.contains('search-match'), expected.includes(item.dataset.tag));
      }
      assert.equal(view.clear.style.display, 'block');
      view.assertCounts();
    }
  });

  test(`${prefix} tag clear restores all results and returns focus to search`, async t => {
    const view = await tagCloud(t, prefix);
    view.search('__missing__');
    view.clear.click();
    assert.equal(view.input.value, '');
    assert.deepEqual(view.items().filter(item => item.style.display !== 'none').map(item => item.dataset.tag),
      ['gamma', 'AlphaAI', 'zebra', 'Betaai']);
    assert.equal(view.clear.style.display, 'none');
    assert.equal(view.document.activeElement, view.input);
    view.assertCounts();
  });

  test(`${prefix} tag sorting uses numeric popularity and names without resetting the filter or counts`, async t => {
    const view = await tagCloud(t, prefix);
    view.search('AI');
    for (const [order, expected] of [
      ['popular', ['zebra', 'gamma', 'Betaai', 'AlphaAI']],
      ['name', ['AlphaAI', 'Betaai', 'gamma', 'zebra']]
    ]) {
      view.sort(order);
      assert.deepEqual(view.items().map(item => item.dataset.tag), expected);
      assert.deepEqual(view.items().filter(item => item.style.display !== 'none').map(item => item.dataset.tag),
        expected.filter(name => ['AlphaAI', 'Betaai'].includes(name)));
      assert.equal(view.input.value, 'AI');
      assert.deepEqual(Array.from(view.document.querySelectorAll('.sort-btn-compact.active')).map(button => button.dataset.sort), [order]);
      view.assertCounts();
    }
  });
}
