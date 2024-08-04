import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const ContactLinks = () => {
  return (
    <div className="">
      <h6 className="lg:text-[20px] text-[18px] font-semibold mt-[40px] text-[#E9C46A] mb-[3px]">
        Say hi and talk to us
      </h6>
      <h2 className="text-[36px] text-[#000000] font-bold mb-[20px]">
        Contact
      </h2>
      <div className="flex flex-col gap-[12px] text-white text-[20px] mb-[48px]">
        <p>
          <FontAwesomeIcon icon={faLocationDot} />{" "}
          <span className="ms-[8px]">London, United Kingdom</span>
        </p>
        <a className="hover:text-[#E76F51] transition-colors" href="">
          010-020-0340
        </a>
        <a className="hover:text-[#E76F51] transition-colors" href="">
          info@company.com
        </a>
      </div>
      <div className="">
        <h6 className="mb-[16px] font-semibold text-[#E9C46A] text-[20px]">
          Social
        </h6>
        <div className="mb-[24px] flex gap-[12px]">
          <a
            className="w-[35px] h-[35px] rounded-[50%] block bg-[#E9C46A] hover:bg-[#E76F51] transition-colors text-white text-center leading-[35px]"
            href=""
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className="w-[35px] h-[35px] rounded-[50%] block bg-[#E9C46A] hover:bg-[#E76F51] transition-colors text-white text-center leading-[35px]"
            href=""
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="w-[35px] h-[35px] rounded-[50%] block bg-[#E9C46A] hover:bg-[#E76F51] transition-colors text-white text-center leading-[35px]"
            href=""
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="w-[35px] h-[35px] rounded-[50%] block bg-[#E9C46A] hover:bg-[#E76F51] transition-colors text-white text-center leading-[35px]"
            href=""
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <p className="text-white text-[14px]">
          Copyright © {new Date().getFullYear()} ebook company
        </p>
      </div>
    </div>
  );
};

export default ContactLinks;
