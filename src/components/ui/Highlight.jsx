export function Highlight({ text, phrase }) {
  if (!phrase) return text;
  const parts = text.split(new RegExp(`(${phrase})`, 'gi'));
  return <>{parts.map((part, i) => part.toLowerCase() === phrase.toLowerCase() ? <strong key={i}>{part}</strong> : part)}</>;
}

import PropTypes from "prop-types";
Highlight.propTypes = {
  text: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};
