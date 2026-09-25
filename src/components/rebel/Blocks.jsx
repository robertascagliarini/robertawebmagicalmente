/**
 * Blocks.jsx — section library modelled on wearerebel.co.
 * Each block maps to one section type of the reference site:
 *
 *   HeroPhoto        full-bleed B&W photo, giant centred headline, white CTA
 *   Statement        huge cream statement with inline objects + typewriter
 *   Split            text column | media column, ruled divider
 *   DarkPhoto        dark photo; white/grey heading right, pink heading left
 *   WordmarkBand     giant wordmark on cream + black statement band
 *   Folder           black file folder on grey paper, centred mono copy
 *   HeadingPhotoSplit photo left, heading bottom-right ("FOUR WAYS IN")
 *   Vol              dark grain "Vol. uno" section with cassette/object
 *   Tracks           3 columns: hand label, heading, mono copy
 *   PhotoStatement   grey photo, huge white heading, body + CTA
 *   Meet             "meet your producers": centred heading over faded photo
 *   FinalCTA         black closing block, pink mono lines, outline button
 *   Boxes            A.N.T.I. outlined boxes
 *   CenterCaps       centred uppercase copy + button
 *   AboutIntro       /about: framed photo + lead + justified copy
 *   FAQ, Rows, FeelList, Pricing, Checklist — program-page extras
 */
import { useEffect, useRef, useState } from 'react'
import { CLIENT } from '../../config/client.js'
import Wordmark from './Wordmark.jsx'
import { Sparkle } from './Objects.jsx'

