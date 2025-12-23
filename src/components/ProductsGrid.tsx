import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

// Import product images
import imgMonofase from "@/assets/prodotti/imgi_5_Trasformatori-MONOFASE-AB-trasformatori-Italy.jpg";
import imgTrifase from "@/assets/prodotti/imgi_6_Trasformatori-TRIFASE-AB-trasformatori-Italy.jpg";
import imgMedicali from "@/assets/prodotti/imgi_9_Trasformatori-MEDICALI-AB-trasformatori-Italy.jpg";
import imgAutotrasformatori from "@/assets/prodotti/imgi_8_Autotrasformatori-MONOFASE-E-TRIFASE-AB-trasformatori-Italy.jpg";
import imgPiscine from "@/assets/prodotti/imgi_48_TLUX-AB-trasformatori-Italy-2.jpg";
import imgAltre from "@/assets/prodotti/imgi_10_Altre-produzioni-AB-trasformatori-Italy.jpg";

const ProductsGrid = () => {
  const { isDark } = useTheme();

  const products = [
    { image: imgMonofase, label: "Trasformatori monofase", href: "/prodotti#monofase" },
    { image: imgTrifase, label: "Trasformatori trifase", href: "/prodotti#trifase" },
    { image: imgMedicali, label: "Trasformatori medicali", href: "/prodotti#medicali" },
    { image: imgAutotrasformatori, label: "Autotrasformatori", href: "/prodotti#autotrasformatori" },
    { image: imgPiscine, label: "Trasformatori per piscine", href: "/prodotti#piscine" },
    { image: imgAltre, label: "Altre produzioni", href: "/prodotti" },
  ];

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${isDark ? "bg-black" : "bg-neutral-50"}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? "white" : "black"} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-accent to-transparent" />
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Catalogo
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-accent to-transparent" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-center ${isDark ? "text-white" : "text-black"}`}>
            I NOSTRI <span className="text-accent">PRODOTTI</span>
          </h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index}>
              <Link
                to={product.href}
                className={`group relative block overflow-hidden border transition-all duration-300 ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:border-accent/50"
                    : "bg-white border-black/10 hover:border-accent/50 shadow-sm"
                }`}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                      {product.label}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>

                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/prodotti"
            className={`inline-flex items-center gap-3 hover:text-accent transition-colors group ${
              isDark ? "text-white/60" : "text-black/60"
            }`}
          >
            <span className="text-sm uppercase tracking-wider">
              Visualizza tutto il catalogo
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
