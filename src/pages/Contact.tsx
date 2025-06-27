
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Get in touch with our team to discuss your floating crane requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-6">Office Address</h3>
                <div className="text-gray-600 space-y-3 mb-8">
                  <p className="font-medium">Jalan AM Sangaji No.11 BCDE</p>
                  <p>Kel. Petojo Utara, Kec. Gambir</p>
                  <p>Jakarta Pusat - 10130</p>
                  <p>Indonesia</p>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Phone</p>
                      <p className="text-gray-600 text-lg">+62 81993334444</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Email</p>
                      <p className="text-gray-600 text-lg">rimautrisuksesperkasa@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-6">Service Areas</h3>
                <div className="text-gray-600 mb-8">
                  <p>Primary coverage across Kalimantan ports including Banjarmasin, Balikpapan, Samarinda, Bontang, and 18+ other strategic locations.</p>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">24/7 Emergency Response</h4>
                  <p className="text-gray-600 mb-3">Available for urgent maritime operations</p>
                  <p className="text-lg text-gray-700">
                    For urgent requests, please call us directly at <strong className="text-blue-900">+62 81993334444</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Jakarta's business district</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=106.8100%2C-6.1750%2C106.8300%2C-6.1550&layer=mapnik&marker=-6.1650%2C106.8200"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Office Location Map"
              ></iframe>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="text-center">
                <h3 className="text-lg font-bold text-blue-900 mb-2">PT Rimau Trisukses Perkasa</h3>
                <p className="text-blue-700">Jalan AM Sangaji No.11 BCDE, Jakarta Pusat - 10130</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
