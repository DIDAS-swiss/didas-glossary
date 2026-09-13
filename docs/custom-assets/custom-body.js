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
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}
