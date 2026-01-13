import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Guitar = () => {
  useEffect(() => {
    document.title = "Guitar — Shankara Music School";

    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Guitar basics: parts of the guitar, essential chords, common scales and practice tips from Shankara Music School.";
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

      <header className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground">Guitar Basics</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Learn about the structure of the guitar, important chords, common scales, and practice tips curated by Shankara Music School.
        </p>
        <Link to="/" className="inline-block mt-6 text-sm text-primary underline">
          ← Back to Home
        </Link>
      </header>

      <main className="container mx-auto px-4 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-1 bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">Guitar Structure 🔧</h3>
          <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Headstock</strong> — Tuning pegs and nut.</li>
            <li><strong>Neck</strong> — Fretboard with frets and inlays.</li>
            <li><strong>Body</strong> — Acoustic or electric; houses the bridge and pickups.</li>
            <li><strong>Bridge</strong> — Transfers string vibration to the body.</li>
            <li><strong>Strings</strong> — Commonly tuned E A D G B E (low to high).</li>
          </ul>
        </section>

        <section className="lg:col-span-2 bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">Essential Chords 🎸</h3>
          <p className="mt-3 text-muted-foreground">Start with these common open chords. Learn finger placement, strumming, and clean transitions.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <article className="p-4 bg-background/60 rounded">
              <h4 className="font-semibold">Major Open Chords</h4>
              <ul className="mt-2 text-muted-foreground list-disc list-inside space-y-1">
                <li><strong>C</strong> — x32010</li>
                <li><strong>G</strong> — 320003</li>
                <li><strong>D</strong> — xx0232</li>
                <li><strong>A</strong> — x02220</li>
                <li><strong>E</strong> — 022100</li>
              </ul>
            </article>

            <article className="p-4 bg-background/60 rounded">
              <h4 className="font-semibold">Minor & Others</h4>
              <ul className="mt-2 text-muted-foreground list-disc list-inside space-y-1">
                <li><strong>Am</strong> — x02210</li>
                <li><strong>Em</strong> — 022000</li>
                <li><strong>Dm</strong> — xx0231</li>
                <li>Learn barre shapes to play F, Bm, and movable forms.</li>
              </ul>
            </article>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Practice Tips</h4>
            <ol className="mt-2 list-decimal list-inside text-muted-foreground space-y-2">
              <li>Use a metronome and practice chord changes slowly.</li>
              <li>Focus on clean notes, then increase speed gradually.</li>
              <li>Practice scale patterns in all keys to build fretboard knowledge.</li>
            </ol>
          </div>

          <hr className="my-6" />

          <h3 className="text-lg font-semibold">Important Scales & Patterns</h3>
          <p className="mt-3 text-muted-foreground">Scales give you the vocabulary for solos, melodies, and improvisation.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <article className="p-4 bg-background/60 rounded">
              <h4 className="font-semibold">Major Scale (C major pattern)</h4>
              <p className="mt-2 text-muted-foreground">Pattern (intervals): 1 2 3 4 5 6 7</p>
              <p className="mt-1 text-muted-foreground">Example open position in C: C D E F G A B</p>
            </article>

            <article className="p-4 bg-background/60 rounded">
              <h4 className="font-semibold">Minor Pentatonic</h4>
              <p className="mt-2 text-muted-foreground">Common box shapes used for blues and rock. In A minor: A C D E G</p>
            </article>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Quick Reference</h4>
            <table className="w-full mt-3 text-left text-sm text-muted-foreground">
              <thead>
                <tr>
                  <th className="pb-2">Topic</th>
                  <th className="pb-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-2 align-top">Tuning</td>
                  <td className="pt-2">Standard E A D G B E. Consider alternate tunings for some styles.</td>
                </tr>
                <tr>
                  <td className="pt-2 align-top">First Goals</td>
                  <td className="pt-2">Master open chords, simple songs, and clean chord transitions.</td>
                </tr>
                <tr>
                  <td className="pt-2 align-top">Next Steps</td>
                  <td className="pt-2">Learn barre chords, minor/major scale patterns, and basic music theory.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guitar;
