import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";

const Privacy = () => {
  const { isDark } = useTheme();

  return (
    <PageLayout
      title="Privacy Policy - GDPR"
      breadcrumbs={[{ label: "Privacy" }]}
      showCTA={false}
    >
      <div className="space-y-8">
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione alla Privacy Policy ai sensi del Regolamento UE 2016/679 (GDPR)]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Titolare del trattamento
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: dati del titolare del trattamento - ragione sociale, indirizzo, contatti]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Tipologie di dati raccolti
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: descrizione delle tipologie di dati personali raccolti
            - dati di navigazione, dati forniti volontariamente, ecc.]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Finalità del trattamento
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: finalità per cui i dati vengono trattati]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Base giuridica del trattamento
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: basi giuridiche per il trattamento dei dati]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Diritti dell'interessato
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: elenco dei diritti dell'interessato ai sensi del GDPR
            - accesso, rettifica, cancellazione, limitazione, portabilità, opposizione]
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Periodo di conservazione
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: informazioni sul periodo di conservazione dei dati]
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Privacy;
