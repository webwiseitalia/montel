import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import { useTheme } from "@/context/ThemeContext";

const ContactCTA = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${isDark ? "bg-neutral-950" : "bg-neutral-100"}`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
                Contattaci
              </span>
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] mb-6 ${isDark ? "text-white" : "text-black"}`}>
                HAI BISOGNO DI
                <br />
                <span className="text-accent">UNA CONSULENZA?</span>
              </h2>
              <p className={`text-lg mb-10 max-w-lg ${isDark ? "text-white/50" : "text-black/50"}`}>
                Il nostro team tecnico è a disposizione per aiutarti a scegliere
                il trasformatore più adatto alle tue esigenze.
              </p>

              {/* Contact cards - stacked */}
              <div className="space-y-4">
                <a
                  href="tel:+390307300444"
                  className={`group flex items-center gap-5 p-5 border transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:border-accent/50 hover:bg-white/8"
                      : "bg-white border-black/10 hover:border-accent/50"
                  }`}
                >
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs uppercase tracking-wider mb-1 ${isDark ? "text-white/40" : "text-black/40"}`}>
                      Telefono
                    </div>
                    <div className={`font-semibold text-lg group-hover:text-accent transition-colors ${isDark ? "text-white" : "text-black"}`}>
                      +39 030 7300444
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 group-hover:text-accent group-hover:translate-x-1 transition-all ${isDark ? "text-white/20" : "text-black/20"}`} />
                </a>

                <a
                  href="mailto:info@abtrasformatori.it"
                  className={`group flex items-center gap-5 p-5 border transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:border-accent/50 hover:bg-white/8"
                      : "bg-white border-black/10 hover:border-accent/50"
                  }`}
                >
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs uppercase tracking-wider mb-1 ${isDark ? "text-white/40" : "text-black/40"}`}>
                      Email
                    </div>
                    <div className={`font-semibold text-lg group-hover:text-accent transition-colors ${isDark ? "text-white" : "text-black"}`}>
                      info@abtrasformatori.it
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 group-hover:text-accent group-hover:translate-x-1 transition-all ${isDark ? "text-white/20" : "text-black/20"}`} />
                </a>

                <div className={`flex items-center gap-5 p-5 border ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-black/10"
                }`}>
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs uppercase tracking-wider mb-1 ${isDark ? "text-white/40" : "text-black/40"}`}>
                      Sede Principale
                    </div>
                    <div className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>
                      Palazzolo S/O (BS), Italia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative">
              {/* Accent corner decorations */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-accent" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-accent" />

              <div className={`backdrop-blur-sm border p-8 lg:p-10 ${
                isDark
                  ? "bg-neutral-900/80 border-white/10"
                  : "bg-white border-black/10 shadow-lg"
              }`}>
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                    Richiedi un preventivo
                  </h3>
                  <p className={`text-sm ${isDark ? "text-white/40" : "text-black/40"}`}>
                    Compila il form e ti risponderemo entro 24 ore
                  </p>
                </div>
                <ContactForm variant={isDark ? "dark" : "light"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
