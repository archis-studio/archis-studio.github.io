const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const root = path.join(__dirname, '..');
const template = fs.readFileSync(path.join(root, '_includes/search-overlay.html'), 'utf8');
const sample = {
  posts: [{ title: 'C++ [入門] (API)', url: '/blog/intro/', date: '2026-10-23',
    categories: ['Software Dev'], tags: ['開發'], excerpt: '中文教學與 AI & tools' }],
  categories: [{ name: 'Software Dev', url: '/categories/software-dev/', count: 1 }]
};

async function setup(t, data = sample) {
  const markup = template.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  const dom = new JSDOM(`<button class="search-toggle">Search</button><a id="outside" href="/">Outside</a>${markup}`, {
    url: 'https://example.test/', runScripts: 'outside-only'
  });
  t.after(() => dom.window.close());
  const { window } = dom;
  const { document } = window;
  await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true }));
  const dataElement = document.createElement('script');
  dataElement.id = 'searchData';
  dataElement.type = 'application/json';
  dataElement.textContent = JSON.stringify(data);
  document.body.append(dataElement);
  window.HTMLElement.prototype.scrollIntoView = function() {};
  const errors = [];
  window.addEventListener('error', event => { errors.push(event.error); event.preventDefault(); });
  const asset = path.join(root, 'assets/js/search.js');
  window.eval(fs.readFileSync(asset, 'utf8'));
  const input = document.getElementById('searchInput');
  const overlay = document.getElementById('searchOverlay');
  const toggle = document.querySelector('.search-toggle');
  toggle.focus();
  toggle.click();
  await new Promise(resolve => setTimeout(resolve, 120));
  const query = value => { input.value = value; input.dispatchEvent(new window.Event('input')); };
  const key = (target, value, options = {}) => target.dispatchEvent(new window.KeyboardEvent('keydown', {
    key: value, bubbles: true, cancelable: true, ...options
  }));
  return { window, document, input, overlay, toggle, query, key, errors };
}

test('Chinese search and case-insensitive scoring retain literal highlighted text', async t => {
  const view = await setup(t);
  view.query('中文');
  assert.equal(view.document.querySelector('.search-result__excerpt mark').textContent, '中文');
  view.query('api');
  assert.equal(view.document.querySelector('.search-result__title mark').textContent, 'API');
});

for (const value of ['[', '(', 'C++', '&']) {
  test(`literal punctuation search: ${value}`, async t => {
    const view = await setup(t);
    view.query(value);
    assert.equal(view.errors.length, 0);
    assert.equal(view.document.querySelector('mark').textContent, value);
  });
}

test('no-result input is displayed as text, never interpreted as HTML', async t => {
  const view = await setup(t);
  const value = '<img src=x onerror="alert(1)">';
  view.query(value);
  assert.equal(view.document.querySelector('#searchResults img'), null);
  assert.ok(view.document.getElementById('searchResults').textContent.includes(value));
});

test('matching titles, excerpts and category labels remain text', async t => {
  const view = await setup(t, {
    posts: [{ ...sample.posts[0], title: 'AI <img src=x>', excerpt: 'AI <svg onload="alert(1)">', categories: ['AI <b>Tools</b>'] }],
    categories: [{ name: 'AI <img src=x>', url: '/categories/ai-tools/', count: 1 }]
  });
  view.query('AI');
  assert.equal(view.document.querySelector('#searchResults img, #searchResults svg, #searchResults b'), null);
  assert.ok(view.document.getElementById('searchResults').textContent.includes('<img src=x>'));
});

for (const value of ['', '   ', 'no-such-result']) {
  test(`replacing results clears detached keyboard targets: ${JSON.stringify(value)}`, async t => {
    const view = await setup(t);
    view.query('API');
    const link = view.document.querySelector('.search-result-item');
    let clicks = 0;
    link.addEventListener('click', event => { clicks++; event.preventDefault(); });
    view.key(view.input, 'ArrowDown');
    view.query(value);
    view.key(view.input, 'ArrowDown');
    view.key(view.input, 'Enter');
    assert.equal(clicks, 0);
  });
}

test('current result activates with ArrowDown and Enter; IME Enter does not navigate', async t => {
  const view = await setup(t);
  view.query('API');
  let clicks = 0;
  view.document.querySelector('.search-result-item').addEventListener('click', event => { clicks++; event.preventDefault(); });
  view.key(view.input, 'ArrowDown');
  view.key(view.input, 'Enter', { isComposing: true });
  assert.equal(clicks, 0);
  view.key(view.input, 'Enter');
  assert.equal(clicks, 1);
});

test('modal semantics, focus containment and Escape restoration', async t => {
  const view = await setup(t);
  assert.equal(view.overlay.getAttribute('role'), 'dialog');
  assert.equal(view.overlay.getAttribute('aria-modal'), 'true');
  assert.equal(view.overlay.getAttribute('aria-hidden'), 'false');
  assert.equal(view.document.activeElement, view.input);
  view.query('API');
  const close = view.document.querySelector('.search-close');
  const last = view.document.querySelector('.search-result-item');
  last.focus();
  view.key(last, 'Tab');
  assert.equal(view.document.activeElement, close);
  view.key(close, 'Tab', { shiftKey: true });
  assert.equal(view.document.activeElement, last);
  view.document.getElementById('outside').focus();
  assert.ok(view.overlay.contains(view.document.activeElement));
  view.key(view.input, 'Escape');
  assert.equal(view.overlay.getAttribute('aria-hidden'), 'true');
  assert.equal(view.document.activeElement, view.toggle);
});

test('close restores previous overflow and shortcut opener across repeated opens', async t => {
  const view = await setup(t);
  view.document.querySelector('.search-close').click();
  view.document.body.style.overflow = 'clip';
  const outside = view.document.getElementById('outside');
  outside.focus();
  view.key(outside, 'k', { ctrlKey: true });
  assert.equal(view.document.body.style.overflow, 'hidden');
  view.overlay.click();
  assert.equal(view.document.body.style.overflow, 'clip');
  assert.equal(view.document.activeElement, outside);
  await new Promise(resolve => setTimeout(resolve, 120));
  assert.equal(view.document.activeElement, outside);
});

test('background controls are inert only while the search modal is open', async t => {
  const view = await setup(t);
  const outside = view.document.getElementById('outside');
  assert.ok(outside.hasAttribute('inert'));
  view.document.querySelector('.search-close').click();
  assert.equal(outside.hasAttribute('inert'), false);
});

test('title matches rank first and only ten post results are rendered', async t => {
  const posts = Array.from({ length: 12 }, (_, index) => ({
    ...sample.posts[0], title: `Post ${index}`, excerpt: 'AI', url: `/blog/${index}/`, tags: null
  }));
  posts.push({ ...sample.posts[0], title: 'AI title', excerpt: '', url: '/blog/title/' });
  const view = await setup(t, { posts, categories: [] });
  view.query('AI');
  const links = view.document.querySelectorAll('.search-result-item');
  assert.equal(links.length, 10);
  assert.equal(links[0].getAttribute('href'), '/blog/title/');
  assert.ok(view.document.querySelector('.search-more').textContent.includes('3'));
});
