import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Rocket,
  Route,
  Plug,
  Files,
  X,
  ListChecks,
  ArrowRightLeft,
  Settings,
  Code,
  Lock,
  ShieldCheck,
  Globe,
  ShieldAlert,
  GaugeCircle,
  TriangleAlert,
} from "lucide-react";
import "../../styles/sidebar.css";
import type { SidebarProps } from "../../interfaces/sidebar.interface";

const docsNavigation = [
  {
    title: "Getting Started",
    links: [
      {
        label: "Introducción",
        to: "/docs/introduction",
        icon: <BookOpen size={18} />,
      },
      {
        label: "Instalación",
        to: "/docs/installation",
        icon: <Files size={18} />,
      },
      {
        label: "Inicio Rápido",
        to: "/docs/getting-started",
        icon: <Rocket size={18} />,
      },
    ],
  },
  {
    title: "Conceptos Básicos",
    links: [
      {
        label: "Enrutamiento",
        to: "/docs/routing",
        icon: <Route size={18} />,
      },
      {
        label: "Middlewares",
        to: "/docs/middlewares",
        icon: <Plug size={18} />,
      },
      {
        label: "Validación",
        to: "/docs/validation",
        icon: <ListChecks size={18} />,
      },
      {
        label: "Contexto",
        to: "/docs/context",
        icon: <ArrowRightLeft size={18} />,
      },
      {
        label: "Excepciones",
        to: "/docs/exceptions",
        icon: <TriangleAlert size={18} />,
      },
    ],
  },
  {
    title: "Configuración",
    links: [
      {
        label: "Configuración Básica",
        to: "/docs/basic-configuration",
        icon: <Settings size={18} />,
      },
      {
        label: "Motor de Plantillas",
        to: "/docs/engine-templates",
        icon: <Code size={18} />,
      },
    ],
  },
  {
    title: "Seguridad",
    links: [
      {
        label: "Autenticación",
        to: "/docs/authentication",
        icon: <ShieldCheck size={18} />,
      },
      {
        label: "Encriptación & Hashing",
        to: "/docs/encryption-hashing",
        icon: <Lock size={18} />,
      },
      {
        label: "CORS",
        to: "/docs/cors",
        icon: <Globe size={18} />,
      },
      {
        label: "CSRF Protección",
        to: "/docs/csrf-protection",
        icon: <ShieldAlert size={18} />,
      },
      {
        label: "Rate Limiting",
        to: "/docs/rate-limiting",
        icon: <GaugeCircle size={18} />,
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
