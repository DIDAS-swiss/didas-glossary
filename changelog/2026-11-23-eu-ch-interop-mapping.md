# 2026-11-23 — EU/CH interoperability mapping (stage 1: terminology)

New `federation/eu-mapping.md`: a terminology-level mapping between
glossary terms and the corresponding eIDAS 2 / EU ARF concepts,
classified per pair, with explicit scope: correspondences between
vocabularies only — no conformity, recognition or applicability claims
in either direction (per the normative scope separation).

- Six seed rows, all status *candidate* (tied to issues #596, #605–607
  where open): electronic credential ↔ EAA, — ↔ QEAA, holder binding ↔
  device-bound attestation, status list ↔ Attestation Status List,
  verifiable credential ↔ ARF *attestation* (collective term),
  wallet ↔ EUDI Wallet Unit
- A mapping becomes *ruled* when the term file carries a
  `~ Relation to eIDAS/ARF:` line (CI-enforced: labelled, classified,
  does-not-imply)
- New `check-arf-drift` job watches the ARF `docs/annexes/annex-1`
  path weekly (baseline `2534ab7`), opening a review PR on change
- ARF content © European Commission, CC BY 4.0 — recorded in NOTICE.md
- Requirements/conformance-level mapping is explicitly out of scope for
  the glossary (future dedicated repository)
