import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary-custom/95 backdrop-blur-sm border-b border-neutral-custom/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-poppins font-bold text-secondary-custom">Fresh Line</h1>
            <span className="text-white ml-2 font-poppins">Barbers</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-secondary-custom transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-secondary-custom transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-secondary-custom transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="text-white hover:text-secondary-custom transition-colors"
            >
              Book Now
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-secondary-custom transition-colors"
            >
              Contact
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-custom border-t border-neutral-custom/20">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-white hover:text-secondary-custom transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-white hover:text-secondary-custom transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-3 py-2 text-white hover:text-secondary-custom transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="block w-full text-left px-3 py-2 text-white hover:text-secondary-custom transition-colors"
              >
                Book Now
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-white hover:text-secondary-custom transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
