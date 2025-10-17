import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HardSKills from "./components/HardSkills";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <body className="overflow-x-hidden m-3 text-md dark:bg-slate-800 dark:text-white">
        <Navbar />
        <Hero />
        <Experience />
        <HardSKills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </body>
    </>
  );
}

export default App;
