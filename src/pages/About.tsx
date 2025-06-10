
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Learn more about PT Rimau Trisukses Perkasa and our commitment to excellence in maritime services
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Brief Story About The Company
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  PT. Rimau Trisukses Perkasa operates in the Floating Crane industry, specializing in providing innovative and reliable solutions for a wide range of marine and heavy-lift operations. Our company is committed to delivering the highest standard of service, safety, and performance in every project we undertake.
                </p>
                <p>
                  Our Floating Cranes are equipped with the latest technology, allowing us to handle complex lifting and construction tasks at sea, in ports, and in other challenging environments. We pride ourselves on our unwavering commitment to safety, environmental responsibility, and efficiency. Our team of highly skilled professionals are dedicated to ensuring that each project is completed on time, within budget, and to the highest quality standards.
                </p>
                <p>
                  We strive to build long-lasting relationships with our Clients by providing personalized, cost-effective, and flexible solutions that meet their unique needs. Whether it's lifting heavy cargo, installing large structures, or supporting offshore operations, PT. Rimau Trisukses Perkasa is your trusted partner in the Floating Crane industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/a7535a87-a824-481b-9b62-eb14fcab5e5e.png" 
                alt="Company Operations" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">VISION</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To be a leading company in the maritime transportation and construction industry by providing innovative, efficient, and safe Floating Crane solutions that support global maritime infrastructure development.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">MISSION</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                Provide high-quality Floating Crane services, utilizing the latest technology to meet the needs of complex maritime projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Points */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Commitments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <p className="text-gray-600">
                Ensure safety and efficiency in every lifting and cargo handling operation at sea, maintaining the highest safety standards.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <p className="text-gray-600">
                Prioritize sustainability and environmental responsibility, optimizing resource use and minimizing negative impacts on the marine ecosystem.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <p className="text-gray-600">
                Deliver outstanding customer service, focusing on trust, transparent communication, and timely project completion.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <p className="text-gray-600">
                Develop a professional and skilled team, committed to providing the best Floating Crane solutions and effectively managing operational challenges at sea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
