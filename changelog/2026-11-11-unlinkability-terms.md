# 2026-11-11: Unlinkability terms

## Added

- Three term definitions for the mechanisms behind unlinkable e-ID use, as
  shown in the trust flow `basic-flow/Unlinkable e-ID use` of the
  [Trust Flow Diagram Repository](https://github.com/DIDAS-swiss/Trust-Flow-Diagram-Repository):
  - `unlinkability`: Tier 3 (own). The ToIP Main Glossary has no equivalent;
    the nearest concepts are `contextual-linkability` and `correlation-privacy`
  - `batch issuance`: Tier 3 (own). No ToIP equivalent; the nearest concept is
    `issuance`
  - `holder binding`: Tier 2 (extend), with `key binding` as an alias. The ToIP
    term of the same name defines a relationship between the holder and the
    wallet; this definition names the binding between a credential and a key
    the holder controls, as profiled in Swiss Profile VC sections 4.1.2 and 4.3
- `output/xrefs-data.json` and `output/xrefs-data.js`: cached five additional
  ToIP definitions (`contextual-linkability`, `correlation-privacy`,
  `cryptographic-binding`, `holder-binding`, `issuance`) at commit `00608bb6`,
  the commit the other cached entries already carry. They were added by hand
  from that commit of `trustoverip/ctwg-main-glossary`; the weekly
  `fetch-and-push-xrefs` workflow confirms them on its next run

## Changed

- `status list`: states that the swiyu issuer software gives each credential of
  a batch its own random index (swiyu-issuer release 2.2.0), so the index does
  not link presentations
- `selective disclosure`: the sentence separating it from unlinkability now
  links to the new terms
- `term-index.json`: regenerated, now listing all twenty-eight term files

## Notes for review

- The tier of each new term is a proposal. Under Workflow A in GOVERNANCE.md an
  editor rules on it; no intake issues have been opened for these terms
- All DE/FR/IT aliases of the new terms are marked as proposed. German for
  `batch issuance` is unsettled between Batch-Ausstellung and Stapelausstellung
- Section numbers refer to the Swiss Profile Issuance and Swiss Profile VC as
  published at commit `df9b168` of `swiyu-admin-ch.github.io`, read on
  2026-11-11
