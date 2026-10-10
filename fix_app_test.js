import { readFileSync, writeFileSync } from 'fs';

let appTest = readFileSync('src/App.test.jsx', 'utf8');
appTest = appTest.replace('vi.mock("./components/canvas", () => {', 'vi.mock("./components/canvas/DotGrid.jsx", () => ({ default: () => <div data-testid="dot-grid" /> }));\n\nvi.mock("./components/canvas", () => {');
writeFileSync('src/App.test.jsx', appTest);
