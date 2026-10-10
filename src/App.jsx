import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { flushSync } from 'react-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Footer,
  Honors
} from "./components";
import useReducedMotion from './hooks/useReducedMotion.js';
const DotGrid = lazy(() => import('./components/canvas/DotGrid.jsx'));

const App = () => {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  const reduced = Boolean(useReducedMotion());
  const transition = useRef(null);
  const fallbackTimer = useRef(null);

  useEffect(() => () => clearTimeout(fallbackTimer.current), []);

  function switchTheme(event) {
    if (transition.current) return;
    const next = theme === 'light' ? 'dark' : 'light';
    const update = () => {
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('portfolio-theme', next); } catch { /* Ignore storage errors */ }
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.content = next === 'light' ? '#F7F8FA' : '#131A23';
      flushSync(() => setTheme(next));
    };
    
    if (reduced) { 
      update(); 
      return; 
    }
    
    if (!document.startViewTransition) {
      clearTimeout(fallbackTimer.current);
      document.documentElement.classList.add('theme-fallback');
      update();
      fallbackTimer.current = setTimeout(() => document.documentElement.classList.remove('theme-fallback'), 1600);
      return;
    }
    
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.ceil(Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)));
    
    const root = document.documentElement;
    root.style.setProperty('--wipe-x', `${x}px`);
    root.style.setProperty('--wipe-y', `${y}px`);
    root.style.setProperty('--wipe-radius', `${radius}px`);
    
    transition.current = document.startViewTransition(update);
    transition.current.finished.catch(() => {}).finally(() => { transition.current = null; });
  }

  return (
    <div className="portfolio variant-B relative z-0 bg-primary">
      <div className="ambient-background" aria-hidden="true">
        <Suspense fallback={null}>
          <DotGrid 
          dotSize={3} gap={10} proximity={170} tension={0.55} swell={1.2} glow={0.6} 
          baseColor={theme === 'dark' ? '#465B70' : '#8B9CA9'} 
          activeColor={theme === 'dark' ? '#9AC7D6' : '#326D83'} 
          opacity={theme === 'dark' ? 0.35 : 0.23} 
          mouseInteraction={!reduced} clickShock={!reduced} intro={!reduced} 
        />
        </Suspense>
      </div>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar theme={theme} switchTheme={switchTheme} />
      <main id="main" tabIndex="-1">
        <Hero reduced={reduced} />
        <About />
        <Works />
        <Experience reduced={reduced} />
        <Honors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
