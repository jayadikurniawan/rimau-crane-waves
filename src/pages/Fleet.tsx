
import Layout from '../components/Layout';

const Fleet = () => {
  const rimauStar = {
    name: "RIMAU STAR",
    image: "/lovable-uploads/fd111b5d-1904-42c2-a670-b763d785e632.png",
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
    image: "/lovable-uploads/4cec1a3e-dfc9-49f6-a371-821d12e50e04.png",
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 bg-gray-200">
        <img 
          src={vessel.image} 
          alt={vessel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white">{vessel.name}</h3>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Basic Information */}
        <div>
          <h4 className="text-lg font-bold text-blue-900 mb-3">Vessel Information</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Port of Registry:</span>
              <p className="text-gray-600">{vessel.registry}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Year of Built:</span>
              <p className="text-gray-600">{vessel.yearBuilt}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Flag:</span>
              <p className="text-gray-600">{vessel.flag}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Classification:</span>
              <p className="text-gray-600">{vessel.classification}</p>
            </div>
            <div className="col-span-2">
              <span className="font-semibold text-gray-700">Type:</span>
              <p className="text-gray-600">{vessel.type}</p>
            </div>
          </div>
        </div>

        {/* Dimensions */}
        <div>
          <h4 className="text-lg font-bold text-blue-900 mb-3">Dimensions</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-700">LOA:</span>
              <p className="text-gray-600">{vessel.loa}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Length:</span>
              <p className="text-gray-600">{vessel.length}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Breadth:</span>
              <p className="text-gray-600">{vessel.breadth}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Depth:</span>
              <p className="text-gray-600">{vessel.depth}</p>
            </div>
            <div className="col-span-2">
              <span className="font-semibold text-gray-700">GT/NT:</span>
              <p className="text-gray-600">{vessel.gtnt}</p>
            </div>
          </div>
        </div>

        {/* Crane Specifications */}
        <div>
          <h4 className="text-lg font-bold text-blue-900 mb-3">Crane Specification</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Type of Crane:</span>
              <p className="text-gray-600">{vessel.crane.type}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">SWL:</span>
              <p className="text-gray-600">{vessel.crane.swl}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Range:</span>
              <p className="text-gray-600">{vessel.crane.range}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Grab Capacity:</span>
              <p className="text-gray-600">{vessel.crane.grabCapacity}</p>
            </div>
            <div className="col-span-2">
              <span className="font-semibold text-gray-700">Loading Rate:</span>
              <p className="text-gray-600">{vessel.crane.loadingRate}</p>
            </div>
          </div>
        </div>

        {/* Engine & Machinery */}
        <div>
          <h4 className="text-lg font-bold text-blue-900 mb-3">Engine & Machinery</h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Main Engine:</span>
              <p className="text-gray-600">{vessel.engine.main}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Auxiliary Engine 1:</span>
              <p className="text-gray-600">{vessel.engine.aux1}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Auxiliary Engine 2:</span>
              <p className="text-gray-600">{vessel.engine.aux2}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Auxiliary Engine 3:</span>
              <p className="text-gray-600">{vessel.engine.aux3}</p>
            </div>
          </div>
        </div>

        {/* Nautical Equipment */}
        <div>
          <h4 className="text-lg font-bold text-blue-900 mb-3">Nautical Equipment</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Public Addressor:</span>
              <p className="text-gray-600">{vessel.nautical.publicAddressor}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Telephone:</span>
              <p className="text-gray-600">{vessel.nautical.telephone}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">ECDIS:</span>
              <p className="text-gray-600">{vessel.nautical.ecdis}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Echo Sounder:</span>
              <p className="text-gray-600">{vessel.nautical.echoSounder}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Radar:</span>
              <p className="text-gray-600">{vessel.nautical.radar}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">GPS Plotter:</span>
              <p className="text-gray-600">{vessel.nautical.gpsPlotter}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">GNSS Navigator:</span>
              <p className="text-gray-600">{vessel.nautical.gnssNavigator}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">MF/HF:</span>
              <p className="text-gray-600">{vessel.nautical.mfhf}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Magnetic Compass:</span>
              <p className="text-gray-600">{vessel.nautical.magneticCompass}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">AIS:</span>
              <p className="text-gray-600">{vessel.nautical.ais}</p>
            </div>
            <div className="col-span-2">
              <span className="font-semibold text-gray-700">Radio VHF:</span>
              <p className="text-gray-600">{vessel.nautical.radioVhf}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
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
  );
};

export default Fleet;
