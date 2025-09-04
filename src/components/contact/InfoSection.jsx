import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const InfoSection = () => {
  return (
    <div className="text-center mt-16 space-y-8 px-5 md:px-0">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Kontaktieren Sie uns
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
        Wir freuen uns über Ihr Interesse. Bitte füllen Sie das untenstehende Formular aus und wir werden Sie bei weiteren Logistikanforderungen kontaktieren.
      </p>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-12 md:gap-24 my-16">
        <div className="flex flex-col items-center group">
          <div className="flex items-center group justify-center bg-blue-200 hover:bg-blue-400 group duration-700 rounded-full w-24 h-24 mb-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all">
            <IoMdMail
              size={30}
              className="text-blue-500 group-hover:text-white"
            />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">E-Mail</h3>
          <p className="text-sm sm:text-base text-blue-400 font-medium">
            transport@bernhardlogistik.de
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <div className="flex items-center group justify-center bg-blue-200 hover:bg-blue-400 group duration-700 rounded-full w-24 h-24 mb-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all">
            <FaLocationDot 
              size={30}
              className="text-blue-500 group-hover:text-white"
            />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Besuchen Sie uns</h3>
          <p className="text-sm sm:text-base text-center text-blue-400 leading-relaxed">
            Boschstr. 4, 67304 Eisenberg, 
            <br />
           Deutschland
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <div className="flex items-center group justify-center bg-blue-200 hover:bg-blue-400 group duration-700 rounded-full w-24 h-24 mb-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all">
            <FaPhone
              size={30}
              className="text-blue-500 group-hover:text-white"
            />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Rufen Sie uns an</h3>
          <p className="text-sm sm:text-base text-blue-400 font-medium">
            +4915679697580
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
