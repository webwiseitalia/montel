import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const GuidaTecnica = () => {
  const { isDark } = useTheme();
  const sections = [
    {
      id: "caratteristiche-generali",
      title: "Caratteristiche generali e dati tecnici",
      content: `I trasformatori AB sono progettati e costruiti secondo le più rigorose normative internazionali.
      Ogni trasformatore viene sottoposto a test di qualità prima della consegna, garantendo prestazioni
      ottimali e massima affidabilità nel tempo. I dati tecnici includono tensioni nominali, potenze,
      classi di isolamento e gradi di protezione specifici per ogni modello.`,
    },
    {
      id: "avvolgimenti",
      title: "Avvolgimenti",
      content: `Gli avvolgimenti dei nostri trasformatori sono realizzati con materiali di alta qualità,
      garantendo efficienza e durata nel tempo. Utilizziamo filo di rame elettrolitico con isolamento
      in classe appropriata. Gli avvolgimenti primari e secondari sono progettati per garantire
      l'isolamento galvanico richiesto dalle normative di sicurezza.`,
    },
    {
      id: "omologazione-conformita",
      title: "Omologazione e conformità",
      content: `I nostri trasformatori sono omologati secondo le principali normative internazionali:
      - UL5085 e CSA22.2 per il mercato nordamericano (cURus file E364320)
      - ENEC05 per il mercato europeo
      - EAC per l'Unione Economica Eurasiatica

      La conformità è garantita attraverso controlli di produzione costanti e verifiche periodiche
      da parte degli enti certificatori.`,
    },
    {
      id: "classe-protezione",
      title: "Classe di protezione dei trasformatori",
      content: `I trasformatori AB sono disponibili in diverse classi di protezione:

      - IP20: Protezione contro oggetti solidi superiori a 12mm
      - IP65: Protezione completa contro la polvere e getti d'acqua
      - IP68: Protezione completa contro la polvere e immersione prolungata

      La scelta della classe di protezione dipende dall'ambiente di installazione e dalle
      condizioni operative previste.`,
    },
    {
      id: "classe-termica",
      title: "Classe termica di isolamento",
      content: `La classe termica definisce la temperatura massima di esercizio degli isolanti:

      - Classe A (105°C): Per applicazioni standard
      - Classe E (120°C): Per condizioni moderate
      - Classe B (130°C): Per applicazioni con temperature più elevate
      - Classe F (155°C): Per condizioni gravose
      - Classe H (180°C): Per le applicazioni più impegnative

      I nostri trasformatori sono progettati con margini di sicurezza adeguati per garantire
      una lunga durata operativa.`,
    },
    {
      id: "resistenza-cortocircuito",
      title: "Classificazione e resistenza al cortocircuito",
      content: `I trasformatori AB sono progettati per resistere alle sollecitazioni termiche e
      meccaniche causate da cortocircuiti. La resistenza al cortocircuito è calcolata secondo
      le normative EN 61558 e garantisce la sicurezza dell'impianto anche in condizioni di guasto.

      I test di cortocircuito vengono eseguiti su campioni rappresentativi della produzione
      per verificare la conformità ai requisiti normativi.`,
    },
    {
      id: "potenza-nominale",
      title: "Potenza nominale",
      content: `La potenza nominale indica la capacità del trasformatore di fornire energia al carico
      in condizioni operative normali. I nostri trasformatori sono disponibili in un'ampia gamma
      di potenze, da pochi VA per applicazioni di segnale fino a centinaia di kVA per
      applicazioni industriali.

      La potenza nominale è definita per funzionamento continuo alla temperatura ambiente
      di riferimento (tipicamente 25°C o 40°C secondo la normativa applicabile).`,
    },
    {
      id: "sovraccarico",
      title: "Sovraccarico ammesso",
      content: `I trasformatori AB possono sopportare sovraccarichi temporanei secondo i limiti
      definiti dalle normative applicabili. Il sovraccarico ammesso dipende dalla classe termica,
      dalla durata del sovraccarico e dalla temperatura ambiente.

      In generale, è possibile un sovraccarico del 10-20% per periodi limitati, ma si consiglia
      di consultare le specifiche tecniche del singolo prodotto o contattare il nostro
      ufficio tecnico per valutazioni specifiche.`,
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
              Guide tecniche
            </h1>
            <p className={`text-lg max-w-3xl ${isDark ? "text-white/70" : "text-black/70"}`}>
              Guide tecniche dei trasformatori elettrici ed elettromeccanici di nostra produzione.
              Informazioni utili per la scelta e l'impiego dei trasformatori AB.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className={`py-8 border-b ${isDark ? "bg-neutral-900 border-white/10" : "bg-neutral-100 border-black/10"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-lg font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>Indice</h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`text-sm hover:text-accent transition-colors flex items-center gap-1 ${isDark ? "text-white/60" : "text-black/60"}`}
                >
                  <ChevronRight className="w-4 h-4" />
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Content Sections */}
        <section className={`py-16 lg:py-24 ${isDark ? "bg-black" : "bg-white"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className={`text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? "text-white" : "text-black"}`}>
                    <FileText className="w-6 h-6 text-accent" />
                    {section.title}
                  </h2>
                  <div className={`p-6 border ${isDark ? "bg-white/5 border-white/10" : "bg-neutral-50 border-black/10"}`}>
                    <p className={`whitespace-pre-line leading-relaxed ${isDark ? "text-white/60" : "text-black/60"}`}>
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className={`py-12 ${isDark ? "bg-neutral-900" : "bg-neutral-100"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
              Documentazione tecnica
            </h2>
            <p className={`mb-6 max-w-2xl mx-auto ${isDark ? "text-white/60" : "text-black/60"}`}>
              Per documentazione tecnica dettagliata e specifiche complete dei nostri prodotti,
              scarica il catalogo generale o contatta il nostro ufficio tecnico.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium"
              onClick={(e) => {
                e.preventDefault();
                alert('Download documentazione tecnica');
              }}
            >
              <FileText className="w-5 h-5" />
              Scarica documentazione PDF
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuidaTecnica;
