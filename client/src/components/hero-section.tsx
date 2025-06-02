export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Professional barbershop interior" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 hero-gradient z-10"></div>
      
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
          Premium <span className="text-secondary-custom">Barbering</span><br/>
          Crafted to <span className="text-secondary-custom">Perfection</span>
        </h1>
        <p className="text-xl md:text-2xl text-accent-custom mb-8 font-lato font-light max-w-2xl mx-auto">
          Experience the finest cuts, trims, and grooming services in the heart of the city. Where tradition meets modern style.
        </p>
        <button 
          onClick={scrollToBooking}
          className="bg-secondary-custom hover:bg-yellow-500 text-primary-custom font-poppins font-semibold py-4 px-12 text-lg rounded-lg transition-all duration-300 gold-glow hover:shadow-xl transform hover:scale-105"
        >
          Book Your Cut
        </button>
        <div className="mt-12 flex justify-center space-x-8 text-accent-custom">
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold text-secondary-custom">5+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold text-secondary-custom">500+</div>
            <div className="text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-poppins font-bold text-secondary-custom">4.9</div>
            <div className="text-sm">Star Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
