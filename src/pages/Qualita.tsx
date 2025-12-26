import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Cpu, Award, FileCheck, Trophy } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

// Import images
import qualitaBanner from "@/assets/montel/imgi_16_2500x900-qualita.webp";
import qualita1 from "@/assets/montel/imgi_22_qualita_1.webp";
import qualita2 from "@/assets/montel/imgi_23_qualita_2.webp";
import qualita3 from "@/assets/montel/imgi_24_qualita_3.webp";
import isoLogo from "@/assets/montel/imgi_21_ISO-9001_col.webp";
import ulBadge from "@/assets/montel/imgi_20_Badge_E511641_EN.webp";

const Qualita = () => {
  const { isDark } = useTheme();
  const scrollRef = useScrollReveal();

  const qualityCards = [
    {
      icon: Handshake,
      title: "Codesign",
      description: "Collaborazione con il cliente dalla fase di concept fino all'industrializzazione del prodotto.",
      href: "/qualita/codesign",
    },
    {
      icon: Cpu,
      title: "Tecnologia",
      description: "Produzione ad alta automazione con lavorazioni complete e software di stima costi/tempi.",
      href: "/qualita/tecnologia",
    },
    {
      icon: Award,
      title: "Certificazioni",
      description: "Sistema qualità conforme agli standard internazionali con controlli rigorosi su ogni prodotto.",
      href: "/qualita/certificazioni",
    },
    {
      icon: FileCheck,
      title: "Brevetti",
      description: "Brevetti industriali per sensori di livello, apparecchiature elettromeccaniche e dispositivi medicali.",
      href: "/qualita/brevetti",
    },
    {
      icon: Trophy,
      title: "Riconoscimenti",
      description: "Premi e riconoscimenti che testimoniano l'eccellenza e l'impegno costante verso la qualità.",
      href: "/qualita/riconoscimenti",
    },
  ];

  return (
    <PageLayout
      title="Qualità"
      subtitle="L'eccellenza come standard, il miglioramento continuo come obiettivo"
      breadcrumbs={[{ label: "Qualità" }]}
      showCTA={true}
    >
      <div className="space-y-12" ref={scrollRef}>
        {/* Hero Banner */}
        <div className="reveal relative h-48 md:h-64 lg:h-80 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          <img
            src={qualitaBanner}
            alt="Mont.El - Qualità"
            title="Mont.El - Sistema Qualità Certificato"
            loading="eager"
            width={2500}
            height={900}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        {/* Intro */}
        <div className={`reveal prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg leading-relaxed ${isDark ? "text-white/70" : "text-black/70"}`}>
            La qualità è al centro di tutto ciò che facciamo. Il nostro sistema qualità è conforme agli standard internazionali e prevede controlli e test su tutti i prodotti prima della consegna. L'approccio al miglioramento continuo, i brevetti industriali registrati e le certificazioni di settore testimoniano il nostro impegno costante verso l'eccellenza.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="reveal aspect-[4/3] overflow-hidden group" style={{ transitionDelay: "0ms" }}>
            <img src={qualita1} alt="Controllo qualità" title="Mont.El - Controllo Qualità" loading="lazy" width={400} height={300} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="reveal aspect-[4/3] overflow-hidden group" style={{ transitionDelay: "100ms" }}>
            <img src={qualita2} alt="Test prodotti" title="Mont.El - Test Prodotti" loading="lazy" width={400} height={300} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="reveal aspect-[4/3] overflow-hidden group" style={{ transitionDelay: "200ms" }}>
            <img src={qualita3} alt="Certificazioni" title="Mont.El - Certificazioni" loading="lazy" width={400} height={300} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>

        {/* Certifications Badges */}
        <div className={`reveal p-8 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h3 className={`text-xl font-bold mb-6 text-center ${isDark ? "text-white" : "text-black"}`}>
            Le nostre certificazioni
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={isoLogo} alt="ISO 9001" title="Certificazione ISO 9001" loading="lazy" width={120} height={120} className="h-20 md:h-24 object-contain hover:scale-110 transition-transform duration-500" />
            <img src={ulBadge} alt="UL Certification" title="Certificazione UL" loading="lazy" width={120} height={120} className="h-20 md:h-24 object-contain hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        {/* Quality Cards Hub */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityCards.map((card, index) => (
            <Link
              key={card.href}
              to={card.href}
              className={`reveal group relative p-6 border transition-all hover:border-primary hover-lift overflow-hidden ${
                isDark
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-black/5 border-black/10 hover:bg-black/10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <card.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h2 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
                {card.title}
              </h2>
              <p className={`text-sm mb-4 leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}>
                {card.description}
              </p>
              <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                Scopri
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Qualita;
