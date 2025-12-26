import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const QuadriElettrici = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Sensori di livello carburante", href: "/prodotti/sensori-livello-carburante", active: location.pathname === "/prodotti/sensori-livello-carburante" },
    { label: "Cablaggi elettrici", href: "/prodotti/cablaggi-elettrici", active: location.pathname === "/prodotti/cablaggi-elettrici" },
    { label: "Quadri elettrici", href: "/prodotti/quadri-elettrici", active: location.pathname === "/prodotti/quadri-elettrici" },
    { label: "Sonde di temperatura", href: "/prodotti/sonde-temperatura", active: location.pathname === "/prodotti/sonde-temperatura" },
  ];

  const processSteps = [
    { step: "1", title: "Analisi requisiti", description: "[Placeholder: descrizione della fase di analisi]" },
    { step: "2", title: "Progettazione", description: "[Placeholder: descrizione della fase di progettazione]" },
    { step: "3", title: "Produzione", description: "[Placeholder: descrizione della fase di produzione]" },
    { step: "4", title: "Collaudo", description: "[Placeholder: descrizione della fase di collaudo]" },
    { step: "5", title: "Consegna", description: "[Placeholder: descrizione della fase di consegna]" },
  ];

  return (
    <PageLayout
      title="Quadri elettrici"
      subtitle="[Placeholder: sottotitolo descrittivo dei quadri elettrici]"
      breadcrumbs={[
        { label: "Prodotti", href: "/prodotti" },
        { label: "Quadri elettrici" }
      ]}
      sidebarTitle="Prodotti"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Descrizione */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Dal progetto alla produzione
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: testo che descrive il processo completo dalla richiesta
            del cliente al prodotto finito. L'azienda accompagna il cliente in
            ogni fase, garantendo qualità e rispetto dei tempi.]
          </p>
        </div>

        {/* Processo cliente → progetto → produzione */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Il nostro processo
          </h2>
          <div className="space-y-4">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className={`p-6 border transition-all ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent text-white font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                      {item.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className={`w-5 h-5 hidden md:block ${isDark ? "text-white/30" : "text-black/30"}`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tipologie */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Tipologie di quadri
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione delle diverse tipologie di quadri elettrici
            prodotti. Quadri di comando, quadri di distribuzione, quadri bordo
            macchina, quadri per automazione, ecc.]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default QuadriElettrici;
