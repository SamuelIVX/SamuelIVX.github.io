import { useEffect, useRef, useState } from 'react';
import { projects } from '../content/portfolio.js';
import { Icon } from './ui/Icon.jsx';
import { External } from './ui/External.jsx';

function Schedule() {
  return <div className="schedule" role="img" aria-label="Illustrative interleaving of two threads, exploring their execution schedules">
    <div className="schedule-heading"><span>Interleave</span><span>Execution schedules</span></div>
    {['A', 'B'].map((thread, row) => <div className="thread" key={thread}><span>Thread {thread}</span><div className="thread-track">{[0, 1, 2, 3, 4].map(column => <span key={column} className={(column + row) % 2 === 0 ? 'node filled' : 'node'} />)}</div></div>)}
    <div className="schedule-caption"><span className="status-dot" />Explore every possibility.</div>
  </div>;
}

export default function Works() {
  const rail = useRef(null);
  const [position, setPosition] = useState({ start: 0, visible: 3 });
  const maxStart = Math.max(0, projects.length - position.visible);
  
  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const cards = element.querySelectorAll('.project-slide');
      if (!cards.length) return;
      const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
      const stride = (cards[0].getBoundingClientRect().width || 300) + gap;
      const visible = Math.min(projects.length, Math.max(1, Math.round((element.clientWidth + gap) / stride)));
      const start = Math.min(projects.length - visible, Math.max(0, Math.round(element.scrollLeft / stride)));
      setPosition(previous => previous.start === start && previous.visible === visible ? previous : { start, visible });
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(queue);
    observer.observe(element);
    element.addEventListener('scroll', queue, { passive: true });
    update();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); element.removeEventListener('scroll', queue); };
  }, []);

  function goTo(index) {
    const element = rail.current;
    const cards = element.querySelectorAll('.project-slide');
    if (!cards.length) return;
    const target = Math.min(maxStart, Math.max(0, index));
    const left = cards[target].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
    element.scrollTo?.({ left, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  function onKeyDown(event) {
    if (event.target.closest('a') || event.ctrlKey || event.metaKey || event.altKey) return;
    let target;
    if (event.key === 'ArrowLeft') target = position.start - 1;
    else if (event.key === 'ArrowRight') target = position.start + 1;
    else if (event.key === 'Home') target = 0;
    else if (event.key === 'End') target = maxStart;
    else return;
    event.preventDefault();
    event.stopPropagation();
    goTo(target);
  }

  return (
    <section className="section projects" id="projects">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Projects</p>
        <h2>A few things I&apos;ve built.</h2>
      </div>
      {projects.length > 0 && (
      <div className="project-carousel" data-project-carousel role="region" aria-roledescription="carousel" aria-label="Projects" onKeyDown={onKeyDown} data-reveal>
        <div className="project-toolbar">
          <div className="project-controls">
            <button type="button" aria-label="Previous projects" disabled={position.start === 0} onClick={() => goTo(position.start - 1)}><Icon name="left" /></button>
            <button type="button" aria-label="Next projects" disabled={position.start >= maxStart} onClick={() => goTo(position.start + 1)}><Icon name="right" /></button>
          </div>
        </div>
        <div className="project-track" ref={rail} tabIndex={0} aria-label="Project cards">
          {projects.map((project, index) => (
            <article className="project-slide" key={project.repo} aria-label={`${project.name}, project ${index + 1} of ${projects.length}`}>
              <div className="project-card">
                <div className="project-visual">
                  {project.image ? <img src={`/assets/${project.image}`} alt={`${project.name} preview`} width="1400" height="840" loading="lazy" /> : <Schedule />}
                </div>
                <div className="project-copy">
                  <p className="eyebrow">{project.kind}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="tags" aria-label="Technologies">
                    {project.tech.map(tech => <li key={tech}>{tech}</li>)}
                  </ul>
                  <div className="project-links">
                    <External href={`https://github.com/SamuelIVX/${project.repo}`} icon="code">Source code</External>
                    {project.demo ? <External href={project.demo} icon="screen">Live demo</External> : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="project-positions" role="group" aria-label="Project position">
          {Array.from({ length: maxStart + 1 }, (_, index) => (
            <button type="button" key={index} aria-label={`Show projects starting with ${projects[index].name}`} aria-current={position.start === index ? 'true' : undefined} onClick={() => goTo(index)}>
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      )}
    </section>
  );
}
