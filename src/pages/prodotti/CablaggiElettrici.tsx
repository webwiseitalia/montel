import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";

const CablaggiElettrici = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Sensori di livello carburante", href: "/prodotti/sensori-livello-carburante", active: location.pathname === "/prodotti/sensori-livello-carburante" },
    { label: "Cablaggi elettrici", href: "/prodotti/cablaggi-elettrici", active: location.pathname === "/prodotti/cablaggi-elettrici" },
    { label: "Quadri elettrici", href: "/prodotti/quadri-elettrici", active: location.pathname === "/prodotti/quadri-elettrici" },
    { label: "Sonde di temperatura", href: "/prodotti/sonde-temperatura", active: location.pathname === "/prodotti/sonde-temperatura" },
  ];

  return (
    <PageLayout
      title="Cablaggi elettrici"
      subtitle="Progettazione e produzione di cablaggi elettrici personalizzati con approccio co-design"
      breadcrumbs={[
        { label: "Prodotti", href: "/prodotti" },
        { label: "Cablaggi elettrici" }
      ]}
      sidebarTitle="Prodotti"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-12">
        {/* Descrizione progettazione e produzione */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Progettazione e produzione
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            I nostri cablaggi elettrici sono il risultato di un processo produttivo ad alta automazione che garantisce qualità e precisione. La produzione interna include tutte le lavorazioni principali: sguainatura, taglio, spellatura, aggraffatura e costampaggio con connettori hot-melt. Offriamo supporto tecnico completo dalla fase di concept fino all'industrializzazione del prodotto.
          </p>
        </div>

        {/* Approccio codesign */}
        <div className={`p-8 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Approccio Codesign
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            Il nostro approccio co-design prevede una stretta collaborazione con il cliente fin dalle prime fasi del progetto. Mettiamo a disposizione la nostra esperienza per ottimizzare il design del cablaggio, ridurre i costi di produzione e garantire le migliori prestazioni. Utilizziamo software dedicati per la stima dei costi e dei tempi di produzione, offrendo preventivi precisi e tempi di consegna affidabili.
          </p>
        </div>

        {/* Caratteristiche */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Caratteristiche
          </h2>
          <ul className={`space-y-3 ${isDark ? "text-white/70" : "text-black/70"}`}>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span><strong>Produzione ad alta automazione</strong> con lavorazioni complete interne</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span><strong>Costampaggio con connettori hot-melt</strong> per cablaggi resistenti e affidabili</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span><strong>Personalizzazione completa</strong> su specifiche del cliente</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
              <span><strong>Controlli qualità rigorosi</strong> su ogni prodotto prima della consegna</span>
            </li>
          </ul>
        </div>

        {/* Settori di applicazione */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Settori di applicazione
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            I nostri cablaggi elettrici sono utilizzati in molteplici settori industriali: <strong>automotive</strong> e <strong>motociclismo</strong>, <strong>elettrodomestici</strong>, <strong>condizionamento</strong>, <strong>vending machines</strong>, <strong>ferroviario</strong>, <strong>macchine agricole</strong>, <strong>alimentare</strong> e <strong>medicale</strong>. Ogni settore ha esigenze specifiche che affrontiamo con soluzioni dedicate.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default CablaggiElettrici;
