import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe, ArrowUpRight, Printer, FileDown } from "lucide-react";
import abLogo from "@/assets/ablogo.png";
import abLogoNero from "@/assets/ablogonero.png";
import catalogoPdf from "@/assets/catalogo-ITA-2018.04-AB-trasformatori-Italy-ver5.pdf";
import MapSection from "./MapSection";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  const navLinks = [
    { label: "Prodotti", href: "/prodotti" },
    { label: "Azienda", href: "/azienda" },
    { label: "Certificati", href: "/certificati" },
    { label: "Guida Tecnica", href: "/guida-tecnica" },
    { label: "Contatti", href: "/contatti" },
    { label: "Indice", href: "/indice" },
  ];

  return (
    <>
      {/* Map Section */}
      <MapSection />

      <footer className={`relative ${isDark ? "bg-black" : "bg-neutral-100"}`}>
        {/* Top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* Main Footer */}
        <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="group inline-block mb-6">
                <img
                  src={isDark ? abLogo : abLogoNero}
                  alt="AB Trasformatori Logo"
                  className="h-12 w-auto -ml-[30px]"
                />
              </Link>
              <p className={`text-sm leading-relaxed mb-6 max-w-sm ${isDark ? "text-white/50" : "text-black/50"}`}>
                Produzione trasformatori elettromeccanici ed elettrici dal 1975.
                Azienda certificata UL5085, ENEC05, EAC.
              </p>
              {/* Certifications badges */}
              <div className="flex gap-3 mb-6">
                {["UL5085", "ENEC05", "EAC"].map((cert) => (
                  <span
                    key={cert}
                    className={`px-3 py-1 border text-xs font-medium ${
                      isDark
                        ? "bg-white/5 border-white/10 text-white/60"
                        : "bg-black/5 border-black/10 text-black/60"
                    }`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
              {/* Download Catalogo */}
              <a
                href={catalogoPdf}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 border text-sm font-medium transition-colors hover:border-accent hover:text-accent ${
                  isDark
                    ? "border-white/20 text-white/70"
                    : "border-black/20 text-black/70"
                }`}
              >
                <FileDown className="w-4 h-4" />
                Scarica Catalogo PDF
              </a>
            </div>

            {/* Links Column */}
            <div className="lg:col-span-2">
              <h4 className="text-accent text-xs uppercase tracking-wider font-medium mb-6">
                Navigazione
              </h4>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
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

            {/* Italy Office */}
            <div className="lg:col-span-3">
              <h4 className="text-accent text-xs uppercase tracking-wider font-medium mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Sede Italia
              </h4>
              <address className={`not-italic text-sm space-y-2 ${isDark ? "text-white/50" : "text-black/50"}`}>
                <p className={isDark ? "text-white/70" : "text-black/70"}>Via Piantada, 6</p>
                <p>25036 Palazzolo S/O (BS)</p>
                <p className={`pt-3 text-xs ${isDark ? "text-white/40" : "text-black/40"}`}>P.I. e C.F. 02511620987</p>
              </address>
              <div className="mt-6 space-y-2">
                <a
                  href="tel:+390307300444"
                  className={`flex items-center gap-3 hover:text-accent transition-colors ${
                    isDark ? "text-white/50" : "text-black/50"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+39 030 7300444</span>
                </a>
                <div className={`flex items-center gap-3 ${isDark ? "text-white/50" : "text-black/50"}`}>
                  <Printer className="w-4 h-4" />
                  <span className="text-sm">+39 030 7400902</span>
                </div>
                <a
                  href="mailto:info@abtrasformatori.it"
                  className={`flex items-center gap-3 hover:text-accent transition-colors ${
                    isDark ? "text-white/50" : "text-black/50"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@abtrasformatori.it</span>
                </a>
              </div>
            </div>

            {/* UAE Office */}
            <div className="lg:col-span-3">
              <h4 className="text-accent text-xs uppercase tracking-wider font-medium mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Emirati Arabi
              </h4>
              <address className={`not-italic text-sm space-y-4 ${isDark ? "text-white/50" : "text-black/50"}`}>
                <div>
                  <p className={`font-medium ${isDark ? "text-white/70" : "text-black/70"}`}>Dubai</p>
                  <p className="text-xs">48 Burj Gate, 10th Floor, room #1001</p>
                  <p className="text-xs">Downtown</p>
                </div>
                <div>
                  <p className={`font-medium ${isDark ? "text-white/70" : "text-black/70"}`}>Abu Dhabi</p>
                  <p className="text-xs">7th Floor – CI Tower – Khalidiya Area</p>
                </div>
              </address>
              <div className="mt-6">
                <a
                  href="tel:+97143216260"
                  className={`flex items-center gap-3 hover:text-accent transition-colors ${
                    isDark ? "text-white/50" : "text-black/50"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+971 4 321 62 60</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${isDark ? "border-white/10" : "border-black/10"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-xs ${isDark ? "text-white/30" : "text-black/30"}`}>
              © {new Date().getFullYear()} AB Trasformatori srl. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className={`text-xs transition-colors ${
                  isDark
                    ? "text-white/30 hover:text-white/60"
                    : "text-black/30 hover:text-black/60"
                }`}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={`text-xs transition-colors ${
                  isDark
                    ? "text-white/30 hover:text-white/60"
                    : "text-black/30 hover:text-black/60"
                }`}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
