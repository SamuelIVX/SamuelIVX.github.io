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
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m Samuel Hernandez Balderas — a senior at the College of Staten Island
        majoring in Computer Science with a minor in Mathematics. I&apos;ve spent
        three summers as an SDE Intern at AWS, all within the AWS Billing Org, where
        I built scalable end-to-end projects that deliver seamless solutions to
        customers and internal engineers. Outside of code, I tinker with PCs, read
        manga, and collect figurines and comics. Most of all, I enjoy building
        projects that solve real-world problems.
      </motion.p>
    </>
  );
};

const AboutComponent = SectionWrapper(About, "about");
export default AboutComponent;
