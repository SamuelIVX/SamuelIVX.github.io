/**
 * Floating icosahedron Ball with a tech-icon decal, plus BallCanvas host.
 * Used by the Tech section for each technology icon.
 */
import { Suspense } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

/**
 * Lit floating mesh with the given texture as a decal.
 * @param {object} props - Component props.
 * @param {string} props.imgUrl - Texture URL for the decal.
 * @returns {JSX.Element} Three.js ball mesh group.
 * @example
 * <Ball imgUrl={reactjs} />
 */
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

/**
 * R3F Canvas hosting a single tech Ball.
 * @param {object} props - Component props.
 * @param {string} props.icon - Image URL passed to Ball as imgUrl.
 * @returns {JSX.Element} Canvas with OrbitControls and Ball.
 * @example
 * <BallCanvas icon={javascript} />
 */
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      //frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

// Prop validation
Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
