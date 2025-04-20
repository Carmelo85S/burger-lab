import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import Logo from '../../assets/logo.webp';
import LogoMobile from '../../assets/logoMobile.webp';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-2 hover:text-burger-sauce transition-all"
        >
          {/* Logo Mobile - visibile fino a 890px */}
          <img
            src={LogoMobile}
            alt="Sonjas Mobile Logo"
            className="block lg:hidden w-[100px]"
          />

          {/* Logo Desktop - visibile da 891px in su */}
          <span className="hidden lg:flex items-center text-3xl font-helvetica font-bold text-burger-dark">
            SONJAS
            <img
              src={Logo}
              className="w-[120px] mx-2"
              alt="logo"
            />
            <span className="text-burger-sauce">BURGARE</span>
          </span>
        </button>

        {/* Desktop Navigation - visibile da 891px */}
        <div className="hidden lg:flex items-center space-x-8">
          {['menu', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-lg text-burger-dark font-medium hover:text-burger-sauce transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          <Button
            onClick={() => scrollToSection('contact')}
            size="md"
            variant="sauce"
            className="ml-4 px-6 py-2 text-white font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Book Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button - visibile fino a 890px */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-burger-dark hover:text-burger-sauce transition-all"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-lg animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            {['menu', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 text-lg font-medium text-burger-dark hover:text-burger-sauce transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full text-center bg-burger-sauce hover:bg-burger-meat text-white"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
