
import React from 'react';
import { Palette, Megaphone, Layout } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Logo design, brand strategy, and visual identity systems."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Social Media",
      description: "Custom graphics and content creation for social media platforms."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Marketing",
      description: "Promotional materials, advertisements and print design."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#2A3A7A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl hover:scale-105 transition-all duration-300 text-center animate-fade-in"
              style={{ backgroundColor: '#465D93', animationDelay: `${index * 200}ms` }}
            >
              <div className="text-orange-400 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
