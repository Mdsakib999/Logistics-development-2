import newsLetterBg from "../../assets/newsletter.jpg";

const NewsLetter = () => {
  return (
    <div className="relative mt-20">
      <div className="absolute inset-0">
        <img
          src={newsLetterBg}
          alt="Newsletter Background"
          className="w-full h-[500px] object-cover brightness-50"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center h-[500px] px-4">
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-6">
            Subscribe to our Newsletter
          </h1>

          {/* Form - No gap between input and button */}
          <form className="flex flex-col sm:flex-row justify-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 rounded-xs px-5 py-3 bg-white text-black border-2 border-white outline-none"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 cursor-pointer w-full rounded-r-xs sm:w-auto px-6 py-3 bg-black hover:bg-gray-900 text-white border border-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
