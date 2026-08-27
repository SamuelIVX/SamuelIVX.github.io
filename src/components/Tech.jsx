/**
 * Tech stack grid — one BallCanvas per entry in `technologies`.
 * Wrapped with SectionWrapper (empty idName — not a nav target).
 */
import { TechBallsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

/**
 * Row of floating 3D tech icon balls.
 * @returns {JSX.Element} Tech icon grid.
 * @example
 * // Exported as SectionWrapper(Tech, "")
 * <Tech />
 */
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <TechBallsCanvas
        icons={technologies.map((t) => t.icon)}
        names={technologies.map((t) => t.name)}
      />
    </div>
  );
};

const TechComponent = SectionWrapper(Tech, "");
export default TechComponent;
