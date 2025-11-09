
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Brand Identity",
      category: "Corporate Design",
      image: "/images/Brand/Brand3.png",
      description: "Complete brand identity solutions for modern businesses",
      link: "/brand-identity"
    },
    {
      title: "Business/Ad Creatives",
      category: "Marketing Materials",
      image: "/images/Social/Social8.jpg",
      description: "Eye-catching advertisements and business collaterals",
      link: "/business-creatives"
    },
    {
      title: "Poster Design",
      category: "Print Design",
      image: "/images/Poster/Poster1.jpg",
      description: "Creative poster designs for events and promotions",
      link: "/poster-design"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#465D93' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my creative work across various design disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
