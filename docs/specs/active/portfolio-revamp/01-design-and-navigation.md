# Spec: Design system, layout and navigation

## Objective

Port the approved B visual direction with readable hierarchy, full-screen introduction and consistent navigation rather than reproducing the tutorial-era page.

## Scope

- Package: SamuelIVX/SamuelIVX.github.io / portfolio revamp.
- Modifies: src/App.jsx, src/index.css, src/styles.js, Navbar/Hero/About/Contact/Footer; associated tests.
- Off-limits: Experience/carousel state owned by 02; theme/background engine owned by 03; CI owned by 06.

## Non-Goals

Alternative A/C production layouts, additional ASCII art, new branding icons and speculative whitespace fillers.

## Invariants

Page remains fluid at all widths; user controls stay reachable and section links retain native hash semantics.

## Requirements

1. WHEN the page first opens, THE SYSTEM SHALL show a viewport-height intro beneath the sticky header with Hello World, I'm..., three aligned name lines, one-line profession and distinct summary, plus Explore my work and Resume.
2. WHEN visitors scroll, THE SYSTEM SHALL present About, Projects, Experience, Honors and Contact in that order and highlight the corresponding navigation link.
3. WHEN the viewport narrows, THE SYSTEM SHALL adapt without horizontal page overflow, clipping or inaccessible controls.
4. WHEN the page renders, THE SYSTEM SHALL use the approved palette, restrained emphasis, matching card lift in both themes, LinkedIn/GitHub header icons, compact contact and bullet-separated copyright.

## Acceptance Criteria

At 320/390/651/768/1024/1440/2560px, no page overflow; introduction plus header fills at least first viewport, greeting/name lines and section mini/main titles share a left edge. Five nav anchors update aria-current=location. Mobile menu supports Escape/close/focus return. Replay intro and carousel count are absent; all four social/theme/control gaps remain consistent where visible.

## Design (required if non-trivial)

Tokens: cloud #F7F8FA / slate #131A23; light ink #1A2230 / dark #EEF2F6; ocean #326D83 / #9AC7D6; warm #875F42 / #CDB29A. Manrope with system fallback; one font family, purposeful weight hierarchy. Responsive 24–80px gutters, 8px navbar gaps and subtle divider before social controls on desktop. Sections retain approved spacing; reduction from 112px to 80px was suggested but never approved. Compare to archived B before changing spacing.

Keep one semantic h1 and section h2s, card h3s, header/nav/main/footer landmarks, skip link and visible focus. Contrast meets WCAG AA in each theme, including text over the dot background. Use native scrolling and anchors with sticky-header offset; coalesce scrollspy in requestAnimationFrame, remove listeners on cleanup. Contact is mailto, not a form. Preserve compact action padding and selective bold. Decorative icons have aria-hidden with labelled parent links. Copyright derives the browser year (2026 is an example, not a hardcoded value).

## Current State

[verified] Scratch B implements these visuals and full-width gutters. [unverified] Production has not been ported; contrast under interaction, 200% zoom, VoiceOver and browser compatibility need release verification.

## Tests

introFillsViewportWithAlignedIdentity (R1); sectionOrderAndScrollspyMatchNavigation (R2); mobileMenuEscapeRestoresFocus (R3); bothThemesRetainReadableContentAndFooter (R4).

## Constraints

- Dependencies: 00-foundation-and-content.md. Keep #main skip target plus existing section hashes.
- Backward compatibility: retained hashes, public asset URLs and valid saved preferences are checked explicitly; the requested visual/form replacement is an intentional behavior change.
