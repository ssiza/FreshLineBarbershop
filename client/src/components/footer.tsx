import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary-custom py-12 px-6 border-t border-neutral-custom/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-poppins font-bold text-secondary-custom mb-4">Fresh Line</h3>
            <p className="text-accent-custom font-lato">
              Premium barbering services with a commitment to excellence and style.
            </p>
          </div>
          <div>
            <h4 className="font-poppins font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-accent-custom">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary-custom transition-colors">Haircuts</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary-custom transition-colors">Beard Trims</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary-custom transition-colors">Line-ups</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary-custom transition-colors">Full Grooming</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-accent-custom">
              <li><button onClick={() => scrollToSection('booking')} className="hover:text-secondary-custom transition-colors">Book Now</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="hover:text-secondary-custom transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-secondary-custom transition-colors">Contact</button></li>
              <li><button onClick={() => scrollToSection('home')} className="hover:text-secondary-custom transition-colors">About Us</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-custom hover:text-secondary-custom transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-accent-custom hover:text-secondary-custom transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-accent-custom hover:text-secondary-custom transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-custom/20 pt-8 text-center text-accent-custom">
          <p>&copy; 2024 Fresh Line Barbers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
