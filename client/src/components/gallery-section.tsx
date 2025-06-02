const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "Professional fade haircut"
  },
  {
    src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "Professional beard styling"
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "Classic pompadour haircut"
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "Professional barber tools"
  },
  {
    src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "Modern undercut hairstyle"
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "Vintage barbershop atmosphere"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "Professional beard grooming"
  },
  {
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "Clean line-up work"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-6 bg-primary-custom">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Our <span className="text-secondary-custom">Work</span>
          </h2>
          <p className="text-xl text-accent-custom max-w-2xl mx-auto">
            See the transformation. Browse our gallery of recent cuts and styles
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-item overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-secondary-custom text-secondary-custom hover:bg-secondary-custom hover:text-primary-custom font-poppins font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
