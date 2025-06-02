import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-background-custom">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Visit Our <span className="text-secondary-custom">Shop</span>
          </h2>
          <p className="text-xl text-accent-custom max-w-2xl mx-auto">
            Located in the heart of downtown. Easy parking and convenient hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-poppins font-semibold mb-6 text-secondary-custom">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-secondary-custom text-xl w-8 h-8" />
                  <div className="ml-4">
                    <div className="font-poppins font-medium">123 Main Street</div>
                    <div className="text-accent-custom">Downtown District, NY 10001</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-secondary-custom text-xl w-8 h-8" />
                  <div className="ml-4">
                    <div className="font-poppins font-medium">(555) 123-CUTS</div>
                    <div className="text-accent-custom">Call for appointments</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-secondary-custom text-xl w-8 h-8" />
                  <div className="ml-4">
                    <div className="font-poppins font-medium">info@freshlinebarbers.com</div>
                    <div className="text-accent-custom">Email us anytime</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-semibold mb-6 text-secondary-custom">Hours of Operation</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-neutral-custom/20 pb-2">
                  <span>Monday - Friday</span>
                  <span className="text-accent-custom">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-neutral-custom/20 pb-2">
                  <span>Saturday</span>
                  <span className="text-accent-custom">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-neutral-custom/20 pb-2">
                  <span>Sunday</span>
                  <span className="text-accent-custom">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-primary-custom p-2 rounded-xl border border-neutral-custom/20 h-96">
              <div className="w-full h-full bg-neutral-custom/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-accent-custom">
                  <MapPin className="h-16 w-16 mb-4 text-secondary-custom mx-auto" />
                  <div className="font-poppins font-medium">Interactive Map</div>
                  <div className="text-sm">Google Maps integration</div>
                  <div className="text-xs mt-2 text-neutral-custom">
                    Map would be integrated here with actual location
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
