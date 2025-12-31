import { Music, Mic2, Headphones, Wrench, GraduationCap, Users } from "lucide-react";

const classes = [
  {
    icon: Music,
    title: "Guitar Classes",
    description: "Learn acoustic and electric guitar from basics to advanced techniques. Master chords, strumming patterns, and fingerpicking.",
    features: ["Acoustic Guitar", "Electric Guitar", "Music Theory", "Performance Skills"],
  },
  {
    icon: Mic2,
    title: "Guitar with Singing",
    description: "Learn to play guitar while singing simultaneously. Perfect for those who want to become solo performers.",
    features: ["Chord Progressions", "Vocal Training", "Stage Presence", "Song Arrangements"],
  },
  {
    icon: Headphones,
    title: "Ear Training",
    description: "Develop your musical ear to play any song by listening. Learn to identify notes, chords, and scales by ear.",
    features: ["Note Recognition", "Chord Identification", "Scale Detection", "Improvisation"],
  },
  {
    icon: Music,
    title: "Ukulele Classes",
    description: "Master the ukulele with easy-to-learn techniques. Perfect for beginners and those looking for a portable instrument.",
    features: ["Basic Chords", "Strumming Patterns", "Hawaiian Style", "Pop Songs"],
  },
  {
    icon: GraduationCap,
    title: "Music Career Path",
    description: "Build a professional music career with our comprehensive program designed to take you from beginner to professional.",
    features: ["Professional Training", "Industry Exposure", "Performance Opportunities", "Certification"],
  },
  {
    icon: Wrench,
    title: "Instrument Repair",
    description: "Professional repair services for guitars, ukuleles, and other stringed instruments. Keep your instrument in perfect condition.",
    features: ["String Replacement", "Setup & Adjustments", "Crack Repairs", "Maintenance Tips"],
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Classes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive music training programs designed for all skill levels. 
            From beginners to advanced players, we have the perfect class for you.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-primary-foreground" size={32} />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {item.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Seminars Banner */}
        <div className="mt-16 bg-gradient-gold rounded-3xl p-8 md:p-12 text-center">
          <Users className="mx-auto mb-6 text-primary-foreground" size={48} />
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Regular Music Seminars
          </h3>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-6">
            Join our regular music seminars to learn from industry experts, network with 
            fellow musicians, and stay updated with the latest trends in music.
          </p>
          <a
            href="#contact"
            className="inline-block bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Register for Next Seminar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;
