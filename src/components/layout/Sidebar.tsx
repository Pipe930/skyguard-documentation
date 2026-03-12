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
  ListChecks,
} from "lucide-react";
import "../../styles/sidebar.css";
import type { SidebarProps } from "../../interfaces/sidebar.interface";

const docsNavigation = [
  {
    title: "Getting Started",
    links: [
      {
        label: "Introduction",
        to: "/docs/introduction",
        icon: <BookOpen size={18} />,
      },
      {
        label: "Installation",
        to: "/docs/installation",
        icon: <Files size={18} />,
      },
      {
        label: "Quick Start",
        to: "/docs/getting-started",
        icon: <Rocket size={18} />,
      },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      {
        label: "Routing",
        to: "/docs/routing",
        icon: <Route size={18} />,
      },
      {
        label: "Middlewares",
        to: "/docs/middlewares",
        icon: <Plug size={18} />,
      },
      {
        label: "Validation",
        to: "/docs/validation",
        icon: <ListChecks size={18} />,
      },
      {
        label: "Security",
        to: "/docs/security",
        icon: <Shield size={18} />,
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

function Sidebar({ isMobileOpen, onCloseMobile }: SidebarProps) {
  return (
    <>
      <div
        className={`sidebar-backdrop ${isMobileOpen ? "sidebar-backdrop-visible" : ""}`}
        onClick={onCloseMobile}
      />

      <aside className={`sidebar ${isMobileOpen ? "sidebar-mobile-open" : ""}`}>
        <div className="sidebar-mobile-header">
          <img src="/Skyguard-js-icon.ico" alt="Logo" className="navbar-logo" />
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
