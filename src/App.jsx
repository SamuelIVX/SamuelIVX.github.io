/**
 * Root portfolio layout — section stack without client-side routing.
 * (Navbar → Hero → About → Experience → Tech → Works → Contact + StarsCanvas).
 */
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  GradientBackground,
} from "./components";

/**
 * Single-page portfolio shell with hash-section navigation.
 * @returns {JSX.Element} The portfolio layout.
 * @example
 * // Mounted from main.jsx via createRoot(...).render(<App />)
 * <App />
 */
const App = () => {
  return (
    <div id="main-content" className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <GradientBackground>
        <About />
        <Experience />
        <Tech />
        <Works />
      </GradientBackground>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
