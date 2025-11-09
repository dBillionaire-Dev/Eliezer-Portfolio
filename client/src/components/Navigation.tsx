
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import Logo from '/logo.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Brand Identity', path: '/brand-identity' },
    { name: 'Business/Ad Creatives', path: '/business-creatives' },
    { name: 'Poster Design', path: '/poster-design' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Me', path: '/#contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50 border-b" style={{ backgroundColor: 'black', borderColor: '#5A6FA3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-20 h-20">
              <img src={Logo} alt='Impulse-Logo' />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                smooth
                to={item.path}
                className={`relative transition-colors duration-200 hover:text-orange-400 ${isActive(item.path) ? 'text-orange-400' : 'text-gray-300'
                  } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-400 after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive(item.path) ? 'after:scale-x-100' : ''
                  }`}
              >
                {item.name}
              </HashLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t" style={{ backgroundColor: '#324391', borderColor: '#5A6FA3' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <HashLink
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-orange-400 ${isActive(item.path) ? 'text-orange-400' : 'text-gray-300'
                    }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </HashLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
