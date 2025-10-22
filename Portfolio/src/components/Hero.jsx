import { useEffect } from "react";
import { useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { motion } from "motion/react";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  // animation loop
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const backgroundImage = useMotionTemplate`
  radial-gradient(125% 125% at 50% 50%, ${color}, transparent 70%)`;
  const border = useMotionTemplate`1px sokid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="grid md:grid-cols-2 xl:grid-cols-2 text-center rounded-xl justify-items-center items-center mt-12 p-6"
    >
      <div className="">
        <div className="">
          <h1 className="text-5xl xl:text-6xl pb-2 font-fraun animate-fadeInSlideRightDown">
            Hi, I'm
          </h1>
          <h2 className="text-5xl xl:text-6xl text-rose-700 pb-4 font-fraun animate-fadeInSlideRightDown">
            Michael
          </h2>
          <p className="font-monts leading-loose">
            Self-taught React and Wordpress developer.
          </p>
          <p className="font-monts leading-loose">
            It's my passion and I always
          </p>
          <p className="font-monts leading-loose">
            practice and learn something new.
          </p>
        </div>
        <div className="py-10  ">
          <h2 className="pb-5 font-monts font-semibold">
            Download my curriculum vitae:
          </h2>
          <div className="flex justify-between ">
            <button className="px-3 py-3 all_button" href="#contact">
              DOWNLOAD CV
            </button>
            <a href="#contact">
   <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.958,
              }}
              className="px-6 py-3 all_button animate-fadeInSlideRightDown "
              href="#contact"
            >
              CONTACT ME
            </motion.button>

            </a>
         
          </div>
        </div>
      </div>
      <div className="w-2/3 xl:w-3/4">
        <img
          className="drop-shadow-2xl rounded-full animate-fadeInSlideRightDown"
          src="./images/Main2.png"
          alt="Main"
        />
      </div>
    </motion.section>
  );
};
export default Hero;
