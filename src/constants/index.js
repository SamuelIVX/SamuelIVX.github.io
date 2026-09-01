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
  AOT,
  AMAZONWEBSERVICES,
  PAYCORE,
  CLARIFY,
  ECOMMERCE,
  CARWASH,
  DELTABASE,
  FOODSENSE,
} from "../assets";
import { PLACEHOLDER_IMAGE } from "./placeholder";

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
    icon: AMAZONWEBSERVICES,
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
    icon: AMAZONWEBSERVICES,
    iconBg: "#383E56",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Developed a comprehensive AWS bill computation analytics platform by building an automated Python-based data retrieval and query system, reducing ticket resolution time by >83%.",
      "Engineered Model Context Protocol(MCP) Server integration that unified multiple complex disparate billing tools into a single AI - powered interface, eliminating context switching overhead by > 85 %.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon Web Services (AWS)",
    icon: AMAZONWEBSERVICES,
    iconBg: "#383E56",
    date: "Jun 2026 - Aug 2026",
    points: [
      "Designed and deployed 3 read-only APIs on an Apache Iceberg/Parquet data lake with paginated, snapshot-consistent cursors and column projections, reducing end-to-end query latency from 52s to under 2s and per-query I/O by up to 60% across datasets with 200K+ rows through tiered caching, file-pruning, and sort-compaction optimizations serving granular billing breakdowns to enterprise customers.",
      "Developed a Cloudscape demo dashboard backed by a serverless API Gateway + Lambda proxy with SigV4 authentication, enabling stakeholders to validate billing breakdowns across all 3 API surfaces end-to-end.",
      "Owned the feature end-to-end from data modeling through production deployment: API design, Iceberg read engine, CDK infrastructure, CloudWatch observability, and comprehensive hand-off documentation.",
    ],
  },
];

const projects = [
  {
    name: "Interleave",
    description:
      "Explicit-state model checker for multithreaded programs. Implements POR-to-DPOR optimizations to efficiently detect concurrency bugs in Java.",
    tags: [
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Model Checker",
        color: "blue-text-gradient",
      },
      {
        name: "DPOR",
        color: "pink-text-gradient",
      },
      {
        name: "Concurrency",
        color: "cyan-text-gradient",
      },
    ],
    image: PLACEHOLDER_IMAGE,
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
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "purple-text-gradient",
      },
      {
        name: "RLS",
        color: "cyan-text-gradient",
      },
      {
        name: "Payroll",
        color: "yellow-text-gradient",
      },
    ],
    image: PAYCORE,
    source_code_link: "https://github.com/SamuelIVX/paycore",
    live_demo_link: "https://paycorehq.vercel.app/",
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
        name: "Flashcards",
        color: "purple-text-gradient",
      },
      {
        name: "Study Tool",
        color: "yellow-text-gradient",
      },
      {
        name: "Education",
        color: "cyan-text-gradient",
      },
    ],
    image: CLARIFY,
    source_code_link: "https://github.com/SamuelIVX/clarify",
    live_demo_link: "https://clarify-study.vercel.app/",
  },
  {
    name: "Full-Stack E-Commerce Web Application",
    description:
      "Full-stack e-commerce platform with product filtering, category management, and cart functionality. Built with Next.js, TailwindCSS, Zustand state management, and server-side rendering.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Zustand",
        color: "purple-text-gradient",
      },
      {
        name: "SSR",
        color: "yellow-text-gradient",
      },
    ],
    image: ECOMMERCE,
    source_code_link: "https://github.com/SamuelIVX/ecommerceWebsite",
  },
  {
    name: "Car Wash Simulation",
    description:
      "Discrete-event simulation of a car wash queue system. Implements linked-node queue data structures with object-oriented design to model real-time service flow.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Data Structures & Algorithms",
        color: "green-text-gradient",
      },
      {
        name: "Polymorphism",
        color: "pink-text-gradient",
      },
      {
        name: "Queue",
        color: "purple-text-gradient",
      },
      {
        name: "Simulation",
        color: "yellow-text-gradient",
      },
    ],
    image: CARWASH,
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
        name: "Stocks",
        color: "orange-text-gradient",
      },
      {
        name: "Cryptocurrency",
        color: "pink-text-gradient",
      },
      {
        name: "Real-time Data",
        color: "blue-text-gradient",
      },
    ],
    image: DELTABASE,
    source_code_link: "https://github.com/SamuelIVX/Deltabase",
  },
  {
    name: "FoodSense",
    description:
      "Desktop nutrition lookup tool that scans grocery barcodes via webcam or manual entry. Uses JavaCV and ZXing for real-time barcode detection, with Gson-parsed product data.",
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
        name: "Barcode Scanning",
        color: "blue-text-gradient",
      },
      {
        name: "Webcam",
        color: "pink-text-gradient",
      },
      {
        name: "Desktop App",
        color: "purple-text-gradient",
      },
    ],
    image: FOODSENSE,
    source_code_link: "https://github.com/SamuelIVX/FoodSense",
  },
];

/**
 * Portfolio content arrays consumed by About / Tech / Experience / Works.
 * @example
 * import { projects } from '../constants';
 */
export { technologies, experiences, projects };
