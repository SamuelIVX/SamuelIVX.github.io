import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('src/App.test.jsx', 'utf8');
content = content.replace('import userEvent from "@testing-library/user-event";\n', '');
writeFileSync('src/App.test.jsx', content);

let about = readFileSync('src/components/About.jsx', 'utf8');
about = about.replace(/I'm/g, "I&apos;m");
writeFileSync('src/components/About.jsx', about);

let contact = readFileSync('src/components/Contact.jsx', 'utf8');
contact = contact.replace(/Let's/g, "Let&apos;s").replace(/I'd/g, "I&apos;d");
writeFileSync('src/components/Contact.jsx', contact);

let hero = readFileSync('src/components/Hero.jsx', 'utf8');
hero = hero.replace(/I'm/g, "I&apos;m");
writeFileSync('src/components/Hero.jsx', hero);

let navbar = readFileSync('src/components/Navbar.jsx', 'utf8');
navbar = navbar.replace('  const sections = ', '  // eslint-disable-next-line react-hooks/exhaustive-deps\n  const sections = ');
writeFileSync('src/components/Navbar.jsx', navbar);

const propTypesExternal = `
External.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};
`;

let external = readFileSync('src/components/ui/External.jsx', 'utf8');
external = 'import PropTypes from "prop-types";\n' + external + propTypesExternal;
writeFileSync('src/components/ui/External.jsx', external);

const propTypesHighlight = `
import PropTypes from "prop-types";
Highlight.propTypes = {
  text: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};
`;
let highlight = readFileSync('src/components/ui/Highlight.jsx', 'utf8');
highlight = highlight + propTypesHighlight;
writeFileSync('src/components/ui/Highlight.jsx', highlight);

const propTypesIcon = `
import PropTypes from "prop-types";
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
`;
let icon = readFileSync('src/components/ui/Icon.jsx', 'utf8');
icon = icon + propTypesIcon;
writeFileSync('src/components/ui/Icon.jsx', icon);

