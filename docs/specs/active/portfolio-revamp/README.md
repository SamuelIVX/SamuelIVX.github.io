# Portfolio revamp spec set

Status: specified for implementation; production port, measurements and release are pending. The user approved the local B prototype as the visual direction. This task creates local specifications and reviewable planning artifacts; it does not authorize deploying the port.

Audience: Sam and the implementer/reviewer. Goal: a distinctive, readable static engineering portfolio with compact content browsing, subtle interaction, measured performance and a small security surface. “Most optimized/secure” is interpreted as measurable release gates rather than an absolute claim.

## Implementation order

- [00-foundation-and-content](00-foundation-and-content.md)
- [01-design-and-navigation](01-design-and-navigation.md)
- [02-projects-experience-and-honors](02-projects-experience-and-honors.md)
- [03-theme-motion-and-dot-grid](03-theme-motion-and-dot-grid.md)
- [04-performance-and-discoverability](04-performance-and-discoverability.md)
- [05-security-and-supply-chain](05-security-and-supply-chain.md)
- [06-verification-and-release](06-verification-and-release.md)

The specs form a dependency chain 00 → 01 → 02 → 03 → 04 → 05 → 06. Each file follows the existing Objective/Scope/Non-Goals/Invariants/Requirements/Acceptance Criteria/Design/Current State/Tests/Constraints convention. Requirement R1 means numbered requirement 1 in that file, not a global ID.

[Implementation plan and skills](IMPLEMENTATION-PLAN.md) records exact phase order, file ownership, installed skill pointers and release evidence. [Approved prototype archive](../../reference/portfolio-revamp/README.md) is the durable reference. Earlier scratch screenshots and build results are prototype evidence only. Spec assertions tagged verified were checked against source or the approved reference; proposed budgets and unverified acceptance checks are not completion claims.

## Decisions and limits

Retain React/Vite/JavaScript and GitHub Pages; avoid an unnecessary framework rewrite, backend, CMS or visitor tracking. Contact is mailto. One static content module owns four projects, six experiences and three awards. Dark is first-visit default; saved light/dark preference persists. DotGrid is interactive and rests when idle; PatternWaves and alternative layout studies do not ship. Release targets are WCAG AA, documented lab performance budgets, dependency triage, a tested static CSP and verified artifact deployment. GitHub Pages response-header limitations remain explicit.

No unresolved design choice blocks writing the specs. Implementation must resolve runtime tool versions/advisories, actual CSP/browser compatibility and lab/device performance against the defined gates. A visible change to the approved design needs Sam’s agreement; fixing code to meet the stated existing behavior does not.
