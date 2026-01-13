import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryComponent from "@/components/Gallery";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery — Shankara Music School";

    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Gallery — photos and moments from Shankara Music School classes and events.";
    if (metaDescription) {
      metaDescription.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <GalleryComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;