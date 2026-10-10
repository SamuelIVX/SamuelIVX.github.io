# Portfolio implementation plan and skill register

This is the execution checklist, not completed implementation. Source currently remains the old live portfolio. The
current prototype archive establishes approved appearance/content. Do not deploy or overwrite the live site as part of
creating this plan.

## Skills available and when to use them

All skills below are already installed under ~/.agents/skills; downloading duplicate “frontend/security packs” adds no
capability. Paths are local execution pointers; their names/roles remain portable. First use must read the corresponding
SKILL.md and relevant references, rather than treating this table as a replacement for instructions.

| Skill | Phase | Responsibility |
| --- | --- | --- |
| [ponytail](/Users/samuelhernandez/.agents/skills/ponytail/SKILL.md) | Every phase | Smallest coherent change; avoid speculative dependencies, tests at behavioral seams. |
| [frontend-design](/Users/samuelhernandez/.agents/skills/frontend-design/SKILL.md) | 01,02,03 | Preserve approved B hierarchy, color tokens, restraint and alignment. |
| [vercel-react-best-practices](/Users/samuelhernandez/.agents/skills/vercel-react-best-practices/SKILL.md) | 00–04 | React client rendering, imports, local state and lazy decorative loading; apply only rules relevant to this Vite SPA. |
| [codebase-design](/Users/samuelhernandez/.agents/skills/codebase-design/SKILL.md) | 00 | Small public interfaces, one owner per behavior; no speculative abstractions. |
| [refactor](/Users/samuelhernandez/.agents/skills/refactor/SKILL.md) | 00 and extraction passes | Characterize preserved behavior and extract incrementally; distinguish intentional redesign from behavior-preserving cleanup. |
| [performance](/Users/samuelhernandez/.agents/skills/performance/SKILL.md) | 04 | Measure loading, assets, runtime and GPU cost before/after; enforce proposed budgets. |
| [owasp-security](/Users/samuelhernandez/.agents/skills/owasp-security/SKILL.md) | 05 | Review actual static-site inputs/sinks, CSP, exposed values and safe external navigation. |
| [dependency-scanning](/Users/samuelhernandez/.agents/skills/dependency-scanning/SKILL.md) | 00 triage; 05 | Audit installed/locked dependencies and copied-source licenses; report reachability and dispositions, no blind force remediation. |
| [web-design-guidelines](/Users/samuelhernandez/.agents/skills/web-design-guidelines/SKILL.md) | 01;06 | Fetch current guidelines; verify semantic HTML, keyboard, contrast, readable responsive layouts. |
| [webapp-testing](/Users/samuelhernandez/.agents/skills/webapp-testing/SKILL.md) | 02–06 | Run real browser controls, screenshots, motion/fallback and release smoke checks. |
| [doc-coauthoring](/Users/samuelhernandez/.agents/skills/doc-coauthoring/SKILL.md) | Spec updates and handoff | Keep contracts, reader assumptions and evidence consistent with final implementation. |
| [ponytail-review](/Users/samuelhernandez/.agents/skills/ponytail-review/SKILL.md) | Each implementation slice | Local connected-code correctness and scope review; does not replace required CodeRabbit. |
| [code-review](/Users/samuelhernandez/.agents/skills/code-review/SKILL.md) | Spec update; substantial/security slices; final integrated gate | Run actual CodeRabbit within the selective gate; retain analyzed completion output and fix material findings. |

Conditional skills already installed: tdd for an explicitly chosen test-first loop (confirm test seams before writing
tests); diagnosing-bugs for reproducible failures/performance regressions; threat-modeling if the static threat surface
changes materially; receiving-code-review for incoming actionable feedback. Do not activate backend/database/auth,
shadcn, Figma, Vercel hosting, migration, agent-building or secrets-vault workflows for a static mailto portfolio
without a matching task. No new skill install was necessary.

## Phase checklist

- [x] **00: Establish baseline and content.** Use supported Node matching CI, clean npm ci, record npm ls actual
      versions, baseline lint/test/build. Triage six reported high-severity install advisories with npm audit output,
      reachability and versions. Verify archived content/resume and authority, generate single production content
      module. Apply ponytail/codebase-design/React/dependency guidance. Do not guess runtime versions from the
      prototype.
