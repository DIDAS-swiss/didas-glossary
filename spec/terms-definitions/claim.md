[[def: claim, claims, Angabe, Angaben, affirmation, affirmations, affermazione, affermazioni]]

~ An assertion about a subject. A claim is asserted by the [[ref: issuer]] of the [[ref: credential]] that carries it; whether it is disclosed in a given presentation is decided by the [[xref: toip-glossary, holder]]; whether the received proofs verify is evaluated technically by the [[ref: verifier]]; and whether the claim is accepted for a purpose is a decision of the relying party. None of these four steps implies any of the others, and none of them establishes the factual truth of the assertion.

~ Relation to ToIP: equivalent with Swiss extension — [[xref: toip-glossary, claim]].

~ swiyu context (Swiss Profile, `swiss-profile-vc:1.0.0`): credentials are issued in the **IETF SD-JWT VC** format, in which the claim is the unit of [[ref: selective disclosure]] — with defined exceptions. Application claims must be selectively disclosable (the issuer-signed payload "MUST NOT contain one or more permanently disclosed claims"), while specified registered JWT claims are excluded from disclosure: `iat`, `exp` and `vct_metadata_uri` must not be disclosures, whereas `sub` and the business claim `expiry_date` — contrary to the upstream standard's default — must be disclosures ([Swiss Profile VC](https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/), sections 4.1 and "SD-JWT VC"). It is therefore not the case that every claim in a credential can independently be released or withheld.

~ swiyu governance context: the [Swiss Profile Trust](https://swiyu-admin-ch.github.io/specifications/swiss-profile-trust/) defines *protected fields* — claims that a verifier needs a specific authorisation to verify, enforced through the [[ref: trust protocol]]. The currently listed protected field is the AHV number, carried as `personal_administrative_number`. Which claims a verifier may request or process is a governance question, separate from the disclosure mechanics above.

~ Supporting definitions:

~ [W3C VC](https://www.w3.org/TR/vc-data-model/#terminology): An assertion made about a subject.

~ Language equivalents:

~ [DE] **Angabe** *(proposed: usage is unsettled between Angabe, Aussage and Attribut, and an editor should rule)*

~ [FR] **affirmation** *(proposed)*

~ [IT] **affermazione** *(proposed)*
