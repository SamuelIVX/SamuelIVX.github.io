/**
 * Portfolio content data — nav links, services, technologies, experiences,
 * and projects. Edit here rather than hardcoding in JSX section components.
 */
import {
  backend,
  creator,
  mobile,
  web,
  css,
  python,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  java,
  c,
  aws,
  mysql,
  nextjs,
  supabase,
  postgresql,
  vercel,
  maven,
  motion,
  threejs,
  AOT,
  amazonwebservices,
  carwash,
  ecommerce,
  deltabase,
  foodsense
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

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Cloud Computing Engineer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Motion",
    icon: motion,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Maven",
    icon: maven,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MySql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Tech360 Intern",
    company_name: "America On Tech",
    icon: AOT,
    iconBg: "#383E56",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Acquired skills in HTML, CSS, and Bootstrap.",
      "Developed a portfolio of technology projects that illustrated an understanding of web development.",
      "Presented a final group project - the creation of a mock business and an accompanying website - to technology professionals, who served as guest judges during the Demo Day Competition.",
    ],
  },
  {
    title: "TechFlex Leader",
    company_name: "America On Tech",
    icon: AOT,
    iconBg: "#383E56",
    date: "Sep 2022 - May 2023",
    points: [
      "Selected to take part in a year-long Advanced Web Development and UX Design fellowship program.",
      "Completed 80+ hours of instruction in both Advanced Web Development and UX Design, to add to the skills learned over 80+ hours of coding training in HTML, CSS, JavaScript, Repl.it, and Bootstrap.",
      "Paired with technology mentors and professionals to focus on college and career readiness skills.",
    ],
  },
  {
    title: "Amazon Future Engineer Intern",
    company_name: "Amazon Web Services (AWS)",
    icon: amazonwebservices,
    iconBg: "#383E56",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Leveraged AWS services (S3, SNS, SQS, Lambda, Glue with PySpark) in my project.",
      "Enhanced my team's invoicing process, reducing latency and streamlining data processing time by >30%.",
      "Delivered a final project presentation to team members, demonstrating technical enhancements in data handling that improved operational efficiency by reducing complexity in end-to-end data workflows.",
    ],
  },
  {
    title: "Data Science Fellow",
    company_name: "America On Tech",
    icon: AOT,
    iconBg: "#383E56",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Developed predictive models using Python, SQL, and Jupyter Notebooks.",
      "Analyzed large datasets with a focus on data consistency, deduplication, and handling missing values for improved ML reliability.",
      "Led a 9-week team project simulating real-world client engagement, building a predictive model that increased forecasting accuracy by >25%, demonstrating practical applications of ML concepts.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon Web Services (AWS)",
    icon: amazonwebservices,
    iconBg: "#383E56",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Developed a comprehensive AWS bill computation analytics platform by building an automated Python-based data retrieval and query system, reducing ticket resolution time by >83%.",
      "Engineered Model Context Protocol(MCP) Server integration that unified multiple complex disparate billing tools into a single AI - powered interface, eliminating context switching overhead by > 85 %.",
    ],
  },
];

const placeholderImage =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMmEyYTJlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjQjI2QkQ5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvamVjdCBQSFg8L3RleHQ+PC9zdmc+";

