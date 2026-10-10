
import { useState, useRef, useEffect } from 'react';
import { Icon } from './ui/Icon';

const sections = [['about', 'About'], ['projects', 'Projects'], ['work', 'Experience'], ['honors', 'Honors'], ['contact', 'Contact']];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const menu = useRef(null);


  useEffect(() => {
    let ticking = false;
    const observer = new IntersectionObserver(entries => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        let best = active;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            best = entry.target.id;
            if (entry.intersectionRatio > 0.5) break;
          }
        }
        if (best !== active) setActive(best);
        ticking = false;
      });
    }, { threshold: [0, 0.5, 1], rootMargin: '-76px 0px -20% 0px' });

    sections.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    const keydown = event => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menu.current?.focus();
      }
    };
    document.addEventListener('keydown', keydown);
    return () => document.removeEventListener('keydown', keydown);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#main" className="brand" aria-label="Samuel Hernandez Balderas, back to top"><span className="brand-at">@</span><span>samhb</span></a>
        <button className="menu-toggle" ref={menu} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        <nav id="navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          {sections.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-controls">
          <a href="https://www.linkedin.com/in/samuelhb/" className="icon-button" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Icon name="linkedin" /></a>
          <a href="https://github.com/SamuelIVX" className="icon-button" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Icon name="github" /></a>
          <button className="icon-button theme-toggle" aria-label="Switch theme" title="Switch theme"><Icon name="moon" /></button>
        </div>
      </div>
    </header>
  );
}
