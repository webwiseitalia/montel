import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "@/context/ThemeContext";

// Import category images
import imgUsoGenerale from "@/assets/trasformatori-monofase/imgi_4_Trasformatori-A-USO-GENERALE-AB-trasformatori-Italy.jpg";
import imgCertificati from "@/assets/trasformatori-monofase/imgi_5_Trasformatori-CERTIFICATI-UL-5085-ENEC-05-AB-trasformatori-Italy.jpg";
import imgSicurezza from "@/assets/trasformatori-monofase/imgi_6_Trasformatori-SICUREZZA-AB-trasformatori-Italy.jpg";
import imgPortatili from "@/assets/trasformatori-monofase/imgi_8_Trasformatori-PORTATILI-AB-trasformatori-Italy.jpg";
import imgDIN from "@/assets/trasformatori-monofase/imgi_9_DIN-AB-trasformatori-Italy-1.jpg";

// Import product images for "Trasformatori a uso generale"
import imgMON from "@/assets/Trasformatori a uso generale/imgi_4_MON-AB-trasformatori-Italy.jpg";
import imgCOL from "@/assets/Trasformatori a uso generale/imgi_5_COL-AB-trasformatori-Italy.jpg";

// Import PDFs
import pdfMON from "@/assets/MON-catalogo-2018.01-AB-trasformatori-Italy-1.pdf";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  pdfLink?: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  products?: Product[];
}

