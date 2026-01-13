import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClassesComponent from "@/components/Classes";

const Classes = () => {
  useEffect(() => {
    document.title = "Classes — Shankara Music School";

    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Guitar & Ukulele classes — beginner to advanced, group and private lessons.";
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
        <ClassesComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Classes;