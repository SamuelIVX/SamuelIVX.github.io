/**
 * Canvas loading overlay — shows useProgress percent via drei Html.
 */
import { Html, useProgress } from "@react-three/drei";

/**
 * Progress percentage overlay while 3D assets load.
 * @returns {JSX.Element} Html overlay with percent complete.
 * @example
 * <CanvasLoader /> // Suspense fallback in canvas hosts
 */
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
