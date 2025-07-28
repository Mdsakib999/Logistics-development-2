import history from "../../assets/history.avif";

const CompanyHistory = () => {
  return (
    <div className="bg-[#F3F7F9] py-10">
      {/* Header */}
      <div className="text-center mt-10 sm:mt-16 space-y-4 px-4">
        <h2 className="text-lg sm:text-2xl font-bold">A short Brief</h2>
        <h1 className="text-xl sm:text-5xl font-bold leading-tight">
          Our Company <span className="text-[#417BE6]">History</span>
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
          <h1 className="text-xl sm:text-3xl font-bold leading-snug">
            <span className="text-[#417BE6]">Swift</span> foundation, creating
            powerful logistics and transport network
          </h1>
          <p className="text-sm sm:text-base text-justify max-w-2xl mx-auto md:mx-0">
            2010 – In January, named 2009 Employer of the Year by the Develop
            our regional economic agency; in April, named a Top freight
            brokerage firm by Transport Topics magazine and in July, named a
            2010 Great Supply Chain Partner by SupplyChainBrain magazine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
