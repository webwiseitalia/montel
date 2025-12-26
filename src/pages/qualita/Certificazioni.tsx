import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";
import { Award } from "lucide-react";

const Certificazioni = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Codesign", href: "/qualita/codesign", active: location.pathname === "/qualita/codesign" },
    { label: "Tecnologia", href: "/qualita/tecnologia", active: location.pathname === "/qualita/tecnologia" },
    { label: "Certificazioni", href: "/qualita/certificazioni", active: location.pathname === "/qualita/certificazioni" },
    { label: "Brevetti", href: "/qualita/brevetti", active: location.pathname === "/qualita/brevetti" },
    { label: "Riconoscimenti", href: "/qualita/riconoscimenti", active: location.pathname === "/qualita/riconoscimenti" },
  ];

  const certifications = [
    { name: "[Certificazione 1]", description: "[Placeholder: descrizione e ambito di applicazione]", year: "[Anno]" },
    { name: "[Certificazione 2]", description: "[Placeholder: descrizione e ambito di applicazione]", year: "[Anno]" },
    { name: "[Certificazione 3]", description: "[Placeholder: descrizione e ambito di applicazione]", year: "[Anno]" },
    { name: "[Certificazione 4]", description: "[Placeholder: descrizione e ambito di applicazione]", year: "[Anno]" },
    { name: "[Certificazione 5]", description: "[Placeholder: descrizione e ambito di applicazione]", year: "[Anno]" },
    { name: "[Certificazione 6]", description: "[Placeholder: descrizione e ambito di applicazione]", year: "[Anno]" },
  ];

  return (
    <PageLayout
      title="Certificazioni"
      subtitle="[Placeholder: sottotitolo sulle certificazioni ottenute]"
      breadcrumbs={[
        { label: "Qualità", href: "/qualita" },
        { label: "Certificazioni" }
      ]}
      sidebarTitle="Qualità"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Le nostre certificazioni
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione alle certificazioni aziendali.
            L'importanza delle certificazioni per garantire qualità e conformità
            ai più alti standard internazionali.]
          </p>
        </div>

        {/* Elenco certificazioni */}
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-6 border transition-all hover:border-accent ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              }`}
            >
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-black"}`}>
                      {cert.name}
                    </h3>
                    <span className={`text-sm ${isDark ? "text-white/50" : "text-black/50"}`}>
                      {cert.year}
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className={`p-6 border border-accent/30 bg-accent/5`}>
          <p className={`text-sm ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: nota aggiuntiva sulla validità delle certificazioni,
            gli enti certificatori e l'impegno al mantenimento degli standard.]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Certificazioni;
