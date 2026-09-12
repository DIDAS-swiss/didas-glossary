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

### The ToIP reference line

Every term file carries one line stating its relationship to the ToIP Main
Glossary, placed immediately before the language equivalents so a reader always
finds it in the same position. It takes one of two shapes.

Where an upstream term exists:

```
~ ToIP reference: [[xref: toip-glossary, credential]]
```

Where none exists, the absence is stated, with the nearest concept named when
there is one:

```
~ ToIP reference: no equivalent term. The nearest concept is
[[xref: toip-glossary, revocation]], which names the event where an issuer
stops attesting to a credential; the status list is the mechanism that makes
such an event checkable.
```

Recording "no equivalent term" is what justifies defining the term locally at
Tier 3. Stating it explicitly tells the reader that the upstream glossary was
checked and the term was not there.

Always write the reference as `[[xref: toip-glossary, <term>]]`, not as a link to
`glossary.trustoverip.org`. An `[[xref:]]` renders with the upstream definition
attached, and the federation workflow keeps that definition current. The workflow
does not detect plain URLs, so a pasted link is never updated.

`npm run check:toip` enforces all of this: one reference line per term, every
`[[xref:]]` resolving to a cached upstream definition, every `[[ref:]]`
resolving to a term this glossary defines and no bare upstream URLs. It runs in
CI on every pull request that touches a term.

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
`[[tref:]]` (Tier 1) or `[[xref:]]` on the ToIP reference line (Tier 2) rather than
duplicating the definition. Local definitions should capture meaning that is specific
to the Swiss, BGEID, or DIDAS/swiyu context only.

Record the outcome of that check either way. Whichever answer it produced, it goes on
the ToIP reference line described above, so the next reader inherits the check instead
of repeating it.

## Further Resources

- [DIDAS — Digital Identity & Data Sovereignty Association](https://www.didas.swiss/)
- [swiyu Trust Infrastructure](https://github.com/swiyu-admin-ch) — the Swiss federal trust infrastructure for digital credentials
- [Trust over IP Foundation Glossary](https://glossary.trustoverip.org/) — the international reference glossary this project aligns with
- [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/) — the international credential data model. Not the format swiyu uses: the Swiss Profile lists "W3C VCDM" as NOT SUPPORTED and contains IETF SD-JWT VC instead
- **BGEID** — Bundesgesetz über den elektronischen Identitätsnachweis und andere elektronische Nachweise (E-ID-Gesetz) of 20 December 2024, BBl 2025 20, published on [fedlex.admin.ch](https://www.fedlex.admin.ch/). Governs the federal trust infrastructure and the EID
