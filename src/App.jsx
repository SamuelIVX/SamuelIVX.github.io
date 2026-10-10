import {
  Honors,
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Footer,
  StarsCanvas,
  GradientBackground
} from "./components";

const App = () => {
  return (
    <div className="portfolio variant-B relative z-0 bg-primary">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex="-1">
        <Hero />
        <GradientBackground>
          <About />
          <Works />
          <Experience />
          <Honors />
        </GradientBackground>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
