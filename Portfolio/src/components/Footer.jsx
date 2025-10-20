const Footer = () => {
  return (
    <div className="dark:bg-slate-400 dark:text-white grid grid-cols-1 md:grid-cols-6 xl:grid-cols-6 m-2  bg-stone-100 drop-shadow-xl rounded-lg py-5 font-monts">
      {/* Social Icons */}
      <div className="col-span-2 flex justify-center items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kaniosmichael/"
        >
          <img
            className="w-10 hover:scale-110 duration-200"
            src="images/linkedin.png"
            alt="LinkedIn"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MichaelKanios"
        >
          <img
            className="w-10 ml-4 hover:scale-110 duration-200"
            src="images/github.png"
            alt="GitHub"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/mkanios77/"
        >
          <img
            className="w-10 ml-4 hover:scale-110 duration-200"
            src="images/instagram.png"
            alt="Instagram"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=100037599635230"
        >
          <img
            className="w-10 ml-4 hover:scale-110 duration-200"
            src="images/facebook.png"
            alt="Facebook"
          />
        </a>
      </div>

      {/* Navigation */}
      <div className="md:col-start-3 md:col-end-7 xl:col-start-3 xl:col-end-7 text-center self-center font-fraun text-base md:text-l xl:text-xl ">
        <nav className="flex flex-wrap justify-center gap-4">
          <a className="desktop_tablet_menu" href="#mk">
            M.K
          </a>
          <a className="desktop_tablet_menu" href="#experience">
            Experience
          </a>
          <a className="desktop_tablet_menu" href="#skills">
            Skills
          </a>
          <a className="desktop_tablet_menu" href="#education">
            Education
          </a>
          <a className="desktop_tablet_menu" href="#projects">
            Projects
          </a>
          <a className="desktop_tablet_menu" href="#contact">
            Contact
          </a>
          <a className="desktop_tablet_menu" href="#contact">
            Credits
          </a>
        </nav>

        <p className="mt-4 text-xs italic">
          © 2025. All rights reserved by Michael Kanios
        </p>
      </div>
    </div>
  );
};

export default Footer;
