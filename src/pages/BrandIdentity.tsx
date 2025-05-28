import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ImageModal from '../components/ImageModal';

const BrandIdentity = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const brandProjects = [
    {
      title: "WE DETAIL CARS",
      category: "Auto Detailing Brand",
      image: "/images/Brand/Brand1.png",
      description: "Complete brand identity for premium auto detailing service"
    },
    {
      title: "Auto Branding",
      category: "Auto Detailing Services",
      image: "/images/Brand/Brand2.png",
      description: "Logo and brand system for consulting firm"
    },
    {
      title: "ABR Auto Detailing",
      category: "Automotive Services",
      image: "/images/Brand/Brand3.png",
      description: "Automobile company brand identity and materials"
    },
    {
      title: "ABR Auto Detailing",
      category: "Automotive Services",
      image: "/images/Brand/Brand4.jpg",
      description: "Brand identity for premium auto detailing services"
    },
    {
      title: "ABR Auto Detailing",
      category: "Automotive Services",
      image: "/images/Brand/Brand5.jpg",
      description: "Premium Brand identity for auto detailing company"
    },
    {
      title: "ABR Auto Detailing",
      category: "Automotive Services",
      image: "/images/Brand/Brand6.jpg",
      description: "Professional brand for quality standards company"
    },
    {
      title: "ABR Auto Detailing",
      category: "Automotive Services",
      image: "/images/Brand/Brand7.jpg",
      description: "Brand identity for premium auto detailing services"
    },
    {
      title: "ABR Auto Detailing",
      category: "Automotive Services",
      image: "/images/Brand/Brand8.jpg",
      description: "Brand identity for premium auto detailing services"
    },
    {
      title: "ABR Auto Detailing",
      category: "Production Co.",
      image: "/images/Brand/Brand9.jpg",
      description: "Business Card Design for a Soap Production Company"
    },
    {
      title: "Business Detail",
      category: "Production Co.",
      image: "/images/Brand/Brand10.jpg",
      description: "Business Card Design for a Soap Production Company"
    },
    {
      title: "Business Card",
      category: "Personal Branding",
      image: "/images/Brand/Brand11.jpg",
      description: "Business Card Design for a Digital Creator"
    },
    {
      title: "ZDGWORLD Inc.",
      category: "Personal Branding",
      image: "/images/Brand/Brand12.jpg",
      description: "Business Card Design for a Digital Creator"
    },
    {
      title: "Juannes Industry",
      category: "Co-operate Branding",
      image: "/images/Brand/Brand13.jpg",
      description: "Business Card Design for an ICT Company"
    },
    {
      title: "Business Card",
      category: "Co-operate Branding",
      image: "/images/Brand/Brand14.jpg",
      description: "Business Card Design for an ICT Company"
    },
    {
      title: "Logo Design",
      category: "Co-operate Branding",
      image: "/images/Brand/Brand15.jpg",
      description: "Logo Design for a Consulting Brand"
    }
  ];

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex !== null && currentIndex < brandProjects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen relative" style={{ backgroundColor: '#324391' }}>
      {/* White background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-72 h-72 bg-white/4 rounded-full blur-3xl"></div>
        <div className="absolute top-80 right-16 w-56 h-56 bg-white/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>

        {/* Geometric white shapes */}
        <div className="absolute top-40 right-1/4 w-32 h-1 bg-white/10 rotate-45"></div>
        <div className="absolute bottom-60 left-1/4 w-24 h-1 bg-white/8 -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Brand Identity
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete brand identity solutions including logo design, brand strategy,
            and visual identity systems for businesses across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandProjects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard
                {...project}
                onClick={() => handleImageClick(index)}
                hoverText="View Project"
              />
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={currentIndex !== null}
        onClose={() => setCurrentIndex(null)}
        imageSrc={currentIndex !== null ? brandProjects[currentIndex].image : ''}
        imageAlt={currentIndex !== null ? brandProjects[currentIndex].title : ''}
        onNext={goToNext}
        onPrev={goToPrev}
        showNext={currentIndex !== null && currentIndex < brandProjects.length - 1}
        showPrev={currentIndex !== null && currentIndex > 0}
      />
    </div>
  );
};

export default BrandIdentity;

