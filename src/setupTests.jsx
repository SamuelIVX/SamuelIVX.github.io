/**
 * Shared Vitest setup: jest-dom matchers, jest-axe, Testing Library cleanup,
 * and an IntersectionObserver shim for Framer Motion / vertical timeline.
 */
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import { afterEach, expect, vi } from "vitest";

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});

/**
 * Minimal IntersectionObserver that immediately reports intersecting so
 * motion/timeline components mount without a real browser observer.
 * @param {IntersectionObserverCallback} callback - Observer callback.
 * @example
 * // Assigned to globalThis.IntersectionObserver for Vitest
 */
class TestIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe = (element) => {
    this.callback([{ isIntersecting: true, target: element }], this);
  };

  unobserve = vi.fn();

  disconnect = vi.fn();

  takeRecords = () => [];
}

globalThis.IntersectionObserver = TestIntersectionObserver;
