/**
 * Tech stack grid — simple text tags replacing the 3D canvas.
 * Tech icons are now scattered as orbs in About, Experience, and Works sections.
 */
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-3 mt-10">
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className="text-secondary text-[14px] bg-tertiary px-3 py-1.5 rounded-full border border-white/5"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default Tech;
