import { FaLocationDot, FaPhone } from "react-icons/fa6";

const InfoBar = () => {
  return (
    <div className="bg-blue-200 h-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-2 md:gap-y-0 md:flex-row items-center justify-between p-3 md:p-5">
        <div className="flex items-center gap-x-2">
          <FaLocationDot className="w-5 sm:w-3" />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Boschstr. 4, 67304 Eisenberg
          </p>
        </div>
        <div className="flex items-center">
          <FaPhone className="w-5 sm:w-3" />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-pretty">
            +493012345678
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
