import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutComponent from "@/components/About";

const About = () => {
  useEffect(() => {
    document.title = "About — Shankara Music School";

    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "About Shankara Music School — our mission, history, and teaching approach.";
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
        <AboutComponent />
      </main>
      <Footer />
    </div>
  );
};

export default About;