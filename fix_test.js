import { readFileSync, writeFileSync } from 'fs';

let test = readFileSync('src/components/Works.regression.test.jsx', 'utf8');
test = test.replace(
  'expect(screen.getByRole("region", { name: /Projects/i })).toBeInTheDocument();',
  'expect(screen.queryByRole("region", { name: /Projects/i })).not.toBeInTheDocument();'
);
writeFileSync('src/components/Works.regression.test.jsx', test);
