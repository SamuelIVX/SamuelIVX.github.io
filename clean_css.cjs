const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const toRemoveRegexes = [
  /\.prototype-switcher\{[^}]*\}/g,
  /\.prototype-switcher[^\{]*\{[^}]*\}/g,
  /\.variant-C\s*\{[^}]*\}/g,
  /\.variant-C\s+\.[^\{]+\{[^}]*\}/g,
  /\.replay\{[^}]*\}/g,
  /\.replay[^\{]*\{[^}]*\}/g,
  /\.hero-bottom\{[^}]*\}/g,
  /\.opening\{[^}]*\}/g,
  /\.project-entry[^\{]*\{[^}]*\}/g,
  /\.other-work[^\{]*\{[^}]*\}/g,
  /\.roles\{[^}]*\}/g,
  /\.role-heading\{[^}]*\}/g,
  /\.role-heading>span\{[^}]*\}/g,
  /\.role\sh3\{[^}]*\}/g,
  /\.role-outcome\{[^}]*\}/g
];

toRemoveRegexes.forEach(regex => {
  css = css.replace(regex, '');
});

fs.writeFileSync('src/index.css', css, 'utf8');
console.log('Done cleaning index.css');
