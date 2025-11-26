import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Star, Crown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pacotes() {
  const packages = [
    {
      name: "Charme",
      icon: Sparkles,
      price: "2.500",
      description: "Perfeito para eventos íntimos e elegantes",
      capacity: "Até 80 pessoas",
      features: [
        "Decoração clássica elegante",
        "Buffet básico completo",
        "Garçons uniformizados",
        "Som ambiente",
        "Iluminação básica",
        "Mobiliário incluso",
      ],
      color: "from-secondary to-gold-light",
      popular: false,
    },
    {
      name: "Requinte",
      icon: Star,
      price: "4.500",
      description: "Nossa opção mais escolhida pelos clientes",
      capacity: "Até 150 pessoas",
      features: [
        "Decoração premium personalizada",
        "Buffet completo com opções especiais",
        "Garçons e maître",
        "Som profissional e DJ",
        "Iluminação cênica",
        "Mobiliário premium",
        "Open bar básico",
        "Cenário fotográfico",
      ],
      color: "from-primary to-gold-light",
      popular: true,
    },
    {
      name: "Sofisticação",
      icon: Crown,
      price: "7.500",
      description: "O máximo em luxo e exclusividade",
      capacity: "Até 200 pessoas",
      features: [
        "Decoração exclusiva de luxo",
        "Buffet gourmet premium",
        "Equipe completa de serviço",
        "DJ e banda ao vivo",
        "Iluminação e projeções especiais",
        "Mobiliário de alto padrão",
        "Open bar premium",
        "Fotógrafo profissional (4h)",
        "Cenários temáticos",
        "Valet parking",
      ],
      color: "from-amber-600 to-primary",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Nossos <span className="text-gradient-gold">Pacotes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o pacote perfeito para tornar seu evento inesquecível
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <Card
                  key={index}
                  className={`relative p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                    pkg.popular ? "border-2 border-primary shadow-elegant" : ""
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-6 py-2 bg-gradient-to-r from-primary to-gold-light text-white text-sm font-bold rounded-full shadow-lg">
                        MAIS POPULAR
                      </span>
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-display font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground">A partir de</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-display font-bold text-primary">
                        R$ {pkg.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{pkg.capacity}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/agendamento">
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-gradient-to-r from-primary to-gold-light shadow-elegant"
                          : ""
                      } hover:scale-105 transition-all duration-300`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Agendar Este Pacote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>

          {/* Custom Package CTA */}
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-muted to-secondary border-2 border-primary/20 text-center animate-fade-in">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-4">
              Precisa de algo diferente?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Criamos pacotes personalizados para atender exatamente às suas necessidades.
              Entre em contato e conte seus sonhos para nós!
            </p>
            <Link to="/contato">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-gold-light shadow-elegant hover:scale-105 transition-all duration-300"
              >
                Solicitar Orçamento Personalizado
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
