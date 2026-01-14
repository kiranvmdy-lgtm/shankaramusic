import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhyUs = () => {
  useEffect(() => {
    document.title = "Why Choose Us — Shankara Music School";

    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Why choose Shankara Music School — individual lessons, instrument + singing training, no pressure, complete syllabus coverage, and creative composition support.";
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
      <main className="container mx-auto px-4 py-24">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Why Choose Shankara Music School?</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We stand apart because we put the student first — always. Our teaching is entirely
            one-on-one, steady, and encouraging. We help students grow their musical abilities
            without pressure and with full attention to their individual journey.
          </p>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Personalized One-to-One Lessons</h2>
            <p className="text-muted-foreground mb-3">
              100% individual focus — no group classes. Every lesson is tailored to the student’s
              pace, strengths, and goals. We never skip the syllabus and never rush progress.
            </p>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Individual lesson plans for each student</li>
              <li>No group sessions — full attention to you</li>
              <li>No pressure to "complete" faster than you’re ready</li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Instrument + Singing Training</h2>
            <p className="text-muted-foreground mb-3">
              We train students to play their chosen instrument while encouraging vocal practice.
              Singing is an integral part of learning at Shankara — we build confidence for both
              instrument playing and singing.
            </p>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Combined instrument & vocal coaching</li>
              <li>Techniques to improve coordination and musicality</li>
              <li>Supportive environment to practice and perform</li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Complete & Thoughtful Syllabus</h2>
            <p className="text-muted-foreground mb-3">
              We follow a complete syllabus and make sure every topic is covered thoroughly. Our
              teachers adapt the curriculum to the student’s learning speed while ensuring core
              concepts are never skipped.
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Creativity & Composition</h2>
            <p className="text-muted-foreground mb-3">
              We encourage students to compose new music and develop their creative voice. Our
              teachers mentor composition and arranging as part of each student’s growth.
            </p>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Guided composition sessions</li>
              <li>Encouragement to experiment and create original pieces</li>
              <li>Performance opportunities for student compositions</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
          <p className="text-muted-foreground mb-6">
            We build trust and confidence. Every student receives patient guidance, practical
            techniques, and musical encouragement so they can enjoy and excel in music.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-semibold hover:shadow-gold transition-all duration-300"
          >
            Get Started — Contact Us
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyUs;
