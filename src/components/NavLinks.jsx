/**
 * Shared navigation links for both desktop and mobile layouts.
 * @param {object} props
 * @param {Array} props.navLinks - Array of { id, title } objects
 * @param {string} props.active - Currently active section title
 * @param {function} props.onNavClick - Called with (title, id) when a link is clicked
 * @param {boolean} props.isMobile - Whether rendering in mobile drawer
 * @returns {JSX.Element}
 */
import PropTypes from "prop-types";

const NavLinks = ({ navLinks, active, onNavClick, isMobile = false }) => (
  <>
    {navLinks.map((link) => (
      <li
        key={link.id}
        className={`${
          active === link.title
            ? "text-white"
            : isMobile
            ? "text-secondary"
            : "text-secondary"
        } ${isMobile ? "font-poppins font-medium text-[16px]" : "text-[18px] font-medium"} cursor-pointer`}
        onClick={() => onNavClick(link.title, link.id)}
      >
        <a href={`#${link.id}`}>{link.title}</a>
      </li>
    ))}
  </>
);

NavLinks.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  active: PropTypes.string.isRequired,
  onNavClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

export default NavLinks;