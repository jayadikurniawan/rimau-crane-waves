
import Layout from '../components/Layout';

const Coverage = () => {
  const ports = [
    "Banjarmasin", "Kintap", "Satui/Sei Danau", "Bunati", "Batulicin", 
    "Kotabaru", "Tanjung Batu", "Teluk Adang", "Tanah Grogot", "Balikpapan", 
    "Samarinda", "Bontang", "Sangkulirang", "Muara Pantai", "Tarakan", 
    "Pulau Bunyu", "Morowali", "Bungku", "Kolonodale", "Bahaur", 
    "Kuala Kapuas", "Sampit"
  ];

  return (
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
            <div className="aspect-video bg-blue-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Coverage Map</h3>
                <p className="text-blue-700">Interactive map showing our operational areas</p>
              </div>
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

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              PELABUHAN SINGGAH (PORTS OF CALL)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ports.map((port, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-200">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-gray-900">{port}</h4>
                </div>
              ))}
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
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Kalimantan Operations</h3>
                  <p className="text-gray-600">
                    Our primary operational area covers major ports across Kalimantan, including key industrial and commercial harbours in South Kalimantan, East Kalimantan, and Central Kalimantan regions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Sulawesi Coverage</h3>
                  <p className="text-gray-600">
                    Extended services to strategic ports in Sulawesi, supporting mining, industrial, and infrastructure development projects across the region.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">24/7 Operational Capability</h3>
                  <p className="text-gray-600">
                    Round-the-clock floating crane services with rapid response times and flexible scheduling to meet urgent project requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-100 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-16 h-16 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">22+ Ports</h3>
                  <p className="text-blue-700">Active service locations across Indonesia</p>
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
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Wide Coverage</h3>
              <p className="text-gray-600 text-sm">Extensive network across major Indonesian ports</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">Rapid deployment to operational areas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Deep knowledge of regional port conditions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Services</h3>
              <p className="text-gray-600 text-sm">Adaptable solutions for various port requirements</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Coverage;
