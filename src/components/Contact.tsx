import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-gradient">Musical Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to learn guitar or ukulele? Get in touch with us today. 
            We welcome students of all ages from 5 years to adults.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Visit Us
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    # 130, 3rd Cross, Gowdanapalya,<br />
                    Uttarahalli, Near Srinivasa Theatre,<br />
                    Bangalore 560061
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Call Us
                  </h3>
                  <a
                    href="tel:+919945755812"
                    className="text-primary hover:text-primary/80 text-lg font-medium transition-colors"
                  >
                    +91 99457 55812
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Email Us
                  </h3>
                  <a
                    href="mailto:devarajgs86@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    devarajgs86@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Clock className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Class Timings
                  </h3>
                  <p className="text-muted-foreground">
                    Weekdays: Evenings<br />
                    Weekends: Mornings
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com/devarajgs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/devaraj.g.s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://jsdl.in/DT-15EEWC4HLET"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-6 bg-card border border-border rounded-xl flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ExternalLink size={20} />
                <span className="font-medium">Justdial</span>
              </a>
            </div>
          </div>

          {/* Map & CTA */}
          <div className="space-y-6">
            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden h-80 border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9631402410064!2d77.55424437454568!3d12.910090616224963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f74752d1909%3A0xbaf1e174bc099732!2sShankara%20music%20school!5e0!3m2!1sen!2sin!4v1768311792631!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shankara Music School Location"
              />
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-gold p-8 rounded-2xl shadow-gold">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Ready to Start Learning?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Join hundreds of students who have started their musical journey with us. 
                Call us today to book your first class!
              </p>
              <a
                href="tel:+919945755812"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
