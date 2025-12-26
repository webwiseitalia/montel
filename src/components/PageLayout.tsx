import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface SidebarLink {
  label: string;
  href: string;
  active?: boolean;
}

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  sidebarTitle?: string;
  sidebarLinks?: SidebarLink[];
  showCTA?: boolean;
}

const PageLayout = ({
  children,
  title,
  subtitle,
  breadcrumbs,
  sidebarTitle,
  sidebarLinks,
  showCTA = true,
}: PageLayoutProps) => {
  const { isDark } = useTheme();
  const hasSidebar = sidebarLinks && sidebarLinks.length > 0;

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      <Header />
      <main className="pt-24 lg:pt-28">
        {/* Hero Section */}
        <section className={`py-12 lg:py-16 ${isDark ? "bg-white/5" : "bg-black/5"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav className="flex items-center gap-2 text-sm mb-6">
                <Link to="/" className={`hover:text-accent transition-colors ${isDark ? "text-white/50" : "text-black/50"}`}>
                  Home
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <ChevronRight className={`w-4 h-4 ${isDark ? "text-white/30" : "text-black/30"}`} />
                    {crumb.href ? (
                      <Link to={crumb.href} className={`hover:text-accent transition-colors ${isDark ? "text-white/50" : "text-black/50"}`}>
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isDark ? "text-white/70" : "text-black/70"}>{crumb.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? "text-white" : "text-black"}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`text-lg mt-4 max-w-3xl ${isDark ? "text-white/70" : "text-black/70"}`}>
                {subtitle}
              </p>
            )}
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${hasSidebar ? "lg:grid lg:grid-cols-12 lg:gap-12" : ""}`}>
              {/* Sidebar */}
              {hasSidebar && (
                <aside className="lg:col-span-3 mb-8 lg:mb-0">
                  {sidebarTitle && (
                    <h3 className={`text-sm uppercase tracking-wider font-medium mb-4 ${isDark ? "text-white/50" : "text-black/50"}`}>
                      {sidebarTitle}
                    </h3>
                  )}
                  <nav className={`border-l ${isDark ? "border-white/10" : "border-black/10"}`}>
                    {sidebarLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block py-2 pl-4 border-l-2 -ml-px transition-colors ${
                          link.active
                            ? "border-primary text-primary"
                            : isDark
                              ? "border-transparent text-white/60 hover:text-white hover:border-white/30"
                              : "border-transparent text-black/60 hover:text-black hover:border-black/30"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </aside>
              )}

              {/* Main Content */}
              <div className={hasSidebar ? "lg:col-span-9" : ""}>
                {children}

                {/* CTA */}
                {showCTA && (
                  <div className={`mt-12 pt-12 border-t ${isDark ? "border-white/10" : "border-black/10"}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className={isDark ? "text-white/70" : "text-black/70"}>
                        Hai bisogno di maggiori informazioni?
                      </p>
                      <Link
                        to="/contatti"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors"
                      >
                        Richiedi informazioni
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
