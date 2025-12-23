import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "@/context/ThemeContext";

// Import product images
import imgMonofase from "@/assets/prodotti/imgi_5_Trasformatori-MONOFASE-AB-trasformatori-Italy.jpg";
import imgTrifase from "@/assets/prodotti/imgi_6_Trasformatori-TRIFASE-AB-trasformatori-Italy.jpg";
import imgMedicali from "@/assets/prodotti/imgi_9_Trasformatori-MEDICALI-AB-trasformatori-Italy.jpg";
import imgAutotrasformatori from "@/assets/prodotti/imgi_8_Autotrasformatori-MONOFASE-E-TRIFASE-AB-trasformatori-Italy.jpg";
import imgPiscine from "@/assets/prodotti/imgi_48_TLUX-AB-trasformatori-Italy-2.jpg";
import imgAltre from "@/assets/prodotti/imgi_10_Altre-produzioni-AB-trasformatori-Italy.jpg";
import imgTTM from "@/assets/prodotti/imgi_7_TTM-AB-trasformatori-Italy.jpg";
import imgELM from "@/assets/prodotti/imgi_50_ELM-AB-trasformatori-Italy-1.jpg";
import imgCOFT from "@/assets/prodotti/imgi_52_COFT-AB-trasformatori-Italy-1.jpg";

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

const Prodotti = () => {
  const { isDark } = useTheme();

  const categories: Category[] = [
    {
      id: "monofase",
      title: "Trasformatori monofase",
      description: "Trasformatori di isolamento e sicurezza per applicazioni industriali e civili. Disponibili in diverse potenze e configurazioni.",
      image: imgMonofase,
      href: "/prodotti/trasformatori-monofase",
    },
    {
      id: "trifase",
      title: "Trasformatori trifase",
      description: "Soluzioni trifase per impianti industriali di media e grande potenza. Progettati per massima efficienza e affidabilità.",
      image: imgTrifase,
    },
    {
      id: "medicali",
      title: "Trasformatori medicali",
      description: "Trasformatori certificati per apparecchiature elettromedicali. Conformi alle normative più rigorose del settore.",
      image: imgMedicali,
    },
    {
      id: "piscine",
      title: "Trasformatori per piscine (TLUX)",
      description: "Trasformatori di sicurezza per illuminazione subacquea e impianti per piscine. Massima protezione in ambienti umidi.",
      image: imgPiscine,
    },
    {
      id: "autotrasformatori",
      title: "Autotrasformatori monofase e trifase",
      description: "Autotrasformatori per regolazione di tensione e adattamento impianti. Soluzioni compatte ed efficienti.",
      image: imgAutotrasformatori,
    },
    {
      id: "ttm",
      title: "Trasformatori TTM",
      description: "Serie TTM per applicazioni speciali. Progettati per soddisfare requisiti tecnici specifici.",
      image: imgTTM,
    },
    {
      id: "elm",
      title: "Trasformatori ELM",
      description: "Serie ELM per applicazioni industriali. Robustezza e prestazioni elevate.",
      image: imgELM,
    },
    {
      id: "coft",
      title: "Trasformatori COFT",
      description: "Serie COFT per applicazioni con contenitore. Protezione e versatilità.",
      image: imgCOFT,
    },
    {
      id: "altre",
      title: "Altre produzioni",
      description: "Reattanze, induttanze, trasformatori speciali su misura e altre soluzioni personalizzate.",
      image: imgAltre,
    },
  ];

  const productTypes = [
    "Trasformatori monofase",
    "Trasformatori trifase",
    "Trasformatori medicali",
    "Trasformatori per piscine",
    "Trasformatori certificati UL5085",
    "Trasformatori IP65",
    "Trasformatori IP68",
    "Trasformatori IP20",
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
                Catalogo Prodotti
              </span>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight ${isDark ? "text-white" : "text-black"}`}>
                TRASFORMATORI DI
                <br />
                <span className="text-accent">ISOLAMENTO</span>
              </h1>
              <p className={`text-lg max-w-2xl mb-8 ${isDark ? "text-white/60" : "text-black/60"}`}>
                Da oltre 40 anni produciamo trasformatori elettrici di alta qualità.
                In soli 2 giorni possiamo progettare, costruire e consegnare un trasformatore
                personalizzato sulle vostre esigenze specifiche.
              </p>
            </div>
          </div>
        </section>

        {/* Product Types List */}
        <section className={`py-12 ${isDark ? "bg-neutral-900" : "bg-neutral-100"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
              La nostra produzione
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {productTypes.map((type, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 border ${
                    isDark
                      ? "bg-white/5 border-white/10"
                      : "bg-white border-black/10"
                  }`}
                >
                  <div className="w-2 h-2 bg-accent" />
                  <span className={`text-sm ${isDark ? "text-white/70" : "text-black/70"}`}>{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid with Images */}
        <section className={`py-16 lg:py-24 ${isDark ? "bg-black" : "bg-white"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${isDark ? "text-white" : "text-black"}`}>
                CATEGORIE <span className="text-accent">PRODOTTI</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  className={`group relative border hover:border-accent/50 transition-all duration-300 overflow-hidden ${
                    isDark
                      ? "bg-white/5 border-white/10"
                      : "bg-neutral-50 border-black/10"
                  }`}
                >
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10" />

                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 group-hover:text-accent transition-colors ${isDark ? "text-white" : "text-black"}`}>
                      {category.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? "text-white/50" : "text-black/50"}`}>
                      {category.description}
                    </p>
                    {category.href ? (
                      <Link
                        to={category.href}
                        className={`text-accent text-sm font-medium flex items-center gap-2 transition-colors ${
                          isDark ? "hover:text-white" : "hover:text-black"
                        }`}
                      >
                        Scopri di più
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-accent/50 text-sm font-medium flex items-center gap-2">
                        Prossimamente
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
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
                  Supporto Tecnico
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
                  HAI BISOGNO DI
                  <br />
                  UNA CONSULENZA?
                </h2>
                <p className="text-black/70 text-lg mb-8 max-w-lg">
                  Il nostro team tecnico è a disposizione per aiutarti a scegliere
                  il trasformatore più adatto alle tue esigenze.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 text-black/80">
                    <div className="w-10 h-10 bg-black/10 flex items-center justify-center">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <span className="text-sm font-medium">Giorni per produzione su misura</span>
                  </div>
                  <div className="flex items-center gap-3 text-black/80">
                    <div className="w-10 h-10 bg-black/10 flex items-center justify-center">
                      <span className="text-lg font-bold">24h</span>
                    </div>
                    <span className="text-sm font-medium">Risposta garantita</span>
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
                      Richiedi informazioni
                    </h3>
                    <p className="text-black/50 text-sm">
                      Compila il form e ricevi una risposta personalizzata
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

export default Prodotti;
