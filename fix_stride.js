import { readFileSync, writeFileSync } from 'fs';

let works = readFileSync('src/components/Works.jsx', 'utf8');
works = works.replace(
  'const stride = cards[0].getBoundingClientRect().width + gap;',
  'const stride = (cards[0].getBoundingClientRect().width || 300) + gap;'
);
works = works.replace(
  'element.scrollTo({ left, behavior: matchMedia(\'(prefers-reduced-motion: reduce)\').matches ? \'instant\' : \'smooth\' });',
  'element.scrollTo?.({ left, behavior: matchMedia(\'(prefers-reduced-motion: reduce)\').matches ? \'instant\' : \'smooth\' });'
);
writeFileSync('src/components/Works.jsx', works);
