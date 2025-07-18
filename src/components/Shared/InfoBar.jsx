import { FaLocationDot, FaPhone } from "react-icons/fa6";

const InfoBar = () => {
  return (
    <div className="bg-blue-200 flex flex-col gap-y-2 md:gap-y-0 md:flex-row items-center justify-between p-3 md:p-5">
      <div className="flex items-center gap-x-2">
        <FaLocationDot className="w-5 sm:w-3" />
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Erika-Mann-Straße 33, 80636 München
        </p>
      </div>
      <div className="flex items-center">
        <FaPhone className="w-5 sm:w-3" />
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-pretty">
          +493012345678
        </p>
      </div>
    </div>
  );
};

export default InfoBar;
