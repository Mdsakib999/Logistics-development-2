import { useState } from "react";
import { customSolutions } from "../../utils/blogData";
import { ArrowRight, CheckCircle, CreditCard, Star, Zap } from "lucide-react";

const LogisticsOption = () => {
  const [hoveredSolution, setHoveredSolution] = useState(null);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl opacity-60"></div>
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230778D4' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>

          <div className="relative z-10 p-8 sm:p-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0778D4] to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Enterprise Solutions
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Built for Complex Logistics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Scalable solutions designed for businesses with demanding supply
                chain requirements
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {customSolutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/80 backdrop-blur-sm border border-white/50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 min-w-0"
                  onMouseEnter={() => setHoveredSolution(idx)}
                  onMouseLeave={() => setHoveredSolution(null)}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${sol.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
                  ></div>
                  <div className="absolute inset-[1px] bg-white rounded-2xl -z-10"></div>

                  <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6">
                    <div
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${sol.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <sol.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base sm:text-lg md:text-xl text-gray-800 mb-2 sm:mb-3 group-hover:text-[#0778D4] transition-colors break-words">
                        {sol.title}
                      </h4>
                      <p className="text-gray-600 mb-2 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                        {sol.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-2 sm:mb-4">
                        {sol.features.map((feature, featureIdx) => (
                          <div
                            key={featureIdx}
                            className="flex items-center text-xs sm:text-sm text-gray-500 break-words"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-row items-center justify-between gap-2 sm:gap-0 mt-5">
                        <span
                          className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${sol.color} text-white whitespace-nowrap`}
                        >
                          <Zap className="w-3 h-3 mr-1" />
                          {sol.benefit}
                        </span>
                        <ArrowRight
                          className={`w-5 h-5 text-gray-400 group-hover:text-[#0778D4] transform ${
                            hoveredSolution === idx ? "translate-x-1" : ""
                          } transition-all duration-300`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <button className="group relative bg-gradient-to-r from-[#0778D4] to-blue-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full max-w-xs sm:max-w-md mx-auto">
                <div className="flex items-center justify-center">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsOption;
