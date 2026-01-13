import { Music, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import devaraju from "@/assets/devaraju.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Floating Musical Notes Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Music className="absolute top-1/4 left-[10%] text-primary/20 animate-float" size={48} />
        <Music className="absolute top-1/3 right-[15%] text-primary/15 animate-float" size={32} style={{ animationDelay: "1s" }} />
        <Music className="absolute bottom-1/4 left-[20%] text-primary/10 animate-float" size={40} style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-3 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="text-primary font-medium text-sm">Since 2014</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Learn <span className="text-gradient">Guitar</span> &
              <br />
              <span className="text-gradient">Ukulele</span> With Us
            </h1>

            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-xl leading-relaxed font-body">
              Discover the joy of music at Shankara Music School. Expert guitar and ukulele training 
              for all ages, from 5 years to adults. Build your music career with us in Bangalore.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#classes"
                className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-gold transition-all duration-300 hover:scale-105"
              >
                Explore Classes
              </a>
              <a
                href="#contact"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">15+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">500+</p>
                <p className="text-muted-foreground text-sm">Students Trained</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">5.0</p>
                <p className="text-muted-foreground text-sm">Rating on Justdial</p>
              </div>
            </div>
          </div>

          {/* Right Content - Devaraju Photo */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-gold rounded-full opacity-20 blur-2xl animate-pulse-slow" />
              
              {/* Photo Frame */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-primary/50 shadow-gold">
                <img
                  src={devaraju}
                  alt="Devaraju - Guitar Instructor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-full shadow-soft border border-border">
                <p className="font-display font-bold text-lg text-foreground">Devaraj G S</p>
                <p className="text-primary text-sm text-center">Founder & Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
