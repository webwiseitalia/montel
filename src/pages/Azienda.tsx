import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Shield, Clock, Users } from "lucide-react";
import imgAzienda from "@/assets/imgi_4_azienda.jpg";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "@/context/ThemeContext";

const Azienda = () => {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: Clock,
      title: "Dal 1975",
      description: "Oltre 45 anni di esperienza nella produzione di trasformatori",
    },
    {
      icon: Award,
      title: "Certificazioni",
      description: "UL5085, ENEC05, EAC e conformità alle normative europee",
    },
    {
      icon: Shield,
      title: "Qualità",
      description: "Progettazione e costruzione secondo i più alti standard",
    },
    {
      icon: Users,
      title: "Servizio",
      description: "Consulenza tecnica e produzione personalizzata",
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
              Produciamo trasformatori dal 1975
            </h1>
            <p className={`text-lg max-w-3xl ${isDark ? "text-white/80" : "text-black/80"}`}>
              Nata nel 1975 come Angelo Bertossi Trasformatori ditta individuale,
              oggi AB Trasformatori srl è un'azienda leader nella produzione di
              trasformatori elettrici monofase e trifase.
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className={`py-12 ${isDark ? "bg-neutral-900" : "bg-neutral-100"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 text-center border hover:border-accent/50 transition-all ${
                    isDark
                      ? "bg-white/5 border-white/10"
                      : "bg-white border-black/10"
                  }`}
                >
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className={`font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>{item.title}</h3>
                  <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className={`py-16 lg:py-24 ${isDark ? "bg-black" : "bg-white"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={imgAzienda}
                    alt="AB Trasformatori - La nostra azienda"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Accent corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-accent -translate-x-3 -translate-y-3" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent translate-x-3 translate-y-3" />
              </div>

              {/* Text content */}
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${isDark ? "text-white" : "text-black"}`}>
                  La nostra storia
                </h2>

                <div className={`prose prose-lg max-w-none space-y-6 ${isDark ? "text-white/60" : "text-black/60"}`}>
                  <p>
                    Nata nel 1975 come Angelo Bertossi Trasformatori ditta individuale,
                    oggi <strong className={isDark ? "text-white" : "text-black"}>AB Trasformatori srl</strong> è
                    un'azienda consolidata che opera nel settore della produzione di
                    trasformatori elettrici da oltre quattro decenni.
                  </p>

                  <p>
                    Nel corso degli anni, l'azienda ha saputo evolversi e crescere,
                    mantenendo sempre al centro della propria attività la qualità del
                    prodotto e la soddisfazione del cliente. Oggi siamo in grado di
                    offrire una gamma completa di trasformatori monofase e trifase,
                    progettati e costruiti secondo le più rigorose normative europee
                    e internazionali.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional content - full width below */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className={`p-6 border hover:border-accent/50 transition-colors ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-neutral-50 border-black/10"
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                  Progettazione e normative
                </h3>
                <p className={isDark ? "text-white/60" : "text-black/60"}>
                  La progettazione e l'esecuzione dei nostri prodotti avviene secondo
                  i requisiti delle normative europee. Siamo specializzati nella
                  produzione di trasformatori monofase e trifase omologati per il
                  mercato internazionale.
                </p>
              </div>

              <div className={`p-6 border hover:border-accent/50 transition-colors ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-neutral-50 border-black/10"
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                  Certificazioni internazionali
                </h3>
                <p className={isDark ? "text-white/60" : "text-black/60"}>
                  I nostri trasformatori sono certificati <strong className={isDark ? "text-white" : "text-black"}>cURus</strong> secondo
                  la normativa <strong className={isDark ? "text-white" : "text-black"}>UL5085</strong> e <strong className={isDark ? "text-white" : "text-black"}>CSA22.2</strong> (file E364320),
                  rendendoli idonei per il mercato nordamericano. Disponiamo inoltre
                  delle certificazioni <strong className={isDark ? "text-white" : "text-black"}>ENEC05</strong> e <strong className={isDark ? "text-white" : "text-black"}>EAC</strong>.
                </p>
              </div>

              <div className={`p-6 border hover:border-accent/50 transition-colors ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-neutral-50 border-black/10"
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                  Produzione personalizzata
                </h3>
                <p className={isDark ? "text-white/60" : "text-black/60"}>
                  Uno dei nostri punti di forza è la capacità di realizzare
                  trasformatori su misura. In soli 2 giorni lavorativi possiamo
                  progettare, costruire e consegnare un trasformatore completamente
                  personalizzato secondo le specifiche del cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - mantiene sfondo accent */}
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
                  Assistenza Tecnica
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
                  HAI BISOGNO DI
                  <br />
                  UNA CONSULENZA?
                </h2>
                <p className="text-black/70 text-lg mb-8 max-w-lg">
                  Il nostro team tecnico è a disposizione per aiutarti a scegliere
                  il trasformatore più adatto alle tue esigenze specifiche.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 text-black/80">
                    <div className="w-10 h-10 bg-black/10 flex items-center justify-center">
                      <span className="text-lg font-bold">45+</span>
                    </div>
                    <span className="text-sm font-medium">Anni di esperienza</span>
                  </div>
                  <div className="flex items-center gap-3 text-black/80">
                    <div className="w-10 h-10 bg-black/10 flex items-center justify-center">
                      <span className="text-lg font-bold">100%</span>
                    </div>
                    <span className="text-sm font-medium">Made in Italy</span>
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
                      Compila il form e ti risponderemo al più presto
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

export default Azienda;
