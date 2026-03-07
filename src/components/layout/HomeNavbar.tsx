import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

type Theme = "light" | "dark";

function HomeNavbar() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    return storedTheme ?? "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="navbar home-navbar">
      <div className="navbar-left">
        <img src="/Skyguard-js-icon.ico" alt="Logo" className="navbar-logo" />
      </div>

      <nav className="home-navbar-links" aria-label="Navegación principal">
        <Link to="/docs/getting-started" className="navbar-home-link">
          Empezar
        </Link>
        <Link to="/docs/getting-started" className="navbar-home-link">
          Documentación
        </Link>
      </nav>

      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}

export default HomeNavbar;
