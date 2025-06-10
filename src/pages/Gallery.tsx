
import Layout from '../components/Layout';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: '/lovable-uploads/fd111b5d-1904-42c2-a670-b763d785e632.png',
      title: 'Rimau Star Specifications',
      category: 'vessels',
      description: 'Technical specifications and details of Rimau Star floating crane'
    },
    {
      id: 2,
      src: '/lovable-uploads/4cec1a3e-dfc9-49f6-a371-821d12e50e04.png',
      title: 'Rimau Pacific Specifications', 
      category: 'vessels',
      description: 'Technical specifications and details of Rimau Pacific floating crane'
    },
    {
      id: 3,
      src: '/lovable-uploads/a8dc817b-ded7-4795-b153-9c18b8a2da65.png',
      title: 'Floating Crane Operations',
      category: 'operations',
      description: 'Heavy lifting operations at sea with advanced crane technology'
    },
    {
      id: 4,
      src: '/lovable-uploads/ffa50296-b11b-489e-af4a-4057d8b248f4.png',
      title: 'Port Operations',
      category: 'operations', 
      description: 'Loading and unloading operations at major Indonesian ports'
    },
    {
      id: 5,
      src: '/lovable-uploads/a7535a87-a824-481b-9b62-eb14fcab5e5e.png',
      title: 'Maritime Heavy Lifting',
      category: 'operations',
      description: 'Complex lifting operations for offshore and marine projects'
    },
    {
      id: 6,
      src: '/lovable-uploads/92c3713b-b2b9-4507-868e-062633a65cab.png',
      title: 'Company Logo',
      category: 'company',
      description: 'PT Rimau Trisukses Perkasa official company branding'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'vessels', name: 'Fleet & Vessels' },
    { id: 'operations', name: 'Operations' },
    { id: 'company', name: 'Company' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery & Portfolio</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Explore our floating crane operations, fleet capabilities, and successful maritime projects
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Work in Action
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video bg-gray-200">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                      <p className="text-white/90 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                  <div className="mt-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      image.category === 'vessels' ? 'bg-blue-100 text-blue-600' :
                      image.category === 'operations' ? 'bg-green-100 text-green-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {categories.find(cat => cat.id === image.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Showcase */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our expertise across various maritime operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Heavy Lifting</h3>
              <p className="text-gray-600 text-sm">Complex lifting operations for offshore equipment and large cargo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Port Operations</h3>
              <p className="text-gray-600 text-sm">Efficient loading and unloading at major Indonesian ports</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Marine Construction</h3>
              <p className="text-gray-600 text-sm">Supporting offshore construction and infrastructure projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Response</h3>
              <p className="text-gray-600 text-sm">24/7 emergency maritime lifting and recovery services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Projects Completed</h3>
              <p className="text-gray-600 text-sm">Successfully executed maritime operations</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">22+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Port Locations</h3>
              <p className="text-gray-600 text-sm">Active service areas across Indonesia</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50T</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lifting Capacity</h3>
              <p className="text-gray-600 text-sm">Maximum crane lifting capability</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Service Availability</h3>
              <p className="text-gray-600 text-sm">Round-the-clock operational support</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
