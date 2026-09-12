[[def: verifier, verifiers, Verifikator, Verifikatorin, vérificateur, vérificatrice, verificatore, verificatrice]]

~ The role an organisation performs when it asks a [[xref: toip-glossary, holder]] for [[ref: claim]]s and checks the proofs that come back. Other specifications call this role the relying party.

~ In the swiyu trust [[ref: ecosystem]] a verifier states what it wants as a query, and the query is where data minimisation is enforced: a verifier that holds no entitlement to a claim cannot ask for it. Checking a presentation after the [[ref: wallet]] has answered would come too late, because the claim has already left the wallet.

~ A verifier's own standing is visible to the holder. Under the [[ref: trust protocol]] a verifier can carry trust markers, so the wallet can show who is asking before the holder agrees to answer.

~ Checking the proofs establishes that the claims are authentic. Whether the credential is still valid is a second check, which the verifier makes by reading the entry the credential points at in the issuer's [[ref: status list]].

~ ToIP reference: [[xref: toip-glossary, verifier]]

~ Language equivalents:

~ [DE] **Verifikator**, **Verifikatorin**

~ [FR] **vérificateur**, **vérificatrice**

~ [IT] **verificatore**, **verificatrice**
