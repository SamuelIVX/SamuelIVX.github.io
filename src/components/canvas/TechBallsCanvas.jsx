/**
 * Single shared R3F Canvas for all tech balls.
 * Reduces WebGL context pressure by using one canvas instead of 20+.
 * Handles SVG icons via canvas-based texture conversion.
 * Uses golden-angle distribution for even sphere spacing.
 */
import { Suspense, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, Text } from "@react-three/drei";
import { TextureLoader, CanvasTexture } from "three";
import CanvasLoader from "../Loader";

/**
 * Loads an image URL as a Three.js texture.
 * SVGs are rendered to an offscreen canvas first (TextureLoader can't decode SVGs).
 * Raster images go through TextureLoader directly.
 * @param {string} url - Image URL (PNG, WebP, JPG, or SVG).
 * @returns {Promise<import("three").Texture>} Resolved texture.
 */
function loadTexture(url) {
  const isSvg = url.endsWith(".svg") || url.startsWith("data:image/svg+xml");
  if (isSvg) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 256, 256);
        resolve(new CanvasTexture(canvas));
      };
      img.onerror = reject;
      img.src = url;
    });
  }
  return new Promise((resolve, reject) => {
    new TextureLoader().load(url, resolve, undefined, reject);
  });
}

const FALLBACK_COLORS = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7",
  "#DDA0DD", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E9",
  "#F1948A", "#82E0AA", "#F8C471", "#AED6F1", "#D7BDE2",
  "#A3E4D7", "#FAD7A0", "#A9CCE3", "#D5DBDB", "#EDBB99",
];

const Ball = ({ imgUrl, position = [0, 0, 0], name = "", index = 0 }) => {
  const [decal, setDecal] = useState(null);
  const [loadFailed, setLoadFailed] = useState(!imgUrl);

  useEffect(() => {
    if (!imgUrl) return;

    let cancelled = false;
    loadTexture(imgUrl)
      .then((texture) => {
        if (!cancelled) setDecal(texture);
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true);
      });

    return () => { cancelled = true; };
  }, [imgUrl]);

  const fallbackColor = useMemo(
    () => FALLBACK_COLORS[index % FALLBACK_COLORS.length],
    [index]
  );

  const abbreviation = useMemo(() => {
    if (!name) return "??";
    const words = name.split(/\s+/);
    if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
    return words.map((w) => w[0]).join("").toUpperCase().slice(0, 3);
  }, [name]);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh castShadow receiveShadow scale={1} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={loadFailed && !decal ? fallbackColor : "#1a1040"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal ? (
          <Decal
            map={decal}
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
          />
        ) : loadFailed ? (
          <Text
            position={[0, 0, 1.05]}
            fontSize={0.45}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            font={undefined}
          >
            {abbreviation}
          </Text>
        ) : null}
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string,
  position: PropTypes.arrayOf(PropTypes.number),
  name: PropTypes.string,
  index: PropTypes.number,
};

const TechBallsCanvas = ({ icons, names = [] }) => {
  const radius = 7;
  const count = icons.length;

  if (count === 0) {
    return null;
  }

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  return (
    <div style={{ overflow: "visible" }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        camera={{ position: [0, 0, 18], fov: 40 }}
        style={{ overflow: "visible" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} />
          <OrbitControls enableZoom={false} />
          {icons.map((icon, index) => {
            const y = 1 - (index / (count - 1 || 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = goldenAngle * index;
            const x = radiusAtY * Math.cos(theta);
            const z = radiusAtY * Math.sin(theta);

            return (
              <Ball
                key={index}
                imgUrl={icon}
                name={names?.[index] || ""}
                index={index}
                position={[x * radius, y * radius, z * radius]}
              />
            );
          })}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

TechBallsCanvas.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  names: PropTypes.arrayOf(PropTypes.string),
};

export default TechBallsCanvas;
