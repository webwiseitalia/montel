import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Shield, CheckCircle, Globe } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

// Import certificate images
import certUL5085Monofase from "@/assets/certificati/imgi_6_certificato-UL5085-monofase-AB-trasformatori-Italy.png";
import certUL5085Trifase from "@/assets/certificati/imgi_7_certificato-UL5085-trifase-AB-trasformatori-Italy.png";
import certInsulationSystem from "@/assets/certificati/imgi_8_certificato-INSULATION-SYSTEM-AB-trasformatori-Italy.png";
import certENEC05Sicurezza from "@/assets/certificati/imgi_9_certificato-ENEC-05-sicurezza-monofase-AB-trasformatori-Italy.png";
import certENEC05Isolamento from "@/assets/certificati/imgi_10_certificato-ENEC-05-isolamento-monofase-AB-trasformatori-Italy.png";
import certEAC from "@/assets/certificati/imgi_11_EAC-certificato.png";

// Import PDF
import insulationSystemPdf from "@/assets/certificato_insulation_sistem-certificato-INSULATION-SYSTEM-AB-trasformatori-Italy-1.pdf";

const Certificati = () => {
  const { isDark } = useTheme();
  const certifications = [
    {
      icon: Award,
      title: "UL5085",
      subtitle: "cURus - File E364320",
      description:
        "Certificazione per il mercato nordamericano secondo gli standard UL (Underwriters Laboratories) e CSA22.2. Questa omologazione garantisce la conformità dei nostri trasformatori alle normative di sicurezza richieste negli Stati Uniti e in Canada.",
      images: [
        { src: certUL5085Monofase, alt: "Certificato UL5085 Monofase" },
        { src: certUL5085Trifase, alt: "Certificato UL5085 Trifase" },
      ],
    },
    {
      icon: Shield,
      title: "ENEC05",
      subtitle: "Certificazione Europea",
      description:
        "Marchio europeo di conformità per apparecchiature elettriche. La certificazione ENEC05 attesta che i nostri prodotti soddisfano tutti i requisiti di sicurezza e qualità previsti dalle normative europee.",
      images: [
        { src: certENEC05Sicurezza, alt: "Certificato ENEC05 Sicurezza Monofase" },
        { src: certENEC05Isolamento, alt: "Certificato ENEC05 Isolamento Monofase" },
      ],
    },
    {
      icon: Globe,
      title: "EAC",
      subtitle: "Eurasian Conformity",
      description:
        "Certificazione per l'Unione Economica Eurasiatica (Russia, Bielorussia, Kazakistan, Armenia, Kirghizistan). Il marchio EAC attesta la conformità dei prodotti ai requisiti tecnici della regione.",
      images: [
        { src: certEAC, alt: "Certificato EAC" },
      ],
    },
    {
      icon: CheckCircle,
      title: "Insulation System",
      subtitle: "Sistema di isolamento certificato",
      description:
        "I nostri sistemi di isolamento sono certificati secondo le normative internazionali, garantendo massima sicurezza e affidabilità nel tempo.",
      images: [
        { src: certInsulationSystem, alt: "Certificato Insulation System", pdfLink: insulationSystemPdf },
      ],
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
              Le nostre certificazioni
            </h1>
            <p className={`text-lg max-w-3xl ${isDark ? "text-white/70" : "text-black/70"}`}>
              Produzione trasformatori elettromeccanici ed elettrici.
              Azienda certificata UL5085, Insulation System, ENEC05, EAC.
            </p>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className={`py-16 lg:py-24 ${isDark ? "bg-neutral-900" : "bg-neutral-100"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`p-8 border hover:border-accent/50 transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/10"
                      : "bg-white border-black/10"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <cert.icon className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                          <h3 className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-black"}`}>
                            {cert.title}
                          </h3>
                          <p className="text-sm text-accent font-medium">
                            {cert.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className={isDark ? "text-white/60" : "text-black/60"}>
                        {cert.description}
                      </p>
                    </div>

                    {/* Images */}
                    <div className="lg:w-2/3">
                      <div className={`grid gap-4 ${cert.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 max-w-md'}`}>
                        {cert.images.map((image, imgIndex) => (
                          image.pdfLink ? (
                            <a
                              key={imgIndex}
                              href={image.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white rounded-lg p-4 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-accent/20 transition-shadow"
                            >
                              <img
                                src={image.src}
                                alt={image.alt}
                                title={image.alt}
                                loading="lazy"
                                width={320}
                                height={320}
                                className="max-h-80 w-auto object-contain"
                              />
                            </a>
                          ) : (
                            <div
                              key={imgIndex}
                              className="bg-white rounded-lg p-4 flex items-center justify-center"
                            >
                              <img
                                src={image.src}
                                alt={image.alt}
                                title={image.alt}
                                loading="lazy"
                                width={320}
                                height={320}
                                className="max-h-80 w-auto object-contain"
                              />
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className={`py-16 lg:py-24 ${isDark ? "bg-black" : "bg-white"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-black"}`}>
                Conformità alle normative
              </h2>

              <div className={`prose prose-lg max-w-none space-y-6 ${isDark ? "text-white/60" : "text-black/60"}`}>
                <p>
                  Tutti i nostri trasformatori sono progettati e costruiti in
                  conformità alle normative europee e internazionali vigenti.
                  La nostra azienda investe costantemente nel mantenimento e
                  nell'aggiornamento delle certificazioni per garantire ai
                  clienti prodotti sempre conformi agli standard più recenti.
                </p>

                <div className={`p-6 border ${isDark ? "bg-white/5 border-white/10" : "bg-neutral-50 border-black/10"}`}>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                    Principali normative di riferimento
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>EN 61558 - Sicurezza dei trasformatori</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>UL 5085 - Standard nordamericano</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>CSA C22.2 - Canadian Standards Association</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>IEC 61558 - International Electrotechnical Commission</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Direttiva Bassa Tensione 2014/35/UE</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Per maggiori informazioni sulle nostre certificazioni o per
                  richiedere documentazione tecnica specifica, non esitate a
                  contattare il nostro ufficio tecnico.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Certificati;
