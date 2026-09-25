import { CLIENT } from '../../config/client.js'

const ICONS = {
  instagram: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  email: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" />
      <path d="M2 5 L12 13 L22 5 M2 19 L9 11.5 M22 19 L15 11.5" />
    </svg>
  ),
}

export default function Social({ style }) {
  const items = [
    ...Object.entries(CLIENT.social).filter(([k, v]) => v && ICONS[k]).map(([k, v]) => ({ k, href: v, label: k.charAt(0).toUpperCase() + k.slice(1) })),
    { k: 'email', href: `mailto:${CLIENT.email}`, label: CLIENT.email },
  ]
  return (
    <div className="r-social" style={style}>
      {items.map(i => (
        <a key={i.k} href={i.href} aria-label={i.label} target={i.k === 'email' ? undefined : '_blank'} rel="noopener noreferrer">
          {ICONS[i.k]}
        </a>
      ))}
    </div>
  )
}
