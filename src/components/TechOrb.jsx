/**
 * Floating tech icon orb — CSS 3D transform + animation.
 * Replaces the R3F WebGL tech balls to avoid context limits and clipping.
 */
import PropTypes from "prop-types";

const TechOrb = ({ icon, name, size = 60, style = {} }) => {
  return (
    <div
      className="tech-orb"
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${icon})`,
        backgroundSize: "60%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...style,
      }}
      aria-hidden="true"
      title={name}
    />
  );
};

TechOrb.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

export default TechOrb;
