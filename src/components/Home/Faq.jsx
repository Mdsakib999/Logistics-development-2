import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import truck from "../../assets/truck.png";

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-x-3 px-8 py-2 bg-blue-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
              FAQ
            </span>
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800">
          Logistics <span className="text-[#0778D4]">Solution</span> Questions
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Find answers to common questions about our shipping services,
          tracking, costs, and more.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 mt-10">
          <h1 className="text-3xl font-bold">
            Everything you need to about{" "}
            <span className="text-[#0778D4]">Swift</span>
          </h1>
          <p className="max-w-md text-sm mt-6 text-justify">
            Discover valuable information and insights about shipping logistics
            through our comprehensive FAQ section, where we address common
            questions and provide expert guidance.
          </p>
          <img src={truck} alt="Truck" className="w-full rounded-xl" />
        </div>

        <div className="w-full lg:w-1/2 space-y-5">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-md overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
              >
                <span>{item.question}</span>
                {activeIndex === index ? (
                  <FaMinus className="text-blue-600" />
                ) : (
                  <FaPlus className="text-blue-600" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out px-5 pt-0 overflow-hidden ${
                  activeIndex === index ? "max-h-40 py-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
