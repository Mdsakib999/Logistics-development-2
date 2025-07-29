import newsLetterBg from "../../assets/newsletter.jpg";
import { Send } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="relative mt-20 overflow-hidden shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={newsLetterBg}
          alt="Newsletter Background"
          className="w-full h-[500px] object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-[500px] px-4">
        <div className="w-full max-w-3xl text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide drop-shadow-lg">
            Stay in the Loop
          </h2>
          <p className="text-white/90 text-lg sm:text-xl">
            Get the latest articles, tips, and exclusive updates straight to
            your inbox.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center justify-center w-full gap-3 sm:gap-0 mt-6">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-2/3 px-5 py-3 rounded-l-full text-black bg-white border-none outline-none shadow-md"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-r-full hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <Send size={18} /> Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
