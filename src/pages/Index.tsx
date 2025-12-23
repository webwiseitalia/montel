import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import PageSections from "@/components/PageSections";
import CatalogCTA from "@/components/CatalogCTA";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

const Index = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      <Header />
      <main>
        <Hero />
        <ProductsGrid />
        <AboutSection />
        <CertificationsSection />
        <PageSections />
        <CatalogCTA />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
