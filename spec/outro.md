## Contributing

This glossary is a living document maintained by the DIDAS community. New terms, corrections,
and improvements can be proposed by opening an issue or pull request in the
[DIDAS Glossary repository](https://github.com/DIDAS-swiss/didas-glossary).

### Authoring conventions

Terms are defined using the [spec-up-t](https://github.com/trustoverip/spec-up-t) toolchain.
Every term file lives in `spec/terms-definitions/` and follows one of three patterns:

**Tier 1 — Adopt a ToIP definition (preferred for common SSI/VC terms)**

Use `[[tref:]]` as the first and only line. The full definition is fetched from the
Trust over IP Main Glossary at build time and embedded in the rendered output.
Include all language aliases so the term is reachable via `[[ref:]]` in any of the
four working languages (EN/DE/FR/IT).

```
[[tref: toip-glossary, holder, Inhaber, Inhaberin, détenteur, détentrice, titolare]]
```

**Tier 2 — Extend a ToIP definition (Swiss/swiyu-specific additions)**

Define the term locally with `[[def:]]`, add the Swiss or swiyu-specific context,
and close with `[[xref: toip-glossary, term]]` as a "See also" link.

```
[[def: credential, credentials, Nachweis, Nachweise, attestation, attestato]]

~ <DIDAS/swiyu-specific definition body>

~ See also: [[xref: toip-glossary, credential]]
```

**Tier 3 — Own term (Swiss law, swiyu-specific, or no ToIP equivalent)**

Define fully locally. Cite the legal source (BGEID article, ZertES, etc.) where applicable.
Map to the nearest ToIP concept via `[[xref:]]` if one exists.

```
[[def: Aussage, Behauptung, assertion, affirmation, affermazione]]

~ <Swiss legal / DIDAS definition>

~ Nearest ToIP equivalent: [[xref: toip-glossary, claim]]
```

### Multilingual aliases

Every term file **must** include aliases for all four working languages as part of the
`[[def:]]` or `[[tref:]]` block. The alias order is: `EN primary, DE, FR, IT` (or
`DE primary, EN, FR, IT` for terms originating in Swiss law). The first alias after
the canonical term name becomes the display label in the rendered glossary.

Add a `Language equivalents:` section in the definition body for human-readable
cross-language notes:

```
~ Language equivalents:
~ [DE] **Nachweis**, **Beglaubigung**
~ [FR] **attestation**
~ [IT] **attestato**
```

### Keeping federation up to date

After adding any `[[xref:]]` or `[[tref:]]` reference, run:

```bash
npm run xrefs
```

This fetches the current definition from the Trust over IP Main Glossary via the
GitHub API and caches it in `output/xrefs-data.json`. Commit the updated cache file
so the rendered output is reproducible without network access.

A GitHub Actions workflow (`fetch-and-push-xrefs.yml`) runs this automatically on schedule.

### ToIP cross-reference-first policy

Before writing a new local definition, check whether the term is already covered by
the [Trust over IP Main Glossary](https://glossary.trustoverip.org/). If so, use
`[[tref:]]` (Tier 1) or `[[xref:]]` as a "See also" (Tier 2) rather than duplicating
the definition. Local definitions should capture meaning that is specific to the Swiss,
BGEID, or DIDAS/swiyu context only.

## Further Resources

- [DIDAS — Digital Identity & Data Sovereignty Association](https://www.didas.swiss/)
- [swiyu Trust Infrastructure](https://github.com/swiyu-admin-ch) — the Swiss federal trust infrastructure for digital credentials
- [Trust over IP Foundation Glossary](https://glossary.trustoverip.org/) — the international reference glossary this project aligns with
- [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/) — the underlying credential standard
- [BGEID](https://www.fedlex.admin.ch/) — Federal Act on Electronic Proof of Identity (Switzerland)
