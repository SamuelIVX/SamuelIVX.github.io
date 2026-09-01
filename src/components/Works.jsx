/**
 * Projects section — intro copy plus ProjectCard grid from `projects` constants.
 * Wrapped with SectionWrapper (empty idName).
 */
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { GITHUB } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/**
 * Tilted project card with screenshot, GitHub link, description, and tags.
 * @param {object} props - Component props.
 * @param {number} props.index - Index used to stagger fadeIn.
 * @param {string} props.name - Project title.
 * @param {string} props.description - Short project blurb.
 * @param {{ name: string, color: string }[]} props.tags - Tech/tag chips.
 * @param {string} props.image - Screenshot/asset URL.
 * @param {string} props.source_code_link - Repository URL opened in a new tab.
 * @returns {JSX.Element} Animated project card.
 * @example
 * <ProjectCard
 *   index={0}
 *   name="Deltabase"
 *   description="Portfolio demo."
 *   tags={[{ name: "react", color: "blue-text-gradient" }]}
 *   image={deltabase}
 *   source_code_link="https://github.com/SamuelIVX/Deltabase"
 * />
 */
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(187,107,217,0.3)] hover:border-purple-400/30"
        style={{ boxShadow: "0px 35px 120px -15px #211e35" }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="flex gap-2">
              <button
                onClick={() => window.open(source_code_link, "_blank", "noopener,noreferrer")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                aria-label="View source code on GitHub"
              >
                <img
                  src={GITHUB}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </button>
              {live_demo_link && (
                <button
                  onClick={() => window.open(live_demo_link, "_blank", "noopener,noreferrer")}
                  className="violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40"
                  aria-label="View live demo"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-1/2 h-1/2 text-white"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Prop validation
ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  live_demo_link: PropTypes.string,
};

/**
 * Projects heading, blurb, and card grid.
 * @returns {JSX.Element} Works section contents.
 * @example
 * // Exported as SectionWrapper(Works, "")
 * <Works />
 */
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={styles.sectionBody}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WorksComponent = SectionWrapper(Works, "");
export default WorksComponent;
