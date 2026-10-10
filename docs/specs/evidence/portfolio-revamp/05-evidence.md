# Phase 05 Evidence: Harden Surfaces

## Content Security Policy (CSP)
Added a strict CSP to `index.html`:
`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self';" />`
- Blocks all external script execution and network requests.
- Only allows resources originating from `'self'` and `data:` URIs for images.
- Unused EmailJS dependency (`@emailjs/browser`) was uninstalled, completely removing its network surface.

## Dependency Security Audit
Ran `npm audit`. Found 6 high-severity vulnerabilities.

**Reachability & Disposition:**
- **`brace-expansion` (High, ReDoS/DoS)**: Pulled in via `eslint-plugin-react` -> `minimatch`.
- **`braces` (High, Stack-exhaustion DoS)**: Pulled in via `gh-pages` -> `globby` -> `fast-glob` -> `micromatch`.
- **Disposition**: **Unreachable**. Both packages are `devDependencies` used exclusively during local linting and the GitHub Pages deployment process. They process repository file paths. Since the inputs are controlled developer files, there is no vector for an external attacker to supply malicious regex/glob patterns to exhaust the build environment CPU. No blind force remediation applied as this could break the build tooling for zero actual security gain.

## Copied Source Licenses
- `@fontsource/manrope`: Open Font License (OFL).
- All remaining components are original MIT/proprietary work for this portfolio.

Next up: Phase 06 (Final Integration & Review).
