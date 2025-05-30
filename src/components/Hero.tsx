
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Eliezer from '/Eliezer-headshot.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hello, I'm a
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Freelance
                  </span>
                  <br />
                  Graphic Designer
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  I specialize in brand identity, social media and marketing design.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToProjects}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  View My Work
                  <ArrowRight size={20} />
                </button>

                <a href="files/Eliezer_Ekunke_Resume.pdf" download="Eliezer Ekunke's Resume.pdf">
                  <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                    Download My CV
                    <Download size={20} />
                  </button>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-blue-600 rounded-2xl overflow-hidden shadow-2xl p-1">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                  <img
                    src={Eliezer}
                    alt="Eliezer Ekunke - Graphic Designer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
