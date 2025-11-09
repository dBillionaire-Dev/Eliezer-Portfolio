
import React from 'react';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* White background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-96 left-10 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-white/4 rounded-full blur-3xl"></div>
      </div>
      
      <Hero />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
