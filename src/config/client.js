/**
 * src/config/client.js — Black Moon Lab
 * Single source of truth for all client-specific constants.
 */

export const CLIENT = {
  // ── Identity ──────────────────────────────────────────────
  name: 'Magicalmente',
  tagline: 'Marca personal · Astrobranding · Marketing energético',
  menuBlurb: [
    'Estructura, marca y contenido — sin tener que hacerlo sola, y sin traicionar quién eres para conseguirlo.',
    'AstroBranding y Marketing Energético para mujeres que construyen su negocio después de los 40.',
  ],
  description: 'Roberta Scagliarini — mentora de marca personal, estratega de contenido y astróloga. Estructura, marca y contenido para mujeres que construyen su negocio después de los 40, a partir de su Carta Natal.',
  domain: 'blackmoonlab.vercel.app',
  language: 'es',
  schemaType: 'ProfessionalService',
  foundingYear: null,

  // ── Brand assets ──────────────────────────────────────────
  logoSrc: '/brand_assets/black-moon-lab-logo.svg',
  logoAlt: 'Black Moon Lab',

  // ── Contact ───────────────────────────────────────────────
  phone: '+34 620 109 003',
  whatsapp: '34620109003',
  whatsappMessage: 'Hola Roberta, me interesa trabajar contigo.',
  email: 'roberta@magicalmente.com',
  openingHours: '',
  googleBusinessUrl: '',
  primaryCtaAction: 'booking-link',
  bookingUrl: 'https://stan.store/Magicalmente/p/black-moon-lab',

  // ── NIF/CIF (for legal pages) ──────────────────────────────
  nif: 'X2441250F',
  legalName: 'Roberta Scagliarini',

  // ── Locations ─────────────────────────────────────────────
  locations: [],

  // ── Social media ──────────────────────────────────────────
  social: {
    instagram: 'https://www.instagram.com/magical.mente/',
    tiktok: '',
    linkedin: '',
    facebook: '',
    youtube: '',
    twitter: '',
  },

  // ── Navigation ────────────────────────────────────────────
  nav: {
    ctaLabel: 'Únete gratis al reto',
    ctaHref: '/#recursos',
    // Anclas de la home; el prefijo "/" hace que funcionen desde cualquier página
    links: [
      { to: '/#sobre',        label: 'Sobre' },
      { to: '/#black-moon',   label: 'Black Moon Strategy' },
      { to: '/#content-lab',  label: 'Content Lab' },
      { to: '/#recursos',     label: 'Recursos' },
      { to: '/#contacto',     label: 'Contacto' },
    ],
  },

  // ── Recursos gratuitos (home #recursos) ───────────────────
  // ctaHref vacío → el CTA abre WhatsApp con el mensaje indicado.
  // CLAUDE: sustituir por el enlace de inscripción / reserva cuando se defina.
  freebies: {
    reto: {
      ctaHref: '',
      whatsappMessage: 'Hola Roberta, quiero unirme gratis al reto de visibilidad.',
    },
    consultoria: {
      ctaHref: '',
      whatsappMessage: 'Hola Roberta, quiero solicitar la consultoría gratuita de 30 minutos.',
    },
  },

  // ── Programas (Trabaja conmigo) ───────────────────────────
  // ctaHref vacío → el CTA abre WhatsApp con un mensaje sobre ese programa.
  // CLAUDE: rellenar con el enlace de pago / Telegram cuando Roberta lo facilite.
  programs: [
    {
      key: 'bms',
      name: 'Black Moon Strategy',
      href: '/trabaja-conmigo/black-moon-strategy',
      ctaHref: '',
      whatsappMessage: 'Hola Roberta, quiero información sobre Black Moon Strategy.',
    },
    {
      key: 'lab',
      name: 'The Content Lab',
      href: '/trabaja-conmigo/the-content-lab',
      ctaHref: 'https://stan.store/Magicalmente/p/black-moon-lab',
      whatsappMessage: 'Hola Roberta, quiero entrar a The Content Lab.',
    },
    {
      key: 'darkroom',
      name: 'Darkroom',
      href: '/trabaja-conmigo/darkroom',
      ctaHref: '',
      whatsappMessage: 'Hola Roberta, quiero entrar a Darkroom.',
    },
  ],

  // ── Fotos ─────────────────────────────────────────────────
  // Todas se muestran en B/N con grano. Las vacías usan un placeholder.
  // CLAUDE: sustituir por fotos reales en /public/brand_assets/ cuando lleguen.
  photos: {
    roberta: '/brand_assets/roberta.jpg',
  },

  // ── UI strings ────────────────────────────────────────────
  ui: {
    loading: 'Cargando...',
    backToHome: 'Volver al inicio',
    readMore: 'Leer más',
    learnMore: 'Saber más',
    whatsappAriaLabel: 'Escríbenos por WhatsApp',
    closeMenu: 'Cerrar menú',
    openMenu: 'Abrir menú',
    cookieBannerText: 'Usamos cookies para mejorar tu experiencia.',
    cookieBannerAccept: 'Aceptar',
    cookieBannerDecline: 'Rechazar',
    cookieBannerLearnMore: 'Más información',
    openMenuShort: 'Abrir menú',
    closeMenuShort: 'Cerrar menú',
    listenDarkroom: 'Escucha Darkroom',
    faqToggle: 'Mostrar respuesta',
    createdBy: 'Hecho con estructura y energía',
  },

  // ── Analytics ─────────────────────────────────────────────
  analytics: {
    ga4Id: '',
  },

  // ── Brand (mobile browser chrome) ─────────────────────────
  brand: {
    primaryColor: '#0A0A0A',
  },

  // ── Legal page links ──────────────────────────────────────
  legal: {
    links: [
      { to: '/aviso-legal', label: 'Aviso legal' },
      { to: '/politica-de-privacidad', label: 'Privacidad' },
      { to: '/politica-de-cookies', label: 'Cookies' },
    ],
  },
}

// ── Computed helpers ─────────────────────────────────────────
export function whatsappLink(message = CLIENT.whatsappMessage) {
  const msg = message
    ? `?text=${encodeURIComponent(message)}`
    : ''
  return `https://wa.me/${CLIENT.whatsapp}${msg}`
}

export function ctaLink(customHref) {
  if (customHref) return customHref
  switch (CLIENT.primaryCtaAction) {
    case 'whatsapp':      return whatsappLink()
    case 'email':         return `mailto:${CLIENT.email}`
    case 'phone':         return `tel:${CLIENT.phone.replace(/\s/g, '')}`
    case 'booking-link':  return CLIENT.bookingUrl
    case 'contact-form':  return '/contacto'
    default:              return CLIENT.bookingUrl
  }
}

export function getProgram(key) {
  return CLIENT.programs.find(p => p.key === key)
}

// CTA de compra/entrada de un programa: enlace directo o WhatsApp como fallback
export function programCta(key) {
  const p = getProgram(key)
  return p.ctaHref || whatsappLink(p.whatsappMessage)
}

// CTA de un recurso gratuito: enlace directo o WhatsApp como fallback
export function freebieCta(key) {
  const f = CLIENT.freebies[key]
  return f.ctaHref || whatsappLink(f.whatsappMessage)
}

// Placeholder oscuro para huecos de foto sin imagen real
export function placeholderPhoto(w, h, label = 'FOTO') {
  return `https://placehold.co/${w}x${h}/1c1c1c/3a3a3a?text=${encodeURIComponent(label)}&font=roboto`
}
