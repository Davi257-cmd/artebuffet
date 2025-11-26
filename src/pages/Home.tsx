import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Calendar,
  Users,
  Sparkles,
  Heart,
  Coffee,
  Cake,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";

export default function Home() {
  const eventTypes = [
    {
      icon: Heart,
      title: "Casamentos",
      description: "O dia mais especial da sua vida merece toda nossa dedicação",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Sparkles,
      title: "Debutantes",
      description: "15 anos inesquecíveis com elegância e sofisticação",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cake,
      title: "Aniversários",
      description: "Comemore cada momento com alegria e estilo",
      color: "from-primary to-gold-light",
    },
    {
      icon: Coffee,
      title: "Coffee Breaks",
      description: "Eventos corporativos com requinte e profissionalismo",
      color: "from-amber-600 to-primary",
    },
  ];

  const differentials = [
    {
      icon: Calendar,
      title: "Agendamento Online",
      description: "Sistema inteligente de reservas em tempo real",
    },
    {
      icon: Users,
      title: "Dois Espaços",
      description: "Damas (150 pessoas) e Jóquei (200 pessoas)",
    },
    {
      icon: Sparkles,
      title: "Decoração Premium",
      description: "Ambientes elegantes e personalizados",
    },
    {
      icon: Check,
      title: "Gastronomia Exclusiva",
      description: "Cardápio sofisticado preparado por chefs renomados",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      event: "Casamento",
      text: "Evento perfeito! A equipe superou todas as expectativas.",
      rating: 5,
    },
    {
      name: "João Pedro",
      event: "Aniversário",
      text: "Profissionalismo e elegância. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      name: "Ana Paula",
      event: "Debutante",
      text: "Minha filha realizou o sonho dos 15 anos. Obrigada!",
      rating: 5,
    },
    {
      name: "Carlos Eduardo",
      event: "Coffee Break Corporativo",
      text: "Excelente para eventos empresariais. Muito profissional!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,165,116,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(230,212,200,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 pb-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-4 sm:px-6 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20">
                  ✨ Eventos de Luxo em Fortaleza
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                Transforme seus
                <span className="block text-gradient-gold mt-1 sm:mt-2">
                  Momentos Especiais
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sofisticação, elegância e requinte para tornar seu evento inesquecível.
                Dois espaços exclusivos prontos para realizar seus sonhos.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/agendamento" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-gold-light hover:shadow-elegant transition-all duration-300 hover:scale-105"
                  >
                    Agendar Agora
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Link to="/galeria" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/5"
                  >
                    Ver Galeria
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8 justify-center lg:justify-start pt-6 sm:pt-8">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-border" />
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Eventos Realizados</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-border" />
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative animate-fade-in mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-3xl animate-glow" />
              <div className="relative bg-gradient-to-br from-white to-muted rounded-2xl sm:rounded-3xl shadow-elegant p-4 sm:p-6 md:p-8 border border-primary/10">
                <div className="aspect-[4/5] bg-gradient-to-br from-gold-light to-muted rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-3 sm:space-y-4 px-4">
                    <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-primary mx-auto animate-float" />
                    <p className="text-sm sm:text-base md:text-lg font-display text-foreground">
                      Imagem Hero<br />Evento Elegante
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
              Tipos de <span className="text-gradient-gold">Eventos</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Especializados em criar experiências memoráveis para cada ocasião especial
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {eventTypes.map((type, index) => (
              <Card
                key={index}
                className="group p-4 sm:p-6 md:p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-primary/20 bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <type.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4">
              Por que escolher o <span className="text-gradient-gold">Arte Buffet</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Diferenciais que fazem toda a diferença no seu evento especial
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted to-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4">
              O que dizem nossos <span className="text-gradient-gold">Clientes</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Histórias reais de eventos inesquecíveis
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 hover:shadow-elegant transition-all duration-300 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-3 sm:pt-4">
                  <p className="font-semibold text-sm sm:text-base text-foreground">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary to-gold-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 pb-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 px-4">
              Pronto para criar momentos inesquecíveis?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 px-4">
              Agende agora e garanta a data do seu evento especial
            </p>
            <Link to="/agendamento" className="inline-block">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-elegant hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Agendar Meu Evento
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
