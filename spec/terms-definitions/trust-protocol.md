[[def: trust protocol, trust protocols, Vertrauensprotokoll, protocole de confiance, protocollo di fiducia]]

~ The rules by which a party in a digital trust [[ref: ecosystem]] establishes what role another party is authorised to play, and by which that authorisation is published in a form the first party can evaluate for itself.

~ A trust protocol answers a different question from the protocols that carry credentials. OpenID4VCI and OpenID4VP are protocols for [[ref: credential]] issuance and presentation respectively; the trust protocol is the mechanism for publishing and evaluating ecosystem trust information, governed-use-case information and authorisations.

~ Relation to ToIP: no equivalent term. The nearest concept is [[xref: toip-glossary, trust-spanning-protocol]], but it differs because TSP addresses message transport between endpoints (authenticity and optional confidentiality of the channel), whereas the trust protocol addresses authorisation and trust information about the parties. For the generic concept, see [[ref: protocol]].

~ swiyu context — specification ([Trust Protocol 2.0](https://swiyu-admin-ch.github.io/specifications/trust-protocol-v2-0/), draft, introduced by change dossier [CD-006](https://swiyu-admin-ch.github.io/change-dossiers/CD-006-Trust-Protocol-2.0/)): the protocol is based on [JWTs](https://datatracker.ietf.org/doc/html/rfc7519) signed by a root trust anchor. Three concepts must be kept apart, and they sit at different layers. **[[ref: trust statement]]s** are the signed artefacts published under the protocol: trust statements about a single subject, trust list statements applying to several subjects, and public statements such as the vqPS. **Trust evaluation** is the validation of the applicable statements for a particular relationship or interaction. **[[ref: trust marker]]s** are the result the evaluating actor derives from valid applicable statements and the protocol's rules. A statement that fails validation **MUST NOT** contribute to setting the corresponding marker.

~ Authorisation is not a fourth artefact alongside those. It is content: the governing actor's permission for a use case, expressed through specific statement types such as `piaTS` for protected issuance and `pvaTS` for protected verification, and reflected in a marker when an evaluation validates them.

~ The protocol describes five trust markers:

~ **viTM** (Verified Identity Trust Marker) — the identity of the actor is validated by the governing actor.

~ **caTM** (Compliant Actor Trust Marker) — the actor was not identified as a non-compliant actor in the ecosystem.

~ **tvTM** (Transparent Verification Trust Marker) — the type of verification being performed is published for third-party review; not the individual verification, only its published type.

~ **gucTM** (Governed use case Trust Marker) — the issuance or verification is identified as protected by a governing actor; a valid authorisation is needed to proceed.

~ **gucaTM** (Governed use case authorization Trust Marker) — the governing actor's authorisation for the issuer or verifier to process this use case has been established in this evaluation.

~ swiyu context — normative force ([Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/), version 1.0, draft): an ecosystem actor **MUST** validate the trust relationship; an actor **MUST** decline a trust relationship that carries gucTM without gucaTM; an actor **SHOULD** decline a trust relationship without viTM; and the **wallet MAY** decline, during verification, a trust relationship without caTM or without tvTM. The Swiss Profile Trust also defines the environment specifics: root trust anchors, the swiyu Trust Registry, and the protected fields (currently the AHV number, `personal_administrative_number`).

~ Does not imply: a derived trust marker attests exactly the property named above — no more. In particular, viTM does not make an actor authorised for a use case, gucaTM does not make its statements factually true, and no marker obliges a relying party to accept a presentation.

~ Language equivalents:

~ [DE] **Vertrauensprotokoll** — in der Praxis wird auch im Deutschen meist **Trust Protocol** verwendet

~ [FR] **protocole de confiance**

~ [IT] **protocollo di fiducia**
