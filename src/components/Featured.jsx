import React from "react";
import {  avatar1, avatar2, avatar3, avatar4 } from "../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Featured = () => {
  return (
    <div className="bg-[#F4A261] w-full">
      <div className="container">
        <div className="featured-content h-[25vh] flex gap-x-[40px] gap-y-[10px] md:items-center md:justify-start md:flex-row flex-col justify-center z-10 relative">
          <div className="avatar-grupe flex items-center">
            <div className="avatar-box h-[60px] w-[60px] border-[5px] border-white rounded-[50%] overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={avatar1}
                alt=""
              />
            </div>
            <div className="avatar-box h-[60px] w-[60px] border-[5px] border-white rounded-[50%] overflow-hidden ms-[-10px]">
              <img
                className="object-cover w-full h-full"
                src={avatar2}
                alt=""
              />
            </div>
            <div className="avatar-box h-[60px] w-[60px] border-[5px] border-white rounded-[50%] overflow-hidden ms-[-10px]">
              <img
                className="object-cover w-full h-full"
                src={avatar3}
                alt=""
              />
            </div>
            <div className="avatar-box h-[60px] w-[60px] border-[5px] border-white rounded-[50%] overflow-hidden ms-[-10px]">
              <img
                className="object-cover w-full h-full"
                src={avatar4}
                alt=""
              />
            </div>
          </div>
          <div className="reviews-groupe text-[#212529] flex items-center gap-[15px]">
            <strong className="text-[28px]">4.5</strong>
            <div className="review-icons flex items-center gap-[3px]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <small className="font-normal text-[14px]">2,564 reviews</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
