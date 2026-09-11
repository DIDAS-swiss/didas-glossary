# Feasibility: federation and composability for DIDAS Trust Flows

Assessment of whether the federation model this glossary uses with the
[ToIP Main Glossary](https://glossary.trustoverip.org/) can be applied to the
[Trust Flow Diagram Repository](https://github.com/DIDAS-swiss/Trust-Flow-Diagram-Repository),
and whether trust flows can be made composable — add one flow, connect another to it.

Written as input for a V2 repository. Nothing here is implemented.

**Status:** feasibility study, 2026-08-28.
**Evidence base:** Trust Flow repo at `main`; LikeC4 `v1.59.2` (released 2026-07-22),
sources and grammar read directly, not from memory.

---

## 1. Verdict

| Question | Answer |
|---|---|
| Can trust flows federate the way the glossary does? | **Yes in principle, no on today's artifacts.** Federation needs addressable, machine-readable units. 8 of 9 flows are image exports with nothing to address. |
| Is a shared, referenceable core model possible? | **Yes.** LikeC4 multi-project `import` does exactly this, and it is already the modelling tool in the repo. |
| Can flows be composed — add one, connect another to it? | **Partly native, partly to be built.** Model-level composition and flow-to-flow navigation are native. Step-level inlining of one flow into another is *not expressible in LikeC4 today*. This is the one real gap. |
| Is the cross-repo part free? | **No.** LikeC4 has no remote-project resolution; URLs are explicitly rejected in config. Cross-repo federation must be built as a vendoring + pinning + drift-PR loop — the same shape as this repo's `xrefs-data.json`. |
| Biggest risk | **Not technical.** It is contribution barrier and governance: the Miro/SVG workflow is what let ~20 organisations contribute. Model-as-code raises that bar. |

Bottom line: feasible, and the work splits cleanly into *substrate* (make flows
model-as-code), *federation* (build the pin/cache/drift loop LikeC4 lacks), and
*governance* (the part the Trust Flow repo has none of today).

---

## 2. What "federation" actually means in this glossary

Six separable capabilities. Each has to be answered independently for trust flows.

| # | Capability | Glossary mechanism |
|---|---|---|
| F1 | **Stable identity** for every unit | `[[def: term, aliases…]]` → `#term:<slug>` anchors, one per alias, all four languages |
| F2 | **Named external namespace** | `specs.json` → `external_specs` / `external_specs_repos`: `toip-glossary` bound to a repo, a terms directory and a published site |
| F3 | **Typed reference across the namespace** | `[[xref: toip-glossary, term]]` (link + tooltip) and `[[tref: …]]` (transclude verbatim) |
| F4 | **Pinned local cache** | `output/xrefs-data.json` — per-term upstream `commitHash` **and** the fetched content |
| F5 | **Drift detection with human re-approval** | `fetch-and-push-xrefs.yml` refreshes weekly, opens a PR; merging the PR *is* the editorial re-approval. Federated terms are never silently updated |
| F6 | **A governance decision per unit** | The three-tier rule — adopt / extend / own — recorded term-by-term in `federation/toip-review.md` |

The important observation: **F4 and F5 are ours, not the tool's.** spec-up-t
fetches; the caching discipline, the "arrive as a PR" rule and the tier ruling are
repository design. That is precisely the part that transfers to trust flows
unchanged, because it is policy, not tooling.

---

## 3. The Trust Flow repository today

### Inventory

| Flow | Source form | Machine-readable? | Federatable? |
|---|---|---|---|
| `basic-flow/credential-flow.likec4` | LikeC4 DSL, 371 lines, 4 views | **Yes** | **Yes** |
| Re-Identification After Forgotten Password | Mermaid (`Mermaid Flow.md`) + Miro SVG | Partly | After translation |
| KYC Credential ×3 (Sharing, Onboarding, Re-KYC) | Miro SVG export | No | No |
| Re-Identification at Age of Majority | Miro SVG export | No | No |
| High school Certificate Issuance | Miro SVG export | No | No |
| University immatriculation | Miro SVG export | No | No |
| KYC Wallet ×2 | PNG (approval pending) | No | No |

Only `basic-flow` is deployed as an interactive site
(`deploy-pages.yml` → `likec4/actions@v1`). Everything else is an `<img>` in a README.

### Three findings that shape the design

**(a) There is no shared vocabulary of actors.** The same concepts are named
differently in every flow, with no identifier linking them:

| Concept | `basic-flow` (LikeC4) | Re-Identification (Mermaid) |
|---|---|---|
| Federal trust infrastructure | `confederation` "Federal Trust-Infrastructure" | `EIDTrust` "🛡️ E-ID Trust Infrastructure" |
| Holder's wallet | `holder` "Citizen using the swiyu Wallet app" | `SWIYUApp` "🪪 SWIYU App" |
| Verifier | `verifier` "Relying party — OID4VP service" | `SSIVerifier` "✅ SSI Verifier" |

This is exactly the problem the glossary solves for words. It is the strongest
argument that trust flows need the same treatment — and that the glossary should
be the naming authority, not a parallel one.

**(b) The composability problem is already visible, and already painful.**
`Mermaid Flow.md` splits one re-identification flow into four phases and
**hand-duplicates the same 13-participant block four times**. There is no model —
only four copies of a picture of one. A shared model plus composition removes that
duplication outright; it is the clearest concrete win available.

**(c) There is no governance layer at all.** No `CODEOWNERS`, no issue forms, no
review gates, no changelog, no versioning. Contributors are recorded as name lists
in READMEs (one flow credits ~11 banks and ~20 organisations). Federation without
governance would just distribute an unreviewed model faster.

Minor, unrelated: `index.html` links to `julian-lev/Trust-Flow-Diagram-Repository`
(stale fork path), and `basic-flow/README.md` still carries a "replace with your
actual GitHub Pages URL" placeholder next to a working URL.

---

## 4. Capability transfer, F1–F6

| | Transfers? | How, on a LikeC4 substrate |
|---|---|---|
| **F1** Stable identity | **Yes** | LikeC4 elements have fully-qualified names (`confederation.trustRegistry`). Views have IDs. Both are already stable addresses; they just have to be treated as a contract, the way `#term:` anchors are. |
| **F2** Named external namespace | **Yes** | `likec4.config.json` names a project; `import { … } from 'projectName'` binds to it. This is a direct structural equivalent of `external_specs`. |
| **F3** Typed reference | **Partly** | Element references across projects: yes. Transclusion (`tref`) of a whole *flow*: no — views are not importable. See §5. |
| **F4** Pinned cache | **To be built** | LikeC4 has no remote resolution at all. `include.paths` **rejects URLs by design** (verified in `packages/config` schema tests). Cross-repo means vendoring sources locally + a lock file. |
| **F5** Drift detection | **To be built, but it is a copy of what exists here** | Same shape as `fetch-and-push-xrefs.yml`: scheduled refetch → diff → PR → merge-is-approval. |
| **F6** Tier governance | **Yes, and it maps unusually well** | See §6. |

---

## 5. What LikeC4 supports natively — verified against v1.59.2

### Works today

1. **Model merging across files.** All `.c4`/`.likec4` files in a project merge into
   one model. Free composition *within* a repo.
2. **`extend`.** A separate file can add children, tags, `link`s and `metadata` to an
   element defined elsewhere. Metadata merges across files (values de-duplicated,
   collisions become arrays). This is a genuine "extend without forking" primitive —
   the model-level twin of glossary Tier 2.
3. **Multi-project imports.** `import { serviceA } from 'projectA'`, then
   `-> serviceA.api 'calls serviceA'`. Nested access on an imported root works.
4. **Imported elements in dynamic views** — the sequence diagrams. Supported, but
   note: this was *broken until v1.59.2 (2026-07-22)*, fixed in likec4/likec4#3135.
   It is one month old.
5. **Shared specification / styles.** `include.paths` pulls `.c4` files from sibling
   directories into a project; `extends` in the JSON config merges the `styles`
   section across projects.
6. **`navigateTo`.** Steps and relationships can navigate to another view. Already
   used in `basic-flow` (`holder -> issuer` navigates to the `issuance` view).
7. **`link`.** Arbitrary URLs on elements, relationships and views → direct links to
   `glossary.didas.swiss/#term:…`.
8. **Multi-project build and export.** CLI `--project` flag; `likec4 build` produces a
   multi-project webapp. Present since the multi-project release, still maintained.
9. **Flow control in dynamic views** — `alt`/`opt`/`loop`/`par`/`try` render as
   sequence-diagram frames. Covers what the Mermaid flow uses (`par`, `loop`).
   Marked **experimental** by upstream (v1.59.0, 2026-07-19).

### Hard limits — the actual constraints on V2

1. **No remote projects.** `import` errors with *"Imported project not found"*
   unless the referenced project is loaded in the same workspace
   (`packages/language-server/src/validation/imports.ts`). Config schema rejects
   `http://`, `https://` and `file://` in `include.paths`. **Cross-repo federation
   must be built.**
2. **Only top-level model elements are importable.** The federation surface has to be
   designed as top-level elements or top-level containers.
3. **No dynamic-view composition.** Confirmed in the grammar
   (`packages/language-server/src/like-c4.langium`): `ElementView` has an `extends`
   clause; **`DynamicView` does not**, and there is no predicate that includes another
   view's steps. `SubflowStep` is only the flow-control blocks
   (`opt`/`par`/`loop`/`when`/`else`/`break`) — not a reference to another flow.
   **So "add one trust flow and connect another to it" is not natively expressible at
   step level.**
4. **Views are project-local.** You can import elements, never views. A federated
   partner's flow can be linked to, not embedded in yours.
5. **Maturity.** The two features V2 would lean on hardest — flow control blocks, and
   imported elements inside dynamic views — are respectively experimental and one
   month old. Plan for upstream churn and pin the LikeC4 version.

### Composition: what is actually achievable

| Level | Native? | Mechanism |
|---|---|---|
| Share actors/registries across flows | **Yes** | one `core` project, imported everywhere |
| Specialise a shared actor per domain | **Yes** | `extend` + metadata |
| Chain flow A → flow B for the reader | **Yes** | `navigateTo` |
| Cross-repo shared model | **No** | build: vendor + pin + drift PR |
| Inline flow B's steps inside flow A | **No** | generate a merged `.c4`, or file upstream |

Three of five are free. The two that are not are both tractable, and the second is
worth raising upstream as a feature request (`dynamic view X extends Y`, or a step
inclusion predicate) — it is a general need, not a DIDAS-specific one.

---

## 6. Sketch of a V2 architecture

Not a plan; enough shape to judge cost.

```
trust-flows-v2/
├── core/                       ← the federation surface DIDAS owns
│   ├── likec4.config.json      ← name: "didas-core"
│   ├── actors.c4               ← Holder/Wallet, Issuer, Verifier, Trust Authority
│   ├── registries.c4           ← Base Registry, Trust Registry
│   └── specification.c4        ← shared element kinds + styles
├── flows/
│   ├── banking/kyc-onboarding/
│   │   ├── likec4.config.json  ← name: "banking-kyc", include.paths: ["../../../core"]
│   │   └── flow.c4             ← import { holder, issuer } from 'didas-core'
│   └── education/…
├── federation/
│   ├── registry.md             ← external LikeC4 projects DIDAS federates with
│   ├── lock.json               ← repo + commit + project name, per external model
│   └── review.md               ← tier ruling per imported element (mirrors toip-review.md)
└── .github/workflows/
    ├── deploy-pages.yml        ← multi-project build
    ├── sync-federated.yml      ← refetch pinned externals → diff → PR   (mirrors fetch-and-push-xrefs)
    └── check-glossary-links.yml← validate every metadata.glossary key against the glossary
```

**Every core element carries its glossary identity:**

```likec4
model {
  verifier = system 'Verifier' 'Relying party — OID4VP service' {
    link https://glossary.didas.swiss/#term:verifiable-credential 'Glossary'
    metadata {
      glossary 'verifiable-credential'
    }
  }
}
```

That single `metadata.glossary` key is what makes the two repositories genuinely
federated rather than merely adjacent — and it is checkable in CI: fetch
`output/term-relations-data.json` from this repo and assert every key resolves to a
term or one of its aliases. Cheap, and it is the piece with the best
effort-to-value ratio in the whole proposal.

**The three-tier rule transplants directly:**

| Tier | Glossary | Trust flows |
|---|---|---|
| **1 — Adopt** | `[[tref: toip-glossary, term]]` | `import { holder } from 'didas-core'`, used as-is. Light review. |
| **2 — Extend** | local `[[def:]]` + `[[xref:]]` | `extend holder { … }` — domain specifics, core identity preserved. Review the delta only. |
| **3 — Own** | local `[[def:]]` + cited source | domain-local element + `link` to the nearest core/glossary concept. Full review. |

The review economics are the same as the glossary's, and that is the point: tier-1
adoptions batch cheaply, which is what makes federation affordable at ~20
contributing organisations.

---

## 7. Cost and risk

### Migration

| Item | Effort | Note |
|---|---|---|
| `basic-flow` | none | already LikeC4; becomes the seed for `core/` |
| Re-Identification (Mermaid) | ~1 day | mechanical translation; **removes** the 4× participant duplication |
| 5 Miro SVGs | ~0.5–1 day each | text *is* extractable (28 `<text>` nodes in the smallest), layout and semantics are not — realistically manual re-modelling with the SVG as reference, validated by the original author |
| 2 PNGs (KYC Wallet) | blocked | nothing extractable; needs the authors, and approval is pending anyway |
| `core/` model + glossary links | ~2–3 days | the design work, not the typing |
| Federation sync + lock + drift PR | ~2–3 days | direct port of `fetch-and-push-xrefs.yml` |
| Governance (CODEOWNERS, issue forms, tiers, changelog) | ~2 days | port from this repo |

### Risks

1. **Contribution barrier — the top risk.** Miro is why banking WG participants could
   contribute at all. LikeC4 is a DSL in a git repo. *Mitigation:* accept both tracks
   openly — images stay welcome, but federation, composition and the interactive site
   are what you get by modelling. Same incentive gradient the glossary's tier 1 uses.
2. **Upstream maturity.** Two load-bearing features are experimental or one month old.
   *Mitigation:* pin the LikeC4 version; keep the composition surface small.
3. **No step-level flow composition.** *Mitigation:* ship with model-level sharing +
   `navigateTo`; file the upstream request; only build a generator if a concrete flow
   actually needs inlining.
4. **Ownership of `core`.** A shared actor model is a governance object. If DIDAS owns
   it, DIDAS must review changes to it — the same standing commitment the glossary
   editors already carry.
5. **Fidelity loss on re-modelling.** Re-drawing someone's SVG as a model can silently
   change what they meant. *Mitigation:* original author signs off; treat it as a term
   PR with the contributor as reviewer.

---

## 8. Decisions needed before V2 starts

1. **Is `core` DIDAS-owned and normative, or a convenience?** Determines whether tier
   rulings on it need a review gate.
2. **Two-track or model-only?** Whether V2 still accepts image-only contributions.
3. **Who federates with whom?** Is the near-term goal DIDAS ↔ glossary (clear win,
   low cost), or DIDAS ↔ external partner repositories (needs the full pin/drift loop)?
   The first is worth doing regardless; the second is the one that justifies §6's
   `federation/`.
4. **Does step-level flow inlining have a real use case?** If no concrete flow needs
   it, the biggest gap costs nothing.
5. **Migration order.** Recommendation: `core` + Mermaid flow first — it proves both
   federation and composition on one artifact, and visibly deletes duplicated work.

---

## 9. Sources

- Trust Flow Diagram Repository — `main`, read in full.
- LikeC4 `v1.59.2` — repository, `CHANGELOG.md`, `apps/docs/src/content/docs/dsl/**`,
  `packages/language-server/src/like-c4.langium`,
  `packages/language-server/src/validation/imports.ts`, `packages/config/src/schema.*`.
- This repository — `specs.json`, `GOVERNANCE.md`, `federation/toip-review.md`,
  `.github/workflows/*`, `output/xrefs-data.json`, `output/term-relations-data.json`.
