
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Users, Shield, Zap, Clock, HeadphonesIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const services = [
    {
      title: "Heavy Lifting and Transport",
      description: "Provide service to lift and transport heavy cargo, such as ship parts, offshore oil and gas equipment, or large construction materials, to and from vessels or dockyards.",
      icon: ArrowUp,
      image: "/lovable-uploads/ef52d314-8b93-418f-ad44-7e9e36b01ebe.png",
      features: []
    },
    {
      title: "Port and Harbour Operation",
      description: "Provide services for assist in loading and unloading large cargo at ports and harbors, especially when shore-based cranes are unable to reach ships due to their size or depth.",
      icon: MapPin,
      image: "/lovable-uploads/3c8038b4-5c99-4f60-8824-9e3b98f95a78.png",
      features: []
    },
    {
      title: "Rental and Leasing",
      description: "Provide service for Floating Crane rental or leasing to companies in need of temporary lifting solutions for specific projects and operations.",
      icon: Users,
      image: "/lovable-uploads/28b254e9-14c9-4187-8505-d033917a1151.png",
      features: []
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Floating Crane & Maritime Equipment | PT Rimau Trisukses Perkasa</title>
        <meta name="description" content="Professional floating crane services including heavy lifting, port operations, and equipment rental. Safety-first approach with modern technology across Indonesian ports." />
        <meta name="keywords" content="floating crane services, heavy lifting transport, port harbour operations, equipment rental, maritime services Indonesia, crane operations" />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
                Comprehensive floating crane solutions for all your maritime lifting and transportation needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Floating Crane Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide innovative and reliable floating crane solutions for complex maritime projects with the highest standards of safety and efficiency.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="rounded-lg overflow-hidden shadow-xl">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-[600px] h-[500px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Committed to excellence in every maritime operation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">Highest safety standards in all operations</p>
              </div>

              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Latest Technology</h3>
                <p className="text-gray-600 text-sm">Modern equipment and advanced systems</p>
              </div>

              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Experienced Team</h3>
                <p className="text-gray-600 text-sm">Skilled professionals with maritime expertise</p>
              </div>

              <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Round-the-clock operational capability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our floating crane services and how we can support your maritime operations.
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
    </>
  );
};

export default Services;
