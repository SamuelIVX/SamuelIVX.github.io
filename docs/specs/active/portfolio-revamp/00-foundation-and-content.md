# Spec: Foundation and content contract

## Objective

Preserve the approved portfolio as a reproducible reference and establish the smallest production architecture before replacing the old page.

## Scope

- Package: SamuelIVX/SamuelIVX.github.io / portfolio revamp.
- Modifies: package.json, package-lock.json, src/constants/index.js, README.md; create src/content/portfolio.js and colocated content tests.
- Off-limits: Production rendering and deployment workflow until later phases; no unrelated dependency upgrades.

## Non-Goals

Framework migration, CMS, backend, authentication, TypeScript conversion and new projects.

## Invariants

All user-approved facts, destinations and public resume remain accurate. Specs record intended behavior, not achieved production quality.

## Requirements

1. WHEN implementation starts, THE SYSTEM SHALL install from the committed lockfile with a supported Node release matching the CI major and satisfying all package engine requirements.
2. WHEN portfolio content is rendered, THE SYSTEM SHALL use one static content module with the approved four projects, six experiences and three honors from the preserved reference.
3. WHEN dependencies are selected, THE SYSTEM SHALL retain React/Vite and justify each runtime import; no prototype alias, vendor directory or scratch path shall be required.
4. WHEN the production structure is prepared, THE SYSTEM SHALL use focused React sections/hooks and isolate the copied DotGrid renderer behind one background component.

## Acceptance Criteria

Clean npm ci succeeds without unsupported-engine warnings; a manifest/lockfile discrepancy is resolved before porting. Content tests verify exact names, links, award qualification and all nine AWS resume bullets. A production build needs no /private/tmp paths.

## Design (required if non-trivial)

Keep existing JavaScript/JSX, Vite and existing test/lint conventions. Target App shell + Navbar/Hero/About/Projects/Experience/Honors/Contact/Footer, src/content/portfolio.js, theme/scrollspy/reduced-motion hooks and src/components/background/DotGrid.jsx. File names may match existing house structure, but each behavior has one owner. Avoid generic registries/context providers for local selection state. Keep vendors separate with upstream attribution and a readable local-patch summary.

Content: @samhb; Samuel Hernandez Balderas; Software engineer & web developer.; school/hobbies in About including gym. Hero summary distinct from About. Projects in order Interleave, PayCore, Clarify, FoodSense; source https://github.com/SamuelIVX/<repo>; only supplied PayCore/Clarify demo URLs. Experience order and full bullet copy follow archive content.js; AWS company label Amazon Web Services, full dates in panel only. Honors order Amazon Future Engineer ($40,000, April 2023, one of 400 nationwide, paid CS internship after freshman year), Meringoff MVP ($1,000, June 2023, one of two student finalists), SparkYouth NYC ($1,160, June 2023, approximately 50 nationwide). Preserve issuers and purposes. Email samuel05.hb@gmail.com; LinkedIn https://www.linkedin.com/in/samuelhb/; GitHub https://github.com/SamuelIVX. Footer © runtime year Samuel Hernandez Balderas • All rights reserved.

## Current State

[verified] Existing production is React 18/Vite JavaScript with npm scripts build/lint/test and no separate typecheck. [verified] Prototype content and source are archived in ../../reference/portfolio-revamp/. [verified] Repository baseline 5436c01; npm ci reported six high-severity advisories and local Node 22.15.0 engine warnings. [unverified] Advisory exploitability, compatible target tool versions and clean production baseline checks; investigate, do not use npm audit fix --force blindly.

## Tests

contentRetainsApprovedProjectsAndDestinations (R2); experiencesRetainResumeBulletsAndFullDates (R2); honorsPreserveAmountsOrderAndApproximateCounts (R2); cleanInstallHasNoScratchDependencies (R1/R3).

## Constraints

- Dependencies: None. Existing #about/#work/#contact hashes remain valid; /resume.pdf remains usable even if the new primary path changes.
- Backward compatibility: retained hashes, public asset URLs and valid saved preferences are checked explicitly; the requested visual/form replacement is an intentional behavior change.
