import { SlArrowDown } from "react-icons/sl";
import { useEffect } from "react";

export default function Jumbotron() {
  useEffect(() => {
    if (window?.particlesJS) {
      window.particlesJS('particles-js', {
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
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <>
      <div
        id="particles-js"
        className="absolute inset-0 my-auto mx-auto z-10"
      />

      <div id="home" className="h-screen flex flex-col justify-center items-center relative z-0">
        <div className="text-center text-white">
          <p className="lg:text-7xl md:text-4xl sm:text-2xl capitalize leading-snug font-roboto mx-auto pt-12">
            Hey There! <br /> I'm Dady Bima Nur Sejati. <br /> A Frontend React
            Developer. <br /> Based in Temanggung
          </p>
          <p className="lg:text-2xl md:text-lg sm:text-sm text-[#828A88] my-10 lg:max-w-3xl sm:max-w-[280px] mx-auto">
            I'm a self-taught frontend developer who loves to build beautiful
            and functional websites.
          </p>
        </div>
      </div>

      <div className="text-center lg:mt-10 sm:mt-20 absolute lg:bottom-10 sm:bottom-24 z-10 mx-auto w-full">
        <button className="capitalize text-white px-10 py-2.5 border border-white rounded-full duration-300 hover:bg-white hover:text-[#333]">
          Get in Touch
        </button>
        <SlArrowDown className="text-white text-3xl mt-10 mx-auto" />
      </div>
    </>
  );
}
