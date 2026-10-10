import { readFileSync, writeFileSync } from 'fs';

let hero = readFileSync('src/components/Hero.jsx', 'utf8');
hero = hero.replace('export default function Hero() {', 'import PropTypes from "prop-types";\n\nexport default function Hero({ reduced }) {');
hero = hero.replace(
  'initial={{ opacity: 0.2, y: 12, filter: \'blur(3px)\' }} animate={{ opacity: 1, y: 0, filter: \'blur(0px)\' }} transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}',
  'initial={reduced ? false : { opacity: 0.2, y: 12, filter: \'blur(3px)\' }} animate={{ opacity: 1, y: 0, filter: \'blur(0px)\' }} transition={{ duration: reduced ? 0 : 2.6, ease: [0.22, 1, 0.36, 1] }}'
);
hero += '\nHero.propTypes = { reduced: PropTypes.bool };\n';
writeFileSync('src/components/Hero.jsx', hero);
