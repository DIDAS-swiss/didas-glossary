[[def: proximity verification, Proximity Verification]]

~ The verification of a credential presented from a holder's device to a reader in physical proximity.

~ swiyu context ([Swiss Profile Proximity](https://swiyu-admin-ch.github.io/specifications/swiss-profile-proximity/), version 1.0, draft): the profile specifies peer-to-peer proximity verification based on ISO/IEC 18013-5 for engagement and transport, extended with the Digital Credentials API. The reader and the device **MUST** follow ISO/IEC 18013-5 in establishing an encrypted channel, and the device **MUST** follow the "DC-API over ISO-18013-5" specification. A reader **MUST** support ECDH-ES with Curve25519 and P-256 and AES-256-GCM; a device **MUST** support ECDH-ES with Curve25519 and AES-256-GCM. In the profile's terms, the reader and the CheckApp refer to the same instance, as do the device and the wallet.

~ Does not imply: using ISO/IEC 18013-5 for transport does not mean ISO mdoc credentials are supported; the Swiss Profiles do not support the ISO mdoc credential format (see [[ref: verifiable credential]]).

~ Relation to ToIP: no equivalent term.

~ Language equivalents:

~ [DE] **Proximity Verification** (der englische Begriff wird verwendet)

~ [FR] **vérification de proximité** *(proposed)*

~ [IT] **verifica di prossimità** *(proposed)*
