
import { motion } from 'framer-motion';
import { Icon } from './ui/Icon';
import { External } from './ui/External';

import PropTypes from "prop-types";

export default function Hero({ reduced }) {
  return (
    <section className="hero" aria-label="Introduction">
      <motion.div className="hero-inner" initial={reduced ? false : { opacity: 0.2, transform: 'translateY(12px)', filter: 'blur(3px)' }} animate={{ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }} transition={{ duration: reduced ? 0 : 2.6, ease: [0.22, 1, 0.36, 1] }}>
        <div className="hero-identity"><p className="greeting">Hello World, I&apos;m...</p>
          <h1 className="hero-name" aria-label="Samuel Hernandez Balderas."><span aria-hidden="true">Samuel</span><span aria-hidden="true">Hernandez</span><span aria-hidden="true">Balderas.</span></h1>
          <div className="hero-actions"><a className="primary-button" href="#projects">Explore my work<Icon name="down" /></a><External href="/assets/resume.pdf">Resume</External></div>
        </div>
        <div className="hero-aside">
          <p className="profession">Software engineer <span>&amp; web developer.</span></p>
          <p className="hero-story">I build web applications and tools for understanding complex systems. Three summers in <strong>AWS Billing</strong> shaped my focus on performance, reliability, and <strong>end-to-end ownership</strong>.</p>
        </div>
      </motion.div>
    </section>
  );
}

Hero.propTypes = { reduced: PropTypes.bool };