// ── Primitives ───────────────────────────────────────────────────
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`r-reveal${inView ? ' is-in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  )
}

// Without src it renders a dark grain texture — swap in a real photo via CLIENT.photos
export function Photo({ src, alt = '', position = '50% 50%', shade = false, className = '', style, imgStyle }) {
  return (
    <div className={`r-photo${shade ? ' r-photo--shade' : ''}${src ? '' : ' r-photo--empty'} ${className}`} style={style}>
      {src && <img src={src} alt={alt} loading="lazy" style={{ objectPosition: position, ...imgStyle }} />}
    </div>
  )
}

export function Btn({ href, variant = 'dark', children, style }) {
  const external = /^https?:\/\//.test(href)
  return (
    <a href={href} className={`r-btn r-btn--${variant}`} style={style}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

export function Paras({ items, className = '', style }) {
  return (
    <div className={className} style={style}>
      {items.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  )
}

export function Hi({ children }) {
  return <span className="r-hi" style={{ color: 'var(--accent)' }}>{children}</span>
}

export function InlinePill({ src, position = '50% 30%' }) {
  return (
    <span className="r-inline-pill r-photo" aria-hidden="true">
      <img src={src} alt="" style={{ objectPosition: position }} />
    </span>
  )
}

export function InlineSparkle() {
  return <Sparkle className="r-inline-obj r-spin" color="var(--accent)" style={{ animationDuration: '9s' }} />
}

export function Typewriter({ phrases, className = '', style }) {
  const [i, setI] = useState(0)
  const [n, setN] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const full = phrases[i]
    let t
    if (!del && n < full.length) t = setTimeout(() => setN(n + 1), 45)
    else if (!del && n === full.length) t = setTimeout(() => setDel(true), 2200)
    else if (del && n > 0) t = setTimeout(() => setN(n - 1), 18)
    else { setDel(false); setI((i + 1) % phrases.length) }
    return () => clearTimeout(t)
  }, [n, del, i, phrases])
  return (
    <span className={className} style={style} aria-live="off">
      <span className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>{phrases.join(' ')}</span>
      <span aria-hidden="true">{phrases[i].slice(0, n)}<span className="r-caret" /></span>
    </span>
  )
}

// ── HeroPhoto ────────────────────────────────────────────────────
export function HeroPhoto({ image, position = '50% 25%', title, titleClass = 'r-xl', subtitle, hand, text, cta, maxWidth = '1110px' }) {
  return (
    <section className="r-sec r-dark" style={{ minHeight: 'calc(100svh - var(--r-header))', display: 'flex', alignItems: 'center' }}>
      <Photo src={image} shade position={position} style={{ position: 'absolute', inset: 0 }} />
      <div className="r-wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '140px 16px 120px' }}>
        <Reveal>
          <h1 className={`r-display ${titleClass}`} style={{ maxWidth, margin: '0 auto', color: 'var(--cream)' }}>{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={120}>
            <p className="r-sub" style={{ maxWidth: '980px', margin: '22px auto 0' }}>{subtitle}</p>
          </Reveal>
        )}
        {hand && (
          <Reveal delay={200} style={{ maxWidth: '940px', margin: '14px auto 0', textAlign: 'right' }}>
            <span className="r-hand">{hand}</span>
          </Reveal>
        )}
        {text && (
          <Reveal delay={240}>
            <p className="r-mono-copy" style={{ maxWidth: '640px', margin: '28px auto 0' }}>{text}</p>
          </Reveal>
        )}
        {cta && (
          <Reveal delay={300} style={{ marginTop: '28px' }}>
            <Btn href={cta.href} variant="light">{cta.label}</Btn>
          </Reveal>
        )}
      </div>
    </section>
  )
}

// ── Statement ────────────────────────────────────────────────────
export function Statement({ hand, children, typed, typedClass = '', floater, after, id }) {
  return (
    <section id={id} className="r-sec r-light" style={{ padding: 'clamp(120px, 18vw, 260px) 0 clamp(120px, 14vw, 220px)' }}>
      <div className="r-narrow" style={{ position: 'relative', width: 'min(1080px, 100%)' }}>
        {hand && <Reveal><span className="r-hand" style={{ marginBottom: '18px' }}>{hand}</span></Reveal>}
        <Reveal delay={80}>
          <h2 className="r-display" style={{ lineHeight: 0.92, fontSize: 'clamp(46px, 6.4vw, 94px)' }}>{children}</h2>
        </Reveal>
        {typed && (
          <div style={{ marginTop: '34px', minHeight: '3.6em' }}>
            <Typewriter phrases={typed} className={`r-hand r-hand--ink ${typedClass}`} style={{ fontSize: 'clamp(20px, 2.4vw, 36px)', transform: 'rotate(-1deg)', maxWidth: '900px' }} />
          </div>
        )}
        {after}
        {floater && (
          <div className="r-float r-floater" style={{ position: 'absolute', right: '-2%', bottom: '-210px', '--rot': '-8deg', pointerEvents: 'none' }}>
            {floater}
          </div>
        )}
      </div>
    </section>
  )
}

// ── Split ────────────────────────────────────────────────────────
export function Split({ id, title, titleClass = 'r-md', hand, handAbove, children, media, mediaPad = false, cta, ctaVariant, reverse = false, tone = 'light', copyClass = 'r-body-copy' }) {
  const text = (
    <div style={{ padding: 'clamp(56px, 6vw, 80px) clamp(20px, 9.5vw, 138px) clamp(56px, 6vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: '512px' }}>
        {handAbove && <Reveal><span className="r-hand" style={{ marginBottom: '10px' }}>{handAbove}</span></Reveal>}
        <Reveal><h2 className={`r-display ${titleClass}`} style={{ letterSpacing: '-0.075em' }}>{title}</h2></Reveal>
        {hand && <Reveal delay={80}><span className="r-hand r-hand--ink" style={{ fontSize: '14px', marginTop: '14px' }}>{hand}</span></Reveal>}
        <Reveal delay={140} className={copyClass} style={{ marginTop: '36px' }}>{children}</Reveal>
        {cta && (
          <Reveal delay={200} style={{ marginTop: '44px' }}>
            <Btn href={cta.href} variant={ctaVariant || (tone === 'light' ? 'dark' : 'light')}>{cta.label}</Btn>
          </Reveal>
        )}
      </div>
    </div>
  )
  const mediaCol = (
    <div style={{ position: 'relative', minHeight: 'clamp(380px, 48vw, 660px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: mediaPad ? 'clamp(40px, 6vw, 80px)' : 0 }}>
      {media}
    </div>
  )
  return (
    <section id={id} className={`r-sec ${tone === 'light' ? 'r-light' : 'r-dark'}`} style={{ borderTop: tone === 'light' ? '1px solid var(--primary)' : 'var(--r-line)' }}>
      <div className="r-split r-split--ruled">
        {reverse ? <>{mediaCol}{text}</> : <>{text}{mediaCol}</>}
      </div>
    </section>
  )
}

export function Polaroid({ src, rotate = -7, position = '50% 30%' }) {
  return (
    <div className="r-float" style={{ '--rot': `${rotate}deg`, background: '#F2EFE9', padding: '26px 26px 34px', width: 'min(480px, 86%)', boxShadow: '0 22px 44px rgba(0,0,0,0.28), 0 4px 10px rgba(0,0,0,0.18)', border: '1px solid #ddd8cf' }}>
      <Photo src={src} position={position} style={{ aspectRatio: '1 / 0.9' }} />
    </div>
  )
}

// ── DarkPhoto ────────────────────────────────────────────────────
export function DarkPhoto({ image, position = '50% 40%', rightTitle, leftTitle, children, cta }) {
  return (
    <section className="r-sec r-dark" style={{ padding: 'clamp(70px, 7vw, 90px) 0 clamp(70px, 7vw, 90px)' }}>
      <Photo src={image} shade position={position} style={{ position: 'absolute', inset: 0 }} imgStyle={{ filter: 'grayscale(1) contrast(1.2) brightness(0.6)' }} />
      <div className="r-wrap" style={{ position: 'relative', zIndex: 2 }}>
        {rightTitle && (
          <Reveal style={{ textAlign: 'right', marginBottom: 'clamp(100px, 20vw, 320px)', paddingRight: 'clamp(0px, 4vw, 58px)' }}>
            <h2 className="r-display r-xl">
              <span style={{ color: 'var(--cream)' }}>{rightTitle[0]}</span>{' '}
              <br className="r-br" />
              <span className="r-grey">{rightTitle[1]}</span>
            </h2>
          </Reveal>
        )}
        {leftTitle && (
          <Reveal><h2 className="r-display r-xl r-pink" style={{ maxWidth: '760px' }}>{leftTitle}</h2></Reveal>
        )}
        <Reveal delay={120} className="r-caps" style={{ maxWidth: '720px', marginTop: '34px', color: 'var(--cream)' }}>{children}</Reveal>
        {cta && <Reveal delay={180} style={{ marginTop: '44px' }}><Btn href={cta.href} variant="light">{cta.label}</Btn></Reveal>}
      </div>
    </section>
  )
}

// ── WordmarkBand ─────────────────────────────────────────────────
export function WordmarkBand({ children }) {
  return (
    <section className="r-sec">
      <div className="r-light" style={{ padding: 'clamp(90px, 11vw, 160px) 0 14px', borderTop: '1px solid var(--primary)' }}>
        <Reveal className="r-wrap" style={{ maxWidth: '1240px' }}>
          <Wordmark color="var(--primary)" />
        </Reveal>
      </div>
      <div className="r-dark" style={{ padding: '26px 16px clamp(90px, 11vw, 160px)', textAlign: 'center', marginTop: '-1px' }}>
        <Reveal>
          <h2 className="r-display" style={{ fontSize: 'clamp(26px, 3.1vw, 45px)', letterSpacing: '0', lineHeight: 1.05, maxWidth: '1020px', margin: '0 auto' }}>{children}</h2>
        </Reveal>
      </div>
    </section>
  )
}

// ── Folder ───────────────────────────────────────────────────────
export function Folder({ tab, children, after }) {
  return (
    <section className="r-sec r-paper r-grain r-grain--strong" style={{ padding: 'clamp(120px, 11vw, 150px) 16px clamp(90px, 9vw, 130px)', borderTop: '1px solid var(--primary)' }}>
      <Reveal className="r-folder" style={{ maxWidth: '896px', margin: '0 auto', zIndex: 1 }}>
        <div className="r-folder__tab"><span className="r-folder__label">{tab}</span></div>
        <div className="r-mono-copy" style={{ fontSize: '13px', letterSpacing: '0.08em', lineHeight: 1.55, position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </Reveal>
      {after && <div style={{ textAlign: 'center', marginTop: '56px', position: 'relative', zIndex: 1 }}>{after}</div>}
    </section>
  )
}

// ── HeadingPhotoSplit ────────────────────────────────────────────
export function HeadingPhotoSplit({ image, position, title, sub }) {
  return (
    <section className="r-sec r-light" style={{ borderTop: '1px solid var(--primary)' }}>
      <div className="r-split r-split--ruled">
        <Photo src={image} position={position} style={{ minHeight: 'clamp(340px, 40vw, 570px)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', textAlign: 'right', padding: 'clamp(48px, 6vw, 90px) clamp(20px, 12vw, 172px) clamp(40px, 3vw, 40px) 24px' }}>
          <Reveal><h2 className="r-display r-md" style={{ fontSize: 'clamp(38px, 4.4vw, 64px)' }}>{title}</h2></Reveal>
          {sub && <Reveal delay={100} className="r-mono-copy" style={{ marginTop: '22px', maxWidth: '420px' }}>{sub}</Reveal>}
        </div>
      </div>
    </section>
  )
}

// ── Vol ──────────────────────────────────────────────────────────
export function Vol({ id, hand, title, children, object, objectSide = 'right', pink = false, image, imagePosition, cta, first = false }) {
  const accent = pink ? 'var(--accent)' : 'var(--cream)'
  const text = (
    <div style={{ padding: 'clamp(56px, 8vw, 120px) clamp(20px, 3.7vw, 53px)' }}>
      <Reveal><span className="r-hand" style={{ color: accent }}>{hand}</span></Reveal>
      <Reveal delay={60}><h3 className="r-display r-md" style={{ color: accent, fontSize: 'clamp(34px, 3.6vw, 52px)', marginTop: '6px', maxWidth: '560px' }}>{title}</h3></Reveal>
      <Reveal delay={120} className="r-mono-copy" style={{ marginTop: '44px', maxWidth: '528px', fontSize: '14px', color: pink ? 'var(--accent)' : 'var(--cream)' }}>{children}</Reveal>
      {cta && <Reveal delay={180} style={{ marginTop: '40px' }}><Btn href={cta.href} variant={pink ? 'pink' : 'outline'}>{cta.label}</Btn></Reveal>}
    </div>
  )
  const obj = image ? (
    <Photo src={image} position={imagePosition} style={{ position: 'absolute', inset: 0 }} imgStyle={{ filter: 'grayscale(1) contrast(1.2) brightness(0.8)' }} />
  ) : (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>{object}</div>
  )
  return (
    <section id={id} className="r-sec r-dark r-grain r-grain--strong" style={{ borderTop: first ? 'none' : `1px solid ${pink ? 'var(--accent)' : 'rgba(245,243,239,0.8)'}`, background: '#0d0d0d' }}>
      <div className="r-split" style={{ position: 'relative', zIndex: 1 }}>
        {objectSide === 'left'
          ? <><div style={{ position: 'relative', minHeight: image ? '420px' : undefined, display: 'flex' }}>{obj}</div><div style={{ paddingLeft: 'clamp(0px, 8vw, 110px)' }}>{text}</div></>
          : <>{text}<div style={{ position: 'relative', minHeight: image ? '420px' : undefined, display: 'flex', justifyContent: 'center' }}>{obj}</div></>}
      </div>
    </section>
  )
}

// ── Tracks ───────────────────────────────────────────────────────
export function Tracks({ id, eyebrow, heading, intro, items, outro, cta }) {
  return (
    <section id={id} className="r-sec r-light" style={{ padding: 'clamp(80px, 8vw, 110px) 0 clamp(80px, 8vw, 110px)', borderTop: '1px solid var(--primary)' }}>
      <div className="r-wrap" style={{ maxWidth: '1200px' }}>
        {(heading || eyebrow) && (
          <div style={{ textAlign: 'center', marginBottom: 'clamp(56px, 6vw, 90px)' }}>
            {eyebrow && <Reveal><span className="r-hand">{eyebrow}</span></Reveal>}
            {heading && <Reveal delay={60}><h2 className="r-display r-lg" style={{ marginTop: '8px' }}>{heading}</h2></Reveal>}
            {intro && <Reveal delay={120} className="r-mono-copy" style={{ maxWidth: '720px', margin: '26px auto 0' }}>{intro}</Reveal>}
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(260px, 1fr))`, gap: 'clamp(40px, 7vw, 110px)' }}>
          {items.map((t, i) => (
            <Reveal key={t.title} delay={i * 120}>
              <span className="r-hand r-hand--ink" style={{ fontSize: '19px' }}>{t.hand}</span>
              <h3 className="r-display" style={{ fontSize: 'clamp(34px, 3.4vw, 52px)', marginTop: '4px' }}>{t.title}</h3>
              {t.sub && <p className="r-label" style={{ marginTop: '16px' }}>{t.sub}</p>}
              <Paras items={t.body} className="r-mono-copy r-justify" style={{ marginTop: '32px', fontSize: '12.5px' }} />
              {t.closer && <p className="r-label" style={{ marginTop: '30px' }}>{t.closer}</p>}
            </Reveal>
          ))}
        </div>
        {(outro || cta) && (
          <div style={{ textAlign: 'center', marginTop: 'clamp(60px, 7vw, 100px)' }}>
            {outro && <Reveal className="r-caps" style={{ maxWidth: '900px', margin: '0 auto' }}>{outro}</Reveal>}
            {cta && <Reveal delay={100} style={{ marginTop: '40px' }}><Btn href={cta.href} variant="dark">{cta.label}</Btn></Reveal>}
          </div>
        )}
      </div>
    </section>
  )
}

