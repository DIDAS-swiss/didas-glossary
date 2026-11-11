[[def: unlinkability, Unverkettbarkeit, non-associabilité, non collegabilità]]

~ The property that the parties receiving two or more presentations from the same [[ref: wallet]] cannot tell, from the data and cryptographic material in those presentations, that they come from the same holder or the same [[ref: credential]]. Unlinkability is always stated relative to a set of observers: separate [[ref: verifier]]s, one verifier across several presentations, or a verifier together with the [[ref: issuer]].

~ What breaks it. A presentation is linkable as soon as it carries a value that repeats across presentations: a disclosed identifying [[ref: claim]] such as a name or a portrait, a signature or holder key that is reused, a [[ref: status list]] index, or an issuance timestamp. Unlinkability therefore depends both on the credential mechanisms and on which claims a presentation request asks for.

~ swiyu context (Swiss Profile, `swiss-profile-issuance:1.0.0`, `swiss-profile-vc:1.0.0`): SD-JWT credentials carry the same issuer signature and holder key in every presentation, so a single credential is linkable across verifiers. The profile addresses this with [[ref: batch issuance]]: several credentials with the same data, each bound to a different holder key, with identical and rounded `iat`, `exp` and `nbf` values within a batch ([Swiss Profile Issuance](https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/), sections 14.6, 14.A and 15.4.1). The swiyu issuer software gives each credential of a batch its own status list index, chosen at random from the free indexes ([swiyu-issuer](https://github.com/swiyu-admin-ch/swiyu-issuer/blob/22b291cb85f6fc7b6ed4da332a6e04a37f799e24/CHANGELOG.md#L506-L507), release 2.2.0). The profile states that no wallet is guaranteed to use each credential of a batch only once, and that issuers and verifiers should not rely on it.

~ Does not imply: unlinkability does not cover links made through context outside the presentation, such as time, place, IP address or payment data; that is [[xref: toip-glossary, contextual-linkability]]. It does not give anonymity where the presentation discloses identifying claims. Batch issuance does not prevent linking by an issuer and a verifier who share data, because the issuer receives every holder key in the batch at issuance.

~ Relation to ToIP: no equivalent term. The nearest concepts are [[xref: toip-glossary, contextual-linkability]], which names linking through context at the point of capture, and [[xref: toip-glossary, correlation-privacy]], which names protection against correlation of the parties to a message; neither names the property of a credential presentation defined here.

~ Language equivalents:

~ [DE] **Unverkettbarkeit** *(proposed)*

~ [FR] **non-associabilité** *(proposed)*

~ [IT] **non collegabilità** *(proposed)*
