import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Globe, Clock, Send, User, MessageSquare, FileText, ArrowRight, Printer } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const Contatti = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    oggetto: "",
    messaggio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Grazie per averci contattato! Ti risponderemo al più presto.");
    setFormData({
      nome: "",
      email: "",
      telefono: "",
      oggetto: "",
      messaggio: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
                Contattaci
              </span>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight ${isDark ? "text-white" : "text-black"}`}>
                SIAMO QUI PER
                <br />
                <span className="text-accent">AIUTARTI</span>
              </h1>
              <p className={`text-lg max-w-2xl ${isDark ? "text-white/60" : "text-black/60"}`}>
                Il nostro team è a disposizione per rispondere alle tue domande,
                fornire consulenza tecnica e supportarti nella scelta del trasformatore
                più adatto alle tue esigenze.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className={`py-12 border-y ${isDark ? "bg-neutral-900 border-white/5" : "bg-neutral-100 border-black/5"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="tel:+390307300444"
                className={`group flex items-center gap-4 p-6 border hover:border-accent/50 transition-all duration-300 ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/8"
                    : "bg-white border-black/10 hover:bg-neutral-50"
                }`}
              >
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs uppercase tracking-wider mb-1 ${isDark ? "text-white/40" : "text-black/40"}`}>
                    Telefono
                  </div>
                  <div className={`font-semibold group-hover:text-accent transition-colors truncate ${isDark ? "text-white" : "text-black"}`}>
                    +39 030 7300444
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ${isDark ? "text-white/20" : "text-black/20"}`} />
              </a>

              <a
                href="mailto:info@abtrasformatori.it"
                className={`group flex items-center gap-4 p-6 border hover:border-accent/50 transition-all duration-300 ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/8"
                    : "bg-white border-black/10 hover:bg-neutral-50"
                }`}
              >
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs uppercase tracking-wider mb-1 ${isDark ? "text-white/40" : "text-black/40"}`}>
                    Email
                  </div>
                  <div className={`font-semibold group-hover:text-accent transition-colors truncate text-sm ${isDark ? "text-white" : "text-black"}`}>
                    info@abtrasformatori.it
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ${isDark ? "text-white/20" : "text-black/20"}`} />
              </a>

              <div
                className={`flex items-center gap-4 p-6 border ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-black/10"
                }`}
              >
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Printer className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs uppercase tracking-wider mb-1 ${isDark ? "text-white/40" : "text-black/40"}`}>
                    FAX
                  </div>
                  <div className={`font-semibold truncate ${isDark ? "text-white" : "text-black"}`}>
                    +39 030 7400902
                  </div>
                </div>
              </div>

              <div
                className={`flex items-center gap-4 p-6 border ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-black/10"
                }`}
              >
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs uppercase tracking-wider mb-1 ${isDark ? "text-white/40" : "text-black/40"}`}>
                    Orari
                  </div>
                  <div className={`font-semibold text-sm truncate ${isDark ? "text-white" : "text-black"}`}>
                    Lun-Ven 8-18
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content: Info + Form */}
        <section className={`py-20 lg:py-28 relative overflow-hidden ${isDark ? "bg-black" : "bg-white"}`}>
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Information - Left Column */}
              <div className="lg:col-span-2">
                <h2 className={`text-2xl sm:text-3xl font-bold mb-10 ${isDark ? "text-white" : "text-black"}`}>
                  Le nostre <span className="text-accent">sedi</span>
                </h2>

                {/* Sede Italia */}
                <div className={`mb-10 p-6 border hover:border-accent/30 transition-colors ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-neutral-50 border-black/10"
                }`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-black"}`}>
                        Sede Italia
                      </h3>
                      <span className="text-accent text-xs uppercase tracking-wider">Headquarters</span>
                    </div>
                  </div>
                  <address className={`not-italic space-y-2 ml-16 ${isDark ? "text-white/60" : "text-black/60"}`}>
                    <p className={`font-medium ${isDark ? "text-white/80" : "text-black/80"}`}>Via Piantada, 6</p>
                    <p>25036 Palazzolo S/O (BS)</p>
                    <p className={`text-sm pt-2 ${isDark ? "text-white/40" : "text-black/40"}`}>P.I. e C.F. 02511620987</p>
                  </address>
                </div>

                {/* Sede Emirati Arabi */}
                <div className={`p-6 border hover:border-accent/30 transition-colors ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-neutral-50 border-black/10"
                }`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-black"}`}>
                        Emirati Arabi
                      </h3>
                      <span className="text-accent text-xs uppercase tracking-wider">Middle East</span>
                    </div>
                  </div>
                  <address className={`not-italic space-y-4 ml-16 ${isDark ? "text-white/60" : "text-black/60"}`}>
                    <div>
                      <p className={`font-medium mb-1 ${isDark ? "text-white/80" : "text-black/80"}`}>Dubai</p>
                      <p className="text-sm">48 Burj Gate, 10th Floor, room #1001</p>
                      <p className={`text-sm ${isDark ? "text-white/40" : "text-black/40"}`}>Downtown</p>
                    </div>
                    <div>
                      <p className={`font-medium mb-1 ${isDark ? "text-white/80" : "text-black/80"}`}>Abu Dhabi</p>
                      <p className="text-sm">7th Floor – CI Tower – Khalidiya Area</p>
                    </div>
                    <p className={`pt-2 ${isDark ? "text-white/60" : "text-black/60"}`}>
                      <span className={`text-xs uppercase ${isDark ? "text-white/40" : "text-black/40"}`}>Tel:</span> +971 4 321 62 60
                    </p>
                  </address>
                </div>

                {/* Orari dettagliati */}
                <div className="mt-10 p-6 bg-accent/10 border border-accent/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-accent" />
                    <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-black"}`}>Orari di apertura</h3>
                  </div>
                  <div className={`space-y-2 ml-8 ${isDark ? "text-white/70" : "text-black/70"}`}>
                    <div className="flex justify-between">
                      <span>Lunedì - Venerdì</span>
                      <span className={`font-medium ${isDark ? "text-white" : "text-black"}`}>8:00 - 18:00</span>
                    </div>
                    <div className={`flex justify-between ${isDark ? "text-white/40" : "text-black/40"}`}>
                      <span>Sabato - Domenica</span>
                      <span>Chiuso</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Right Column */}
              <div className="lg:col-span-3">
                <div className="relative">
                  {/* Decorative corners */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-accent" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-accent" />

                  <div className={`backdrop-blur-sm border p-8 lg:p-10 ${
                    isDark
                      ? "bg-neutral-900/80 border-white/10"
                      : "bg-neutral-50 border-black/10"
                  }`}>
                    <div className="mb-8">
                      <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                        Inviaci un messaggio
                      </h2>
                      <p className={isDark ? "text-white/50" : "text-black/50"}>
                        Compila il form e ti risponderemo entro 24 ore
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Nome e Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                          <label
                            htmlFor="nome"
                            className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                          >
                            Nome e Cognome *
                          </label>
                          <div className="relative">
                            <div className={`absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-accent transition-colors ${isDark ? "text-white/30" : "text-black/30"}`}>
                              <User className="w-4 h-4" />
                            </div>
                            <Input
                              id="nome"
                              name="nome"
                              type="text"
                              required
                              value={formData.nome}
                              onChange={handleChange}
                              placeholder="Il tuo nome"
                              className={`pl-10 h-12 rounded-none border-2 transition-all duration-300 focus:ring-0 focus:border-accent ${
                                isDark
                                  ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10"
                                  : "bg-white border-black/10 text-black placeholder:text-black/40 focus:bg-neutral-50"
                              }`}
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label
                            htmlFor="email"
                            className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                          >
                            Email *
                          </label>
                          <div className="relative">
                            <div className={`absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-accent transition-colors ${isDark ? "text-white/30" : "text-black/30"}`}>
                              <Mail className="w-4 h-4" />
                            </div>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="La tua email"
                              className={`pl-10 h-12 rounded-none border-2 transition-all duration-300 focus:ring-0 focus:border-accent ${
                                isDark
                                  ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10"
                                  : "bg-white border-black/10 text-black placeholder:text-black/40 focus:bg-neutral-50"
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Telefono e Oggetto */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                          <label
                            htmlFor="telefono"
                            className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                          >
                            Telefono
                          </label>
                          <div className="relative">
                            <div className={`absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-accent transition-colors ${isDark ? "text-white/30" : "text-black/30"}`}>
                              <Phone className="w-4 h-4" />
                            </div>
                            <Input
                              id="telefono"
                              name="telefono"
                              type="tel"
                              value={formData.telefono}
                              onChange={handleChange}
                              placeholder="Il tuo numero"
                              className={`pl-10 h-12 rounded-none border-2 transition-all duration-300 focus:ring-0 focus:border-accent ${
                                isDark
                                  ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10"
                                  : "bg-white border-black/10 text-black placeholder:text-black/40 focus:bg-neutral-50"
                              }`}
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label
                            htmlFor="oggetto"
                            className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                          >
                            Oggetto *
                          </label>
                          <div className="relative">
                            <div className={`absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-accent transition-colors ${isDark ? "text-white/30" : "text-black/30"}`}>
                              <FileText className="w-4 h-4" />
                            </div>
                            <Input
                              id="oggetto"
                              name="oggetto"
                              type="text"
                              required
                              value={formData.oggetto}
                              onChange={handleChange}
                              placeholder="Oggetto del messaggio"
                              className={`pl-10 h-12 rounded-none border-2 transition-all duration-300 focus:ring-0 focus:border-accent ${
                                isDark
                                  ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10"
                                  : "bg-white border-black/10 text-black placeholder:text-black/40 focus:bg-neutral-50"
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Messaggio */}
                      <div className="group">
                        <label
                          htmlFor="messaggio"
                          className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                        >
                          Messaggio *
                        </label>
                        <div className="relative">
                          <div className={`absolute left-3 top-3 group-focus-within:text-accent transition-colors ${isDark ? "text-white/30" : "text-black/30"}`}>
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <Textarea
                            id="messaggio"
                            name="messaggio"
                            required
                            rows={5}
                            value={formData.messaggio}
                            onChange={handleChange}
                            placeholder="Descrivi la tua richiesta..."
                            className={`pl-10 pt-3 rounded-none border-2 transition-all duration-300 focus:ring-0 resize-none focus:border-accent ${
                              isDark
                                ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10"
                                : "bg-white border-black/10 text-black placeholder:text-black/40 focus:bg-neutral-50"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                        <p className={`text-xs ${isDark ? "text-white/40" : "text-black/40"}`}>
                          * Campi obbligatori
                        </p>
                        <Button
                          type="submit"
                          className="group relative overflow-hidden px-8 h-12 rounded-none font-bold uppercase tracking-wider transition-all duration-300 bg-accent text-white hover:bg-accent/90"
                        >
                          <span className="flex items-center gap-2">
                            Invia messaggio
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </div>
                    </form>
                  </div>
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

export default Contatti;
