import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import ImageModal from '../components/ImageModal';
import { Project } from "@/types/Project";

const PosterDesign: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Hardcoded poster projects
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
    },
    {
      title: "Birthday Card",
      category: "Celebration Poster",
      image: "/images/Poster/Poster9.png",
      description: "Birthday Event Poster Design"
    }
  ];

  // ✅ Combine backend and local posters
  const allProjects = [...projects, ...posterProjects];

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex(prev => (prev! > 0 ? prev! - 1 : allProjects.length - 1));
    }
  };

  const goToNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex(prev => (prev! < allProjects.length - 1 ? prev! + 1 : 0));
    }
  };

  // ✅ Fetch projects from backend
  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);

      console.log("API response:", res.data);

      const filtered = res.data.data
        .filter((p: Project) => p.page_category === "poster-design")
        .map((p: Project) => ({
          ...p,
          imageUrl: `${import.meta.env.VITE_API_URL}${p.imageUrl}`,
        }));

      setProjects(filtered);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchProjects();
}, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen relative"
      style={{ backgroundColor: '#324391' }}
    >
      {/* ✅ Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-72 h-72 bg-white/4 rounded-full blur-3xl"></div>
        <div className="absolute top-80 right-16 w-56 h-56 bg-white/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-32 h-1 bg-white/10 rotate-45"></div>
        <div className="absolute bottom-60 left-1/4 w-24 h-1 bg-white/8 -rotate-12"></div>
      </div>

      {/* ✅ Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Poster Design
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creative poster designs for events, promotions and campaigns. Each design combines striking visuals with compelling typography to make a lasting impact.
          </p>
        </div>

        {/* ✅ Render all projects (backend + hardcoded) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                image={
                  "imageUrl" in project
                    ? project.imageUrl
                    : project.image 
                }
                onClick={() => handleImageClick(index)}
                hoverText="View Project"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Image Modal now works for both backend + hardcoded posters */}
      <ImageModal
        isOpen={currentIndex !== null}
        onClose={() => setCurrentIndex(null)}
        imageSrc={
          currentIndex !== null
            ? "imageUrl" in allProjects[currentIndex]
              ? allProjects[currentIndex].imageUrl
              : allProjects[currentIndex].image
            : ''
        }
        imageAlt={currentIndex !== null ? allProjects[currentIndex].title : ''}
        onNext={goToNext}
        onPrev={goToPrev}
        showNext={true}  
        showPrev={true} 
      />
    </div>
  );
};

export default PosterDesign;
