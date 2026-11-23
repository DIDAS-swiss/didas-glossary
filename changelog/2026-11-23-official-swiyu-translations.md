# 2026-11-23 — Official swiyu translations in language equivalents

The Confederation maintains an official translation termbase for swiyu,
[swiyu-admin-ch/swiyu_glossary](https://github.com/swiyu-admin-ch/swiyu_glossary)
(TBX, Weblate-managed, EN→DE/FR/IT/RM, 129 entries). This pass folds its
official translations into the glossary's `Language equivalents` blocks.

## What changed

Seven terms updated: verifiable credential, credential, issuer, verifier,
wallet, ecosystem, trust infrastructure.

- **Confirmations**: DE *verifizierbarer Nachweis*, DE *Nachweis*,
  FR *émetteur*, IT *emittente*, FR *vérificateur*, IT *verificatore*,
  and the trust-infrastructure renderings match what the glossary
  already carried — now marked "also the official swiyu translation".
- **Divergences made explicit** (two official registers, both given):
  - FR/IT credential family: BGEID legal wording *attestation /
    attestato* vs swiyu product terminology *document / documento*
    (incl. *document vérifiable / documento verificabile*).
  - DE role names: glossary *Aussteller / Verifikator* vs official
    swiyu *ausstellende Organisation / prüfende Organisation*.
  - Wallet: official long forms *digitales Portemonnaie (Wallet)* /
    *portefeuille électronique (wallet)* / *portafoglio elettronico
    (wallet)*.
- **Romansh added**: [RM] lines for all seven terms (cumprova
  verifitgabla, emittent, verifitgader, bursa digitala, …) — a language
  the glossary did not carry before.
- Divergent official forms added as `[[def:]]` aliases so lookups
  resolve (document vérifiable, ausstellende Organisation, prüfende
  Organisation, …).

## Drift watch

New `check-translation-drift` job in `check-swiyu-specs.yml`: watches
the `tbx/` path of the termbase weekly, baseline
`output/swiyu-specs-cache/glossary-last-seen-commit.txt` (seeded at
`29025eb`), opens a review PR when the official translations move.

## What it is not

A terminology source, not a definition source: the termbase carries no
definitions and is not federated. The ToIP Main Glossary remains the
definitional upstream; BGEID remains the legal-wording authority.

## Addendum (same day): internal swiyu terminology documentation

The swiyu team's internal terminology documentation (supplied by the
maintainer, 2026-11-23) corroborated and extended the pass:

- FR/IT role names are ahead of the published termbase: *organisation
  émettrice / organisation vérificatrice* (recorded alongside the
  published forms)
- holder binding in swiyu is typically **device binding**, not person
  binding (noted in `verifiable-credential`)
- two new specification files exist and are now in the watched list:
  `swiss-profile-portability` (Wallet Backup Container, 1.0 draft) and
  `swiss-profile-proximity` (DC-API over ISO-18013-5, 1.0 draft)
- technical term candidates filed as new-term issues (device binding,
  DCQL, DPoP, did:webvh, vct, base registry, OCA, wallet backup
  container, proximity verification); Hyperledger/AnonCreds-era
  content deliberately not adopted
