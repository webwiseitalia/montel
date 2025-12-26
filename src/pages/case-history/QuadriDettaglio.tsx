import CaseHistoryArticle from "./CaseHistoryArticle";

const QuadriDettaglio = () => {
  const sidebarLinks = [
    { label: "Quadri elettrici", href: "/case-history/quadri-elettrici/dettaglio", active: true },
  ];

  return (
    <CaseHistoryArticle
      title="Quadri elettrici"
      category="Quadri elettrici"
      categoryHref="/case-history/quadri-elettrici"
      sidebarLinks={sidebarLinks}
    />
  );
};

export default QuadriDettaglio;
