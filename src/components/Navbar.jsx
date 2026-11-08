
import { useState, useRef, useEffect } from 'react';
import { Icon } from './ui/Icon';

const sections = [['about', 'About'], ['projects', 'Projects'], ['work', 'Experience'], ['honors', 'Honors'], ['contact', 'Contact']];

import PropTypes from "prop-types";

export default function Navbar({ theme, switchTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const menu = useRef(null);
  const navRef = useRef(null);
  const brandRef = useRef(null);
  const controlsRef = useRef(null);


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
    const outsideElements = [
      document.getElementById('main'),
      document.querySelector('footer'),
      document.querySelector('.skip-link'),
      brandRef.current,
      controlsRef.current,
    ].filter(Boolean);

    outsideElements.forEach(el => {
      if (menuOpen) el.setAttribute('inert', '');
      else el.removeAttribute('inert');
    });

    if (!menuOpen) return;
    const keydown = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menu.current?.focus();
        return;
      }
      if (event.key === 'Tab') {
        const focusable = [menu.current, ...(navRef.current?.querySelectorAll('a') || [])].filter(Boolean);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!focusable.includes(document.activeElement)) {
          event.preventDefault();
          if (event.shiftKey) {
            last.focus();
          } else {
            first.focus();
          }
          return;
        }
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', keydown);
    return () => {
      document.removeEventListener('keydown', keydown);
      outsideElements.forEach(el => el.removeAttribute('inert'));
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#main" ref={brandRef} className="brand" aria-label="Samuel Hernandez Balderas, back to top"><span className="brand-at">@</span><span>samhb</span></a>
        <button className="menu-toggle" ref={menu} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        <nav id="navigation" ref={navRef} className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          {sections.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-controls" ref={controlsRef}>
          <a href="https://www.linkedin.com/in/samuelhb/" className="icon-button" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Icon name="linkedin" /></a>
          <a href="https://github.com/SamuelIVX" className="icon-button" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Icon name="github" /></a>
          <button className="icon-button theme-toggle" onClick={switchTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title="Switch theme"><Icon name={theme === 'light' ? 'moon' : 'sun'} /></button>
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  theme: PropTypes.string,
  switchTheme: PropTypes.func
};
