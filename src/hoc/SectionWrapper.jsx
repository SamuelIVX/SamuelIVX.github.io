/**
 * HOC that wraps a section component in a staggered motion.section with
 * padding, max-width, and an optional hash-span id for nav anchors.
 */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/**
 * Returns a higher-order component that animates `Component` into view once.
 * @param {import("react").ComponentType} Component - Section to wrap.
 * @param {string} idName - DOM id for the hash-span (e.g. "about", "work").
 * @returns {function(): JSX.Element} Wrapped section component.
 * @example
 * export default SectionWrapper(About, "about");
 */
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}></span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
