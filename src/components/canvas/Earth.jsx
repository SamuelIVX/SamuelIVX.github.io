/**
 * Auto-rotating Earth glTF canvas for the Contact section.
 * Loads `public/planet/scene.gltf`.
 */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

/** Planet mesh from the planet glTF scene. */
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

/**
 * Demand-loop Canvas with autoRotate OrbitControls around Earth.
 * @returns {JSX.Element} Earth R3F canvas.
 */
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gL={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
