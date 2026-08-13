/**
 * Hero desktop PC glTF canvas — scales for mobile via matchMedia and
 * useSyncExternalStore. Loads `public/desktop_pc/scene.gltf`.
 */
import { Suspense, useSyncExternalStore } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const MOBILE_MEDIA_QUERY = "(max-width: 500px)";

/**
 * Current mobile breakpoint match (client-only).
 * @returns {boolean} True when viewport width is ≤500px.
 */
const getMobileSnapshot = () =>
  typeof window !== "undefined" &&
  window.matchMedia(MOBILE_MEDIA_QUERY).matches;

/**
 * Subscribes to mobile media-query changes for useSyncExternalStore.
 * @param {() => void} onStoreChange - Callback when the query result changes.
 * @returns {() => void} Unsubscribe function.
 */
const subscribeToMobileQuery = (onStoreChange) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    mediaQuery.removeEventListener("change", onStoreChange);
  };
};

/**
 * Lit desktop PC primitive with mobile-aware scale/position.
 * @param {object} props - Component props.
 * @param {boolean} props.isMobile - Whether to use the compact layout.
 * @returns {JSX.Element} Lights + glTF primitive.
 */
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

/**
 * Demand-loop Canvas for the hero desktop model with a fixed polar angle.
 * @returns {JSX.Element} Hero ComputersCanvas.
 */
const ComputersCanvas = () => {
  const isMobile = useSyncExternalStore(
    subscribeToMobileQuery,
    getMobileSnapshot,
    () => false
  );

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

// Prop validation
Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default ComputersCanvas;