// ── PhotoStatement ───────────────────────────────────────────────
export function PhotoStatement({ image, position, title, body, hand, rightTitle, rightSub, cta }) {
  return (
    <section className="r-sec r-dark" style={{ padding: 'clamp(70px, 6vw, 80px) 0 clamp(70px, 6vw, 88px)', borderTop: '1px solid var(--primary)' }}>
      <Photo src={image} position={position} style={{ position: 'absolute', inset: 0 }} imgStyle={{ filter: 'grayscale(1) contrast(0.85) brightness(0.72)' }} />
      <div className="r-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal><h2 className="r-display r-xl" style={{ maxWidth: '900px', color: 'var(--cream)' }}>{title}</h2></Reveal>
        {body && <Reveal delay={100} className="r-sub" style={{ maxWidth: '700px', marginTop: '28px', fontSize: 'clamp(17px, 1.6vw, 22px)', lineHeight: 1.15 }}>{body}</Reveal>}
        {rightTitle && (
          <div style={{ marginLeft: 'auto', width: 'min(740px, 100%)', marginTop: 'clamp(80px, 11vw, 150px)' }}>
            {hand && <Reveal><span className="r-hand r-hand--ink" style={{ color: 'var(--cream)' }}>{hand}</span></Reveal>}
            <Reveal delay={60}><h3 className="r-display r-xl" style={{ color: 'var(--cream)', marginTop: '6px' }}>{rightTitle}</h3></Reveal>
            {rightSub && <Reveal delay={120} className="r-sub" style={{ marginTop: '16px', fontSize: 'clamp(17px, 1.5vw, 21px)' }}>{rightSub}</Reveal>}
          </div>
        )}
        {cta && <Reveal delay={160} style={{ marginTop: 'clamp(50px, 6vw, 90px)', paddingLeft: 'clamp(0px, 3.5vw, 48px)' }}><Btn href={cta.href} variant="light">{cta.label}</Btn></Reveal>}
      </div>
    </section>
  )
}

