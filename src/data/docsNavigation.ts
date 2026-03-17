import type { LucideIcon } from "lucide-react";
import {
  ArrowRightLeft,
  BookOpen,
  Code,
  Files,
  GaugeCircle,
  Globe,
  ListChecks,
  Lock,
  Plug,
  Rocket,
  Route,
  Settings,
  ShieldAlert,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export interface DocsNavigationLink {
  label: string;
  to: string;
  icon: LucideIcon;
}

export interface DocsNavigationSection {
  title: string;
  links: DocsNavigationLink[];
}

export const docsNavigation: DocsNavigationSection[] = [
  {
    title: "Empezando",
    links: [
      {
        label: "Introducción",
        to: "/docs/introduction",
        icon: BookOpen,
      },
      {
        label: "Instalación",
        to: "/docs/installation",
        icon: Files,
      },
      {
        label: "Inicio Rápido",
        to: "/docs/getting-started",
        icon: Rocket,
      },
    ],
  },
  {
    title: "Conceptos Básicos",
    links: [
      {
        label: "Enrutamiento",
        to: "/docs/routing",
        icon: Route,
      },
      {
        label: "Middlewares",
        to: "/docs/middlewares",
        icon: Plug,
      },
      {
        label: "Validación",
        to: "/docs/validation",
        icon: ListChecks,
      },
      {
        label: "Contexto",
        to: "/docs/context",
        icon: ArrowRightLeft,
      },
      {
        label: "Excepciones",
        to: "/docs/exceptions",
        icon: TriangleAlert,
      },
    ],
  },
  {
    title: "Configuración",
    links: [
      {
        label: "Configuración Básica",
        to: "/docs/basic-configuration",
        icon: Settings,
      },
      {
        label: "Motor de Plantillas",
        to: "/docs/engine-templates",
        icon: Code,
      },
    ],
  },
  {
    title: "Seguridad",
    links: [
      {
        label: "Autenticación",
        to: "/docs/authentication",
        icon: ShieldCheck,
      },
      {
        label: "Encriptación & Hashing",
        to: "/docs/encryption-hashing",
        icon: Lock,
      },
      {
        label: "CORS",
        to: "/docs/cors",
        icon: Globe,
      },
      {
        label: "CSRF Protección",
        to: "/docs/csrf-protection",
        icon: ShieldAlert,
      },
      {
        label: "Limitador de Peticiones",
        to: "/docs/rate-limiting",
        icon: GaugeCircle,
      },
    ],
  },
];

export const docsPages = docsNavigation.flatMap(section =>
  section.links.map(({ label, to }) => ({ label, to })),
);
