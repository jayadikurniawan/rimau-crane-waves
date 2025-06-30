import Layout from '../components/Layout';
import { Map, Lightning, Compass, Gear } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Coverage = () => {
  const ports = [
    { name: "Banjarmasin", region: "South Kalimantan" },
    { name: "Kintap", region: "South Kalimantan" },
    { name: "Satui/Sei Danau", region: "South Kalimantan" },
    { name: "Bunati", region: "South Kalimantan" },
    { name: "Batulicin", region: "South Kalimantan" },
    { name: "Kotabaru", region: "South Kalimantan" },
    { name: "Tanjung Batu", region: "South Kalimantan" },
    { name: "Teluk Adang", region: "South Kalimantan" },
    { name: "Tanah Grogot", region: "East Kalimantan" },
    { name: "Balikpapan", region: "East Kalimantan" },
    { name: "Samarinda", region: "East Kalimantan" },
    { name: "Bontang", region: "East Kalimantan" },
    { name: "Sangkulirang", region: "East Kalimantan" },
    { name: "Muara Pantai", region: "East Kalimantan" },
    { name: "Tarakan", region: "North Kalimantan" },
    { name: "Pulau Bunyu", region: "North Kalimantan" },
    { name: "Morowali", region: "Central Sulawesi" },
    { name: "Bungku", region: "Central Sulawesi" },
    { name: "Kolonodale", region: "Central Sulawesi" },
    { name: "Bahaur", region: "Central Kalimantan" },
    { name: "Kuala Kapuas", region: "Central Kalimantan" },
    { name: "Sampit", region: "Central Kalimantan" }
  ];

  // Group ports by region for better organization
  const portsByRegion = ports.reduce((acc, port) => {
    if (!acc[port.region]) {
      acc[port.region] = [];
    }
    acc[port.region].push(port.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <>
      <Helmet>
        <title>Service Coverage - Operational Areas | PT Rimau Trisukses Perkasa</title>
        <meta name="description" content="Comprehensive maritime services across 22+ strategic ports in Kalimantan, Sulawesi, and other regions. 24/7 floating crane services available." />
        <meta name="keywords" content="service coverage Indonesia, floating crane coverage, maritime services Kalimantan, port operations Indonesia, crane rental locations" />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Operational Coverage</h1>
              <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
                Comprehensive maritime services across strategic ports and harbours in Indonesia
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Coverage Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our floating crane services cover major ports and harbours across Kalimantan and other strategic regions in Indonesia
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=95.2930%2C-11.0000%2C141.0194%2C7.3500&layer=mapnik&marker=-2.5489%2C118.0149"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="Service Coverage Map"
                ></iframe>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Interactive map showing our operational coverage across Indonesia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Port Listings */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ports of Call
              </h2>
              <p className="text-xl text-gray-600">
                Strategic locations where our floating crane services are available
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                PELABUHAN SINGGAH (PORTS OF CALL)
              </h3>
              
              <div className="space-y-8">
                {Object.entries(portsByRegion).map(([region, regionPorts], regionIndex) => (
                  <div key={region} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      {region}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {regionPorts.map((port, portIndex) => (
                        <div 
                          key={port} 
                          className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 hover:from-blue-100 hover:to-blue-200 transition-all duration-200 border border-blue-200 hover:border-blue-300 hover:shadow-md"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {regionIndex * 10 + portIndex + 1}
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900">{port}</h5>
                              <p className="text-xs text-gray-600">{region}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white text-center">
                <h4 className="text-xl font-bold mb-2">Total Coverage</h4>
                <p className="text-3xl font-bold mb-2">{ports.length}+ Ports</p>
                <p className="text-blue-200">Across {Object.keys(portsByRegion).length} Strategic Regions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Focus */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Strategic Regional Presence
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Kalimantan Operations</h3>
                    <p className="text-gray-600">
                      Our primary operational area covers major ports across Kalimantan, including key industrial and commercial harbours in South Kalimantan, East Kalimantan, and Central Kalimantan regions.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Sulawesi Coverage</h3>
                    <p className="text-gray-600">
                      Extended services to strategic ports in Sulawesi, supporting mining, industrial, and infrastructure development projects across the region.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">24/7 Operational Capability</h3>
                    <p className="text-gray-600">
                      Round-the-clock floating crane services with rapid response times and flexible scheduling to meet urgent project requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 h-96 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-600">{ports.length}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">{ports.length}+ Ports</h3>
                    <p className="text-blue-700 font-semibold">Active service locations across Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Benefits */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Coverage Advantages
              </h2>
              <p className="text-xl text-gray-600">
                Benefits of our extensive operational network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Map className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Wide Coverage</h3>
                <p className="text-gray-600 text-sm">Extensive network across major Indonesian ports</p>
              </div>

              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightning className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">Rapid deployment to operational areas</p>
              </div>

              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600 text-sm">Deep knowledge of regional port conditions</p>
              </div>

              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gear className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Services</h3>
                <p className="text-gray-600 text-sm">Adaptable solutions for various port requirements</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Coverage;
