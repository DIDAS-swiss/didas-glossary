[[def: trust statement, trust statements, Vertrauensaussage, Vertrauensaussagen, déclaration de confiance, dichiarazione di fiducia]]

~ A signed artefact issued under a [[ref: trust protocol]] that expresses trust or governance information about one or more actors or interactions and can be validated as an input to trust evaluation. A statement may concern a specific actor identifier and may be provisioned by that actor through the protocol, for example in issuer metadata or an authorization request. It is not a [[ref: credential]] held by the subject. Being the subject or carrier of a statement does not itself establish a [[ref: trust marker]] or determine whether an interaction may proceed. An evaluating actor validates the applicable statement and applies the trust protocol rules to derive the relevant marker.

~ Relation to ToIP: related but not equivalent — [[xref: toip-glossary, attestation]], whose definition is the issue of a statement, based on a decision, that fulfilment of specified requirements has been demonstrated, usually carrying a digital signature. The concepts overlap in shape. They differ in scope: an attestation is any such signed statement, while a trust statement is the specific artefact class a trust protocol defines, publishes and evaluates for evaluating trust and governance conditions relevant to an interaction. For the list-shaped case see also [[xref: toip-glossary, trust-list]].

~ swiyu context ([Trust Protocol 2.0](https://swiyu-admin-ch.github.io/specifications/trust-protocol-v2-0/), draft, introduced by change dossier [CD-006](https://swiyu-admin-ch.github.io/change-dossiers/CD-006-Trust-Protocol-2.0/)): statements are JWTs signed by a root trust anchor, and the protocol distinguishes three shapes. **Trust statements** concern a single subject and follow a verification process. **Trust list statements** apply to several subjects at once. **Public statements** are published for third-party review rather than about a counterparty; the Verification Query Public Statement (vqPS), in which a [[ref: verifier]] publishes the query it will send and the purpose it will send it for, is one. The specification defines statement types including `idTS` (Identity Trust Statement), `vqPS` (Verification Query Public Statement), `pvaTS` (Protected Verification Authorization Trust Statement), `piaTS` (Protected Issuance Authorization Trust Statement), `piTLS` (Protected Issuance Trust List Statement), and `ncTLS` (Non-Compliance Trust List Statement).

~ Where statements are published and retrieved: the [Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/) names the swiyu Trust Registry as the component through which applicable statements are published and served, and names the root trust anchors. The registry is infrastructure for publication and retrieval; it does not decide what an actor may do.

~ Does not imply: a valid statement does not by itself establish that an interaction may proceed, oblige a relying party to accept the interaction, or establish the factual truth of information outside the statement's defined semantics. A statement that fails validation **MUST NOT** contribute to setting the corresponding [[ref: trust marker]].

~ Language equivalents:

~ [DE] **Vertrauensaussage** — in der Praxis wird meist **Trust Statement** verwendet

~ [FR] **déclaration de confiance**

~ [IT] **dichiarazione di fiducia**
