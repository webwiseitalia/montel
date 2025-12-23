import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Award, Building } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

// Import images
import aziendaHero from "@/assets/montel/imgi_12_chisiamo_header.webp";
import aziendaImg from "@/assets/montel/imgi_8_azienda_1.webp";
import montelGroup from "@/assets/montel/imgi_84_montelgroup.webp";

const Azienda = () => {
  const { isDark } = useTheme();
  const scrollRef = useScrollReveal();

  const subpages = [
    { label: "Punti di forza e mission", href: "/azienda/punti-di-forza" },
    { label: "Il Network", href: "/azienda/network" },
  ];

  return (
    <PageLayout
      title="Azienda"
      subtitle="Dal 1972, soluzioni elettriche ed elettroniche di alta qualità per i settori industriali più esigenti"
      breadcrumbs={[{ label: "Azienda" }]}
      sidebarTitle="Sezioni"
      sidebarLinks={subpages}
    >
      <div className="space-y-12" ref={scrollRef}>
        {/* Hero Image */}
        <div className="reveal relative h-48 md:h-64 lg:h-80 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          <img
            src={aziendaHero}
            alt="Mont.El - Chi Siamo"
            title="Mont.El - La Nostra Azienda"
            loading="eager"
            width={2500}
            height={900}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>

        {/* Intro with Image */}
        <div className="reveal grid lg:grid-cols-2 gap-8 items-center">
          <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
            <p className={`text-lg leading-relaxed ${isDark ? "text-white/70" : "text-black/70"}`}>
              Mont.El Apparecchiature Elettroelettroniche S.r.l. è stata fondata nel 1972 da Giuseppe Novali a Sale Marasino, in provincia di Brescia. Da oltre 50 anni progettiamo e produciamo sensori di livello carburante, cablaggi elettrici, quadri elettrici e sonde di temperatura per i settori più esigenti dell'industria: automotive, aeronautica, nautica, medicale, vending e molti altri.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={aziendaImg}
              alt="Mont.El Azienda"
              title="Mont.El - Sede di Sale Marasino"
              loading="lazy"
              width={600}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Menu secondario interno */}
        <div className="grid md:grid-cols-2 gap-6">
          {subpages.map((page, index) => (
            <Link
              key={page.href}
              to={page.href}
              className={`reveal group relative p-6 border transition-all hover:border-accent hover-lift overflow-hidden ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                {page.label}
              </h3>
              <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                Scopri
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>

        {/* Blocco espansione produttiva con immagine */}
        <div className={`reveal border overflow-hidden hover-lift ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <Building className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
                    Il Network Mont.El
                  </h3>
                  <p className={`mb-4 leading-relaxed ${isDark ? "text-white/70" : "text-black/70"}`}>
                    Mont.El opera all'interno di un network industriale integrato che include strutture produttive in Italia e Romania. Questa strategia di espansione ci permette di garantire flessibilità produttiva, competitività e capacità di rispondere alle esigenze di clienti in tutto il mondo.
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={montelGroup}
                alt="Mont.El Group Network"
                title="Mont.El Group - Network Produttivo"
                loading="lazy"
                width={640}
                height={360}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Sezione certificazioni teaser */}
        <div className={`reveal p-8 border hover-lift ${isDark ? "border-white/10" : "border-black/10"}`}>
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
                Certificazioni
              </h3>
              <p className={`mb-4 leading-relaxed ${isDark ? "text-white/70" : "text-black/70"}`}>
                Il nostro sistema qualità è conforme agli standard internazionali. Ogni prodotto viene sottoposto a controlli e test prima della consegna, garantendo affidabilità e conformità alle normative di settore.
              </p>
              <Link
                to="/qualita/certificazioni"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all group"
              >
                Scopri tutte le certificazioni
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Blocco download catalogo */}
        <div className={`reveal p-8 border border-accent/30 bg-accent/5 hover-lift`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Download className="w-8 h-8 text-accent" />
              <div>
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-black"}`}>
                  Catalogo aziendale
                </h3>
                <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                  Scarica il catalogo completo dei sensori di livello carburante
                </p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold uppercase tracking-wider text-sm hover:bg-accent/90 hover:scale-105 transition-all">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Azienda;
