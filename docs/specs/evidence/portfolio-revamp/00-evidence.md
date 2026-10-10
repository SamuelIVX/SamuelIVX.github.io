# Phase 00: Foundation and Content

## Environment
- **Node version:** v24.21.0
- **npm version:** v11.19.0

## Triage of `npm audit` advisories
- **`brace-expansion` (≤ 1.1.20) / `braces` (*)**: 6 high-severity vulnerabilities.
  - **Reachability:** Found within `eslint-plugin-react -> minimatch -> brace-expansion` and `gh-pages -> globby -> fast-glob -> micromatch -> braces`.
  - **Disposition:** Both are strictly development dependencies used only locally/in CI for linting and publishing. They are not bundled into the production static application. The DoS vectors (via maliciously crafted strings) are not exploitable during standard portfolio build/deploy processes on trusted inputs. We will not forcefully resolve them via `npm audit fix --force` as that introduces breaking changes to `gh-pages`.

## Implementation Results
- Updated `package.json` to require Node engines `>=24.0.0`.
- Extracted and verified approved content into a single production module: `src/content/portfolio.js`.
- Colocated content tests in `src/content/portfolio.test.js`.
- Clean `npm ci` succeeds without `EBADENGINE` warnings.
- `npm run test`, `npm run lint`, and `npm run build` all pass on the new baseline.

## Release Evidence Table (Spec 00)
| Requirement | Test / Measurement | Location | Result |
| ----------- | ------------------ | -------- | ------ |
| R1 (Node CI match) | `npm ci` output inspection | Local | Pass |
| R2 (Content match) | `contentRetainsApprovedProjectsAndDestinations`, `experiencesRetainResumeBulletsAndFullDates`, `honorsPreserveAmountsOrderAndApproximateCounts` | `src/content/portfolio.test.js` | Pass |
| R3 (Dependencies) | `npm ls` / no new deps added | Local | Pass |
| R4 (Structure) | Manual verification (isolated DotGrid behind single component deferred to Phase 01) | `src/content/portfolio.js` | Pass |
