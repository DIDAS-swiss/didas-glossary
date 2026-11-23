[[def: holder binding, key binding, Holder Binding, liaison au titulaire, vincolo al titolare]]

~ The cryptographic binding of a [[ref: credential]] to key material under the control of the holder, such that a [[ref: verifier]] can check that a presentation was made with that key.

~ swiyu context ([Swiss Profile VC](https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/), version 1.0, §4.1.2 and §4.3): an issuer that enables key binding includes the `cnf` claim with the `jwk` confirmation method in the SD-JWT; multiple bound keys in the same SD-JWT are **NOT SUPPORTED**. At presentation the wallet proves possession of the bound key with a Key Binding JWT, whose `aud` claim **MUST** be the `client_id` sent in the verifier's request (Swiss Profile VC §4.3).

~ swiyu context — hardware-bound keys ([Swiss Profile Issuance](https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/), version 1.0): where a hardware-bound credential is requested, registering the DPoP key **MUST** come with a key attestation at the security level the issuer allows for the holder binding key, and wallets **MUST** support key attestation. See [[ref: DPoP]].

~ Does not imply: holder binding binds a credential to key material, not to a natural person. Which entity controls the key, and whether that entity is the subject of the credential, lies outside the binding mechanism.

~ Relation to ToIP: related but not equivalent — [[xref: toip-glossary, holder-binding]], which defines holder binding as the relationship between the holder of a digital wallet and the wallet itself. The Swiss Profiles use the term for the binding of a credential to a key, a different relationship.

~ Relation to eIDAS/ARF: the EU framework names a related concept *device-bound attestation* (ARF Annex 1: an attestation cryptographically bound to a private key kept in a WSCA/WSCD or keystore available to the Wallet Unit); the relationship is related but not equivalent, since the ARF definition presupposes EU wallet components that have no standing in the Swiss Profiles. This mapping does not make eIDAS or ARF requirements applicable in the swiyu context.

~ Language equivalents:

~ [DE] **Holder Binding** (der englische Begriff wird verwendet)

~ [FR] **liaison au titulaire** *(proposed)*

~ [IT] **vincolo al titolare** *(proposed)*
