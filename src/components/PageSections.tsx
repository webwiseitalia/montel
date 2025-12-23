import { Link } from "react-router-dom";
import {
  Zap,
  Building2,
  Award,
  BookOpen,
  Phone,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const PageSections = () => {
  const { isDark } = useTheme();

  const sections = [
    {
      id: "prodotti",
      icon: Zap,
      title: "I Nostri Prodotti",
      subtitle: "CATALOGO",
      description:
        "Da oltre 40 anni produciamo trasformatori elettrici di alta qualità. La nostra gamma include trasformatori monofase e trifase, di isolamento e sicurezza, per settore medicale, fotovoltaico e molto altro.",
      highlight: "Consegna in 48 ore",
      href: "/prodotti",
    },
    {
      id: "azienda",
      icon: Building2,
      title: "La Nostra Azienda",
      subtitle: "CHI SIAMO",
      description:
        "Nata nel 1975 come Angelo Bertossi Trasformatori, oggi AB Trasformatori srl è un'azienda leader nella produzione di trasformatori elettrici con esperienza pluridecennale.",
      highlight: "Dal 1975",
      href: "/azienda",
    },
    {
      id: "certificati",
      icon: Award,
      title: "Le Nostre Certificazioni",
      subtitle: "QUALITÀ",
      description:
        "I nostri trasformatori sono certificati secondo le principali normative internazionali: UL5085 e CSA22.2 per il mercato nordamericano, ENEC05 per il mercato europeo e EAC.",
      highlight: "UL5085 - ENEC05 - EAC",
      href: "/certificati",
    },
    {
      id: "guida-tecnica",
      icon: BookOpen,
      title: "Guida Tecnica",
      subtitle: "DOCUMENTAZIONE",
      description:
        "Consulta le nostre guide tecniche per approfondire le caratteristiche dei trasformatori: classi di isolamento, gradi di protezione IP, potenze nominali e molto altro.",
      highlight: "Specifiche complete",
      href: "/guida-tecnica",
    },
    {
      id: "contatti",
      icon: Phone,
      title: "Contattaci",
      subtitle: "SUPPORTO",
      description:
        "Hai bisogno di una consulenza tecnica o di un preventivo personalizzato? Il nostro team è a disposizione per rispondere alle tue domande.",
      highlight: "Italia & UAE",
      href: "/contatti",
    },
  ];

  return (
    <section className={`py-24 lg:py-32 relative ${isDark ? "bg-neutral-950" : "bg-white"}`}>
      {/* Section header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-accent to-transparent" />
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Esplora
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-accent to-transparent" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-center ${isDark ? "text-white" : "text-black"}`}>
            SCOPRI <span className="text-accent">AB TRASFORMATORI</span>
          </h2>
        </div>
      </div>

      {/* Sections grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <Link
                to={section.href}
                className={`group relative block h-full min-h-[280px] p-8 border transition-all duration-500 overflow-hidden ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:border-accent/50"
                    : "bg-neutral-50 border-black/10 hover:border-accent/50"
                }`}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Subtitle & Icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-accent text-xs font-medium uppercase tracking-wider">
                      {section.subtitle}
                    </span>
                    <section.icon className={`w-6 h-6 group-hover:text-accent transition-colors ${
                      isDark ? "text-white/30" : "text-black/30"
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-4 group-hover:text-white transition-colors ${
                    isDark ? "text-white" : "text-black"
                  }`}>
                    {section.title}
                  </h3>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed ${isDark ? "text-white/50" : "text-black/50"}`}>
                    {section.description}
                  </p>

                  {/* Bottom row */}
                  <div className={`flex items-center justify-between mt-auto pt-4 border-t ${
                    isDark ? "border-white/10" : "border-black/10"
                  }`}>
                    <span className="text-accent text-sm font-medium">
                      {section.highlight}
                    </span>
                    <div className={`flex items-center gap-2 group-hover:text-accent transition-colors ${
                      isDark ? "text-white/40" : "text-black/40"
                    }`}>
                      <span className="text-sm">Scopri</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 group-hover:border-accent/30 transition-colors ${
                  isDark ? "border-white/5" : "border-black/5"
                }`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageSections;
