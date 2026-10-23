# GitHub Pages Validation Implementation Plan
# Version 1.0.0 | Updated: 2026-10-23

**Goal:** Restore front matter defaults and catch build/output regressions before publishing.
**Architecture:** Keep github-pages 232, Jekyll 3.10.0, the existing lockfile and Minimal Mistakes 4.27.0. Add a read-only validation workflow independent of legacy Pages deployment.
**Spec:** Scope approved in the conversation: phase 1, build validation and configuration only.

## Constraints

- Work in the existing workspace; do not commit or push, as requested.
- Preserve Pages deployment from main at /; no deployment jobs or settings changes.
- Exclude validation tooling from the published site.
- Do not expand into search, images, animation or dependency upgrades.

## Steps

- [x] Confirm remote Pages configuration and build the unmodified production baseline.
- [x] Add regression checks for duplicate YAML keys and effective post/page defaults; observe failure before fixing configuration.
- [x] Merge global image defaults with existing scoped defaults; exclude scripts.
- [x] Build in a fresh temporary directory and inspect every published post for its layout, primary routes, stylesheet, scripts and local images.
- [x] Add PR/push/manual validation with frozen Bundler dependencies and read-only permissions.
- [x] Correct development/deployment documentation and update the documentation index.
- [x] Run checks, production output validation and review the complete diff. Report remote CI and browser verification limitations.

## Review focus

- Build success without article layout must fail validation.
- Duplicate nested YAML keys must fail before parsing silently overwrites them.
- Explicit article share images must remain more specific than the site fallback.
- Draft/future posts must follow production Jekyll publication rules.
- Validation tooling must not appear in generated output.

## Baseline

Remote Pages API: legacy build, main branch, root path, status built.
Production build: passed. Duplicate defaults overwrite scoped configuration, but github-pages includes jekyll-default-layout, which supplies the post layout in baseline output. Do not describe the baseline as missing article markup.
Local sandbox DNS initially blocked remote-theme download; permitted network execution completed the baseline.

## Verification results

- Configuration/output tests: 4 tests, 11 assertions passed.
- Fresh production build: 6 article layouts, 20 pages, local assets and publish exclusions passed.
- Jekyll doctor: passed after allowing network access for the remote theme. Existing optional faraday-retry warning also occurs in the baseline; no dependency changes made.
- Independent read-only review: no important findings.
- Browser/responsive verification not performed: no browser tooling installed. GitHub Actions has not run because changes remain uncommitted and unpushed.
- A trial assertion expecting baseline articles to lack layout was rejected by evidence; inspection of jekyll-default-layout identified the existing fallback. The YAML configuration regression remains confirmed.
