import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What types of cargo do you handle?",
    answer:
      "We handle a wide range of cargo including general freight, perishable goods, hazardous materials, and oversized shipments.",
  },
  {
    question: "How long does international shipping take?",
    answer:
      "Delivery time depends on the destination and shipping method. Typically, international cargo takes 5–15 business days.",
  },
  {
    question: "Can I track my shipment in real-time?",
    answer:
      "Yes, all shipments come with real-time tracking and updates through our online portal.",
  },
  {
    question: "Do you provide insurance for cargo?",
    answer:
      "Absolutely! We offer comprehensive insurance options to protect your cargo during transit.",
  },
  {
    question: "What is the cost of freight shipping?",
    answer:
      "Costs vary depending on weight, volume, destination, and shipping mode. Contact us for a detailed quote.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-16">
      {/* Section Title */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold">FAQ</h2>
        <h1 className="text-2xl sm:text-5xl font-bold">
          Logistics <span className="text-[#417BE6]">Solution</span> Questions
        </h1>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm bg-white transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              <span>{item.question}</span>
              {activeIndex === index ? (
                <FaMinus className="text-gray-500" />
              ) : (
                <FaPlus className="text-gray-500" />
              )}
            </button>
            {activeIndex === index && (
              <div className="p-4 pt-0 text-sm text-gray-600 transition-all duration-300 ease-in-out">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
