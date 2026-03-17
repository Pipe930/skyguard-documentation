import { useEffect, useState } from "react";
import { Github, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import type { Theme } from "../../types";

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
        <img src="/skyguard-documentation//Skyguard-js-icon.ico" alt="Logo" className="navbar-logo" />
      </div>

      <nav className="home-navbar-links" aria-label="Navegación principal">
        <Link to="/docs/introduction" className="navbar-home-link">
          Empezar
        </Link>
        <Link to="/docs" className="navbar-home-link">
          Documentación
        </Link>
        <a
          href="https://github.com/Pipe930/Skyguard-js"
          target="_blank"
          rel="noreferrer"
          className="navbar-home-link github-link"
        >
          <span>Codigo Github</span>
          <Github />
        </a>
      </nav>

      <div className="navbar-right">
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
}

export default HomeNavbar;
