# didas-glossary
Repository for glossary.didas.swiss.

## Dependency notes

`package.json` contains an `overrides` block to pin transitive dependencies to safe versions. Do not remove it without checking whether the upstream package has updated its own dependency ranges.

| Package | Pinned to | Reason |
|---------|-----------|--------|
| axios   | ^1.17.0   | CVE-2026-44495 — prototype pollution in config merge |
