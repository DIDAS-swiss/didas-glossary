[[def: did:webvh, did webvh, did:web + Verifiable History]]

~ A web-based DID method in which each DID carries a log of its DID document versions with a cryptographically verifiable history. Specified as [did:web + Verifiable History, version 1.0](https://identity.foundation/didwebvh/v1.0/).

~ swiyu context ([Swiss Profile Anchor](https://swiyu-admin-ch.github.io/specifications/swiss-profile-anchor/), version 1.0): did:webvh 1.0 is the DID method of the swiyu trust infrastructure, and participants register their identifiers in the [[ref: base registry]]. DID parameters **MUST NOT** be used; the DID method parameter `portable` **MUST** be set to false, `witness` **MUST** be set to `{}` and `watchers` **MUST** be set to `[]`, because DID portability, witnesses and watchers are not supported in the Base Registry. The `controller` property, where used, **MUST** point to the DID itself; `alsoKnownAs` and `services` are not supported by the Base Registry.

~ Does not imply: resolving a did:webvh DID establishes which keys the DID controller published. It does not establish the identity of the organisation behind the DID; that is the subject of [[ref: trust statement]]s under the [[ref: trust protocol]].

~ Relation to ToIP: no equivalent term for this specific method. The nearest concepts are [[xref: toip-glossary, did-method]] and [[xref: toip-glossary, decentralized-identifier]]; did:webvh is one DID method in that sense.

~ Language equivalents:

~ [DE] **did:webvh** (Methodenbezeichner wird nicht übersetzt)

~ [FR] **did:webvh** (identifiant de méthode non traduit)

~ [IT] **did:webvh** (identificatore di metodo non tradotto)
