import { Music } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img
                src={logo}
                alt="Shankara Music School"
                className="w-12 h-12 rounded-full ring-2 ring-primary/50"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Shankara <span className="text-primary">Music</span>
                </h3>
                <p className="text-xs text-muted-foreground">Since 2014</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Guitar & Ukulele Classes for All Ages
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
              </a>
              <a href="#classes" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Classes
              </a>
              <a href="#instruments" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Instruments
              </a>
              <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Gallery
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Shankara Music School
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Uttarahalli, Bangalore
            </p>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-8 pt-8 border-t border-border flex justify-center">
          <div className="flex items-center gap-2 text-primary/50">
            <Music size={16} />
            <span className="text-xs">Made with love for music</span>
            <Music size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
