
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowUp, Users, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="relative min-h-[100vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/bg-hd.jpeg')`
          }}
        >
          <div className="absolute inset-0 bg-blue-900/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Floating Crane Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                PT Rimau Trisukses Perkasa - Your trusted partner for innovative and reliable maritime lifting solutions across Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                  <Link to="/services">Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold border-2 border-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leading Maritime Solutions Provider
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specializing in floating crane operations with cutting-edge technology and unwavering commitment to safety and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About Our Company</h3>
              <p className="text-gray-600 mb-6">
                PT. Rimau Trisukses Perkasa operates in the Floating Crane industry, specializing in providing innovative and reliable solutions for a wide range of marine and heavy-lift operations. Our company is committed to delivering the highest standard of service, safety, and performance in every project we undertake.
              </p>
              <p className="text-gray-600 mb-6">
                Our Floating Cranes are equipped with the latest technology, allowing us to handle complex lifting and construction tasks at sea, in ports, and in other challenging environments. We pride ourselves on our unwavering commitment to safety, environmental responsibility, and efficiency.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/abouthome.jpeg" 
                alt="Floating Crane Operations" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive floating crane solutions for all your maritime needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Heavy Lifting and Transport</h3>
              <p className="text-gray-600">
                Specialized services for lifting and transporting heavy cargo, ship parts, and offshore equipment with precision and safety.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Port & Harbour Operation</h3>
              <p className="text-gray-600">
                Comprehensive port services including loading and unloading of large cargo when shore-based cranes cannot reach vessels.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rental and Leasing</h3>
              <p className="text-gray-600">
                Flexible floating crane rental and leasing solutions for companies requiring temporary lifting capabilities for specific projects.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your floating crane requirements and discover how we can support your maritime operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold border-2 border-black">
              <Link to="/fleet">View Our Fleet</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
