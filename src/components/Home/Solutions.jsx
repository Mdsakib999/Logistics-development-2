import { Link } from "react-router";
import sol1 from "../../assets/sol1.jpg";
import sol2 from "../../assets/sol2.avif";
import sol3 from "../../assets/sol3.jpg";
import sol4 from "../../assets/sol4.jpg";
import Button from "../Shared/Button";

const Solutions = () => {
  const data = [
    { image: sol1, title: "Internal Shipping", span: "col-span-8" },
    { image: sol2, title: "Ocean Freight", span: "col-span-4" },
    { image: sol3, title: "Ware Housing", span: "col-span-4" },
    { image: sol4, title: "Rail Freight", span: "col-span-8" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mt-10 sm:mt-16 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold">Services</h2>
        <h1 className="text-2xl sm:text-5xl font-bold">
          Logistics <span className="text-[#417BE6]">Solution</span>
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-0 md:grid-cols-12 gap-4 my-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative ${item.span} h-52 sm:h-64 md:h-72 lg:h-72`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover brightness-50 rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-sm sm:text-lg font-semibold">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
      <Link to="/service" className="flex flex-col items-center mb-10">
        <Button buttonText={"Explore Our Services"} />
      </Link>
    </div>
  );
};

export default Solutions;
