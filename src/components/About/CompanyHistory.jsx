import history from "../../assets/history.avif";

const CompanyHistory = () => {
  return (
    <div className="bg-[#F3F7F9] pt-10 pb-24">
      {/* Header */}
      <div className="text-center mt-10 sm:mt-16 space-y-4 px-4">
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
              Ein kurzer Überblick
            </span>
          </div>
        </div>
        <h1 className="text-xl sm:text-5xl font-bold leading-tight">
          Unsere Firmengeschich
 <span className="text-[#417BE6]">te</span>
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 mt-16">
        {/* Image Section */}
        <div className="w-full md:w-1/3 h-80 sm:h-96 overflow-hidden rounded-2xl">
          <img
            src={history}
            alt="Company History"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
          <h1 className="text-xl sm:text-xl font-bold leading-snug">
            <span className="text-[#417BE6]">Spedition Bernhard GmbH</span>  Ausbau eines starken Logistik- und Transportnetzwerks in Europa
2010 – Im Januar wurde Spedition Bernhard GmbH von der regionalen Wirtschaftsförderung als herausragender Arbeitgeber des Jahres 2009 ausgezeichnet.
          </h1>
          <p className="text-sm sm:text-base text-justify max-w-2xl mx-auto md:mx-0">
            Im April wurde das Unternehmen von der Zeitschrift Transport Topics als führender Speditionsdienstleister anerkannt.
Im Juli erhielt Spedition Bernhard GmbH die Auszeichnung „Hervorragender Supply-Chain-Partner 2010“ von SupplyChainBrain.
          </p>
          <p className="text-sm sm:text-base text-justify max-w-2xl mx-auto md:mx-0">
            Spedition Bernhard GmbH hat seine Aktivitäten kontinuierlich erweitert und ein zuverlässiges Netzwerk aufgebaut, das Unternehmen verbindet und einen reibungslosen, effizienten Warenverkehr in ganz Europa gewährleistet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
