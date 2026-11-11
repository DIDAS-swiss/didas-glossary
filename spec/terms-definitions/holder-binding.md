[[def: holder binding, key binding, Holder-Bindung, Schlüsselbindung, liaison au détenteur, vincolo al titolare]]

~ The binding of a [[ref: credential]] to a cryptographic key controlled by the holder, so that a [[ref: verifier]] can check that a presentation was produced by whoever controls that key. The [[ref: issuer]] writes the holder's public key into the credential at issuance; at presentation, the wallet signs a statement with the matching private key.

~ swiyu context (Swiss Profile, `swiss-profile-vc:1.0.0`): an SD-JWT credential is bound by the `cnf` claim with the `jwk` confirmation method, and an issuer that wants key binding must use it; one bound key per credential (section 4.1.2). The presentation carries a Key Binding JWT signed with that key, whose `aud` must be the `client_id` of the verifier, after the wallet has checked that the `client_id` belongs to that verifier (section 4.3). Where an issuer requires a hardware-bound key, the wallet proves this with a key attestation ([Swiss Profile Issuance](https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/), Appendix D). With [[ref: batch issuance]], each credential of the batch is bound to a different key.

~ Does not imply: holder binding shows control of a key, usually held in one device. It does not by itself show that the person controlling the device is the subject of the credential, and it is not identity proofing. Whether control of the key is enough for a given transaction, or whether a portrait or another check is needed in addition, is a [[ref: governance]] and policy question for the use case.

~ Relation to ToIP: related but not equivalent — [[xref: toip-glossary, holder-binding]], which defines a relationship between the holder and the digital wallet. This term names the binding between a credential and a key the holder controls. The nearest upstream concept for that mechanism is [[xref: toip-glossary, cryptographic-binding]].

~ Language equivalents:

~ [EN] **key binding** is used as a synonym in the SD-JWT specifications and the Swiss Profile

~ [DE] **Holder-Bindung**, **Schlüsselbindung** *(proposed)*

~ [FR] **liaison au détenteur** *(proposed)*

~ [IT] **vincolo al titolare** *(proposed)*
