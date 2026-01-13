import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Instruments from "@/components/Instruments";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Shankara Music School | Guitar & Ukulele Classes in Bangalore";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn Guitar & Ukulele at Shankara Music School, Uttarahalli, Bangalore. Expert training since 2014 for all ages. Join our music classes today!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Learn Guitar & Ukulele at Shankara Music School, Uttarahalli, Bangalore. Expert training since 2014 for all ages. Join our music classes today!";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Instruments />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp CTA */}
      <WhatsAppCTA />
    </div>
  );
};

export default Index;
