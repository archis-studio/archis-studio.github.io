# Shared Post Image Optimization Plan
# Version 1.0.1 | Updated: 2026-10-23

**Goal:** Share one compressed image across article cards and article covers.
**Approved approach:** User chose a single image per article because the compressed covers are already only 31–39 KB. Keep originals and generate one max-width-1280 WebP locally, without upscaling or cropping. No commits or pushes.

## Completed

- [x] Cards, related posts and article covers all prefer header.image; retain header.teaser only as a legacy fallback.
- [x] Remove the two newly generated thumbnail files and teaser fields from the three updated articles.
- [x] Simplify the local generator to output only one cover file, keeping the original when conversion is larger.
- [x] Keep intrinsic dimensions, escaped alt text, lazy cards and eager article cover loading.
- [x] Update regression tests and documentation for the single-image contract.

## Assets

- Halloween: original 496,932 bytes; shared WebP 30,574 bytes (780x520).
- Software: original 2,354,700 bytes; shared WebP 39,330 bytes (1280x891).
- AI tutorial: keep the original 11,318-byte JPEG (275x183); conversion was larger.

Original PNG/JPEG and social-image paths remain intact. No theme, Ruby dependency, CI workflow or Pages configuration changes. Real-browser layout and remote CI still require later verification.
