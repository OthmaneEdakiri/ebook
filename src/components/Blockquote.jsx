import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Blockquote = () => {
  return (
    <blockquote className="p-[40px] bg-[#F0F8FF] text-center my-[30px] rounded-[8px]">
      <FontAwesomeIcon
        className="h-[40px] w-[40px] text-[#F4A261]"
        icon={faQuoteLeft}
      />
      <p className="text-[22px] font-semibold text-[#000000]">
        Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm
        tokito
      </p>
    </blockquote>
  );
};

export default Blockquote;
