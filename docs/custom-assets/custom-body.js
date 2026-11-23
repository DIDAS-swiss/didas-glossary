/* Shared DIDAS masthead.
 *
 * The other DIDAS sites are hand-written pages and carry this bar as markup.
 * This one is rendered by spec-up-t, whose template lives in node_modules and
 * is rewritten on every `npm run render`, so the bar is inserted here instead —
 * custom-assets is the toolchain's own extension point, and specs.json already
 * declares this file as a body asset.
 *
 * It goes above the navbar rather than replacing it: the navbar is application
 * chrome (sidebar toggle, theme, width and font-size controls, search), and
 * only its logo is identity. custom.css hides that logo, so the wordmark is not
 * repeated.
 *
 * Keep the markup below identical to the other DIDAS sites; only the eyebrow
 * text and the repository URL differ.
 */

/* Bootstrap Icons, the same glyphs spec-up-t's own controls use, inlined so the
   masthead needs no icon font. */
const ICON = {
  sun: 'M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z',
  moon: 'M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z',
  moonStars: 'M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z',
  half: 'M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z',
  expand: 'M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707',
  contract: 'M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707',
};

const OCTICON =
  'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49' +
  '-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 ' +
  '1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59' +
  '.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53' +
  '-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95' +
  '.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42' +
  '-3.58-8-8-8Z';

function masthead() {
  const header = document.createElement('header');
  header.className = 'site-masthead';
  header.innerHTML = `
  <div class="bar">
    <div class="id">
      <a class="didas" href="https://www.didas.swiss" target="_blank" rel="noopener">
        <img src="https://www.didas.swiss/wp-content/uploads/2021/02/logo.png" alt="DIDAS">
      </a>
      <p class="eyebrow">DIDAS Glossary · swiyu trust ecosystem</p>
    </div>
    <div class="tools">
      <div class="seg" role="group" aria-label="Colour theme">
        <button type="button" data-theme-value="light" aria-pressed="false" title="Light" aria-label="Light theme"><svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="${ICON.sun}"/></svg></button>
        <button type="button" data-theme-value="dark" aria-pressed="false" title="Dark" aria-label="Dark theme"><svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="${ICON.moon}"/><path fill="currentColor" d="${ICON.moonStars}"/></svg></button>
        <button type="button" data-theme-value="auto" aria-pressed="true" title="Match the system" aria-label="Match the system theme"><svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="${ICON.half}"/></svg></button>
      </div>
      <div class="seg" role="group" aria-label="Layout width">
        <button type="button" data-width-value="container-fluid" aria-pressed="false" title="Toggle wide or narrow layout" aria-label="Toggle wide or narrow layout"><svg class="w-expand" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" d="${ICON.expand}"/></svg><svg class="w-contract" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" d="${ICON.contract}"/></svg></button>
      </div>
      <div class="seg text" role="group" aria-label="Text size">
        <button type="button" data-font-step="-1" title="Decrease text size" aria-label="Decrease text size">A</button>
        <button type="button" data-font-step="1" title="Increase text size" aria-label="Increase text size">A</button>
      </div>
      <a class="repolink" href="https://github.com/DIDAS-swiss/didas-glossary" target="_blank" rel="noopener">
        <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false"><path fill="currentColor" d="${OCTICON}"/></svg>
        <span>Source on GitHub</span>
      </a>
    </div>
  </div>`;
  return header;
}

/* The controls in the masthead drive spec-up-t's own buttons rather than
 * reimplementing what they do: clicking through means its live-apply logic —
 * swapping data-bs-theme, switching the container class, stepping the body font
 * size — stays the single implementation, and this file only supplies the shared
 * design and the third state (auto) that spec-up-t does not offer.
 */
