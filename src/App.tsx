import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Azienda
import Azienda from "./pages/Azienda";
import PuntiDiForza from "./pages/azienda/PuntiDiForza";
import Network from "./pages/azienda/Network";

// Prodotti
import Prodotti from "./pages/Prodotti";
import SensoriLivelloCarburante from "./pages/prodotti/SensoriLivelloCarburante";
import CablaggiElettrici from "./pages/prodotti/CablaggiElettrici";
import QuadriElettrici from "./pages/prodotti/QuadriElettrici";
import SondeTemperatura from "./pages/prodotti/SondeTemperatura";

// Settori
import Settori from "./pages/Settori";

// Qualità
import Qualita from "./pages/Qualita";
import Codesign from "./pages/qualita/Codesign";
import Tecnologia from "./pages/qualita/Tecnologia";
import Certificazioni from "./pages/qualita/Certificazioni";
import Brevetti from "./pages/qualita/Brevetti";
import Riconoscimenti from "./pages/qualita/Riconoscimenti";

// Servizi
import Servizi from "./pages/Servizi";
import Progettazione from "./pages/servizi/Progettazione";
import Produzione from "./pages/servizi/Produzione";

// Case History
import CaseHistory from "./pages/CaseHistory";
import CaseHistorySensori from "./pages/case-history/SensoriLivelloCarburante";
import SensoriResistivi from "./pages/case-history/SensoriResistivi";
import CaseHistoryCablaggi from "./pages/case-history/CablaggiElettrici";
import CablaggiAuto from "./pages/case-history/cablaggi/Auto";
import CablaggiMoto from "./pages/case-history/cablaggi/Moto";
import CablaggiCondizionamento from "./pages/case-history/cablaggi/Condizionamento";
import CablaggiVending from "./pages/case-history/cablaggi/Vending";
import CablaggiElettromedicali from "./pages/case-history/cablaggi/Elettromedicali";
import CaseHistoryQuadri from "./pages/case-history/QuadriElettrici";
import QuadriDettaglio from "./pages/case-history/QuadriDettaglio";

// Sostenibilità
import Sostenibilita from "./pages/Sostenibilita";
import EtichettaturaAmbientale from "./pages/sostenibilita/EtichettaturaAmbientale";

// Contatti
import Contatti from "./pages/Contatti";

// Pagine legali
import CookiePolicy from "./pages/CookiePolicy";
import Privacy from "./pages/Privacy";
import CondizioniAcquisto from "./pages/CondizioniAcquisto";
import CondizioniFornitura from "./pages/CondizioniFornitura";
import Whistleblowing from "./pages/Whistleblowing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* Azienda */}
            <Route path="/azienda" element={<Azienda />} />
            <Route path="/azienda/punti-di-forza" element={<PuntiDiForza />} />
            <Route path="/azienda/network" element={<Network />} />

            {/* Prodotti */}
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/prodotti/sensori-livello-carburante" element={<SensoriLivelloCarburante />} />
            <Route path="/prodotti/cablaggi-elettrici" element={<CablaggiElettrici />} />
            <Route path="/prodotti/quadri-elettrici" element={<QuadriElettrici />} />
            <Route path="/prodotti/sonde-temperatura" element={<SondeTemperatura />} />

            {/* Settori */}
            <Route path="/settori" element={<Settori />} />

            {/* Qualità */}
            <Route path="/qualita" element={<Qualita />} />
            <Route path="/qualita/codesign" element={<Codesign />} />
            <Route path="/qualita/tecnologia" element={<Tecnologia />} />
            <Route path="/qualita/certificazioni" element={<Certificazioni />} />
            <Route path="/qualita/brevetti" element={<Brevetti />} />
            <Route path="/qualita/riconoscimenti" element={<Riconoscimenti />} />

            {/* Servizi */}
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/servizi/progettazione" element={<Progettazione />} />
            <Route path="/servizi/produzione" element={<Produzione />} />

            {/* Case History */}
            <Route path="/case-history" element={<CaseHistory />} />
            <Route path="/case-history/sensori-livello-carburante" element={<CaseHistorySensori />} />
            <Route path="/case-history/sensori-livello-carburante/resistivi" element={<SensoriResistivi />} />
            <Route path="/case-history/cablaggi-elettrici" element={<CaseHistoryCablaggi />} />
            <Route path="/case-history/cablaggi-elettrici/auto" element={<CablaggiAuto />} />
            <Route path="/case-history/cablaggi-elettrici/moto" element={<CablaggiMoto />} />
            <Route path="/case-history/cablaggi-elettrici/condizionamento" element={<CablaggiCondizionamento />} />
            <Route path="/case-history/cablaggi-elettrici/vending" element={<CablaggiVending />} />
            <Route path="/case-history/cablaggi-elettrici/elettromedicali" element={<CablaggiElettromedicali />} />
            <Route path="/case-history/quadri-elettrici" element={<CaseHistoryQuadri />} />
            <Route path="/case-history/quadri-elettrici/dettaglio" element={<QuadriDettaglio />} />

            {/* Sostenibilità */}
            <Route path="/sostenibilita" element={<Sostenibilita />} />
            <Route path="/sostenibilita/etichettatura-ambientale" element={<EtichettaturaAmbientale />} />

            {/* Contatti */}
            <Route path="/contatti" element={<Contatti />} />

            {/* Pagine legali */}
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/condizioni-acquisto" element={<CondizioniAcquisto />} />
            <Route path="/condizioni-fornitura" element={<CondizioniFornitura />} />
            <Route path="/whistleblowing" element={<Whistleblowing />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
