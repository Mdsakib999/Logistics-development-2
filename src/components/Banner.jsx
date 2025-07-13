import Button from "./Button";
import Navbar from "./Navbar";

const Banner = ({ bannerImage, title, paragraph, buttonText }) => {
  return (
    <div className="relative w-full min-h-[350px] flex items-center justify-center">
      <img
        className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover brightness-50"
        src={bannerImage}
        alt="bannerImage"
      />
      <div className="absolute w-full top-2 left-0 px-2 sm:px-6 md:px-10">
        <Navbar />
      </div>
      <div className="w-full md:w-1/2 absolute inset-0 top-[20%] flex flex-col justify-center text-white space-y-4 px-2 sm:px-6 md:px-10 lg:px-16 max-w-full">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-left drop-shadow-lg max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw]">
          {title}
        </h1>
        <p className="text-xs sm:text-base md:text-lg lg:text-xl text-left max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] drop-shadow">
          {paragraph}
        </p>
        <div className="flex justify-start">
          <Button buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