const TrasformatoriMonofase = () => {
  const { isDark } = useTheme();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: "uso-generale",
      title: "Trasformatori a uso generale",
      description: "Trasformatori monofase per applicazioni industriali e civili standard.",
      image: imgUsoGenerale,
      products: [
        {
          id: "mon",
          name: "MON — Monofase a uso generale a mantello",
          description: "Trasformatore monofase a mantello per uso generale. Costruzione robusta e affidabile per applicazioni standard.",
          image: imgMON,
          pdfLink: pdfMON,
        },
        {
          id: "col",
          name: "COL — Monofase a uso generale a colonna",
          description: "Trasformatore monofase a colonna per uso generale. Design compatto ed efficiente.",
          image: imgCOL,
        },
      ],
    },
    {
      id: "certificati",
      title: "Trasformatori certificati UL5085 ENEC05 EAC",
      description: "Trasformatori omologati per i mercati internazionali con certificazioni UL, ENEC e EAC.",
      image: imgCertificati,
    },
    {
      id: "sicurezza",
      title: "Trasformatori di sicurezza",
      description: "Trasformatori progettati per garantire la massima sicurezza in applicazioni critiche.",
      image: imgSicurezza,
    },
    {
      id: "isolamento",
      title: "Trasformatori di isolamento",
      description: "Trasformatori per isolamento galvanico e protezione degli impianti.",
      image: imgSicurezza, // Using sicurezza image as placeholder
    },
    {
      id: "portatili",
      title: "Trasformatori portatili TRPO",
      description: "Trasformatori portatili per cantieri e applicazioni mobili.",
      image: imgPortatili,
    },
    {
      id: "ip20-din",
      title: "Trasformatori IP20 guida DIN",
      description: "Trasformatori compatti con grado di protezione IP20 per montaggio su guida DIN.",
      image: imgDIN,
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div>
              <Link
                to="/prodotti"
                className={`text-accent text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-2 transition-colors ${isDark ? "hover:text-white" : "hover:text-black"}`}
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Torna ai prodotti
              </Link>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight ${isDark ? "text-white" : "text-black"}`}>
                TRASFORMATORI
                <br />
                <span className="text-accent">MONOFASE</span>
              </h1>
              <p className={`text-lg max-w-2xl ${isDark ? "text-white/60" : "text-black/60"}`}>
                Ampia gamma di trasformatori monofase per ogni esigenza.
                Scegli la tipologia per visualizzare i prodotti disponibili.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className={`py-16 lg:py-24 ${isDark ? "bg-neutral-900" : "bg-neutral-100"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`border overflow-hidden ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}`}
                >
                  {/* Category Header - Clickable */}
                  <div
                    onClick={() => category.products && toggleCategory(category.id)}
                    className={`flex flex-col md:flex-row gap-6 p-6 ${category.products ? `cursor-pointer transition-colors ${isDark ? "hover:bg-white/5" : "hover:bg-neutral-50"}` : ''}`}
                  >
                    {/* Image */}
                    <div className="md:w-48 lg:w-64 flex-shrink-0">
                      <div className="aspect-square overflow-hidden bg-white rounded-lg">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className={`text-xl lg:text-2xl font-bold mb-2 group-hover:text-accent transition-colors ${isDark ? "text-white" : "text-black"}`}>
                            {category.title}
                          </h2>
                          <p className={isDark ? "text-white/60" : "text-black/60"}>
                            {category.description}
                          </p>
                        </div>
                        {category.products && (
                          <button className="flex-shrink-0 w-10 h-10 bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                            {expandedCategory === category.id ? (
                              <ChevronUp className="w-5 h-5 text-accent" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-accent" />
                            )}
                          </button>
                        )}
                      </div>
                      {category.products && (
                        <p className="text-accent text-sm mt-4 flex items-center gap-2">
                          {expandedCategory === category.id ? 'Clicca per chiudere' : 'Clicca per vedere i prodotti'}
                          <span className={isDark ? "text-white/40" : "text-black/40"}>({category.products.length} prodotti)</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Expanded Products */}
                  {expandedCategory === category.id && category.products && (
                    <div className={`border-t p-6 ${isDark ? "border-white/10 bg-black/30" : "border-black/10 bg-neutral-50"}`}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.products.map((product) => (
                          <div
                            key={product.id}
                            className={`group border hover:border-accent/50 transition-all duration-300 ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}`}
                          >
                            {/* Product Image */}
                            {product.pdfLink ? (
                              <a
                                href={product.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-square overflow-hidden bg-white block cursor-pointer hover:shadow-lg hover:shadow-accent/20 transition-shadow"
                              >
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                              </a>
                            ) : (
                              <div className="aspect-square overflow-hidden bg-white">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            )}

                            {/* Product Info */}
                            <div className="p-4">
                              <h3 className={`text-lg font-bold mb-2 group-hover:text-accent transition-colors ${isDark ? "text-white" : "text-black"}`}>
                                {product.name}
                              </h3>
                              <p className={`text-sm ${isDark ? "text-white/50" : "text-black/50"}`}>
                                {product.description}
                              </p>
                            </div>

                            {/* Top accent line on hover */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-accent relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Text content */}
              <div>
                <span className="inline-block px-4 py-2 bg-black/10 text-black text-xs font-bold uppercase tracking-wider mb-6">
                  Produzione Personalizzata
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
                  HAI BISOGNO DI UN
                  <br />
                  TRASFORMATORE SU MISURA?
                </h2>
                <p className="text-black/70 text-lg mb-8 max-w-lg">
                  Possiamo progettare e costruire trasformatori personalizzati
                  in soli 2 giorni lavorativi secondo le tue specifiche.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 text-black/80">
                    <div className="w-10 h-10 bg-black/10 flex items-center justify-center">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <span className="text-sm font-medium">Giorni lavorativi</span>
                  </div>
                  <div className="flex items-center gap-3 text-black/80">
                    <div className="w-10 h-10 bg-black/10 flex items-center justify-center">
                      <span className="text-lg font-bold">45+</span>
                    </div>
                    <span className="text-sm font-medium">Anni di esperienza</span>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="relative">
                {/* Form container with decorations */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-black/20" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-black/20" />

                <div className="bg-white p-8 lg:p-10 shadow-2xl">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-black mb-2">
                      Richiedi un preventivo
                    </h3>
                    <p className="text-black/50 text-sm">
                      Compila il form e ricevi un preventivo gratuito
                    </p>
                  </div>
                  <ContactForm variant="light" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TrasformatoriMonofase;
