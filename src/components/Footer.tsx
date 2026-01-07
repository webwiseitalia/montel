import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import montelLogo from "@/assets/montel_logo.webp";

const Footer = () => {
  const { isDark } = useTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Azienda", href: "/azienda" },
    { label: "Prodotti", href: "/prodotti" },
    { label: "Settori", href: "/settori" },
    { label: "Qualità", href: "/qualita" },
    { label: "Servizi", href: "/servizi" },
    { label: "Case History", href: "/case-history" },
    { label: "Sostenibilità", href: "/sostenibilita" },
    { label: "Contatti", href: "/contatti" },
  ];

  const legalLinks = [
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "GDPR / Privacy", href: "/privacy" },
    { label: "Condizioni generali di acquisto", href: "/condizioni-acquisto" },
    { label: "Condizioni generali di fornitura", href: "/condizioni-fornitura" },
    { label: "Etichettatura ambientale", href: "/sostenibilita/etichettatura-ambientale" },
    { label: "Whistleblowing", href: "/whistleblowing" },
  ];

  return (
    <footer className={`relative ${isDark ? "bg-black" : "bg-neutral-100"}`}>
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Main Footer */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="group inline-block mb-6 hover:opacity-90 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img
                  src={montelLogo}
                  alt="Mont.El - Electronic Wiring Equipment"
                  title="Mont.El - Life in a Wire"
                  loading="lazy"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className={`text-sm leading-relaxed mb-6 max-w-sm ${isDark ? "text-white/50" : "text-black/50"}`}>
                Dal 1972 progettiamo e produciamo sensori di livello carburante, cablaggi elettrici, quadri elettrici e sonde di temperatura per i più esigenti settori industriali.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+39030986300"
                  className={`flex items-center gap-3 hover:text-accent transition-colors ${
                    isDark ? "text-white/50" : "text-black/50"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+39 030 986300</span>
                </a>
                <a
                  href="mailto:info@montel.it"
                  className={`flex items-center gap-3 hover:text-accent transition-colors ${
                    isDark ? "text-white/50" : "text-black/50"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@montel.it</span>
                </a>
                <div className={`flex items-center gap-3 ${isDark ? "text-white/50" : "text-black/50"}`}>
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Via Mazzini, 31/B - 25057 Sale Marasino (BS)</span>
                </div>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-2">
              <h4 className="text-primary text-xs uppercase tracking-wider font-medium mb-6">
                Navigazione
              </h4>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`group flex items-center gap-2 transition-colors ${
                      isDark
                        ? "text-white/50 hover:text-white"
                        : "text-black/50 hover:text-black"
                    }`}
                  >
                    <span className="text-sm">{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Products Column */}
            <div className="lg:col-span-3">
              <h4 className="text-primary text-xs uppercase tracking-wider font-medium mb-6">
                Prodotti
              </h4>
              <nav className="space-y-3">
                <Link
                  to="/prodotti/sensori-livello-carburante"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`group flex items-center gap-2 transition-colors ${
                    isDark
                      ? "text-white/50 hover:text-white"
                      : "text-black/50 hover:text-black"
                  }`}
                >
                  <span className="text-sm">Sensori di livello carburante</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  to="/prodotti/cablaggi-elettrici"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`group flex items-center gap-2 transition-colors ${
                    isDark
                      ? "text-white/50 hover:text-white"
                      : "text-black/50 hover:text-black"
                  }`}
                >
                  <span className="text-sm">Cablaggi elettrici</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  to="/prodotti/quadri-elettrici"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`group flex items-center gap-2 transition-colors ${
                    isDark
                      ? "text-white/50 hover:text-white"
                      : "text-black/50 hover:text-black"
                  }`}
                >
                  <span className="text-sm">Quadri elettrici</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  to="/prodotti/sonde-temperatura"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`group flex items-center gap-2 transition-colors ${
                    isDark
                      ? "text-white/50 hover:text-white"
                      : "text-black/50 hover:text-black"
                  }`}
                >
                  <span className="text-sm">Sonde di temperatura</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </nav>
            </div>

            {/* Legal Column */}
            <div className="lg:col-span-3">
              <h4 className="text-primary text-xs uppercase tracking-wider font-medium mb-6">
                Documentazione
              </h4>
              <nav className="space-y-3">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`group flex items-center gap-2 transition-colors ${
                      isDark
                        ? "text-white/50 hover:text-white"
                        : "text-black/50 hover:text-black"
                    }`}
                  >
                    <span className="text-sm">{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${isDark ? "border-white/10" : "border-black/10"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-xs ${isDark ? "text-white/30" : "text-black/30"}`}>
              © {new Date().getFullYear()} Mont.El Apparecchiature Elettroelettroniche S.r.l. - P.IVA 10695790153. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`text-xs transition-colors ${
                  isDark
                    ? "text-white/30 hover:text-white/60"
                    : "text-black/30 hover:text-black/60"
                }`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`text-xs transition-colors ${
                  isDark
                    ? "text-white/30 hover:text-white/60"
                    : "text-black/30 hover:text-black/60"
                }`}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
