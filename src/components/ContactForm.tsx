import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

interface ContactFormProps {
  variant?: "light" | "dark";
}

const ContactForm = ({ variant = "dark" }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Grazie per averci contattato! Ti risponderemo al più presto.");
    setFormData({
      nome: "",
      email: "",
      telefono: "",
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

  const isLight = variant === "light";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nome e Email in grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="group">
          <label
            htmlFor="nome"
            className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isLight ? "text-black/70" : "text-white/60"}`}
          >
            Nome *
          </label>
          <div className="relative">
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${isLight ? "text-black/30" : "text-white/30"} group-focus-within:text-accent transition-colors`}>
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
              className={`pl-10 h-12 rounded-none border-2 transition-all duration-300 focus:ring-0 ${isLight
                ? "bg-white/80 border-black/10 text-black placeholder:text-black/40 focus:border-black focus:bg-white"
                : "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent focus:bg-white/10"
              }`}
            />
          </div>
        </div>

        <div className="group">
          <label
            htmlFor="email"
            className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isLight ? "text-black/70" : "text-white/60"}`}
          >
            Email *
          </label>
          <div className="relative">
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${isLight ? "text-black/30" : "text-white/30"} group-focus-within:text-accent transition-colors`}>
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
              className={`pl-10 h-12 rounded-none border-2 transition-all duration-300 focus:ring-0 ${isLight
                ? "bg-white/80 border-black/10 text-black placeholder:text-black/40 focus:border-black focus:bg-white"
                : "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent focus:bg-white/10"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Telefono */}
      <div className="group">
        <label
          htmlFor="telefono"
          className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isLight ? "text-black/70" : "text-white/60"}`}
        >
          Telefono
        </label>
        <div className="relative">
          <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${isLight ? "text-black/30" : "text-white/30"} group-focus-within:text-accent transition-colors`}>
            <Phone className="w-4 h-4" />
          </div>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Il tuo numero"
            className={`pl-10 h-12 rounded-none border-2 transition-all duration-300 focus:ring-0 ${isLight
              ? "bg-white/80 border-black/10 text-black placeholder:text-black/40 focus:border-black focus:bg-white"
              : "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent focus:bg-white/10"
            }`}
          />
        </div>
      </div>

      {/* Messaggio */}
      <div className="group">
        <label
          htmlFor="messaggio"
          className={`text-xs font-medium uppercase tracking-wider mb-2 block ${isLight ? "text-black/70" : "text-white/60"}`}
        >
          Messaggio *
        </label>
        <div className="relative">
          <div className={`absolute left-3 top-3 ${isLight ? "text-black/30" : "text-white/30"} group-focus-within:text-accent transition-colors`}>
            <MessageSquare className="w-4 h-4" />
          </div>
          <Textarea
            id="messaggio"
            name="messaggio"
            required
            rows={4}
            value={formData.messaggio}
            onChange={handleChange}
            placeholder="Descrivi la tua richiesta..."
            className={`pl-10 pt-3 rounded-none border-2 transition-all duration-300 focus:ring-0 resize-none ${isLight
              ? "bg-white/80 border-black/10 text-black placeholder:text-black/40 focus:border-black focus:bg-white"
              : "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent focus:bg-white/10"
            }`}
          />
        </div>
      </div>

      {/* Footer con nota e bottone */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className={`text-xs ${isLight ? "text-black/50" : "text-white/40"}`}>
          * Campi obbligatori
        </p>
        <Button
          type="submit"
          className={`group relative overflow-hidden px-8 h-12 rounded-none font-bold uppercase tracking-wider transition-all duration-300 ${isLight
            ? "bg-black text-white hover:bg-neutral-800"
            : "bg-accent text-white hover:bg-accent/90"
          }`}
        >
          <span className="flex items-center gap-2">
            Invia richiesta
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
