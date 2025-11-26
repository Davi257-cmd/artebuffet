import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // WhatsApp message
    const message = `Olá! Gostaria de mais informações.

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone || "Não informado"}

Mensagem:
${formData.message}`;

    const whatsappUrl = `https://wa.me/5585999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecionando para WhatsApp...");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      title: "Espaço Damas",
      items: [
        { icon: MapPin, text: "Rua das Damas, 1234 - Aldeota, Fortaleza - CE" },
        { icon: Phone, text: "(85) 99999-9999", link: "tel:+5585999999999" },
      ],
    },
    {
      title: "Espaço Jóquei",
      items: [
        { icon: MapPin, text: "Av. Jóquei Clube, 5678 - Jóquei Clube, Fortaleza - CE" },
        { icon: Phone, text: "(85) 98888-8888", link: "tel:+5585988888888" },
      ],
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
              Entre em <span className="text-gradient-gold">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para tornar seu evento inesquecível
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="p-8">
                <h2 className="text-2xl font-display font-bold mb-6">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome completo"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(85) 99999-9999"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos sobre seu evento..."
                      className="mt-2 min-h-32"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-gold-light hover:shadow-elegant transition-all duration-300 hover:scale-105"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              {/* Contact Details */}
              {contactInfo.map((location, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-display font-bold mb-4">{location.title}</h3>
                  <div className="space-y-4">
                    {location.items.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-muted-foreground hover:text-primary transition-colors pt-2"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <span className="text-muted-foreground pt-2">{item.text}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Card>
              ))}

              {/* General Contact */}
              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-4">Informações Gerais</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="pt-2">
                      <a
                        href="mailto:contato@artebuffet.com.br"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contato@artebuffet.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="pt-2 text-muted-foreground">
                      <p>Segunda a Sexta: 9h às 18h</p>
                      <p>Sábado: 9h às 13h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-display font-bold mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/artebuffet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-elegant"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://facebook.com/artebuffet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-elegant"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
