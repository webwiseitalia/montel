import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Indice = () => {
  const { isDark } = useTheme();
  const siteMap = [
    {
      category: "Pagine principali",
      links: [
        { title: "Home", href: "/" },
        { title: "Prodotti", href: "/prodotti" },
        { title: "Azienda", href: "/azienda" },
        { title: "Certificati", href: "/certificati" },
        { title: "Guida Tecnica", href: "/guida-tecnica" },
        { title: "Contatti", href: "/contatti" },
      ],
    },
    {
      category: "Prodotti",
      links: [
        { title: "Trasformatori monofase", href: "/prodotti#monofase" },
        { title: "Trasformatori trifase", href: "/prodotti#trifase" },
        { title: "Trasformatori medicali", href: "/prodotti#medicali" },
        { title: "Trasformatori per piscine", href: "/prodotti#piscine" },
        { title: "Trasformatori UL5085", href: "/prodotti#ul5085" },
        { title: "Trasformatori IP20", href: "/prodotti#ip" },
        { title: "Trasformatori IP65", href: "/prodotti#ip" },
        { title: "Trasformatori IP68", href: "/prodotti#ip" },
        { title: "Autotrasformatori", href: "/prodotti#autotrasformatori" },
        { title: "Reattanze e induttanze", href: "/prodotti#reattanze" },
      ],
    },
    {
      category: "Guide tecniche",
      links: [
        { title: "Caratteristiche generali", href: "/guida-tecnica#caratteristiche-generali" },
        { title: "Avvolgimenti", href: "/guida-tecnica#avvolgimenti" },
        { title: "Omologazione e conformità", href: "/guida-tecnica#omologazione-conformita" },
        { title: "Classe di protezione", href: "/guida-tecnica#classe-protezione" },
        { title: "Classe termica di isolamento", href: "/guida-tecnica#classe-termica" },
        { title: "Resistenza al cortocircuito", href: "/guida-tecnica#resistenza-cortocircuito" },
        { title: "Potenza nominale", href: "/guida-tecnica#potenza-nominale" },
        { title: "Sovraccarico ammesso", href: "/guida-tecnica#sovraccarico" },
      ],
    },
    {
      category: "Certificazioni",
      links: [
        { title: "Certificazione UL5085", href: "/certificati" },
        { title: "Certificazione ENEC05", href: "/certificati" },
        { title: "Certificazione EAC", href: "/certificati" },
        { title: "Insulation System", href: "/certificati" },
      ],
    },
    {
      category: "Informazioni",
      links: [
        { title: "Chi siamo", href: "/azienda" },
        { title: "La nostra storia", href: "/azienda" },
        { title: "Certificazioni aziendali", href: "/certificati" },
        { title: "Contattaci", href: "/contatti" },
      ],
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
              Indice generale
            </h1>
            <p className={`text-lg max-w-3xl ${isDark ? "text-white/70" : "text-black/70"}`}>
              Mappa completa del sito AB Trasformatori. Trova rapidamente tutte le pagine
              e le sezioni del nostro sito web.
            </p>
          </div>
        </section>

        {/* Site Map */}
        <section className={`py-16 lg:py-24 ${isDark ? "bg-neutral-900" : "bg-neutral-100"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteMap.map((section, index) => (
                <div key={index} className={`p-6 border hover:border-accent/50 transition-colors ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-black/10"
                }`}>
                  <h2 className={`text-lg font-bold mb-4 pb-2 border-b ${isDark ? "text-white border-white/10" : "text-black border-black/10"}`}>
                    {section.category}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className={`hover:text-accent transition-colors flex items-center gap-2 text-sm ${isDark ? "text-white/60" : "text-black/60"}`}
                        >
                          <ChevronRight className="w-4 h-4" />
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Indice;
