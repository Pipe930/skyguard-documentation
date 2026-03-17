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
  translationKey?: string;
  to: string;
  icon: LucideIcon;
}

export interface DocsNavigationSection {
  title: string;
  translationKey?: string;
  links: DocsNavigationLink[];
}

export const docsNavigation: DocsNavigationSection[] = [
  {
    title: "Empezando",
    translationKey: "sidebar.sections.gettingStarted.title",
    links: [
      {
        label: "Introducción",
        translationKey: "sidebar.sections.gettingStarted.links.introduction",
        to: "/docs/introduction",
        icon: BookOpen,
      },
      {
        label: "Instalación",
        translationKey: "sidebar.sections.gettingStarted.links.installation",
        to: "/docs/installation",
        icon: Files,
      },
      {
        label: "Inicio Rápido",
        translationKey: "sidebar.sections.gettingStarted.links.quickStart",
        to: "/docs/getting-started",
        icon: Rocket,
      },
    ],
  },
  {
    title: "Conceptos Básicos",
    translationKey: "sidebar.sections.basics.title",
    links: [
      {
        label: "Enrutamiento",
        translationKey: "sidebar.sections.basics.links.routing",
        to: "/docs/routing",
        icon: Route,
      },
      {
        label: "Middlewares",
        translationKey: "sidebar.sections.basics.links.middlewares",
        to: "/docs/middlewares",
        icon: Plug,
      },
      {
        label: "Validación",
        translationKey: "sidebar.sections.basics.links.validation",
        to: "/docs/validation",
        icon: ListChecks,
      },
      {
        label: "Contexto",
        translationKey: "sidebar.sections.basics.links.context",
        to: "/docs/context",
        icon: ArrowRightLeft,
      },
      {
        label: "Excepciones",
        translationKey: "sidebar.sections.basics.links.exceptions",
        to: "/docs/exceptions",
        icon: TriangleAlert,
      },
    ],
  },
  {
    title: "Configuración",
    translationKey: "sidebar.sections.configuration.title",
    links: [
      {
        label: "Configuración Básica",
        translationKey: "sidebar.sections.configuration.links.basicConfiguration",
        to: "/docs/basic-configuration",
        icon: Settings,
      },
      {
        label: "Motor de Plantillas",
        translationKey: "sidebar.sections.configuration.links.templateEngine",
        to: "/docs/engine-templates",
        icon: Code,
      },
    ],
  },
  {
    title: "Seguridad",
    translationKey: "sidebar.sections.security.title",
    links: [
      {
        label: "Autenticación",
        translationKey: "sidebar.sections.security.links.authentication",
        to: "/docs/authentication",
        icon: ShieldCheck,
      },
      {
        label: "Encriptación & Hashing",
        translationKey: "sidebar.sections.security.links.encryptionHashing",
        to: "/docs/encryption-hashing",
        icon: Lock,
      },
      {
        label: "CORS",
        translationKey: "sidebar.sections.security.links.cors",
        to: "/docs/cors",
        icon: Globe,
      },
      {
        label: "CSRF Protección",
        translationKey: "sidebar.sections.security.links.csrfProtection",
        to: "/docs/csrf-protection",
        icon: ShieldAlert,
      },
      {
        label: "Limitador de Peticiones",
        translationKey: "sidebar.sections.security.links.rateLimiting",
        to: "/docs/rate-limiting",
        icon: GaugeCircle,
      },
    ],
  },
];

export const docsPages = docsNavigation.flatMap(section =>
  section.links.map(({ label, translationKey, to }) => ({ label, translationKey, to })),
);
