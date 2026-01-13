import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactComponent from "@/components/Contact";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact — Shankara Music School";

    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Contact Shankara Music School — get in touch to enroll or learn more.";
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
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;