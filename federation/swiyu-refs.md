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
| `verifiable-credential` | `swiss-profile-vc.md` | Specifications | the contained specifications and their versions: SD-JWT VC Draft 15, SD-JWT RFC 9901, Token Status List Draft 20, OCA 1.0 | 2026-09-12 |
| `verifiable-credential` | `swiss-profile-issuance.md` | 3.3.1 | Only IETF SD-JWT VC is supported; W3C VCDM and ISO mdoc are **NOT SUPPORTED** | 2026-09-12 |
| `trust-protocol` | `trust-protocol-v2-0.md` | Introduction, Trust Markers, Statement types | swiyu trust protocol based on JWTs; the five trust markers (viTM, caTM, tvTM, gucTM, gucaTM); the six statement types (idTS, vqPS, pvaTS, piaTS, piTLS, ncTLS) | 2026-09-12 |
| `trust-protocol` | `swiss-profile-trust.md` | all | required trust markers and their normative strength (MUST/SHOULD/MAY); root trust anchors; trust registry URL | 2026-09-12 |
| `ecosystem` | `swiss-profile-trust.md` | Introduction | swiyu trust ecosystem definition and governance | 2026-06-11 |
| `credential` | `swiss-profile-vc.md` | 3.2.2 | swiyu credential structure: which JWT claims may and may not be disclosures | 2026-09-12 |
| `claim` | `swiss-profile-vc.md` | 3.2.2.4 | the claim as the unit of disclosure: an SD-JWT VC **MUST** only have selectively disclosable claims, apart from the registered JWT claims of 3.2.2.2 | 2026-09-12 |
| `wallet` | `swiss-profile-issuance.md` | all | what reaches the wallet at issuance | not verified |
| `wallet` | `swiss-profile-verification.md` | 9 | wallet invocation schemes | not verified |
| `issuer` | `swiss-profile-issuance.md` | all | the OpenID4VCI issuance path an issuer serves | not verified |
| `issuer` | `swiss-profile-anchor.md` | 5.1, 5.2 | `did:webvh` registration in the Base Registry and the key an issuer publishes | not verified |
| `verifier` | `swiss-profile-verification.md` | 6, 8 | OpenID4VP with DCQL; the `direct_post.jwt` response mode | 2026-09-12 |
| `verifier` | `swiss-profile-trust.md` | Protected fields | claims that "do require special permission to verify", regardless of the VCT they belong to; currently `personal_administrative_number` | 2026-09-12 |
| `verifier` | `trust-protocol-v2-0.md` | Transparent Verification Trust Marker, Verification Query Public Statement (vqPS) | what the vqPS is for and what the tvTM does and does not make public | 2026-09-12 |
| `selective-disclosure` | `swiss-profile-vc.md` | 3.2.2.4, 4.2 | claim-level disclosure, array-element and recursive disclosures | 2026-09-12 |
| `status-list` | `swiss-profile-vc.md` | 12.1 | the Status Provider **MUST** be the registry provided by FOITT, so that it differs from the issuer | 2026-09-12 |

**On the rows still marked `not verified`.** The rows were added with the terms
in the same pull request, as this file asks, at a time when the specification
pages could not be opened from the drafting environment. They can be: the source
markdown is readable at
`https://raw.githubusercontent.com/swiyu-admin-ch/swiyu-admin-ch.github.io/main/_specifications/<file>`
even where the rendered site is not. The rows dated 2026-09-12 were checked
against that source; the remaining ones describe whole documents rather than a
claim about a section, and are narrowed when the terms next change. The drift
workflow reads the Term column only, so every row already names which term to
review when a spec changes.

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