// ── Meet ─────────────────────────────────────────────────────────
export function Meet({ eyebrow, title, tape, children, cta, image = CLIENT.photos.roberta }) {
  return (
    <section className="r-sec r-light" style={{ padding: 'clamp(110px, 11vw, 160px) 0 clamp(90px, 9vw, 150px)' }}>
      <div className="r-photo" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'min(48%, 690px)', background: 'transparent' }}>
        <img src={image} alt="" style={{ opacity: 0.55, objectPosition: '50% 20%', mixBlendMode: 'multiply' }} />
      </div>
      <div className="r-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: 'min(1140px, 100%)' }}>
        {eyebrow && <Reveal><p className="r-label">{eyebrow}</p></Reveal>}
        <Reveal delay={60}><h2 className="r-display r-xl" style={{ marginTop: '28px' }}>{title}</h2></Reveal>
        {tape && <Reveal delay={120} style={{ marginTop: '22px' }}><span className="r-tape">{tape}</span></Reveal>}
        <Reveal delay={160} className="r-caps" style={{ maxWidth: '860px', margin: '40px auto 0', fontSize: 'clamp(14px, 1.1vw, 16px)' }}>{children}</Reveal>
        {cta && <Reveal delay={200} style={{ marginTop: '26px' }}><Btn href={cta.href} variant="dark">{cta.label}</Btn></Reveal>}
      </div>
    </section>
  )
}

