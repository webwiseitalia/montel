import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";

const SensoriResistivi = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Sensori resistivi", href: "/case-history/sensori-livello-carburante/resistivi", active: true },
  ];

  return (
    <PageLayout
      title="Sensori di livello carburante resistivi"
      subtitle="[Placeholder: sottotitolo della case history]"
      breadcrumbs={[
        { label: "Case History", href: "/case-history" },
        { label: "Sensori di livello carburante", href: "/case-history/sensori-livello-carburante" },
        { label: "Sensori resistivi" }
      ]}
      sidebarTitle="Articoli correlati"
      sidebarLinks={sidebarLinks}
    >
      <article className="space-y-8">
        {/* Contenuto articolo */}
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: testo descrittivo della case history. Contesto del
            progetto, esigenze del cliente, sfide tecniche affrontate.]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            La sfida
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione della sfida affrontata nel progetto.
            Requisiti particolari, vincoli tecnici, obiettivi da raggiungere.]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            La soluzione
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione della soluzione sviluppata.
            Approccio tecnico, innovazioni introdotte, risultati ottenuti.]
          </p>
        </div>

        <div className={`p-6 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h2 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Risultati
          </h2>
          <ul className={`space-y-2 ${isDark ? "text-white/70" : "text-black/70"}`}>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span>[Placeholder: risultato 1]</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span>[Placeholder: risultato 2]</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span>[Placeholder: risultato 3]</span>
            </li>
          </ul>
        </div>
      </article>
    </PageLayout>
  );
};

export default SensoriResistivi;
