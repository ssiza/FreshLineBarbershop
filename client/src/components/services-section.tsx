import { Scissors, UserCheck, Ruler, Sparkles } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Haircuts",
    description: "Classic to contemporary cuts tailored to your style and face shape",
    price: "$25",
    priceNote: "Starting price"
  },
  {
    icon: UserCheck,
    title: "Beard Trims",
    description: "Professional beard shaping and maintenance for the perfect look",
    price: "$15",
    priceNote: "Starting price"
  },
  {
    icon: Ruler,
    title: "Line-ups",
    description: "Clean, precise line-ups for sharp, defined edges and perfect finish",
    price: "$10",
    priceNote: "Starting price"
  },
  {
    icon: Sparkles,
    title: "Full Grooming",
    description: "Complete package: cut, beard trim, line-up, and styling",
    price: "$40",
    priceNote: "Complete package"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background-custom">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Our <span className="text-secondary-custom">Services</span>
          </h2>
          <p className="text-xl text-accent-custom max-w-2xl mx-auto">
            From classic cuts to modern styles, we offer a full range of premium barbering services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="service-card bg-primary-custom p-8 rounded-xl border border-neutral-custom/20 hover:border-secondary-custom/50 transition-all duration-300"
              >
                <div className="text-center">
                  <IconComponent className="h-10 w-10 text-secondary-custom mb-6 mx-auto" />
                  <h3 className="text-2xl font-poppins font-semibold mb-4">{service.title}</h3>
                  <p className="text-accent-custom mb-6 font-lato">
                    {service.description}
                  </p>
                  <div className="text-3xl font-poppins font-bold text-secondary-custom mb-2">
                    {service.price}
                  </div>
                  <div className="text-sm text-neutral-custom">{service.priceNote}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-secondary-custom text-secondary-custom hover:bg-secondary-custom hover:text-primary-custom font-poppins font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