const projects = [
  {
    name: "Interleave",
    description:
      "Java 26 explicit-state model checker implementing POR-to-DPOR optimizations for efficient concurrency bug detection in multithreaded programs.",
    tags: [
      {
        name: "Java 26",
        color: "green-text-gradient",
      },
      {
        name: "Model Checking",
        color: "blue-text-gradient",
      },
      {
        name: "Concurrency",
        color: "pink-text-gradient",
      },
    ],
    image: placeholderImage,
    source_code_link: "https://github.com/SamuelIVX/interleave",
  },
  {
    name: "PayCore",
    description:
      "Next.js 16 payroll calculation engine with Supabase backend, featuring row-level security and role-based routing for secure, scalable payroll processing.",
    tags: [
      {
        name: "Next.js 16",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "RLS",
        color: "purple-text-gradient",
      },
    ],
    image: placeholderImage,
    source_code_link: "https://github.com/SamuelIVX/paycore",
  },
  {
    name: "Clarify",
    description:
      "Next.js 16 study tool that converts PDFs into interactive flashcards and summaries using Claude, enabling faster and more effective learning workflows.",
    tags: [
      {
        name: "Next.js 16",
        color: "blue-text-gradient",
      },
      {
        name: "Claude API",
        color: "green-text-gradient",
      },
      {
        name: "PDF Processing",
        color: "pink-text-gradient",
      },
      {
        name: "Education",
        color: "yellow-text-gradient",
      },
    ],
    image: placeholderImage,
    source_code_link: "https://github.com/SamuelIVX/clarify",
  },
  {
    name: "Full-Stack E-Commerce Web Application",
    description:
      "Developed a full-stack, responsive e-commerce web application using Next.js and a headless CMS (Wix JavaScript SDK) to showcase advanced product filtering, category management, and cart functionalities. Leveraged modern frameworks, state management with Zustand, and server-side rendering for optimal performance and scalability.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "WIX JavaScript SDK",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "yellow-text-gradient",
      },
      {
        name: "User Authentication",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/SamuelIVX/ecommerceWebsite",
  },
  {
    name: "Car Wash Simulation",
    description:
      "Final project for my Data Structures & Algorithms course that simulates a Car Wash utilizing a Queue based on Linked-Nodes and OOP applications.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Object-Oriented Programming",
        color: "green-text-gradient",
      },
      {
        name: "Data Structures & Algorithms",
        color: "pink-text-gradient",
      },
      {
        name: "Polymorphism",
        color: "purple-text-gradient",
      },
      {
        name: "Parallel Processing",
        color: "cyan-text-gradient",
      },
      {
        name: "Time Simulation",
        color: "yellow-text-gradient",
      },
      {
        name: "Probability",
        color: "orange-text-gradient",
      },
    ],
    image: carwash,
    source_code_link: "https://github.com/SamuelIVX/car_Wash_Simulation",
  },
  {
    name: "DeltaBase",
    description:
      "A Next.js web application that helps investors make data-driven decisions by comparing stocks and cryptocurrencies with real-time data and historical analysis.",
    tags: [
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "purple-text-gradient",
      },
      {
        name: "React",
        color: "cyan-text-gradient",
      },
      {
        name: "Recharts",
        color: "yellow-text-gradient",
      },
      {
        name: "DCA Simulation",
        color: "orange-text-gradient",
      },
      {
        name: "Data-Range Mapping",
        color: "red-text-gradient",
      },
      {
        name: "React-Context",
        color: "pink-text-gradient",
      },
    ],
    image: deltabase,
    source_code_link: "https://github.com/SamuelIVX/Deltabase",
  },
  {
    name: "FoodSense",
    description:
      "FoodSense is a Java Swing desktop app for scanning grocery barcodes and instantly viewing product nutrition. It supports live barcode scanning via your webcam (JavaCV + ZXing) or manual barcode entry, where responses are parsed with Gson. Built with Maven (Java 25), using javacv-platform, zxing-javase, and gson.",
    tags: [
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Java Swing",
        color: "pink-text-gradient",
      },
      {
        name: "Maven",
        color: "purple-text-gradient",
      },
      {
        name: "JavaCV",
        color: "cyan-text-gradient",
      },
      {
        name: "ZXing",
        color: "yellow-text-gradient",
      },
      {
        name: "Gson",
        color: "orange-text-gradient",
      },
      {
        name: "Producer-Consumer Pipeline",
        color: "red-text-gradient",
      },
      {
        name: "Barcode-Detections Algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: foodsense,
    source_code_link: "https://github.com/SamuelIVX/FoodSense",
  },
];

/**
 * Portfolio content arrays consumed by About / Tech / Experience / Works.
 * @example
 * import { projects } from '../constants';
 */
export { services, technologies, experiences, projects };
