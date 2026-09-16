# Static prerendering for all pages

## Goal
Make the served page source contain the full text of every page (headings, paragraphs, service cards, testimonials, meta tags), so search engines and AI crawlers that don't run JavaScript see real content. Visitors keep the exact same site — same design, colors, copy, animations.

## Approach
Prerender at build time using React's own server renderer (no headless browser, no hosting change, no framework migration):

1. Add a small build-time script that renders each of the 4 routes (`/`, `/about`, `/book`, `/privacy-policy`) to HTML strings.
2. Inject that HTML — plus the per-page title, description, canonical, Open Graph/Twitter tags and JSON-LD already produced by react-helmet-async — into the served page for each route.
3. The React app then "hydrates" on top of the identical markup in the browser, so behaviour is unchanged.

This is the standard prerender pattern for a Vite + React site and keeps the current stack (no SSR server, no TanStack migration).

## Technical detail
- Split `src/main.tsx` into `src/entry-client.tsx` (uses `hydrateRoot` when prerendered markup exists) and `src/entry-server.tsx` (exports `render(url)` using `renderToString`, `StaticRouter`, and a `HelmetProvider` context).
- Refactor `src/App.tsx` so the router is injectable: shared `<AppShell>` with providers + routes; `BrowserRouter` on the client, `StaticRouter` on the server.
- Add `scripts/prerender.mjs`: runs after `vite build` + `vite build --ssr`, loops the 4 routes, writes `dist/index.html`, `dist/about/index.html`, `dist/book/index.html`, `dist/privacy-policy/index.html` with body markup and head tags filled in.
- `index.html` gets placeholder markers (`<!--app-html-->`, `<!--app-head-->`) that are replaced per route; the current static homepage head stays as the fallback.
- `package.json` build script becomes: client build → ssr build → prerender.

## Safety
- Rendering is server-safe: the pages are static content, the only browser API in the tree is a `window.scrollTo` inside `useEffect` (never runs during prerender), and the Book form's state only matters after interaction.
- Fade-in animations start from their normal initial state and play on load as they do today.
- If a route ever fails to prerender, the fallback is the current behaviour (empty shell + JS), so the site cannot end up broken.
- Verification after the change: build, inspect the generated HTML for each route to confirm real text and correct per-page title/description, and load the site in a browser to confirm it looks and behaves identically.

## Not changed
No design, layout, color, spacing, copy, routing, or asset changes.
