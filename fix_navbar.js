import { readFileSync, writeFileSync } from 'fs';

let navbar = readFileSync('src/components/Navbar.jsx', 'utf8');
navbar = navbar.replace(
  'export default function Navbar() {',
  'import PropTypes from "prop-types";\n\nexport default function Navbar({ theme, switchTheme }) {'
);
navbar = navbar.replace(
  '<button className="icon-button theme-toggle" aria-label="Switch theme" title="Switch theme"><Icon name="moon" /></button>',
  '<button className="icon-button theme-toggle" onClick={switchTheme} aria-label={`Switch to ${theme === \'light\' ? \'dark\' : \'light\'} theme`} title="Switch theme"><Icon name={theme === \'light\' ? \'moon\' : \'sun\'} /></button>'
);
navbar += '\nNavbar.propTypes = {\n  theme: PropTypes.string,\n  switchTheme: PropTypes.func\n};\n';
writeFileSync('src/components/Navbar.jsx', navbar);
