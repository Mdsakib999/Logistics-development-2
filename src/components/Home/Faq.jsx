import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import truck from "../../assets/truck.png";

const faqData = [
  {
    question: "Welche Arten von Fracht befördern Sie?",
    answer:
      "Wir transportieren eine Vielzahl von Gütern – von Standardfracht über verderbliche Waren bis hin zu Gefahrgut und Übergrößen.",
  },
  {
    question: "Welche Arten von Fracht befördern Sie?",
    answer:
      "Lieferzeiten variieren je nach Zielort und Versandmethode – international in der Regel zwischen 5 und 15 Werktagen",
  },
  {
    question: "Kann ich meine Sendung in Echtzeit verfolgen?",
    answer:
      "Alle Sendungen können Sie in Echtzeit über unser Online-Portal verfolgen.Alle Sendungen können Sie in Echtzeit über unser Online-Portal verfolgen.",
  },
  {
    question: "Bieten Sie eine Frachtversicherung an?",
    answer:
      "Umfassende Versicherungsoptionen schützen Ihre Fracht während des gesamten Transports.",
  },
  {
    question: "Was kostet der Frachtversand?",
    answer:
      "Die Kosten hängen von Gewicht, Volumen, Zielort und Transportart ab – gern erstellen wir Ihnen ein individuelles Angebot.",
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
          Fragen  <span className="text-[#0778D4]">zu </span> Logistiklösungen
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Antworten auf häufige Fragen zu Versand, Kosten, Sendungsverfolgung und mehr – in unserem umfassenden FAQ-Bereich.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 mt-10">
          <h1 className="text-3xl font-bold">
            Alles, was Sie über 
            <span className="text-[#0778D4]"> Bernhard</span> wissen müssen
          </h1>
          <p className="max-w-md text-sm mt-6 text-justify">
            Entdecken Sie wertvolle Informationen und Einblicke zur Versandlogistik in unserem umfassenden FAQ-Bereich. Dort beantworten wir häufig gestellte Fragen und bieten fachkundige Beratung.
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
