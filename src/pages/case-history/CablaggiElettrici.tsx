import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CaseHistoryCablaggi = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Sensori di livello carburante", href: "/case-history/sensori-livello-carburante", active: location.pathname.startsWith("/case-history/sensori") },
    { label: "Cablaggi elettrici", href: "/case-history/cablaggi-elettrici", active: location.pathname.startsWith("/case-history/cablaggi") },
    { label: "Quadri elettrici", href: "/case-history/quadri-elettrici", active: location.pathname.startsWith("/case-history/quadri") },
  ];

  const articles = [
    {
      title: "Cablaggio per auto",
      description: "[Placeholder: breve descrizione della case history automotive]",
      href: "/case-history/cablaggi-elettrici/auto",
    },
    {
      title: "Cablaggio per moto",
      description: "[Placeholder: breve descrizione della case history motociclistico]",
      href: "/case-history/cablaggi-elettrici/moto",
    },
    {
      title: "Cablaggi per il condizionamento",
      description: "[Placeholder: breve descrizione della case history HVAC]",
      href: "/case-history/cablaggi-elettrici/condizionamento",
    },
    {
      title: "Cablaggi per vending machines",
      description: "[Placeholder: breve descrizione della case history vending]",
      href: "/case-history/cablaggi-elettrici/vending",
    },
    {
      title: "Cablaggi per apparecchi elettromedicali",
      description: "[Placeholder: breve descrizione della case history medicale]",
      href: "/case-history/cablaggi-elettrici/elettromedicali",
    },
  ];

  return (
    <PageLayout
      title="Case History: Cablaggi elettrici"
      subtitle="[Placeholder: introduzione alle case history dei cablaggi]"
      breadcrumbs={[
        { label: "Case History", href: "/case-history" },
        { label: "Cablaggi elettrici" }
      ]}
      sidebarTitle="Categorie"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        {/* Intro */}
        <div>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione alle case history relative ai cablaggi
            elettrici. Diversità di settori serviti, competenze sviluppate,
            soluzioni personalizzate.]
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

export default CaseHistoryCablaggi;
