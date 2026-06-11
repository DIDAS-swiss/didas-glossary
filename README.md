# didas-glossary

Repository for glossary.didas.swiss — the DIDAS Glossary, a common language for
the swiyu trust ecosystem, maintained by the DIDAS community.

## How it works

- Terms live in `spec/terms-definitions/`, one markdown file per term, written
  with the [spec-up-t](https://github.com/trustoverip/spec-up-t) toolchain.
- The glossary federates with the
  [Trust over IP Main Glossary](https://glossary.trustoverip.org/): common
  SSI/VC terms are adopted or cross-referenced rather than redefined.
- Every term carries aliases in all four working languages (EN/DE/FR/IT).

## Contributing and governance

- **Propose a term or a change**: use the issue forms (New term / Change to
  existing term). The forms ask for a ToIP check and language aliases.
- **Decision process**: see [GOVERNANCE.md](GOVERNANCE.md) — the three-tier
  rule (adopt / extend / own), review gates, and publication flow.
- **ToIP federation review**: tracked term-by-term in
  [federation/toip-review.md](federation/toip-review.md).
- **Authoring conventions**: documented in the contribution guide at the end
  of the rendered glossary (`spec/outro.md`).
- **Changelog**: notable changes are recorded in [changelog/](changelog/).

## Common commands

```bash
npm install        # install toolchain
npm run edit       # local editing mode
npm run render     # render the glossary to docs/
npm run xrefs      # refresh cached ToIP definitions (needs GITHUB_API_TOKEN in .env)
npm run freeze     # snapshot a numbered version under docs/versions/
```

## Dependency notes

`package.json` contains an `overrides` block to pin transitive dependencies to safe versions. Do not remove it without checking whether the upstream package has updated its own dependency ranges.

| Package | Pinned to | Reason |
|---------|-----------|--------|
| axios   | ^1.17.0   | CVE-2026-44495 — prototype pollution in config merge |
