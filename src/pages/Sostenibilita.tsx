import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ArrowRight, Recycle, FileText, Shield, BookOpen, AlertTriangle, ExternalLink, Download } from "lucide-react";

const Sostenibilita = () => {
  const { isDark } = useTheme();

  const cards = [
    {
      icon: Recycle,
      title: "Etichettatura ambientale",
      description: "[Placeholder: informazioni sull'etichettatura ambientale degli imballaggi]",
      href: "/sostenibilita/etichettatura-ambientale",
      type: "page",
    },
    {
      icon: FileText,
      title: "Politica aziendale integrata",
      description: "[Placeholder: scarica il documento sulla politica aziendale]",
      href: "#",
      type: "download",
    },
    {
      icon: Shield,
      title: "Politica ambiente e sicurezza",
      description: "[Placeholder: scarica il documento su ambiente e sicurezza]",
      href: "#",
      type: "download",
    },
    {
      icon: BookOpen,
      title: "Codice etico e di condotta",
      description: "[Placeholder: scarica il codice etico aziendale]",
      href: "#",
      type: "download",
    },
    {
      icon: AlertTriangle,
      title: "Whistleblowing",
      description: "[Placeholder: accedi al canale di segnalazione]",
      href: "/whistleblowing",
      type: "external",
    },
  ];

  return (
    <PageLayout
      title="Sostenibilità"
      subtitle="[Placeholder: introduzione all'impegno dell'azienda per la sostenibilità]"
      breadcrumbs={[{ label: "Sostenibilità" }]}
      showCTA={true}
    >
      <div className="space-y-12">
        {/* Intro */}
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: testo introduttivo sull'impegno dell'azienda verso
            la sostenibilità ambientale, sociale e di governance. Obiettivi,
            iniziative e risultati raggiunti.]
          </p>
        </div>

        {/* Cards Hub */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const isDownload = card.type === "download";
            const isExternal = card.type === "external";
            const isPage = card.type === "page";

            const CardContent = () => (
              <>
                <card.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h2 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
                  {card.title}
                </h2>
                <p className={`text-sm mb-4 ${isDark ? "text-white/60" : "text-black/60"}`}>
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                  {isDownload && (
                    <>
                      <Download className="w-4 h-4" />
                      Scarica PDF
                    </>
                  )}
                  {isExternal && (
                    <>
                      Accedi
                      <ExternalLink className="w-4 h-4" />
                    </>
                  )}
                  {isPage && (
                    <>
                      Scopri
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>
              </>
            );

            if (isPage) {
              return (
                <Link
                  key={card.title}
                  to={card.href}
                  className={`group p-6 border transition-all hover:border-accent ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-black/5 border-black/10 hover:bg-black/10"
                  }`}
                >
                  <CardContent />
                </Link>
              );
            }

            return (
              <a
                key={card.title}
                href={card.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`group p-6 border transition-all hover:border-accent cursor-pointer ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-black/5 border-black/10 hover:bg-black/10"
                }`}
              >
                <CardContent />
              </a>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default Sostenibilita;
