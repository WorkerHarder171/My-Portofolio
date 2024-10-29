import { SlArrowDown } from "react-icons/sl";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Jumbotron() {
  useEffect(() => {
    if (window?.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <>
      <div id="particles-js" className="absolute inset-0 my-auto mx-auto z-10" />

      <div id="home" className="h-screen flex flex-col justify-center items-center relative z-0">
        <div className="text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:text-7xl md:text-4xl sm:text-2xl capitalize leading-snug font-roboto mx-auto lg:pt-12 sm:pt-0"
          >
            Hey There! <br /> I'm Dady Bima Nur Sejati. <br /> A Frontend React
            Developer. <br /> Based in Temanggung
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="lg:text-2xl md:text-lg sm:text-sm text-[#828A88] lg:my-10 sm:my-5 lg:max-w-3xl sm:max-w-[280px] mx-auto"
          >
            I'm a self-taught frontend developer who loves to build beautiful
            and functional websites.
          </motion.p>
        </div>
      </div>

      <div className="text-center sm:mt-10 absolute lg:bottom-10 sm:bottom-16 z-10 mx-auto w-full">
        <Link to="get-in-touch" smooth={true} duration={500}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="capitalize text-white px-10 py-2.5 border border-white rounded-full duration-300 hover:bg-white hover:text-[#333]"
          >
            Get in Touch
          </motion.button>
        </Link>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="text-white text-3xl mt-10"
        >
          <SlArrowDown className="mx-auto"/>
        </motion.div>
      </div>
    </>
  );
}
