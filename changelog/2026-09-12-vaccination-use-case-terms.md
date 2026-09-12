# 2026-09-12: Vaccination use case terms

## Added

- Six new term definitions implementing the open term-proposal issues #38 to #43:
  `claim` (#38), `wallet` (#39), `issuer` (#40), `verifier` (#41),
  `selective disclosure` (#42) and `status list` (#43). Each carries DE/FR/IT
  aliases per the multilingual house style, inter-term `[[ref:]]` links and,
  where an upstream term exists, a ToIP cross-reference. `claim`, `wallet`,
  `issuer` and `verifier` are Tier 2 (extend); `selective disclosure` and
  `status list` are Tier 3 (own), because the ToIP Main Glossary defines
  neither. Together with `credential` and `verifiable credential`, which were
  already published, the six complete the vocabulary a reader meets in the
  vaccination use case at
  [digital-health_swiyu](https://github.com/DIDAS-swiss/digital-health_swiyu)
- `output/xrefs-data.json` and `output/xrefs-data.js`: cached three additional
  ToIP definitions (`verifier`, `digital-wallet`, `revocation`) at commit
  `00608bb6`, the commit the other cached entries already carry. The three were
  added by hand from that commit of `trustoverip/ctwg-main-glossary`; the weekly
  `fetch-and-push-xrefs` workflow confirms them on its next run

## Changed

- `term-index.json`: regenerated, now listing all twenty term files

## Notes for review

- The DE/FR/IT aliases of `claim`, `selective disclosure` and `status list` are
  marked as proposed in the term files. German usage for `claim` is unsettled
  between Angabe, Aussage and Attribut, and German for `selective disclosure`
  is unsettled between selektive Bekanntgabe and selektive Offenlegung. The
  issues record both questions
- `issuer` and `verifier` are terms the BGEID itself uses, so their German and
  French aliases may want the `legal-review` label
