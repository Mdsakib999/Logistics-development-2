import { Fade } from "react-awesome-reveal";
import {
  Factory,
  Heart,
  ShoppingBag,
  Car,
  Building2,
  Truck,
  Users,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare & Pharma",
      desc: "Temperature-controlled logistics for medical supplies and pharmaceuticals with full compliance",
      image:
        "https://t3.ftcdn.net/jpg/12/18/16/32/240_F_1218163213_i55DJCts6wMfXCQgsGhzHp9Yzl4T0Crg.jpg",
      stats: "99.9% On-time",
    },
    {
      icon: ShoppingBag,
      title: "E-commerce & Retail",
      desc: "Last-mile delivery solutions with real-time tracking for seamless customer experience",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      stats: "2M+ Packages/Month",
    },
    {
      icon: Car,
      title: "Automotive",
      desc: "Just-in-time delivery of automotive parts and components with precision handling",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: "500+ Partners",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      desc: "Heavy equipment and industrial machinery transport with specialized handling expertise",
      image:
        "https://t4.ftcdn.net/jpg/12/82/56/91/240_F_1282569160_LE2GvUhPG4oOQjXLlq29HJWWwFkQkC7N.jpg",
      stats: "24/7 Operations",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Fade direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0778D4] rounded-full mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering{" "}
              <span className="text-[#0778D4] font-semibold">
                specialized solutions
              </span>{" "}
              tailored to meet the unique demands of every industry sector
            </p>
          </div>
        </Fade>

        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Fade
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 150}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg p-2">
                    <industry.icon className="w-6 h-6 text-[#0778D4]" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#0778D4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {industry.stats}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{industry.desc}</p>
                  <div className="flex items-center text-[#0778D4] font-semibold hover:text-blue-800 cursor-pointer">
                    <span>Learn More</span>
                    <Truck className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade direction="up">
          <div className="mt-16 bg-[#0778D4] rounded-2xl p-8 text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Ready to Partner With Us?</h3>
            </div>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses who trust us with their logistics
              needs. Get a custom solution for your industry today.
            </p>
            <button className="bg-white text-[#0778D4] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Industry Quote
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Industries;
