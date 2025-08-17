import { Zoom } from "react-awesome-reveal";
import { FaTruckMoving, FaMapPin } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const services = [
  {
    icon: FaTruckMoving,
    title: "Transport",
    shortText: "Efficient freight services.",
    longText:
      "Reliable transportation solutions for your goods across local and international routes.",
  },
  {
    icon: MdWarehouse,
    title: "Warehousing",
    shortText: "Safe storage facilities.",
    longText:
      "Modern, secure warehouses for short-term and long-term storage of various goods.",
  },
  {
    icon: TiTick,
    title: "Quality",
    shortText: "Assured quality checks.",
    longText:
      "We maintain strict quality control measures ensuring all goods arrive safely and timely.",
  },
  {
    icon: FaMapPin,
    title: "Tracking",
    shortText: "Real-time visibility.",
    longText:
      "Track your shipments live for peace of mind and complete operational transparency.",
  },
];

const Delivery = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
            Services{" "}
          </span>
        </div>
      </div>
      <p className="max-w-xl w-full mx-auto text-2xl md:text-4xl lg:text-5xl font-bold mb-10 mt-3 text-center">
        Transportation services which we provide to{" "}
        <span className="text-[#0778D4]">Our Customers</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Zoom key={index}>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                <Icon className="text-blue-400 mb-4" size={50} />
                <h2 className="text-xl font-semibold mb-2 ">{service.title}</h2>
                <p className="text-gray-700 text-sm mb-1">
                  {service.shortText}
                </p>
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
