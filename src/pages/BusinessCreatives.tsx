import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ImageModal from '../components/ImageModal';

const BusinessCreatives = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const businessProjects = [
    {
      title: "CAR PAINT PROMOTION",
      category: "Auto Detailing Brand",
      image: "/images/Social/Social1.png",
      description: "Business Poster for an Auto-detailing Brand"
    },
    {
      title: "Car Hire Service",
      category: "Transportation",
      image: "/images/Social/Social2.jpg",
      description: "Premium Car Rental Service Advertisement"
    },
    {
      title: "Real Estate Investment",
      category: "Property Marketing",
      image: "/images/Social/Social3.png",
      description: "Ad Creative for a Real Estate new project Launch"
    },
    {
      title: "Admission Campaign",
      category: "Educational Marketing",
      image: "/images/Social/Social4.jpg",
      description: "Ad Creative for student admission"
    },
    {
      title: "Travel Vacation Package",
      category: "Tourism Marketing",
      image: "/images/Social/Social5.jpg",
      description: "Tropical Vacation Marketing Promotional Design"
    },
    {
      title: "Flight Deals Promotion",
      category: "Travel Marketing",
      image: "/images/Social/Social6.jpg",
      description: "International Flight Booking Promotional Materials"
    },
    {
      title: "Flight Deals Promotion",
      category: "Travel Marketing",
      image: "/images/Social/Social7.jpg",
      description: "Ad Creative for a Travel/ Tour Agency"
    },
    {
      title: "Pizza Restaurant Opening",
      category: "Restaurant Marketing",
      image: "/images/Social/Social8.jpg",
      description: "Grand Opening Promotional Campaign for Pizza Restaurant"
    },
    {
      title: "Cake Bakery",
      category: "Food Marketing",
      image: "/images/Social/Social9.jpg",
      description: "Sweet Promotional Design for Artisan Bakery"
    },
    {
      title: "Naija Bites Restaurant",
      category: "Food & Beverage",
      image: "/images/Social/Social10.jpg",
      description: "Menu Design and Promotional Material for Restaurant"
    }
  ];

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };


  const goToNext = () => {
    if (currentIndex !== null && currentIndex < businessProjects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
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
            Business/Ad Creatives
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Eye-catching business advertisements and creative marketing materials designed to capture attention and drive results across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessProjects.map((project, index) => (
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
        imageSrc={currentIndex !== null ? businessProjects[currentIndex].image : ''}
        imageAlt={currentIndex !== null ? businessProjects[currentIndex].title : ''}
        onNext={goToNext}
        onPrev={goToPrev}
        showNext={currentIndex !== null && currentIndex < businessProjects.length - 1}
        showPrev={currentIndex !== null && currentIndex > 0}
      />
    </div>
  );
};

export default BusinessCreatives;