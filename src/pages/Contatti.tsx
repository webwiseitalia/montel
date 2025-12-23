import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, FileText, ArrowRight, Gauge, Cable, LayoutGrid, Thermometer } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const Contatti = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    azienda: "",
    email: "",
    telefono: "",
    messaggio: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("[Placeholder: Form inviato con successo]");
    setFormData({
      nome: "",
      cognome: "",
      azienda: "",
      email: "",
      telefono: "",
      messaggio: "",
      privacy: false,
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

  const productLinks = [
    { icon: Gauge, label: "Sensori di livello carburante", href: "/prodotti/sensori-livello-carburante" },
    { icon: Cable, label: "Cablaggi elettrici", href: "/prodotti/cablaggi-elettrici" },
    { icon: LayoutGrid, label: "Quadri elettrici", href: "/prodotti/quadri-elettrici" },
    { icon: Thermometer, label: "Sonde di temperatura", href: "/prodotti/sonde-temperatura" },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className={`py-12 lg:py-16 ${isDark ? "bg-white/5" : "bg-black/5"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
              Contatti
            </h1>
            <p className={`text-lg max-w-2xl ${isDark ? "text-white/70" : "text-black/70"}`}>
              Siamo a disposizione per rispondere alle tue domande su prodotti, servizi e collaborazioni.
              Compila il form o contattaci direttamente.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left Column - Company Info */}
              <div className="lg:col-span-4 space-y-8">
                {/* Dati aziendali */}
                <div>
                  <h2 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
                    Dati aziendali
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className={`font-medium ${isDark ? "text-white" : "text-black"}`}>
                          Mont.El Apparecchiature Elettroelettroniche S.r.l.
                        </p>
                        <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                          Via Mazzini, 31/B
                        </p>
                        <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                          25057 Sale Marasino (BS) – Italia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <a
                          href="tel:+39030986300"
                          className={`hover:text-accent transition-colors block ${isDark ? "text-white/70" : "text-black/70"}`}
                        >
                          +39 030 986300
                        </a>
                        <span className={`text-sm ${isDark ? "text-white/50" : "text-black/50"}`}>
                          Fax: +39 030 9867069
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                      <a
                        href="mailto:info@montel.it"
                        className={`hover:text-accent transition-colors ${isDark ? "text-white/70" : "text-black/70"}`}
                      >
                        info@montel.it
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className={isDark ? "text-white/70" : "text-black/70"}>
                        Lun - Ven: 8:00 - 17:30
                      </span>
                    </div>
                  </div>
                </div>

                {/* Link rapidi prodotti */}
                <div>
                  <h2 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
                    I nostri prodotti
                  </h2>
                  <div className="space-y-3">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`group flex items-center gap-3 p-3 border transition-all hover:border-accent ${
                          isDark
                            ? "border-white/10 hover:bg-white/5"
                            : "border-black/10 hover:bg-black/5"
                        }`}
                      >
                        <link.icon className="w-5 h-5 text-accent" />
                        <span className={`flex-1 text-sm ${isDark ? "text-white/70" : "text-black/70"}`}>
                          {link.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-8">
                <div className={`p-8 lg:p-10 border ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}>
                  <h2 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                    Richiedi informazioni
                  </h2>
                  <p className={`mb-8 ${isDark ? "text-white/60" : "text-black/60"}`}>
                    Compila il form per essere ricontattato dal nostro team commerciale e tecnico.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome e Cognome */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="nome"
                          className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                        >
                          Nome *
                        </label>
                        <div className="relative">
                          <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? "text-white/30" : "text-black/30"}`} />
                          <Input
                            id="nome"
                            name="nome"
                            type="text"
                            required
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Il tuo nome"
                            className={`pl-10 h-12 rounded-none border-2 ${
                              isDark
                                ? "bg-white/5 border-white/10 text-white placeholder:text-white/40"
                                : "bg-white border-black/10 text-black placeholder:text-black/40"
                            }`}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="cognome"
                          className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                        >
                          Cognome *
                        </label>
                        <Input
                          id="cognome"
                          name="cognome"
                          type="text"
                          required
                          value={formData.cognome}
                          onChange={handleChange}
                          placeholder="Il tuo cognome"
                          className={`h-12 rounded-none border-2 ${
                            isDark
                              ? "bg-white/5 border-white/10 text-white placeholder:text-white/40"
                              : "bg-white border-black/10 text-black placeholder:text-black/40"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Azienda e Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="azienda"
                          className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                        >
                          Azienda
                        </label>
                        <Input
                          id="azienda"
                          name="azienda"
                          type="text"
                          value={formData.azienda}
                          onChange={handleChange}
                          placeholder="Nome azienda"
                          className={`h-12 rounded-none border-2 ${
                            isDark
                              ? "bg-white/5 border-white/10 text-white placeholder:text-white/40"
                              : "bg-white border-black/10 text-black placeholder:text-black/40"
                          }`}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                        >
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? "text-white/30" : "text-black/30"}`} />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="La tua email"
                            className={`pl-10 h-12 rounded-none border-2 ${
                              isDark
                                ? "bg-white/5 border-white/10 text-white placeholder:text-white/40"
                                : "bg-white border-black/10 text-black placeholder:text-black/40"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Telefono */}
                    <div>
                      <label
                        htmlFor="telefono"
                        className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                      >
                        Telefono
                      </label>
                      <div className="relative">
                        <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? "text-white/30" : "text-black/30"}`} />
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="Il tuo numero di telefono"
                          className={`pl-10 h-12 rounded-none border-2 ${
                            isDark
                              ? "bg-white/5 border-white/10 text-white placeholder:text-white/40"
                              : "bg-white border-black/10 text-black placeholder:text-black/40"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Messaggio */}
                    <div>
                      <label
                        htmlFor="messaggio"
                        className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isDark ? "text-white/60" : "text-black/60"}`}
                      >
                        Messaggio *
                      </label>
                      <div className="relative">
                        <MessageSquare className={`absolute left-3 top-3 w-4 h-4 ${isDark ? "text-white/30" : "text-black/30"}`} />
                        <Textarea
                          id="messaggio"
                          name="messaggio"
                          required
                          rows={5}
                          value={formData.messaggio}
                          onChange={handleChange}
                          placeholder="Descrivi la tua richiesta..."
                          className={`pl-10 pt-3 rounded-none border-2 resize-none ${
                            isDark
                              ? "bg-white/5 border-white/10 text-white placeholder:text-white/40"
                              : "bg-white border-black/10 text-black placeholder:text-black/40"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Privacy checkbox */}
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacy}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, privacy: checked as boolean })
                        }
                        required
                        className="mt-1"
                      />
                      <label
                        htmlFor="privacy"
                        className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}
                      >
                        Ho letto e accetto la{" "}
                        <Link to="/privacy" className="text-accent hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        e acconsento al trattamento dei miei dati personali ai sensi del GDPR. *
                      </label>
                    </div>

                    {/* Captcha placeholder */}
                    <div className={`p-4 border ${isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
                      <p className={`text-sm ${isDark ? "text-white/50" : "text-black/50"}`}>
                        [Placeholder: Captcha - verifica di sicurezza]
                      </p>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                      <p className={`text-xs ${isDark ? "text-white/40" : "text-black/40"}`}>
                        * Campi obbligatori
                      </p>
                      <Button
                        type="submit"
                        className="px-8 h-12 rounded-none font-bold uppercase tracking-wider bg-accent text-white hover:bg-accent/90"
                      >
                        <span className="flex items-center gap-2">
                          Invia messaggio
                          <Send className="w-4 h-4" />
                        </span>
                      </Button>
                    </div>
                  </form>
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
