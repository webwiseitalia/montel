import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Codesign = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Codesign", href: "/qualita/codesign", active: location.pathname === "/qualita/codesign" },
    { label: "Tecnologia", href: "/qualita/tecnologia", active: location.pathname === "/qualita/tecnologia" },
    { label: "Certificazioni", href: "/qualita/certificazioni", active: location.pathname === "/qualita/certificazioni" },
    { label: "Brevetti", href: "/qualita/brevetti", active: location.pathname === "/qualita/brevetti" },
    { label: "Riconoscimenti", href: "/qualita/riconoscimenti", active: location.pathname === "/qualita/riconoscimenti" },
  ];

  const otherQualityLinks = sidebarLinks.filter(link => !link.active);

  return (
    <PageLayout
      title="Codesign"
      subtitle="[Placeholder: sottotitolo sull'approccio collaborativo alla progettazione]"
      breadcrumbs={[
        { label: "Qualità", href: "/qualita" },
        { label: "Codesign" }
      ]}
      sidebarTitle="Qualità"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Descrizione */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Il nostro approccio
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione dettagliata dell'approccio codesign.
            Come l'azienda collabora con i clienti fin dalle prime fasi di
            progettazione per sviluppare soluzioni ottimizzate e personalizzate.]
          </p>
        </div>

        {/* Vantaggi */}
        <div className={`p-8 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Vantaggi del Codesign
          </h2>
          <ul className={`space-y-4 ${isDark ? "text-white/70" : "text-black/70"}`}>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span>[Placeholder: vantaggio 1 - es. riduzione dei tempi di sviluppo]</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span>[Placeholder: vantaggio 2 - es. ottimizzazione dei costi]</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span>[Placeholder: vantaggio 3 - es. migliore integrazione]</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span>[Placeholder: vantaggio 4 - es. supporto continuo]</span>
            </li>
          </ul>
        </div>

        {/* Rimandi alle altre voci Qualità */}
        <div>
          <h3 className={`text-lg font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Esplora anche
          </h3>
          <div className="flex flex-wrap gap-3">
            {otherQualityLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`inline-flex items-center gap-2 px-4 py-2 border transition-colors hover:border-accent hover:text-accent ${
                  isDark
                    ? "border-white/20 text-white/70"
                    : "border-black/20 text-black/70"
                }`}
              >
                {link.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Codesign;
