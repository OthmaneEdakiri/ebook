import React from "react";
import { thebook1 } from "../assets/images";
import { UseNavbarContext } from "../context/NavbarContext";

const Author = () => {

  const {sectionsRefs:{author}} = UseNavbarContext()

  return (
    <div ref={author} className="author sm:py-[100px] py-[30px] relative overflow-hidden ">
      <span className="absolute top-[40px] left-[20px] h-[115px] w-[115px] rounded-full bg-[#E9C46A]"></span>
      <span className="absolute bottom-[-84px] left-[100px] h-[168px] w-[168px] rounded-full bg-[#E9C46A]"></span>
      <span className="absolute bottom-[10px] left-[-30px] h-[105px] w-[105px] rounded-full bg-[#E9C46A]"></span>
      <div className="container">
        <div className="author-content flex flex-wrap gap-y-[30px]">
          <div className="lg:w-1/2 w-full">
            <div className="img-box sm:w-[350px] sm:h-[350px] w-[300px] h-[300px] rounded-full overflow-hidden mx-auto border-[#E9C46A] sm:border-[10px] border-[8px] z-10 relative">
              <img
                className="object-cover w-full h-full"
                src={thebook1}
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <h6 className="lg:text-[20px] text-[18px] text-[#E9C46A] mb-[3px]">
              Meet Author
            </h6>
            <h2 className="text-[36px] text-[#000000] font-bold mb-[20px]">
              Prof. Sophia
            </h2>
            <p className="text-[#717275] mb-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              porro omnis illo temporibus, sunt nesciunt. Illo accusamus.
            </p>
            <p className="text-[#717275] mb-[16px]">
              Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              porro omnis illo temporibus, sunt nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
