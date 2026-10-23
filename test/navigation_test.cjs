const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const root = path.join(__dirname, '..');
const postSource = fs.readFileSync(path.join(root, '_layouts/post.html'), 'utf8')
  .split('<!-- Gaming Features & TOC Script -->')[1].match(/<script>([\s\S]*?)<\/script>/)[1];

async function toc(t, headings, hash = '') {
  const dom = new JSDOM(`<div id="heading-1"></div><article class="post-content">${headings}</article><aside class="post-toc"><nav id="toc"></nav></aside>`, {
    url: `https://example.test/blog/example/${hash}`, runScripts: 'outside-only'
  });
  t.after(() => dom.window.close());
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

test('tag interactions preserve the server-rendered unique article count', async t => {
  const dom = new JSDOM(`<span id="tags-total-tags">2</span><span id="tags-total-posts">1</span>
    <div id="tags-tag-cloud"><a class="tag-cloud-item-compact" data-group="tags" data-tag="AI" data-count="1">AI</a>
    <a class="tag-cloud-item-compact" data-group="tags" data-tag="ChatGPT" data-count="1">ChatGPT</a></div>`, { runScripts: 'outside-only' });
  t.after(() => dom.window.close());
  const source = fs.readFileSync(path.join(root, '_includes/tag-cloud-compact.html'), 'utf8')
    .match(/<script>([\s\S]*?)<\/script>/)[1].replaceAll('{{ include.id_prefix }}', 'tags');
  dom.window.eval(source);
  await new Promise(resolve => dom.window.document.addEventListener('DOMContentLoaded', resolve, { once: true }));
  assert.equal(dom.window.document.getElementById('tags-total-posts').textContent, '1');
});
