
import Layout from '../components/Layout';
import { Building2, Ship, Construction, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

const BusinessUnits = () => {
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
    <>
      <Helmet>
        <title>Our Business Units - Rimau Group Companies | PT Rimau Trisukses Perkasa</title>
        <meta name="description" content="Discover the diverse portfolio of companies under the Rimau Group umbrella - from shipping and crane services to heavy equipment rental across Indonesia." />
        <meta name="keywords" content="Rimau Group, business units, shipping company, crane rental, equipment rental, maritime services Indonesia" />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Business Units</h1>
              <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
                Discover the diverse portfolio of companies under the Rimau Group umbrella
              </p>
            </div>
          </div>
        </section>

        {/* Business Units Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Companies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive network of specialized companies providing integrated maritime and industrial solutions
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
    </>
  );
};

export default BusinessUnits;
