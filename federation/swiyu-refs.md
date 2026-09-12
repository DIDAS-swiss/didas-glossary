# swiyu Spec References

Mapping of DIDAS Glossary terms to the sections of the
[swiyu-admin-ch specifications](https://swiyu-admin-ch.github.io/specifications/) they reference.
Used by the automated drift-detection workflow (`.github/workflows/check-swiyu-specs.yml`) to
identify which terms need editorial review when a spec changes.

**To add an entry:** update the table in the same PR that adds or modifies the swiyu-context
paragraph of a term. Keep `Spec file` matching the filename under `_specifications/` exactly.

## Reference table

| Term | Spec file | Section | What the term references | Last verified |
|---|---|---|---|---|
| `verifiable-credential` | `swiss-profile-vc.md` | all | SD-JWT VC format, `profile_version` header requirement, status list | 2026-06-11 |
| `verifiable-credential` | `swiss-profile-issuance.md` | 3.3.1 | Only IETF SD-JWT VC is supported; W3C VCDM and ISO mdoc are not | 2026-06-11 |
| `trust-protocol` | `trust-protocol-v2-0.md` | Introduction, Trust Markers, Statement types | swiyu trust protocol based on JWTs; the five trust markers (viTM, caTM, tvTM, gucTM, gucaTM); statement types (idTS, vqPS, pvaTS, piaTS, PITLS, Non-Compliance TLS) | 2026-09-12 |
| `trust-protocol` | `swiss-profile-trust.md` | all | required trust markers and their normative strength (MUST/SHOULD/MAY); root trust anchors; trust registry URL | 2026-09-12 |
| `ecosystem` | `swiss-profile-trust.md` | Introduction | swiyu trust ecosystem definition and governance | 2026-06-11 |
| `credential` | `swiss-profile-vc.md` | all | swiyu credential structure (SD-JWT VC, `vct`, `sub`, `iat`, status list) | 2026-06-11 |
| `claim` | `swiss-profile-vc.md` | all | the claim as the unit of disclosure in SD-JWT VC | not verified |
| `wallet` | `swiss-profile-issuance.md` | all | what reaches the wallet at issuance | not verified |
| `wallet` | `swiss-profile-verification.md` | all | what leaves the wallet at presentation | not verified |
| `issuer` | `swiss-profile-issuance.md` | all | the OpenID4VCI issuance path an issuer serves | not verified |
| `issuer` | `swiss-profile-anchor.md` | all | `did:webvh` registration and the key an issuer publishes | not verified |
| `verifier` | `swiss-profile-verification.md` | all | OpenID4VP with DCQL; the `direct_post.jwt` response mode | not verified |
| `selective-disclosure` | `swiss-profile-vc.md` | all | SD-JWT VC as the mandated format, which is what makes claim-level disclosure possible | not verified |
| `status-list` | `swiss-profile-vc.md` | all | the status mechanism a credential must carry (IETF Token Status List) | not verified |

**On the eight rows marked `not verified`.** They were added with the terms in
the same pull request, as this file asks. The specification pages are
unreachable from the environment the terms were drafted in, so the section
column says `all` and the date column says `not verified` instead of claiming a
check that did not happen. Someone who can open the specifications should narrow
the sections and date the rows. The drift workflow reads the Term column only,
so the rows already do their job of naming which terms to review when a spec
changes.

## Specs watched

All eight spec files in `_specifications/` are watched by the drift workflow:

| Spec file | Published URL |
|---|---|
| `introduction.md` | https://swiyu-admin-ch.github.io/specifications/introduction/ |
| `swiss-profile-anchor.md` | https://swiyu-admin-ch.github.io/specifications/swiss-profile-anchor/ |
| `swiss-profile-vc.md` | https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/ |
| `swiss-profile-issuance.md` | https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/ |
| `swiss-profile-verification.md` | https://swiyu-admin-ch.github.io/specifications/swiss-profile-verification/ |
| `swiss-profile-trust.md` | https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/ |
| `trust-protocol-v2-0.md` | https://swiyu-admin-ch.github.io/specifications/trust-protocol-v2-0/ |
| `oca-v1-0.md` | https://swiyu-admin-ch.github.io/specifications/oca-v1-0/ |