// ── FinalCTA ─────────────────────────────────────────────────────
export function FinalCTA({ title, titleClass = 'r-xl', sub, pink = [], cta, ctaVariant = 'outline' }) {
  return (
    <section className="r-sec r-dark" style={{ padding: 'clamp(100px, 8vw, 110px) 16px clamp(100px, 9vw, 124px)', textAlign: 'center', borderTop: 'var(--r-line)' }}>
      <Reveal><h2 className={`r-display ${titleClass}`} style={{ maxWidth: '1000px', margin: '0 auto', fontSize: titleClass === 'r-xl' ? 'clamp(46px, 6.4vw, 96px)' : undefined }}>{title}</h2></Reveal>
      {sub && <Reveal delay={80}><p className="r-label" style={{ maxWidth: '520px', margin: '20px auto 0', lineHeight: 1.1 }}>{sub}</p></Reveal>}
      {pink.length > 0 && (
        <Reveal delay={140} className="r-mono-copy" style={{ color: 'var(--accent)', maxWidth: '560px', margin: '40px auto 0', fontSize: '14px' }}>
          {pink.map((p, i) => <p key={i}>{p}</p>)}
        </Reveal>
      )}
      {cta && <Reveal delay={200} style={{ marginTop: '54px' }}><Btn href={cta.href} variant={ctaVariant}>{cta.label}</Btn></Reveal>}
    </section>
  )
}

