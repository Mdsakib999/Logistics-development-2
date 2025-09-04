import { Link } from "react-router";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import mission from "../../assets/mission.webp";
import { BsArrowRight, BsShield, BsLightning, BsGlobe } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const OurMission = () => {
  const { ref, inView } = useInView();

  return (
    <div className="relative my-32 w-full overflow-hidden">
      {/* Split Screen Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Side - Interactive Content */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-gray-950 p-8 lg:p-12 flex flex-col justify-between">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-24 h-24 border border-white rounded-full animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full animate-pulse"></div>
          </div>

          {/* Header Section */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <BsLightning className="text-white text-xl" />
              </div>
              <span className="text-blue-300 font-semibold tracking-wider">
                Leitbild
              </span>
            </div>

            <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Die Welt verbinden,
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Sendung für Sendung.
              </span>
            </h1>

            <p className="text-sm md:text-xl text-gray-300 mb-8 leading-relaxed">
              Wir liefern nicht nur Pakete – wir liefern Chancen, Träume und Verbindungen über Kontinente hinweg.
            </p>

            {/* Feature Icons */}
            <div className="flex gap-6 mb-8">
              {[
                {
                  icon: BsShield,
                  label: "Sicher",
                  color: "from-green-400 to-emerald-400",
                },
                {
                  icon: BsLightning,
                  label: "Schnell",
                  color: "from-yellow-400 to-orange-400",
                },
                {
                  icon: BsGlobe,
                  label: "Weltweit",
                  color: "from-blue-400 to-cyan-400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <item.icon className="text-white text-2xl" />
                  </div>
                  <span className="text-sm text-gray-400 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl mb-3"
            >
              Unsere Reise entdecken
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center duration-300">
                <BsArrowRight className="text-white text-sm" />
              </div>
            </Link>
          </div>

          {/* Floating Stats */}
          <div ref={ref} className="relative z-10 grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                {inView && <CountUp end={95} duration={2.5} />}%
              </div>
              <div className="text-sm text-gray-300">Zufriedene Kunden</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">
                {inView && <CountUp end={1500} duration={3} separator="," />}+
              </div>
              <div className="text-sm text-gray-300">Monatliche Sendungen</div>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded-full"
                    style={{ height: `${(i + 1) * 4}px` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Dynamic Image */}
        <div className="relative group overflow-hidden">
          <img
            src={mission}
            alt="Our Mission"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay Elements */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/40"></div>

          {/* Floating Cards */}
          {/* <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-800">
                Live Tracking Active
              </span>
            </div>
          </div> */}

          <div
            className="absolute bottom-[40%] left-[40%] bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-2xl justify-center flex items-center gap-x-2 font-bold text-gray-800 mb-1">
              4.8 <FaStar size={20} className="text-yellow-400" />
            </div>
            <div className="text-sm text-gray-600">Durchschnittliche Kundenbewertung</div>
          </div>

          {/* Particle Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-ping"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "3s",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OurMission;
