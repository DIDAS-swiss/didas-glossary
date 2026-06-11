# 2026-06-11 — Governance model and ToIP federation review process

## Added

- `GOVERNANCE.md` — formal decision process: the three-tier rule
  (adopt / extend / own) as the decision axis, roles (community, glossary
  editors, legal reviewers, maintainers), Workflow A (community proposals),
  Workflow B (ToIP federation review), escalation path, versioning policy,
  and the repository-settings checklist for admins
- `federation/toip-review.md` — term-by-term review table seeded with all
  543 terms of the ToIP Main Glossary; tracks decision, aliases, reviewer
  and local file per term; four terms pre-marked as `extend` (credential,
  verifiable-credential, governance, ecosystem)
- `.github/CODEOWNERS` — editorial review required for `spec/` and
  `federation/`; glossary-editors team plus named fallback
- `.github/ISSUE_TEMPLATE/new-term.yml` and `change-term.yml` — structured
  issue forms replacing the markdown templates; both require a ToIP check
  with suggested tier and ask for DE/FR/IT aliases; blank issues disabled
  via `config.yml`

## Changed

- `.github/workflows/render-specs.yml` — re-enabled automatic render and
  publication on push to `main` (was manual-only), limited to spec-relevant
  paths; merge to main is now the publication event per GOVERNANCE.md
- `.github/workflows/fetch-and-push-xrefs.yml` — now runs on a weekly
  schedule and opens a pull request instead of pushing directly to `main`,
  so upstream ToIP definition changes are re-approved by the editorial team
  (drift governance, Workflow B); fetch now uses the workflow token to avoid
  GitHub API rate limits
- `README.md` — rewritten as an entry point: how the glossary works,
  contribution and governance pointers, common commands

## Removed

- `.github/ISSUE_TEMPLATE/new-definition.md` and `modify-definition.md` —
  replaced by the structured YAML issue forms
