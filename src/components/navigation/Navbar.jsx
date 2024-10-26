export default function Navbar() {
    return (
      <>
        <div className="flex justify-between items-center w-full px-[20em] py-6 border-b border-[#2D302F] bg-[#151817] fixed z-20">
          <div className="navbar-brand text-3xl font-semibold text-[#FDFDFD]">
            dybim__
          </div>
          <ul className="navbar-nav w-7/12 flex justify-evenly items-center text-[#FDFDFD]">
            <li className="nav-list">
              <a className="nav-item font-semibold" href="#">
                Home
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-item font-semibold" href="#">
                About
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-item font-semibold" href="#">
                Experience
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-item font-semibold" href="#">
                Projects
              </a>
            </li>
            <li className="nav-list">
              <a
                className="nav-item font-semibold p-3 border border-[#2D302F] rounded-[10px] duration-300 hover:bg-[#1E2020]"
                href="#"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
  