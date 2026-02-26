// src/data/projects.ts
// Fuente única de verdad para todos los proyectos.
// Se importa tanto en PortfolioSection (home) como en /portfolio.

export interface Project {
  slug: string;
  titulo: string;
  tipo: string; // etiqueta corta (ej: "Web + Booking")
  descripcion: string; // 1-2 frases para la card
  tags: string[]; // tecnologías / disciplinas
  url: string; // URL live del proyecto
  color: string; // color de fondo de la card placeholder
  colorAccent: string; // color de acento para detalles
  año: string;
  destacado: boolean; // aparece en el home
}

export const projects: Project[] = [
  {
    slug: "ortofisio-valencia",
    titulo: "OrtoFisio Valencia",
    tipo: "Web completa · Salud",
    descripcion:
      "Web para clínica de fisioterapia en Benimaclet. Servicios, equipo, galería, FAQ y reserva por Calendly. Diseño limpio con foco en conversión mobile.",
    tags: ["Astro", "Mobile-first", "Fisioterapia", "Reservas"],
    url: "https://ortofisio-valencia.vercel.app/",
    color: "#D4EAE0",
    colorAccent: "#2D7A5F",
    año: "2026",
    destacado: true
  },
  {
    slug: "aura-beauty",
    titulo: "Aura Beauty",
    tipo: "Landing · Belleza",
    descripcion:
      "Landing para estética local en Valencia. Servicios, galería, opiniones reales y reserva rápida por WhatsApp. Pensada para convertir desde móvil.",
    tags: ["Astro", "WhatsApp CTA", "Estética", "Local SEO"],
    url: "https://aura-beauty-demo.vercel.app/",
    color: "#F5E6F0",
    colorAccent: "#B5477A",
    año: "2026",
    destacado: true
  },
  {
    slug: "mimas-iconic",
    titulo: "Mimas Iconic",
    tipo: "Web + PWA · Nail Art",
    descripcion:
      "Web completa para nail artist en Valencia. Booking online, galería de diseños, offline-ready como PWA y experiencia de marca muy cuidada.",
    tags: ["Astro", "PWA", "Booking", "Nail Art"],
    url: "https://mimas-iconic-astro.vercel.app/",
    color: "#EDE4F5",
    colorAccent: "#7A3A9A",
    año: "2026",
    destacado: true
  },
  {
    slug: "portfolio-personal",
    titulo: "Portfolio Personal",
    tipo: "Portfolio · Marca personal",
    descripcion:
      "Mi portfolio anterior: proyectos, stack técnico y contacto. Diseño tipográfico con foco en personalidad y storytelling visual.",
    tags: ["Astro", "Diseño UI", "Portfolio", "Marca personal"],
    url: "https://portfolio-sepia-pi-74.vercel.app/",
    color: "#E8F0F5",
    colorAccent: "#1A4A6E",
    año: "2026",
    destacado: true
  }
];

export const featuredProjects = projects.filter((p) => p.destacado);
