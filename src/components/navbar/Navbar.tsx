import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

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
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          aria-label="Scroll to top"
          className="flex items-center space-x-2 hover:text-burger-sauce transition-all"
        >
          <span className="hidden lg:flex items-center text-3xl font-helvetica font-bold text-burger-dark">
            BURGER<span className="text-burger-sauce">LAB</span>
          </span>
          <span className="lg:hidden text-2xl font-helvetica font-bold text-burger-dark">
            BURGER<span className="text-burger-sauce">LAB</span>
          </span>
        </button>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-burger-dark hover:text-burger-sauce transition-all"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute w-full z-50 bg-white/90 backdrop-blur-sm shadow-lg animate-fade-in"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-6 space-y-4 animate-slide-down">
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
