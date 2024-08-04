import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { reviewBackground } from "../assets/images";

const Review = ({ name, job, image, stars, descrition }) => {
  const getStarts = () => {
    switch (stars) {
      case 0:
        return (
          <>
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
          </>
        );
        break;
      case 1:
        return (
          <>
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
          </>
        );
        break;
      case 2:
        return (
          <>
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
          </>
        );
        break;
      case 3:
        return (
          <>
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
          </>
        );
        break;
      case 4:
        return (
          <>
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={regularStar} />
          </>
        );
        break;
      case 5:
        return (
          <>
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
          </>
        );
        break;

      default:
        return (
          <>
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
            <FontAwesomeIcon icon={regularStar} />
          </>
        );
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${reviewBackground})` }}
      className="review relative overflow-hidden rounded-[20px] bg-no-repeat bg-center text-white bg-cover"
    >
      <div className="bg-[#E76F51D9] mx-auto px-[45px] py-[25px] w-[150px] rounded-br-[20px] rounded-bl-[20px] relative z-10">
        <div className="mx-auto h-[60px] w-[60px] border-[5px] border-white rounded-[50%] overflow-hidden">
          <img className="object-cover w-full h-full" src={image} alt="" />
        </div>
        <div className="mt-[16px] flex flex-col items-center ">
          <span className="font-normal">{name}</span>
          <strong>{job}</strong>
        </div>
      </div>
      <div className="p-[30px] relative z-10">
        <div className="flex mb-[16px] gap-[10px]">
          <span className="text-[28px]">{stars}</span>
          <div className="flex items-center text-[#E9C46A]">{getStarts()}</div>
        </div>
        <p className="text-[#FFFFFFE6] leading-normal">{descrition}</p>
      </div>
    </div>
  );
};

export default Review;
