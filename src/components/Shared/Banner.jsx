import { Fade } from "react-awesome-reveal";
import Button from "./Button";
import Navbar from "./Navbar";

const Banner = ({ bannerImage, title, paragraph, buttonText }) => {
  return (
    <div className="w-full min-h-[350px] md:min-h-[450px] lg:min-h-[550px] relative flex items-center justify-center">
      {/* Background image */}
      <Fade>
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50 backdrop-opacity-50 z-0"
          src={bannerImage}
          alt="bannerImage"
        />
      </Fade>
      {/* Overlay content constrained to max-w-7xl */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto w-full relative px-2 pb-20">
          <Navbar />
          <div className="w-full md:w-1/2 mt-8 md:mt-20 flex flex-col justify-center text-white space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-left drop-shadow-lg max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw]">
              {title}
            </h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-justify max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] drop-shadow">
              {paragraph}
            </p>
            <div className="flex justify-start">
              <Button buttonText={buttonText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
