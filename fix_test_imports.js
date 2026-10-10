import { readFileSync, writeFileSync } from 'fs';

let worksTest = readFileSync('src/components/Works.regression.test.jsx', 'utf8');
worksTest = worksTest.replace('import * as content from "../content/portfolio.js";\n', '');
worksTest = worksTest.replace('vi.mock("../content/portfolio.js", async (importOriginal) => {\n  const actual = await importOriginal();\n  return {\n    ...actual,\n  };\n});', `
let mockProjects = [];
vi.mock("../content/portfolio.js", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    get projects() { return mockProjects; }
  };
});
`);
worksTest = worksTest.replace('content.projects = [];', 'mockProjects = [];');
worksTest = worksTest.replace(/content\.projects = Array\.from/g, 'mockProjects = Array.from');
writeFileSync('src/components/Works.regression.test.jsx', worksTest);

let expTest = readFileSync('src/components/Experience.regression.test.jsx', 'utf8');
expTest = expTest.replace('import { render, screen, fireEvent }', 'import { render, screen }');
expTest = expTest.replace('import * as content from "../content/portfolio.js";\n', '');
expTest = expTest.replace('vi.mock("../content/portfolio.js", async (importOriginal) => {\n  const actual = await importOriginal();\n  return {\n    ...actual,\n  };\n});', `
let mockExperiences = [];
vi.mock("../content/portfolio.js", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    get experiences() { return mockExperiences; }
  };
});
`);
expTest = expTest.replace('content.experiences = [];', 'mockExperiences = [];');
expTest = expTest.replace(/content\.experiences = Array\.from/g, 'mockExperiences = Array.from');
writeFileSync('src/components/Experience.regression.test.jsx', expTest);

let exp = readFileSync('src/components/Experience.jsx', 'utf8');
exp = 'import PropTypes from "prop-types";\n' + exp + '\nExperience.propTypes = { reduced: PropTypes.bool };\n';
writeFileSync('src/components/Experience.jsx', exp);

let worksT = readFileSync('src/components/Works.test.jsx', 'utf8');
worksT = worksT.replace('import { describe, expect, it, vi } from "vitest";', 'import { describe, expect, it } from "vitest";');
writeFileSync('src/components/Works.test.jsx', worksT);
