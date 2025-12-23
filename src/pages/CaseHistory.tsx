import PageLayout from "@/components/PageLayout";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import images
import sensoriCase from "@/assets/montel/imgi_4_sensori_di_livello_thumb_case.webp";
import cablaggiCase from "@/assets/montel/imgi_5_cablaggi_elettrici_thumb_case.webp";
import quadriCase from "@/assets/montel/imgi_6_quadri_elettrici_thumb_case.webp";

const CaseHistory = () => {
  const { isDark } = useTheme();

  const categories = [
    {
      image: sensoriCase,
      title: "Sensori di livello carburante",
      description: "Applicazioni nel settore automotive, motociclistico e industriale con sensori resistivi personalizzati.",
      href: "/case-history/sensori-livello-carburante",
      cases: 1,
    },
    {
      image: cablaggiCase,
      title: "Cablaggi elettrici",
      description: "Soluzioni per auto, moto, condizionamento, vending machines e apparecchi elettromedicali.",
      href: "/case-history/cablaggi-elettrici",
      cases: 5,
    },
    {
      image: quadriCase,
      title: "Quadri elettrici",
      description: "Quadri elettrici industriali realizzati su misura per applicazioni specifiche.",
      href: "/case-history/quadri-elettrici",
      cases: 1,
    },
  ];

  return (
    <PageLayout
      title="Case History"
      subtitle="Progetti reali, soluzioni concrete: scopri le nostre realizzazioni"
      breadcrumbs={[{ label: "Case History" }]}
      showCTA={true}
    >
      <div className="space-y-12">
        {/* Intro */}
        <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
          <p className={`text-lg ${isDark ? "text-white/70" : "text-black/70"}`}>
            Le nostre case history raccontano progetti concreti realizzati per clienti in diversi settori industriali. Ogni progetto rappresenta una sfida affrontata con competenza e innovazione, dimostrando la nostra capacità di sviluppare soluzioni personalizzate che rispondono alle esigenze più specifiche.
          </p>
        </div>

        {/* Categories Grid with Images */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.href}
              to={category.href}
              className={`group overflow-hidden border transition-all hover:border-primary ${
                isDark
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-black/5 border-black/10 hover:bg-black/10"
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  title={`Mont.El Case History - ${category.title}`}
                  loading="lazy"
                  width={640}
                  height={360}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                  {category.title}
                </h2>
                <p className={`text-sm mb-4 ${isDark ? "text-white/60" : "text-black/60"}`}>
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${isDark ? "text-white/40" : "text-black/40"}`}>
                    {category.cases} {category.cases === 1 ? "case history" : "case histories"}
                  </span>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                    Esplora
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseHistory;
