# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server (requires build first)
npm run export    # Build + export static HTML
```

No test suite is configured.

## Architecture

**Stack**: Next.js 9, React 16, `isomorphic-unfetch` for data fetching, `@zeit/next-css` for CSS imports.

**Data flow**: `pages/index.js` is a class component that owns all state (`images`, `query`, `pageNum`, `hasMore`, `isLoading`). It fetches from the Unsplash API directly using `isomorphic-unfetch` and passes callbacks (`searchPhotos`, `fetchMore`, `resetPhotos`) down through `Layout` → `Header`/`Search`/`Main`. `sessionStorage` persists the active search query across page refreshes.

**Infinite scroll**: `Main` holds a single `IntersectionObserver` sentinel at the bottom of the grid. When it enters the viewport, it calls `fetchMore()` (defined in `index.js`), which appends the next page to `images` and updates `hasMore`. `Layout` is a plain shell with no scroll logic.

**Pages**:
- `pages/index.js` — home page; photo grid with search and infinite scroll
- `pages/photo.js` — single photo detail; uses `getInitialProps` (Next.js 9 SSR) to fetch by `id` query param
- `pages/about.js` — static about page

**Components** (`components/`):
- `Layout` — fixed header shell + sentinel for infinite scroll
- `Header` — fixed top bar with nav links (Home / About)
- `Search` — controlled input form, calls `searchPhotos` on submit
- `Main` — responsive photo grid with its own sentinel

**Styling**: All styles live in `components/main.css` (imported once in `Layout`), using CSS custom properties for the dark theme. No Tailwind — ignore any residual utility class names if encountered in git history.

**API key**: Stored in `.env` (gitignored) as `UNSPLASH_KEY`. `next.config.js` loads it via `dotenv` and exposes it through the Next.js `env` config, making `process.env.UNSPLASH_KEY` available on both server and client. To run locally, create `.env` with:
```
UNSPLASH_KEY=<your_unsplash_client_id>
```

## Known Gotchas

- **Node 17+ / Webpack 4**: All scripts include `NODE_OPTIONS=--openssl-legacy-provider` to work around the OpenSSL 3 / MD4 hash incompatibility in Webpack 4.
- `next.config.js` defines an `exportPathMap` that hardcodes `/photo` with `query: { id: 'random' }` for static export; dynamic photo IDs are not supported in static export mode.