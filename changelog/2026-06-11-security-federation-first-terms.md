# 2026-06-11 — Security fix, ToIP federation, multilingual model, first terms

## Added

- Eight new term definitions implementing all open term-proposal issues (#1–#8):
  `DIDAS` (#1), `verifiable credential` (#2), `digital product passport` (#3),
  `E-Collecting` (#4), `protocol` (#5), `Minute of Agreement` (#6),
  `governance` (#7) and `ecosystem` (#8) — each with DE/FR/IT aliases per the
  multilingual house style, ToIP cross-references where an upstream term exists
  (verifiable-credential, governance, digital-trust-ecosystem), and
  inter-term `[[ref:]]` links
- `output/xrefs-data.json` — cached eight additional ToIP definitions (claim,
  issuer, holder, digital-credential, verifiable-credential, governance,
  digital-trust-ecosystem, digital-ecosystem) at commit `00608bb`
- `changelog/` — this folder; notable changes are documented here, one file per
  change set
- `README.md` — new "Dependency notes" section with a table explaining the
  `overrides` block so future maintainers know why it exists and do not remove it

## Removed

- `spec/terms-definitions/term-2.md`, `term-3.md`, `term-4.md` — deleted the
  remaining Lorem Ipsum placeholder terms from the starter pack; real DIDAS
  terms are added via the contribution process described in the outro
- `docs/glossary.txt` — stale orphaned artifact from the initial commit
  (November 2024); nothing in the toolchain generates or references it
- `package.json` — removed broken scripts referencing files that do not exist
  (`postinstall`/`postinstall:final`/`printmessage` → `postinstall-message.js`,
  `help` → `help.txt`); the broken postinstall chain made every `npm install` fail

## Changed

- `package.json` — renamed package from `spec-up-t-starterpack` to
  `didas-glossary` with a proper description; version reset to 1.0.0
- `specs.json` — added `gh_page` field to `external_specs_repos` entry for the
  ToIP glossary; required by spec-up-t ≥ 1.6.x for `[[tref:]]` resolution and
  for upgrade-safe federation configuration
- `output/xrefs-data.json` / `.js` — refreshed the cached ToIP `credential`
  definition from commit `a74b75d` (2024) to `2872b8b` (October 2025, the
  "key format" revision of the ToIP Main Glossary); the federation source
  (`trustoverip/ctwg-main-glossary` → https://glossary.trustoverip.org/) was
  already correct, only the cached snapshot was stale
- `docs/` — re-rendered the published glossary from current sources; the
  previous build dated from November 2024 and still contained placeholder
  Lorem Ipsum content
- `spec/intro.md` — replaced Lorem Ipsum placeholder with real content: purpose
  statement anchored to the swiyu trust ecosystem and BGEID law, scope overview,
  DIDAS background including the February 2026 swiyu Orchestrator designation,
  and a community contribution invitation
- `spec/outro.md` — replaced Lorem Ipsum placeholder with a contribution guide
  covering the three-tier term authoring pattern (Tier 1 tref / Tier 2 def+xref /
  Tier 3 def), multilingual alias conventions for all four working languages,
  the ToIP cross-reference-first policy, and a further-resources section
- `spec/terms-and-definitions-intro.md` — extended the bare heading with an
  orientation on alphabetical ordering and ToIP alignment
- `spec/terms-definitions/credential.md` — replaced Lorem Ipsum body with the
  authoritative ToIP definition; restructured as a Tier 2 (extend) term with
  EN/DE/FR/IT aliases, swiyu context, BGEID/LSIE language-equivalents section,
  and `[[xref:]]`/`[[ref:]]` links per the tier policy
- `term-index.json` — regenerated; now lists the nine real terms instead of the
  starter-pack placeholders

## Security

- Forced `axios` transitive dependency to `^1.17.0` via npm `overrides` to
  remediate CVE-2026-44495 (prototype pollution in config merge, high severity).
  The vulnerable version 0.21.2 was pulled in by `spec-up-t` and could enable
  credential theft and response hijacking.
