import { CLIENT } from '../../config/client.js'
import Wordmark from './Wordmark.jsx'
import Social from './Social.jsx'

export default function SiteFooter() {
  return (
    <footer className="r-footer">
      <div className="r-wrap" style={{ maxWidth: '1200px' }}>
        <Wordmark width="min(1146px, 100%)" style={{ margin: '0 auto' }} />
        <Social style={{ justifyContent: 'center', margin: '44px 0 36px' }} />
        <p className="r-footer__legal">
          ©{new Date().getFullYear()}{' '}
          {CLIENT.legal.links.map((l, i) => (
            <span key={l.to}>
              <a href={l.to}>{l.label}</a>
              {i < CLIENT.legal.links.length - 1 && ' | '}
            </span>
          ))}
        </p>
        <p className="r-footer__legal" style={{ fontSize: '12px' }}>
          {CLIENT.legalName} · NIF {CLIENT.nif}
        </p>
      </div>
    </footer>
  )
}
