/**
 * Animated gradient background for middle sections.
 * Uses CSS keyframe animation instead of Vanta.js to avoid WebGL context
 * conflicts. Falls back to a solid background color.
 */
import PropTypes from "prop-types";

const GradientBackground = ({ children }) => {
  return (
    <div
      className="relative animated-gradient-bg"
      style={{
        background: "#151030",
      }}
    >
      {children}
    </div>
  );
};

export default GradientBackground;

GradientBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
