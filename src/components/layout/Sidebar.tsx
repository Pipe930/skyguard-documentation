import { NavLink } from "react-router-dom";
import {
  X,
} from "lucide-react";
import "../../styles/sidebar.css";
import type { SidebarProps } from "../../interfaces/sidebar.interface";
import { docsNavigation } from "../../data/docsNavigation";

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
                      <span className="sidebar-link-icon">
                        <link.icon size={18} />
                      </span>
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
