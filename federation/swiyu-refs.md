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
| `protocol` | `trust-protocol-v2-0.md` | Introduction, Trust Markers | swiyu trust protocol based on JWTs; trust markers (viTM, caTM, tvTM, gucTM) | 2026-06-11 |
| `protocol` | `swiss-profile-trust.md` | all | swiyu trust ecosystem context; root trust anchors; trust registry URL | 2026-06-11 |
| `ecosystem` | `swiss-profile-trust.md` | Introduction | swiyu trust ecosystem definition and governance | 2026-06-11 |
| `credential` | `swiss-profile-vc.md` | all | swiyu credential structure (SD-JWT VC, `vct`, `sub`, `iat`, status list) | 2026-06-11 |

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
