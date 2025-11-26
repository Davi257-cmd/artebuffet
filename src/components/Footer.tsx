import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-gold-light rounded-full flex items-center justify-center shadow-elegant flex-shrink-0">
                <span className="text-lg sm:text-xl font-display text-white">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-primary text-base sm:text-lg">Arte</span>
                <span className="font-display font-light text-foreground text-base sm:text-lg"> Buffet</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Transformando seus momentos especiais em experiências inesquecíveis há mais de 10 anos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6 text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/agendamento", label: "Agendar Evento" },
                { to: "/galeria", label: "Galeria" },
                { to: "/pacotes", label: "Pacotes" },
                { to: "/sobre", label: "Sobre Nós" },
                { to: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors touch-manipulation py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact - Damas */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6 text-foreground">Espaço Damas</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Rua das Damas, 1234<br />
                  Aldeota, Fortaleza - CE
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+5585999999999" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation">
                  (85) 99999-9999
                </a>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Capacidade: 150 pessoas</p>
            </div>
          </div>

          {/* Contact - Jóquei */}
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6 text-foreground">Espaço Jóquei</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Av. Jóquei Clube, 5678<br />
                  Jóquei Clube, Fortaleza - CE
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+5585988888888" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation">
                  (85) 98888-8888
                </a>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Capacidade: 200 pessoas</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@artebuffet.com.br"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation break-all"
                >
                  contato@artebuffet.com.br
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://instagram.com/artebuffet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://facebook.com/artebuffet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Arte Buffet. Todos os direitos reservados.</p>
          <p className="mt-1 sm:mt-2">Desenvolvido com elegância e sofisticação.</p>
        </div>
      </div>
    </footer>
  );
};
