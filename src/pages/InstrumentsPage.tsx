import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstrumentsComponent from "@/components/Instruments";

const Instruments = () => {
  useEffect(() => {
    document.title = "Instruments — Shankara Music School";

    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Instrument guide — learn about acoustic, electric, classical guitars and more.";
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
        <InstrumentsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Instruments;