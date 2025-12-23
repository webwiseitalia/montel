import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronDown, Zap, Shield, Cpu, Factory } from "lucide-react";
import useAdvancedAnimations from "@/hooks/useAdvancedAnimations";

// Import images
import heroImage from "@/assets/montel/imgi_4_2500x1503-home1.webp";
import chiSiamoImage from "@/assets/montel/imgi_8_azienda_1.webp";
import fasciaImage from "@/assets/montel/imgi_11_fascia_home_1.webp";
import sensoriThumb from "@/assets/montel/imgi_25_sensori_di_livello_thumb.webp";
import cablaggiThumb from "@/assets/montel/imgi_26_cablaggi_elettrici_thumb.webp";
import quadriThumb from "@/assets/montel/imgi_29_quadri_elettrici_thumb.webp";
import sondeThumb from "@/assets/montel/imgi_7_sonde_di_temperatura_thumb.webp";
import qualitaImage from "@/assets/montel/imgi_3_fili_qualita.webp";
import sensoriCase from "@/assets/montel/imgi_4_sensori_di_livello_thumb_case.webp";
import cablaggiCase from "@/assets/montel/imgi_5_cablaggi_elettrici_thumb_case.webp";
import quadriCase from "@/assets/montel/imgi_6_quadri_elettrici_thumb_case.webp";

// Counter component with animation
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="counter-number">
      {count}{suffix}
    </span>
  );
};

