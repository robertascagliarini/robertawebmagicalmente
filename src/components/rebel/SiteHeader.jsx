import { useEffect, useState } from 'react'
import { CLIENT, getProgram } from '../../config/client.js'
import Wordmark from './Wordmark.jsx'
import Social from './Social.jsx'
import { Vinyl } from './Objects.jsx'

/**
 * SiteHeader — fixed black bar (wordmark left, tagline right), the round
 * "ABRIR MENÚ" button + spinning vinyl on the right edge, and the
 * full-screen split menu overlay.
 */
export default function SiteHeader({ pathname = '/' }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const darkroom = getProgram('darkroom')

  return (
    <>
      <header className="r-header">
        <a href="/" aria-label={CLIENT.name} style={{ display: 'block', width: 'clamp(170px, 16vw, 222px)' }}>
          <Wordmark />
        </a>
        <span className="r-header__tag">{CLIENT.headerTagline}</span>
      </header>

      <div className="r-side">
        <button
          type="button"
          className={`r-circle${open ? ' is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="r-menu"
          aria-label={open ? CLIENT.ui.closeMenu : CLIENT.ui.openMenu}
        >
          <span dangerouslySetInnerHTML={{ __html: (open ? CLIENT.ui.closeMenuShort : CLIENT.ui.openMenuShort).replace(' ', '<br/>') }} />
        </button>
        <a href={darkroom.href} className="r-circle r-vinyl" aria-label={CLIENT.ui.listenDarkroom}>
          <Vinyl size={45} />
        </a>
      </div>

      <nav id="r-menu" className={`r-menu${open ? ' is-open' : ''}`} aria-hidden={!open} inert={open ? undefined : ''}>
        <div className="r-menu__left">
          <div className="r-photo" style={{ width: 'min(366px, 100%)', aspectRatio: '366 / 238', border: '1px solid var(--cream)', borderRadius: '4px' }}>
            <img src={CLIENT.photos.roberta} alt="" style={{ objectPosition: '50% 30%' }} />
          </div>
          <div className="r-mono-copy r-justify" style={{ marginTop: '56px', maxWidth: '366px', textTransform: 'none', fontSize: '15px', letterSpacing: '0.02em' }}>
            <p>{CLIENT.menuBlurb[0]}</p>
            <p>{CLIENT.menuBlurb[1]}</p>
          </div>
          <Social style={{ marginTop: '56px' }} />
        </div>

        <div className="r-menu__right">
          {CLIENT.nav.links.map(l => (
            <div key={l.to}>
              <a
                href={l.to}
                className={`r-menu__link${l.accent ? ' r-menu__link--accent' : ''}`}
                aria-current={(l.end ? pathname === l.to : pathname.startsWith(l.to)) ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
              {l.to === '/trabaja-conmigo' && (
                <div className="r-menu__sub" style={{ marginTop: '10px' }}>
                  {CLIENT.programs.map(p => (
                    <a key={p.key} href={p.href} onClick={() => setOpen(false)}>☞ {p.name}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop: 'auto', paddingTop: '48px' }}>
            <a href={CLIENT.nav.ctaHref} className="r-btn r-btn--pink">{CLIENT.nav.ctaLabel} ☞</a>
          </div>
        </div>
      </nav>
    </>
  )
}
