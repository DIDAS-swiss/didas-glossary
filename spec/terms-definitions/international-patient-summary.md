[[def: International Patient Summary, IPS, patient summary]]

~ An electronic health record extract containing essential healthcare information about a subject of care. This is the definition of the underlying standards: the IPS document is composed from the **IPS dataset**, a minimal, non-exhaustive set of data elements that is specialty-agnostic and condition-independent, yet clinically relevant. The dataset is designed to support the use-case scenario of *unplanned, cross-border care*, but is not limited to it.

~ Standards lineage, in order: **EN 17269:2019** "Health informatics — The International Patient Summary" (CEN/TC 251) defines the dataset; it was taken over internationally as **ISO 27269:2021**. Representation is specified separately from the dataset: the [HL7 FHIR International Patient Summary Implementation Guide](https://www.hl7.org/fhir/uv/ips/) (Edition 2) defines the FHIR representation, and an HL7 CDA IPS guide exists for CDA. IHE profiles the exchange. Dataset (what), representation (how) and exchange (transport) are three separate layers and must not be conflated.

~ In the DIDAS digital-health context: the IPS is the standards anchor for what "essential health data about a person" means when health [[ref: credential]]s are discussed for the swiyu [[ref: ecosystem]] — a shared vocabulary between the health domain (HL7/ISO) and the credential domain (this glossary). Whether and how IPS content is carried in a swiyu credential is a design decision of the respective use case, not a property of either standard.

~ Does not imply: an IPS is a data structure, not a credential. Conformance to the IPS dataset establishes neither the clinical correctness of its content, nor consent to share it, nor any authorisation of a party to request it — those are governed by the applicable health legislation and, where credentials are used, by the mechanisms this glossary describes under [[ref: trust protocol]] and [[ref: claim]].

~ Relation to ToIP: no equivalent term. The IPS is a health-informatics standard, not a digital-trust concept; the nearest ToIP notion is the generic [[xref: toip-glossary, claim]] content a credential could carry.

~ Sources: [ISO 27269:2021](https://www.iso.org/obp/ui/#iso:std:iso:27269:ed-1:v1:en) (Health informatics — International patient summary); EN 17269:2019 (CEN/TC 251); [HL7 FHIR IPS Implementation Guide](https://www.hl7.org/fhir/uv/ips/); [IHE IPS profile overview](https://wiki.ihe.net/index.php/International_Patient_Summary_(IPS)); [international-patient-summary.net](https://international-patient-summary.net/iso-27269/).

~ Language equivalents:

~ [DE] **International Patient Summary** (der englische Begriff wird verwendet; wörtlich: internationale Patientenkurzakte — *proposed, an editor should rule*)

~ [FR] **International Patient Summary** (terme anglais en usage; littéralement: résumé international du patient — *proposed*)

~ [IT] **International Patient Summary** (termine inglese in uso; letteralmente: sintesi internazionale del paziente — *proposed*)
