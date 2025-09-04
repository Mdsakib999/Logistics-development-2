import {
  Phone,
  CreditCard,
  MessageSquare,
  Headphones,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
} from "lucide-react";
import { useState } from "react";

const supportChannels = [
  {
    icon: Phone,
    title: "Telefonsupport rund um die Uhr",
    description:
      "Direkter Kontakt zu unserem Expertenteam – rund um die Uhr erreichbar.",
    contact: "+4915679697580",
    availability: "Always Available",
    color: "from-blue-500 to-blue-600",
    bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  // {
  //   icon: MessageSquare,
  //   title: "Live Chat",
  //   description:
  //     "Get instant responses from our AI-powered chat system with human backup available.",
  //   contact: "chat.logistics.com",
  //   availability: "Reply within 2 mins",
  //   color: "from-green-500 to-green-600",
  //   bgPattern: "bg-gradient-to-br from-green-50 to-green-100",
  // },
  {
    icon: Headphones,
    title: "Technische Unterstützung",
    description:
      "Spezialisierte technische Unterstützung für Integrationen und Sendungsverfolgung.",
    contact: "transport@bernhardlogistik.de",
    availability: "Mon-Fri 8AM-8PM",
    color: "from-purple-500 to-purple-600",
    bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100",
  },
];

const Support = () => {
  const [hoveredSupport, setHoveredSupport] = useState(null);

  return (
    <div className="bg-gradient-to-br from-blue-200 via-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Customer Support Section */}
        <div className="relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="flex items-center py-1.5 text-blue-700 font-medium text-sm uppercase tracking-wider">
                  <Headphones className="w-4 h-4 mr-2" />
                  24/7 Support
                </span>
              </div>
            </div>

            <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Immer für <span className="text-[#0778D4]">Sie da</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mehrere Kanäle, um sicherzustellen, dass Sie die Unterstützung erhalten, die Sie brauchen, wenn Sie sie brauchen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {supportChannels.map((item, idx) => (
              <div
                key={idx}
                className={`group relative ${item.bgPattern} border border-white/60 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                onMouseEnter={() => setHoveredSupport(idx)}
                onMouseLeave={() => setHoveredSupport(null)}
              >
                {/* Icon and Header */}
                <div className="flex items-center mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-[#0778D4] transition-colors">
                      {item.title}
                    </h4>
                    {/* <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.availability}
                    </div> */}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Contact Info */}
                <div className="flex items-center justify-between">
                  <span className="text-[#0778D4] font-semibold text-lg">
                    {item.contact}
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 text-gray-400 group-hover:text-[#0778D4] transform ${
                      hoveredSupport === idx ? "translate-x-1" : ""
                    } transition-all duration-300`}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
     
            <button className="mt-6 group bg-white border-2 border-[#0778D4] text-[#0778D4] px-8 py-3 rounded-2xl font-bold hover:bg-[#0778D4] hover:text-white transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Call Now: +4915679697580
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
