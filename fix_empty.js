import { readFileSync, writeFileSync } from 'fs';

let works = readFileSync('src/components/Works.jsx', 'utf8');
works = works.replace(
  '<div className="project-carousel" data-project-carousel role="region" aria-roledescription="carousel" aria-label="Projects" onKeyDown={onKeyDown} data-reveal>',
  '{projects.length > 0 && (\n      <div className="project-carousel" data-project-carousel role="region" aria-roledescription="carousel" aria-label="Projects" onKeyDown={onKeyDown} data-reveal>'
);
works = works.replace(
  '        </div>\n      </div>\n    </section>',
  '        </div>\n      </div>\n      )}\n    </section>'
);
writeFileSync('src/components/Works.jsx', works);

let exp = readFileSync('src/components/Experience.jsx', 'utf8');
exp = exp.replace(
  '<div className="experience-browser" data-reveal>',
  '{experiences.length > 0 && (\n      <div className="experience-browser" data-reveal>'
);
exp = exp.replace(
  '        </motion.div>\n      </div>\n    </section>',
  '        </motion.div>\n      </div>\n      )}\n    </section>'
);
writeFileSync('src/components/Experience.jsx', exp);
