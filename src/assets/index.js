/**
 * Asset barrel — UI icons, tech stack marks, company logos, and project
 * screenshots imported as Vite URL modules and re-exported.
 *
 * Naming convention: React components are PascalCase; non-component
 * re-exports (asset URLs, constants) are UPPER_CASE to signal they are
 * opaque build-time values, not part of the component tree.
 */

// UI / navigation
import LOGO from "./logo.png";
import MENU from "./menu.svg";
import CLOSE from "./close.svg";
import GITHUB from "./github.png";

// Tech stack icons
import CSS from "./tech/css.png";
import PYTHON from "./tech/python.svg";
import GIT from "./tech/git.png";
import HTML from "./tech/html.png";
import JAVASCRIPT from "./tech/javascript.png";
import NODEJS from "./tech/nodejs.png";
import REACTJS from "./tech/reactjs.png";
import TAILWIND from "./tech/tailwind.png";
import TYPESCRIPT from "./tech/typescript.png";
import THREEJS from "./tech/threejs.svg";
import JAVA from "./tech/java.webp";
import C from "./tech/c++.png";
import AWS from "./tech/aws.jpeg";
import MYSQL from "./tech/mysql.png";
import NEXTJS from "./tech/nextjs.svg";
import SUPABASE from "./tech/supabase.svg";
import POSTGRESQL from "./tech/postgresql.svg";
import VERCEL from "./tech/vercel.svg";
import MAVEN from "./tech/maven.svg";
import MOTION from "./tech/motion.svg";

// Company / employer icons
import AOT from "./company/aot.jpeg";
import AMAZONWEBSERVICES from "./company/amazonwebservices.jpeg";

// Project screenshots
import HEROBG from "./hero/herobg.png";
import PAYCORE from "./projects/paycore.png";
import CLARIFY from "./projects/clarify.png";
import ECOMMERCE from "./projects/ecommerce.png";
import CARWASH from "./projects/carwash.png";
import DELTABASE from "./projects/deltabase.png";
import FOODSENSE from "./projects/foodsense.png";

export {
  // UI / navigation
  LOGO,
  MENU,
  CLOSE,
  GITHUB,
  // Tech
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
  // Company
  AOT,
  AMAZONWEBSERVICES,
  // Projects / hero
  HEROBG,
  PAYCORE,
  CLARIFY,
  ECOMMERCE,
  CARWASH,
  DELTABASE,
  FOODSENSE,
};
