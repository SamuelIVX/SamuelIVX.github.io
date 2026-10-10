const fs = require('fs');
let code = fs.readFileSync('src/components/canvas/DotGrid.jsx', 'utf8');

code = code.replace(
  /window\.addEventListener\('blur', onLeave\);/,
  `window.addEventListener('blur', onLeave);

    const onContextLost = event => {
      event.preventDefault();
      cancelAnimationFrame(raf);
      raf = 0;
      visible = false;
    };
    canvas.addEventListener('webglcontextlost', onContextLost, false);`
);

code = code.replace(
  /window\.removeEventListener\('blur', onLeave\);/,
  `window.removeEventListener('blur', onLeave);
      canvas.removeEventListener('webglcontextlost', onContextLost, false);`
);

fs.writeFileSync('src/components/canvas/DotGrid.jsx', code, 'utf8');
console.log('Added context lost handler');
