[[def: verifiable credential, verifiable credentials, VC, VCs, verifizierbarer Nachweis, attestation vérifiable, attestato verificabile]]

~ A tamper-evident [[ref: credential]] whose authorship by an [[xref: toip-glossary, issuer]] can be cryptographically verified. Verifiable credentials can be used to build verifiable [[xref: toip-glossary, presentation]]s, whose integrity can also be cryptographically verified. The [[xref: toip-glossary, claim]]s in a credential can be about different [[xref: toip-glossary, subject]]s.

~ Relation to ToIP: related but not equivalent — [[xref: toip-glossary, verifiable-credential]]. The upstream definition ties the term to the W3C Verifiable Credentials Data Model specifically. This glossary uses the term format-neutrally for the concept, because the Swiss Profile instantiates it with a different format (IETF SD-JWT VC) and does not support W3C VCDM.

~ swiyu context (Swiss Profile, `swiss-profile-vc:1.0.0`): verifiable credentials are issued, held, presented and verified using the **IETF SD-JWT VC** format, per the versions referenced by the current [Swiss Profile VC](https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/): SD-JWT ([RFC 9901](https://www.rfc-editor.org/rfc/rfc9901.html)), SD-JWT VC ([draft-ietf-oauth-sd-jwt-vc-15](https://www.ietf.org/archive/id/draft-ietf-oauth-sd-jwt-vc-15.html)) and Token Status List ([draft-ietf-oauth-status-list-20](https://www.ietf.org/archive/id/draft-ietf-oauth-status-list-20.html)). Holder/key binding uses the `cnf` claim with the SD-JWT+KB mechanism where the issuer enables it. The W3C VCDM and ISO mdoc credential format profiles are **NOT SUPPORTED** ([Swiss Profile Issuance §3.3.1](https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/)).

~ Does not imply: cryptographic verifiability establishes issuer authorship and integrity of the presented data. It establishes neither the factual truth of the claims, nor the issuer's authorisation to issue them, nor business acceptance by a relying party, nor legal validity under Swiss law. Credential status is a separate check against the referenced [[ref: status list]] entry.

~ Supporting definitions:

~ [W3C VC]: A verifiable credential is a tamper-evident credential that has authorship that can be cryptographically verified.

~ Language equivalents:

~ [DE] **verifizierbarer Nachweis** — im BGEID-Kontext: **elektronischer Nachweis**

~ [FR] **attestation vérifiable** — dans le contexte de la LSIE: **attestation électronique**

~ [IT] **attestato verificabile** — nel contesto della LSIE: **attestato elettronico**
