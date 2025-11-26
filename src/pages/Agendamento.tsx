import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Users, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Agendamento() {
  const [date, setDate] = useState<Date>();
  const [eventType, setEventType] = useState("");
  const [guests, setGuests] = useState(50);
  const [venue, setVenue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [extras, setExtras] = useState({
    photographer: false,
    dj: false,
    drinks: false,
    decor: false,
  });

  const eventPrices: Record<string, number> = {
    casamento: 4000,
    debutante: 3500,
    aniversario: 2500,
    coffee: 1500,
  };

  const extraPrices = {
    photographer: 800,
    dj: 600,
    drinks: 500,
    decor: 300,
  };

  const calculateTotal = () => {
    let total = eventPrices[eventType] || 0;
    
    // Per person additional cost
    const baseCapacity = 50;
    if (guests > baseCapacity) {
      total += (guests - baseCapacity) * 50;
    }

    // Venue multiplier
    if (venue === "joquei") {
      total *= 1.2; // +20% for mobile venue
    }

    // Weekend premium
    if (date && (date.getDay() === 0 || date.getDay() === 6)) {
      total *= 1.15; // +15% for weekends
    }

    // Extras
    if (extras.photographer) total += extraPrices.photographer;
    if (extras.dj) total += extraPrices.dj;
    if (extras.drinks) total += extraPrices.drinks;
    if (extras.decor) total += extraPrices.decor;

    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !eventType || !venue || !name || !email || !phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    const total = calculateTotal();
    const dateFormatted = format(date, "dd/MM/yyyy", { locale: ptBR });
    
    // WhatsApp message
    const message = `Olá! Gostaria de confirmar meu evento para ${dateFormatted}.
Tipo: ${eventType}
Espaço: ${venue === "damas" ? "Damas" : "Jóquei"}
Pessoas: ${guests}
Nome: ${name}
Email: ${email}
Telefone: ${phone}
Orçamento estimado: R$ ${total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}

Posso prosseguir?`;

    const whatsappUrl = `https://wa.me/558598730867?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecionando para WhatsApp...");
  };

  const total = calculateTotal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Agende Seu <span className="text-gradient-gold">Evento</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema inteligente de agendamento com orçamento em tempo real
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Form */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Event Type */}
                  <Card className="p-6 animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Label className="text-lg font-display font-bold">Tipo de Evento</Label>
                        <p className="text-sm text-muted-foreground">Selecione o tipo do seu evento</p>
                      </div>
                    </div>
                    
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione o tipo de evento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="casamento">Casamento</SelectItem>
                        <SelectItem value="debutante">Debutante (15 anos)</SelectItem>
                        <SelectItem value="aniversario">Aniversário</SelectItem>
                        <SelectItem value="coffee">Coffee Break Corporativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </Card>

                  {/* Venue Selection */}
                  <Card className="p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Label className="text-lg font-display font-bold">Espaço</Label>
                        <p className="text-sm text-muted-foreground">Escolha o local do evento</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setVenue("damas")}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          venue === "damas"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <h3 className="font-display font-bold text-lg mb-2">Espaço Damas</h3>
                        <p className="text-sm text-muted-foreground mb-3">Aldeota, Fortaleza</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span>Até 150 pessoas</span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setVenue("joquei")}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          venue === "joquei"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <h3 className="font-display font-bold text-lg mb-2">Espaço Jóquei</h3>
                        <p className="text-sm text-muted-foreground mb-3">Jóquei Clube, Fortaleza</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span>Até 200 pessoas</span>
                        </div>
                        <p className="text-xs text-primary mt-2">+20% taxa móvel</p>
                      </button>
                    </div>
                  </Card>

                  {/* Calendar */}
                  <Card className="p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Label className="text-lg font-display font-bold">Data do Evento</Label>
                        <p className="text-sm text-muted-foreground">
                          {date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : "Selecione uma data"}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        className="rounded-lg border pointer-events-auto"
                      />
                    </div>

                    {date && (date.getDay() === 0 || date.getDay() === 6) && (
                      <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                        <p className="text-sm text-primary">
                          <strong>Final de semana selecionado:</strong> +15% no valor total
                        </p>
                      </div>
                    )}
                  </Card>

                  {/* Number of Guests */}
                  <Card className="p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Label className="text-lg font-display font-bold">Número de Convidados</Label>
                        <p className="text-sm text-muted-foreground">Ajuste para o número exato</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Input
                        type="range"
                        min="20"
                        max="200"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">20 pessoas</span>
                        <span className="text-3xl font-display font-bold text-primary">{guests}</span>
                        <span className="text-sm text-muted-foreground">200 pessoas</span>
                      </div>
                      {guests > 50 && (
                        <p className="text-sm text-muted-foreground">
                          +R$ 50 por pessoa adicional (acima de 50)
                        </p>
                      )}
                    </div>
                  </Card>

                  {/* Extras */}
                  <Card className="p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
                    <Label className="text-lg font-display font-bold mb-6 block">Serviços Adicionais</Label>
                    
                    <div className="space-y-4">
                      {[
                        { id: "photographer", label: "Fotógrafo Profissional (4h)", price: extraPrices.photographer },
                        { id: "dj", label: "DJ e Som Profissional", price: extraPrices.dj },
                        { id: "drinks", label: "Drinks Premium", price: extraPrices.drinks },
                        { id: "decor", label: "Cenários Especiais", price: extraPrices.decor },
                      ].map((extra) => (
                        <div key={extra.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id={extra.id}
                              checked={extras[extra.id as keyof typeof extras]}
                              onCheckedChange={(checked) =>
                                setExtras({ ...extras, [extra.id]: checked })
                              }
                            />
                            <Label htmlFor={extra.id} className="cursor-pointer font-medium">
                              {extra.label}
                            </Label>
                          </div>
                          <span className="text-primary font-semibold">
                            +R$ {extra.price.toLocaleString("pt-BR")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Contact Info */}
                  <Card className="p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
                    <Label className="text-lg font-display font-bold mb-6 block">Suas Informações</Label>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu@email.com"
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">WhatsApp *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(85) 98873-0867"
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Right Column - Summary */}
                <div className="lg:col-span-1">
                  <Card className="p-6 sticky top-24 animate-fade-in" style={{ animationDelay: "600ms" }}>
                    <h3 className="text-2xl font-display font-bold mb-6">Orçamento</h3>
                    
                    <div className="space-y-4 mb-6">
                      {eventType && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Evento: {eventType}</span>
                          <span className="font-semibold">
                            R$ {eventPrices[eventType]?.toLocaleString("pt-BR")}
                          </span>
                        </div>
                      )}
                      
                      {guests > 50 && eventType && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            +{guests - 50} pessoas adicionais
                          </span>
                          <span className="font-semibold">
                            R$ {((guests - 50) * 50).toLocaleString("pt-BR")}
                          </span>
                        </div>
                      )}

                      {venue === "joquei" && eventType && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Taxa móvel (Jóquei)</span>
                          <span className="font-semibold text-primary">+20%</span>
                        </div>
                      )}

                      {date && (date.getDay() === 0 || date.getDay() === 6) && eventType && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Final de semana</span>
                          <span className="font-semibold text-primary">+15%</span>
                        </div>
                      )}

                      {Object.entries(extras).map(([key, value]) =>
                        value ? (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {key === "photographer" && "Fotógrafo"}
                              {key === "dj" && "DJ/Som"}
                              {key === "drinks" && "Drinks Premium"}
                              {key === "decor" && "Cenários"}
                            </span>
                            <span className="font-semibold">
                              +R$ {extraPrices[key as keyof typeof extraPrices].toLocaleString("pt-BR")}
                            </span>
                          </div>
                        ) : null
                      )}
                    </div>

                    <div className="border-t border-border pt-6 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold">Total Estimado:</span>
                      </div>
                      <div className="text-4xl font-display font-bold text-primary">
                        R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        * Valor estimado, sujeito a confirmação
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-gold-light hover:shadow-elegant transition-all duration-300 hover:scale-105"
                      disabled={!date || !eventType || !venue || !name || !email || !phone}
                    >
                      Confirmar via WhatsApp
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Você será redirecionado para o WhatsApp com todos os detalhes preenchidos
                    </p>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
