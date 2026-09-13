[[def: verifier, verifiers, Verifikator, Verifikatorin, vérificateur, vérificatrice, verificatore, verificatrice]]

~ The technical role an actor performs when it requests a presentation of [[ref: claim]]s from a [[xref: toip-glossary, holder]] and evaluates the proofs that come back. Distinct from the **relying party**, the business or legal role that decides whether to accept the presented claims for a purpose. One organisation often performs both roles, but the roles remain distinct: proof evaluation is a technical act; acceptance is a business and legal decision.

~ What proof evaluation can establish, each as a separate check: integrity and issuer authorship of the presented credential (signature verification against the issuer's published key); integrity of the presentation; holder/key binding, where the credential carries a `cnf` key and the presentation includes a key-binding proof; and credential status, where the verifier reads the referenced [[ref: status list]] entry. What it does not establish: the factual truth of the claims, the issuer's authorisation to issue them, the verifier's own authorisation to request them, any legal entitlement, or acceptance by the relying party.

~ Relation to ToIP: equivalent with Swiss extension — [[xref: toip-glossary, verifier]].

~ swiyu protocol context ([Swiss Profile Verification](https://swiyu-admin-ch.github.io/specifications/swiss-profile-verification/), version 1.0): a verifier sends verification requests as JWT-Secured Authorization Requests (JAR) under **OpenID4VP 1.0**, names the claims it seeks in a DCQL query, and receives the response in `direct_post.jwt` mode. The presentation request identifies the claims sought by the verifier; separate governance rules and wallet policy may restrict which claims the verifier is authorised to request or process — see the protected fields in [[ref: claim]] and the trust markers in [[ref: trust protocol]].

~ swiyu governance context: a verifier's standing can be made visible to the holder before disclosure. Under the [[ref: trust protocol]] the wallet retrieves the applicable [[ref: trust statement]]s about the verifier, validates them, derives the [[ref: trust marker]]s for that interaction, and can display them; it then applies its own policy, and the [Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/) attaches normative force to specific markers. A verifier does not have a marker: the wallet derives one for the interaction in front of it.

~ Language equivalents:

~ [DE] **Verifikator**, **Verifikatorin**

~ [FR] **vérificateur**, **vérificatrice**

~ [IT] **verificatore**, **verificatrice**
