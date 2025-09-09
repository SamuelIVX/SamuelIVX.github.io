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
  threejs,
  // java,
  c,
  aws,
  mysql,
  AOT,
  amazonwebservices,
  admin,
  carwash,
  ecommerce,
  mL,
} from "../assets";

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
    title: "Software Engineer",
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
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: c,
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
    name: "ThreeJs",
    icon: threejs,
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
    name: 'MySql',
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
    title: "Software Development Engineer Intern",
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
];

const projects = [
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
    name: "Full-Stack Admin Dashboard Web Application",
    description:
      "Designed a full-stack Admin Dashboard with Next.js, featuring dynamic data visualization, user management, and role-based authentication. Integrated responsive design and state management to ensure a seamless and secure user experience for administrators.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "User Authentication",
        color: "orange-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/SamuelIVX/AdminDashboard",
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
    name: "Telecom ML Prediction Model",
    description:
      "Led a team to build and train a supervised learning model for a telecom company, aimed at predicting future outcomes and driving data-driven decision-making.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Juypter Notebooks",
        color: "pink-text-gradient",
      },
      {
        name: "Data Curation",
        color: "purple-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "cyan-text-gradient",
      },
      {
        name: "Principal Component Analysis",
        color: "yellow-text-gradient",
      },
      {
        name: "Hyperparameter Optimization",
        color: "orange-text-gradient",
      },
      {
        name: "Random Forest",
        color: "red-text-gradient",
      },
      {
        name: "Gradient Boosting",
        color: "pink-text-gradient",
      },
    ],
    image: mL,
    source_code_link: "https://github.com/SamuelIVX/machineLearningModel",
  },
];

export { services, technologies, experiences, projects };
