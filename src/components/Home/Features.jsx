import { Rotate, Zoom } from "react-awesome-reveal";
import { BiLike } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";
import { SiAwssecretsmanager } from "react-icons/si";
import { SiPivotaltracker } from "react-icons/si";

const allFeatures = [
  {
    icon: <BiLike size={50} color="#6998fd" />,
    bgColor: "bg-blue-200",
    title: "Weltweite Abdeckung",
    text: "Wir verbinden Ihr Unternehmen mit Zielen auf der ganzen Welt.",
  },
  {
    icon: <FaClock size={50} color="purple" />,
    bgColor: "bg-purple-200",
    title: "Pünktliche Lieferung",
    text: "Zuverlässige Lieferungen – pünktlich und planbar, darauf können Sie sich verlassen",
  },
  {
    icon: <SiAwssecretsmanager size={50} color="green" />,
    bgColor: "bg-green-200",
    title: "Sichere Handhabung",
    text: "Rundum-Schutz für Ihre Waren – in jeder Phase des Transportwegs.",
  },
  {
    icon: <SiPivotaltracker size={50} color="orange" />,
    bgColor: "bg-orange-200",
    title: "Echtzeit-Tracking",
    text: "Behalten Sie Ihre Sendungen jederzeit im Blick – mit Live-Tracking in Echtzeit.",
  },
];

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 md:my-28 lg:mb-40 px-4">
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
            Leistungsmerkmale
          </span>
        </div>
      </div>
      <p className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Warum eine  <span className="text-[#0778D4]">Partnerschaft </span> mit uns?
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
              <h1 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 ">
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
