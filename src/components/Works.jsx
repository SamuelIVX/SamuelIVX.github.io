/**
 * Projects section — intro copy plus ProjectCard grid from `projects` constants.
 * Scattered tech orbs float in the background.
 * Wrapped with SectionWrapper (empty idName).
 */
import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import TechOrb from "./TechOrb";
import {
  threejs, motion as motionIcon, supabase, postgresql, vercel, mysql,
} from "../assets";

const orbs = [
  { icon: threejs, name: "Three.js", size: 50, style: { top: "5%", left: "90%", animationDelay: "0s" } },
  { icon: motionIcon, name: "Motion", size: 45, style: { top: "25%", left: "85%", animationDelay: "0.9s" } },
  { icon: supabase, name: "Supabase", size: 55, style: { top: "50%", left: "92%", animationDelay: "1.8s" } },
  { icon: postgresql, name: "PostgreSQL", size: 40, style: { top: "70%", left: "88%", animationDelay: "2.7s" } },
  { icon: vercel, name: "Vercel", size: 45, style: { top: "15%", left: "3%", animationDelay: "3.6s" } },
  { icon: mysql, name: "MySQL", size: 50, style: { top: "60%", left: "5%", animationDelay: "4.5s" } },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/10"
        style={{ boxShadow: "0px 35px 120px -15px #211e35" }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              aria-label="View source code on GitHub"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(source_code_link, "_blank");
                }
              }}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
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
      </Tilt>
    </motion.div>
  );
};

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
};

const Works = () => {
  return (
    <div className="relative">
      {orbs.map((orb) => (
        <TechOrb key={orb.name} {...orb} />
      ))}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
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
    </div>
  );
};

const WorksComponent = SectionWrapper(Works, "");
export default WorksComponent;
