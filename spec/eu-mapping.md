# EU-CH Interoperability Mapping

eIDAS 2 / EU ARF ↔ DIDAS Glossary — terminology level.

Terminology-level mapping between this glossary's terms and the corresponding
concepts of the EU framework — the eIDAS Regulation as amended by Regulation
(EU) 2024/1183 and the [EUDI Architecture and Reference
Framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework)
(ARF; definitions in [Annex 1](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/blob/main/docs/annexes/annex-1/annex-1-definitions.md)).

**Scope** (per the normative scope separation in
[GOVERNANCE.md](https://github.com/DIDAS-swiss/didas-glossary/blob/main/GOVERNANCE.md)): this table records *correspondences
between vocabularies*, classified per pair. It asserts no conformity, no
recognition, and no applicability of EU requirements in the swiyu context —
and vice versa. Requirements-level or conformance mapping is out of scope for
the glossary and belongs in a dedicated repository.

**Authority and lifecycle**: a mapping is *ruled* when the term file carries a
`~ Relation to eIDAS/ARF:` line (enforced by `npm run check:toip`: labelled,
classified, with a does-not-imply sentence); this table mirrors ruled lines
and lists *candidates* awaiting an editorial ruling. Update the row in the
same PR that adds or changes the term's mapping line.

## Mapping table

| DIDAS term | EU concept (eIDAS 2 / ARF) | Relationship | Status | Sources / notes |
|---|---|---|---|---|
| electronic credential (*elektronischer Nachweis*, proposed) | electronic attestation of attributes (EAA) | to be classified | candidate — [#607](https://github.com/DIDAS-swiss/didas-glossary/issues/607) | BGEID Art. 1/5/7/10 (cited in `credential`); ARF Annex 1. eIDAS 2 distinguishes qualified / PuB / non-qualified; the verified BGEID articles draw no such category distinction |
| — | qualified electronic attestation of attributes (QEAA) | EU category; Swiss counterpart unverified | candidate — [#606](https://github.com/DIDAS-swiss/didas-glossary/issues/606) | ARF Annex 1 (QTSP + Annex V). Whether the BGEID defines a qualified category must be verified against Fedlex before any Swiss-side statement |
| holder binding (proposed) | device-bound attestation | related — to be classified | candidate — [#596](https://github.com/DIDAS-swiss/didas-glossary/issues/596) | Swiss side: `cnf`/SD-JWT+KB, hardware-bound key attestation `iso_18045_high` (Swiss Profiles); EU side: ARF Annex 1 definition. ARF constructs (Wallet Unit, WSCA/WSCD) have no standing in the Swiss Profiles |
| status list | Attestation Status List | related — to be classified | candidate | Swiss side: IETF Token Status List per Swiss Profile VC; EU side: ARF Annex 1 ("an Attestation revocation mechanism that publishes status information (Valid or Invalid) for all relevant PIDs or attestations") |
| verifiable credential | attestation (ARF collective term: QEAA, PuB-EAA, EAA) | related but not equivalent — to be confirmed | candidate | Swiss side: format-level concept (SD-JWT VC); EU side: legal-category collective term. Different axes (format vs legal category) — the classification should say so |
| wallet | EUDI Wallet / Wallet Unit | related — to be classified | candidate | Swiss side: `wallet` entry (swiyu wallet as one instance); EU side: ARF Wallet Unit is an EU-framework construct without standing in the Swiss Profiles |

Rows with status *candidate* assert nothing yet: they name the pair, the
sources, and what a ruling has to decide.

## Drift handling

The `check-arf-drift` job in
[`check-swiyu-specs.yml`](https://github.com/DIDAS-swiss/didas-glossary/blob/main/.github/workflows/check-swiyu-specs.yml) watches
the ARF repository's `docs/annexes/annex-1` path weekly (baseline:
`output/swiyu-specs-cache/arf-last-seen-commit.txt`). When the ARF definitions
move, a review PR names this table and the terms carrying a
`Relation to eIDAS/ARF:` line.

## Sources and licence

ARF Annex 1 definitions © European Commission, licenced
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); the eIDAS
provisions are linked from the ARF (CELEX 32024R1183). EUR-Lex itself refuses
automated retrieval; Regulation wording is therefore taken from the ARF's
verbatim carry-over and should be re-checked against the Official Journal
where legal precision matters.
