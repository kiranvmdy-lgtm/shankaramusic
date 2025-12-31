import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Music class in session" },
  { src: gallery2, alt: "Students learning guitar" },
  { src: gallery3, alt: "Music seminar event" },
  { src: gallery4, alt: "Guitar practice session" },
  { src: gallery5, alt: "Student performance" },
  { src: gallery6, alt: "Group music class" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };
  
  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Moments</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Glimpses of our music classes, student performances, and memorable events 
            at Shankara Music School.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-foreground font-medium transition-opacity duration-300">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Justdial Link */}
        <div className="text-center mt-12">
          <a
            href="https://jsdl.in/DT-15EEWC4HLET"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View more photos on Justdial →
          </a>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center animate-fade-in">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
