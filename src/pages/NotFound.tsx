import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const NotFound = () => {
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className={`flex min-h-screen items-center justify-center ${isDark ? "bg-black" : "bg-neutral-100"}`}>
      <div className="text-center">
        <h1 className={`mb-4 text-4xl font-bold ${isDark ? "text-white" : "text-black"}`}>404</h1>
        <p className={`mb-4 text-xl ${isDark ? "text-white/60" : "text-black/60"}`}>Oops! Pagina non trovata</p>
        <a href="/" className="text-accent underline hover:text-accent/80">
          Torna alla Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
