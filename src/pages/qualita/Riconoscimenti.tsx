import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";
import { Trophy } from "lucide-react";

const Riconoscimenti = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Codesign", href: "/qualita/codesign", active: location.pathname === "/qualita/codesign" },
    { label: "Tecnologia", href: "/qualita/tecnologia", active: location.pathname === "/qualita/tecnologia" },
    { label: "Certificazioni", href: "/qualita/certificazioni", active: location.pathname === "/qualita/certificazioni" },
    { label: "Brevetti", href: "/qualita/brevetti", active: location.pathname === "/qualita/brevetti" },
    { label: "Riconoscimenti", href: "/qualita/riconoscimenti", active: location.pathname === "/qualita/riconoscimenti" },
  ];

  const awards = [
    { name: "[Riconoscimento 1]", year: "[Anno]", description: "[Placeholder: descrizione del riconoscimento e del suo significato]" },
    { name: "[Riconoscimento 2]", year: "[Anno]", description: "[Placeholder: descrizione del riconoscimento e del suo significato]" },
    { name: "[Riconoscimento 3]", year: "[Anno]", description: "[Placeholder: descrizione del riconoscimento e del suo significato]" },
    { name: "[Riconoscimento 4]", year: "[Anno]", description: "[Placeholder: descrizione del riconoscimento e del suo significato]" },
  ];

  return (
    <PageLayout
      title="Riconoscimenti"
      subtitle="[Placeholder: sottotitolo sui premi e riconoscimenti ottenuti]"
      breadcrumbs={[
        { label: "Qualità", href: "/qualita" },
        { label: "Riconoscimenti" }
      ]}
      sidebarTitle="Qualità"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            I nostri riconoscimenti
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione ai riconoscimenti aziendali.
            I premi e i riconoscimenti ottenuti nel corso degli anni come
            testimonianza dell'eccellenza e dell'impegno costante.]
          </p>
        </div>

        {/* Elenco riconoscimenti */}
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`p-6 border transition-all hover:border-accent ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              }`}
            >
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-black"}`}>
                      {award.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 ${isDark ? "bg-white/10 text-white/60" : "bg-black/10 text-black/60"}`}>
                      {award.year}
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Riconoscimenti;
