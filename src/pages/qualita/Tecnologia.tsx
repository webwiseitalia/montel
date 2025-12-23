import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Tecnologia = () => {
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
      title="Tecnologia"
      subtitle="[Placeholder: sottotitolo sulle tecnologie all'avanguardia]"
      breadcrumbs={[
        { label: "Qualità", href: "/qualita" },
        { label: "Tecnologia" }
      ]}
      sidebarTitle="Qualità"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Descrizione */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Le nostre tecnologie
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione delle tecnologie utilizzate in produzione.
            Macchinari, software di progettazione, sistemi di controllo qualità,
            automazione e innovazione continua.]
          </p>
        </div>

        {/* Aree tecnologiche */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-6 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
            <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
              Progettazione
            </h3>
            <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
              [Placeholder: tecnologie utilizzate nella fase di progettazione]
            </p>
          </div>
          <div className={`p-6 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
            <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
              Produzione
            </h3>
            <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
              [Placeholder: tecnologie utilizzate nella fase di produzione]
            </p>
          </div>
          <div className={`p-6 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
            <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
              Controllo qualità
            </h3>
            <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
              [Placeholder: tecnologie per il controllo qualità]
            </p>
          </div>
          <div className={`p-6 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
            <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
              Ricerca e sviluppo
            </h3>
            <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
              [Placeholder: investimenti in R&D e innovazione]
            </p>
          </div>
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

export default Tecnologia;
