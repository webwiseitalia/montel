import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

// Import images
import sensoriImg from "@/assets/montel/imgi_7_sensori-carburante.webp";
import cablaggiImg from "@/assets/montel/imgi_8_cablaggi-elettrici.webp";
import quadriImg from "@/assets/montel/imgi_9_quadri-elettrici.webp";
import sondeImg from "@/assets/montel/imgi_10_sonde_di_temperatura.webp";
import prodottiBanner from "@/assets/montel/imgi_18_2500x900-prodotti.webp";

const Prodotti = () => {
  const { isDark } = useTheme();
  const scrollRef = useScrollReveal();

  const products = [
    {
      image: sensoriImg,
      title: "Sensori di livello carburante",
      description: "Sensori basati sul principio del potenziometro con contatto strisciante interno al galleggiante. Linearizzazione del segnale, contatto di riserva e possibilità di \"zone buie\". Ampia gamma di modelli per applicazioni industriali e automotive.",
      href: "/prodotti/sensori-livello-carburante",
    },
    {
      image: cablaggiImg,
      title: "Cablaggi elettrici",
      description: "Cablaggi elettrici personalizzati con progettazione su specifiche del cliente. Approccio co-design e produzione per diversi settori industriali, integrazione con software di stima costi e tempi.",
      href: "/prodotti/cablaggi-elettrici",
    },
    {
      image: quadriImg,
      title: "Quadri elettrici",
      description: "Quadri elettrici industriali progettati e realizzati su misura. Conformità alle normative e agli standard richiesti per applicazioni in diversi settori industriali.",
      href: "/prodotti/quadri-elettrici",
    },
    {
      image: sondeImg,
      title: "Sonde di temperatura",
      description: "Sonde di temperatura personalizzabili con segnale continuo, adattabili a differenti applicazioni e settori. Progettazione su specifiche del cliente.",
      href: "/prodotti/sonde-temperatura",
    },
  ];

  return (
    <PageLayout
      title="Prodotti"
      subtitle="Soluzioni elettriche ed elettroniche di alta qualità dal 1972"
      breadcrumbs={[{ label: "Prodotti" }]}
      showCTA={true}
    >
      <div className="space-y-12" ref={scrollRef}>
        {/* Banner Image */}
        <div className="relative h-48 md:h-64 lg:h-80 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          <img
            src={prodottiBanner}
            alt="Mont.El Prodotti"
            title="Mont.El - Gamma Prodotti"
            loading="eager"
            width={2500}
            height={900}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        {/* Intro */}
        <div className={`prose max-w-none reveal ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg leading-relaxed ${isDark ? "text-white/70" : "text-black/70"}`}>
            La nostra gamma prodotti comprende sensori di livello carburante, cablaggi elettrici, quadri elettrici e sonde di temperatura. Ogni prodotto viene realizzato con know-how interno, tecnologie all'avanguardia e un rigoroso sistema qualità. Offriamo soluzioni personalizzate con approccio co-design, dalla progettazione all'industrializzazione.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.href}
              to={product.href}
              className={`reveal group relative overflow-hidden hover-lift ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-black/5 shadow-sm"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  title={`Mont.El - ${product.title}`}
                  loading="lazy"
                  width={640}
                  height={360}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                  {product.title}
                </h2>
                <p className={`mb-6 leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}>
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Scopri di più
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Prodotti;
