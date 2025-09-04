import { Zoom } from "react-awesome-reveal";
import { FaTruckMoving, FaMapPin } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const services = [
  {
    icon: FaTruckMoving,
    title: "Beförderung ",
    shortText: "Efficient freight services.",
    longText:
      "Unsere Frachtservices sind auf Zuverlässigkeit und Schnelligkeit ausgelegt. Wir behandeln Ihre Waren mit Sorgfalt und bieten nahtlose Beförderung auf nationalen und internationalen Strecken.",
  },
  {
    icon: MdWarehouse,
    title: "Lagerhaltung",
    shortText: "Safe storage facilities.",
    longText:
      "Wir bieten sichere und effiziente Lagerlösungen für Ihre Waren. Unsere modernen Einrichtungen und professionelle Handhabung gewährleisten, dass Ihre Bestände sicher gelagert und jederzeit versandbereit sind.",
  },
  {
    icon: TiTick,
    title: "Qualität ",
    shortText: "Assured quality checks.",
    longText:
      "Wir gewährleisten höchste Qualität in allen Dienstleistungen – von sorgfältiger Handhabung bis zur präzisen Ausführung.",
  },
  {
    icon: FaMapPin,
    title: "Sendungsverfolgung",
    shortText: "Real-time visibility.",
    longText:
      "Überwachen Sie Ihre Sendungen in Echtzeit – vom Abholort bis zur Zustellung – für Transparenz, Zuverlässigkeit und volle Kontrolle über Ihre Waren.",
  },
];

const Delivery = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
            Dienstleistung
{" "}
          </span>
        </div>
      </div>
      <p className="max-w-xl w-full mx-auto text-2xl md:text-4xl font-bold mb-10 mt-3 text-center">
        Transportlösungen, die wir unseren 
        <span className="text-[#0778D4]"> Kunden anbieten</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Zoom key={index}>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                <Icon className="text-blue-400 mb-4" size={50} />
                <h2 className="text-xl font-semibold mb-2 ">{service.title}</h2>
                {/* <p className="text-gray-700 text-sm mb-1">
                  {service.shortText}
                </p> */}
                <p className="text-gray-500 text-sm">{service.longText}</p>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
};

export default Delivery;