// ── Boxes ────────────────────────────────────────────────────────
export function Boxes({ id, heading, headingDark = false, items, after, cta }) {
  return (
    <section id={id} className="r-sec r-light" style={{ padding: 0 }}>
      {heading && (
        <div className="r-dark" style={{ padding: 'clamp(90px, 9vw, 130px) 16px clamp(80px, 8vw, 110px)', textAlign: 'center' }}>
          <Reveal><h2 className="r-display r-lg" style={{ maxWidth: '1060px', margin: '0 auto', color: headingDark ? 'var(--accent)' : 'var(--cream)' }}>{heading}</h2></Reveal>
        </div>
      )}
      <div className="r-wrap" style={{ maxWidth: '1160px', padding: 'clamp(70px, 6.5vw, 92px) 16px clamp(70px, 7vw, 100px)' }}>
        <div className="r-boxes">
          {items.map((b, i) => (
            <Reveal key={i} delay={i * 90} className="r-box">
              <div className="r-box__big">{b.big}</div>
              {b.label && <div className="r-box__label">{b.label}</div>}
              <div className="r-box__body" style={{ marginTop: b.label ? 0 : '18px' }}>{b.body}</div>
            </Reveal>
          ))}
        </div>
        {after && <Reveal className="r-caps" style={{ textAlign: 'center', maxWidth: '1100px', margin: '70px auto 0', fontSize: 'clamp(16px, 1.4vw, 20px)', lineHeight: 1.7 }}>{after}</Reveal>}
        {cta && <Reveal delay={100} style={{ textAlign: 'center', marginTop: '56px' }}><Btn href={cta.href} variant="dark">{cta.label}</Btn></Reveal>}
      </div>
    </section>
  )
}

