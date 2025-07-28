import {
  FaShippingFast,
  FaWarehouse,
  FaTruckMoving,
  FaHandsHelping,
} from "react-icons/fa";

const highlightsData = [
  {
    title: "Fast Delivery",
    desc: "Swift and secure delivery across global destinations.",
    icon: <FaShippingFast size={30} className="text-white mb-2" />,
    image:
      "https://t4.ftcdn.net/jpg/13/67/65/29/240_F_1367652904_rneMp9h7BrkH4LR0OTIucZ0kGkYb6H7R.jpg",
  },
  {
    title: "Reliable Warehousing",
    desc: "Safe storage facilities with 24/7 monitoring.",
    icon: <FaWarehouse size={30} className="text-white mb-2" />,
    image:
      "https://t4.ftcdn.net/jpg/04/65/50/09/240_F_465500974_1N07eyqwdHNlil9plWNUnGMNXJIKqmQA.jpg",
  },
  {
    title: "Transport Solutions",
    desc: "End-to-end freight management for businesses.",
    icon: <FaTruckMoving size={30} className="text-white mb-2" />,
    image:
      "https://t4.ftcdn.net/jpg/02/39/15/81/240_F_239158141_cSswkq9Lz71gzAr95VGaG3OoGgsFlaFE.jpg",
  },
  {
    title: "Client Support",
    desc: "Dedicated team to assist every step of the way.",
    icon: <FaHandsHelping size={30} className="text-white mb-2" />,
    image:
      "https://t3.ftcdn.net/jpg/13/22/51/60/240_F_1322516030_SYfjQmBq5b10W1cPJrAUxVFi753LEIQB.jpg",
  },
];

const Highlights = () => {
  return (
    <div className="py-16 bg-[#F9FBFD]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h2 className="text-lg sm:text-xl font-bold mb-2">Key Focus</h2>
        <h1 className="text-2xl sm:text-4xl font-bold mb-10">
          Our Service <span className="text-[#417BE6]">Highlights</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {highlightsData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group h-64 md:h-96 cursor-pointer shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition duration-300 brightness-75 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-center text-white px-4 transition duration-300">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
