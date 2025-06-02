import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import BookingSection from "@/components/booking-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-custom">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <BookingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
