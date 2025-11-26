import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/agendamento", label: "Agendar" },
    { to: "/galeria", label: "Galeria" },
    { to: "/pacotes", label: "Pacotes" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-elegant py-2 md:py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-gold-light rounded-full flex items-center justify-center shadow-elegant">
                <span className="text-xl sm:text-2xl font-display text-white">A</span>
              </div>
            </div>
            <div className={`transition-all duration-300 ${isScrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl"}`}>
              <span className="font-display font-bold text-primary">Arte</span>
              <span className="font-display font-light text-foreground"> Buffet</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/80"
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link to="/agendamento" className="hidden lg:block">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-gold-light hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Agendar Agora
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors touch-manipulation"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in border-t border-border/50">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium text-base transition-colors touch-manipulation ${
                    location.pathname === link.to
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted active:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/agendamento" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-gold-light touch-manipulation">
                  Agendar Agora
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
