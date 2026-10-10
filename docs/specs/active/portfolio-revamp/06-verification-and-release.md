# Spec: Verification, CI and reversible release

## Objective

Produce reviewable evidence that the production port matches the specs before deployment, and preserve a practical
rollback path.

## Scope

- Package: SamuelIVX/SamuelIVX.github.io / portfolio revamp.
- Modifies: src test suites, browser test config, package scripts, README.md and only relevant .github workflows.
- Off-limits: Unrelated shared template changes, automatic merge, repository settings and publishing without the
  session’s authorization.

## Non-Goals

Unit-test claims of real GPU behavior, snapshot-only correctness and deployment before required checks finish.

## Invariants

Existing independent regression cases remain represented; deployment uses the verified build artifact and rollback is
available.

## Requirements

1. WHEN a behavior is ported, THE SYSTEM SHALL ship meaningful tests at its public seam in the same PR, preserving
   unrelated existing regression coverage.
2. WHEN a change is ready for release, THE SYSTEM SHALL pass
   install/lint/unit/build/browser/accessibility/performance/security checks and the selective CodeRabbit gate.
3. WHEN deployed, THE SYSTEM SHALL publish the same artifact that passed checks, then verify production HTTP status,
   content version and critical asset URLs.
4. WHEN a post-deploy critical failure occurs, THE SYSTEM SHALL restore the last known-good verified artifact or revert
   through the verified deployment path and confirm recovery.

## Acceptance Criteria

npm ci/npm run lint/npm run test/npm run build pass under supported Node; no separate TS check unless a later approved
TS migration adds one. Add documented npm run test:e2e and audit/budget commands when implemented.
Chromium/Firefox/WebKit desktop/phone smoke passes; manual VoiceOver/keyboard/200% zoom and physical touch/GPU results
recorded. Spec IDs map to test/evidence artifacts with pass/fail/unverified states. CodeRabbit completion evidence must
show an actual analyzed review, not review_skipped/heartbeat. After deployment root, resume, CSS/JS and project previews
return HTTP200 and correct content marker; smoke social links/mailto/selected panel.

## Design (required if non-trivial)

Unit/RTL seams: static content, theme storage/normalization, scrollspy selection, carousel bounds and ARIA tabs. Browser
seams: before-paint theme, full-width layout, native scrolling/focus, View Transition fallback/lock, actual DotGrid
pointer/click/static/failure behavior. Mock GPU only for jsdom; real browser tests exercise actual renderer. Proposed
tests in each sibling spec are a plan, not existing passing coverage. If applying tdd skill, confirm these seams before
starting that workflow.

CI currently deploys on main after Build, while separate Lint/security workflows run independently. Tighten release
gating so the deploy cannot race required lint/security/browser checks; either integrate necessary gates into the
release job dependency graph or adopt an explicitly verified upstream-success artifact workflow. Preserve SHA-pinned
actions, least permissions, untrusted-PR boundaries, and existing generic template contracts; changes to reusable
workflows need scoped compatibility review. Do not fetch secrets for fork tests or use pull_request_target to execute
untrusted code. PRs remain reviewable; no auto merge/publish as part of spec authoring.

Run targeted tests per slice, then full integrated checks after merges/fixes. Require local CodeRabbit for this spec
update and substantial/security implementation changes per the context gate, fix material findings, retain final review
scope/output. Rollback records previous deploy SHA/artifact location and retention/rebuild constraints; Pages recovery
is not instant. Keep notes distinguishing measured lab evidence from field data and certification.

## Current State

[verified] Existing Vitest suite includes primary-section/nav/contact-state/axe smoke; it must be updated for the
explicitly requested replacement of the EmailJS form rather than silently weakened. [verified] Build job uploads dist
and deploys it after build/test on main; lint lives in a separate workflow. [unverified] New release checks, browser
matrix and rollback evidence are not yet implemented.

## Tests

approvedPortfolioContractInRTL (R1); productionBrowserMatrixAndAxe (R2); deployDependsOnAllRequiredChecks (R3);
releasedAssetsAndContentMarkerMatchArtifact (R3); rollbackRestoresKnownGoodPortfolio (R4).

## Constraints

- Dependencies: 00 through 05. Preserve generic shared workflow behavior; do not publish this spec task automatically.
- Backward compatibility: retained hashes, public asset URLs and valid saved preferences are checked explicitly; the
  requested visual/form replacement is an intentional behavior change.
