import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
    
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 left-0 shadow-sm z-50 glass">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-3">
        {/* Logo */}
        
        <div>
          <img
            className="w-16 xl:w-24 rounded-full "
            src="./images/LOGO.jpg"
            alt="MyLogo"
          />
        </div>

        {/* Dark/Light icons 
        <div className="flex items-center space-x-3">
          <img
            className="cursor-pointer w-6 md:w-8"
            src="./images/moon.png"
            alt="moon"
          />
          <img
            className="cursor-pointer w-6 md:w-8"
            src="./images/sun.png"
            alt="sun"
          />
        </div>*/}

        {/* Desktop Menu */}
        <nav className="hidden md:flex font-fraun text-lg dark:text-white space-x-6 ">
          <a href="#mk" className="desktop_tablet_menu">M.K</a>
          <a href="#experience" className="desktop_tablet_menu ">Experience</a>
          <a href="#skills" className="desktop_tablet_menu ">Skills</a>
          <a href="#education" className="desktop_tablet_menu ">Education</a>
          <a href="#projects" className="desktop_tablet_menu ">Projects</a>
          <a href="#contact" className="desktop_tablet_menu ">Contact</a>
          </nav>
        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-rose-400 text-2xl cursor-pointer"
            title="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 transition-all duration-500 md:hidden z-40
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)} // Κλείνει όταν πατάς έξω
      >
        {/* Sidebar */}
        <div
          className={`fixed top-0 w-72 h-full bg-white shadow-md flex flex-col transition-all duration-500 p-6
          ${menuOpen ? "left-0" : "-left-80"}`}
          onClick={(e) => e.stopPropagation()} // Αποτρέπει κλείσιμο όταν πατάς μέσα
        >
          <img
            className="w-24 self-center mb-6"
            src="./images/LOGO.jpg"
            alt="MyLogo"
          />

          {/* Menu Links */}
          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="mobile_menu text-slate-700 hover:bg-red-400 hover:text-white p-3 rounded-xl transition duration-200"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="mobile_menu text-slate-700 hover:bg-red-400 hover:text-white p-3 rounded-xl transition duration-200"
          >
            Skills
          </a>
          <a
            href="#education"
            onClick={() => setMenuOpen(false)}
            className="mobile_menu text-slate-700 hover:bg-red-400 hover:text-white p-3 rounded-xl transition duration-200"
          >
            Education
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="mobile_menu text-slate-700 hover:bg-red-400 hover:text-white p-3 rounded-xl transition duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mobile_menu text-slate-700 hover:bg-red-400 hover:text-white p-3 rounded-xl transition duration-200"
          >
            Contact
          </a>

          {/* Social Icons */}
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/kaniosmichael/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:scale-110 duration-300 w-8"
                src="images/linkedin.png"
                alt="Linkedin"
              />
            </a>
            <a
              href="https://github.com/MichaelKanios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:scale-110 duration-300 w-8"
                src="images/github.png"
                alt="Github"
              />
            </a>
            <a
              href="https://www.instagram.com/mkanios77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:scale-110 duration-300 w-8"
                src="images/instagram.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/share/1ERfMj2L4Z/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:scale-110 duration-300 w-8"
                src="images/facebook.png"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