function bridge() {
  const root = document.documentElement;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function storedTheme() {
    try {
      const v = window.localStorage.getItem('theme');
      return v === 'light' || v === 'dark' ? v : 'auto';
    } catch (e) {
      return 'auto';
    }
  }

  function applyAuto() {
    if (storedTheme() !== 'auto') return;
    root.setAttribute('data-bs-theme', systemDark.matches ? 'dark' : 'light');
  }

  function syncPressed() {
    const theme = storedTheme();
    for (const b of document.querySelectorAll('.site-masthead [data-theme-value]')) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-theme-value') === theme));
    }
    let wide = false;
    try {
      wide = window.localStorage.getItem('container_width_preference') === 'container-fluid';
    } catch (e) {
      /* ignore */
    }
    for (const b of document.querySelectorAll('.site-masthead [data-width-value]')) {
      b.setAttribute('aria-pressed', String(wide));
    }
  }

  for (const b of document.querySelectorAll('.site-masthead [data-theme-value]')) {
    b.addEventListener('click', () => {
      const choice = b.getAttribute('data-theme-value');
      const native = document.querySelector(`[data-bs-theme-value="${choice}"]`);
      if (native) {
        native.click();   // spec-up-t stores the choice and applies it
      } else {
        // auto: spec-up-t offers only light and dark, so record and apply it here
        try {
          window.localStorage.setItem('theme', 'auto');
        } catch (e) {
          /* ignore */
        }
        applyAuto();
      }
      syncPressed();
    });
  }

  const widthNative = document.getElementById('container_toggle');
  for (const b of document.querySelectorAll('.site-masthead [data-width-value]')) {
    b.addEventListener('click', () => {
      if (widthNative) widthNative.click();
      setTimeout(syncPressed, 0);
    });
  }

  for (const b of document.querySelectorAll('.site-masthead [data-font-step]')) {
    const native = document.getElementById(
      b.getAttribute('data-font-step') === '1' ? 'increaseBtn' : 'decreaseBtn');
    b.addEventListener('click', () => {
      if (native) native.click();
    });
  }

  systemDark.addEventListener('change', applyAuto);
  applyAuto();
  syncPressed();
}

function mount() {
  // Idempotent: never add a second bar if this ever runs twice.
  if (document.querySelector('.site-masthead')) return;
  const navbar = document.getElementById('header');
  if (navbar && navbar.parentNode) {
    navbar.parentNode.insertBefore(masthead(), navbar);
  } else {
    document.body.insertBefore(masthead(), document.body.firstChild);
  }
}

/* spec-up-t's own theme and width controls already persist under `theme` and
 * `container_width_preference`, and the other DIDAS sites read and write those
 * same two keys — one origin, so a preference set on any of them holds on all
 * of them. Its text-size control is the exception: it steps
 * document.body.style.fontSize and forgets the choice on the next page load.
 * This restores it from, and records it to, the third shared key.
 */
const FONT_KEY = 'font_size_preference';
const FONT = { min: 13, max: 22 };

function readFont() {
  try {
    const v = Number.parseFloat(window.localStorage.getItem(FONT_KEY));
    return v >= FONT.min && v <= FONT.max ? v : null;
  } catch (e) {
    return null;
  }
}

function rememberFont() {
  const px = Number.parseFloat(getComputedStyle(document.body).fontSize);
  if (!Number.isFinite(px)) return;
  // Private browsing and blocked site data both throw; the control still works
  // for the session, it just does not persist.
  try {
    window.localStorage.setItem(FONT_KEY, String(px));
  } catch (e) {
    /* ignore */
  }
}

function wireFont() {
  const stored = readFont();
  if (stored !== null) document.body.style.fontSize = stored + 'px';
  for (const id of ['decreaseBtn', 'increaseBtn']) {
    const button = document.getElementById(id);
    // After spec-up-t's own listener has adjusted the size, not instead of it.
    if (button) button.addEventListener('click', () => setTimeout(rememberFont, 0));
  }
}

function start() {
  mount();
  bridge();
  wireFont();
  views();
  termSearch();
  alignMasthead();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}

