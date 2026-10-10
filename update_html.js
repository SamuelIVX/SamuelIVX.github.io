import { readFileSync, writeFileSync } from 'fs';

let html = readFileSync('index.html', 'utf8');
html = html.replace('<html lang="en">', '<html lang="en" data-theme="dark">');
const script = `
    <meta name="theme-color" content="#131A23" />
    <script>
      // Apply the saved palette before paint; storage may be unavailable in private browsers.
      try {
        const theme = localStorage.getItem('portfolio-theme');
        if (theme === 'light' || theme === 'dark') {
          document.documentElement.dataset.theme = theme;
          document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#F7F8FA' : '#131A23';
        }
      } catch {}
    </script>`;
html = html.replace('<title>', script + '\n    <title>');
writeFileSync('index.html', html);
