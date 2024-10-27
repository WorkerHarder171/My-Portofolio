import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion"; // Import motion from framer-motion
import erd from "@/assets/E-RD.jpg";
import recything from "@/assets/recything.jpg";
import siDihimens from "@/assets/sidihimens.png";

export default function Project() {
  const img = [
    {
      id: 1,
      name: "Recything",
      src: recything,
      desc: "Recything is a website that provides information about waste management and recycling. This website was created using the React Js framework and Tailwind CSS",
    },
    {
      id: 2,
      name: "Si-Dihimens",
      src: siDihimens,
      desc: "Si-Dihimens is a website that provides information about the latest information on the world of health. This website was created using the React Js framework and Tailwind CSS",
    },
    {
      id: 3,
      name: "E-RD",
      src: erd,
      desc: "E-RD is a website that provides information about waste management and recycling. This website was created using the React Js framework and Tailwind CSS",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const truncateText = (text, wordLimit) => {
    return (
      text.split(" ").slice(0, wordLimit).join(" ") +
      (text.split(" ").length > wordLimit ? "..." : "")
    );
  };

  return (
    <div id="projects" className="container h-screen mx-auto flex flex-col gap-10 justify-center items-center">
      <p className="project text-center text-white lg:text-6xl sm:text-4xl">My Projects</p>
      <p className="text-[#7B8480] lg:text-2xl lg:mb-14 sm:mb-7 max-w-2xl text-center">
        These are my projects that I have created so far, whether from practice
        or from client projects
      </p>
      <div className="lg:w-8/12 sm:w-10/12 mx-auto overflow-hidden">
        <Slider {...settings}>
          {img.map((item, id) => (
            <div className="px-2.5" key={id}>
              <motion.div
                className="card w-full border h-[300px] rounded-[10px] border-[#2D302F] relative"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 20 }} 
                transition={{ duration: 0.5 }} 
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-[10px]"
                />
                <div className="wrapper absolute bottom-0 p-5 bg-[#333] w-full rounded-b-[10px]">
                  <h3 className="text-white text-xl">{item.name}</h3>
                  <p className="text-[#7B8480]">{truncateText(item.desc, 8)}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