/* Sectioned views. The other DIDAS sites are separate pages with a horizontal
 * menu; a spec-up-t document is one long page. This presents that one page as
 * four views — Overview, Terms, EU-CH Mapping, Contributing — behind a
 * horizontal menu in the masthead. The document itself is untouched: every
 * element keeps its place and its anchor, hash navigation switches to the
 * view that contains the target, and a non-empty search temporarily shows the
 * whole document so spec-up-t's own search keeps finding everything. If the
 * expected section headings are ever missing, nothing activates and the page
 * stays a single scroll.
 */
function views() {
  const VIEWS = [
    { key: 'overview', label: 'Overview', start: 'didas-glossary' },
    { key: 'terms', label: 'Terms', start: 'terms-and-definitions' },
    { key: 'mapping', label: 'EU-CH Mapping', start: 'eu-ch-interoperability-mapping' },
    { key: 'contributing', label: 'Contributing', start: 'contributing' },
  ];
  const content = document.getElementById('content');
  if (!content) return;

  const starts = new Map(VIEWS.map((v) => [v.start, v.key]));
  let current = null;
  for (const el of Array.from(content.children)) {
    if (el.id && starts.has(el.id)) current = starts.get(el.id);
    if (current) el.setAttribute('data-view', current);
  }
  for (const v of VIEWS) {
    if (!content.querySelector(`[data-view="${v.key}"]`)) return;
  }

  const bar = document.querySelector('.site-masthead');
  if (!bar) return;
  const nav = document.createElement('nav');
  nav.className = 'views';
  nav.setAttribute('aria-label', 'Sections');
  for (const v of VIEWS) {
    const a = document.createElement('a');
    a.href = '#' + v.start;
    a.textContent = v.label;
    a.setAttribute('data-view-link', v.key);
    nav.appendChild(a);
  }
  bar.appendChild(nav);

  function viewOf(id) {
    let el = document.getElementById(id);
    while (el && el.parentElement && el.parentElement !== content) el = el.parentElement;
    return el ? el.getAttribute('data-view') : null;
  }

  // The sidebar TOC lists every heading of the document; scope it to the
  // active view so the sidebar matches what is on screen. Entries are hidden,
  // not removed, so spec-up-t's own TOC behaviour is untouched.
  // The Terms view has no section headings, so its sidebar gets an A-Z index of
  // the terms instead — the same role the page menu plays on the other sites.
  const tocList = document.querySelector('#toc .toc');
  if (tocList) {
    const entries = Array.from(document.querySelectorAll('#content dl dt'))
      .map((dt) => {
        // spec-up-t nests one span per alias; the innermost carries the
        // canonical anchor, and .term-original-term the canonical label.
        const anchors = dt.querySelectorAll('[id^="term:"]');
        const original = dt.querySelector('.term-original-term');
        if (!anchors.length || !original) return null;
        const label = original.textContent.trim();
        return label ? { id: anchors[anchors.length - 1].id, label } : null;
      })
      .filter(Boolean)
      .sort((a, b) => a.label.localeCompare(b.label, 'en', { sensitivity: 'base' }));
    for (const { id, label } of entries) {
      const li = document.createElement('li');
      li.className = 'didas-term-index';
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = label;
      li.appendChild(a);
      tocList.appendChild(li);
    }
  }

  const tocItems = Array.from(document.querySelectorAll('#toc .toc li'))
    .map((li) => {
      const a = li.querySelector(':scope > a[href^="#"]');
      return a ? { li, key: viewOf(decodeURIComponent(a.getAttribute('href').slice(1))) } : null;
    })
    .filter((item) => item && item.key);

  function activate(key, scrollTo) {
    document.body.setAttribute('data-active-view', key);
    for (const { li, key: itemKey } of tocItems) {
      li.hidden = !document.body.classList.contains('search-all') && itemKey !== key;
    }
    for (const a of nav.querySelectorAll('[data-view-link]')) {
      a.setAttribute('aria-current', String(a.getAttribute('data-view-link') === key));
    }
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }

  function route() {
    const id = decodeURIComponent((location.hash || '').slice(1));
    if (!id) {
      activate('terms');
      return;
    }
    const key = viewOf(id);
    if (key) activate(key, id);
  }

  window.addEventListener('hashchange', route);

  // Only a real text input counts: in spec-up-t 1.7 the id "search" belongs to
  // an SVG icon symbol, not to a field.
  const search = document.querySelector('input[type="search"], input#search');
  if (search) {
    const sync = () =>
      document.body.classList.toggle('search-all', (search.value || '').trim().length > 0);
    search.addEventListener('input', sync);
    sync();
  }

  route();
}

