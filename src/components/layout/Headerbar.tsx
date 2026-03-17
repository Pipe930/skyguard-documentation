import { lazy, Suspense, useEffect, useState } from "react";
import { Github, Moon, Sun, Search, Menu } from "lucide-react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import type { Theme } from "../../types";

const SearchModal = lazy(() => import("./SearchModal"));

function Headerbar({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    return storedTheme ?? "dark";
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
        <button
          type="button"
          className="navbar-menu-button"
          onClick={onToggleSidebar}
          aria-label="Abrir menú lateral"
        >
          <Menu size={20} />
        </button>

        <img src="/skyguard-documentation//Skyguard-js-icon.ico" alt="Logo" className="navbar-logo" />
        <Link to="/">
          <span className="navbar-title">Skyguard Docs</span>
        </Link>
        </div>

        <div className="navbar-center">
          <button
            type="button"
            className="search-box search-trigger"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={18} className="search-icon" />
            <span className="search-placeholder">Search documentation...</span>
          </button>
        </div>

        <div className="navbar-right">
          <a
            href="https://github.com/Pipe930/Skyguard-js"
            target="_blank"
            rel="noreferrer"
            className="navbar-icon"
            aria-label="Github"
          >
            <Github size={20} />
          </a>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </header>

      {isSearchOpen ? (
        <Suspense fallback={null}>
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </Suspense>
      ) : null}
    </>
  );
}

export default Headerbar;
