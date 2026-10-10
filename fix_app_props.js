import { readFileSync, writeFileSync } from 'fs';

let app = readFileSync('src/App.jsx', 'utf8');
app = app.replace('<Works reduced={reduced} />', '<Works />');
app = app.replace('<Honors reduced={reduced} />', '<Honors />');
writeFileSync('src/App.jsx', app);
