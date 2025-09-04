import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const InfoSection = () => {
  return (
    <div className="text-center mt-16 space-y-8 px-5 md:px-0">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Get In Touch with us
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
        We appreciate your interest please complete the form below and we will
        contact you to discuss your warehousing, distribution, air, ocean
        freight or any other logistics needs.
      </p>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-12 md:gap-24 my-16">
        <div className="flex flex-col items-center group">
          <div className="flex items-center group justify-center bg-blue-200 hover:bg-blue-400 group duration-700 rounded-full w-24 h-24 mb-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all">
            <FaLocationDot
              size={30}
              className="text-blue-500 group-hover:text-white"
            />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
          <p className="text-sm sm:text-base text-blue-400 font-medium">
            contact@swiftcargo.com
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <div className="flex items-center group justify-center bg-blue-200 hover:bg-blue-400 group duration-700 rounded-full w-24 h-24 mb-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all">
            <FaPhone
              size={30}
              className="text-blue-500 group-hover:text-white"
            />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
          <p className="text-sm sm:text-base text-center text-blue-400 leading-relaxed">
            Erika-Mann-Straße 33,
            <br />
            80636 München
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <div className="flex items-center group justify-center bg-blue-200 hover:bg-blue-400 group duration-700 rounded-full w-24 h-24 mb-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all">
            <IoMdMail
              size={30}
              className="text-blue-500 group-hover:text-white"
            />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
          <p className="text-sm sm:text-base text-blue-400 font-medium">
            +1 800-123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
