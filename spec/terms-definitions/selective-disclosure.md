[[def: selective disclosure, selektive Bekanntgabe, divulgation sélective, divulgazione selettiva]]

~ The property that a [[xref: toip-glossary, holder]] can release some of the [[ref: claim]]s in a [[ref: credential]] and keep the others, so a [[ref: verifier]] receives the claims it asked for and is entitled to, and learns nothing about the remaining claims.

~ In the swiyu trust [[ref: ecosystem]] selective disclosure is a property of the credential format. Credentials are issued as **IETF SD-JWT VC**, in which the [[ref: issuer]] commits to each claim separately at issuance time and the holder chooses at presentation time which of those commitments to open. A verifier can check every claim it receives against the issuer's original signature while the claims it did not receive stay hidden from it.

~ Selective disclosure limits what one verifier learns from one presentation. It does not by itself prevent two verifiers, or one verifier across two presentations, from recognising that they saw the same holder. That property is unlinkability and it is a separate question.

~ ToIP reference: no equivalent term, which is why this term is defined locally. The nearest neighbours upstream are [[xref: toip-glossary, presentation]] and [[xref: toip-glossary, verifiable-credential]], and neither names this property.

~ Language equivalents:

~ [DE] **selektive Bekanntgabe** *(proposed: selektive Offenlegung is also in use and an editor should rule)*

~ [FR] **divulgation sélective**

~ [IT] **divulgazione selettiva**
