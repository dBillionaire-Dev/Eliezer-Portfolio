
import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t" style={{ backgroundColor: '#1F2A5F', borderColor: '#3A4E8A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl bg-gradient-to-br from-orange-400 to-blue-500 bg-clip-text text-transparent font-bold">IMPULSE GRID</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating stunning brand identities, marketing materials, and creative designs
              that help businesses stand out and connect with their audience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">Home</a></li>
              <li><a href="/brand-identity" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">Brand Identity</a></li>
              <li><a href="/business-creatives" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">Business Creatives</a></li>
              <li><a href="/poster-design" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">Poster Design</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200"><a href='mailto:impulse.grid@gmail.com' target="_blank">hello@impulse.grid.io</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200"><a href='tel:+2349039143840' target="_blank">+234-903-914-3840</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderColor: '#3A4E8A' }}>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Eliezer Ekunke. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-500 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-orange-400 fill-current" />
            <span className="hover:text-orange-400 transition-colors duration-200">by <a href="https://nexdbillionairedev.vercel.app/" target="_blank">Nexy(Nex.Dev)</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
