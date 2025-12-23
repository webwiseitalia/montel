import { Download, FileText, ArrowRight } from "lucide-react";

const CatalogCTA = () => {
  const catalogs = [
    {
      title: "Catalogo Generale",
      description: "Gamma completa trasformatori",
      fileSize: "PDF - 4.2 MB",
    },
    {
      title: "Catalogo Piscine",
      description: "Trasformatori per piscine",
      fileSize: "PDF - 2.1 MB",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-accent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, black 25%, transparent 25%),
              linear-gradient(-45deg, black 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, black 75%),
              linear-gradient(-45deg, transparent 75%, black 75%)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div>
            <span className="text-black/60 text-sm font-medium uppercase tracking-wider mb-4 block">
              Download
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[0.95] mb-6">
              SCARICA I
              <br />
              NOSTRI
              <br />
              CATALOGHI
            </h2>
            <p className="text-black/70 text-lg max-w-md">
              Consulta i nostri cataloghi completi per scoprire tutte le
              caratteristiche tecniche dei nostri prodotti.
            </p>
          </div>

          {/* Right - Catalog Cards */}
          <div className="space-y-4">
            {catalogs.map((catalog, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Download ${catalog.title}`);
                }}
                className="group relative block p-6 bg-black hover:bg-black/90 transition-colors"
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-accent/10 flex items-center justify-center">
                      <FileText className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors">
                        {catalog.title}
                      </h3>
                      <p className="text-white/50 text-sm">{catalog.description}</p>
                      <span className="text-white/30 text-xs mt-1 block">
                        {catalog.fileSize}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-white/40 group-hover:text-accent group-hover:translate-y-1 transition-all" />
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </a>
            ))}

            {/* Extra info */}
            <p className="text-black/50 text-sm pt-4">
              Hai bisogno di documentazione specifica?{" "}
              <a href="/contatti" className="text-black font-medium underline hover:no-underline">
                Contattaci
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogCTA;
