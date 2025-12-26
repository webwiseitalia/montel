import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";

const PuntiDiForza = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  const sidebarLinks = [
    { label: "Punti di forza e mission", href: "/azienda/punti-di-forza", active: location.pathname === "/azienda/punti-di-forza" },
    { label: "Il Network", href: "/azienda/network", active: location.pathname === "/azienda/network" },
  ];

  return (
    <PageLayout
      title="Punti di forza e mission"
      subtitle="I valori che guidano la nostra eccellenza produttiva dal 1972"
      breadcrumbs={[
        { label: "Azienda", href: "/azienda" },
        { label: "Punti di forza e mission" }
      ]}
      sidebarTitle="Azienda"
      sidebarLinks={sidebarLinks}
    >
      <div className="space-y-8">
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            La nostra mission
          </h2>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            La nostra missione è progettare e produrre soluzioni elettriche ed elettroniche di alta qualità, accompagnando i clienti dalla fase di concept fino all'industrializzazione. Operiamo con un approccio di co-design, mettendo a disposizione competenze tecniche, flessibilità produttiva e un sistema qualità conforme agli standard internazionali.
          </p>
        </div>

        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            I nostri punti di forza
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            Ciò che ci distingue nel mercato:
          </p>
          <ul className={`list-disc pl-6 space-y-2 ${isDark ? "text-white/70" : "text-black/70"}`}>
            <li><strong>Oltre 50 anni di esperienza</strong> nella produzione di componenti elettrici ed elettronici</li>
            <li><strong>Know-how interno</strong> per sensori di livello carburante con brevetti industriali registrati</li>
            <li><strong>Produzione ad alta automazione</strong> con lavorazioni complete: sguainatura, taglio, spellatura, aggraffatura, costampaggio</li>
            <li><strong>Approccio co-design</strong> con supporto tecnico dalla progettazione all'industrializzazione</li>
            <li><strong>Network industriale integrato</strong> con strutture produttive in Italia e Romania</li>
            <li><strong>Sistema qualità certificato</strong> con controlli e test su tutti i prodotti</li>
          </ul>
        </div>

        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            I nostri valori
          </h2>
          <p className={`${isDark ? "text-white/70" : "text-black/70"}`}>
            <strong>Qualità:</strong> ogni prodotto viene sottoposto a controlli rigorosi prima della consegna.<br />
            <strong>Innovazione:</strong> brevetti industriali e tecnologie all'avanguardia per soluzioni sempre più performanti.<br />
            <strong>Affidabilità:</strong> partner di fiducia per i settori più esigenti come automotive, aeronautica e medicale.<br />
            <strong>Flessibilità:</strong> capacità di adattarci alle specifiche esigenze di ogni cliente.<br />
            <strong>Sostenibilità:</strong> impegno costante nel miglioramento continuo e nella responsabilità ambientale.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PuntiDiForza;
