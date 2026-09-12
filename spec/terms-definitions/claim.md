[[def: claim, claims, Angabe, Angaben, affirmation, affirmations, affermazione, affermazioni]]

~ An assertion about a subject, made by the [[ref: issuer]] of the [[ref: credential]] that carries it and judged by the [[ref: verifier]] that receives it.

~ In the swiyu trust [[ref: ecosystem]] the claim is also the unit of disclosure. Credentials are issued in the **IETF SD-JWT VC** format, in which each claim can be released or withheld on its own, so a [[xref: toip-glossary, holder]] answers a request with the claims that request names while the remaining claims stay in the [[ref: wallet]]. See [[ref: selective disclosure]].

~ Because the claim is the unit of disclosure, it is also the unit that [[ref: governance]] is written against. An entitlement names the claims a role may ask for, and a protected claim needs an explicit authorisation on top of the entitlement. The AHV number, carried as `personal_administrative_number`, is such a claim under the [[ref: trust protocol]].

~ ToIP reference: [[xref: toip-glossary, claim]]

~ Supporting definitions:

~ [W3C VC](https://www.w3.org/TR/vc-data-model/#terminology): An assertion made about a subject.

~ Language equivalents:

~ [DE] **Angabe** *(proposed: usage is unsettled between Angabe, Aussage and Attribut, and an editor should rule)*

~ [FR] **affirmation** *(proposed)*

~ [IT] **affermazione** *(proposed)*
