import { Fade, Flip, Slide, Zoom } from "react-awesome-reveal";
import aboutBg from "../../assets/aboutBg.png";
import aboutCargo from "../../assets/aboutCargo.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView();

  return (
    <div className="relative bg-[#11152D] text-white overflow-hidden mb-10">
      {/* Background image (positioned absolutely) */}
      <img
        src={aboutBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 flex flex-col lg:flex-row items-center gap-10">
        {/* Cargo Image */}
        <div className="w-full lg:w-1/3">
          <img
            src={aboutCargo}
            alt="Cargo"
            className="w-96 h-96 mx-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full max-w-2xl mx-auto lg:w-1/2 text-center lg:text-left">
          <h2 className="text-sm text-gray-400 tracking-wide mb-2 uppercase">
            About Swift Cargo
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get to Know Swift Cargo
          </h1>
          <Slide direction="up" duration={1000}>
            <p className="text-sm md:text-md leading-relaxed text-gray-300 text-justify">
              Swift Cargo is a leading name in the logistics industry, known for
              its efficiency and reliability. We specialize in delivering
              tailored solutions for businesses of all sizes. With global
              coverage and advanced tracking, we ensure your shipments are
              always on time and secure. Our experienced team is committed to
              providing seamless logistics that keep your business moving
              forward. At Swift Cargo, your success is our priority.
            </p>
          </Slide>
        </div>
      </div>

      {/* Stats Section with CountUp */}
      <div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-10 gap-6 text-center mb-20"
      >
        <div>
          <p className="text-3xl font-bold text-blue-300">
            {inView && <CountUp end={10} duration={2} />}+
          </p>
          <p className="text-gray-300">Years of Experience</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-300">
            {inView && <CountUp end={100} duration={2.5} separator="," />}K+
          </p>
          <p className="text-gray-300">Customers</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-emerald-300">
            {inView && <CountUp end={24} duration={1.5} />} / 7
          </p>
          <p className="text-gray-300">Support</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
