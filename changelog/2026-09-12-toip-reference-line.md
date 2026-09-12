# 2026-09-12: A ToIP reference line on every term

## Added

- `~ ToIP reference:` line on all twenty term files, immediately before the
  language equivalents. Ten name an upstream term, ten record that the ToIP
  Main Glossary has no equivalent and name the nearest concept where one
  exists. The line makes the three-tier check visible in the term itself,
  so a reader inherits the answer instead of repeating the lookup
- `scripts/check-toip-links.mjs` and the `check:toip` npm script: one reference
  line per term, every `[[xref:]]` resolving to a cached upstream definition,
  every `[[ref:]]` resolving to a term this glossary defines, and no bare
  `glossary.trustoverip.org` URLs. No dependencies; it reads the term files and
  the committed cache
- `.github/workflows/toip-links.yml`: runs the check on every pull request that
  touches a term, the cached definitions or the check itself
- `spec/outro.md`: the convention, both shapes of the line, and why an absence
  is worth stating
- `output/xrefs-data.json` and `.js`: ten further ToIP definitions the new
  references need (`governing-authority`, `trust-domain`, `trust-context`,
  `trust-community`, `digital-trust-utility`, `trust-spanning-protocol`,
  `assurance-level`, `presentation`, `protocol-stack`, `subject`) at commit
  `00608bb6`

## Changed

- Four terms linked to `glossary.trustoverip.org` by URL rather than by
  `[[xref:]]`: `governing-authority`, `trust-domain`, `trust-infrastructure`
  and `trust-protocol`. A URL renders as a plain link and the federation
  workflow cannot see it, so all four are now federated references. The two
  inline URLs in `verifiable-credential` were converted for the same reason
- Terms that carried their upstream reference as `~ See also:` now carry it as
  `~ ToIP reference:`, so one phrase means one thing across the glossary

## Notes

- `ambition level` now points at [[xref: toip-glossary, assurance-level]] as
  the term it is not, which is the confusion issue #31 recorded
- Ten terms record no upstream equivalent: `ambition level`, `DIDAS`,
  `digital product passport`, `E-Collecting`, `Minute of Agreement`,
  `protocol`, `selective disclosure`, `status list`, `trust infrastructure` and
  `trust protocol`. `protocol` is the surprising one: the ToIP Main Glossary
  defines particular protocols and the layering around them, and not the
  generic concept
