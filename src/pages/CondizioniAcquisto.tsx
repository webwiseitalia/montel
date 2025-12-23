import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";

const CondizioniAcquisto = () => {
  const { isDark } = useTheme();

  return (
    <PageLayout
      title="Condizioni generali di acquisto"
      breadcrumbs={[{ label: "Condizioni di acquisto" }]}
      showCTA={false}
    >
      <div className="space-y-8">
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione alle condizioni generali di acquisto]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 1 - Definizioni
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: definizioni dei termini utilizzati nelle condizioni]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 2 - Ordini
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: condizioni relative agli ordini di acquisto]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 3 - Prezzi e pagamenti
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: condizioni relative a prezzi e modalità di pagamento]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 4 - Consegne
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: condizioni relative alle consegne]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 5 - Garanzia
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: condizioni di garanzia]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default CondizioniAcquisto;
