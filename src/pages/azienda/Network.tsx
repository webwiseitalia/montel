import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";

const Network = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Punti di forza e mission", href: "/azienda/punti-di-forza", active: location.pathname === "/azienda/punti-di-forza" },
    { label: "Il Network", href: "/azienda/network", active: location.pathname === "/azienda/network" },
  ];

  const networkCompanies = [
    {
      name: "Mont.El",
      location: "Italia",
      description: "Sede principale del gruppo. Progettazione e produzione di sensori di livello carburante, cablaggi elettrici, quadri elettrici e sonde di temperatura.",
    },
    {
      name: "Stabilimento Romania",
      location: "Romania",
      description: "Struttura produttiva per cablaggi elettrici e assemblaggi elettromeccanici, con capacità produttiva ad alta automazione.",
    },
  ];

  const milestones = [
    { year: "1972", event: "Giuseppe Novali fonda Mont.El a Sale Marasino (BS), iniziando la produzione di componenti elettrici ed elettronici." },
    { year: "Anni '80", event: "Espansione della produzione e ingresso nel settore automotive con sensori di livello carburante." },
    { year: "Anni '90", event: "Diversificazione della gamma prodotti: cablaggi elettrici e sonde di temperatura." },
    { year: "Anni 2000", event: "Apertura delle strutture produttive in Romania e consolidamento del network industriale." },
    { year: "Oggi", event: "Leader nella produzione di componenti elettrici per automotive, aeronautica, nautica, medicale e vending." },
  ];

  return (
    <PageLayout
      title="Il Network"
      subtitle="Un network industriale integrato con strutture produttive in Italia e Romania"
      breadcrumbs={[
        { label: "Azienda", href: "/azienda" },
        { label: "Il Network" }
      ]}
      sidebarTitle="Azienda"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Intro */}
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            Mont.El opera all'interno di un network industriale integrato che include diverse aziende specializzate in cablaggi, sensori, quadri elettrici e assemblaggi elettromeccanici. Questa struttura ci permette di offrire soluzioni complete e integrate, con produzione sia in Italia che in Romania, garantendo flessibilità, competitività e capacità di rispondere rapidamente alle esigenze dei clienti.
          </p>
        </div>

        {/* Network Companies Grid */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Le aziende del network
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {networkCompanies.map((company) => (
              <div
                key={company.name}
                className={`p-6 border transition-all hover:border-accent ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-black"}`}>
                      {company.name}
                    </h3>
                    <span className="text-accent text-sm">{company.location}</span>
                  </div>
                </div>
                <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline / Milestones */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            La nostra storia
          </h2>
          <div className={`border-l-2 ${isDark ? "border-white/20" : "border-black/20"} pl-6 space-y-8`}>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className={`absolute -left-[31px] w-4 h-4 rounded-full ${
                  isDark ? "bg-white/20" : "bg-black/20"
                } border-2 ${isDark ? "border-black" : "border-white"}`}>
                  <div className="absolute inset-1 rounded-full bg-accent" />
                </div>
                <div>
                  <span className="text-accent font-bold text-lg">{milestone.year}</span>
                  <p className={`mt-1 ${isDark ? "text-white/70" : "text-black/70"}`}>
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Network;
