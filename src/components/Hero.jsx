import React from "react";
import { heroBackground, heroImage } from "../assets/images";
import { UseNavbarContext } from "../context/NavbarContext";

const Hero = () => {

  const {sectionsRefs : {home}} = UseNavbarContext()

  return (
    <div id="home" ref={home} style={{backgroundImage : `url(${heroBackground})`}} className="lg:h-[75vh] bg-no-repeat bg-cover bg-center relative hero">
      <div className="container h-full">
        <div className="flex flex-wrap lg:pt-0 pt-[100px] sm:pt-[150px] items-center h-full z-10 relative">
          <div className="text-box lg:w-1/2 w-full mb-[20px] lg:mb-[120px]">
            <h6 className="text-[20px] text-[#E9C46A] mb-[8px]">
              Introducing ebook
            </h6>
            <h1 className="text-[30px] sm:text-[42px] font-bold text-white leading-tight mb-[24px]">
              ebook landing page for professionals
            </h1>
            <div className="hero-links flex items-center">
              <button className="rounded-[100px] px-[20px] py-[10px] text-[12px] sm:text-[14px] font-semibold text-white bg-[#F4A261] hover:bg-[#E76F51] transition-colors me-[15px]">
                Discover More
              </button>
              <a
                className="text-white hover:text-[#E76F51] sm:text-[16px] text-[14px] transition-colors"
                href=""
              >
                Meet the Author
              </a>
            </div>
          </div>
          <div className="img-box lg:w-1/2 w-full">
            <img
              className="relative mx-auto xl:top-[50px]  w-[90%]"
              src={heroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
