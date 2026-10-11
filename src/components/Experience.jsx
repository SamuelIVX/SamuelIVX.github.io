import PropTypes from "prop-types";
import { useEffect, useRef, useState, useId } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../content/portfolio.js';
import { Highlight } from './ui/Highlight.jsx';

export default function Experience({ reduced }) {
  const [selected, setSelected] = useState(0);
  const [compact, setCompact] = useState(false);
  const prefix = useId();
  const tabs = useRef([]);
  const experience = experiences[selected];

  useEffect(() => {
    const media = matchMedia('(max-width:900px)');
    const update = () => setCompact(media.matches);
    media.addEventListener('change', update);
    update();
    return () => media.removeEventListener('change', update);
  }, []);

  function onKeyDown(event, index) {
    const previous = compact ? 'ArrowLeft' : 'ArrowUp';
    const next = compact ? 'ArrowRight' : 'ArrowDown';
    let target;
    if (event.key === previous) target = (index + experiences.length - 1) % experiences.length;
    else if (event.key === next) target = (index + 1) % experiences.length;
    else if (event.key === 'Home') target = 0;
    else if (event.key === 'End') target = experiences.length - 1;
    else return;
    event.preventDefault();
    event.stopPropagation();
    setSelected(target);
    tabs.current[target]?.focus();
    if (compact) tabs.current[target]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  }

  return (
    <section className="section experience" id="work">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Experience</p>
        <h2>Built in the real world.</h2>
      </div>
      {experiences.length > 0 && (
      <div className="experience-browser" data-reveal>
        <div className="experience-tabs" role="tablist" aria-label="Experience roles" aria-orientation={compact ? 'horizontal' : 'vertical'}>
          {experiences.map((role, index) => (
            <button key={role.id} ref={node => { tabs.current[index] = node; }} type="button" role="tab" id={`${prefix}-tab-${role.id}`} aria-label={`${role.company}, ${role.title}, ${role.date}`} aria-selected={selected === index} aria-controls={`${prefix}-panel`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => onKeyDown(event, index)}>
              <span className="experience-tab-top">{role.company}</span>
              <span className="experience-tab-title">{role.selector ?? role.title}</span>
            </button>
          ))}
        </div>
        <motion.div className="experience-panel" role="tabpanel" key={experience.id} id={`${prefix}-panel`} aria-labelledby={`${prefix}-tab-${experience.id}`} tabIndex={0} initial={reduced ? false : { opacity: 0, transform: 'translateY(4px)' }} animate={{ opacity: 1, transform: 'translateY(0px)' }} transition={{ duration: reduced ? 0 : 1.4, ease: [0.4, 0, 0.2, 1] }}>
          <p className="eyebrow">{experience.company}</p>
          <h3>{experience.title}</h3>
          <p className="experience-date">{experience.date}</p>
          <ul>
            {experience.points.map(point => (
              <li key={point}>
                <Highlight text={point} phrase={experience.highlight} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      )}
    </section>
  );
}

Experience.propTypes = { reduced: PropTypes.bool };
