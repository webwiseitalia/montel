import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";
import { Download, Info } from "lucide-react";

const SensoriLivelloCarburante = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Sensori di livello carburante", href: "/prodotti/sensori-livello-carburante", active: location.pathname === "/prodotti/sensori-livello-carburante" },
    { label: "Cablaggi elettrici", href: "/prodotti/cablaggi-elettrici", active: location.pathname === "/prodotti/cablaggi-elettrici" },
    { label: "Quadri elettrici", href: "/prodotti/quadri-elettrici", active: location.pathname === "/prodotti/quadri-elettrici" },
    { label: "Sonde di temperatura", href: "/prodotti/sonde-temperatura", active: location.pathname === "/prodotti/sonde-temperatura" },
  ];

  const models = [
    { name: "Serie A1", specs: "Sensori compatti per applicazioni automotive e motociclistiche" },
    { name: "Serie A2", specs: "Sensori con corsa media per serbatoi di dimensioni standard" },
    { name: "Serie A4", specs: "Sensori a corsa lunga per serbatoi industriali e veicoli agricoli" },
    { name: "Serie B1", specs: "Sensori con contatto di riserva integrato per applicazioni con allarme" },
  ];

  return (
    <PageLayout
      title="Sensori di livello carburante"
      subtitle="Tecnologia potenziometrica per la misurazione precisa del livello carburante"
      breadcrumbs={[
        { label: "Prodotti", href: "/prodotti" },
        { label: "Sensori di livello carburante" }
      ]}
      sidebarTitle="Prodotti"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Intro tecnico */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Introduzione tecnica
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            I nostri sensori di livello carburante sono basati sul principio del potenziometro, con contatto strisciante interno al galleggiante. Questa tecnologia garantisce precisione, affidabilità e lunga durata nel tempo. Ogni sensore viene progettato e realizzato con know-how interno sviluppato in oltre 50 anni di esperienza.
          </p>
        </div>

        {/* Download catalogo */}
        <div className={`p-6 border border-accent/30 bg-accent/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}>
          <div className="flex items-center gap-4">
            <Download className="w-8 h-8 text-accent" />
            <div>
              <h3 className={`font-bold ${isDark ? "text-white" : "text-black"}`}>
                Catalogo sensori
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                Scarica il catalogo completo con specifiche tecniche e modelli disponibili
              </p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-bold uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        {/* Descrizione funzionamento */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Come funzionano
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            Il sensore utilizza un galleggiante collegato a un braccio che aziona un potenziometro. La variazione di resistenza elettrica è proporzionale al livello del carburante nel serbatoio. I nostri sensori offrono linearizzazione del segnale per una lettura precisa, contatto di riserva per segnalare il livello minimo, e la possibilità di configurare "zone buie" per adattarsi a serbatoi di forme particolari.
          </p>
        </div>

        {/* Elenco modelli / varianti */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Modelli e varianti
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {models.map((model, index) => (
              <div
                key={index}
                className={`p-5 border transition-all hover:border-accent ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                }`}
              >
                <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                  {model.name}
                </h3>
                <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                  {model.specs}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Note informative */}
        <div className={`p-6 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Note informative
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                Tutti i nostri sensori possono essere personalizzati in base alle specifiche esigenze del cliente. Contattateci per richiedere una progettazione su misura. I sensori sono coperti da brevetti industriali registrati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SensoriLivelloCarburante;
