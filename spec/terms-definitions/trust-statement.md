[[def: trust statement, trust statements, Vertrauensaussage, Vertrauensaussagen, déclaration de confiance, dichiarazione di fiducia]]

~ A signed artefact, published under a [[ref: trust protocol]], that expresses trust or governance information about one or more actors or interactions, and that another actor can validate as an input to trust evaluation. A statement is published by a governing or otherwise authoritative actor; it is not sent to the actor it concerns, and holding one is not what makes an actor trusted or authorised. What follows from a valid statement is determined by the trust protocol's evaluation rules and by the evaluating party's own policy.

~ Relation to ToIP: related but not equivalent — [[xref: toip-glossary, attestation]], whose definition is the issue of a statement, based on a decision, that fulfilment of specified requirements has been demonstrated, usually carrying a digital signature. The concepts overlap in shape. They differ in scope: an attestation is any such signed statement, while a trust statement is the specific artefact class a trust protocol defines, publishes and evaluates for the purpose of establishing what role an actor may play in an [[ref: ecosystem]]. For the list-shaped case see also [[xref: toip-glossary, trust-list]].

~ swiyu context ([Trust Protocol 2.0](https://swiyu-admin-ch.github.io/specifications/trust-protocol-v2-0/), draft, introduced by change dossier [CD-006](https://swiyu-admin-ch.github.io/change-dossiers/CD-006-Trust-Protocol-2.0/)): statements are JWTs signed by a root trust anchor, and the protocol distinguishes three shapes. **Trust statements** concern a single subject and follow a verification process. **Trust list statements** apply to several subjects at once. **Public statements** are published for third-party review rather than about a counterparty; the Verification Query Public Statement (vqPS), in which a [[ref: verifier]] publishes the query it will send and the purpose it will send it for, is one. The specification names statement types including `idTS` for identity, `vqPS`, `pvaTS` for protected verification authorisation, `piaTS` for protected issuance authorisation, `PITLS`, and a Non-Compliance Trust List Statement.

~ Where statements are published and retrieved: the [Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/) names the swiyu Trust Registry as the component through which applicable statements are published and served, and names the root trust anchors. The registry is infrastructure for publication and retrieval; it does not decide what an actor may do.

~ Does not imply: a valid statement does not by itself authorise an interaction, oblige a relying party to accept one, or make the information it carries factually true. A statement that fails validation **MUST NOT** contribute to setting the corresponding [[ref: trust marker]].

~ Language equivalents:

~ [DE] **Vertrauensaussage** — in der Praxis wird meist **Trust Statement** verwendet

~ [FR] **déclaration de confiance**

~ [IT] **dichiarazione di fiducia**
