[[def: trust protocol, trust protocols, Vertrauensprotokoll, protocole de confiance, protocollo di fiducia]]

~ The rules by which a party in a digital trust [[ref: ecosystem]] establishes what role another party is authorised to play, and by which that authorisation is published in a form the first party can check for itself.

~ A trust protocol answers a different question from the protocols that carry the data. OpenID4VCI and OpenID4VP establish that a message is well formed and correctly signed; the trust protocol establishes whether the sender is authorised to make the statement it is making, or to ask the question it is asking.

~ [DIDAS — trust protocol]: establishes a secure framework for trusting digital identities between issuers and verifiers, ensuring proper authentication.

~ [swiyu — Trust Protocol 2.0]: the swiyu trust protocol, at version 2.0 (status: draft), introduced by change dossier [CD-006](https://swiyu-admin-ch.github.io/change-dossiers/CD-006-Trust-Protocol-2.0/) and specified in [trust-protocol-v2-0](https://swiyu-admin-ch.github.io/specifications/trust-protocol-v2-0/). The protocol is based on [JWTs](https://datatracker.ietf.org/doc/html/rfc7519) signed by a root trust anchor; in the context of the protocol these JWTs are referred to as statements (trust statements, trust list statements and public statements). Actors resolve statements into **trust markers** to assess the trust relationship in an ongoing interaction.

~ The protocol describes five trust markers:

~ **viTM** (Verified Identity Trust Marker) — the identity of the actor is validated by the governing actor.

~ **caTM** (Compliant Actor Trust Marker) — the actor was not identified as a non-compliant actor in the ecosystem.

~ **tvTM** (Transparent Verification Trust Marker) — the type of verification being performed is published for third-party review.

~ **gucTM** (Governed use case Trust Marker) — the issuance or verification is identified as protected by a governing actor; a valid authorisation is needed to proceed.

~ **gucaTM** (Governed use case authorization Trust Marker) — the issuer or verifier holds the authorisation by the governing actor to process this use case.

~ The [Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/) (`swiss-profile-trust:1.0`) defines which markers are required for a trusted relationship, and it addresses the two normative levels to different parties. An **actor** of the ecosystem MUST decline a trust relationship that carries the gucTM but not the gucaTM, and SHOULD decline one without the viTM. The **wallet** MAY decline a relationship without the caTM, and MAY decline one without the tvTM; the profile gives a holder-consented override of the tvTM requirement as a good reason not to require it.

~ ToIP reference: no equivalent term. The nearest concept is [[xref: toip-glossary, trust-spanning-protocol]], which provides authentic and optionally confidential message transport between endpoints, where the trust protocol provides authorisation. For the generic concept, see [[ref: protocol]].

~ Language equivalents:

~ [DE] **Vertrauensprotokoll** — in der Praxis wird auch im Deutschen meist **Trust Protocol** verwendet

~ [FR] **protocole de confiance**

~ [IT] **protocollo di fiducia**
