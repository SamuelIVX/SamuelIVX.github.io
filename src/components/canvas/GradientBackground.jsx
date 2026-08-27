/**
 * Animated dots-and-lines network background for middle sections.
 * Canvas 2D implementation — zero dependencies, avoids WebGL context
 * conflicts with the tech balls canvas. Falls back to solid background.
 */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const NODE_COUNT = 60;
const LINE_THRESHOLD = 180;
const NODE_RADIUS = 3;
const DRIFT_SPEED = 0.12;
const NODE_COLOR = "#BB6BD9";
const BG_COLOR = "#0f0a2e";

const GradientBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.parentElement.clientWidth;
    let height = canvas.parentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const initNodes = () => {
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2 * DRIFT_SPEED,
        vy: (Math.random() - 0.5) * 2 * DRIFT_SPEED,
      }));
    };

    const update = () => {
      for (const node of nodesRef.current) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const nodes = nodesRef.current;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_THRESHOLD) {
            const alpha = 1 - dist / LINE_THRESHOLD;
            ctx.strokeStyle = `rgba(187, 107, 217, ${0.35 * alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = NODE_COLOR;
        ctx.beginPath();
        ctx.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      update();
      draw();
      animFrameRef.current = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(canvas.parentElement);

    initNodes();
    loop();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative" style={{ background: BG_COLOR }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />
      {children}
    </div>
  );
};

export default GradientBackground;

GradientBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
