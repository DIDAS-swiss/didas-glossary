[[def: batch issuance, Batch-Ausstellung, émission par lot, emissione in batch]]

~ The issuance of several [[ref: credential]]s with the same credential dataset in response to one issuance request, each bound to a different holder key. The wallet sends one proof of possession per key, and the [[ref: issuer]] returns one credential per proof.

~ Purpose. Batch issuance lets a [[ref: wallet]] present a different credential, with a different key and signature, to each [[ref: verifier]], which is one of the mechanisms behind [[ref: unlinkability]]. It does not help where the disclosed data itself links presentations.

~ swiyu context (Swiss Profile, `swiss-profile-issuance:1.0.0`): batch issuance follows OpenID4VCI batch credential issuance as profiled by the [Swiss Profile Issuance](https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/). It is recommended for privacy-relevant use cases. The issuer metadata names a `batch_size`, which must be at least 10; the wallet may send fewer proofs, and the issuer must create as many credentials as proofs received (sections 12.2.4 and 14.A). `iat`, `exp` and `nbf` must be the same within a batch and should be rounded (section 15.4.1). The profile advises against batch issuance where the data itself links presentations, and for credentials meant to be counted, such as day passes, multi-ride tickets or loyalty cards, because every credential in a batch carries the same content (section 14.6). The swiyu issuer software assigns each credential of a batch its own [[ref: status list]] index, chosen at random from the free indexes.

~ Does not imply: the profile states that no wallet is guaranteed to use each credential of a batch only once, and that issuers and verifiers should not rely on it. Batch issuance does not by itself establish holder binding to a natural person; see [[ref: holder binding]].

~ Relation to ToIP: no equivalent term. The nearest concept is [[xref: toip-glossary, issuance]], which names the act of issuing a credential; it does not name issuing several key-separated copies of one credential dataset.

~ Language equivalents:

~ [DE] **Batch-Ausstellung** *(proposed: Stapelausstellung is also possible and an editor should rule)*

~ [FR] **émission par lot** *(proposed)*

~ [IT] **emissione in batch** *(proposed)*
