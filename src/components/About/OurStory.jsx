import { Link } from "react-router";
import team from "../../assets/team.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../../utils/blogData";

const OurStory = () => {
  const [ref, inView] = useInView();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side with Stats */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="max-w-md sm:max-w-lg space-y-8 mx-auto lg:mx-0">
          {stats.map((stat, index) => (
            <div key={index}>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#417BE6]">
                {inView && (
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                )}
              </h1>
              <h2 className="border-t-2 border-gray-400 w-40 sm:w-48 my-2 font-bold text-lg sm:text-xl">
                {stat.title}
              </h2>
              <p className="text-sm sm:text-base leading-snug">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side with Text and Overlapping Image */}
      <div className="relative w-full lg:w-1/2" ref={ref}>
        <div className="relative bg-black text-white rounded-2xl px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-10 min-h-[400px] sm:min-h-[450px] flex flex-col sm:flex-row sm:items-start sm:justify-end">
          {/* Text Content */}
          <div className="w-full sm:w-[90%] lg:w-1/2 mt-6 sm:mt-10 space-y-2">
            <h1 className="text-xl sm:text-3xl font-bold">Our Story</h1>
            <h2 className="text-lg sm:text-2xl font-semibold text-[#417BE6]">
              Delivering Trust Through Every Mile
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm text-justify mt-2">
              Founded with a vision to simplify global logistics, we’ve grown
              into a trusted name in freight forwarding, warehousing, and supply
              chain management.
            </p>
            <Link to="/service">
              <button className="mt-4 bg-[#0778D4] text-white hover:bg-white hover:text-[#0778D4] border border-[#0778D4] duration-300 rounded-full px-5 py-2 text-xs sm:text-sm">
                Explore Our Services
              </button>
            </Link>
          </div>

          {/* Team Image - Hidden on small screens */}
          <img
            src={team}
            alt="Our Team"
            className="hidden lg:block absolute -left-16 top-32 h-80 min-h-96 rounded-xl shadow-lg z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
