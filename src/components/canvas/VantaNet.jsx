/**
 * Vanta.js NET animated background for middle sections.
 * Initializes VANTA.NET on mount and cleans up on unmount.
 * Falls back to a solid background color if WebGL is unavailable.
 */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const VantaNet = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    const initVanta = async () => {
      try {
        const VANTA = await import("vanta");
        if (containerRef.current) {
          vantaEffect = VANTA.default({
            el: containerRef.current,
            THREE: VANTA.THREE || await import("three"),
            backgroundColor: 0x231E54,
            color: 0xBB6BD9,
            showDots: false,
            points: 20,
            spacing: 15,
            mouseControls: false,
            gyroControls: false,
            touchControls: false,
            scale: 1,
            scaleMobile: 1,
          });
        }
      } catch (error) {
        console.warn("Vanta.js failed to initialize, falling back to solid background:", error);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ backgroundColor: "#151030" }}>
      {children}
    </div>
  );
};

export default VantaNet;

VantaNet.propTypes = {
  children: PropTypes.node.isRequired,
};
