import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('src/App.jsx', 'utf8');
content = content.replace(
  "import { useState, useRef, useEffect } from 'react';",
  "import { useState, useRef, useEffect, lazy, Suspense } from 'react';"
);
content = content.replace(
  "import DotGrid from './components/canvas/DotGrid.jsx';",
  "const DotGrid = lazy(() => import('./components/canvas/DotGrid.jsx'));"
);
content = content.replace(
  /<DotGrid\s+dotSize=\{3\}.*?\/>/s,
  `<Suspense fallback={null}>
          $&
        </Suspense>`
);
writeFileSync('src/App.jsx', content);
