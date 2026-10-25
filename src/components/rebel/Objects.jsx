/**
 * Objects.jsx — hand-built SVG props that stand in for the reference's
 * photographed objects (cassettes, playing card, vinyl, flywheel).
 * All are monochrome + pink so they sit on any section.
 */
import { useId } from 'react'

export function Vinyl({ size = 45, spin = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={spin ? 'r-spin' : undefined} aria-hidden="true">
      <circle cx="50" cy="50" r="49" fill="#0A0A0A" stroke="#F5F3EF" strokeWidth="1.5" />
      {[42, 36, 30, 24].map(r => (
        <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="#2a2a2a" strokeWidth="1" />
      ))}
      <path d="M22 30 A36 36 0 0 1 50 14" stroke="#555" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="50" r="13" fill="#EC1F80" />
      <circle cx="50" cy="50" r="2.5" fill="#0A0A0A" />
    </svg>
  )
}

export function Sparkle({ size = '1em', color = 'currentColor', className, style }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} style={style} aria-hidden="true">
      <path fill={color} d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
    </svg>
  )
}

/** Cassette tape with a hand-written label. */
export function Cassette({ label = '', side = 'A', tone = 'light', rotate = -8, width = 420 }) {
  const body = tone === 'light' ? '#E9E6E0' : '#161616'
  const edge = tone === 'light' ? '#BDB9B2' : '#3a3a3a'
  const ink = tone === 'light' ? '#0A0A0A' : '#F5F3EF'
  return (
    <svg
      viewBox="0 0 400 250"
      style={{ width: `min(${width}px, 100%)`, height: 'auto', transform: `rotate(${rotate}deg)`, filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.45))' }}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="392" height="242" rx="14" fill={body} stroke={edge} strokeWidth="3" />
      {[[18, 18], [382, 18], [18, 232], [382, 232], [200, 232]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="7" fill="none" stroke={edge} strokeWidth="2" />
          <path d={`M${x - 4} ${y} H${x + 4} M${x} ${y - 4} V${y + 4}`} stroke={edge} strokeWidth="1.5" />
        </g>
      ))}
      {/* label */}
      <rect x="34" y="28" width="332" height="150" rx="6" fill="#F5F3EF" stroke={edge} />
      <rect x="34" y="138" width="332" height="22" fill="#EC1F80" />
      <text x="50" y="72" style={{ fontFamily: 'var(--font-hand)', fontSize: '30px' }} fill="#0A0A0A">{label}</text>
      <line x1="50" y1="88" x2="350" y2="88" stroke="#cfcbc4" />
      <line x1="50" y1="108" x2="350" y2="108" stroke="#cfcbc4" />
      <text x="46" y="155" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '3px' }} fill="#0A0A0A">MAGICALMENTE · 90</text>
      <text x="336" y="155" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px' }} fill="#0A0A0A">{side}</text>
      {/* window + reels */}
      <rect x="96" y="96" width="208" height="56" rx="26" fill="#0A0A0A" opacity="0.92" />
      {[140, 260].map(cx => (
        <g key={cx}>
          <circle cx={cx} cy="124" r="21" fill="#F5F3EF" />
          <circle cx={cx} cy="124" r="11" fill="#0A0A0A" />
          {[0, 60, 120, 180, 240, 300].map(a => (
            <rect key={a} x={cx - 2} y="112" width="4" height="6" fill="#F5F3EF" transform={`rotate(${a} ${cx} 124)`} />
          ))}
        </g>
      ))}
      <path d="M161 124 H239" stroke="#6E6B66" strokeWidth="10" />
      {/* bottom trapezoid */}
      <path d="M90 246 L110 196 H290 L310 246" fill="none" stroke={edge} strokeWidth="3" />
      {[150, 250].map(cx => <circle key={cx} cx={cx} cy="222" r="7" fill={ink} opacity="0.7" />)}
    </svg>
  )
}

/** Tarot-style card for Lilith, the Black Moon. */
export function LilithCard({ width = 210, rotate = -8, style }) {
  return (
    <svg
      viewBox="0 0 220 320"
      style={{ width, height: 'auto', transform: `rotate(${rotate}deg)`, filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.35))', ...style }}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="214" height="314" rx="14" fill="#F5F3EF" stroke="#0A0A0A" strokeWidth="2" />
      <rect x="18" y="18" width="184" height="284" rx="6" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
      <text x="28" y="50" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px' }} fill="#0A0A0A">L</text>
      <text x="192" y="290" textAnchor="end" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px' }} fill="#0A0A0A" transform="rotate(180 180 280)">L</text>
      {/* crescent (black moon) */}
      <circle cx="110" cy="140" r="54" fill="#0A0A0A" />
      <circle cx="132" cy="126" r="48" fill="#F5F3EF" />
      {/* cross below = Lilith glyph */}
      <path d="M110 196 V246 M88 222 H132" stroke="#EC1F80" strokeWidth="7" strokeLinecap="round" />
      <text x="110" y="284" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '5px' }} fill="#0A0A0A">LILITH</text>
    </svg>
  )
}

