import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";

const CondizioniFornitura = () => {
  const { isDark } = useTheme();

  return (
    <PageLayout
      title="Condizioni generali di fornitura"
      breadcrumbs={[{ label: "Condizioni di fornitura" }]}
      showCTA={false}
    >
      <div className="space-y-8">
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione alle condizioni generali di fornitura]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 1 - Ambito di applicazione
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: ambito di applicazione delle condizioni]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 2 - Offerte e contratti
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: condizioni relative a offerte e contratti di fornitura]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 3 - Termini di consegna
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: condizioni relative ai termini di consegna]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 4 - Riserva di proprietà
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: condizioni sulla riserva di proprietà]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Articolo 5 - Responsabilità
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: limitazioni di responsabilità]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default CondizioniFornitura;
