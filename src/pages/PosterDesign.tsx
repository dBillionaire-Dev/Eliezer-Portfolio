import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ImageModal from '../components/ImageModal';

const PosterDesign = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const posterProjects = [
    {
      title: "Soda Launch",
      category: "Soda Poster",
      image: "/images/Poster/Poster1.jpg",
      description: "Product Poster for a Soda Drink"
    },
    {
      title: "Luxury Fragrance",
      category: "Product Launch",
      image: "/images/Poster/Poster2.jpg",
      description: "Elegance Poster for Luxury Perfume Campaign"
    },
    {
      title: "Elegant Skincare",
      category: "Product Launch",
      image: "/images/Poster/Poster3.jpg",
      description: "Product Poster for Skincare Product"
    },
    {
      title: "Jewelry Design",
      category: "Beauty Product",
      image: "/images/Poster/Poster4.jpg",
      description: "Modern Corporate Poster for Jewelry Brand"
    },
    {
      title: "EvoUltra Technologies",
      category: "Technology Poster",
      image: "/images/Poster/Poster5.jpg",
      description: "Product Poster for an Ultra Laptop Release"
    },
    {
      title: "Tech Gadgets",
      category: "Gadgets Design",
      image: "/images/Poster/Poster6.jpg",
      description: "Poster Design for a New Smart Tablet Release"
    },
    {
      title: "TechPro Pods",
      category: "Gadget Pre-Release",
      image: "/images/Poster/Poster7.jpg",
      description: "Pre-Launch Product Poster for New Earbuds"
    },
    {
      title: "Chemical Audio",
      category: "Headphones Arrival",
      image: "/images/Poster/Poster8.jpg",
      description: "Headphones Product Design Poster"
    }
  ];

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! > 0 ? prev! - 1 : prev));
    }
  };

  const goToNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! < posterProjects.length - 1 ? prev! + 1 : prev));
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
            Poster Design
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creative poster designs for events, promotions and campaigns. Each design combines striking visuals with compelling typography to make a lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posterProjects.map((project, index) => (
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
        imageSrc={currentIndex !== null ? posterProjects[currentIndex].image : ''}
        imageAlt={currentIndex !== null ? posterProjects[currentIndex].title : ''}
        onNext={goToNext}
        onPrev={goToPrev}
        showNext={currentIndex !== null && currentIndex < posterProjects.length - 1}
        showPrev={currentIndex !== null && currentIndex > 0}
      />
    </div>
  );
};

export default PosterDesign;

