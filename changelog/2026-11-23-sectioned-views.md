# 2026-11-23 — Sectioned views and horizontal menu

The published glossary now behaves like the other DIDAS sites: a horizontal
section menu in the shared masthead, with each section shown on its own
instead of one long scroll.

- Four views — **Overview** (purpose, scope, about, status), **Terms**,
  **EU-CH Mapping**, **Contributing** — switched from the masthead menu;
  Terms is the default view
- The document itself is unchanged: every anchor stays valid, and hash
  navigation (deep links such as `#term:beta-id`, TOC clicks, links between
  sections) switches to the view containing the target
- The sidebar is scoped to the active view; the Terms view shows an A-Z
  index of all terms by canonical name
- Print shows the whole document; if the expected section headings are ever
  missing, nothing activates and the page stays a single scroll
- Implemented entirely in `docs/custom-assets/` (spec-up-t's extension
  point) — no toolchain changes; verified in Chromium at desktop and 400 px
  widths with no page errors
