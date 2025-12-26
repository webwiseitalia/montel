import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";
import { FileCheck } from "lucide-react";

const Brevetti = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Codesign", href: "/qualita/codesign", active: location.pathname === "/qualita/codesign" },
    { label: "Tecnologia", href: "/qualita/tecnologia", active: location.pathname === "/qualita/tecnologia" },
    { label: "Certificazioni", href: "/qualita/certificazioni", active: location.pathname === "/qualita/certificazioni" },
    { label: "Brevetti", href: "/qualita/brevetti", active: location.pathname === "/qualita/brevetti" },
    { label: "Riconoscimenti", href: "/qualita/riconoscimenti", active: location.pathname === "/qualita/riconoscimenti" },
  ];

  const patents = [
    { name: "Brevetti di invenzione", number: "Sonde di livello carburante", description: "Innovazioni nel sistema di rilevamento del livello carburante con tecnologia potenziometrica avanzata." },
    { name: "Modelli di utilità", number: "Apparecchiature elettromeccaniche", description: "Soluzioni innovative per componenti elettromeccanici destinati a diversi settori industriali." },
    { name: "Disegni e modelli comunitari", number: "Dispositivi medico-sanitari", description: "Design registrati per dispositivi e componenti destinati al settore medicale e sanitario." },
  ];

  return (
    <PageLayout
      title="Brevetti"
      subtitle="Innovazione protetta: i nostri brevetti industriali registrati"
      breadcrumbs={[
        { label: "Qualità", href: "/qualita" },
        { label: "Brevetti" }
      ]}
      sidebarTitle="Qualità"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Innovazione brevettata
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            L'innovazione è nel nostro DNA. Da oltre 50 anni investiamo in ricerca e sviluppo per creare soluzioni tecnologiche all'avanguardia. I nostri brevetti industriali registrati coprono diversi ambiti: sonde di livello carburante, apparecchiature elettromeccaniche e dispositivi medico-sanitari. La protezione della proprietà intellettuale è per noi garanzia di qualità e competitività sul mercato.
          </p>
        </div>

        {/* Elenco brevetti */}
        <div className="space-y-6">
          {patents.map((patent, index) => (
            <div
              key={index}
              className={`p-6 border transition-all hover:border-accent ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              }`}
            >
              <div className="flex items-start gap-4">
                <FileCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-black"}`}>
                    {patent.name}
                  </h3>
                  <p className={`text-sm text-accent mb-2`}>
                    {patent.number}
                  </p>
                  <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                    {patent.description}
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

export default Brevetti;
