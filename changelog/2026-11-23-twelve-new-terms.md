# 2026-11-23 — Twelve new terms (#596–#607)

Implements the technical and EU/CH bridge proposals. Every swiyu statement
is taken from the published Swiss Profiles (re-read 2026-11-23); EU terms
are recorded for mapping only.

**swiyu protocol terms:** holder binding, DCQL, DPoP, did:webvh, vct, base
registry, OCA, wallet backup container, proximity verification.

**EU/CH bridge terms:** electronic credential (BGEID), electronic attestation
of attributes (EAA), qualified electronic attestation of attributes (QEAA).

Findings recorded along the way:

- **holder binding** — ToIP defines it as the relationship between a holder
  and their wallet; the Swiss Profiles use it for binding a credential to a
  key. Ruled Tier 3 (own), related but not equivalent; the ToIP review issue
  for `holder-binding` closes with this change.
- **base registry** — the open question from #601 is answered by Swiss Profile
  VC: "The Base Registry, provided by FOITT, acts as the Status Provider."
- **QEAA** — no Swiss counterpart is asserted; whether the BGEID defines a
  qualified category remains unverified (Fedlex not reachable here).
- EU-term FR/IT/DE names are marked *proposed* until checked against the
  official language versions of Regulation (EU) 2024/1183.

Supporting changes: five ToIP terms added to the xref cache from the verified
upstream commit `00608bb`; `check:toip` admits EU vocabulary in entries that
declare `~ Normative space: eIDAS 2 / EU ARF` (and requires the does-not-imply
sentence there), documented in GOVERNANCE.md and the contribution guide; three
rows of the EU-CH mapping ruled; twelve rows added to `federation/swiyu-refs.md`.
