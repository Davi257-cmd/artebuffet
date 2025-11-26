import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Sparkles, Award, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sobre() {
  const values = [
    {
      icon: Heart,
      title: "Paixão pelo Detalhe",
      description: "Cada elemento é pensado com carinho e dedicação",
    },
    {
      icon: Users,
      title: "Equipe Experiente",
      description: "Profissionais qualificados e apaixonados pelo que fazem",
    },
    {
      icon: Sparkles,
      title: "Elegância",
      description: "Sofisticação e bom gosto em cada escolha",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com a qualidade em todos os serviços",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      event: "Casamento",
      text: "O Arte Buffet transformou nosso casamento em um sonho realizado. Cada detalhe foi perfeito, desde a decoração até o atendimento impecável. A equipe é maravilhosa!",
      rating: 5,
    },
    {
      name: "João Pedro Santos",
      event: "Aniversário 50 anos",
      text: "Profissionalismo absoluto! Fizeram minha festa de 50 anos ser inesquecível. Os convidados não param de elogiar até hoje. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      name: "Ana Paula Oliveira",
      event: "Debutante",
      text: "Minha filha realizou o sonho dos 15 anos. A decoração estava deslumbrante e o buffet, simplesmente maravilhoso. Muito obrigada por tudo!",
      rating: 5,
    },
    {
      name: "Carlos Eduardo",
      event: "Coffee Break Corporativo",
      text: "Excelente para eventos empresariais. Muito profissional, pontual e com um cardápio sofisticado. Já contratamos várias vezes e sempre superam as expectativas!",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      event: "Casamento",
      text: "Que experiência incrível! Do primeiro contato até o dia do evento, tudo foi perfeito. A equipe é atenciosa e realmente se importa com cada detalhe.",
      rating: 5,
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
              Sobre o <span className="text-gradient-gold">Arte Buffet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais de 10 anos criando momentos inesquecíveis
            </p>
          </div>

          {/* Story */}
          <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-white to-muted">
              <h2 className="text-3xl font-display font-bold mb-6 text-center">Nossa História</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Há mais de uma década, o Arte Buffet nasceu de um sonho: transformar eventos em 
                  experiências inesquecíveis. Fundado em Fortaleza, começamos com a missão de trazer 
                  sofisticação e elegância para cada celebração.
                </p>
                <p>
                  Ao longo dos anos, nos especializamos em criar ambientes únicos que refletem a 
                  personalidade e os sonhos de cada cliente. Cada casamento, debutante, aniversário 
                  ou evento corporativo é tratado com a mesma dedicação e carinho.
                </p>
                <p>
                  Hoje, com dois espaços exclusivos - Damas e Jóquei - e uma equipe de profissionais 
                  apaixonados, continuamos nossa jornada de excelência, sempre buscando superar 
                  expectativas e criar momentos que permanecerão para sempre na memória de nossos clientes.
                </p>
              </div>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12">
              Nossos <span className="text-gradient-gold">Valores</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-elegant">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Venues */}
          <div className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12">
              Nossos <span className="text-gradient-gold">Espaços</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-elegant">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Espaço Damas</h3>
                <p className="text-muted-foreground mb-6">
                  Localizado no coração da Aldeota, nosso espaço Damas oferece elegância e 
                  sofisticação para até 150 convidados. Perfeito para eventos íntimos e requintados.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Rua das Damas, 1234 - Aldeota</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Capacidade: 150 pessoas</span>
                  </p>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-elegant">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Espaço Jóquei</h3>
                <p className="text-muted-foreground mb-6">
                  No Jóquei Clube, oferecemos um espaço amplo e versátil para até 200 convidados. 
                  Ideal para grandes celebrações com todo o requinte que você merece.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Av. Jóquei Clube, 5678 - Jóquei</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Capacidade: 200 pessoas</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-4">
              Depoimentos <span className="text-gradient-gold">Completos</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Histórias reais de clientes que confiaram em nós para seus momentos especiais
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary to-gold-light text-white text-center animate-fade-in">
            <h2 className="text-4xl font-display font-bold mb-6">
              Vamos criar seu evento perfeito?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos tornar seu evento inesquecível
            </p>
            <Link to="/agendamento">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-elegant hover:scale-105 transition-all duration-300"
              >
                Agendar Meu Evento
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
