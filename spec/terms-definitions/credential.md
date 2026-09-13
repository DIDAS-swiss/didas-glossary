[[def: credential, credentials, Nachweis, Nachweise, attestation, attestations, attestato, attestati]]

~ A set of [[ref: claim]]s and associated metadata issued by an [[ref: issuer]] about one or more subjects. A credential is given to a [[xref: toip-glossary, holder]] and typically includes a signature or another means by which its authorship and integrity can be checked. A credential may be a physical credential or a digital credential; a digital credential whose authorship and integrity can be cryptographically verified is a [[ref: verifiable credential]].

~ Relation to ToIP: equivalent with Swiss extension — [[xref: toip-glossary, credential]]. The upstream definition describes a credential as a "container of claims"; this glossary prefers "a set of claims and associated metadata" as the more exact formulation, without changing the concept.

~ swiyu context (Swiss Profile, `swiss-profile-vc:1.0.0`): credentials are issued as [[ref: verifiable credentials]] in the **IETF SD-JWT VC** format ([Swiss Profile VC](https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/)). The credential format profiles "W3C VCDM" and "ISO mdoc" are **NOT SUPPORTED** ([Swiss Profile Issuance §3.3.1](https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/)). Under the BGEID, the legal term for a credential issued on the trust infrastructure is *elektronischer Nachweis* (electronic credential); the e-ID is one such credential among others.

~ Does not imply: possession of a credential establishes neither the factual truth of its claims, nor that the issuer was authorised to issue it, nor that any relying party will accept it. Those are separate properties, established (or not) by separate mechanisms.

~ Supporting definitions:

~ [eSSIF-Lab]: data, representing a set of assertions (claims, statements), authored and signed by, or on behalf of, a specific party.

~ [W3C VC]: A set of one or more claims made by an issuer.

~ Language equivalents:

~ [DE] **Nachweis**, **Beglaubigung** — im BGEID-Kontext auch: **elektronischer Nachweis**

~ [FR] **attestation** — dans le contexte de la LSIE: **attestation électronique**

~ [IT] **attestato** — nel contesto della LSIE: **attestato elettronico**
