/**
 * Work Experience accordion — expandable role cards from `experiences` constants.
 * Exported as SectionWrapper(Experience, "work").
 */
import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "motion/react";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

/**
 * Expandable experience card with chevron toggle.
 * @param {object} props - Component props.
 * @param {object} props.experience - Role record from constants.
 * @param {number} props.index - Position in the list, used for staggered animation.
 * @param {boolean} props.isOpen - Whether this card is expanded.
 * @param {function} props.toggle - Callback to toggle this card.
 * @returns {JSX.Element} Expandable experience card.
 * @example
 * <ExperienceCard index={0} experience={experiences[0]} isOpen={false} toggle={() => {}} />
 */
const ExperienceCard = ({ experience, index, isOpen, toggle }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.1, duration: 0.5 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full bg-tertiary rounded-2xl p-5 mb-4 cursor-pointer border-l-4 hover:shadow-lg hover:shadow-purple-500/10 transition-shadow"
      style={{ borderLeftColor: experience.iconBg }}
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={`experience-content-${index}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 flex-1">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-10 h-10 rounded-lg object-cover shrink-0"
            style={{ backgroundColor: experience.iconBg }}
          />
          <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            <p className="text-secondary text-[16px] font-semibold mt-1">
              {experience.company_name}
            </p>
            <p className="text-secondary text-[14px] mt-1">{experience.date}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            id={`experience-content-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 list-disc ml-5 space-y-2 overflow-hidden"
          >
            {experience.points.map((point, idx) => (
              <li
                key={`experience-point-${idx}`}
                className="text-white-100 text-[14px] p1-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Prop validation
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

/**
 * Work Experience heading and accordion of roles.
 * Only one card is open at a time.
 * @returns {JSX.Element} Experience section contents.
 * @example
 * // Exported as SectionWrapper(Experience, "work")
 * <Experience />
 */
const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            index={index}
            isOpen={openIndex === index}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </>
  );
};

const ExperienceComponent = SectionWrapper(Experience, "work");
export default ExperienceComponent;
