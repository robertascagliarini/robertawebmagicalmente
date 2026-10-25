import { CLIENT, getProgram } from '../../config/client.js'

const COLUMNS = [
  {
    title: 'Servicios',
    links: [
      { href: getProgram('bms').href, label: 'Black Moon Strategy' },
      { href: getProgram('lab').href, label: 'Content Lab' },
    ],
  },
  {
    title: 'Gratis',
    links: [
      { href: '/#recursos', label: 'Reto de visibilidad' },
      { href: '/#recursos', label: 'Consultoría 30 min' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { href: CLIENT.social.instagram, label: 'Instagram', external: true },
      { href: `mailto:${CLIENT.email}`, label: 'Email' },
    ],
  },
  {
    title: 'Legal',
    links: CLIENT.legal.links.map(l => ({ href: l.to, label: l.label })),
  },
]

export default function SiteFooter() {
  return (
    <footer className="r-footer">
      <div className="r-wrap">
        <div className="r-footer__cols">
          {COLUMNS.map(c => (
            <div key={c.title}>
              <p className="r-footer__title">{c.title}</p>
              <ul>
                {c.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="r-footer__logo" aria-hidden="true">{CLIENT.name}</p>
        <p className="r-footer__legal">© {new Date().getFullYear()} {CLIENT.name}</p>
      </div>
    </footer>
  )
}
