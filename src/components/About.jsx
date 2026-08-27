/**
 * About / Overview section — intro copy plus bio paragraph.
 * Scattered tech orbs float in the background.
 * Exported as SectionWrapper(About, "about").
 */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import TechOrb from "./TechOrb";
import {
  html, css, javascript, typescript, reactjs, nextjs, tailwind,
} from "../assets";

const orbs = [
  { icon: html, name: "HTML", size: 55, style: { top: "5%", left: "85%", animationDelay: "0s" } },
  { icon: css, name: "CSS", size: 50, style: { top: "25%", left: "92%", animationDelay: "0.8s" } },
  { icon: javascript, name: "JavaScript", size: 60, style: { top: "55%", left: "88%", animationDelay: "1.6s" } },
  { icon: typescript, name: "TypeScript", size: 45, style: { top: "75%", left: "82%", animationDelay: "2.4s" } },
  { icon: reactjs, name: "React", size: 50, style: { top: "10%", left: "2%", animationDelay: "3.2s" } },
  { icon: nextjs, name: "Next.js", size: 40, style: { top: "60%", left: "3%", animationDelay: "4s" } },
  { icon: tailwind, name: "Tailwind", size: 45, style: { top: "85%", left: "10%", animationDelay: "4.8s" } },
];

const About = () => {
  return (
    <div className="relative">
      {orbs.map((orb) => (
        <TechOrb key={orb.name} {...orb} />
      ))}
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
    </div>
  );
};

const AboutComponent = SectionWrapper(About, "about");
export default AboutComponent;
