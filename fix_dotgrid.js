import { readFileSync, writeFileSync } from 'fs';

let dot = readFileSync('src/components/canvas/DotGrid.jsx', 'utf8');

// Fix refs during render
dot = dot.replace(
  'const settingsRef = useRef(settings);\n  settingsRef.current = settings;',
  'const settingsRef = useRef(settings);\n  useEffect(() => {\n    settingsRef.current = settings;\n  }, [settings]);'
);

// Add PropTypes
const pt = `
import PropTypes from 'prop-types';

DotGrid.propTypes = {
  baseColor: PropTypes.string,
  activeColor: PropTypes.string,
  dotSize: PropTypes.number,
  gap: PropTypes.number,
  proximity: PropTypes.number,
  tension: PropTypes.number,
  swell: PropTypes.number,
  stretch: PropTypes.number,
  glow: PropTypes.number,
  shape: PropTypes.oneOf(['circle', 'square']),
  fade: PropTypes.number,
  opacity: PropTypes.number,
  intro: PropTypes.bool,
  mouseInteraction: PropTypes.bool,
  clickShock: PropTypes.bool,
  paused: PropTypes.bool,
  dpr: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object
};
`;

dot = dot + pt;
writeFileSync('src/components/canvas/DotGrid.jsx', dot);
