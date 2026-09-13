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
| `verifiable-credential` | `swiss-profile-vc.md` | Referenced specs table; §4; SD-JWT VC section | SD-JWT = RFC 9901, SD-JWT VC = draft-15, TSL = draft-20; `profile_version` = swiss-profile-vc:1.0.0; `cnf`/SD-JWT+KB key binding | 2026-09-13 |
| `verifiable-credential` | `swiss-profile-issuance.md` | §3.3.1 | Only IETF SD-JWT VC is supported; W3C VCDM and ISO mdoc are NOT SUPPORTED | 2026-09-13 |
| `credential` | `swiss-profile-vc.md` | §4; SD-JWT VC section | swiyu credential structure (SD-JWT VC, `vct`, registered claims, status reference) | 2026-09-13 |
| `claim` | `swiss-profile-vc.md` | §4.1; SD-JWT VC section (registered claims) | payload MUST NOT contain permanently disclosed claims; `iat`/`exp`/`vct_metadata_uri` MUST NOT be disclosures; `sub` and `expiry_date` MUST be disclosures | 2026-09-13 |
| `claim` | `swiss-profile-trust.md` | Protected fields | protected field `personal_administrative_number` (AHV number) requires verifier authorisation | 2026-09-13 |
| `selective-disclosure` | `swiss-profile-vc.md` | §4.1–4.2 | SD-JWT (RFC 9901) disclosure mechanics; decoy digests NOT SUPPORTED; recursive disclosures MUST be supported | 2026-09-13 |
| `status-list` | `swiss-profile-vc.md` | Token Status List (TSL) Draft 20 sections | status list token signing rules; status provider MUST be the FOITT registry ("to prevent observability of Issuers"); size and freshness rules | 2026-09-13 |
| `issuer` | `swiss-profile-issuance.md` | §3.3.1; §3.3.3; DPoP sections | OpenID4VCI 1.0; Pre-Authorized Code Flow MUST be supported; key attestation for hardware-bound keys | 2026-09-13 |
| `issuer` | `swiss-profile-anchor.md` | did:webvh sections | did:webvh 1.0 registration in the Base Registry; published key material; DID document constraints | 2026-09-13 |
| `verifier` | `swiss-profile-verification.md` | JAR and OpenID4VP sections | verification requests as JAR; OpenID4VP 1.0; DCQL query; `response_mode` MUST be direct_post.jwt | 2026-09-13 |
| `wallet` | `swiss-profile-issuance.md` | DPoP sections | what reaches the wallet at issuance; DPoP nonce handling; key attestation duty | 2026-09-13 |
| `wallet` | `swiss-profile-vc.md` | Validation of aud claim in Key Binding JWT | wallet MUST verify the verifier's `client_id` before including it in the KB JWT `aud` | 2026-09-13 |
| `wallet` | `swiss-profile-verification.md` | OpenID4VP sections | what leaves the wallet at presentation | 2026-09-13 |
| `trust-protocol` | `trust-protocol-v2-0.md` | Introduction; Trust Markers; Statement types | based on JWTs signed by a root trust anchor; the five trust markers (viTM, caTM, tvTM, gucTM, gucaTM); statement kinds (trust / trust list / public statements; idTS, vqPS, pvaTS, piaTS, PITLS, Non-Compliance TLS) | 2026-09-13 |
| `trust-protocol` | `swiss-profile-trust.md` | Trust requirements; Environment specific details | actor MUST decline gucTM without gucaTM; actor SHOULD decline without viTM; the wallet MAY decline without caTM or tvTM; root trust anchors; swiyu Trust Registry | 2026-09-13 |
| `trust-infrastructure` | `swiss-profile-anchor.md` | Base Registry sections | Base Registry as identifier/key publication component | 2026-09-13 |
| `trust-infrastructure` | `swiss-profile-trust.md` | Environment specific details | root trust anchors; swiyu Trust Registry base URL | 2026-09-13 |
| `ecosystem` | `swiss-profile-trust.md` | Introduction | identification of public ecosystem actors and protection against impersonation | 2026-09-13 |

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
