import { Fade } from "react-awesome-reveal";
import { Leaf, Recycle, Zap, Award } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Fade direction="up">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
                  Nachhaltigkeit zuerst
                </span>
              </div>
            </div>
            <p className="text-2xl md:text-4xl text-gray-600 max-w-2xl mx-auto">
              Innovative grüne Logistik für eine   <span className="text-[#0778D4] font-semibold">
                CO₂-freie
              </span>{" "}
               Zukunft.
            </p>
          </div>
        </Fade>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Fade direction="left">
            <div className="relative">
              <img
                src="https://t4.ftcdn.net/jpg/13/53/73/67/240_F_1353736725_Ck3ZZTZ9HBJrpPu1qDXCfCHsdnY7Z6yX.jpg"
                alt="Green logistics"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover brightness-90"
              />
              <div className="hidden lg:block absolute -bottom-6 -right-0 md:-right-6 bg-white rounded-xl p-2 md:p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-[#0778D4]" />
                  <span className="font-semibold text-gray-800">
                    ISO 14001-zertifiziert
                  </span>
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="right">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   Null-Emissions-Ziele
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg">
                    Auf dem Weg zu Netto-Null-Kohlenstoffemissionen bis 2030 durch den Einsatz elektrischer Flotten und sauberer Energielösungen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Kreislaufwirtschaft
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg">
                    Förderung umweltfreundlicher Verpackungen und Abfallreduzierung in unserem gesamten Logistiknetzwerk.

                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   Intelligente Technologie
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg">
                    Routenoptimierung mit KI und IoT-Sensoren zur Kraftstoffeinsparung und Reduzierung von Emissionen.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Fade direction="up">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#0778D4] mb-2">
                  45%
                </div>
                <p className="text-gray-600">Emissionsreduktion
</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0778D4] mb-2">
                  100%
                </div>
                <p className="text-gray-600">Erneuerbare Energie</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0778D4] mb-2">
                  85%
                </div>
                <p className="text-gray-600">recycelbare Materialien</p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Sustainability;
