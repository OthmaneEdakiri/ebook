import React from "react";
import { aboutImg } from "../assets/images";

const About = () => {
  return (
    <div className="about sm:py-[100px] py-[30px] lg:mt-[48px] mt-0">
      <div className="container">
        <div className="about-content flex lg:flex-row flex-col">
          <div className="image-box">
            <img src={aboutImg} alt="" />
          </div>
          <div className="text-box pt-[40px] lg:px-[60px] px-[20px]">
            <h6 className="lg:text-[20px] text-[18px] text-[#E9C46A] mb-[8px]">
              Modern & Creative
            </h6>
            <h2 className="text-[36px] text-[#000000] font-bold mb-[24px]">
              About The Book
            </h2>
            <p className="text-[#717275] mb-[16px] leading-6">
              Lorem ipsum dolor sit amet{" "}
              <span className="text-[#E76F51]">consectetur</span> adipisicing
              elit. Totam ullam at beatae eos nam, recusandae dolorem hic saepe
              illo voluptatibus ipsum debitis dolore id dignissimos quas.
            </p>
            <p className="text-[#717275] mb-[16px] leading-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, fuga
              voluptatem. Consequatur suscipit quo tempore reprehenderit
              laboriosam fugit saepe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
