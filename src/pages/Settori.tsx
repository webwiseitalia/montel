import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import useScrollReveal from "@/hooks/useScrollReveal";

// Import images
import settoriHeader from "@/assets/montel/settore applicazione/imgi_2_2500x900-settori-di-applicazione.webp";
import automotiveImg from "@/assets/montel/settore applicazione/imgi_8_automobilismo2.webp";
import motociclismoImg from "@/assets/montel/settore applicazione/imgi_5_motociclismo2.webp";
import aeronauticaImg from "@/assets/montel/settore applicazione/imgi_9_aeronautica2.webp";
import nauticaImg from "@/assets/montel/settore applicazione/imgi_13_nautico2.webp";
import medicaleImg from "@/assets/montel/settore applicazione/imgi_11_medicale2.webp";
import condizionamentoImg from "@/assets/montel/settore applicazione/imgi_4_condizionatori.webp";
import elettrodomesticiImg from "@/assets/montel/settore applicazione/imgi_10_elettrodomestici2.webp";
import agricoleImg from "@/assets/montel/settore applicazione/imgi_7_magricole2.webp";
import elettrotecnicaImg from "@/assets/montel/settore applicazione/imgi_12_elettrotecnica2.webp";

const Settori = () => {
  const { isDark } = useTheme();
  const scrollRef = useScrollReveal();

  const sectors = [
    { image: automotiveImg, name: "Automotive", description: "Sensori di livello carburante, cablaggi e componenti elettrici per veicoli commerciali e industriali." },
    { image: motociclismoImg, name: "Motociclismo", description: "Soluzioni compatte e affidabili per moto, scooter e veicoli a due ruote." },
    { image: aeronauticaImg, name: "Aeronautica", description: "Componenti ad alta affidabilità per il settore aeronautico con standard qualitativi rigorosi." },
    { image: nauticaImg, name: "Nautica", description: "Sensori e cablaggi resistenti alla corrosione per imbarcazioni e applicazioni marine." },
    { image: medicaleImg, name: "Medicale", description: "Cablaggi e componenti per apparecchi elettromedicali con certificazioni specifiche di settore." },
    { image: condizionamentoImg, name: "Condizionamento", description: "Soluzioni per impianti HVAC, climatizzatori e sistemi di refrigerazione." },
    { image: elettrodomesticiImg, name: "Elettrodomestici", description: "Cablaggi e componenti per elettrodomestici di uso quotidiano." },
    { image: agricoleImg, name: "Macchine agricole", description: "Sensori e cablaggi robusti per trattori, mietitrebbie e attrezzature agricole." },
    { image: elettrotecnicaImg, name: "Elettrotecnica industriale", description: "Quadri elettrici e cablaggi per applicazioni industriali e automazione." },
  ];

  return (
    <PageLayout
      title="Settori di applicazione"
      subtitle="I nostri prodotti sono presenti in oltre 10 settori industriali"
      breadcrumbs={[{ label: "Settori di applicazione" }]}
      showCTA={true}
    >
      <div className="space-y-12" ref={scrollRef}>
        {/* Hero Banner */}
        <div className="reveal relative h-48 md:h-64 lg:h-80 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          <img
            src={settoriHeader}
            alt="Mont.El - Settori di Applicazione"
            title="Settori di Applicazione Mont.El"
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
            Da oltre 50 anni serviamo i settori industriali più esigenti con soluzioni elettriche ed elettroniche di alta qualità. La nostra esperienza multisettoriale ci permette di comprendere le esigenze specifiche di ogni ambito applicativo e di sviluppare prodotti che rispettano gli standard più rigorosi.
          </p>
        </div>

        {/* Sectors Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={sector.name}
              className={`reveal group relative overflow-hidden border transition-all hover:border-primary hover-lift ${
                isDark
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-black/5 border-black/10 hover:bg-black/10"
              }`}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  title={`Mont.El - Settore ${sector.name}`}
                  loading="lazy"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h2 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
                  {sector.name}
                </h2>
                <p className={`text-sm leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}>
                  {sector.description}
                </p>
              </div>
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className={`reveal p-8 border hover-lift ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Soluzioni su misura per ogni settore
          </h2>
          <p className={`leading-relaxed ${isDark ? "text-white/70" : "text-black/70"}`}>
            Ogni settore ha esigenze specifiche in termini di normative, certificazioni e performance. Il nostro approccio co-design ci permette di lavorare a stretto contatto con OEM e system integrator per sviluppare soluzioni personalizzate che rispettano tutti i requisiti tecnici e normativi del settore di destinazione.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Settori;
