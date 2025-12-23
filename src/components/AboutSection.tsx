import { ArrowRight, Clock, Users, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const AboutSection = () => {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: Clock,
      value: "1975",
      label: "Anno di fondazione",
    },
    {
      icon: Zap,
      value: "48h",
      label: "Tempo di consegna",
    },
    {
      icon: Users,
      value: "100%",
      label: "Made in Italy",
    },
    {
      icon: Target,
      value: "Custom",
      label: "Su misura",
    },
  ];

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${isDark ? "bg-black" : "bg-white"}`}>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(240, 63, 66, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(240, 63, 66, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
              Chi Siamo
            </span>
            <h2 className={`text-4xl sm:text-5xl font-black leading-[0.95] mb-6 ${isDark ? "text-white" : "text-black"}`}>
              ESPERIENZA
              <br />
              <span className="text-accent">DAL 1975</span>
            </h2>
            <div className={`space-y-4 leading-relaxed mb-8 ${isDark ? "text-white/60" : "text-black/60"}`}>
              <p>
                Nata nel 1975 come <span className={isDark ? "text-white" : "text-black"}>Angelo Bertossi Trasformatori</span>,
                oggi AB Trasformatori srl è un'azienda leader nella produzione di
                trasformatori elettrici monofase e trifase.
              </p>
              <p>
                La nostra esperienza pluridecennale ci permette di offrire prodotti
                di altissima qualità, progettati secondo le più rigorose normative
                europee e internazionali.
              </p>
              <p>
                Siamo specializzati nella <span className={isDark ? "text-white" : "text-black"}>produzione su misura</span>:
                in soli 2 giorni lavorativi possiamo progettare, costruire e
                consegnare un trasformatore completamente personalizzato.
              </p>
            </div>
            <Link
              to="/azienda"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white font-bold uppercase tracking-wider hover:bg-accent/90 transition-colors group"
            >
              Scopri la nostra storia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right - Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`group relative p-6 border transition-all duration-300 ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:border-accent/50"
                    : "bg-neutral-50 border-black/10 hover:border-accent/50"
                }`}
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/50 group-hover:border-accent transition-colors" />

                <item.icon className="w-8 h-8 text-accent mb-4" />
                <div className={`text-3xl lg:text-4xl font-black mb-1 ${isDark ? "text-white" : "text-black"}`}>
                  {item.value}
                </div>
                <div className={`text-sm uppercase tracking-wider ${isDark ? "text-white/40" : "text-black/40"}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
