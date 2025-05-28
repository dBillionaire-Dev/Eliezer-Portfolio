import React from 'react';
import { Palette, Megaphone, Layout, Printer, Globe, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Identity",
      description: "Logo design, brand strategy, and visual identity systems that capture your brand's essence and communicate your values effectively.",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography Systems"]
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Social Media Design",
      description: "Custom graphics and content creation for social media platforms to boost engagement and build your online presence.",
      features: ["Social Media Posts", "Story Templates", "Cover Designs", "Content Strategy"]
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "Marketing Materials",
      description: "Promotional materials, advertisements and print design that effectively communicate your message and drive results.",
      features: ["Flyers & Brochures", "Business Cards", "Banners", "Digital Ads"]
    },
    {
      icon: <Printer className="w-12 h-12" />,
      title: "Print Design",
      description: "High-quality print materials designed with attention to detail and optimized for various printing processes.",
      features: ["Posters", "Magazines", "Packaging", "Stationery"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Graphics",
      description: "Digital graphics and UI elements for websites and applications that enhance user experience and visual appeal.",
      features: ["Web Banners", "UI Elements", "Icons", "Illustrations"]
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Photography Direction",
      description: "Art direction for photography projects to ensure visual consistency and brand alignment across all media.",
      features: ["Photo Styling", "Brand Photography", "Product Shots", "Creative Direction"]
    }
  ];

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen relative" style={{ backgroundColor: '#324391' }}>
      {/* White background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-36 right-24 w-88 h-88 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute top-80 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-16 w-64 h-64 bg-white/4 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive design services to help your brand stand out and communicate effectively 
            across all touchpoints and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ backgroundColor: '#2A3A7A', animationDelay: `${index * 100}ms` }}
            >
              <div className="text-orange-400 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tools I Use
          </h2>
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xl">Ps</span>
              </div>
              <p className="text-gray-300 text-sm">Photoshop</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xl">Ai</span>
              </div>
              <p className="text-gray-300 text-sm">Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
