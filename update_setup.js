import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('src/setupTests.jsx', 'utf8');

const shims = `
// ResizeObserver shim
globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// matchMedia shim
globalThis.matchMedia = globalThis.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
    addEventListener: function() {},
    removeEventListener: function() {},
    dispatchEvent: function() { return false; },
  };
};
`;

if (!content.includes('ResizeObserver')) {
  content += shims;
}
writeFileSync('src/setupTests.jsx', content);
