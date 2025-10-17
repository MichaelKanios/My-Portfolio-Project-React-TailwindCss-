const Education = () => {
  return (
    <>
      <h1 id="education" className="titles">
        Education
      </h1>
      <div
        className="dark:bg-slate-600 dark:text-white grid grid-cols-1 
xl:flex mx-4 bg-stone-100 drop-shadow-xl rounded-lg font-monts text-base justify-items-center p-4 mb-10 glass"
      >
        <div className="md:w-3/4  xl:w-1/2">
          <img
            className="rounded-lg md:skew-4 xl:skew-4 hover:duration-500 hover:origin-bottom"
            src="./images/education.jpg"
            alt="Education"
          />
        </div>
        <div className=" xl:w-1/2 text-center self-center ">
          <p className="font-semibold text-center text-base md:text-lg xl:text-lg pt-2">
            Public Vocational Training Institute "Athens"
          </p>
          <p className="italic text-center pb-4">
            Expert in information technology applications
          </p>
          <p className="xl:leading-loose p-2">
            Operating System installation and use: Windows, Linux, Mac
          </p>
          <p className="xl:leading-loose p-2">
            Connection and installation of external and internal devices in the
            system.
          </p>
          <p className="xl:leading-loose p-2">
            Microsoft office applications Word,Excel,Power Point,Access
          </p>
          <p className="xl:leading-loose p-2">
            Entry level of programming C++, Visual Basic,SQL
          </p>
        </div>
      </div>

      <div
        className="dark:bg-slate-600 dark:text-white grid grid-cols-2  xl:flex mx-4 bg-stone-100 drop-shadow-xl 
rounded-lg font-monts text-base justify-items-center p-4 glass"
      >
        <div className="text-center xl:w-1/2 col-span-2 self-center">
          <p className="font-semibold text-base md:text-lg xl:text-lg">
            Udemy Courses
          </p>
          <p className="xl:leading-loose p-1">
            Tailwind CSS 3 | Learn By Building Multiple Projects A-Z
          </p>
          <p className="xl:leading-loose p-1">
            WordPress Theme Development from Scratch 2.0
          </p>
          <p className="xl:leading-loose p-1">
            WooCommerce Theme Development: Advanced Course
          </p>
          <p className="xl:leading-loose p-1">
            Creating WordPress Plugins The Right Way
          </p>
          <p className="xl:leading-loose p-1">PHP for Beginners</p>
          <p className="xl:leading-loose p-1">
            Laravel 9 -Build Complete Multi Vendor Ecommerce Project A-Z
          </p>
          <p className="xl:leading-loose p-1">
            The Web Developer Bootcamp 2023
          </p>
          <p className="xl:leading-loose p-1">
            CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass)
          </p>
          <p className="xl:leading-loose p-1">
            Build Responsive Real-World Websites with HTML and CSS
          </p>
        </div>
        <div className=" md:w-3/4 xl:w-1/2 col-span-2 row-start-1 ">
          <img
            className="rounded-lg md:skew-y-4 xl:skew-y-4 hover:duration-500 hover:origin-top  "
            src="./images/Udemy.jpg"
            alt="Udemy"
          />
        </div>
      </div>
    </>
  );
};

export default Education;
