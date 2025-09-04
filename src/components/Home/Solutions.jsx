import sol1 from "../../assets/sol1.jpg";
import sol2 from "../../assets/sol2.avif";
import sol3 from "../../assets/sol3.jpg";
import sol4 from "../../assets/sol4.jpg";
import { CheckCircle, Globe, Warehouse, PackageSearch } from "lucide-react";

const Solutions = () => {
  const data = [
    {
      image: sol1,
      title: "Internal Shipping",
      span: "col-span-12 md:col-span-8",
      description: "Seamless domestic logistics solutions",
      icon: CheckCircle,
    },
    {
      image: sol2,
      title: "Ocean Freight",
      span: "col-span-12 md:col-span-4",
      description: "Global maritime transportation",
      icon: Globe,
    },
    {
      image: sol3,
      title: "Ware Housing",
      span: "col-span-12 md:col-span-4",
      description: "Secure storage facilities",
      icon: Warehouse,
    },
    {
      image: sol4,
      title: "Rail Freight",
      span: "col-span-12 md:col-span-8",
      description: "Efficient rail transportation",
      icon: PackageSearch,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Section Title */}
      <div className="text-center mt-10 sm:mt-16 space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
            Services
          </span>
        </div>

        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Logistics{" "}
          <span className="relative">
            <span className="text-[#0778D4]">Solutions</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </span>
        </h1>

        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          Comprehensive logistics solutions tailored to meet your business needs
          with precision and reliability
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-6 my-16 relative z-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`group ${item.span} relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer`}
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            {/* Main Card */}
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-80 overflow-hidden rounded-2xl">
              {/* Image with overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/60 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent z-20 group-hover:from-blue-900/70 transition-all duration-500"></div>

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              {/* Floating icon */}
              <div className="absolute top-6 left-6 z-30">
                <div className="w-12 h-12 bg-white/20 text-white backdrop-blur-md rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <item.icon />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="space-y-2">
                  <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </div>
  );
};

export default Solutions;
