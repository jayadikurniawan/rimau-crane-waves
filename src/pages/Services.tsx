
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Heavy Lifting and Transport",
      description: "Provide service to lift and transport heavy cargo, such as ship parts, offshore oil and gas equipment, or large construction materials, to and from vessels or dockyards.",
      features: [
        "Ship parts and components",
        "Offshore oil and gas equipment",
        "Large construction materials",
        "Precision handling and positioning",
        "Safety-first approach"
      ]
    },
    {
      title: "Port and Harbour Operation",
      description: "Provide services for assist in loading and unloading large cargo at ports and harbors, especially when shore-based cranes are unable to reach ships due to their size or depth.",
      features: [
        "Large cargo handling",
        "Deep water operations",
        "Port accessibility solutions",
        "Efficient loading/unloading",
        "24/7 operational capability"
      ]
    },
    {
      title: "Rental and Leasing",
      description: "Provide service for Floating Crane rental or leasing to companies in need of temporary lifting solutions for specific projects and operations.",
      features: [
        "Flexible rental terms",
        "Project-specific solutions",
        "Temporary lifting capabilities",
        "Cost-effective options",
        "Professional operation support"
      ]
    }
  ];

  return (
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
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-blue-100 rounded-lg p-8 h-64 flex items-center justify-center">
                    <div className="text-blue-600 text-6xl font-bold">{index + 1}</div>
                  </div>
                </div>
              </div>
            ))}
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
              Our commitment to excellence sets us apart in the maritime industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">Highest safety standards in all operations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Latest Technology</h3>
              <p className="text-gray-600 text-sm">Modern equipment and advanced systems</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600 text-sm">Skilled professionals with maritime expertise</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
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
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link to="/fleet">View Our Fleet</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
