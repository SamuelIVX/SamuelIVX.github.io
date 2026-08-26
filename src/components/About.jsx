/**
 * About / Overview section — intro copy plus bio paragraph.
 * Exported as SectionWrapper(About, "about").
 */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

/**
 * Overview heading and bio paragraph.
 * @returns {JSX.Element} About section body (wrapped by SectionWrapper).
 * @example
 * // Exported as SectionWrapper(About, "about")
 * <About />
 */
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Software Engineer specializing in scalable solutions, process
        optimization, and data-driven development. Experienced in
        application design, and dynamic web development, delivering impactful
        results across diverse projects.
      </motion.p>
    </>
  );
};

const AboutComponent = SectionWrapper(About, "about");
export default AboutComponent;
