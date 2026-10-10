# Spec: Performance budgets, assets and discoverability

## Objective

Keep the approved visual design fast with measured resource/runtime budgets and searchable, meaningful document metadata.

## Scope

- Package: SamuelIVX/SamuelIVX.github.io / portfolio revamp.
- Modifies: Assets/fonts, DotGrid loading/caps, index.html, public metadata, Vite output and measurement tooling/tests.
- Off-limits: Hosting migration, new analytics, visual redesign and unmeasured optimization.

## Non-Goals

Guaranteed field Core Web Vitals without traffic, service workers, tracking and arbitrary Lighthouse score chasing.

## Invariants

Essential content does not depend on the decorative background loading. Improvements preserve approved content and accessibility.

## Requirements

1. WHEN the production page is built, THE SYSTEM SHALL keep total emitted JavaScript at or below 150KiB gzip and CSS at or below 15KiB gzip, measured with standard gzip on all shipped chunks.
2. WHEN a cold visitor loads the page, THE SYSTEM SHALL keep initial transferred resources at or below 750KiB excluding the on-demand resume and lazy offscreen project images.
3. WHEN the page is profiled, THE SYSTEM SHALL meet the defined mobile laboratory loading/stability/interaction budget and bound decorative rendering cost.
4. WHEN the page is indexed or shared, THE SYSTEM SHALL expose a descriptive title, canonical URL, description, Open Graph/Twitter metadata and accessible content links.

## Acceptance Criteria

At least three cold production-preview Lighthouse mobile runs on pinned tool/Chrome versions using recorded defaults: median LCP ≤2.5s, CLS ≤0.1 and TBT ≤200ms. Report environment, raw output and outliers. Trace theme/tab/carousel and pointer interaction on a named device: main-thread response ≤200ms in the recorded script, no background-caused long tasks >50ms in a 10s interaction sample. Field p75 targets are LCP ≤2.5s/INP ≤200ms/CLS ≤0.1, reported only with sufficient CrUX data. Repeated settle/hidden/unmount tests show no active RAF loop. Validate all metadata/asset URLs against public deployment.

## Design (required if non-trivial)

These are proposed release budgets, not existing results. Prototype measured roughly 99.94KB gzip JS/5.44KB CSS; production may differ. Render readable text immediately with progressive enhancement; lazy import DotGrid after essential shell is ready. Bound device pixel ratio (maximum 1.5 recommended), total canvas pixels and dot instances; when dense grid exceeds measured limits, use a static grid rather than silently changing the approved dot spacing. Show no WebGL work when unsupported/reduced motion and respect save-data with a static fallback.

Optimize three supplied project previews with responsive dimensions and explicit width/height; lazy load below-fold images, avoid data-base64 bulk, preserve informative alt. Self-host a licensed Latin-subset Manrope WOFF2 (variable or only used weights), font-display swap and at most one critical preload. Preserve font license. Keep SVG icons inline, resume fetched only on request, no tutorial 3D models. Do not preload every asset.

Canonical https://samuelivx.github.io/; title names Samuel and software/web development; accurate description and social image, robots.txt/sitemap.xml without invented routes. Consider build-time static HTML content if indexing tests show CSR-only visibility problems; decision must include payload/fidelity evidence, not a framework rewrite.

## Current State

[verified] Production is static GitHub Pages and the approved DotGrid uses native WebGL without extra runtime dependencies. [unverified] Production CWV, asset transfer, font subset size, mobile GPU cost, crawler output and caching behavior remain to be measured.

## Tests

builtAssetsMeetGzipBudgets (R1); coldLoadResourceBudget (R2); mobileLighthouseAndInteractionTrace (R3); dotGridStopsWhenSettledHiddenOrDisposed (R3); canonicalMetadataAndLinksResolve (R4).

## Constraints

- Dependencies: 00 through 03. Optimize before enlarging any budget; document a justified budget change in the same spec/PR. Sources: https://web.dev/articles/vitals and https://developer.chrome.com/docs/lighthouse/performance/performance-scoring.
- Backward compatibility: retained hashes, public asset URLs and valid saved preferences are checked explicitly; the requested visual/form replacement is an intentional behavior change.
