[[def: trust protocol, trust protocols, Vertrauensprotokoll, protocole de confiance, protocollo di fiducia]]

~ The rules and mechanisms by which actors in a digital trust [[ref: ecosystem]] publish, provision, retrieve, validate and evaluate trust and governance statements, and derive [[ref: trust marker]]s for an ongoing interaction.

~ Authorisation is one application of the protocol, not its definition. Statements evaluated under a trust protocol can also express validated identity, non-compliance information, verification transparency, and whether an issuance or verification is governed.

~ A trust protocol answers a different question from the protocols that carry credentials. OpenID4VCI and OpenID4VP are protocols for [[ref: credential]] issuance and presentation respectively; the trust protocol is the mechanism for publishing and evaluating ecosystem trust information, governed-use-case information and authorisations.

~ Relation to ToIP: no equivalent term. The nearest concept is [[xref: toip-glossary, trust-spanning-protocol]], but it differs because TSP addresses message transport between endpoints (authenticity and optional confidentiality of the channel), whereas the trust protocol addresses authorisation and trust information about the parties. For the generic concept, see [[ref: protocol]].

~ swiyu context — specification ([Trust Protocol 2.0](https://swiyu-admin-ch.github.io/specifications/trust-protocol-v2-0/), draft, introduced by change dossier [CD-006](https://swiyu-admin-ch.github.io/change-dossiers/CD-006-Trust-Protocol-2.0/)): the protocol is based on [JWTs](https://datatracker.ietf.org/doc/html/rfc7519) signed by a root trust anchor. Three concepts must be kept apart, and they sit at different layers. **[[ref: trust statement]]s** are the signed artefacts published under the protocol: trust statements about a single subject, trust list statements applying to several subjects, and public statements such as the vqPS. **Trust evaluation** is the validation of the applicable statements for a particular relationship or interaction. **[[ref: trust marker]]s** are the result the evaluating actor derives from valid applicable statements and the protocol's rules. A statement that fails validation **MUST NOT** contribute to setting the corresponding marker.

~ Authorisation is not a separate artefact class. It is represented through specific statement types, including `piaTS` for protected issuance and `pvaTS` for protected verification, and is reflected in the resulting trust marker when the required validations succeed.

~ The protocol describes five trust markers:

~ **viTM** (Verified Identity Trust Marker) — the identity of the actor is validated by the governing actor.

~ **caTM** (Compliant Actor Trust Marker) — the actor was not identified as a non-compliant actor in the ecosystem.

~ **tvTM** (Transparent Verification Trust Marker) — the type of verification being performed is published for third-party review; not the individual verification, only its published type.

~ **gucTM** (Governed use case Trust Marker) — the issuance or verification is identified as protected by a governing actor; a valid authorisation is needed to proceed.

~ **gucaTM** (Governed use case authorization Trust Marker) — the governing actor's authorisation for the issuer or verifier to process this use case has been established in this evaluation.

~ swiyu context — normative force ([Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/), version 1.0, draft): an ecosystem actor **MUST** validate the trust relationship; an actor **MUST** decline a trust relationship for which the evaluation derives gucTM without gucaTM; an actor **SHOULD** decline one for which viTM is not derived; and the **wallet MAY** decline, during verification, where caTM or tvTM is not derived. The Swiss Profile Trust also defines the environment specifics: root trust anchors, the swiyu Trust Registry, and the protected fields (currently the AHV number, `personal_administrative_number`).

~ Does not imply: a derived trust marker indicates only the property defined for that marker and does not establish additional properties. In particular, viTM does not establish authorisation for a governed use case, gucaTM does not establish the factual truth of credential claims, and no marker by itself obliges a relying party to accept a presentation.

~ Language equivalents:

~ [DE] **Vertrauensprotokoll** — in der Praxis wird auch im Deutschen meist **Trust Protocol** verwendet

~ [FR] **protocole de confiance**

~ [IT] **protocollo di fiducia**
