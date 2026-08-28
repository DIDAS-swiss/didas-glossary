/* Apply a pinned theme before first paint to avoid a flash of the wrong
   theme. The toggle in the header (custom-body.js) writes the choice. */
(function () {
  try {
    var t = localStorage.getItem('didas-theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    }
  } catch (e) { /* storage unavailable — fall back to system preference */ }

  // Load webfonts without blocking first paint (an @import in custom.css
  // would delay applying the whole theme until the font CSS resolves).
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap';
  document.head.appendChild(l);
})();
