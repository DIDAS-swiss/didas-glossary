[[def: OCA, Overlays Capture Architecture]]

~ An architecture that describes the structure, semantics and presentation of data in separate layers: a capture base defines the attributes, and overlays add information such as labels, formats or display properties ([OCA specification 1.0.1](https://oca.colossi.network/specification/v1.0.1)).

~ swiyu context ([oca-v1-0](https://swiyu-admin-ch.github.io/specifications/oca-v1-0/), version 1.0, draft): the specification extends OCA with requirements for visualising [[ref: verifiable credential]]s in a mobile wallet. An OCA bundle **SHOULD** be represented by a JSON file and **MUST** contain `capture_bases`, with exactly one root capture base, and `overlays`. An issuer that provides OCA rendering instructions for an SD-JWT VC **MUST** add a render property with the `oca` rendering method to the Type Metadata (see [[ref: vct]]); its `uri` points to the OCA bundle, and where `uri#integrity` is given, consumers **MUST** verify the integrity of the retrieved document.

~ Does not imply: OCA governs how a credential is displayed. It does not change the credential's claims or their validity.

~ Relation to ToIP: no equivalent term.

~ Language equivalents:

~ [DE] **OCA** (Abkürzung wird nicht übersetzt)

~ [FR] **OCA** (sigle non traduit)

~ [IT] **OCA** (sigla non tradotta)