// ── CenterCaps ───────────────────────────────────────────────────
export function CenterCaps({ id, heading, children, cta, tone = 'light' }) {
  return (
    <section id={id} className={`r-sec ${tone === 'light' ? 'r-light' : 'r-dark'}`} style={{ padding: 'clamp(80px, 8vw, 120px) 16px', textAlign: 'center', borderTop: tone === 'light' ? '1px solid var(--primary)' : 'var(--r-line)' }}>
      {heading && <Reveal><h2 className="r-display r-lg" style={{ maxWidth: '1000px', margin: '0 auto 40px' }}>{heading}</h2></Reveal>}
      <Reveal className="r-caps" style={{ maxWidth: '1100px', margin: '0 auto', fontSize: 'clamp(16px, 1.4vw, 20px)', lineHeight: 1.7 }}>{children}</Reveal>
      {cta && <Reveal delay={100} style={{ marginTop: '56px' }}><Btn href={cta.href} variant={tone === 'light' ? 'dark' : 'light'}>{cta.label}</Btn></Reveal>}
    </section>
  )
}

// ── AboutIntro ───────────────────────────────────────────────────
export function AboutIntro({ image, lead, children, cta }) {
  return (
    <section className="r-sec r-dark" style={{ padding: 'clamp(60px, 6.6vw, 95px) 0 clamp(80px, 10vw, 150px)' }}>
      <div className="r-wrap" style={{ maxWidth: '1100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 4.5vw, 65px)', alignItems: 'start' }}>
        <Reveal>
          <Photo src={image} position="50% 25%" style={{ aspectRatio: '468 / 596', border: '1px solid var(--accent)', position: 'sticky', top: '90px' }} />
        </Reveal>
        <div>
          <Reveal><h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, textTransform: 'none', letterSpacing: '0', fontSize: 'clamp(28px, 2.6vw, 37px)', lineHeight: 1.05, color: 'var(--cream)' }}>{lead}</h1></Reveal>
          <Reveal delay={120} className="r-body-copy" style={{ marginTop: '44px', fontSize: '15px', lineHeight: 1.45 }}>{children}</Reveal>
          {cta && <Reveal delay={180} style={{ marginTop: '70px' }}><Btn href={cta.href} variant="pink">{cta.label}</Btn></Reveal>}
        </div>
      </div>
    </section>
  )
}

