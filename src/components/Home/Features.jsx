import { Rotate, Zoom } from "react-awesome-reveal";
import { BiLike } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";
import { SiAwssecretsmanager } from "react-icons/si";
import { SiPivotaltracker } from "react-icons/si";

const allFeatures = [
  {
    icon: <BiLike size={50} color="#6998fd" />,
    bgColor: "bg-blue-200",
    title: "Global Coverage",
    text: "Connecting your business to destinations worldwide.",
  },
  {
    icon: <FaClock size={50} color="purple" />,
    bgColor: "bg-purple-200",
    title: "On-Time Delivery",
    text: "Ensuring your shipments arrive as scheduled.",
  },
  {
    icon: <SiAwssecretsmanager size={50} color="green" />,
    bgColor: "bg-green-200",
    title: "Secure Handling",
    text: "Protecting your goods at every step of the journey.",
  },
  {
    icon: <SiPivotaltracker size={50} color="orange" />,
    bgColor: "bg-orange-200",
    title: "Real-Time Tracking",
    text: "Monitor your shipments with live tracking updates.",
  },
];

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 md:my-28 lg:my-40 px-4">
      <h1 className="text-2xl font-semibold text-center">Features</h1>
      <p className="text-3xl font-bold mb-10 mt-3 text-center">
        Why Partner With Us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mx-auto">
        {allFeatures.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <Zoom duration={1000}>
              <div
                className={`${feature.bgColor} rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center shadow-md`}
              >
                {feature.icon}
              </div>
            </Zoom>
            <div className="text-center mt-5 w-full">
              <h1 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 font-serif">
                {feature.title}
              </h1>
              <p className="max-w-[90vw] sm:max-w-[250px] md:max-w-[220px] mx-auto text-sm sm:text-base md:text-base break-words">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
