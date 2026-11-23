[[def: base registry, Basisregister, registre de base, registro di base]]

~ The registry of the swiyu [[ref: trust infrastructure]], provided by FOITT, in which participants register their [[ref: did:webvh]] identifiers with the associated DID documents, and through which [[ref: status list]]s are published.

~ swiyu context — identifiers ([Swiss Profile Anchor](https://swiyu-admin-ch.github.io/specifications/swiss-profile-anchor/), version 1.0): the Base Registry hosts did:webvh DID logs. It does not support DID portability, witnesses or watchers, `alsoKnownAs`, `services`, or the `keyAgreement`, `capabilityInvocation` and `capabilityDelegation` verification relationships, and the `controller` property **MUST** point to the DID itself.

~ swiyu context — status ([Swiss Profile VC](https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/), version 1.0): "The Base Registry, provided by FOITT, acts as the Status Provider." To prevent observability of issuers, the status provider **MUST** be the registry provided by FOITT; on upload the registry checks, among other things, size limits and signature validity of a status list token.

~ Does not imply: a registered identifier establishes which keys a participant published. It does not establish that the participant is identified, compliant or authorised; those properties are expressed through [[ref: trust statement]]s in the swiyu Trust Registry.

~ Relation to ToIP: related but not equivalent — [[xref: toip-glossary, verifiable-data-registry]], a registry for creating, verifying, updating and deactivating DIDs and DID documents. The Base Registry fulfils that role for the swiyu trust infrastructure and additionally serves as the status provider.

~ Language equivalents:

~ [DE] **Basisregister** (official swiyu translation)

~ [FR] **registre de base** (traduction officielle swiyu)

~ [IT] **registro di base** (traduzione ufficiale swiyu)

~ [RM] **register da basa** (official swiyu translation)
