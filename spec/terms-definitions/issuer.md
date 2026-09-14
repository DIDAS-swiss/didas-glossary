[[def: issuer, issuers, Aussteller, Ausstellerin, émetteur, émettrice, emittente, emittenti]]

~ The role an actor performs when it signs a set of [[ref: claim]]s as a [[ref: credential]] and provides that credential to a [[xref: toip-glossary, holder]].

~ Relation to ToIP: equivalent with Swiss extension — [[xref: toip-glossary, issuer]].

~ swiyu protocol context: before issuing, an issuer registers a `did:webvh` identifier (version 1.0) in the Base Registry and publishes the verification material for the keys used to sign its credentials ([Swiss Profile Anchor](https://swiyu-admin-ch.github.io/specifications/swiss-profile-anchor/)). This publication provides the information a [[ref: verifier]] needs for cryptographic signature verification — no more: it identifies the signing key, not the organisation's legitimacy. Issuance itself follows **OpenID4VCI 1.0** as profiled by [Swiss Profile Issuance](https://swiyu-admin-ch.github.io/specifications/swiss-profile-issuance/).

~ The following are separate properties and none follows from another: that a credential's signature verifies (cryptography); who the issuer is (identifier registration); whether the applicable [[ref: trust statement]]s about the issuer are valid; whether the [[ref: trust protocol]] evaluation derives viTM for the issuer in this interaction; whether that evaluation derives the governed use case authorization marker (gucaTM) for the issuer and credential type in this interaction; what the credential's current status is ([[ref: status list]]); and whether a relying party accepts credentials from this issuer (acceptance policy).

~ swiyu governance context: for governed use cases, the governing actor publishes the applicable authorisation statement for the issuer and the credential type. An actor that validates the applicable statements can derive the corresponding [[ref: trust marker]]s for its own interaction under the [[ref: trust protocol]]; the [Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/) defines the normative force of each marker. A trust marker is an evaluation result for an interaction, not a persistent attribute of the issuer.

~ Language equivalents:

~ [DE] **Aussteller**, **Ausstellerin**

~ [FR] **émetteur**, **émettrice**

~ [IT] **emittente**
