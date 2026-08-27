/**
 * Single shared R3F Canvas for all tech balls.
 * Reduces WebGL context pressure by using one canvas instead of 20+.
 */
import { Suspense, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import { TextureLoader } from "three";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, position }) => {
  const [decal, setDecal] = useState(null);

  useEffect(() => {
    if (!imgUrl || imgUrl.endsWith(".svg")) {
      return;
    }

    const loader = new TextureLoader();
    loader.load(
      imgUrl,
      (texture) => setDecal(texture),
      undefined,
      () => setDecal(null)
    );
  }, [imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            map={decal}
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string,
  position: PropTypes.arrayOf(PropTypes.number),
};

Ball.defaultProps = {
  position: [0, 0, 0],
};

const TechBallsCanvas = ({ icons }) => {
  const validIcons = icons.filter((icon) => {
    const isSvg = icon.toLowerCase().endsWith(".svg") || icon.startsWith("data:image/svg+xml");
    return !isSvg;
  });
  const radius = 4;
  const count = validIcons.length;

  if (count === 0) {
    return null;
  }

  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {validIcons.map((icon, index) => {
          const phi = Math.acos(-1 + (2 * index) / count);
          const theta = Math.sqrt(count * Math.PI) * phi;
          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);

          return (
            <Ball
              key={index}
              imgUrl={icon}
              position={[x, y, z]}
            />
          );
        })}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

TechBallsCanvas.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechBallsCanvas;
