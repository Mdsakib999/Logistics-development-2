import { Link } from "react-router";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import mission from "../../assets/mission.webp";
import { BsArrowRight } from "react-icons/bs";

const OurMission = () => {
  const { ref, inView } = useInView();

  return (
    <div className="relative my-40 w-full">
      {/* Full Width Background Image */}
      <img
        src={mission}
        alt="Our Mission"
        className="w-full max-w-7xl mx-auto h-[600px] object-cover brightness-75 rounded-none md:rounded-md"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="w-full max-w-6xl">
          {/* Glass Section */}
          <div className="backdrop-blur-sm bg-gray-900/0 border border-white/30 rounded-xl max-w-md w-full md:w-4/5 lg:w-3/5 p-6 md:p-10 text-white flex flex-col justify-between h-[70%]">
            {/* Title & Button */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-semibold">
                Our mission is to provide fast, secure, and reliable shipping
                solutions that empower businesses around the globe.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#0778D4] text-white font-bold py-2.5 px-6 hover:bg-white hover:text-[#0778D4] rounded-full duration-500 transition"
              >
                Read More
                <BsArrowRight className="text-lg" />
              </Link>
            </div>

            {/* Bottom Stats */}
            <div
              ref={ref}
              className="mt-16 md:mt-28 lg:mt-36 flex flex-col md:flex-row justify-around items-center gap-6"
            >
              <div className="">
                <h2 className="text-4xl font-bold text-blue-300">
                  {inView && <CountUp end={95} duration={2} />}%
                </h2>
                <p className="text-sm mt-3">
                  Customer satisfaction rate based on feedback surveys
                </p>
              </div>
              <div className="">
                <h2 className="text-4xl font-bold text-purple-300">
                  {inView && (
                    <CountUp end={1500} duration={2.5} separator="," />
                  )}
                  +
                </h2>
                <p className="text-sm mt-3">
                  Shipments handled monthly across multiple continents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
