import { readFileSync, writeFileSync } from 'fs';

let works = readFileSync('src/components/Works.jsx', 'utf8');
works = works.replace(
  'const element = rail.current;\n    let frame = 0;',
  'const element = rail.current;\n    if (!element) return;\n    let frame = 0;'
);
writeFileSync('src/components/Works.jsx', works);
