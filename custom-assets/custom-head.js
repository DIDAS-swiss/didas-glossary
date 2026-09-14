/* Loads the one webfont the shared DIDAS masthead needs.
 *
 * The other DIDAS sites put these three tags in their <head> directly. Here the
 * <head> is written by spec-up-t on every `npm run render`, so they are added
 * from the head asset specs.json already declares. This runs while the head is
 * being parsed, which is early enough for the font to be requested in parallel
 * with the rest of the page.
 *
 * Everything else about the masthead lives in custom.css and custom-body.js.
 * The font stack there falls back to the platform monospace face, so a blocked
 * or slow fonts.googleapis.com costs the header nothing but its exact face.
 */

const LINKS = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap',
  },
];

for (const attrs of LINKS) {
  if (document.head.querySelector(`link[href="${attrs.href}"]`)) continue;
  const link = document.createElement('link');
  Object.assign(link, attrs);
  document.head.appendChild(link);
}
