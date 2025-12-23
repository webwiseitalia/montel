import { Award, Shield, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const CertificationsSection = () => {
  const { isDark } = useTheme();

  const certifications = [
    {
      icon: Award,
      code: "UL5085",
      title: "Certificazione USA/Canada",
      description: "cURus - File E364320. Standard di sicurezza per trasformatori nel mercato nordamericano.",
    },
    {
      icon: Shield,
      code: "ENEC05",
      title: "Certificazione Europea",
      description: "Marchio di conformità europeo per apparecchiature elettriche di alta qualità.",
    },
    {
      icon: Globe,
      code: "EAC",
      title: "Eurasian Conformity",
      description: "Certificazione per Russia, Bielorussia, Kazakistan, Armenia e Kirghizistan.",
    },
  ];

  const standards = [
    "EN 61558",
    "CSA C22.2",
    "IEC 61558",
    "Direttiva 2014/35/UE",
  ];

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${isDark ? "bg-neutral-900" : "bg-neutral-100"}`}>
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-1/2 h-full opacity-5 ${isDark ? "text-white" : "text-black"}`}>
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-accent to-transparent" />
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Qualità Certificata
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-accent to-transparent" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4 ${isDark ? "text-white" : "text-black"}`}>
            LE NOSTRE <span className="text-accent">CERTIFICAZIONI</span>
          </h2>
          <p className={`text-center max-w-2xl mx-auto ${isDark ? "text-white/50" : "text-black/50"}`}>
            Garanzia di qualità e sicurezza riconosciuta a livello internazionale
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative p-8 border transition-all duration-500 ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-accent/50"
                  : "bg-white border-black/10 hover:border-accent/50"
              }`}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex items-start justify-between mb-6">
                <cert.icon className="w-10 h-10 text-accent" />
                <span className={`text-3xl font-black transition-colors ${
                  isDark
                    ? "text-white/20 group-hover:text-accent/30"
                    : "text-black/20 group-hover:text-accent/30"
                }`}>
                  {cert.code}
                </span>
              </div>

              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>
                {cert.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-white/50" : "text-black/50"}`}>
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Standards bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <span className={`text-sm uppercase tracking-wider ${isDark ? "text-white/40" : "text-black/40"}`}>
            Normative:
          </span>
          {standards.map((standard, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 border ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-black/10"
              }`}
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className={`text-sm ${isDark ? "text-white/70" : "text-black/70"}`}>{standard}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/certificati"
            className={`inline-flex items-center gap-3 transition-colors group ${
              isDark ? "text-accent hover:text-white" : "text-accent hover:text-black"
            }`}
          >
            <span className="text-sm uppercase tracking-wider font-medium">
              Scopri tutte le certificazioni
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
