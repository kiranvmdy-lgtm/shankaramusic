import { useState } from "react";
import { X } from "lucide-react";
import ukuleleImg from "../assets/ukulele.jpg";
import bassImg from "../assets/bass.jpg";
import twelveStringImg from "../assets/12string.jpg";

const instruments = [
  {
    id: "acoustic",
    name: "Acoustic Guitar",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600",
    description: "The acoustic guitar produces sound acoustically through the vibration of strings over a hollow body. Perfect for beginners and folk music enthusiasts.",
    types: ["Classical Guitar", "Dreadnought", "Parlor Guitar", "Jumbo"],
    bestFor: "Beginners, Folk, Country, Classical",
    difficulty: "Beginner Friendly",
  },
  {
    id: "electric",
    name: "Electric Guitar",
    image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=600",
    description: "Electric guitars use pickups to convert string vibrations into electrical signals. Essential for rock, blues, jazz, and modern music styles.",
    types: ["Stratocaster", "Les Paul", "Telecaster", "SG", "Flying V"],
    bestFor: "Rock, Blues, Jazz, Metal",
    difficulty: "Intermediate",
  },
  {
    id: "classical",
    name: "Classical Guitar",
    image: "https://images.unsplash.com/photo-1558098329-a11cff621064?w=600",
    description: "Classical guitars have nylon strings and a wider neck. They produce a warm, mellow tone ideal for classical and fingerstyle playing.",
    types: ["Concert Guitar", "Flamenco Guitar", "Romantic Guitar"],
    bestFor: "Classical, Fingerstyle, Spanish",
    difficulty: "Intermediate",
  },
  {
    id: "bass",
    name: "Bass Guitar",
    image: bassImg,
    description: "The bass guitar provides the low-end foundation in music. Essential for band settings, creating rhythm and groove.",
    types: ["4-String Bass", "5-String Bass", "Fretless Bass"],
    bestFor: "Rock, Jazz, Funk, R&B",
    difficulty: "Intermediate",
  },
  {
    id: "ukulele",
    name: "Ukulele",
    image: ukuleleImg,
    description: "A small, four-stringed instrument originating from Hawaii. Easy to learn, portable, and perfect for beginners with its cheerful, bright tropical sound.",
    types: ["Soprano", "Concert", "Tenor", "Baritone"],
    bestFor: "Beginners, Hawaiian, Pop, Folk",
    difficulty: "Very Easy",
  },
  {
    id: "twelve-string",
    name: "12-String Guitar",
    image: twelveStringImg,
    description: "Features 12 strings in 6 pairs, creating a rich, chorus-like sound. Popular for folk and rock ballads.",
    types: ["Acoustic 12-String", "Electric 12-String"],
    bestFor: "Folk, Rock Ballads, Recording",
    difficulty: "Advanced",
  },
];

const Instruments = () => {
  const [selectedInstrument, setSelectedInstrument] = useState<typeof instruments[0] | null>(null);

  return (
    <section id="instruments" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Instrument Guide
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Types of <span className="text-gradient">Guitars</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore different types of guitars and stringed instruments. Click on any instrument 
            to learn more about its features and best use cases.
          </p>
        </div>

        {/* Instruments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instruments.map((instrument) => (
            <button
              key={instrument.id}
              onClick={() => setSelectedInstrument(instrument)}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-gold text-left"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={instrument.image}
                  alt={instrument.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {instrument.name}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {instrument.description}
                </p>
                <span className="inline-block mt-4 text-primary font-medium text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedInstrument && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-soft animate-scale-in">
              <div className="relative">
                <img
                  src={selectedInstrument.image}
                  alt={selectedInstrument.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedInstrument(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                  {selectedInstrument.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedInstrument.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-semibold min-w-[100px]">Types:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedInstrument.types.map((type) => (
                        <span key={type} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-semibold min-w-[100px]">Best For:</span>
                    <span className="text-foreground">{selectedInstrument.bestFor}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-semibold min-w-[100px]">Difficulty:</span>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                      {selectedInstrument.difficulty}
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedInstrument(null)}
                  className="inline-block mt-8 bg-gradient-gold text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-gold transition-all duration-300"
                >
                  Start Learning {selectedInstrument.name}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Instruments;
