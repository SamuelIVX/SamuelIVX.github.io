// Share the live browser preference; the reused Motion hook did not update during this demo's check.
import { useSyncExternalStore } from 'react';
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const subscribe = callback => {
  preference.addEventListener('change', callback);
  return () => preference.removeEventListener('change', callback);
};
/** Return the current preference, including changes while the page is open. */
export default function useReducedMotion() {
  return useSyncExternalStore(subscribe, () => preference.matches);
}
