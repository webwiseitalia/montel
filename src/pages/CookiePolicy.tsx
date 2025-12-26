import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";

const CookiePolicy = () => {
  const { isDark } = useTheme();

  return (
    <PageLayout
      title="Cookie Policy"
      breadcrumbs={[{ label: "Cookie Policy" }]}
      showCTA={false}
    >
      <div className="space-y-8">
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione alla Cookie Policy]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Cosa sono i cookie
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: spiegazione di cosa sono i cookie e come funzionano]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Tipologie di cookie utilizzati
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: elenco e descrizione delle tipologie di cookie utilizzati
            - cookie tecnici, cookie di profilazione, cookie di terze parti, ecc.]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Come gestire i cookie
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: istruzioni su come gestire, disabilitare o eliminare
            i cookie attraverso le impostazioni del browser]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Aggiornamenti
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: informazioni sugli aggiornamenti della Cookie Policy]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default CookiePolicy;
