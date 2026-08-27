/**
 * Tech stack grid — 2D icon + name pills, no WebGL canvas.
 */
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-10 justify-center">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="group w-fit flex items-center gap-1.5 bg-tertiary px-2.5 py-1 rounded-full border border-white/5 transition-all duration-300 hover:scale-105 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(187,107,217,0.25)] hover:bg-[#1a1245]"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-secondary text-[14px]">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tech;
