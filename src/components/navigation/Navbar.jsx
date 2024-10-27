import { Link } from "react-scroll";

export default function Navbar() {
  const menuItems = [
    { text: "Home", link: "home" },
    { text: "About", link: "about" },
    { text: "Experience", link: "experience" },
    { text: "Projects", link: "projects" },
    { text: "Get In Touch", link: "get-in-touch" },
  ];

  return (
    <div className="flex justify-between items-center w-full px-[20em] py-6 border-b border-[#2D302F] bg-[#151817] fixed z-20">
      <div className="navbar-brand text-3xl font-semibold text-[#FDFDFD]">
        dybim__
      </div>
      <ul className="navbar-nav w-7/12 flex justify-evenly items-center text-[#FDFDFD]">
        {menuItems.map((item, index) => (
          <li className="nav-list" key={index}>
            <Link
              to={item.link}
              smooth={true}
              duration={500}
              className={`nav-item font-semibold cursor-pointer duration-300 ${
                item.text === "Get In Touch"
                  ? "border border-[#2D302F] rounded-[10px] p-4 hover:bg-[#1E2020]"
                  : ""
              }`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
