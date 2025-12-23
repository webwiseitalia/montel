import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";

const SondeTemperatura = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Sensori di livello carburante", href: "/prodotti/sensori-livello-carburante", active: location.pathname === "/prodotti/sensori-livello-carburante" },
    { label: "Cablaggi elettrici", href: "/prodotti/cablaggi-elettrici", active: location.pathname === "/prodotti/cablaggi-elettrici" },
    { label: "Quadri elettrici", href: "/prodotti/quadri-elettrici", active: location.pathname === "/prodotti/quadri-elettrici" },
    { label: "Sonde di temperatura", href: "/prodotti/sonde-temperatura", active: location.pathname === "/prodotti/sonde-temperatura" },
  ];

  const sectors = [
    "[Placeholder: settore 1 - es. automotive]",
    "[Placeholder: settore 2 - es. HVAC]",
    "[Placeholder: settore 3 - es. elettrodomestici]",
    "[Placeholder: settore 4 - es. industriale]",
    "[Placeholder: settore 5 - es. medicale]",
  ];

  return (
    <PageLayout
      title="Sonde di temperatura"
      subtitle="[Placeholder: sottotitolo descrittivo delle sonde di temperatura]"
      breadcrumbs={[
        { label: "Prodotti", href: "/prodotti" },
        { label: "Sonde di temperatura" }
      ]}
      sidebarTitle="Prodotti"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Descrizione gamma */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            La nostra gamma
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione della gamma di sonde di temperatura offerte.
            Tipologie, tecnologie utilizzate (NTC, PTC, termocoppie, RTD),
            range di temperatura e precisione.]
          </p>
        </div>

        {/* Caratteristiche tecniche */}
        <div className={`p-8 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Caratteristiche tecniche
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Range di temperatura
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: range di temperatura supportato]
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Precisione
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: livelli di precisione disponibili]
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Materiali
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: materiali utilizzati]
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Certificazioni
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: certificazioni disponibili]
              </p>
            </div>
          </div>
        </div>

        {/* Settori applicativi */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Settori applicativi
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className={`p-4 border ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  <span className={isDark ? "text-white/70" : "text-black/70"}>
                    {sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personalizzazione */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Soluzioni personalizzate
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione della capacità di realizzare sonde
            personalizzate secondo le specifiche del cliente. Tempi di sviluppo,
            quantitativi minimi, supporto tecnico.]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default SondeTemperatura;
