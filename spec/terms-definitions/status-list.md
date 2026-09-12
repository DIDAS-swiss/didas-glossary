[[def: status list, status lists, Statusliste, Statuslisten, liste de statut, elenco di stato]]

~ A published list with one entry per [[ref: credential]], saying whether that credential is still valid. Each credential carries the index that finds its own entry, and nothing else connects the two.

~ In the swiyu trust [[ref: ecosystem]] status lists follow the **IETF Token Status List** specification and are published through the Base Registry. A [[ref: verifier]] fetches the whole list and reads the entry the presented credential points at, so the [[ref: issuer]] learns nothing about which credential was checked, or when, or by whom. A verifier that asked the issuer directly would disclose exactly that.

~ A status list holds status values only. It carries no [[ref: claim]]s, no personal data and no identifier for the person the credential is about.

~ Nearest ToIP equivalent: [[xref: toip-glossary, revocation]], which names the event where an issuer stops attesting to a credential it has issued. The status list is the mechanism that makes such an event checkable by a verifier.

~ Language equivalents:

~ [DE] **Statusliste**

~ [FR] **liste de statut** *(proposed)*

~ [IT] **elenco di stato** *(proposed)*