/** Line-art natal chart wheel (houses + signs), like the A.N.T.I. flywheel. */
export function NatalWheel({ size = 420, color = 'currentColor', labels = [] }) {
  const cx = 200, cy = 200
  const rad = d => (d - 90) * Math.PI / 180
  const pt = (r, d) => [+(cx + r * Math.cos(rad(d))).toFixed(2), +(cy + r * Math.sin(rad(d))).toFixed(2)]
  return (
    <svg viewBox="0 0 400 400" style={{ width: `min(${size}px, 100%)`, height: 'auto' }} aria-hidden="true">
      <circle cx={cx} cy={cy} r="186" fill="none" stroke={color} strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="156" fill="none" stroke={color} strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="62" fill="none" stroke={color} strokeWidth="1.2" />
      {Array.from({ length: 12 }, (_, i) => {
        const [x1, y1] = pt(62, i * 30)
        const [x2, y2] = pt(186, i * 30)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.2" />
      })}
      {Array.from({ length: 72 }, (_, i) => {
        const [x1, y1] = pt(186, i * 5)
        const [x2, y2] = pt(i % 6 === 0 ? 172 : 180, i * 5)
        return <line key={`t${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="0.8" />
      })}
      {labels.map((l, i) => {
        const [x, y] = pt(110, i * (360 / labels.length) + 180 / labels.length)
        return (
          <text key={l} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
            style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px' }} fill={color}>
            {l}
          </text>
        )
      })}
      {/* aspect lines */}
      {[[20, 140], [140, 260], [260, 20], [80, 300], [200, 330]].map(([a, b], i) => {
        const [x1, y1] = pt(62, a)
        const [x2, y2] = pt(62, b)
        return <line key={`a${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i < 3 ? '#EC1F80' : color} strokeWidth="1" />
      })}
      <circle cx={cx} cy={cy} r="5" fill="#EC1F80" />
      {/* orbit arrows */}
      <path d="M60 110 A165 165 0 0 1 150 28" fill="none" stroke={color} strokeWidth="1.5" transform="translate(-14 -10)" />
      <path d="M340 290 A165 165 0 0 1 250 372" fill="none" stroke={color} strokeWidth="1.5" transform="translate(14 10)" />
    </svg>
  )
}

/**
 * Petal-sun "entra aquí" badge: soft rounded petals and a fine inner ring that
 * rotate slowly around a fixed two-line label. Colour follows `currentColor`.
 */
const PETALS = Array.from({ length: 12 }, (_, i) => i * 30)

export function ClickBadge({ label, size = 76, className = '' }) {
  const [first, ...rest] = label.split(' ')
  return (
    <span className={`r-badge ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="r-badge__rays">
        {PETALS.map(a => (
          <g key={a} transform={`rotate(${a} 50 50)`}>
            <ellipse cx="50" cy="13" rx="7" ry="12" fill="currentColor" />
          </g>
        ))}
        <circle cx="50" cy="50" r="33" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="r-badge__label">{first}<br />{rest.join(' ')}</span>
    </span>
  )
}

/**
 * Header moon badge, built like the Darkroom vinyl: cream rim, faint orbit
 * grooves, a fuchsia crescent whose shadow breathes, and a star circling it.
 * On hover/focus the shadow slides off (full moon), the moon glows and the
 * star speeds up.
 */
export function MoonBadge() {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 100 100" className="r-moonbadge" aria-hidden="true">
      <defs>
        <clipPath id={`${id}-moon`}><circle cx="50" cy="50" r="24" /></clipPath>
        <radialGradient id={`${id}-glow`}>
          <stop offset="55%" stopColor="#EC1F80" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#EC1F80" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="#0A0A0A" stroke="#F5F3EF" strokeWidth="2.5" />
      {[41, 35].map(r => <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="#2a2a2a" strokeWidth="1.2" />)}
      <circle cx="50" cy="50" r="34" fill={`url(#${id}-glow)`} className="r-moonbadge__glow" />
      <g clipPath={`url(#${id}-moon)`}>
        <circle cx="50" cy="50" r="24" fill="#EC1F80" />
        <g className="r-moonbadge__slide">
          <circle cx="50" cy="50" r="25" fill="#0A0A0A" className="r-moonbadge__shadow" />
        </g>
      </g>
      <g className="r-moonbadge__orbit">
        <path d="M50 5.5 L51.3 10.7 L56.5 12 L51.3 13.3 L50 18.5 L48.7 13.3 L43.5 12 L48.7 10.7 Z" fill="#EC1F80" />
      </g>
    </svg>
  )
}
