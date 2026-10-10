const fs = require('fs');
let code = fs.readFileSync('src/components/canvas/DotGrid.jsx', 'utf8');

code = code.replace(
  /const compile = \(gl, type, source\) => \{[\s\S]*?return shader;\n\};/,
  `const compile = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};`
);

code = code.replace(
  /const program = gl\.createProgram\(\);\s*gl\.attachShader\(program, compile\(gl, gl\.VERTEX_SHADER, VERTEX\)\);\s*gl\.attachShader\(program, compile\(gl, gl\.FRAGMENT_SHADER, FRAGMENT\)\);\s*gl\.linkProgram\(program\);\s*if \(\!gl\.getProgramParameter\(program, gl\.LINK_STATUS\)\) return;/,
  `const program = gl.createProgram();
    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fsShader = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    if (!vs || !fsShader) {
      if (vs) gl.deleteShader(vs);
      if (fsShader) gl.deleteShader(fsShader);
      gl.deleteProgram(program);
      return;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fsShader);
    gl.linkProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fsShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }`
);

fs.writeFileSync('src/components/canvas/DotGrid.jsx', code, 'utf8');
console.log('Fixed WebGL shaders');
