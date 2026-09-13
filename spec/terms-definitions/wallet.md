[[def: wallet, wallets, Wallet, portefeuille, portefeuilles, portafoglio, portafogli]]

~ A user agent, optionally including a hardware component, that stores and processes cryptographic keys and [[ref: credential]]s and enables its controller to perform cryptographically verifiable operations — in particular to receive credentials at issuance and to release [[ref: claim]]s from them in presentations. Wallets exist in different models: personal and organisational, custodial and non-custodial; the holder and the wallet operator need not be the same party.

~ Relation to ToIP: equivalent with Swiss extension — [[xref: toip-glossary, digital-wallet]]. The ToIP Main Glossary files `wallet` as a pointer to `digital wallet` and explicitly covers custodial and non-custodial, personal and enterprise forms; this glossary keeps that breadth.

~ swiyu context: the **swiyu wallet** is one specific instance — a non-custodial personal wallet application published by the Confederation, holding the e-ID alongside credentials from other [[ref: issuer]]s, with keys held on the holder's device. In issuance it follows [Swiss Profile Issuance](https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/) (OpenID4VCI 1.0, DPoP; hardware-bound key attestation where a credential requires it), in presentation [Swiss Profile Verification](https://swiyu-admin-ch.github.io/specifications/swiss-profile-verification/) (OpenID4VP 1.0), including the wallet-side validation duties the profiles assign to it — for example verifying that a verifier's `client_id` belongs to the entity that signed the request before including it in the key-binding JWT ([Swiss Profile VC](https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/), "Validation of aud claim"). Statements about other wallet models in the swiyu ecosystem (organisational wallets, backup and recovery arrangements) belong to the respective specifications and are not asserted here.

~ In an interactive presentation flow, the wallet may require the holder to approve or decline the requested presentation, and under the [[ref: trust protocol]] it can show the verifier's trust markers before the holder decides. This user interaction must not automatically be interpreted as legal, medical or research consent — whether a disclosure approval also constitutes consent in a legal sense is determined by the applicable law, not by the protocol flow.

~ Language equivalents:

~ [DE] **Wallet** (der englische Begriff wird auch im Deutschen verwendet; die Anwendung des Bundes heisst swiyu Wallet)

~ [FR] **portefeuille**

~ [IT] **portafoglio**
