import { readFileSync, writeFileSync } from 'fs';

// Fix Experience.jsx
let exp = readFileSync('src/components/Experience.jsx', 'utf8');
exp = exp.replace('<motion.article className="experience-panel" role="tabpanel"', '<motion.div className="experience-panel" role="tabpanel"');
exp = exp.replace('</motion.article>', '</motion.div>');
writeFileSync('src/components/Experience.jsx', exp);

// Fix Works.jsx
let works = readFileSync('src/components/Works.jsx', 'utf8');
works = works.replace('<div className="project-positions" aria-label="Project position">', '<div className="project-positions" role="group" aria-label="Project position">');
writeFileSync('src/components/Works.jsx', works);
