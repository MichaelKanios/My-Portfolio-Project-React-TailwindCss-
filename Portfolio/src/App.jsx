import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
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
      <Navbar />
      <Hero />
      <MyExperience />
      <HardSKills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
