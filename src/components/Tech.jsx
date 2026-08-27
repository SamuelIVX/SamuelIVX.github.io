/**
 * Tech stack grid — 2D icon + name pills, no WebGL canvas.
 */
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-3 mt-10">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-2 bg-tertiary px-3 py-1.5 rounded-full border border-white/5"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-5 h-5 object-contain"
          />
          <span className="text-secondary text-[14px]">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tech;