/* Search with autocomplete. The spec-up-t 1.7 page has no search field, and
 * with sectioned views the browser's find-in-page only sees the active view.
 * This field searches the whole document: term names and all their aliases
 * (so DE/FR/IT/RM names find the English entry), section headings, and the
 * definition text. Choosing a suggestion sets the location hash, so the view
 * layer switches to the right view and scrolls to the target.
 */
function termSearch() {
  const content = document.getElementById('content');
  const host = document.querySelector('.site-masthead .views') ||
    document.querySelector('.site-masthead .bar');
  if (!content || !host) return;

  const fold = (s) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

  const entries = [];
  for (const dt of content.querySelectorAll('dl dt')) {
    const anchors = dt.querySelectorAll('[id^="term:"]');
    const original = dt.querySelector('.term-original-term');
    if (!anchors.length || !original) continue;
    const label = original.textContent.trim();
    const paren = dt.querySelector('.term-local-parenthetical-terms');
    const aliases = paren
      ? paren.textContent.replace(/^\(|\)$/g, '').split(',').map((a) => a.trim()).filter(Boolean)
      : [];
    // The heading shows one alias as its visible text: the first text node of
    // the innermost anchor span.
    const display = anchors[anchors.length - 1].firstChild;
    if (display && display.nodeType === 3 && display.textContent.trim()) aliases.push(display.textContent.trim());
    let text = '';
    for (let n = dt.nextElementSibling; n && n.tagName === 'DD'; n = n.nextElementSibling) {
      text += ' ' + n.textContent;
    }
    text = text.replace(/\s+/g, ' ').trim();
    // One list drives both matching and the "alias: …" note, so they agree.
    const all = [...new Set([label, ...aliases])];
    entries.push({
      kind: 'term',
      id: anchors[anchors.length - 1].id,
      label,
      aliases: all.slice(1),
      names: all.map(fold),
      text,
      folded: fold(text),
    });
  }
  for (const h of content.querySelectorAll(':scope > h1[id], :scope > h2[id]')) {
    const label = h.textContent.replace(/^\s*§\s*(\d+\.\s*)?/, '').trim();
    entries.push({ kind: 'section', id: h.id, label, aliases: [], names: [fold(label)], text: '', folded: '' });
  }
  if (!entries.length) return;

  const wrap = document.createElement('div');
  wrap.className = 'didas-search';
  wrap.innerHTML = `
    <input type="search" id="didas-search-input" autocomplete="off" spellcheck="false"
      placeholder="Search terms…" aria-label="Search the glossary"
      role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="didas-search-list">
    <ul id="didas-search-list" role="listbox" hidden></ul>`;
  host.appendChild(wrap);
  const input = wrap.querySelector('input');
  const list = wrap.querySelector('ul');
  let results = [];
  let active = -1;

  function snippet(entry, q) {
    const i = entry.folded.indexOf(q);
    if (i < 0) return '';
    const start = Math.max(0, i - 40);
    return (start > 0 ? '…' : '') + entry.text.slice(start, i + q.length + 60).trim() + '…';
  }

  function search(raw) {
    const q = fold(raw.trim());
    if (!q) return [];
    const scored = [];
    for (const e of entries) {
      let score = 0;
      let via = '';
      for (let k = 0; k < e.names.length; k++) {
        const n = e.names[k];
        const s = n === q ? 100 : n.startsWith(q) ? 80 : n.includes(q) ? 60 : 0;
        if (s > score) {
          score = s;
          via = k === 0 ? '' : e.aliases[k - 1] || '';
        }
      }
      if (e.kind === 'section' && score) score -= 15;
      let snip = '';
      if (!score && e.folded.includes(q)) {
        score = 20;
        snip = snippet(e, q);
      }
      if (score) scored.push({ e, score, via, snip });
    }
    return scored
      .sort((a, b) => b.score - a.score || a.e.label.localeCompare(b.e.label))
      .slice(0, 10);
  }

  function render() {
    list.innerHTML = '';
    if (!results.length) {
      const li = document.createElement('li');
      li.className = 'empty';
      li.textContent = 'No matches';
      list.appendChild(li);
    }
    results.forEach((r, i) => {
      const li = document.createElement('li');
      li.id = 'didas-search-opt-' + i;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', String(i === active));
      const title = document.createElement('span');
      title.className = 'label';
      title.textContent = r.e.label;
      li.appendChild(title);
      const meta = document.createElement('span');
      meta.className = 'meta';
      meta.textContent = r.e.kind === 'section' ? 'section'
        : r.via ? 'alias: ' + r.via
        : r.snip ? 'in definition' : 'term';
      li.appendChild(meta);
      if (r.snip) {
        const s = document.createElement('span');
        s.className = 'snip';
        s.textContent = r.snip;
        li.appendChild(s);
      }
      li.addEventListener('mousedown', (ev) => {
        ev.preventDefault();
        go(i);
      });
      list.appendChild(li);
    });
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    input.setAttribute('aria-activedescendant', active >= 0 ? 'didas-search-opt-' + active : '');
  }

  function close() {
    list.hidden = true;
    active = -1;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
  }

  function go(i) {
    const r = results[i];
    if (!r) return;
    const hash = '#' + r.e.id;
    if (location.hash === hash) {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      location.hash = hash;
    }
    input.value = '';
    close();
    input.blur();
  }

  input.addEventListener('input', () => {
    results = search(input.value);
    active = results.length ? 0 : -1;
    if (input.value.trim()) render();
    else close();
  });
  input.addEventListener('keydown', (ev) => {
    if (list.hidden && ev.key !== 'Escape') return;
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      if (results.length) active = (active + 1) % results.length;
      render();
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      if (results.length) active = (active - 1 + results.length) % results.length;
      render();
    } else if (ev.key === 'Enter') {
      ev.preventDefault();
      go(active >= 0 ? active : 0);
    } else if (ev.key === 'Escape') {
      input.value = '';
      close();
    }
  });
  input.addEventListener('blur', () => setTimeout(close, 100));
  document.addEventListener('keydown', (ev) => {
    if (ev.key === '/' && document.activeElement !== input &&
        !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      ev.preventDefault();
      input.focus();
    }
  });
}

/* The other DIDAS sites size the masthead to their content column
 * (--mh-width = the page's wrap width), so the bar lines up with the text
 * below it. Here the content sits in spec-up-t's Bootstrap container, whose
 * width depends on the breakpoint and on the wide/narrow toggle, so the width
 * is measured rather than hard-coded. The bar's 24px inline padding is shared
 * across sites; adding the container's own gutter on each side puts the
 * masthead's content edge on the container's content edge.
 */
function alignMasthead() {
  const masthead = document.querySelector('.site-masthead');
  const content = document.getElementById('content');
  const container = content && content.closest('.container, .container-fluid');
  if (!masthead || !container) return;

  function apply() {
    const gutter = parseFloat(getComputedStyle(container).paddingLeft) || 0;
    const width = container.getBoundingClientRect().width;
    masthead.style.setProperty('--mh-width', Math.round(width + 2 * (24 - gutter)) + 'px');
  }

  apply();
  window.addEventListener('resize', apply);
  // The width toggle swaps container and container-fluid on this element.
  new MutationObserver(apply).observe(container, { attributes: true, attributeFilter: ['class'] });
}
