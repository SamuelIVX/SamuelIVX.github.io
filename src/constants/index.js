/**
 * Portfolio content data — nav links, technologies, experiences, and
 * projects. Edit here rather than hardcoding in JSX section components.
 */
import {
  CSS,
  PYTHON,
  GIT,
  HTML,
  JAVASCRIPT,
  NODEJS,
  REACTJS,
  TAILWIND,
  TYPESCRIPT,
  THREEJS,
  JAVA,
  C,
  AWS,
  MYSQL,
  NEXTJS,
  SUPABASE,
  POSTGRESQL,
  VERCEL,
  MAVEN,
  MOTION,
} from "../assets";

/**
 * Hash-nav targets rendered by Navbar (About / Work / Contact).
 * @example
 * navLinks.map((l) => `#${l.id}`) // ['#about', '#work', '#contact']
 */
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: HTML,
  },
  {
    name: "CSS 3",
    icon: CSS,
  },
  {
    name: "JavaScript",
    icon: JAVASCRIPT,
  },
  {
    name: "TypeScript",
    icon: TYPESCRIPT,
  },
  {
    name: "React JS",
    icon: REACTJS,
  },
  {
    name: "Next.js",
    icon: NEXTJS,
  },
  {
    name: "Tailwind CSS",
    icon: TAILWIND,
  },
  {
    name: "Node JS",
    icon: NODEJS,
  },
  {
    name: "Java",
    icon: JAVA,
  },
  {
    name: "C++",
    icon: C,
  },
  {
    name: "Python",
    icon: PYTHON,
  },
  {
    name: "Three.js",
    icon: THREEJS,
  },
  {
    name: "Motion",
    icon: MOTION,
  },
  {
    name: "Supabase",
    icon: SUPABASE,
  },
  {
    name: "PostgreSQL",
    icon: POSTGRESQL,
  },
  {
    name: "Vercel",
    icon: VERCEL,
  },
  {
    name: "Maven",
    icon: MAVEN,
  },
  {
    name: "git",
    icon: GIT,
  },
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "MySql",
    icon: MYSQL,
  },
];



import { projects as pProjects, experiences as pExperiences } from '../content/portfolio';

const projects = pProjects.map(p => ({
  ...p,
  tags: (p.tech || []).map(t => ({ name: t, color: 'blue-text-gradient' })),
}));

const experiences = pExperiences.map(e => ({
  ...e,
  company_name: e.company,
  iconBg: '#383E56',
  icon: 'dummy',
}));

export { technologies, experiences, projects };
