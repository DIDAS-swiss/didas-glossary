[[def: status list, status lists, Statusliste, Statuslisten, liste de statut, elenco di stato]]

~ A published data structure carrying status information for referenced [[ref: credential]]s: each referenced credential carries an index that locates its entry, and the entry holds a status value for that credential. A status value is one input to credential acceptance, not a statement of overall validity: acceptance may additionally depend on signature verification, temporal validity, trust information, holder binding, and the relying party's policy and business rules.

~ Relation to ToIP: no equivalent term. The nearest upstream concept is [[xref: toip-glossary, revocation]] — the event in which an issuer stops attesting to a credential it has issued; a status list is one mechanism through which the consequence of such an event can be checked by a [[ref: verifier]].

~ swiyu context (Swiss Profile, `swiss-profile-vc:1.0.0`): status lists follow the **IETF Token Status List** specification ([draft-ietf-oauth-status-list-20](https://www.ietf.org/archive/id/draft-ietf-oauth-status-list-20.html)) as profiled by the [Swiss Profile VC](https://swiyu-admin-ch.github.io/specifications/swiss-profile-vc/): the status list token must be signed by the same entity as the referenced credential (a different key is permitted), and the status provider **MUST** be the registry provided by FOITT — the profile states this requirement as preventing observability of issuers.

~ Privacy properties, stated precisely: the status-list representation does not encode credential claim values or subject identifiers. Retrieving a published status list does not require the verifier to query the issuer for the specific credential being checked; this does not imply the absence of all other correlation channels.

~ Language equivalents:

~ [DE] **Statusliste**

~ [FR] **liste de statut** *(proposed)*

~ [IT] **elenco di stato** *(proposed)*
