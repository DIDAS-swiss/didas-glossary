# 2026-08-28 — Frontend restyle

Modern restyle of the rendered glossary, visually aligned with the
[DIDAS Trust Flow diagrams](https://github.com/DIDAS-swiss/Trust-Flow-Diagram-Repository)
(LikeC4 look): Inter typography, blue accent, card-based term entries,
and a dark theme matching the LikeC4 canvas (`#1a1b1e`).

## What changed

- `docs/custom-assets/custom.css` — full theme via spec-up-t's custom-asset
  hook: CSS-variable overrides plus component polish (sticky translucent
  header, term cards, TOC, tables, inputs, scrollbars). Light and dark,
  following the system preference.
- `docs/custom-assets/custom-head.js` — applies a pinned theme before first
  paint and loads webfonts non-blocking.
- `docs/custom-assets/custom-body.js` — light/dark toggle button in the
  header; the choice persists in `localStorage`.
- `specs.json` — asset paths fixed from absolute (`/custom-assets/…`) to
  relative: absolute paths 404 on a GitHub *project* page
  (`didas-swiss.github.io/didas-glossary/`).
- The xref provenance buttons (Xref / version compare) are muted and only
  fully visible when hovering a definition — editorial tools, not reader
  content.

## Verification

Rendered locally and screenshot-tested in Chromium (light + dark,
pixel-sampled): body/cards use the themed surfaces in both schemes; the
built-in white `main` background is overridden.
