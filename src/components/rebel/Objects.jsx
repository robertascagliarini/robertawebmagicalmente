/**
 * Objects.jsx — hand-built SVG props that stand in for the reference's
 * photographed objects (cassettes, playing card, vinyl, flywheel).
 * All are monochrome + pink so they sit on any section.
 */
import { useEffect, useState } from 'react'

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

// Near-side features in a 400×400 box (disc r=180 at 200,200), roughly
// where the real maria and bright rayed craters sit.
const MARIA = [
  // cx, cy, rx, ry, rotation, opacity
  [112, 178, 40, 70, -12, 0.42], // Oceanus Procellarum
  [166, 124, 34, 28, 10, 0.5],   // Mare Imbrium
  [234, 130, 22, 20, 0, 0.55],   // Mare Serenitatis
  [262, 182, 28, 22, 20, 0.5],   // Mare Tranquillitatis
  [322, 152, 14, 18, 0, 0.6],    // Mare Crisium
  [296, 232, 13, 20, 15, 0.42],  // Mare Fecunditatis
  [252, 244, 13, 11, 0, 0.42],   // Mare Nectaris
  [180, 268, 22, 15, -10, 0.36], // Mare Nubium
  [122, 258, 15, 12, 0, 0.45],   // Mare Humorum
  [212, 88, 44, 8, -6, 0.32],    // Mare Frigoris
]
const CRATERS = [
  [192, 322, 10], [150, 206, 7], [124, 132, 5], [214, 196, 6], [292, 286, 8],
  [96, 214, 5], [246, 302, 6], [330, 214, 5], [176, 168, 4], [270, 92, 5],
  [150, 300, 6], [312, 262, 4], [226, 270, 4], [104, 280, 4],
]

/**
 * Moon cycling continuously through its phases (new → full → new).
 * The lit side is masked with a blurred terminator; the dark side keeps a
 * faint earthshine so the disc never disappears. Static under reduced motion.
 */
export function Moon({ size = 460, period = 24 }) {
  const [phase, setPhase] = useState(0.4)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const start = performance.now() - 0.15 * period * 1000
    const tick = now => {
      setPhase(((now - start) / (period * 1000)) % 1)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [period])

  // Lit area = one semicircle + the terminator (an ellipse of rx = r·|cos θ|)
  const r = 180, cx = 200, cy = 200
  const theta = phase * 2 * Math.PI
  const cos = Math.cos(theta)
  const rx = (r * Math.abs(cos)).toFixed(2)
  const waxing = phase <= 0.5
  const sweep = waxing ? (cos > 0 ? 0 : 1) : (cos > 0 ? 1 : 0)
  const lit = `M${cx} ${cy - r} A${r} ${r} 0 0 ${waxing ? 1 : 0} ${cx} ${cy + r} A${rx} ${r} 0 0 ${sweep} ${cx} ${cy - r} Z`
  // Glow follows how much of the disc is lit
  const glow = (0.08 + 0.22 * (1 - cos) / 2).toFixed(3)

  const surface = (
    <>
      <circle cx={cx} cy={cy} r={r} fill="url(#moon-base)" />
      <g filter="url(#moon-maria)" fill="#76736E">
        {MARIA.map(([x, y, a, b, rot, o], i) => (
          <ellipse key={i} cx={x} cy={y} rx={a} ry={b} opacity={o} transform={`rotate(${rot} ${x} ${y})`} />
        ))}
      </g>
      {CRATERS.map(([x, y, cr], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={cr} fill="#8A8782" opacity="0.35" />
          <circle cx={x - cr * 0.25} cy={y - cr * 0.25} r={cr * 0.8} fill="none" stroke="#FBFAF7" strokeWidth="0.8" opacity="0.4" />
        </g>
      ))}
      {/* Tycho's rays */}
      <g stroke="#FBFAF7" strokeWidth="1.2" opacity="0.14" strokeLinecap="round">
        {[200, 235, 265, 300, 330, 20, 60, 150].map(a => {
          const rad = a * Math.PI / 180
          return <line key={a} x1="192" y1="322" x2={192 + 120 * Math.cos(rad)} y2={322 + 120 * Math.sin(rad)} />
        })}
      </g>
      <circle cx={cx} cy={cy} r={r} fill="#fff" filter="url(#moon-grain)" opacity="0.5" />
      <circle cx={cx} cy={cy} r={r} fill="url(#moon-limb)" />
    </>
  )

  return (
    <svg viewBox="0 0 400 400" style={{ width: `min(${size}px, 100%)`, height: 'auto', overflow: 'visible' }} aria-hidden="true">
      <defs>
        <radialGradient id="moon-base" cx="44%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#F2EFE9" />
          <stop offset="60%" stopColor="#D9D5CE" />
          <stop offset="100%" stopColor="#B9B5AE" />
        </radialGradient>
        <radialGradient id="moon-limb" cx="50%" cy="50%" r="50%">
          <stop offset="72%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.38" />
        </radialGradient>
        <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="62%" stopColor="#F5F3EF" stopOpacity="1" />
          <stop offset="78%" stopColor="#EC1F80" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#EC1F80" stopOpacity="0" />
        </radialGradient>
        <filter id="moon-maria" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="22" />
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        <filter id="moon-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <filter id="moon-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <clipPath id="moon-disc"><circle cx={cx} cy={cy} r={r} /></clipPath>
        <mask id="moon-lit-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="400">
          <path d={lit} fill="#fff" filter="url(#moon-soft)" />
        </mask>
      </defs>
      <circle cx={cx} cy={cy} r="200" fill="url(#moon-glow)" opacity={glow} />
      <g clipPath="url(#moon-disc)">
        <circle cx={cx} cy={cy} r={r} fill="#0E0E0E" />
        {/* earthshine */}
        <g opacity="0.06">{surface}</g>
        <g mask="url(#moon-lit-mask)">{surface}</g>
      </g>
    </svg>
  )
}
