import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import ImageModal from '../components/ImageModal';
import { Project } from "@/types/Project";
import { UIProject } from '@/types/UIproject';

const BrandIdentity: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [projects, setProjects] = useState<UIProject[]>([]);
  const [loading, setLoading] = useState(true);

  // Hardcoded brand identity projects
  const brandProjects: UIProject[] = [
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

  // Combine backend + hardcoded projects
  const allProjects: UIProject[] = [...projects, ...brandProjects];

  const handleImageClick = (index: number) => setCurrentIndex(index);

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

  // Fetch backend projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
        console.log("API response:", res.data);
        
          const filtered: UIProject[] = res.data.data
          .filter((p: Project) => p.page_category === "brand-identity")
          .map((p: Project) => ({
            title: p.title,
            category: p.category,
            description: p.description,
            image: p.imageUrl,
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
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen relative" style={{ backgroundColor: '#324391' }}>
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-72 h-72 bg-white/4 rounded-full blur-3xl"></div>
        <div className="absolute top-80 right-16 w-56 h-56 bg-white/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-32 h-1 bg-white/10 rotate-45"></div>
        <div className="absolute bottom-60 left-1/4 w-24 h-1 bg-white/8 -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Brand Identity</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete brand identity solutions including logo design, brand strategy,
            and visual identity systems for businesses across various industries.
          </p>
        </div>

        {/* Render all projects (backend + hardcoded) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                onClick={() => handleImageClick(index)}
                hoverText="View Project"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal for both backend + hardcoded */}
      <ImageModal
        isOpen={currentIndex !== null}
        onClose={() => setCurrentIndex(null)}
        imageSrc={currentIndex !== null ? allProjects[currentIndex].image : ''}
        imageAlt={currentIndex !== null ? allProjects[currentIndex].title : ''}
        onNext={goToNext}
        onPrev={goToPrev}
        showNext
        showPrev
      />

    </div>
  );
};

export default BrandIdentity;
