import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Footer() {
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.footer
        className="text-white border-t border-[#2D302F] w-full sm:mt-20 py-24 lg:px-40 sm:px-10 grid md:grid-cols-2 sm:grid-cols-1 justify-evenly gap-10 items-center"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }} // Adjust duration for entrance effect
      >
        <div className="wrapper-text">
          <p className="lg:text-5xl sm:text-4xl capitalize font-bold">Get In Touch</p>
          <p className="lg:text-2xl sm:text-xl max-w-lg text-[#7B8480] my-5">
            Feel free to reach out to me for any queries or just to say hi!
          </p>
          <div className="wrapper-icon flex gap-5 items-center">
            <a
              href="https://www.instagram.com/dybim__/"
              className="lg:text-4xl sm:text-2xl duration-300 hover:text-[#BDBDBD]"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/dady-bima/"
              className="lg:text-4xl sm:text-2xl duration-300 hover:text-[#BDBDBD]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/WorkerHarder171"
              className="lg:text-4xl sm:text-2xl duration-300 hover:text-[#BDBDBD]"
            >
              <FaSquareGithub />
            </a>
          </div>
        </div>
        <div className="wrapper-card grid lg:grid-cols-2 md:grid-cols-1 justify-center gap-10 items-center">
          <motion.button
            onClick={() =>
              window.open("mailto:dadybima171@gmail.com", "_blank")
            }
            className="border border-[#2D302F] p-5 text-center rounded-[10px] duration-300 hover:bg-[#1E2020] md:w-[350px]"
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }} // Scale effect on tap
          >
            <i className="text-4xl">
              <MdEmail className="my-5 mx-auto " />
            </i>
            <p className="lg:text-2xl sm:text-xl">dadybima171@gmail.com</p>
          </motion.button>
          <motion.button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1e90Y3c5OexeRGw-CZgboX1UaiqGkzpsR/view?usp=sharing",
                "_blank"
              )
            }
            className="border border-[#2D302F] p-5 text-center rounded-[10px] duration-300 hover:bg-[#1E2020] md:w-[350px]"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 

          >
            <i className="text-4xl">
              <FaFileDownload className="my-5 mx-auto" />
            </i>
            <p className="lg:text-2xl sm:text-xl">My Resume</p>
          </motion.button>
        </div>
      </motion.footer>
    </>
  );
}
