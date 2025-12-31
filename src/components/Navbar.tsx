import { useState, useEffect } from "react";
import { Menu, X, Music } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Classes", href: "#classes" },
  { name: "Instruments", href: "#instruments" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Shankara Music School Logo"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/50 group-hover:ring-primary transition-all duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-foreground">
                Shankara <span className="text-primary">Music</span>
              </h1>
              <p className="text-xs text-muted-foreground">Since 2014</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-t border-border animate-slide-up">
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors py-2 font-medium text-lg"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-semibold text-center mt-4 hover:shadow-gold transition-all duration-300"
              >
                Enroll Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
