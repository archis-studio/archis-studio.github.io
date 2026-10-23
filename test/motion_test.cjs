const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const root = path.join(__dirname, '..');
const heroSource = fs.readFileSync(path.join(root, '_includes/page__hero.html'), 'utf8')
  .split('<!-- Matrix Rain Script -->')[1].match(/<script>([\s\S]*?)<\/script>/)[1];
const postSource = fs.readFileSync(path.join(root, '_layouts/post.html'), 'utf8')
  .split('<!-- Gaming Features & TOC Script -->')[1].match(/<script>([\s\S]*?)<\/script>/)[1];

function preference(window, reduced) {
  const media = new window.EventTarget();
  media.matches = reduced;
  window.matchMedia = () => media;
  return enabled => {
    media.matches = enabled;
    media.dispatchEvent(new window.Event('change'));
  };
}

function hero(t, { reduced = false, visible = true } = {}) {
  const dom = new JSDOM('<canvas id="matrixCanvas"></canvas>', { runScripts: 'outside-only' });
  t.after(() => dom.window.close());
  const { window } = dom;
  const setReduced = preference(window, reduced);
  const canvas = window.document.querySelector('canvas');
  let width = 140;
  let inView = visible;
  let hidden = false;
  let observerCallback;
  let drawing = 0;
  canvas.getContext = () => ({ fillRect() {}, clearRect() {}, fillText() { drawing++; } });
  Object.defineProperty(canvas, 'offsetWidth', { get: () => width });
  Object.defineProperty(canvas, 'offsetHeight', { get: () => 200 });
  canvas.getBoundingClientRect = () => ({ top: inView ? 0 : -500, bottom: inView ? 200 : -300, left: 0, right: width });
  Object.defineProperty(window.document, 'hidden', { get: () => hidden });
  window.IntersectionObserver = class {
    constructor(callback) { observerCallback = callback; }
    observe() {}
  };
  // Simulate the browser scheduling/canvas boundaries; assertions concern rendered output.
  const intervals = new Map();
  let nextId = 1;
  window.setInterval = callback => { const id = nextId++; intervals.set(id, callback); return id; };
  window.clearInterval = id => intervals.delete(id);
  window.eval(heroSource);
  return {
    window, setReduced,
    draw() { const before = drawing; for (const callback of [...intervals.values()]) callback(); return drawing - before; },
    setHidden(value) { hidden = value; window.document.dispatchEvent(new window.Event('visibilitychange')); },
    setVisible(value) {
      inView = value;
      observerCallback([{ target: canvas, isIntersecting: value }]);
    },
    resize(value) { width = value; window.dispatchEvent(new window.Event('resize')); }
  };
}

test('Matrix stops drawing offscreen or in a hidden tab, then resumes once', t => {
  const view = hero(t);
  assert.equal(view.draw(), 10);
  view.setVisible(false);
  assert.equal(view.draw(), 0);
  view.setHidden(true);
  view.setVisible(true);
  assert.equal(view.draw(), 0);
  view.setHidden(false);
  assert.equal(view.draw(), 10);
  view.setHidden(false);
  assert.equal(view.draw(), 10);
});

test('Matrix respects reduced motion initially and when the preference changes', t => {
  const view = hero(t, { reduced: true });
  assert.equal(view.draw(), 0);
  view.setReduced(false);
  assert.equal(view.draw(), 10);
  view.setReduced(true);
  assert.equal(view.draw(), 0);
});

test('Matrix rebuilds columns after resizing', t => {
  const view = hero(t);
  view.resize(280);
  assert.equal(view.draw(), 20);
});

test('Matrix initially offscreen waits until the observer reports visibility', t => {
  const view = hero(t, { visible: false });
  assert.equal(view.draw(), 0);
  view.setVisible(true);
  assert.equal(view.draw(), 10);
});

async function article(t, reduced) {
  const dom = new JSDOM('<article class="post-content"><h2 id="intro">Intro</h2><pre><code>sample</code></pre></article><aside class="post-toc"><nav id="toc"></nav></aside>', {
    runScripts: 'outside-only'
  });
  t.after(() => dom.window.close());
  const { window } = dom;
  const setReduced = preference(window, reduced);
  let scrollTop = 0;
  let audioCalls = 0;
  let copiedText;
  Object.defineProperty(window, 'pageYOffset', { get: () => scrollTop });
  Object.defineProperty(window, 'innerHeight', { value: 800 });
  Object.defineProperty(window.document.documentElement, 'scrollHeight', { value: 3000 });
  window.AudioContext = class { constructor() { audioCalls++; throw new Error('Audio must not start automatically'); } };
  window.console.log = () => {};
  window.navigator.clipboard = { writeText: async value => { copiedText = value; } };
  window.eval(postSource);
  await new Promise(resolve => window.document.addEventListener('DOMContentLoaded', resolve, { once: true }));
  return {
    window, document: window.document, setReduced,
    scroll(value) { scrollTop = value; window.dispatchEvent(new window.Event('scroll')); },
    audioCalls: () => audioCalls,
    copiedText: () => copiedText
  };
}

test('reduced-motion articles keep TOC and copy feedback without decorative particles', async t => {
  const view = await article(t, true);
  assert.equal(view.document.querySelector('.scroll-particles'), null);
  assert.ok(view.document.querySelector('.toc-link'));
  view.document.querySelector('.code-copy-btn').click();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(view.copiedText(), 'sample');
  assert.equal(view.document.querySelector('.xp-float'), null);
  assert.ok(view.document.querySelector('.code-copy-btn').classList.contains('copied'));
});

test('particles are removed and recreated when motion preference changes', async t => {
  const view = await article(t, false);
  view.scroll(150);
  assert.equal(view.document.querySelector('.scroll-particles').style.display, 'block');
  view.setReduced(true);
  assert.equal(view.document.querySelector('.scroll-particles'), null);
  view.setReduced(false);
  view.setReduced(false);
  assert.equal(view.document.querySelectorAll('.scroll-particles').length, 1);
});

for (const reduced of [false, true]) {
  test(`reading completion stays silent and displays one text notice (reduced=${reduced})`, async t => {
    const view = await article(t, reduced);
    view.scroll(2200);
    view.scroll(2300);
    assert.equal(view.audioCalls(), 0);
    assert.equal(view.document.querySelectorAll('.achievement-toast').length, 1);
    assert.ok(view.document.querySelector('.achievement-toast').textContent.includes('Read the entire article'));
  });
}
