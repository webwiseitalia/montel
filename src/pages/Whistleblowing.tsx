import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { ExternalLink } from "lucide-react";

const Whistleblowing = () => {
  const { isDark } = useTheme();

  return (
    <PageLayout
      title="Whistleblowing"
      subtitle="[Placeholder: sottotitolo sul canale di segnalazione]"
      breadcrumbs={[{ label: "Whistleblowing" }]}
      showCTA={false}
    >
      <div className="space-y-8">
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione al sistema di whistleblowing aziendale
            ai sensi del D.Lgs. 24/2023. Spiegazione dello scopo e delle
            garanzie per i segnalanti.]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Cosa si può segnalare
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: tipologie di violazioni che possono essere segnalate]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Garanzie per il segnalante
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: garanzie di riservatezza e protezione da ritorsioni]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Come effettuare una segnalazione
          </h2>
          <p className={`mb-6 ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: istruzioni su come effettuare una segnalazione]
          </p>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors"
          >
            Accedi al portale segnalazioni
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className={`p-6 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
            Riferimenti normativi
          </h3>
          <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
            [Placeholder: riferimenti al D.Lgs. 24/2023 e alla Direttiva UE 2019/1937]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Whistleblowing;
