import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Rocket,
  Route,
  Shield,
  Plug,
  Files,
  Settings,
  X,
} from "lucide-react";
import "../../styles/sidebar.css";

const docsNavigation = [
  {
    title: "Getting Started",
    links: [
      {
        label: "Introduction",
        to: "/docs/introduction",
        icon: <BookOpen size={16} />,
      },
      {
        label: "Quick Start",
        to: "/docs/getting-started",
        icon: <Rocket size={16} />,
      },
      {
        label: "Installation",
        to: "/docs/installation",
        icon: <Files size={16} />,
      },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      {
        label: "Routing",
        to: "/docs/routing",
        icon: <Route size={16} />,
      },
      {
        label: "Middleware",
        to: "/docs/middleware",
        icon: <Plug size={16} />,
      },
      {
        label: "Security",
        to: "/docs/security",
        icon: <Shield size={16} />,
      },
    ],
  },
  {
    title: "Advanced",
    links: [
      {
        label: "Configuration",
        to: "/docs/configuration",
        icon: <Settings size={16} />,
      },
    ],
  },
];

interface SidebarProps {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

function Sidebar({ isMobileOpen, onCloseMobile }: SidebarProps) {
  return (
    <>
      <div
        className={`sidebar-backdrop ${isMobileOpen ? "sidebar-backdrop-visible" : ""}`}
        onClick={onCloseMobile}
      />

      <aside className={`sidebar ${isMobileOpen ? "sidebar-mobile-open" : ""}`}>
        <div className="sidebar-mobile-header">
          <img src="/public/Skyguard-js-icon.ico" alt="Logo" className="navbar-logo" />
          <span className="sidebar-mobile-title">Skyguard Docs</span>

          <button
            type="button"
            className="sidebar-close-button"
            onClick={onCloseMobile}
            aria-label="Cerrar menú lateral"
          >
            <X size={18} />
          </button>
        </div>

        <div className="sidebar-scroll">
          {docsNavigation.map(section => (
            <div key={section.title} className="sidebar-section">
              <p className="sidebar-section-title">{section.title}</p>

              <nav className="sidebar-nav">
                {section.links.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={onCloseMobile}
                    className={({ isActive }) =>
                      isActive
                        ? "sidebar-link sidebar-link-active"
                        : "sidebar-link"
                    }
                  >
                    <span className="sidebar-link-icon">{link.icon}</span>
                    <span className="sidebar-link-text">{link.label}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;