[[def: selective disclosure, selektive Bekanntgabe, divulgation sélective, divulgazione selettiva]]

~ Selective disclosure allows selected [[ref: claim]]s from a [[ref: credential]] to be included in a presentation while other selectively disclosable claim values are omitted.

~ Four separate points, none of which follows from the definition above: the scope of a request is defined by the presentation request; whether a [[ref: verifier]] is authorised to request a claim is a [[ref: governance]] question, not a property of the disclosure mechanism; omitted claim values are not included in the presentation — no stronger secrecy property is implied; and which claims are selectively disclosable at all is determined by the credential format profile at issuance time.

~ Relation to ToIP: no equivalent term; defined locally. The nearest upstream concepts are [[xref: toip-glossary, presentation]] and [[xref: toip-glossary, verifiable-credential]], and neither names this property.

~ swiyu context (Swiss Profile, `swiss-profile-vc:1.0.0`): credentials use **SD-JWT** ([RFC 9901](https://www.rfc-editor.org/rfc/rfc9901.html)) as profiled by the [Swiss Profile VC](https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/): the issuer commits to each selectively disclosable claim separately at issuance, and the holder chooses at presentation time which disclosures to include. Application claims must be selectively disclosable, while specified registered JWT claims (such as `iat` and `exp`) are excluded from disclosure — see [[ref: claim]] for the exact rules. A verifier can check every disclosed claim against the issuer's signature.

~ Does not imply: selective disclosure does not by itself establish anonymity, unlinkability, verifier authorisation or legal data-minimisation compliance. In particular, it does not prevent two verifiers, or one verifier across two presentations, from recognising that they saw the same holder — unlinkability is a separate property with separate mechanisms.

~ Language equivalents:

~ [DE] **selektive Bekanntgabe** *(proposed: selektive Offenlegung is also in use and an editor should rule)*

~ [FR] **divulgation sélective**

~ [IT] **divulgazione selettiva**
