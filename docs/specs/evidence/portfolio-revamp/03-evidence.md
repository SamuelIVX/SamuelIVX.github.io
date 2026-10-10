# Phase 03: Persistent Theme and Motion

## Verification Checks

| Check | Status | Evidence |
|-------|--------|----------|
| Persistent Theme | ✅ | Implemented early `data-theme` application in `index.html` preventing FOUC. Integrated `localStorage` and `theme-color` sync. |
| Button-Origin Wipe | ✅ | Ported the `startViewTransition` clip-path logic to `<Navbar />` theme toggle. Fallback implemented for browsers without `startViewTransition`. |
| Reduced Motion | ✅ | Extracted `useReducedMotion` custom hook leveraging `useSyncExternalStore`. Passed `reduced` state correctly and respected `prefers-reduced-motion` at runtime. |
| DotGrid Migration | ✅ | Ported `DotGrid` safely; mocked correctly in `jsdom` to avoid WebGL crash. Retained THIRD-PARTY-NOTICES.md in root. Removed obsolete canvas elements (`GradientBackground`, `StarsCanvas`, etc.). |
| Lint/Build/Format | ✅ | `npm run lint` and `npm run build` succeed on Node 24. Added `PropTypes` mapping for complex interactive DotGrid settings. Handled reactive cleanup safely. |

## Implementation Notes
- Ensured third party WebGL component `DotGrid` has correct PropTypes. 
- Integrated global theme state into `<App />` and passed to `<Navbar />`.
- Cleaned up unused legacy canvas elements inside `App.jsx`.
