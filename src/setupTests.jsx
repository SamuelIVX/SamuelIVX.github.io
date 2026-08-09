// Shared Vitest setup for DOM matchers, accessibility assertions, and browser API shims.
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import { afterEach, expect, vi } from "vitest";

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});

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
