# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- `CHANGELOG.md` — this file, using Keep a Changelog format
- `README.md` — new "Dependency notes" section with a table explaining the
  `overrides` block so future maintainers know why it exists and do not remove it

### Changed

- `spec/intro.md` — replaced Lorem Ipsum placeholder with real content: purpose
  statement anchored to the swiyu trust ecosystem and BGEID law, scope overview
  (credentials, DID infrastructure, governance, international alignment), DIDAS
  background including the February 2026 swiyu Orchestrator designation, and a
  community contribution invitation with GitHub link
- `spec/outro.md` — replaced Lorem Ipsum placeholder with a contribution guide
  (explaining the ToIP cross-reference-first policy) and a further-resources
  section linking to DIDAS, the swiyu GitHub organisation, the ToIP Main Glossary,
  the W3C Verifiable Credentials Data Model, and the BGEID
- `spec/terms-and-definitions-intro.md` — extended the bare heading with a
  two-line orientation on alphabetical ordering and ToIP alignment
- `spec/terms-definitions/credential.md` — replaced Lorem Ipsum body with the
  authoritative definition from the Trust over IP Main Glossary (November 2025
  revision), including eSSIF-Lab and W3C VC supporting definitions; retained the
  `[[xref: toip-glossary, credential]]` cross-reference; added canonical aliases
  (`credential`, `credentials`) to the `[[def:]]` block
- `spec/terms-definitions/term-2.md` — fixed broken `[[ref: Term 1]]`
  cross-reference; the term is named `Credential`, not `Term 1`

### Security

- Forced `axios` transitive dependency to `^1.17.0` via npm `overrides` to
  remediate CVE-2026-44495 (prototype pollution in config merge, high severity).
  The vulnerable version 0.21.2 was pulled in by `spec-up-t` and could enable
  credential theft and response hijacking.
