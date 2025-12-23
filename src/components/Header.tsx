import { useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import montelLogo from "@/assets/montel_logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<"IT" | "EN">("IT");
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/azienda", label: "Azienda", submenu: [
      { href: "/azienda/punti-di-forza", label: "Punti di forza e mission" },
      { href: "/azienda/network", label: "Il Network" },
    ]},
    { href: "/prodotti", label: "Prodotti", submenu: [
      { href: "/prodotti/sensori-livello-carburante", label: "Sensori di livello carburante" },
      { href: "/prodotti/cablaggi-elettrici", label: "Cablaggi elettrici" },
      { href: "/prodotti/quadri-elettrici", label: "Quadri elettrici" },
      { href: "/prodotti/sonde-temperatura", label: "Sonde di temperatura" },
    ]},
    { href: "/settori", label: "Settori di applicazione" },
    { href: "/qualita", label: "Qualità", submenu: [
      { href: "/qualita/codesign", label: "Codesign" },
      { href: "/qualita/tecnologia", label: "Tecnologia" },
      { href: "/qualita/certificazioni", label: "Certificazioni" },
      { href: "/qualita/brevetti", label: "Brevetti" },
      { href: "/qualita/riconoscimenti", label: "Riconoscimenti" },
    ]},
    { href: "/servizi", label: "Servizi", submenu: [
      { href: "/servizi/progettazione", label: "Progettazione" },
      { href: "/servizi/produzione", label: "Produzione" },
    ]},
    { href: "/case-history", label: "Case history", submenu: [
      { href: "/case-history/sensori-livello-carburante", label: "Sensori di livello carburante" },
      { href: "/case-history/cablaggi-elettrici", label: "Cablaggi elettrici" },
      { href: "/case-history/quadri-elettrici", label: "Quadri elettrici" },
    ]},
    { href: "/sostenibilita", label: "Sostenibilità" },
    { href: "/contatti", label: "Contatti" },
  ];

  const isHomepage = location.pathname === "/";
  const showSolidBg = isScrolled || !isHomepage;

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolidBg
          ? isDark
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-lg shadow-black/5"
          : isDark
            ? "bg-black/30 backdrop-blur-md"
            : "bg-white/30 backdrop-blur-md"
      }`}
    >
      {/* Tech accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 transition-all hover:scale-[1.02]">
            <img
              src={montelLogo}
              alt="Mont.El - Electronic Wiring Equipment"
              title="Mont.El - Life in a Wire"
              width={120}
              height={48}
              className="h-10 lg:h-12 w-auto transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href ||
                (link.submenu && link.submenu.some(sub => location.pathname === sub.href));

              return (
                <div key={link.href} className="relative group">
                  <Link
                    to={link.href}
                    className="relative px-4 py-3 flex items-center gap-1.5"
                  >
                    <span className={`text-sm uppercase tracking-wide font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : isDark
                          ? "text-white/70 group-hover:text-white"
                          : "text-black/70 group-hover:text-black"
                    }`}>
                      {link.label}
                    </span>
                    {link.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform group-hover:rotate-180 ${
                        isDark ? "text-white/50" : "text-black/50"
                      }`} />
                    )}
                    <div
                      className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary transition-transform origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>

                  {/* Desktop Submenu */}
                  {link.submenu && (
                    <div className={`absolute top-full left-0 min-w-[260px] py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 ${
                      isDark
                        ? "bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
                        : "bg-white/95 backdrop-blur-xl border border-black/5 shadow-2xl shadow-black/10"
                    }`}>
                      {/* Submenu accent */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent" />
                      {link.submenu.map((sub, subIndex) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className={`group/sub relative block px-5 py-2.5 text-sm transition-all ${
                            location.pathname === sub.href
                              ? "text-primary bg-primary/10"
                              : isDark
                                ? "text-white/70 hover:text-white hover:bg-white/5 hover:pl-7"
                                : "text-black/70 hover:text-black hover:bg-black/5 hover:pl-7"
                          }`}
                          style={{ transitionDelay: `${subIndex * 30}ms` }}
                        >
                          <span className="absolute left-2 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-primary transition-all group-hover/sub:w-2" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <Globe className={`w-4 h-4 ${isDark ? "text-white/50" : "text-black/50"}`} />
              <button
                onClick={() => setCurrentLang("IT")}
                className={`px-2 py-1 text-xs font-medium transition-colors ${
                  currentLang === "IT"
                    ? "text-primary"
                    : isDark
                      ? "text-white/50 hover:text-white"
                      : "text-black/50 hover:text-black"
                }`}
              >
                IT
              </button>
              <span className={isDark ? "text-white/30" : "text-black/30"}>/</span>
              <button
                onClick={() => setCurrentLang("EN")}
                className={`px-2 py-1 text-xs font-medium transition-colors ${
                  currentLang === "EN"
                    ? "text-primary"
                    : isDark
                      ? "text-white/50 hover:text-white"
                      : "text-black/50 hover:text-black"
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <div className="hover:scale-[1.03] active:scale-[0.97] transition-transform">
              <Link
                to="/contatti"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold text-xs uppercase tracking-wider overflow-hidden group shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all"
              >
                <span className="relative z-10">Richiedi informazioni</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 relative active:scale-90 transition-all rounded-lg ${
                isDark
                  ? "text-white hover:bg-white/10"
                  : "text-black hover:bg-black/5"
              } ${isMobileMenuOpen ? "bg-primary/10" : ""}`}
              aria-label="Menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-3 rotate-45" : "top-1.5"
                }`} />
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`} />
                <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-3 -rotate-45" : "top-[18px]"
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden overflow-hidden border-t max-h-[70vh] overflow-y-auto transition-all duration-500 ${
            isDark ? "border-white/10" : "border-black/10"
          } ${isMobileMenuOpen ? "opacity-100" : "opacity-0 max-h-0"}`}
          style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
        >
          <nav className="flex flex-col py-4 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const hasSubmenu = link.submenu && link.submenu.length > 0;
                const isSubmenuOpen = openSubmenu === link.label;

                return (
                  <div key={link.href}>
                    <div className="flex items-center">
                      <Link
                        to={link.href}
                        className={`flex-1 py-3 px-4 text-sm uppercase tracking-wider font-medium transition-colors ${
                          isActive
                            ? "text-primary bg-primary/10 border-l-2 border-primary"
                            : isDark
                              ? "text-white/70 hover:text-white hover:bg-white/5"
                              : "text-black/70 hover:text-black hover:bg-black/5"
                        }`}
                        onClick={() => !hasSubmenu && setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                      {hasSubmenu && (
                        <button
                          onClick={() => toggleSubmenu(link.label)}
                          className={`p-3 ${isDark ? "text-white/50" : "text-black/50"}`}
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {hasSubmenu && isSubmenuOpen && (
                      <div className={`pl-4 ${isDark ? "bg-white/5" : "bg-black/5"}`}>
                        {link.submenu!.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className={`block py-2.5 px-4 text-sm transition-colors ${
                              location.pathname === sub.href
                                ? "text-primary"
                                : isDark
                                  ? "text-white/60 hover:text-white"
                                  : "text-black/60 hover:text-black"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Language Selector */}
              <div className={`flex items-center gap-2 px-4 py-3 mt-2 border-t ${isDark ? "border-white/10" : "border-black/10"}`}>
                <Globe className={`w-4 h-4 ${isDark ? "text-white/50" : "text-black/50"}`} />
                <button
                  onClick={() => setCurrentLang("IT")}
                  className={`px-3 py-1 text-sm font-medium ${
                    currentLang === "IT"
                      ? "text-primary bg-primary/10"
                      : isDark
                        ? "text-white/50"
                        : "text-black/50"
                  }`}
                >
                  IT
                </button>
                <button
                  onClick={() => setCurrentLang("EN")}
                  className={`px-3 py-1 text-sm font-medium ${
                    currentLang === "EN"
                      ? "text-primary bg-primary/10"
                      : isDark
                        ? "text-white/50"
                        : "text-black/50"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Mobile CTA */}
              <div className="mt-2 px-4 pb-2">
                <Link
                  to="/contatti"
                  className="relative block w-full py-3.5 bg-accent text-white font-bold text-center uppercase tracking-wider text-sm overflow-hidden group shadow-lg shadow-accent/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Richiedi informazioni</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Link>
              </div>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
