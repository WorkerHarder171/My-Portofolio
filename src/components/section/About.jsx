import image from "@/assets/pp.jpg";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiVite, SiRedux, SiAxios } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <motion.div
        id="about"
        className="w-full flex flex-col justify-center items-center bg-[#151817] text-center relative z-0 sm:mt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }} 
      >
        <motion.div
          className="mx-auto lg:w-8/12 sm:w-10/12 border border-[#2D302F] lg:p-10 sm:p-5 grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center rounded-[10px]"
          variants={containerVariants}
        >
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
          className="wrapper lg:w-8/12 sm:w-10/12 border-b border-[#2D302F] lg:p-28 sm:p-14 relative"
          variants={containerVariants}
        >
          <p className="lg:text-4xl sm:text-2xl text-white capitalize text-[#7B8480]">
            My Skills Frontend Developer
          </p>
          <ul className="lg:w-10/12 sm:w-11/12 list-icon text-white md:flex sm:grid sm:grid-cols-3 md:justify-evenly sm:justify-center items-center mt-20 mx-auto">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="list-item text-6xl"
                style={{ color: skill.color }}
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, 
                }}
              >
                {skill.icon}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
}
