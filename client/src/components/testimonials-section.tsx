import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-24 px-6 bg-primary-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              What Our <span className="text-secondary-custom">Clients Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background-custom p-8 rounded-xl border border-neutral-custom/20 animate-pulse">
                <div className="h-6 bg-neutral-custom/20 rounded mb-6"></div>
                <div className="h-20 bg-neutral-custom/20 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neutral-custom/20 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-neutral-custom/20 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-neutral-custom/20 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-primary-custom">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            What Our <span className="text-secondary-custom">Clients Say</span>
          </h2>
          <p className="text-xl text-accent-custom max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-background-custom p-8 rounded-xl border border-neutral-custom/20"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-secondary-custom">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-accent-custom mb-6 font-lato italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-custom rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-custom font-poppins font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-poppins font-semibold">{testimonial.name}</div>
                  <div className="text-neutral-custom text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
