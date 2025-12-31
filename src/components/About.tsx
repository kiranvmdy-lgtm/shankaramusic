import { Award, Users, Calendar, Music } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Calendar,
      title: "Since 2014",
      description: "Over a decade of excellence in music education",
    },
    {
      icon: Users,
      title: "All Ages Welcome",
      description: "From 5 years old to adults - everyone can learn",
    },
    {
      icon: Award,
      title: "Career Building",
      description: "Build a professional music career path with us",
    },
    {
      icon: Music,
      title: "Expert Training",
      description: "Technical guitar training and ear training",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-gradient">Shankara Music School</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Located in Uttarahalli, Bangalore, our music school has been nurturing musical talent 
            since 2014. With extensive experience in music training, we offer comprehensive 
            guitar and ukulele classes for students of all ages.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-gold animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Schedule Info */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold mb-4">
                Class <span className="text-gradient">Schedule</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We offer flexible class timings to fit your schedule. Whether you are a working 
                professional or a student, we have classes that work for you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Calendar className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Weekday Evenings</p>
                    <p className="text-muted-foreground text-sm">Monday - Friday</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Calendar className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Weekend Mornings</p>
                    <p className="text-muted-foreground text-sm">Saturday - Sunday</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-gold rounded-2xl shadow-gold">
              <p className="text-primary-foreground/80 mb-2 uppercase tracking-widest text-sm">
                Rated
              </p>
              <p className="text-6xl font-display font-bold text-primary-foreground mb-2">5.0</p>
              <p className="text-primary-foreground/80">on Justdial</p>
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-primary-foreground/80 mt-4 text-sm">187+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
