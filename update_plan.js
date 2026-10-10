import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('docs/specs/active/portfolio-revamp/IMPLEMENTATION-PLAN.md', 'utf8');
content = content.replace(
  '- [ ] **03: Port persistent theme and motion.**',
  '- [x] **03: Port persistent theme and motion.**'
);
writeFileSync('docs/specs/active/portfolio-revamp/IMPLEMENTATION-PLAN.md', content);