// ── FAQ ──────────────────────────────────────────────────────────
export function FAQ({ heading, items }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="r-sec r-light" style={{ padding: 'clamp(90px, 9vw, 130px) 0', borderTop: '1px solid var(--primary)' }}>
      <div className="r-wrap" style={{ maxWidth: '1100px' }}>
        <Reveal><h2 className="r-display r-lg" style={{ marginBottom: '56px', maxWidth: '900px' }}>{heading}</h2></Reveal>
        <div className="r-faq">
          {items.map((it, i) => (
            <div key={it.q} className={`r-faq__item${open === i ? ' is-open' : ''}`}>
              <button type="button" className="r-faq__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="r-faq__icon" aria-hidden="true">+</span>
              </button>
              <div className="r-faq__a" role="region">
                <div><p className="r-mono-copy" style={{ textTransform: 'none', fontSize: '15px', letterSpacing: '0.02em', lineHeight: 1.7 }}>{it.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Rows (antes → después) ───────────────────────────────────────
export function Rows({ heading, rows }) {
  return (
    <section className="r-sec r-light" style={{ padding: 'clamp(90px, 9vw, 130px) 0', borderTop: '1px solid var(--primary)' }}>
      <div className="r-wrap" style={{ maxWidth: '1200px' }}>
        <Reveal><h2 className="r-display r-lg" style={{ marginBottom: '60px', maxWidth: '900px' }}>{heading}</h2></Reveal>
        <div className="r-rows">
          {rows.map(([from, to], i) => (
            <Reveal key={i} delay={i * 60} className="r-row">
              <p className="r-mono-copy" style={{ color: 'var(--grey-type)' }}>{from}</p>
              <span className="r-row__arrow" aria-hidden="true">→</span>
              <p className="r-display" style={{ fontSize: 'clamp(22px, 2.2vw, 32px)', letterSpacing: '-0.05em', lineHeight: 1 }}>{to}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FeelList (big word + rest) ───────────────────────────────────
export function FeelList({ heading, items }) {
  return (
    <section className="r-sec r-dark r-grain r-grain--strong" style={{ padding: 'clamp(90px, 9vw, 130px) 0', background: '#0d0d0d', borderTop: 'var(--r-line)' }}>
      <div className="r-wrap" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
        <Reveal><h2 className="r-display r-lg" style={{ marginBottom: '50px', maxWidth: '980px' }}>{heading}</h2></Reveal>
        <div style={{ borderTop: '1px solid rgba(245,243,239,0.35)' }}>
          {items.map(([big, rest], i) => (
            <Reveal key={i} delay={i * 70} className="r-feel">
              <p className="r-display r-pink" style={{ fontSize: 'clamp(34px, 4.4vw, 64px)' }}>{big}</p>
              <p className="r-mono-copy" style={{ fontSize: '14px' }}>{rest}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Pricing ──────────────────────────────────────────────────────
export function Pricing({ id, heading, prices, cta }) {
  return (
    <section id={id} className="r-sec r-dark" style={{ padding: 'clamp(100px, 9vw, 130px) 16px', textAlign: 'center', borderTop: 'var(--r-line)' }}>
      <Reveal><span className="r-hand">{heading}</span></Reveal>
      <div className="r-prices" style={{ marginTop: '36px' }}>
        {prices.map((p, i) => (
          <Reveal key={p.label} delay={i * 100} className="r-price">
            <p className="r-mono-copy" style={{ color: 'var(--accent)' }}>{p.label}</p>
            <p className="r-display" style={{ fontSize: 'clamp(56px, 7vw, 104px)', marginTop: '10px', letterSpacing: '-0.06em' }}>{p.value}</p>
            {p.unit && <p className="r-mono-copy" style={{ marginTop: '6px' }}>{p.unit}</p>}
          </Reveal>
        ))}
      </div>
      {cta && <Reveal delay={200} style={{ marginTop: '56px' }}><Btn href={cta.href} variant="pink">{cta.label}</Btn></Reveal>}
    </section>
  )
}

// ── Checklist ────────────────────────────────────────────────────
export function Checklist({ id, heading, intro, items, after, cta }) {
  return (
    <section id={id} className="r-sec r-light" style={{ padding: 'clamp(90px, 9vw, 130px) 0', borderTop: '1px solid var(--primary)' }}>
      <div className="r-wrap" style={{ maxWidth: '1100px' }}>
        <Reveal><h2 className="r-display r-lg" style={{ maxWidth: '900px' }}>{heading}</h2></Reveal>
        {intro && <Reveal delay={60} className="r-mono-copy" style={{ marginTop: '24px', maxWidth: '640px' }}>{intro}</Reveal>}
        <div style={{ borderTop: '1px solid var(--primary)', marginTop: '56px' }}>
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 60} className="r-check">
              <span className="r-num">{String(i + 1).padStart(2, '0')}</span>
              <p className="r-display" style={{ fontSize: 'clamp(20px, 2vw, 28px)', letterSpacing: '-0.05em', lineHeight: 1.08 }}>{it}</p>
            </Reveal>
          ))}
        </div>
        {after && <Reveal className="r-mono-copy" style={{ marginTop: '44px', maxWidth: '760px' }}>{after}</Reveal>}
        {cta && <Reveal delay={80} style={{ marginTop: '44px' }}><Btn href={cta.href} variant="dark">{cta.label}</Btn></Reveal>}
      </div>
    </section>
  )
}
