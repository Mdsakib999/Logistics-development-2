import { FaTruckMoving, FaMapPin } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Delivery = () => {
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

  return (
    <div className="my-20 px-4">
      <h1 className="text-2xl font-semibold text-center">Services</h1>
      <p className="text-3xl font-bold mb-10 mt-3 text-center">
        Transportation services which we provide to our customers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <Icon className="text-blue-500 mb-4" size={50} />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700 text-sm mb-1">{service.shortText}</p>
              <p className="text-gray-500 text-sm">{service.longText}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Delivery;
