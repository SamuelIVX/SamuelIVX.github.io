# Spec: Content browsing and accessible selection

## Objective

Keep projects and experiences compact without hiding meaningful detail or making the page grow by repeating full stacked cards.

## Scope

- Package: SamuelIVX/SamuelIVX.github.io / portfolio revamp.
- Modifies: Projects/Experience/Honors components and their unit/browser tests.
- Off-limits: Background shaders, global theme storage, unrelated content additions and CI.

## Non-Goals

Autoplay carousel, infinite looping, ring distortion and truncated resume bullets.

## Invariants

Exactly one selected experience panel exists. Projects remain links with real destinations. All three honors remain visible.

## Requirements

1. WHEN projects are browsed, THE SYSTEM SHALL show one manual native scroll-snap row with three cards above 1100px, two at 651–1100px, and one at 650px or below.
2. WHEN a carousel control or keyboard command is used, THE SYSTEM SHALL update bounded position, preserve focus and support native touch/trackpad scrolling without a visible range count.
3. WHEN an experience is selected, THE SYSTEM SHALL show its complete content in one linked tabpanel with desktop vertical selectors and horizontal selectors at 900px or below.
4. WHEN honors are viewed, THE SYSTEM SHALL show Amazon first and more prominent with all three cards visible, qualified recipient counts and no redundant scholarship label beneath amounts.

## Acceptance Criteria

Arrow/dot controls, Home/End and keyboard focus work with fixtures of 0/1/4/8 projects; no negative ranges or missing-card access, empty state has no controls. Left/right keys do not trigger prototype shortcuts. Six roles support Up/Down on desktop, Left/Right on compact screens, wrapping and Home/End; rapid changes never create multiple panels. Left selectors omit dates, panel retains dates; all AWS bullets match resume. Desktop columns stretch to equal height; mobile wraps without clipping.

## Design (required if non-trivial)

Native overflow + CSS scroll-snap; bounded controls derive from measured card width/gap and actual visible count, with ResizeObserver and coalesced scroll events. Slides have semantic articles and accessible name/position; offscreen anchors remain keyboard reachable and scroll into view. Experience uses role=tablist/tab/tabpanel, stable linked IDs, roving tabindex, aria-selected and local selected state; controls respond immediately while the panel animates. Do not nest links in buttons. Honors use responsive 1.35/1/1 desktop grid, featured span on tablet, stacked phone cards and restrained emphasis.

## Current State

[verified] Prototype uses native carousel, six role tabs and three honors. [unverified] Empty/single/many fixtures, screen-reader flow and physical touch need production tests; current scratch checks are not regression coverage.

## Tests

carouselBoundsWithZeroOneAndManyProjects (R1/R2); nativeSwipeAndKeyboardRevealProjects (R2); selectedRoleHasOnePanelAndLinkedIds (R3); tabsAdaptKeyboardOrientationAtBreakpoint (R3); honorsRemainVisibleAndOrdered (R4).

## Constraints

- Dependencies: 00-foundation-and-content.md, 01-design-and-navigation.md. Preserve links and resume copy.
- Backward compatibility: retained hashes, public asset URLs and valid saved preferences are checked explicitly; the requested visual/form replacement is an intentional behavior change.
