import { SiComma } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-blue-400 text-white p-4 sm:p-6 md:p-10 rounded-md md:rounded-3xl flex flex-col">
      <div className="flex flex-wrap items-center gap-x-1 mb-4 text-yellow-400">
        <FaStar color="yellow" size={20} />
        <FaStar color="yellow" size={20} />
        <FaStar color="yellow" size={20} />
        <FaStar color="yellow" size={20} />
        <FaStar color="yellow" size={20} />
      </div>
      <Slide direction="up">
        <p className="mb-6 text-justify text-xs sm:text-sm md:text-base break-words">
          {review.authorComment}
        </p>
      </Slide>
      <Slide direction="down">
        <div className="flex flex-row items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-x-2 sm:gap-x-3">
            <img
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
              src={review.authorImage}
              alt=""
            />
            <div className="flex flex-col items-start">
              <p className="text-xs sm:text-sm md:text-base font-semibold">
                {review.authorName}
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                {review.authorDesignation}
              </p>
            </div>
          </div>
          <div className="flex items-center ml-2">
            <SiComma fontSize={20} />
            <SiComma fontSize={20} className="-ml-2" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ReviewCard;
