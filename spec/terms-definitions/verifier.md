[[def: verifier, verifiers, Verifikator, Verifikatorin, vérificateur, vérificatrice, verificatore, verificatrice]]

~ The role an organisation performs when it asks a [[xref: toip-glossary, holder]] for [[ref: claim]]s and checks the proofs that come back. Other specifications call this role the relying party.

~ In the swiyu trust [[ref: ecosystem]] a verifier states what it wants as a DCQL query, and the query is where data minimisation has to be enforced: checking a presentation after the [[ref: wallet]] has answered comes too late, because the claim has already left the wallet. Some claims are held back there by the [[ref: trust protocol]] itself. The [Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/) names **protected fields** — currently the AHV number, `personal_administrative_number` — which "do require special permission to verify", regardless of the VCT they belong to.

~ A verifier's own standing is visible to the holder. Under the [[ref: trust protocol]] a verifier can carry trust markers, so the wallet can show who is asking before the holder agrees to answer. A verifier that publishes a Verification Query Public Statement — its purpose and its DCQL query, signed by a public transparency statement issuer, per [trust-protocol-v2-0](https://swiyu-admin-ch.github.io/specifications/trust-protocol-v2-0/) — can carry the Transparent Verification Trust Marker, which "indicates that the ongoing verification request is publicly transparent and can be reviewed by 3rd party actors" — the *type* of verification the verifier performs, not the individual verification and not what any one holder released.

~ Checking the proofs establishes that the claims are authentic. Whether the credential is still valid is a second check, which the verifier makes by reading the entry the credential points at in the issuer's [[ref: status list]].

~ ToIP reference: [[xref: toip-glossary, verifier]]

~ Language equivalents:

~ [DE] **Verifikator**, **Verifikatorin**

~ [FR] **vérificateur**, **vérificatrice**

~ [IT] **verificatore**, **verificatrice**
