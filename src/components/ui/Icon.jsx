export function Icon({ name, className = '' }) {
  const paths = {
    arrow: <path d="M5 15 15 5M5 5h10v10" />,
    down: <path d="M10 3v14m-5-5 5 5 5-5" />,
    left: <path d="m12 4-6 6 6 6" />,
    right: <path d="m8 4 6 6-6 6" />,
    code: <path d="m6 5-5 5 5 5m8-10 5 5-5 5m-3-12-2 14" />,
    screen: <><rect x="2" y="3" width="16" height="11" rx="2" /><path d="M7 18h6m-3-4v4" /></>,
    linkedin: <><rect x="2" y="2" width="16" height="16" rx="3" /><path d="M6 9v6m0-10v.2M10 15V9m0 3c0-4 4-4 4-1v4" /></>,
    github: <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.9c0-1.1-.4-1.9-1-2.4 3.3-.4 6.8-1.6 6.8-7.3 0-1.6-.6-2.9-1.5-3.9.2-.4.7-1.9-.1-3.5 0 0-1.2-.4-4 1.5a13.8 13.8 0 0 0-7.2 0C5.2.6 4 .9 4 .9c-.8 1.6-.3 3.1-.1 3.5A5.6 5.6 0 0 0 2.4 8c0 5.7 3.5 6.9 6.8 7.3-.5.5-.9 1.2-1 2.4V22" />,
    sun: <><circle cx="10" cy="10" r="3.5" /><path d="M10 1v2m0 14v2M1 10h2m14 0h2M3.6 3.6 5 5m10 10 1.4 1.4M3.6 16.4 5 15M15 5l1.4-1.4" /></>,
    moon: <path d="M17 12.4A7.4 7.4 0 0 1 7.6 3a7.4 7.4 0 1 0 9.4 9.4Z" />,
    plus: <path d="M3 10h14m-7-7v14" />
  };
  return <svg className={`icon ${className}`} viewBox={name === 'github' ? '0 0 24 24' : '0 0 20 20'} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

import PropTypes from "prop-types";
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
