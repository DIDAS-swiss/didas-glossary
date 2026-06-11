# DIDAS Glossary Governance

This document defines how terms enter, change in, and leave the DIDAS Glossary.
The glossary establishes a common language for the swiyu trust ecosystem and is
maintained by the DIDAS community; its credibility depends on a transparent,
recorded decision process.

## Principles

1. **Issues are intake, the pull request is the governance artifact, merge to
   `main` is the publication event.** Every decision is recorded in the issue
   and PR history.
2. **The three-tier rule is the decision axis.** Every term ruling answers one
   question: what is the relationship of this term to the international
   reference vocabulary (the [Trust over IP Main Glossary](https://glossary.trustoverip.org/))?
3. **Multilingual by default.** Every term carries aliases for all four working
   languages (EN/DE/FR/IT) unless the term is a proper name or a legal term of
   art with no established translation.

## The three-tier rule

| | Tier 1 — Adopt | Tier 2 — Extend | Tier 3 — Own |
|---|---|---|---|
| **When** | The ToIP definition is complete and sufficient as-is | ToIP has a good base, but Swiss law or the swiyu context adds meaning | Defined by Swiss law (e.g., BGEID, ZertES), swiyu-specific, or no ToIP equivalent |
| **Artifact** | One-line `[[tref: toip-glossary, term, DE, FR, IT]]` | Local `[[def:]]` + body + `[[xref: toip-glossary, term]]` | Local `[[def:]]` + cited legal/primary source; `[[xref:]]` to nearest ToIP concept if one exists |
| **What is reviewed** | Alias correctness only | The Swiss delta — what we add and why | The full definition |
| **Review depth** | Light; batchable (10–20 terms per PR) | Standard editorial review | Deepest; legal review required where statutory wording is involved |
| **Drift handling** | Automatic — tref diff badges; weekly xref workflow surfaces upstream changes for re-approval | Tooltip content updates; the local definition is ours | None needed |

Authoring conventions (file format, alias order, language-equivalents section)
are specified in the contribution guide rendered at the end of the glossary
(`spec/outro.md`).

## Roles

- **Community** — anyone may propose a new term or a change via the issue
  forms. Proposals must state sources and answer the ToIP check.
- **Glossary editors** (`@DIDAS-swiss/glossary-editors`) — make tier rulings,
  review and approve term PRs, run the ToIP federation review. Defined as code
  owners for `spec/terms-definitions/`.
- **Legal reviewers** — second required review for terms whose definitions
  carry statutory wording (BGEID, ZertES, LSIE). Requested via the
  `legal-review` label.
- **Maintainers** — repository administration, releases, tooling.

## Workflow A — community proposals

1. **Intake**: proposer files an issue using the *New term* or *Change to
   existing term* form. The form requires a ToIP check and a suggested tier.
2. **Tier ruling**: an editor confirms or corrects the tier and applies the
   corresponding label (`tier-1-adopt`, `tier-2-extend`, `tier-3-own`), or
   labels `needs-work` / `rejected` with reasons.
3. **Drafting**: a term file is authored on a branch per the conventions in
   `spec/outro.md`; the PR carries `Closes #N`.
4. **Review gates**: code-owner (editorial) approval is required; the
   `legal-review` label adds the legal reviewer as a second gate. Contested
   rulings escalate per the section below.
5. **Publication**: merge to `main` re-renders and publishes the glossary.
   A changelog entry in `changelog/` is part of the same PR.

## Workflow B — ToIP federation review

The term-by-term review of the ToIP Main Glossary is tracked in
[`federation/toip-review.md`](federation/toip-review.md). Reviewers process
batches of pending terms, record a decision per term (`adopt` / `extend` /
`own` / `skip`), and submit each batch as one PR:

- **adopt** decisions are implemented directly in the batch PR (one-line tref
  files — cheap to review).
- **extend** and **own** decisions exit into Workflow A as term-proposal
  issues, because they require definition-writing, not just a federation
  decision.

Upstream drift: the scheduled xref workflow refreshes cached ToIP definitions;
its PRs show the upstream diff, and editorial approval of that PR constitutes
re-approval of the changed definitions. Federated terms are never silently
updated.

## Escalation

Tier rulings or definitions that are contested (e.g., where a Swiss legal
reading and the ToIP mapping diverge) are escalated to a GitHub Discussion or
the DIDAS community call. The decision and its rationale are recorded in the
originating issue before the PR proceeds. If no consensus is reached, the
maintainers decide; standing disagreement is recorded in the term file as a
note.

## Versioning

Merges to `main` update the living glossary continuously. At milestones, a
numbered snapshot is frozen via `npm run freeze` and published under
`docs/versions/`, giving ecosystem partners stable, citable versions.

## Repository settings (admin checklist)

The following are configured in GitHub settings, not in files:

- Branch protection on `main`: require a pull request, require review from
  code owners, dismiss stale approvals on new commits.
- Create the `glossary-editors` team and grant it write access.
- Keep the `new term`, `glossary`, `proposal`, `in-review`, `tier-1-adopt`,
  `tier-2-extend`, `tier-3-own`, `needs-work`, `legal-review` labels.
