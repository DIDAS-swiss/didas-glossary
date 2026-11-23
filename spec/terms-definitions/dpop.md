[[def: DPoP, Demonstrating Proof of Possession]]

~ An OAuth 2.0 mechanism ([RFC 9449](https://datatracker.ietf.org/doc/html/rfc9449)) that binds an access token to a key held by the client, so that a token can only be used by a party that proves possession of that key.

~ swiyu context ([Swiss Profile Issuance](https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/), version 1.0, which lists OAuth 2.0 DPoP as RFC 9449): the token request **MUST** use DPoP, and requests to the token, credential and deferred credential endpoints **MUST** be sent with a DPoP header; issuers **MUST** provide a DPoP nonce. Where a hardware-bound credential is requested, registering the DPoP key **MUST** come with a key attestation at the security level the issuer allows for the [[ref: holder binding]] key. Refresh tokens can be sender-constrained by binding them to a DPoP key.

~ Does not imply: DPoP constrains who can use a token; it does not by itself bind the issued credential to a key. That is [[ref: holder binding]].

~ Relation to ToIP: no equivalent term. The nearest concept is [[xref: toip-glossary, proof-of-possession]], a general verification that the owner of a key pair controls the private key; DPoP is one specific OAuth 2.0 application of that idea.

~ Language equivalents:

~ [DE] **DPoP** (Abkürzung wird nicht übersetzt)

~ [FR] **DPoP** (sigle non traduit)

~ [IT] **DPoP** (sigla non tradotta)
