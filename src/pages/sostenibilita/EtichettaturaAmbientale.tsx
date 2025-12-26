import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { Download, Info } from "lucide-react";

const EtichettaturaAmbientale = () => {
  const { isDark } = useTheme();

  const materials = [
    { code: "[Codice 1]", material: "[Materiale 1]", disposal: "[Placeholder: istruzioni smaltimento]" },
    { code: "[Codice 2]", material: "[Materiale 2]", disposal: "[Placeholder: istruzioni smaltimento]" },
    { code: "[Codice 3]", material: "[Materiale 3]", disposal: "[Placeholder: istruzioni smaltimento]" },
    { code: "[Codice 4]", material: "[Materiale 4]", disposal: "[Placeholder: istruzioni smaltimento]" },
  ];

  return (
    <PageLayout
      title="Etichettatura ambientale"
      subtitle="[Placeholder: sottotitolo sull'etichettatura ambientale degli imballaggi]"
      breadcrumbs={[
        { label: "Sostenibilità", href: "/sostenibilita" },
        { label: "Etichettatura ambientale" }
      ]}
      showCTA={false}
    >
      <div className="space-y-12">
        {/* Intro */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Informazioni sull'etichettatura
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            [Placeholder: introduzione all'etichettatura ambientale degli imballaggi.
            Spiegazione degli obblighi normativi e delle informazioni fornite
            per il corretto smaltimento dei materiali di imballaggio.]
          </p>
        </div>

        {/* Tabella materiali imballo */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Materiali di imballaggio
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? "border-white/20" : "border-black/20"}`}>
                  <th className={`py-3 px-4 text-left text-sm font-bold ${isDark ? "text-white" : "text-black"}`}>
                    Codice
                  </th>
                  <th className={`py-3 px-4 text-left text-sm font-bold ${isDark ? "text-white" : "text-black"}`}>
                    Materiale
                  </th>
                  <th className={`py-3 px-4 text-left text-sm font-bold ${isDark ? "text-white" : "text-black"}`}>
                    Smaltimento
                  </th>
                </tr>
              </thead>
              <tbody>
                {materials.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b ${isDark ? "border-white/10" : "border-black/10"}`}
                  >
                    <td className={`py-3 px-4 text-sm font-mono ${isDark ? "text-white/70" : "text-black/70"}`}>
                      {item.code}
                    </td>
                    <td className={`py-3 px-4 text-sm ${isDark ? "text-white/70" : "text-black/70"}`}>
                      {item.material}
                    </td>
                    <td className={`py-3 px-4 text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                      {item.disposal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download */}
        <div className={`p-6 border border-accent/30 bg-accent/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}>
          <div className="flex items-center gap-4">
            <Download className="w-8 h-8 text-accent" />
            <div>
              <h3 className={`font-bold ${isDark ? "text-white" : "text-black"}`}>
                Guida completa
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: scarica la guida completa all'etichettatura]
              </p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-bold uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        {/* Note normative */}
        <div className={`p-6 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                Riferimenti normativi
              </h3>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                [Placeholder: riferimenti alle normative vigenti in materia
                di etichettatura ambientale degli imballaggi. D.Lgs. 116/2020,
                Linee Guida CONAI, ecc.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EtichettaturaAmbientale;
