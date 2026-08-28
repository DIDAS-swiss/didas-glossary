/* Light/dark toggle in the header. Cycles the pinned theme; falls back to
   the system preference when nothing is pinned. */
(function () {
  var root = document.documentElement;

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function currentTheme() {
    return root.getAttribute('data-theme') || (systemPrefersDark() ? 'dark' : 'light');
  }
  function setIcon(btn) {
    btn.textContent = currentTheme() === 'dark' ? '☀︎' : '☾';
    btn.setAttribute('aria-label',
      currentTheme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  var header = document.getElementById('header');
  if (!header) return;

  var btn = document.createElement('button');
  btn.id = 'didas-theme-toggle';
  btn.type = 'button';
  setIcon(btn);
  btn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('didas-theme', next); } catch (e) { /* ignore */ }
    setIcon(btn);
  });
  header.appendChild(btn);
})();
