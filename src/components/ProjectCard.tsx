
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description?: string;
  link?: string;
  onClick?: () => void;
  hoverText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, description, link, onClick, hoverText = "See more" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      navigate(link);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer" style={{ backgroundColor: '#2A3A7A' }} onClick={handleClick}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            {category}
          </p>
          {description && (
            <p className="text-gray-300 text-sm mt-3">
              {description}
            </p>
          )}
        </div>
      </div>
      
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-medium">{hoverText}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
