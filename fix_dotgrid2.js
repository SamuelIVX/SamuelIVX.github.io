import { readFileSync, writeFileSync } from 'fs';

let dot = readFileSync('src/components/canvas/DotGrid.jsx', 'utf8');

dot = dot.replace('useEffect(() => {\n    settingsRef.current = settings;\n  }, [settings]);', 'useEffect(() => {\n    settingsRef.current = settings;\n  });');

dot = dot.replace(
  'stretch: PropTypes.number,',
  'stretch: PropTypes.number,\n  strength: PropTypes.number,\n  bounce: PropTypes.number,\n  returnDuration: PropTypes.number,\n  shockRadius: PropTypes.number,\n  shockStrength: PropTypes.number,'
);

writeFileSync('src/components/canvas/DotGrid.jsx', dot);
