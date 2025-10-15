

function App() {
  

  return (
    <>
    <body className="overflow-x-hidden m-3 text-md dark:bg-slate-800 dark:text-white">
  <div className="flex justify-between items-center mx-5 xl:mx-10">
        <div>
            <img className="w-24 items-center dark:rounded-full animate-fadeInSlideRightDown" src="./images/LOGO.jpg" alt="MyLogo"/>
        </div>
       
        <div className="flex opacity-1 pl-5 ">            
            <img className="moon cursor-pointer w-6 md:w-8 xl:w-8" src="./images/moon.png" alt="moon"/>
            <img className="sun cursor-pointer ml-3 h-6 md:h-8 xl:h-8" src="./images/sun.png" alt="sun"/>            
        </div>
    
        <div className="invisible md:visible xl:visible font-fraun text-xl dark:text-white">            
            <a className="desktop_tablet_menu "href="#mk">M.K</a>
            <a className="desktop_tablet_menu" href="#experience">Experience</a>
            <a className="desktop_tablet_menu" href="#skills">Skills</a>
            <a className="desktop_tablet_menu" href="#education">Education</a>
            <a className="desktop_tablet_menu" href="#projects">Projects</a>
            <a className="desktop_tablet_menu" href="#contact">Contact</a>
        </div>
        <div className="text-xl text-gray-700 cursor-pointer ml-4 md:hidden xl:hidden block hover:text-orange-700 transition " id="open_sidebar">
                <svg className="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                    </svg>
        </div>

    </div>








       <div  className="grid md:grid-cols-2 xl:grid-cols-2 text-center justify-items-center items-center">
        <div className="">
            <div className="">
                <h1 className="text-6xl pb-2 font-fraun animate-fadeInSlideRightDown">Hi, I'm</h1>
                <h2 className="text-6xl text-rose-700 pb-4 font-fraun animate-fadeInSlideRightDown">Michael</h2>
                <p className="font-monts leading-loose">Self-taught Web and Wordpress developer.</p>
                <p className="font-monts leading-loose">It's my passion and I always</p>
                <p className="font-monts leading-loose">practice and learn something new.</p>
            </div>
            <div className="py-10  ">
                <h2 className="pb-5 font-monts font-semibold">Download my curriculum vitae:</h2>
                <div className="flex justify-between ">
                    <a className="px-3 py-3 all_button" href="#">DOWNLOAD CV</a>
                    <a className="px-6 py-3 all_button animate-fadeInSlideRightDown " href="#contact">CONTACT ME</a>
                </div>
            </div>
        </div>

        <div className="w-3/4">
            <img className="drop-shadow-2xl rounded-xl animate-fadeInSlideRightDown" src="./images/Main.jpg" alt="Main"/>
        </div>
    </div>
    </body>
     
    </>
  )
}

export default App
