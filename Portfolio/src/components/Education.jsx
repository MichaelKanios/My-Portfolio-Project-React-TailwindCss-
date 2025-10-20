import { motion } from "framer-motion";
const Education = () => {
  return (
    <>
      <h1 id="education" className="titlesmini">
        Education
      </h1>
      <div className=" grid grid-cols-1 md:flex md:justify-around bg-stone-100 drop-shadow-xl rounded-lg font-monts text-base justify-items-center p-4 glass">
        <div className=" text-gray-100 py-16 px-6">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-10 text-orange-500 border-1 rounded-xl p-4 glass">
            Public Vocational Training Institute
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              className="rounded-lg md:skew-4 xl:skew-4 hover:duration-500 hover:origin-bottom my-4"
              src="./images/education.jpg"
              alt="Education"
            />
            <h3 className="text-xl font-semibold text-orange-700 mb-3 ">
              Expert in information technology applications
            </h3>

            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              <li>
                Operating System installation and use: Windows, Linux, Mac
              </li>
              <li>Troubleshooting and maintaining personal computer systems</li>
              <li>Software usage and management across various environments</li>
              <li>Network setup and administration</li>
              <li>Database design and management</li>
              <li>
                Visual programming and application development using Visual
                Studio .NET
              </li>
              <li>Excellent command of Microsoft Office and Visual Studio</li>
              <li>
                Use of multimedia technologies for interactive applications
              </li>
            </ul>
          </motion.div>
        </div>

        <div className=" text-gray-100 py-16 px-6">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-10 text-orange-500 border-1 rounded-xl p-4 glass">
            Udemy Courses
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              className="rounded-lg md:skew-4 xl:skew-4 hover:duration-500 hover:origin-bottom my-4"
              src="./images/Udemy.jpg"
              alt="Udemy"
            />
            <h3 className="text-xl font-semibold text-orange-700 mb-3">
              Completed Courses
            </h3>

            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              <li>Tailwind CSS 3 | Learn By Building Multiple Projects A-Z</li>
              <li>WordPress Theme Development from Scratch 2.0</li>
              <li>WooCommerce Theme Development: Advanced Course</li>
              <li>Creating WordPress Plugins The Right Way</li>
              <li>PHP for Beginners</li>
              <li>
                Laravel 9 - Build Complete Multi Vendor Ecommerce Project A-Z
              </li>
              <li>The Web Developer Bootcamp 2023</li>
              <li>
                CSS - The Complete Guide 2023 (incl. Flexbox, Grid &amp; Sass)
              </li>
              <li>Build Responsive Real-World Websites with HTML and CSS</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Education;
