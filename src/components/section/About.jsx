import image from "@/assets/pp.jpg";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiVite, SiRedux, SiAxios } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "@/js/fadeIn";

export default function About() {
  const skills = [
    { icon: <FaHtml5 />, color: "#DB452C" },
    { icon: <FaCss3Alt />, color: "#2A47F1" },
    { icon: <FaReact />, color: "#36CDED" },
    { icon: <SiVite />, color: "#8F70FE" },
    { icon: <RiTailwindCssFill />, color: "#65D4DB" },
    { icon: <FaBootstrap />, color: "#8A53DF" },
    { icon: <SiRedux />, color: "#764ABC" },
    { icon: <SiAxios />, color: "#671DDF" },
  ];

  return (
    <>
      <motion.div
        id="about"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        // viewport={{ once: false, amount: 0.2 }}
        className="w-full flex flex-col justify-center items-center bg-[#151817] text-center relative z-0 sm:mt-24"
      >
        <motion.div
         variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}

         className="mx-auto lg:w-8/12 sm:w-10/12 border border-[#2D302F] lg:p-10 sm:p-5 grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center rounded-[10px]">
          <div className="img-group">
            <img className="mx-auto w-5/12" src={image} alt="image" />
          </div>

          <div className="text-group">
            <h1 className="text-white text-2xl font-bold uppercase my-5">
              About Me
            </h1>
            <p className="text-white text-xl mt-2 text-justify leading-loose">
              I am a frontend developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I have experience with
              HTML, CSS, JavaScript, React, and Node.js. I am also familiar with
              Git, GitHub, and VS Code. I am a quick learner and enjoy working
              on projects that challenge me to learn new things.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}

          className="wrapper lg:w-8/12 sm:w-10/12 border-b border-[#2D302F] lg:p-28 sm:p-14 relative"
        >
          <p className="lg:text-4xl sm:text-2xl text-white capitalize text-[#7B8480]">
            My Skills Frontend Developer
          </p>
          <ul className="lg:w-10/12 sm:w-11/12 list-icon text-white md:flex sm:grid sm:grid-cols-3 md:justify-evenly sm:justify-center items-center mt-20 mx-auto">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="list-item text-6xl"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
}
