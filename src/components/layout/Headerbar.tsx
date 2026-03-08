import { useEffect, useState } from "react";
import { Github, Moon, Sun, Search, Menu } from "lucide-react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";

type Theme = "light" | "dark";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

function Headerbar({ onToggleSidebar }: NavbarProps) {
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

        <img src="/Skyguard-js-icon.ico" alt="Logo" className="navbar-logo" />
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
          <a href="#" className="navbar-icon" aria-label="Github">
            <Github size={20} />
          </a>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

export default Headerbar;
