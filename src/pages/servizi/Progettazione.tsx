import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";

const Progettazione = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Progettazione", href: "/servizi/progettazione", active: location.pathname === "/servizi/progettazione" },
    { label: "Produzione", href: "/servizi/produzione", active: location.pathname === "/servizi/produzione" },
  ];

  return (
    <PageLayout
      title="Progettazione"
      subtitle="[Placeholder: sottotitolo sul servizio di progettazione]"
      breadcrumbs={[
        { label: "Servizi", href: "/servizi" },
        { label: "Progettazione" }
      ]}
      sidebarTitle="Servizi"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Descrizione */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Il nostro servizio di progettazione
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione dettagliata del servizio di progettazione.
            Come l'azienda supporta i clienti nella definizione dei requisiti,
            nella progettazione tecnica e nella validazione delle soluzioni.]
          </p>
        </div>

        {/* Fasi del processo */}
        <div className={`p-8 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Il processo di progettazione
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-accent text-white font-bold flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className={`font-bold mb-1 ${isDark ? "text-white" : "text-black"}`}>
                  Analisi dei requisiti
                </h3>
                <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                  [Placeholder: descrizione della fase di analisi]
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-accent text-white font-bold flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className={`font-bold mb-1 ${isDark ? "text-white" : "text-black"}`}>
                  Sviluppo del progetto
                </h3>
                <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                  [Placeholder: descrizione della fase di sviluppo]
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-accent text-white font-bold flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className={`font-bold mb-1 ${isDark ? "text-white" : "text-black"}`}>
                  Prototipazione e validazione
                </h3>
                <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                  [Placeholder: descrizione della fase di prototipazione]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Competenze */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Le nostre competenze
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione delle competenze del team di progettazione,
            gli strumenti utilizzati e le metodologie adottate.]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Progettazione;
