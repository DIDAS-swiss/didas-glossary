# 2026-08-28 — spec-up-t 1.7 upgrade: ToIP-style frontend

Upgraded the toolchain from spec-up-t 1.0.29 to **1.7.0** — the same
generation that renders the [ToIP Main Glossary](https://glossary.trustoverip.org/).
The glossary now gets the ToIP frontend natively, with DIDAS branding:

- **Term cards** with alias line, per-term § anchors and edit links
- **Definition detail levels** (①②③ buttons per card)
- **Built-in light/dark mode** and font-size controls in the toolbar
- **Numbered collapsible TOC** sidebar
- **Status section** (`#status`) modeled on ToIP's, DIDAS-flavored:
  specification status, editors, participate links, federation and
  licensing pointers (`spec/status.md`)

## Migration notes

- `specs.json`: `external_specs` migrated to the 1.x+ schema (single array
  of `{external_spec, gh_page, url, terms_dir}`); `external_specs_repos`
  removed
- `docs/custom-assets/custom.css` reduced from a full custom theme to a
  thin DIDAS branding layer — the native UI now provides what the custom
  theme previously reimplemented; `custom-head.js`/`custom-body.js` are
  intentionally empty placeholders
- `render-specs.yml`: `package.json`/`package-lock.json` and
  `docs/custom-assets/**` added to the trigger paths so toolchain bumps
  and branding changes re-deploy
- The term index is now generated into `.cache/term-index.json`
