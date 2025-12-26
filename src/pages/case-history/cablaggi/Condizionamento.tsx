import CaseHistoryArticle from "../CaseHistoryArticle";
import { useLocation } from "react-router-dom";

const CablaggiCondizionamento = () => {
  const location = useLocation();

  const sidebarLinks = [
    { label: "Cablaggio per auto", href: "/case-history/cablaggi-elettrici/auto", active: location.pathname.includes("/auto") },
    { label: "Cablaggio per moto", href: "/case-history/cablaggi-elettrici/moto", active: location.pathname.includes("/moto") },
    { label: "Cablaggi per condizionamento", href: "/case-history/cablaggi-elettrici/condizionamento", active: location.pathname.includes("/condizionamento") },
    { label: "Cablaggi per vending", href: "/case-history/cablaggi-elettrici/vending", active: location.pathname.includes("/vending") },
    { label: "Cablaggi elettromedicali", href: "/case-history/cablaggi-elettrici/elettromedicali", active: location.pathname.includes("/elettromedicali") },
  ];

  return (
    <CaseHistoryArticle
      title="Cablaggi per il condizionamento"
      category="Cablaggi elettrici"
      categoryHref="/case-history/cablaggi-elettrici"
      sidebarLinks={sidebarLinks}
    />
  );
};

export default CablaggiCondizionamento;
