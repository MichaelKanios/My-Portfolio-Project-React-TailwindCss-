const Hero =()=>{
    return(
        <div  className="grid md:grid-cols-2 xl:grid-cols-2 text-center justify-items-center items-center mt-22">
        <div className="">
            <div className="">
                <h1 className="text-5xl xl:text-6xl pb-2 font-fraun animate-fadeInSlideRightDown">Hi, I'm</h1>
                <h2 className="text-5xl xl:text-6xl text-rose-700 pb-4 font-fraun animate-fadeInSlideRightDown">Michael</h2>
                <p className="font-monts leading-loose">Self-taught React and Wordpress developer.</p>
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
        <div className="w-2/3 xl:w-3/4">
            <img className="drop-shadow-2xl rounded-xl animate-fadeInSlideRightDown" src="./images/Main.jpg" alt="Main"/>
        </div>
    </div>
    )
}
export default Hero