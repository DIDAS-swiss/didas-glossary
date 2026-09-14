[[def: trust marker, trust markers, Vertrauensmerkmal, Vertrauensmerkmale, marqueur de confiance, marcatore di fiducia]]

~ An evaluation result derived by an actor, for a specific trust relationship in an ongoing interaction, from applicable valid [[ref: trust statement]]s and the validation rules of the [[ref: trust protocol]]. The applicable statement is issued or published under the trust protocol; the evaluating actor derives the marker.

~ A trust marker is **not** a [[ref: credential]] issued to an actor, not a persistent attribute stored against a DID or held by an organisation, not a registry entry, and not an authorisation document. Two evaluations may produce different marker sets where the applicable statements, the interaction context or the validation inputs differ. The evaluating actor subsequently applies the applicable Swiss Profile requirements and its own policy to those markers when deciding how to proceed.

~ The sequence is: applicable statements → protocol-defined validation → trust markers for the interaction → applicable Swiss Profile requirements and local policy → decision. Policy determines which markers are required and how an actor acts on the result; it does not alter the protocol-defined conditions from which the markers are derived.

~ Relation to ToIP: no equivalent term. The nearest upstream concept is [[xref: toip-glossary, trust-decision]] — the decision a party makes about whether to engage in an interaction. A marker is an input to such a decision rather than the decision itself: deriving a marker does not settle whether to proceed.

~ swiyu context ([Trust Protocol 2.0](https://swiyu-admin-ch.github.io/specifications/trust-protocol-v2-0/), draft): the protocol describes five markers. **viTM**, Verified Identity, where the identity of the actor is validated by the governing actor. **caTM**, Compliant Actor, where the actor was not identified as a non-compliant actor in the ecosystem. **tvTM**, Transparent Verification, where the *type* of verification is published for third-party review, not the individual verification. **gucTM**, Governed use case, where the issuance or verification is identified as protected by a governing actor, so an authorisation is needed to proceed. **gucaTM**, Governed use case authorization, where the applicable authorisation for that use case has been established for the actor in this evaluation.

~ swiyu context — normative force ([Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/), version 1.0, draft): an ecosystem actor **MUST** validate the trust relationship; an actor **MUST** decline a trust relationship for which the evaluation derives gucTM without gucaTM; an actor **SHOULD** decline one without viTM; and the **wallet MAY** decline, during verification, one without caTM or without tvTM.

~ Does not imply: a derived marker indicates only the property defined for that marker and does not establish additional properties. viTM does not establish authorisation for a governed use case. gucaTM does not establish the factual truth of credential claims. A marker does not by itself oblige a relying party to accept a transaction unless the applicable specification or policy requires that result.

~ On implementation objects: a verifier's API response may carry a field named for a marker. Such a field is the result of that verifier's evaluation for that interaction, and is not a property of the counterparty that can be cached and reused as one.

~ Language equivalents:

~ [DE] **Vertrauensmerkmal** — in der Praxis wird meist **Trust Marker** verwendet

~ [FR] **marqueur de confiance**

~ [IT] **marcatore di fiducia**
