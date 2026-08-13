/**
 * About / Overview section — intro copy plus tilted ServiceCard grid from
 * `services` constants. Exported as SectionWrapper(About, "about").
 */
import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

/**
 * Tilted service tile with icon and title.
 * @param {object} props - Component props.
 * @param {number} props.index - Index used to stagger the fadeIn delay.
 * @param {string} props.title - Service label.
 * @param {string} props.icon - Image URL for the service icon.
 * @returns {JSX.Element} Animated service card.
 */
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// Prop validation
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired, // index is required and must be a number
  title: PropTypes.string.isRequired, // title is required and must be a string
  icon: PropTypes.string.isRequired, // icon is required and must be a string (URL)
};

/** Overview heading, bio paragraph, and service cards. */
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

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutComponent = SectionWrapper(About, "about");
export default AboutComponent;
