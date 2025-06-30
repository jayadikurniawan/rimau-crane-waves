import Layout from '../components/Layout';
import CraneContactForm from '../components/CraneContactForm';
import { Helmet } from 'react-helmet-async';

const Fleet = () => {
  const rimauStar = {
    name: "RIMAU STAR",
    image: "/lovable-uploads/3536b18c-ad3e-477c-896c-fb8a2dfb2a6a.png",
    registry: "Jakarta",
    yearBuilt: "2020",
    flag: "Indonesia",
    classification: "BKI",
    type: "Self Propelled Crane Barge",
    loa: "50.30M",
    length: "48.10M",
    breadth: "19.80M",
    depth: "3.60M",
    gtnt: "1351/405",
    crane: {
      type: "FQ5035",
      swl: "50 Tons",
      range: "35 Meter",
      grabCapacity: "23M3 & 30M3",
      loadingRate: "18.000T per day"
    },
    engine: {
      main: "Zichai Power Co., LTD (Model Z6170ZLCZ-3) 2 x 330kW",
      aux1: "Yuchai Power Co., LTD (Model YCDL051, 50KW 400V)",
      aux2: "Yuchai Power Co., LTD (Model YCDLO21, 20KW 400V)",
      aux3: "Yuchai Power Co., LTD (Model YCDL055, 100KW 400V)"
    },
    nautical: {
      publicAddressor: "Fucheng",
      telephone: "Fucheng",
      ecdis: "1 Unit",
      echoSounder: "Ninglu ES-9000",
      radar: "Dalian Leaver RDP-021",
      gpsPlotter: "GP-1500",
      gnssNavigator: "Xinuo GN150",
      mfhf: "FT-7500",
      magneticCompass: "Ruian CPL-130D",
      ais: "1 Unit",
      radioVhf: "2 Unit"
    }
  };

  const rimauPacific = {
    name: "RIMAU PACIFIC",
    image: "/lovable-uploads/ca7133d8-83c8-437f-8fd9-e4cebcfa08f9.png",
    registry: "Jakarta",
    yearBuilt: "2022",
    flag: "Indonesia",
    classification: "BKI",
    type: "Self Propelled Crane Barge",
    loa: "63.80M",
    length: "60.50M",
    breadth: "19.00M",
    depth: "3.80M",
    gtnt: "1663/498",
    crane: {
      type: "FQ5035",
      swl: "50 Tons",
      range: "35 Meter",
      grabCapacity: "23M3 & 30M3",
      loadingRate: "18.000T per day"
    },
    engine: {
      main: "Jichai Power Co., LTD (Model C6190ZLC2) 2 unit x 550kW",
      aux1: "Yuchai Power Co., LTD (Model SB-HW4.D-150)",
      aux2: "Yuchai Power Co., LTD (Model SB-HW4.D-120)",
      aux3: "Yuchai Power Co., LTD (Model SB-HW4. D154)"
    },
    nautical: {
      publicAddressor: "Fucheng",
      telephone: "Fucheng",
      ecdis: "1 Unit",
      echoSounder: "Ninglu DS2008",
      radar: "Dalian Leaver LR1706MK",
      gpsPlotter: "GP-1500",
      gnssNavigator: "Xinuo GN150",
      mfhf: "FT-7500",
      magneticCompass: "Ruian CPL-165",
      ais: "1 Unit",
      radioVhf: "2 Unit"
    }
  };

  const VesselCard = ({ vessel }: { vessel: typeof rimauStar }) => (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-90 bg-gray-200">
        <img 
          src={vessel.image} 
          alt={vessel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-3xl font-bold text-white mb-2">{vessel.name}</h3>
          <div className="flex items-center space-x-4 text-white/90">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">{vessel.yearBuilt}</span>
            <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-semibold">{vessel.classification}</span>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-blue-50 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{vessel.crane.swl}</div>
            <div className="text-sm text-gray-600">Lifting Capacity</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{vessel.crane.range}</div>
            <div className="text-sm text-gray-600">Operating Range</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{vessel.loa}</div>
            <div className="text-sm text-gray-600">Length Overall</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{vessel.crane.loadingRate}</div>
            <div className="text-sm text-gray-600">Loading Rate</div>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="mb-8">
          <CraneContactForm craneName={vessel.name} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Vessel Information
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Port of Registry</span>
                  <span className="text-gray-900 font-semibold">{vessel.registry}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Year Built</span>
                  <span className="text-gray-900 font-semibold">{vessel.yearBuilt}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Flag</span>
                  <span className="text-gray-900 font-semibold">{vessel.flag}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Type</span>
                  <span className="text-gray-900 font-semibold">{vessel.type}</span>
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Dimensions & Capacity
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Length Overall (LOA)</span>
                  <span className="text-gray-900 font-semibold">{vessel.loa}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Length</span>
                  <span className="text-gray-900 font-semibold">{vessel.length}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Breadth</span>
                  <span className="text-gray-900 font-semibold">{vessel.breadth}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Depth</span>
                  <span className="text-gray-900 font-semibold">{vessel.depth}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">GT/NT</span>
                  <span className="text-gray-900 font-semibold">{vessel.gtnt}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Crane Specifications */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Crane Specifications
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Crane Type</span>
                  <span className="text-blue-900 font-bold">{vessel.crane.type}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Safe Working Load</span>
                  <span className="text-blue-900 font-bold">{vessel.crane.swl}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Operating Range</span>
                  <span className="text-blue-900 font-bold">{vessel.crane.range}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Grab Capacity</span>
                  <span className="text-blue-900 font-bold">{vessel.crane.grabCapacity}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Loading Rate</span>
                  <span className="text-blue-900 font-bold">{vessel.crane.loadingRate}</span>
                </div>
              </div>
            </div>

            {/* Engine & Machinery */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Engine & Machinery
              </h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded border-l-3 border-orange-500">
                  <span className="font-semibold text-gray-700 block mb-1">Main Engine:</span>
                  <span className="text-gray-600">{vessel.engine.main}</span>
                </div>
                <div className="p-3 bg-white rounded border-l-3 border-green-500">
                  <span className="font-semibold text-gray-700 block mb-1">Auxiliary Engine 1:</span>
                  <span className="text-gray-600">{vessel.engine.aux1}</span>
                </div>
                <div className="p-3 bg-white rounded border-l-3 border-purple-500">
                  <span className="font-semibold text-gray-700 block mb-1">Auxiliary Engine 2:</span>
                  <span className="text-gray-600">{vessel.engine.aux2}</span>
                </div>
                <div className="p-3 bg-white rounded border-l-3 border-red-500">
                  <span className="font-semibold text-gray-700 block mb-1">Auxiliary Engine 3:</span>
                  <span className="text-gray-600">{vessel.engine.aux3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nautical Equipment */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
            Nautical Equipment & Navigation
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">Public Addressor</div>
              <div className="text-gray-600">{vessel.nautical.publicAddressor}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">Telephone</div>
              <div className="text-gray-600">{vessel.nautical.telephone}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">ECDIS</div>
              <div className="text-gray-600">{vessel.nautical.ecdis}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">Echo Sounder</div>
              <div className="text-gray-600">{vessel.nautical.echoSounder}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">Radar</div>
              <div className="text-gray-600">{vessel.nautical.radar}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">GPS Plotter</div>
              <div className="text-gray-600">{vessel.nautical.gpsPlotter}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">GNSS Navigator</div>
              <div className="text-gray-600">{vessel.nautical.gnssNavigator}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">MF/HF</div>
              <div className="text-gray-600">{vessel.nautical.mfhf}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">Magnetic Compass</div>
              <div className="text-gray-600">{vessel.nautical.magneticCompass}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">AIS</div>
              <div className="text-gray-600">{vessel.nautical.ais}</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold text-gray-700">Radio VHF</div>
              <div className="text-gray-600">{vessel.nautical.radioVhf}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Fleet & Equipment - Floating Cranes | PT Rimau Trisukses Perkasa</title>
        <meta name="description" content="Explore our modern fleet of floating cranes including RIMAU STAR and RIMAU PACIFIC - equipped with latest technology and safety systems for maritime operations." />
        <meta name="keywords" content="floating crane fleet, RIMAU STAR, RIMAU PACIFIC, crane specifications, maritime equipment Indonesia, crane rental fleet" />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Fleet & Equipment</h1>
              <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
                Our modern fleet of floating cranes equipped with the latest technology and safety systems
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Floating Crane Fleet
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We operate two state-of-the-art self-propelled crane barges designed for complex maritime operations
              </p>
            </div>

            <div className="space-y-16">
              <VesselCard vessel={rimauStar} />
              <VesselCard vessel={rimauPacific} />
            </div>
          </div>
        </section>

        {/* Fleet Capabilities */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fleet Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Advanced technology and specifications that ensure reliable maritime operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">50T</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lifting Capacity</h3>
                <p className="text-gray-600 text-sm">50 tons safe working load for both vessels</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">35M</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Operating Range</h3>
                <p className="text-gray-600 text-sm">35 meter operational range capability</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">18K</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Loading Rate</h3>
                <p className="text-gray-600 text-sm">18,000 tons per day loading capacity</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">BKI</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Classification</h3>
                <p className="text-gray-600 text-sm">BKI certified for safety and compliance</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Fleet;
