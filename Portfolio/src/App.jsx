import Experience from "./components/Experience"
import HardSKills from "./components/HardSkills"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
    <body className="overflow-x-hidden m-3 text-md dark:bg-slate-800 dark:text-white">
    <Navbar />
    <Hero/>    
    <Experience/>   
    <HardSKills/>
    </body>
     
    </>
  )
}

export default App
