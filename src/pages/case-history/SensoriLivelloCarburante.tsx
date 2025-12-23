import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CaseHistorySensori = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Sensori di livello carburante", href: "/case-history/sensori-livello-carburante", active: location.pathname.startsWith("/case-history/sensori") },
    { label: "Cablaggi elettrici", href: "/case-history/cablaggi-elettrici", active: location.pathname.startsWith("/case-history/cablaggi") },
    { label: "Quadri elettrici", href: "/case-history/quadri-elettrici", active: location.pathname.startsWith("/case-history/quadri") },
  ];

  const articles = [
    {
      title: "Sensori di livello carburante resistivi",
      description: "[Placeholder: breve descrizione della case history]",
      href: "/case-history/sensori-livello-carburante/resistivi",
    },
  ];

  return (
    <PageLayout
      title="Case History: Sensori di livello carburante"
      subtitle="[Placeholder: introduzione alle case history dei sensori]"
      breadcrumbs={[
        { label: "Case History", href: "/case-history" },
        { label: "Sensori di livello carburante" }
      ]}
      sidebarTitle="Categorie"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        {/* Intro */}
        <div>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione alle case history relative ai sensori
            di livello carburante. Progetti realizzati, sfide affrontate,
            soluzioni innovative.]
          </p>
        </div>

        {/* Articles list */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.href}
              to={article.href}
              className={`group block p-6 border transition-all hover:border-accent ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              }`}
            >
              <h3 className={`text-xl font-bold mb-2 group-hover:text-accent transition-colors ${isDark ? "text-white" : "text-black"}`}>
                {article.title}
              </h3>
              <p className={`text-sm mb-4 ${isDark ? "text-white/60" : "text-black/60"}`}>
                {article.description}
              </p>
              <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                Leggi la case history
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseHistorySensori;
