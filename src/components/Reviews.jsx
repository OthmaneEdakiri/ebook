import { Review } from ".";
import { UseNavbarContext } from "../context/NavbarContext";
import { reviews } from "../constants";

const Reviews = () => {

  const {sectionsRefs:{reviews : reviewsRef}} = UseNavbarContext()

  return (
    <div ref={reviewsRef} className="reviews sm:py-[100px] py-[30px]">
      <div className="container">
        <h6 className="lg:text-[20px] text-[18px] text-[#E9C46A] mb-[8px] text-center">
          Reviews
        </h6>
        <h2 className="text-[36px] text-[#000000] font-bold lg:mb-[48px] mb-[24px] text-center">
          What people saying...
        </h2>
        <div className="reviews-content grid lg:grid-cols-3 grid-cols-1 gap-[25px]">
          {reviews.map((review) => (
            <Review
              key={review.id}
              name={review.name}
              job={review.job}
              image={review.image}
              stars={review.stars}
              descrition={review.descrition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
