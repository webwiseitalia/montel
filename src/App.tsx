import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages/Index";
import Prodotti from "./pages/Prodotti";
import TrasformatoriMonofase from "./pages/TrasformatoriMonofase";
import Azienda from "./pages/Azienda";
import Certificati from "./pages/Certificati";
import GuidaTecnica from "./pages/GuidaTecnica";
import Contatti from "./pages/Contatti";
import Indice from "./pages/Indice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/prodotti/trasformatori-monofase" element={<TrasformatoriMonofase />} />
          <Route path="/azienda" element={<Azienda />} />
          <Route path="/certificati" element={<Certificati />} />
          <Route path="/guida-tecnica" element={<GuidaTecnica />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/indice" element={<Indice />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