const Index = () => {
  const { isDark } = useTheme();
  const animationRef = useAdvancedAnimations();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effect for hero
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        setMousePosition({
          x: (clientX / innerWidth - 0.5) * 20,
          y: (clientY / innerHeight - 0.5) * 20,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const products = [
    {
      image: sensoriThumb,
      title: "Sensori di livello carburante",
      description: "Tecnologia avanzata per la misurazione precisa del livello carburante",
      href: "/prodotti/sensori-livello-carburante",
      icon: Zap,
    },
    {
      image: cablaggiThumb,
      title: "Cablaggi elettrici",
      description: "Soluzioni personalizzate con approccio co-design su specifiche del cliente",
      href: "/prodotti/cablaggi-elettrici",
      icon: Cpu,
    },
    {
      image: quadriThumb,
      title: "Quadri elettrici",
      description: "Progettazione e realizzazione su misura per applicazioni industriali",
      href: "/prodotti/quadri-elettrici",
      icon: Factory,
    },
    {
      image: sondeThumb,
      title: "Sonde di temperatura",
      description: "Sonde personalizzabili con segnale continuo per ogni applicazione",
      href: "/prodotti/sonde-temperatura",
      icon: Shield,
    },
  ];

  const caseHistories = [
    { title: "Sensori resistivi per automotive", category: "Sensori", href: "/case-history/sensori-livello-carburante", image: sensoriCase },
    { title: "Cablaggi per settore vending", category: "Cablaggi", href: "/case-history/cablaggi-elettrici", image: cablaggiCase },
    { title: "Quadri elettrici industriali", category: "Quadri", href: "/case-history/quadri-elettrici", image: quadriCase },
  ];

  const stats = [
    { value: 50, suffix: "+", label: "Anni di esperienza" },
    { value: 10, suffix: "+", label: "Settori industriali" },
    { value: 2, suffix: "", label: "Sedi produttive" },
    { value: 100, suffix: "%", label: "Made in Italy" },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`} ref={animationRef}>
      <Header />
      <main>
        {/* 1. HERO SECTION - Premium Full Impact */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
              }}
            >
              <img
                src={heroImage}
                alt="Mont.El - Life in a Wire"
                title="Mont.El - Life in a Wire - Componenti Elettrici dal 1972"
                width={2500}
                height={1503}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            {/* Tech grid overlay */}
            <div className={`absolute inset-0 ${isDark ? "tech-grid-dark" : ""} opacity-50`} />
            {/* Animated gradient accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradientShift_3s_ease_infinite]" />
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-32">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="hero-title mb-8">
                <span className="hero-title-inner hero-stagger-1 inline-block px-5 py-2.5 text-xs font-bold tracking-[0.2em] uppercase bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                  Dal 1972 • Eccellenza Italiana
                </span>
              </div>

              {/* Main Title */}
              <h1 className="mb-8">
                <span className="hero-title block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.9] tracking-tighter">
                  <span className="hero-title-inner hero-stagger-2">Life in</span>
                </span>
                <span className="hero-title block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter">
                  <span className="hero-title-inner hero-stagger-3 text-gradient-animated">a Wire</span>
                </span>
              </h1>

              {/* Subtitle */}
              <div className="hero-title mb-12">
                <p className="hero-title-inner hero-stagger-4 text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl">
                  Progettiamo e produciamo sensori, cablaggi elettrici, quadri elettrici e sonde di temperatura per i settori industriali più esigenti.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="hero-title">
                <div className="hero-title-inner hero-stagger-5 flex flex-wrap gap-5">
                  <Link
                    to="/contatti"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                  >
                    <span className="relative z-10">Richiedi informazioni</span>
                    <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                    <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="absolute inset-0 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Richiedi informazioni
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                  <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold text-sm uppercase tracking-wider transition-all duration-500 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm">
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/30 group-hover:border-white/60 transition-all duration-500 group-hover:scale-110">
                      <Play className="w-4 h-4 ml-0.5" />
                    </div>
                    Video aziendale
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-8 bg-white animate-[slideDown_1.5s_ease-in-out_infinite]" />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0 glass-dark border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="py-8 text-center group hover:bg-white/5 transition-colors duration-500"
                  >
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-gradient transition-all duration-500">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-white/40 group-hover:text-white/60 transition-colors duration-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. CHI SIAMO - Premium Split Layout */}
        <section className={`py-32 lg:py-40 relative overflow-hidden ${isDark ? "bg-black" : "bg-white"}`}>
          <div className={`absolute inset-0 ${isDark ? "circuit-dots opacity-30" : "circuit-dots opacity-20"}`} />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div data-animate="fade-right" data-delay="0">
                <span className="inline-block text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6">
                  Chi Siamo
                </span>
                <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[0.95] tracking-tight ${isDark ? "text-white" : "text-black"}`}>
                  Oltre 50 anni di
                  <span className="text-gradient block mt-2">eccellenza</span>
                </h2>
                <p className={`text-xl mb-10 leading-relaxed ${isDark ? "text-white/50" : "text-black/50"}`}>
                  Fondata nel 1972 da Giuseppe Novali, Mont.El è oggi un punto di riferimento nella produzione di componenti elettrici ed elettronici. Con sede a Sale Marasino (BS) e strutture produttive in Italia e Romania, operiamo in un network industriale integrato al servizio dei settori più esigenti.
                </p>
                <Link
                  to="/azienda"
                  className="group inline-flex items-center gap-3 text-primary font-bold text-lg split-line"
                >
                  Scopri la nostra storia
                  <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-3" />
                </Link>
              </div>
              <div data-animate="fade-left" data-delay="200" className="relative">
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-6 border-2 border-primary/20 -z-10" />
                  <div className="absolute -inset-3 border border-primary/10 -z-10" />
                  {/* Image */}
                  <div className="img-reveal revealed overflow-hidden">
                    <img
                      src={chiSiamoImage}
                      alt="Mont.El - Chi Siamo"
                      title="Mont.El - Azienda e Storia"
                      loading="lazy"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 shadow-2xl float">
                    <div className="text-4xl font-black">50+</div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Anni</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FASCIA IMMAGINE - Cinematic Banner */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={fasciaImage}
              alt="Mont.El Produzione"
              title="Mont.El - Produzione Industriale"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-accent/60" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-5xl" data-animate="scale" data-delay="0">
              <span className="inline-block text-white/60 text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Il Nostro Impegno
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.95] tracking-tight">
                Innovazione, qualità e affidabilità
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Ogni prodotto Mont.El nasce dalla combinazione di esperienza consolidata e tecnologie all'avanguardia
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
        </section>

        {/* 4. PRODOTTI - Premium Grid */}
        <section className={`py-32 lg:py-40 ${isDark ? "bg-black" : "bg-neutral-50"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20" data-animate="fade-up" data-delay="0">
              <span className="inline-block text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6">
                I Nostri Prodotti
              </span>
              <h2 className={`text-5xl md:text-6xl font-black mb-8 tracking-tight ${isDark ? "text-white" : "text-black"}`}>
                Soluzioni per ogni esigenza
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-white/50" : "text-black/50"}`}>
                Una gamma completa di soluzioni elettriche ed elettroniche, dalla progettazione alla produzione.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Link
                  key={product.href}
                  to={product.href}
                  data-animate="fade-up"
                  data-delay={String(index * 100)}
                  className={`group relative overflow-hidden hover-premium accent-line-bottom ${
                    isDark
                      ? "bg-white/5 border border-white/10"
                      : "bg-white border border-black/5"
                  }`}
                >
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 z-10 w-12 h-12 bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <product.icon className="w-6 h-6" />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      title={`Mont.El - ${product.title}`}
                      loading="lazy"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                      {product.title}
                    </h3>
                    <p className={`text-sm mb-6 leading-relaxed ${isDark ? "text-white/40" : "text-black/40"}`}>
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-4 transition-all duration-500">
                      Scopri
                      <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16" data-animate="fade-up" data-delay="400">
              <Link
                to="/prodotti"
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold text-sm uppercase tracking-wider shimmer transition-all duration-500 hover:shadow-[0_0_40px_rgba(24,0,141,0.4)]"
              >
                Tutti i prodotti
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. QUALITÀ - Split Section Premium */}
        <section className={`py-32 lg:py-40 ${isDark ? "bg-white/5" : "bg-white"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div data-animate="fade-right" data-delay="0" className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-6 border-2 border-accent/20 -z-10" />
                  <div className="overflow-hidden">
                    <img
                      src={qualitaImage}
                      alt="Mont.El - Qualità"
                      title="Mont.El - Qualità e Certificazioni"
                      loading="lazy"
                      width={600}
                      height={400}
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-accent text-white p-6 shadow-2xl float">
                    <div className="text-4xl font-black">ISO</div>
                    <div className="text-xs uppercase tracking-wider opacity-80">9001</div>
                  </div>
                </div>
              </div>
              <div data-animate="fade-left" data-delay="200" className="order-1 lg:order-2">
                <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-6">
                  Qualità
                </span>
                <h2 className={`text-5xl md:text-6xl font-black mb-10 leading-[0.95] tracking-tight ${isDark ? "text-white" : "text-black"}`}>
                  Standard internazionali,
                  <span className="text-accent block mt-2">qualità garantita</span>
                </h2>
                <p className={`text-xl mb-10 leading-relaxed ${isDark ? "text-white/50" : "text-black/50"}`}>
                  Sistema qualità conforme a standard internazionali, controlli e test su tutti i prodotti prima della consegna. Brevetti industriali e un approccio al miglioramento continuo che ci distingue nel mercato.
                </p>
                <Link
                  to="/qualita"
                  className="group inline-flex items-center gap-3 text-accent font-bold text-lg split-line"
                >
                  Scopri il nostro approccio
                  <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SETTORI - Dark Premium Section */}
        <section className={`py-32 lg:py-40 relative overflow-hidden ${isDark ? "bg-black" : "bg-primary"}`}>
          <div className="absolute inset-0 tech-grid-dark opacity-30" />
          {/* Animated gradient blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse delay-1000" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center" data-animate="scale" data-delay="0">
              <span className="inline-block text-white/50 text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Settori di Applicazione
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 text-white leading-[0.95] tracking-tight">
                Presenti in oltre
                <span className="text-gradient-animated block mt-2">10 settori industriali</span>
              </h2>
              <p className="text-xl mb-12 text-white/60 leading-relaxed max-w-3xl mx-auto">
                Automotive, motociclismo, aeronautica, nautica, medicale, vending, condizionamento, elettrodomestici, macchine agricole e molto altro.
              </p>
              <Link
                to="/settori"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold text-sm uppercase tracking-wider transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105"
              >
                Esplora i settori
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. CASE HISTORY - Premium Cards */}
        <section className={`py-32 lg:py-40 ${isDark ? "bg-white/5" : "bg-neutral-50"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20" data-animate="fade-up" data-delay="0">
              <span className="inline-block text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Case History
              </span>
              <h2 className={`text-5xl md:text-6xl font-black mb-8 tracking-tight ${isDark ? "text-white" : "text-black"}`}>
                Progetti reali, soluzioni concrete
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-white/50" : "text-black/50"}`}>
                Scopri come abbiamo risolto le sfide tecniche dei nostri clienti nei diversi settori applicativi.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {caseHistories.map((caseItem, index) => (
                <Link
                  key={index}
                  to={caseItem.href}
                  data-animate="fade-up"
                  data-delay={String(index * 150)}
                  className={`group relative overflow-hidden hover-premium accent-line-bottom ${
                    isDark
                      ? "bg-white/5 border border-white/10"
                      : "bg-white border border-black/5"
                  }`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      title={`Mont.El Case History - ${caseItem.title}`}
                      loading="lazy"
                      width={640}
                      height={360}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">
                      {caseItem.category}
                    </span>
                    <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
                      {caseItem.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-accent text-sm font-bold group-hover:gap-4 transition-all duration-500">
                      Leggi il caso
                      <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center" data-animate="fade-up" data-delay="450">
              <Link
                to="/case-history"
                className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-bold text-sm uppercase tracking-wider shimmer transition-all duration-500 hover:shadow-[0_0_40px_rgba(236,0,13,0.4)]"
              >
                Tutte le case history
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
