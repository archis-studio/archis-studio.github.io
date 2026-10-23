# Search Reliability Implementation Plan
# Version 1.0.1 | Updated: 2026-10-24

> **歷史計畫：實作已完成** · 標示日期：2026-10-24
>
> 下方保留當時的範圍、測試與限制；未 commit／push、待 CI／瀏覽器驗證等狀態只描述當時，不代表目前部署結果或現在的授權。現行操作：[DEVELOPMENT.md](../../../DEVELOPMENT.md) · [LAYOUT_SPEC.md](../../../docs/LAYOUT_SPEC.md)。

**Goal:** Fix literal search, safe rendering, category destinations and modal keyboard behavior without changing search appearance or deployment.
**Spec:** User approved the five search improvements proposed in the conversation and asked to continue after pushing phase 1.
**Approach:** Keep the current markup/styles; extract interaction code to `assets/js/search.js`. Use text nodes and mark elements for literal matches; serialize search data as inert JSON. Prefer category page URLs and slugify only the fallback.
**Constraints:** No commits/pushes. No Ruby dependency upgrades or Pages settings changes. Add only test-time Node dependencies under the already excluded test directory.

## Steps

- [x] Add DOM regression tests for Chinese/literal punctuation, HTML input/content, stale selections, focus wrapping/restoration and IME Enter; run against old code to confirm failures.
- [x] Fix data URLs/serialization and implement safe rendering plus modal behavior in external JavaScript.
- [x] Check rendered Liquid category URLs, baseurl handling and JSON script safety with Ruby fixtures.
- [x] Run Node/Ruby checks in the existing validation workflow; retain independent legacy Pages deployment.
- [x] Document test commands and update the documentation index.
- [x] Run full production validation and independent review; leave changes uncommitted.

## Acceptance

Normal case-insensitive title/excerpt/category/tag scoring and ten-post limit remain. Empty/no-result searches clear selection. Arrow keys and Enter operate on current results; IME Enter never navigates. Modal focus stays inside until Escape/close/backdrop, then returns to its opener and restores the prior body overflow. No user or article text is interpreted as markup. Existing category page URLs receive baseurl once.

## Verification results

- Phase 1 remote validation and Pages deployment both succeeded for a4b02329c7beee5cf392f6200ba85651051e2132.
- Before changes: 11 of the initial 13 DOM tests failed on punctuation, text safety, stale keyboard targets, IME and modal behavior; all three Liquid tests failed on missing inert JSON data.
- After changes: 15 DOM tests and 7 Ruby tests / 19 assertions passed. Frozen dependency check, JavaScript syntax and git whitespace checks passed.
- Fresh production build validated 6 article layouts, 20 pages, all indexed search destinations, local assets and development-file exclusions.
- Independent reviewer reran all DOM tests and found no actionable regressions.
- Existing Minimal Mistakes 4.27.0 CSS lacks sr-only; status uses its existing visually-hidden helper instead.
- True browser layout/scrolling/responsive verification remains unperformed. Remote CI for these changes requires a later user commit/push. Ruby lockfile and Pages settings remain unchanged.

## CHANGELOG

### v1.0.1 (2026-10-24)

- 補上歷史狀態與現行指南入口，保留當時執行紀錄與驗證限制。
