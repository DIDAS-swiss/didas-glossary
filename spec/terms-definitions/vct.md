[[def: vct, Verifiable Credential Type, credential type]]

~ The claim of an SD-JWT VC that identifies the credential's type, as defined by [SD-JWT VC](https://www.ietf.org/archive/id/draft-ietf-oauth-sd-jwt-vc-15.html) (draft 15). Type Metadata for a type describes it further and can be retrieved by consumers.

~ swiyu context ([Swiss Profile VC](https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/), version 1.0): `vct_metadata_uri` (OPTIONAL, **MUST NOT** be a disclosure) points to where the VC Type Metadata can be fetched and takes precedence over Type Metadata resolution via the `vct` claim; when the type is an HTTPS URL, Type Metadata **MUST** be retrieved with HTTP GET. The business claims `vct_version`, `vct_subtype` and `vct_subtype_version` are OPTIONAL and, if present, **MUST** be included in disclosures (Swiss Profile VC, SD-JWT VC section).

~ Example: the [[ref: Beta-ID]] has the type `urn:vct:ch.admin.bcs.betaid`.

~ Does not imply: a `vct` value names a type. It does not establish that the issuer is authorised to issue credentials of that type; for governed types that is established under the [[ref: trust protocol]].

~ Relation to ToIP: no equivalent term. `vct` is a claim of the SD-JWT VC format, not a concept defined in the ToIP Main Glossary.

~ Language equivalents:

~ [DE] **vct** (Claim-Name wird nicht übersetzt)

~ [FR] **vct** (nom de claim non traduit)

~ [IT] **vct** (nome della claim non tradotto)
