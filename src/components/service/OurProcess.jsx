import { Fade } from "react-awesome-reveal";
import { FaBox, FaMapSigns, FaTruckMoving } from "react-icons/fa";
import shippingImage from "../../assets/logistics.jpeg";

const OurProcess = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
              Our Process{" "}
            </span>
          </div>
        </div>
        <p className="text-2xl md:text-4xl font-bold text-gray-600 max-w-2xl mx-auto">
          Our{" "}
          <span className="text-[#0778D4] font-semibold">
            streamlined process
          </span>{" "}
          ensures efficient and hassle-free shipping
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <Fade direction="left">
            <div className="h-64 lg:h-full">
              <img
                src={shippingImage}
                alt="Shipping Process"
                className="w-full h-full object-cover brightness-75"
              />
            </div>
          </Fade>

          <Fade direction="right">
            <div className="p-8 lg:p-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:border-[#0778D4] transition-colors">
                  <div className="flex-shrink-0">
                    <FaBox className="text-2xl text-[#0778D4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      Package Collection
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      We pick up your goods from your door with care and
                      accuracy.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:border-[#0778D4] transition-colors">
                  <div className="flex-shrink-0">
                    <FaMapSigns className="text-2xl text-[#0778D4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      Smart Routing
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Advanced route planning ensures quick and safe transit.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:border-[#0778D4] transition-colors">
                  <div className="flex-shrink-0">
                    <FaTruckMoving className="text-2xl text-[#0778D4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      Timely Delivery
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Get your shipments delivered on time, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
