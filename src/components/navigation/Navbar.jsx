import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const menuItems = [
    { text: "Home", link: "home" },
    { text: "About", link: "about" },
    { text: "Experience", link: "experience" },
    { text: "Projects", link: "projects" },
    { text: "Get In Touch", link: "get-in-touch" },
  ];

  return (
    <div className="flex justify-between items-center w-full px-4 sm:px-8 md:px-16 lg:px-32 py-6 border-b border-[#2D302F] bg-[#151817] fixed z-20">
      <a href="#home" className="navbar-brand text-3xl font-semibold text-[#FDFDFD]">
        dybim__
      </a>
      
      {/* Desktop Menu */}
      <ul className="hidden lg:flex navbar-nav w-7/12 justify-evenly items-center text-[#FDFDFD]">
        {menuItems.map((item, index) => (
          <li className="nav-list" key={index}>
            <Link
              to={item.link}
              smooth={true}
              duration={500}
              className={`nav-item font-semibold cursor-pointer transition duration-300 
                ${
                  item.text === "Get In Touch"
                    ? "border border-[#2D302F] rounded-[10px] p-4 hover:bg-[#1E2020] hover:border-transparent"
                    : "relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                }`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Toggle Button for Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setToggleNavbar(!toggleNavbar)}>
          {toggleNavbar ? <FaTimes className="text-2xl text-white" /> : <FaBars className="text-2xl text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${toggleNavbar ? "block" : "hidden"} lg:hidden fixed top-0 left-0 w-full h-full bg-[#151817] z-30`}>
        <ul className="flex flex-col items-center text-[#FDFDFD] p-6 space-y-4 pt-20">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                className="font-semibold text-lg cursor-pointer transition duration-300 hover:text-green-600"
                onClick={() => setToggleNavbar(false)}  // Close menu on click
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
