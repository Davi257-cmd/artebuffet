import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Cake, Coffee, Search } from "lucide-react";

export default function Galeria() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Todos", icon: Search },
    { id: "casamento", label: "Casamentos", icon: Heart },
    { id: "debutante", label: "Debutantes", icon: Sparkles },
    { id: "aniversario", label: "Aniversários", icon: Cake },
    { id: "coffee", label: "Coffee Breaks", icon: Coffee },
  ];

  const galleryItems = [
    { type: "casamento", title: "Casamento Marina & João", date: "15/06/2024" },
    { type: "debutante", title: "15 Anos de Julia", date: "10/05/2024" },
    { type: "casamento", title: "Casamento Ana & Pedro", date: "22/04/2024" },
    { type: "aniversario", title: "50 Anos de Carlos", date: "18/03/2024" },
    { type: "coffee", title: "Coffee Break Empresa XYZ", date: "05/03/2024" },
    { type: "debutante", title: "15 Anos de Mariana", date: "28/02/2024" },
    { type: "casamento", title: "Casamento Laura & Felipe", date: "14/02/2024" },
    { type: "aniversario", title: "Aniversário Maria", date: "01/02/2024" },
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.type === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Nossa <span className="text-gradient-gold">Galeria</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Momentos especiais eternizados em cada detalhe
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-primary to-gold-light shadow-elegant"
                      : "hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {filter.label}
                </Button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Placeholder with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-gold-light/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {item.type === "casamento" && <Heart className="w-8 h-8 text-white" />}
                      {item.type === "debutante" && <Sparkles className="w-8 h-8 text-white" />}
                      {item.type === "aniversario" && <Cake className="w-8 h-8 text-white" />}
                      {item.type === "coffee" && <Coffee className="w-8 h-8 text-white" />}
                    </div>
                    <p className="text-white/90 font-medium text-sm">Foto do Evento</p>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.date}</p>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Nenhum evento encontrado</h3>
              <p className="text-muted-foreground">Tente outro filtro</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
