import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import abLogo from "@/assets/ablogo.png";
import abLogoNero from "@/assets/ablogonero.png";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/prodotti", label: "Prodotti" },
    { href: "/azienda", label: "Azienda" },
    { href: "/certificati", label: "Certificati" },
    { href: "/guida-tecnica", label: "Guida Tecnica" },
    { href: "/contatti", label: "Contatti" },
  ];

  // Always show solid background except on homepage when not scrolled
  const isHomepage = location.pathname === "/";
  const showSolidBg = isScrolled || !isHomepage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolidBg
          ? isDark
            ? "bg-black/95 backdrop-blur-md border-b border-white/10"
            : "bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm"
          : isDark
            ? "bg-black/50 backdrop-blur-sm"
            : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      {/* Tech line accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative hover:scale-105 transition-transform">
              <img
                src={isDark ? abLogo : abLogoNero}
                alt="AB Trasformatori Logo"
                className="h-10 w-auto -ml-[30px]"
              />
              <div className="absolute -inset-1 bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative px-4 py-2 group"
                >
                  <span className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                    isActive
                      ? "text-accent"
                      : isDark
                        ? "text-white/70 group-hover:text-white"
                        : "text-black/70 group-hover:text-black"
                  }`}>
                    {link.label}
                  </span>
                  {/* Hover line */}
                  <div
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-accent transition-transform origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side: Theme Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 border transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDark
                  ? "border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5"
                  : "border-black/20 text-black/70 hover:text-black hover:border-black/40 hover:bg-black/5"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA Button */}
            <div className="hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <Link
                to="/contatti"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold text-sm uppercase tracking-wider overflow-hidden group"
              >
                <span className="relative z-10">Richiedi Preventivo</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 transition-colors active:scale-95 ${
                isDark ? "text-white/70" : "text-black/70"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 relative active:scale-95 transition-transform ${isDark ? "text-white" : "text-black"}`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden overflow-hidden border-t ${
              isDark ? "border-white/10" : "border-black/10"
            }`}
          >
            <nav className="flex flex-col py-6 gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <div key={link.href}>
                    <Link
                      to={link.href}
                      className={`block py-3 px-4 text-lg uppercase tracking-wider font-medium transition-colors ${
                        isActive
                          ? "text-accent bg-accent/10 border-l-2 border-accent"
                          : isDark
                            ? "text-white/70 hover:text-white hover:bg-white/5"
                            : "text-black/70 hover:text-black hover:bg-black/5"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              })}
              <div className="mt-4 px-4">
                <Link
                  to="/contatti"
                  className="block w-full py-4 bg-accent text-white font-bold text-center uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Richiedi Preventivo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
