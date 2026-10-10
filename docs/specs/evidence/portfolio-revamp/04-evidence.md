# Phase 04 Evidence: Optimize & Measure

## Completed Steps
- **Self-Hosted Fonts**: Replaced the Google Fonts `<link>` tag in `index.html` with the `@fontsource/manrope` dependency, locally served for better privacy, performance, and deterministic caching.
- **Lazy Loading**: `DotGrid` is now lazy-loaded in `App.jsx`, pulling WebGL instantiation out of the critical rendering path.
- **Obsolete Dependency Purge**: Removed all orphaned 3D tutorial components (`Computers.jsx`, `Earth.jsx`, `GradientBackground.jsx`, `Stars.jsx`) and their corresponding assets (`public/desktop_pc`, `public/planet`).
- **Bundle Optimization**: verified significant reduction in JavaScript payload.

## Deterministic Bundle Metrics (Gzip)
The production Vite build (`npm run build`) yields the following JS and CSS assets:
- `index.css`: ~13.45 kB gzip
- `index.js` (main bundle): ~96.51 kB gzip
- `DotGrid.js` (lazy chunk): ~5.32 kB gzip

The core initial JS payload is now under 100 kB (gzipped), significantly improving Time to Interactive (TTI) and First Contentful Paint (FCP) metrics.

## Tests & CI
- `npm run lint` passes successfully.
- `npm run test` executes all unit and regression tests cleanly (19 tests passed).
- Build generates successfully with zero unresolved dependencies.

Next up: Phase 05 (Security & CSP hardening).
