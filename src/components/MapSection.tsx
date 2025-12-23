import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="bg-neutral-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Dove siamo</h2>
            <p className="text-white/50 text-sm">Via Piantada, 6 - 25036 Palazzolo S/O (BS)</p>
          </div>
        </div>

        <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1234567890123!2d9.8876!3d45.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781578ca1234567%3A0x1234567890abcdef!2sVia%20Piantada%2C%206%2C%2025036%20Palazzolo%20sull&#39;Oglio%20BS!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AB Trasformatori - Sede"
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
