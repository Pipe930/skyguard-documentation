import { useEffect, useState } from "react";
import { Github, Twitter, Moon, Sun, Search } from "lucide-react";
import "../../styles/navbar.css";

type Theme = "light" | "dark";

function Navbar() {
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
    <header className="navbar">
      <div className="navbar-left">
        <img src="/Skyguard-js-icon.ico" alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Skyguard Docs</span>
      </div>

      <div className="navbar-center">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="search"
            placeholder="Search documentation..."
            className="search-input"
          />
        </div>
      </div>

      <div className="navbar-right">
        <a href="#" className="navbar-icon">
          <Github size={20} />
        </a>

        <a href="#" className="navbar-icon">
          <Twitter size={20} />
        </a>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
