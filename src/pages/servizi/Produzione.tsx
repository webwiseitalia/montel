import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";

const Produzione = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Progettazione", href: "/servizi/progettazione", active: location.pathname === "/servizi/progettazione" },
    { label: "Produzione", href: "/servizi/produzione", active: location.pathname === "/servizi/produzione" },
  ];

  return (
    <PageLayout
      title="Produzione"
      subtitle="[Placeholder: sottotitolo sul servizio di produzione]"
      breadcrumbs={[
        { label: "Servizi", href: "/servizi" },
        { label: "Produzione" }
      ]}
      sidebarTitle="Servizi"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Descrizione impianti e processi */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            I nostri impianti
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione degli impianti produttivi, delle tecnologie
            utilizzate e della capacità produttiva. Stabilimenti, superfici,
            macchinari e attrezzature.]
          </p>
        </div>

        {/* Processi produttivi */}
        <div className={`p-8 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            I nostri processi
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Assemblaggio
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: descrizione del processo di assemblaggio]
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Controllo qualità
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: descrizione del controllo qualità in produzione]
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Collaudo
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: descrizione delle fasi di collaudo]
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Logistica
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: descrizione della logistica e consegne]
              </p>
            </div>
          </div>
        </div>

        {/* Capacità produttiva */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Capacità produttiva
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: informazioni sulla capacità produttiva, volumi,
            flessibilità e tempi di consegna. Capacità di gestire piccole
            serie e grandi volumi.]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Produzione;
