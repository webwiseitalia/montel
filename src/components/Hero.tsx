import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();
  const stats = [
    { number: "1975", label: "Anno di fondazione" },
    { number: "40+", label: "Anni di esperienza" },
    { number: "48h", label: "Consegna rapida" },
  ];

  const certifications = [
    { icon: Award, label: "UL5085" },
    { icon: Shield, label: "ENEC05" },
    { icon: Zap, label: "EAC" },
  ];

  return (
    <section className={`relative min-h-screen overflow-hidden ${isDark ? "bg-black" : "bg-white"}`}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(240, 63, 66, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(240, 63, 66, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Trasformatori dal 1975
              </span>
            </div>

            {/* Main heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] mb-6 ${isDark ? "text-white" : "text-black"}`}>
              PRODUZIONE
              <br />
              <span className="text-accent">TRASFORMATORI</span>
              <br />
              <span className={isDark ? "text-white/60" : "text-black/60"}>ELETTRICI</span>
            </h1>

            {/* Description */}
            <p className={`text-lg lg:text-xl max-w-lg mb-8 leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}>
              Progettazione e produzione di trasformatori monofase e trifase
              su misura. Qualità certificata, consegna in 48 ore.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/prodotti"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white font-bold uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                Scopri i Prodotti
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contatti"
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 border-2 font-bold uppercase tracking-wider transition-all ${
                  isDark
                    ? "border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                    : "border-black/20 text-black hover:bg-black/5 hover:border-black/40"
                }`}
              >
                Contattaci
              </Link>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <span className={`text-sm uppercase tracking-wider ${isDark ? "text-white/40" : "text-black/40"}`}>
                Certificazioni:
              </span>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-3 py-1.5 border ${
                      isDark
                        ? "bg-white/5 border-white/10"
                        : "bg-black/5 border-black/10"
                    }`}
                  >
                    <cert.icon className="w-4 h-4 text-accent" />
                    <span className={`text-sm font-medium ${isDark ? "text-white" : "text-black"}`}>
                      {cert.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="relative">
            {/* Tech frame */}
            <div className={`relative p-8 lg:p-12 border backdrop-blur-sm ${
              isDark
                ? "border-white/10 bg-white/5"
                : "border-black/10 bg-black/5"
            }`}>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent" />

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-black text-accent mb-1">
                      {stat.number}
                    </div>
                    <div className={`text-xs uppercase tracking-wider ${isDark ? "text-white/50" : "text-black/50"}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Product types list */}
              <div className="space-y-3">
                {[
                  "Trasformatori monofase di isolamento",
                  "Trasformatori di sicurezza",
                  "Trasformatori per settore medicale",
                  "Autotrasformatori monofase e trifase",
                  "Trasformatori classe IP65 / IP68",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 ${isDark ? "text-white/70" : "text-black/70"}`}
                  >
                    <div className="w-1.5 h-1.5 bg-accent" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 border border-accent/30 flex items-center justify-center animate-bounce">
              <Zap className="w-10 h-10 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tech line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
};

export default Hero;
