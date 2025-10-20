import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import HardSKills from "./components/HardSkills";
import Hero from "./components/Hero";
import MyExperience from "./components/MyExperience";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <body className="overflow-x-hidden m-3 text-md dark:bg-slate-800 dark:text-white">
        <Navbar />
        <Hero />
        <MyExperience />
        <HardSKills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </body>
    </>
  );
}

export default App;
