import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <footer className="text-white border-t border-[#2D302F] w-full py-24 px-40 flex justify-evenly items-center ">
        <div className="wrapper-text">
          <p className="text-5xl capitalize font-bold">Get In Touch</p>
          <p className="text-2xl max-w-lg text-[#7B8480] my-5">
            Feel free to reach out to me for any queries or just to say hi!
          </p>
          <div className="wrapper-icon flex gap-5 items-center">
            <a href="https://www.instagram.com/dybim__/" className="text-4xl">
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/dady-bima/"
              className="text-4xl"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/WorkerHarder171" className="text-4xl">
              <FaSquareGithub />
            </a>
            <i></i>
          </div>
        </div>
        <div className="wrapper-card flex justify-center gap-10 items-center ">
          <button
          onClick={() =>
              window.open(
                "mailto:dadybima171@gmail.com",
                "_blank"
              )
            }
           className="border border-[#2D302F] p-5 text-center rounded-[10px] duration-300 hover:bg-[#1E2020] w-[350px]">
            <i className="text-4xl">
              <MdEmail className="my-5 mx-auto" />
            </i>
            <p className="text-2xl">dadybima171@gmail.com</p>
          </button>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1e90Y3c5OexeRGw-CZgboX1UaiqGkzpsR/view?usp=sharing",
                "_blank"
              )
            }
            className="border border-[#2D302F] p-5 text-center rounded-[10px] duration-300 hover:bg-[#1E2020] w-[350px]"
          >
            <i className="text-4xl">
              <FaFileDownload className="my-5 mx-auto" />
            </i>
            <p className="text-2xl">My Resume</p>
          </button>
        </div>
      </footer>
    </>
  );
}
