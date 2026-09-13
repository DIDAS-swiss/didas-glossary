[[def: Beta-ID, Beta-IDs, BetaID, Beta ID, Bêta-ID]]

~ A pseudo-identity test [[ref: credential]] issued in the swiyu Public Beta (sandbox) environment, carrying the same attribute definitions as the coming Swiss e-ID. The Beta-ID is a blueprint of the e-ID credential for building and testing use cases; it is **not a proof of identification**: its attribute values are chosen by the requester in the request form, and the issuing service does not check them.

~ Issuance and lifecycle: anyone can obtain a Beta-ID from the Beta Credential Service ([BCS](https://www.bcs.admin.ch/bcs-web)), which also verifies and revokes it. After issuance, the BCS deletes all data except the Beta-ID number, which is retained for revocation; the credential data then exists only in the [[ref: wallet]] it was issued to. A revocation cannot be reverted — a governance decision, not a technical limitation.

~ Format and identification: the Beta-ID is issued as an SD-JWT VC per the Swiss Profile. Its credential type (`vct`) is `urn:vct:ch.admin.bcs.betaid` (activated 2026-06-25; the previous value `betaid-sdjwt` remains in use during migration, so verifier queries list both). The credential schema and the concepts behind the attributes are published on the Confederation's interoperability platform I14Y as dataset [`urn:vct:ch.admin.bcs.betaid`](https://www.i14y.admin.ch/en/catalog/datasets/urn:vct:ch.admin.bcs.betaid/description).

~ Schema — the selectively disclosable attributes, as in the issued credential:

~ **Person attributes**: `given_name`, `family_name`, `birth_date`, `birth_place`, `place_of_origin`, `sex`, `nationality`, `personal_administrative_number` (AHV/AVS number; a protected field for verification under the [[ref: trust protocol]] — test values should match the 756-prefix EAN-13 check-digit pattern), `portrait`, `additional_person_info`.

~ **Derived age attributes**: `age_over_16`, `age_over_18`, `age_over_65`, `age_birth_year`.

~ **Document attributes**: `document_number`, `issuance_date`, `expiry_date`, `issuing_authority`, `issuing_country`. The `document_number` is not a persistent identifier: it changes with each new Beta-ID, and — like the e-ID — the Beta-ID contains no persistent identifier for private-sector use.

~ **Verification metadata**: `reference_id_type`, `reference_id_expiry_date`, `verification_organization`, `verification_type`.

~ **Technical claims** (not selectively disclosable, per the Swiss Profile): `vct`, `iss`, `cnf`, `iat`, `status` (Token Status List reference — see [[ref: status list]]).

~ I14Y dataset record (verified against the official I14Y export): the dataset `urn:vct:ch.admin.bcs.betaid` is published by the Federal Office of Police (fedpol) and has been recorded since 18 February 2025, with the Beta Credential Service listed as its distribution. The record classifies access as *restricted* and the content as *containing particularly sensitive personal data* — consistent with the guidance not to enter real personal data when creating a Beta-ID.

~ Relation to ToIP: no equivalent term. The Beta-ID is a specific credential type of the swiyu ecosystem, an instance of the generic [[xref: toip-glossary, credential]] concept, not a term ToIP defines.

~ Does not imply: because all attribute values are self-declared, a cryptographically verified Beta-ID presentation establishes issuer authorship, integrity and status — nothing about the person. Verifier and holder applications must treat Beta-ID data as untrusted user input (including the portrait image), and the Beta-ID must not be used as an identity credential in productive business cases.

~ Sources: [How to use Beta-ID for my business](https://swiyu-admin-ch.github.io/cookbooks/how-to-use-beta-id/) (swiyu cookbook, including the issued-credential example this schema listing is taken from); [I14Y dataset urn:vct:ch.admin.bcs.betaid](https://www.i14y.admin.ch/en/catalog/datasets/urn:vct:ch.admin.bcs.betaid/description) (dataset record verified 2026-09-14 against the official export; attribute-level concept descriptions on I14Y not yet cross-checked); vct activation per [swiyu release note 2026-06-25](https://swiyu-admin-ch.github.io/2026/06/25/new-versions-released.html).

~ Language equivalents:

~ [DE] **Beta-ID**

~ [FR] **Bêta-ID** (spelling per the official French I14Y description)

~ [IT] **Beta-ID**
