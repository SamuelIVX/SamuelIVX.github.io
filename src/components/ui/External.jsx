import PropTypes from "prop-types";
import { Icon } from './Icon';

export function External({ href, children, icon, className = '' }) {
  return (
    <a href={href} className={`text-link ${className}`} target="_blank" rel="noopener noreferrer">
      {icon && <Icon name={icon} />}
      <span>{children}</span>
      <Icon name="arrow" />
    </a>
  );
}

External.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};
