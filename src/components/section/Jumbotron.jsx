import { SlArrowDown } from "react-icons/sl";
import { useEffect } from "react";

export default function Jumbotron() {
  useEffect(() => {
    if (window?.particlesJS) {
      window.particlesJS.load("particles-js", "/particlesConfig.json", () => {
        console.log("Particles.js config loaded");
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
          <p className="text-7xl capitalize leading-snug font-roboto mx-auto pt-12">
            Hey There! <br /> I'm Dady Bima Nur Sejati. <br /> A Frontend React
            Developer. <br /> Based in Temanggung
          </p>
          <p className="text-2xl text-[#828A88] my-10 max-w-3xl mx-auto">
            I'm a self-taught frontend developer who loves to build beautiful
            and functional websites.
          </p>
        </div>
      </div>

      <div className="text-center mt-10 absolute bottom-10 z-10 mx-auto w-full">
          <button className="capitalize text-white px-10 py-2.5 border border-white rounded-full duration-300 hover:bg-white hover:text-[#333]">
            Get in Touch
          </button>
          <SlArrowDown className="text-white text-3xl mt-10 mx-auto" />
        </div>
        
    </>
  );
}
