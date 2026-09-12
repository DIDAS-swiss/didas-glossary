#!/usr/bin/env node
/**
 * Every term states its relationship to the ToIP Main Glossary, in one place.
 *
 *     node scripts/check-toip-links.mjs
 *
 * The glossary federates with ToIP, and the three-tier rule in GOVERNANCE.md
 * turns on one question per term: is this term in the ToIP Main Glossary? The
 * answer belongs in the term file, where a reader meets it, and it belongs in
 * the same place in every file so a reader knows where to look.
 *
 * The convention is one line per term, immediately before the language
 * equivalents:
 *
 *     ~ ToIP reference: [[xref: toip-glossary, credential]]
 *     ~ ToIP reference: no equivalent term. The nearest concept is
 *       [[xref: toip-glossary, revocation]], which ...
 *
 * "no equivalent term" is a finding rather than an omission: it is what makes
 * a Tier 3 definition defensible, so the file has to say it out loud.
 *
 * This checks four things:
 *
 *   1. every term file carries exactly one ToIP reference line
 *   2. every [[xref: toip-glossary, X]] resolves to a cached upstream
 *      definition, so the rendered link is not dead
 *   3. every [[ref: X]] resolves to a term defined in this glossary
 *   4. no term links to glossary.trustoverip.org by URL, because an [[xref:]]
 *      is tracked by the federation workflow and a pasted URL is not
 *
 * Exit code 0 means all four hold. Exit code 1 lists what does not.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TERMS_DIR = join(ROOT, 'spec', 'terms-definitions');
const XREFS = join(ROOT, 'output', 'xrefs-data.json');

const MARKER = '~ ToIP reference:';

function cachedTerms() {
  if (!existsSync(XREFS)) return null;
  const data = JSON.parse(readFileSync(XREFS, 'utf8'));
  return new Set((data.xrefs ?? []).map((x) => x.term));
}

function localAliases(files) {
  // A [[ref:]] may name any alias from any [[def:]], so collect them all.
  const aliases = new Set();
  for (const { text } of files) {
    const def = text.match(/\[\[def:\s*([^\]]+)\]\]/);
    if (!def) continue;
    for (const alias of def[1].split(',')) aliases.add(alias.trim().toLowerCase());
  }
  return aliases;
}

const files = readdirSync(TERMS_DIR)
  .filter((name) => name.endsWith('.md'))
  .sort()
  .map((name) => ({ name, text: readFileSync(join(TERMS_DIR, name), 'utf8') }));

if (files.length === 0) {
  console.error(`No term files found in ${TERMS_DIR}. Is this the repository root?`);
  process.exit(1);
}

const cache = cachedTerms();
const aliases = localAliases(files);
const problems = [];
let withReference = 0;
let noEquivalent = 0;

for (const { name, text } of files) {
  const markers = text.split('\n').filter((line) => line.startsWith(MARKER));

  if (markers.length === 0) {
    problems.push(
      `${name}: no ToIP reference line. Add "${MARKER} [[xref: toip-glossary, <term>]]", or ` +
        `"${MARKER} no equivalent term." when the ToIP Main Glossary has none`
    );
  } else if (markers.length > 1) {
    problems.push(`${name}: ${markers.length} ToIP reference lines; there should be one`);
  } else {
    withReference += 1;
    if (/no equivalent term/.test(markers[0])) noEquivalent += 1;
  }

  if (text.includes('glossary.trustoverip.org')) {
    problems.push(
      `${name}: links to glossary.trustoverip.org by URL. Use [[xref: toip-glossary, <term>]], ` +
        `which the federation workflow keeps current`
    );
  }

  for (const [, term] of text.matchAll(/\[\[xref:\s*toip-glossary,\s*([^\]]+)\]\]/g)) {
    const key = term.trim();
    if (cache === null) continue;
    if (!cache.has(key)) {
      problems.push(
        `${name}: xref to ToIP "${key}", which is not in output/xrefs-data.json. ` +
          `Run \`npm run xrefs\` so the rendered link resolves`
      );
    }
  }

  for (const [, ref] of text.matchAll(/\[\[ref:\s*([^\]]+)\]\]/g)) {
    const key = ref.trim().toLowerCase();
    if (!aliases.has(key) && !aliases.has(key.replace(/s$/, ''))) {
      problems.push(`${name}: [[ref: ${ref.trim()}]] names no term defined in this glossary`);
    }
  }
}

if (cache === null) {
  problems.push('output/xrefs-data.json is missing, so ToIP references could not be checked');
}

console.log(`${files.length} terms, ${withReference} with a ToIP reference line ` +
  `(${noEquivalent} recording no upstream equivalent)`);

if (problems.length > 0) {
  console.log();
  console.log(`${problems.length} problem(s):`);
  for (const problem of problems) console.log(`  - ${problem}`);
  process.exit(1);
}

console.log('Every term states its relationship to the ToIP Main Glossary.');
