[[def: DCQL, Digital Credentials Query Language]]

~ The query language of OpenID for Verifiable Presentations ([OpenID4VP 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)) in which a [[ref: verifier]] states which credentials and which [[ref: claim]]s it requests in a presentation request.

~ swiyu context ([Swiss Profile Verification](https://swiyu-admin-ch.github.io/specifications/swiss-profile-verification/), version 1.0, §6): `vp_formats_supported` is **NOT SUPPORTED**; the credential format identifier is determined in the DCQL query's `format` parameter. `multiple` is **NOT SUPPORTED**: only a single credential can be used in a verification. None of the `trusted_authorities` types defined in OpenID4VP apply; the profile defines a DID-based authorities query of type `did`, whose value lists the issuer DIDs the verifier will accept.

~ Does not imply: a DCQL query states what the verifier asks for. Whether the verifier is authorised to request a claim is governed separately (see protected fields in [[ref: claim]] and [[ref: trust protocol]]); the wallet decides what is presented.

~ Relation to ToIP: no equivalent term. DCQL is a protocol construct of OpenID4VP, not a concept defined in the ToIP Main Glossary.

~ Language equivalents:

~ [DE] **DCQL** (Abkürzung wird nicht übersetzt)

~ [FR] **DCQL** (sigle non traduit)

~ [IT] **DCQL** (sigla non tradotta)
