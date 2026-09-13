# 2026-09-13 — Precision, terminology and federation-alignment pass

Full editorial pass over the term corpus: every definition now separates
protocol behaviour, cryptographic verification, credential status, issuer
identity/authorisation, verifier authorisation, holder/key binding,
presentation approval, legal consent, relying-party acceptance and factual
truth — none inferred from another. Broad words (verified, valid, trusted,
authentic, …) are replaced by the exact property meant.

## Structure

Technical terms now follow a common structure: generic definition →
`Relation to ToIP:` (adopted / equivalent with Swiss extension / narrower /
broader / related but not equivalent / no equivalent term) → swiyu/Swiss
context with source discipline (spec vs. law vs. DIDAS guidance vs. example)
→ `Does not imply:` → language equivalents.

## Specification versions (verified 2026-09-13 against the published profiles)

- SD-JWT: **RFC 9901** (was: unversioned)
- SD-JWT VC: **draft-ietf-oauth-sd-jwt-vc-15** (was: draft-08)
- Token Status List: **draft-ietf-oauth-status-list-20**
- OpenID4VCI **1.0**, OpenID4VP **1.0**, did:webvh **1.0**
- `profile_version`: `swiss-profile-vc:1.0.0`

## Corrections of record

- Swiss Profile Trust normative force: the MAY rules (caTM, tvTM) bind the
  **wallet**, not the verifier; MUST/SHOULD bind any ecosystem actor.
- Selective disclosure: registered JWT claims (`iat`, `exp`,
  `vct_metadata_uri`) are excluded from disclosure; `sub` and `expiry_date`
  MUST be disclosures — "every claim can be withheld" was wrong.
- Verifier: proof evaluation ≠ authenticity of claims; request scope ≠
  enforcement of verifier authorisation.
- Status list: status ≠ overall validity; absolutes ("learns nothing",
  "no personal data") replaced by precise statements.
- Wallet: consent language removed; approval in the flow is not legal
  consent; wallet models beyond the personal device allowed.
- E-Collecting: marketing formulations removed; one neutral definition.

See `federation/swiyu-refs.md` for the per-term source table (all rows now
verified and dated) and the pull request for the full file-by-file report
and the terminology-federation table.