- [x] **01: Port the approved shell/design.** Replace the old hero/navigation/about/contact/footer with B, retaining
      native hash links and fluid layout. Tests cover viewport, left alignment, nav/menu and footer text. Apply
      frontend-design/React/web-design-guidelines. The diagrammed spacing-reduction/ASCII ideas were suggestions, not
      approved additions.
- [ ] **02: Port content browsing.** Build carousel and experience tabs with named keyboard/focus/empty/many regression
      cases; show all honors. Keep complete resume copy and immediate tab state. Apply
      frontend-design/React/webapp-testing. Replace old contact-form-specific tests only with explicit
      mailto/removed-network contract tests; preserve unrelated coverage.
- [ ] **03: Port persistent theme and motion.** One theme owner and before-paint startup path, button-origin wipe, live
      reduced motion and stable lifecycle. Isolate upstream DotGrid, retain notices, audit local patches and failure
      cleanup. Apply React/frontend/OWASP/browser guidance. Match all linked dense settings and recognize idle
      settlement.
- [ ] **04: Optimize and measure.** Defer background, self-host licensed font, optimize images, remove obsolete tutorial
      assets/imports/dependencies after ownership checks. Add deterministic gzip budget checks and
      Lighthouse/interaction evidence. Apply performance/React/refactor guidance. Compare approved screenshots after
      each coherent extraction/optimization; changes must pass tests before further work.
- [ ] **05: Harden actual surfaces.** Enforce tested CSP with appropriate GitHub Pages limits, remove unused EmailJS
      configuration/network surface, retain explicit fixed URLs and only theme storage. Audit lockfile/advisories/copied
      licenses, observe production-preview network, run security checks. Apply OWASP/dependency/code-review; no
      hypothetical auth/database controls.
- [ ] **06: Integrate and release.** Full lint/unit/build/browser/axe/performance/security gate under recorded
      Node/tools; real device/VoiceOver/zoom pass. Require analyzed CodeRabbit completion, not ordinary review. Ensure
      deploy depends on required checks and uses their exact artifact. Keep generic workflow contracts. Prepare PR and
      previous-artifact rollback evidence, then deploy only when authorized and all gates pass; HTTP200 +
      version/assets/behavior smoke afterward.

## Ownership and evidence

Each spec owns its listed files/behavior; integration changes may modify shared App/styles with earlier contracts
preserved. One module owns content, one theme owner coordinates storage/root/meta, one experience module owns
selection/ARIA, one carousel owns positions, and DotGrid owns its renderer lifecycle. Shared workflow edits require
compatibility review because this repo also carries Sam’s reusable template.

Store implementation results under docs/specs/evidence/portfolio-revamp with commit/tool/environment identifiers,
command outputs or artifact links, screenshot viewport/theme/motion labels, performance raw runs and security
dispositions. Never use an unrun proposed command as pass evidence. The durable reference archive is not a build input
or public site asset.

A release evidence table must map each spec R1–R4 to named tests/measurements, artifact location, and
pass/fail/unverified. Release is blocked by failed required tests, untriaged reachable high/critical vulnerabilities,
broken keyboard/fallback flows, unmet budgets without an approved spec change, or missing deployment verification.
Ordinary checks cannot stand in for required CodeRabbit evidence.

## Commands and review cadence

Existing commands: npm ci, npm run lint, npm run test, npm run build, npm run dev, npm run preview. Existing repo is
JSX; separate typecheck is not configured. Add/document test:e2e and resource/performance checks during their owning
phases, without claiming those scripts already exist. Do not install a new typechecker or framework merely to populate a
checklist.

Run scoped tests per behavioral slice, full integrated checks after merges/material fixes. Use local ponytail-review as
appropriate and CodeRabbit only at the existing selective gate (spec updates, substantial core/security edits,
integrated major release). No commits/pushes/PR publication are performed by this planning task. Proposed commit: docs:
specify approved portfolio revamp; body describes contracts, skill register, durable reference and unimplemented quality
gates, with Co-authored-by: Codex <noreply@openai.com>.
