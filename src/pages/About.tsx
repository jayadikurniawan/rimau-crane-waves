import Layout from '../components/Layout';
import { Building2, Ship, Construction, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const businessUnits = [
    {
      name: "Rimau Group",
      description: "Core holding company yang membawahi berbagai unit usaha energi, pelabuhan, dan alat berat.",
      icon: Building2,
      link: "https://rimaugroup.com",
      hasLink: true
    },
    {
      name: "Rimau Shipping",
      description: "Menyediakan jasa sewa kapal, tongkang, dan tugboat untuk kegiatan logistik laut dan ekspor batubara.",
      icon: Ship,
      link: "https://rimaushipping.com",
      hasLink: true
    },
    {
      name: "Rimau Crane & Equipment",
      description: "Menyewakan crane, alat berat, dan armada pendukung kegiatan pelabuhan, pertambangan, dan industri.",
      icon: Construction,
      link: "#",
      hasLink: false
    }
  ];

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
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <p className="text-gray-600 text-sm">
                    Provide high-quality Floating Crane services, utilizing the latest technology to meet the needs of complex maritime projects.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ensure safety and efficiency in every lifting and cargo handling operation at sea, maintaining the highest safety standards.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <p className="text-gray-600 text-sm">
                    Prioritize sustainability and environmental responsibility, optimizing resource use and minimizing negative impacts on the marine ecosystem.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    4
                  </div>
                  <p className="text-gray-600 text-sm">
                    Deliver outstanding customer service, focusing on trust, transparent communication, and timely project completion.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    5
                  </div>
                  <p className="text-gray-600 text-sm">
                    Develop a professional and skilled team, committed to providing the best Floating Crane solutions and effectively managing operational challenges at sea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Units */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Business Units
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse portfolio of companies under the Rimau Group umbrella
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {businessUnits.map((unit, index) => {
              const IconComponent = unit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {unit.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {unit.description}
                  </p>
                  {unit.hasLink && (
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full group hover:bg-blue-50 hover:border-blue-300"
                    >
                      <a 
                        href={unit.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                  {!unit.hasLink && (
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        Current Website
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
