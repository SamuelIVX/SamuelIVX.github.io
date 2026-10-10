# Spec: Static-site security and supply-chain controls

## Objective

Reduce the real attack surface of a public static portfolio while documenting the limits of GitHub Pages hosting.

## Scope

- Package: SamuelIVX/SamuelIVX.github.io / portfolio revamp.
- Modifies: index.html/bootstrap, CSP/meta, external links, dependency/license inventory, removal of obsolete EmailJS surface; security tests.
- Off-limits: Repository permissions, credential rotation, unrelated repos and shared workflow redesign without a concrete need.

## Non-Goals

Auth/database controls for nonexistent services, payment systems, WAF provisioning or claims of complete security.

## Invariants

No secrets or visitors' personal data enter client code, storage, logs or a submission service. Website remains static.

## Requirements

1. WHEN the approved contact UI ships, THE SYSTEM SHALL use mailto and remove unused EmailJS code/config/dependency after confirming no remaining callers.
2. WHEN the browser loads the portfolio, THE SYSTEM SHALL enforce the narrowest tested CSP compatible with self-hosted assets and approved animation behavior.
3. WHEN any external destination or local preference is used, THE SYSTEM SHALL rely on fixed HTTPS/mailto URLs, React text escaping and validated theme values.
4. WHEN dependencies or copied components enter the build, THE SYSTEM SHALL retain provenance/license notices and triage scan findings using actual installed versions and reachability.

## Acceptance Criteria

No credentials in tracked files or built assets; gitleaks and dependency/security jobs are green. Network observation shows only same-origin site assets until deliberate external navigation/mailto. CSP script-src does not contain unsafe-inline/unsafe-eval; theme bootstrap and all tested actions function without console CSP errors. Relevant high/critical reachable findings are fixed or explicitly dispositioned with evidence before release; do not equate severity count with exploitability. DotGrid/Manrope notices retained; package lock reproduces build.

## Design (required if non-trivial)

Threat surface: public document/assets, untrusted browser storage/query strings, copied code/dependencies and CI artifact deployment. No authentication/session/database exists. Render biography as React text; no raw HTML sink. Strip prototype variant query behavior/keyboard shortcuts and never import URL-driven modules. External target-blank links use noopener noreferrer. Browser storage holds only theme. Do not collect analytics, form contents or identifiers.

CSP baseline to validate: default-src self; script-src self; style-src-elem self; style-src-attr unsafe-inline only if Motion/position styles require it; img-src self data:; font-src self; connect-src self; object-src none; base-uri self; form-action none. Place CSP early in head before governed resources. Generated hashes are an alternative for exact bootstrap bytes. Test CSSOM theme variables, Motion style mutation and WebGL shader rendering; do not widen script policy to silence failures. Upstream style handling may require a narrowly justified style policy adjustment.

GitHub Pages controls response headers; do not promise custom HSTS, Cache-Control or HTTP-header-only frame-ancestors via HTML meta. A meta CSP cannot enforce frame-ancestors or report-only mode. Inspect actual deployed headers, record limitations; an alternate hosting/CDN layer would need a separate explicit decision. Add referrer policy via supported meta if required. HTTPS and mixed-content checks required.

Audit from lockfile with npm audit --json plus existing Dependency Review/SBOM/CodeQL/gitleaks; distinguish dev vs shipped reachability and copy-source vulnerabilities. No automatic force upgrades or disabled security checks. Remove Three/Fiber/Drei/maath/EmailJS only after import/config/public asset ownership checks and passing replacement tests. Keep maintainable license attribution for DotGrid; React Bits Commons Clause restricts reselling components, not normal portfolio use.

## Current State

[verified] Current manifest includes EmailJS/Three ecosystem, existing CI has security workflows and the new prototype has no contact form. [verified] Clean install reported six high-severity advisories; no vulnerability triage performed in this spec-writing task. [unverified] Exact generated CSP compatibility and actual Pages headers need implementation/deployment checks.

## Tests

noSecretOrObsoleteServiceInBuiltAssets (R1/R4); cspAllowsApprovedFlowsAndBlocksUntrustedScript (R2); invalidThemeAndQueryNeverBecomeCode (R3); fixedExternalLinksHaveSafeRel (R3); dependencyFindingsHaveDispositionAndLicenses (R4).

## Constraints

- Dependencies: 00 through 04; refer to 06 for CI permissions/deployment. Sources: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy and https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages.
- Backward compatibility: retained hashes, public asset URLs and valid saved preferences are checked explicitly; the requested visual/form replacement is an intentional behavior change.
