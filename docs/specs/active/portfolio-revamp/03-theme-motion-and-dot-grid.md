# Spec: Saved themes, motion and Dot Grid lifecycle

## Objective

Preserve the approved motion while making persistence, preference changes and graphics failure deterministic and safe.

## Scope

- Package: SamuelIVX/SamuelIVX.github.io / portfolio revamp.
- Modifies: Theme/reduced-motion hooks, startup index.html, DotGrid adapter/source, motion styles and tests.
- Off-limits: Approved content, unrelated runtime libraries and deployment policy.

## Non-Goals

Continuous idle wave motion, pointer-origin theme wipes, OGL/GSAP imports, analytics and synced cross-device preferences.

## Invariants

Content remains usable without storage, WebGL or View Transitions. DotGrid is decorative and never captures input.

## Requirements

1. WHEN a page loads, THE SYSTEM SHALL apply only a valid saved light/dark portfolio-theme preference before paint, otherwise default dark, and initialize React and theme-color consistently.
2. WHEN the theme button is activated, THE SYSTEM SHALL save the choice and reveal the new palette from the button center over 1.6s with a functioning unsupported-browser fallback.
3. WHEN content appears or an experience changes, THE SYSTEM SHALL use the approved coordinated entrances and honor live reduced-motion preference changes.
4. WHEN the background is enabled, THE SYSTEM SHALL reproduce the approved dense Dot Grid interaction and release its browser/GPU resources on disposal or failure.

## Acceptance Criteria

Reload light/dark, invalid/missing storage and thrown getItem/setItem all leave usable UI. Rapid toggle input has deterministic final state with no stuck lock or unhandled rejection. Unsupported transition API and failed transitions retain correct palette/storage. Reduced motion renders immediately, resets moving dots and disables interaction. Cursor/click changes screenshots in normal motion and stays static under reduced motion; hidden/unmounted/settled renderer schedules no continuing animation frames. Context loss cannot break navigation or content.

## Design (required if non-trivial)

Theme bootstrap is a small external same-origin blocking script before first paint, enabling a strict script-src self CSP; if kept inline its build-generated hash must match exact bytes. One theme owner coordinates root dataset, meta color, storage and React state. Allowlist light/dark; storage exceptions are an intentional fallback, not logged personal data. Theme animation lock always clears in finally, lifecycle cleanup cancels timers and pending animations.

Intro: one shared group, 2.6s opacity/12px/3px-blur; no independent summary sequence. Section reveal: 1.3s once-only; safe visible fallback if observer unavailable. Experience: whole card opacity/4px, 1.4s ease cubic-bezier(.4,0,.2,1). Card hover lift 4px; reduced motion removes movement. Limit blur duration if measured LCP/performance fails 04; seek visual approval for a noticeable timing change.

DotGrid copied at 26cf51f7874aeb31aa9eb463648f3221865dbc11 with retained MIT + Commons Clause notice. Explicit props: dotSize=3, gap=10, proximity=170, tension=.55, swell=1.2, glow=.6; dense is a demo preset, not a component prop. Defaults strength=1/bounce=.6/returnDuration=.8/shockRadius=320/shockStrength=5/stretch=.5/fade=0. Dark base #465B70/active #9AC7D6/opacity .35; light base #8B9CA9/active #326D83/opacity .23. Pointer and clicks animate; idle settles. Single fixed canvas, pointer-events none, aria-hidden. Local patches own live reduced-motion reset, hidden-document stop, shader failure cleanup and context loss. Static palette fallback; no blocking spinner or perpetual retries. DPR/instance caps and deferred loading belong to 04.

## Current State

[verified] Prototype validates saved theme and blocked storage, live motion resets, pointer/click response and actual shader settings. [unverified] Shader failure cleanup, context loss restoration, cross-browser View Transitions and rapid failure races require production tests.

## Tests

savedThemeAppliesBeforePaintAndSurvivesStorageFailure (R1); themeWipeOriginAndFailureUnlock (R2); experienceWholeCardEntranceAndLiveReducedMotion (R3); dotGridInteractsSettlesPausesAndDisposes (R4).

## Constraints

- Dependencies: 01-design-and-navigation.md, 02-projects-experience-and-honors.md. Same portfolio-theme key; users keep valid saved preferences.
- Backward compatibility: retained hashes, public asset URLs and valid saved preferences are checked explicitly; the requested visual/form replacement is an intentional behavior change.
