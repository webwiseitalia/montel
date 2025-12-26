import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ArrowRight, PenTool, Factory } from "lucide-react";

const Servizi = () => {
  const { isDark } = useTheme();

  const services = [
    {
      icon: PenTool,
      title: "Progettazione",
      description: "Supporto tecnico completo dalla fase di concept all'industrializzazione. Progettazione cablaggi elettrici per elettrodomestico, condizionamento, automotive, ferroviario, macchine agricole e alimentare.",
      href: "/servizi/progettazione",
    },
    {
      icon: Factory,
      title: "Produzione",
      description: "Produzione interna ad alta automazione con lavorazioni complete: sguainatura, taglio, spellatura, aggraffatura, costampaggio con connettori hot-melt. Know-how interno per sonde livello carburante.",
      href: "/servizi/produzione",
    },
  ];

  return (
    <PageLayout
      title="Servizi"
      subtitle="Dalla progettazione alla produzione: un partner completo per le tue esigenze"
      breadcrumbs={[{ label: "Servizi" }]}
      showCTA={true}
    >
      <div className="space-y-12">
        {/* Intro */}
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            Offriamo un servizio integrato che accompagna il cliente dalla fase iniziale di progettazione fino alla produzione in serie. Il nostro approccio co-design permette di ottimizzare il prodotto fin dalle prime fasi, riducendo costi e tempi di sviluppo. La produzione ad alta automazione garantisce qualità costante e tempi di consegna affidabili.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.href}
              to={service.href}
              className={`group p-8 border transition-all hover:border-primary ${
                isDark
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-black/5 border-black/10 hover:bg-black/10"
              }`}
            >
              <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                {service.title}
              </h2>
              <p className={`mb-6 ${isDark ? "text-white/60" : "text-black/60"}`}>
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                Scopri di più
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Servizi;
