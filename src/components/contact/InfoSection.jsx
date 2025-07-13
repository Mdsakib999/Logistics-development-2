import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const InfoSection = () => {
  return (
    <div className="text-center mt-20 space-y-5 px-5 md:px-0">
      <h1 className="text-3xl">Get In Touch with us</h1>
      <p className="max-w-xl mx-auto">
        We appreciate your interest please complete the form below and we will
        contact you to discuss your warehousing, distribution, air, ocean
        freight or any other logistics needs.
      </p>
      <div className="flex flex-col sm:flex-row items-center md:justify-center gap-8 md:gap-20 my-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-blue-200 hover:bg-blue-400 group duration-500 rounded-full w-20 h-20 mb-2 shadow-md">
            <IoMdMail className="group-hover:text-white" size={32} />
          </div>
          <p className="text-sm sm:text-base">contact@swiftcargo.com</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-blue-200 hover:bg-blue-400 group duration-500 rounded-full w-20 h-20 mb-2 shadow-md">
            <FaLocationDot className="group-hover:text-white" size={32} />
          </div>
          <p className="text-sm sm:text-base text-center">
            Nasirabad properties ltd, Chattogram
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-blue-200 hover:bg-blue-400 group duration-500 rounded-full w-20 h-20 mb-2 shadow-md">
            <FaPhone className="group-hover:text-white" size={32} />
          </div>
          <p className="text-sm sm:text-base">+1 800-123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
