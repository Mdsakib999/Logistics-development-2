import { Fade } from "react-awesome-reveal";
import { Star } from "lucide-react";
import { useState } from "react";

const ServiceFeatures = () => {
  const [selectedTier, setSelectedTier] = useState("Express");

  const pricingTiers = [
    {
      name: "Standard",
      price: "$25",
      period: "/shipment",
      features: [
        "Basic tracking",
        "5-7 day delivery",
        "Email support",
        "Standard insurance",
      ],
    },
    {
      name: "Express",
      price: "$45",
      period: "/shipment",
      features: [
        "Real-time tracking",
        "2-3 day delivery",
        "Priority support",
        "Enhanced insurance",
        "SMS notifications",
      ],
    },
    {
      name: "Premium",
      price: "$75",
      period: "/shipment",
      features: [
        "Live GPS tracking",
        "Next day delivery",
        "24/7 phone support",
        "Full coverage insurance",
        "White glove service",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Fade direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Service Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with{" "}
              <span className="text-[#0778D4] font-semibold">
                no hidden fees
              </span>
              . Choose the right tier for your needs.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              onClick={() => setSelectedTier(tier.name)}
              className={`min-h-[400px] sm:min-h-[420px] md:min-h-[440px] group relative bg-gradient-to-br from-white to-gray-50/30 rounded-2xl shadow-md border cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                selectedTier === tier.name
                  ? "border-[#0778D4] shadow-xl transform scale-105"
                  : "border-gray-200/60 hover:border-gray-300"
              }`}
            >
              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-2xl transition-all duration-300 ${
                  selectedTier === tier.name
                    ? "bg-[#0778D4]/10"
                    : "bg-transparent group-hover:bg-gray-100/50"
                }`}
              />

              {selectedTier === tier.name && (
                <div className="absolute -top-4 left-6">
                  <div className="bg-[#0778D4] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                    <Star className="w-4 h-4 inline mr-1" />
                    Selected
                  </div>
                </div>
              )}

              <div className="relative p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-[#0778D4]">
                      {tier.price}
                    </span>
                    <span className="text-gray-500 font-medium">
                      {tier.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-1 relative">
                        <div className="w-5 h-5 bg-[#0778D4] rounded-full flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-200">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
