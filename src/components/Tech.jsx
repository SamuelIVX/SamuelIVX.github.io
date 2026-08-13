/**
 * Tech stack grid — one BallCanvas per entry in `technologies`.
 * Wrapped with SectionWrapper (empty idName — not a nav target).
 */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

/**
 * Row of floating 3D tech icon balls.
 * @returns {JSX.Element} Tech icon grid.
 */
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const TechComponent = SectionWrapper(Tech, "");
export default TechComponent;
