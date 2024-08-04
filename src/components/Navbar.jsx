import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookOpen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { UseNavbarContext } from "../context/NavbarContext";
import { navLinks } from "../constants";

const Navbar = () => {

  const {activeLink} = UseNavbarContext()

  const [toggle, setToggle] = useState(true);
  const [scrollY, setScrollY] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleHandler = () => setToggle((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleScreenWith = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScreenWith);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScreenWith);
    };
  }, []);



  return (
    <nav
      className={`z-50 ${
        scrollY > 0.1 ? "fixed bg-[#000000D9]" : "absolute bg-transparent "
      } ${
        screenWidth < 1024 && scrollY <= 0.1 ? "bg-[#000000A6]" : null
      } w-full navbar`}
    >
      <div className="container">
        <div className="navbar-content flex justify-between items-center h-[88px]">
          <a href="" className="logo flex items-center">
            <span className="logo-icon relative h-[40px] w-[40px] bg-[#E9C46A] rounded-full text-white flex justify-center items-center">
              <FontAwesomeIcon icon={faBookOpen} />
            </span>
            <span className="text-[20px] sm:text-[28px] font-bold ms-4 text-white tracking-[1px]">
              ebook
            </span>
          </a>
          <ul className="lg:flex items-center hidden">
            {navLinks.map((navlink) => (
              <li key={navlink.id}>
                <a
                  className={`${navlink.id == activeLink && 'activeLink'} font-bold text-[12px] p-[10px] m-[10px] text-white hover:text-[#F4A261] transition-colors tracking-[1px]`}
                  href={`#${navlink.id}`}
                >
                  {navlink.title}
                </a>
              </li>
            ))}
            <li>
              <button className="ms-[20px] font-bold text-[14px] text-[#F4A261] hover:text-white border-[2px] border-[#F4A261] hover:bg-[#F4A261] transition-colors rounded-[40px] px-[20px] py-[8px]">
                Download
              </button>
            </li>
          </ul>
          {/* Responsive Navigation Menu */}
          <div className="flex lg:hidden">
            <button className="me-[20px] font-bold text-[12px] sm:text-[14px] text-[#F4A261] hover:text-white border-[2px] border-[#F4A261] hover:bg-[#F4A261] transition-colors rounded-[40px] px-[20px] py-[8px]">
              Download
            </button>
            <button onClick={toggleHandler} className="text-white text-[30px]">
              <FontAwesomeIcon icon={toggle ? faBars : faXmark} />
            </button>
            <ul
              className={`absolute ${
                screenWidth < 1024 && scrollY <= 0.1
                  ? "bg-[#000000A6]"
                  : "bg-[#000000D9]"
              }  w-full flex flex-col  left-0 top-[88px] pb-[20px] ${
                toggle && "hidden"
              }`}
            >
              <div className="container">
                {navLinks.map((navlink) => (
                  <li key={navlink.id}>
                    <a
                      className={`${navlink.id == activeLink && 'activeLink'} font-bold block text-[12px] p-[10px] text-white hover:text-[#F4A261] transition-colors tracking-[1px]`}
                      href={`#${navlink.id}`}
                    >
                      {navlink.title}
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
