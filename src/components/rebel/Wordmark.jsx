import { useId } from 'react'
import { CLIENT } from '../../config/client.js'

/*
 * Hand-drawn deco capitals for the wordmark (cap height 100, baseline y=100).
 * High contrast: thick strokes T, hairlines t. Letter quirks (inspired by, not
 * copied from, Patricia Marra): crossbar-less Λ-style A with a floating
 * hairline, M whose middle vertex floats above the baseline, hairline spurs
 * on E/T/L, and C/G with a heavy left bowl.
 */
const T = 15
const t = 3.2

const poly = pts => <polygon points={pts.map(p => p.join(',')).join(' ')} />
const rect = (x, y, w, h) => <rect x={x} y={y} width={w} height={h} />

// Ring with a heavy left side; the opening on the right is cut by a clip path
const bowl = (clipId, gap) => (
  <>
    <defs>
      <clipPath id={clipId}>
        <path d={`M-10 -10 H110 V${gap[0]} H62 V${gap[1]} H110 V110 H-10 Z`} />
      </clipPath>
    </defs>
    <path
      clipPath={`url(#${clipId})`}
      fillRule="evenodd"
      d="M47 0 A47 50 0 1 0 47.01 0 Z M51 3.2 A35 46.8 0 1 0 51.01 3.2 Z"
    />
  </>
)

const GLYPHS = {
  M: { w: 92, draw: () => <>
    {poly([[11, 0], [11 + t, 0], [t, 100], [0, 100]])}
    {poly([[11, 0], [11 + T, 0], [49, 84], [43, 84]])}
    {poly([[43, 84], [46, 84], [78, 0], [75, 0]])}
    {poly([[75, 0], [75 + T, 0], [92, 100], [92 - T, 100]])}
    {rect(-6, 100 - t, 14, t)}
  </> },
  A: { w: 66, draw: () => <>
    {poly([[30, 0], [33, 0], [t, 100], [0, 100]])}
    {poly([[30, 0], [30 + T, 0], [66, 100], [66 - T, 100]])}
    {rect(9, 64, 20, t)}
  </> },
  G: { w: 94, draw: id => <>
    {bowl(`${id}-g`, [20, 54])}
    {rect(58, 54, 36, t)}
    {rect(94 - T, 54, T, 40)}
    {rect(83, 12, t, 14)}
  </> },
  I: { w: T, draw: () => rect(0, 0, T, 100) },
  C: { w: 92, draw: id => <>
    {bowl(`${id}-c`, [22, 78])}
    {rect(83, 12, t, 14)}
    {rect(83, 74, t, 14)}
  </> },
  L: { w: 54, draw: () => <>
    {rect(0, 0, T, 100)}
    {rect(0, 100 - t, 54, t)}
    {poly([[51, 100], [54, 100], [54, 84]])}
  </> },
  E: { w: 54, draw: () => <>
    {rect(0, 0, T, 100)}
    {rect(0, 0, 52, t)}
    {rect(0, 48, 40, t)}
    {rect(0, 100 - t, 54, t)}
    {rect(49, 0, t, 12)}
    {rect(51, 88, t, 12)}
  </> },
  N: { w: 70, draw: () => <>
    {rect(0, 0, t, 100)}
    {poly([[0, 0], [T + 2, 0], [70, 100], [70 - T - 2, 100]])}
    {rect(70 - t, 0, t, 100)}
  </> },
  T: { w: 64, draw: () => <>
    {rect(0, 0, 64, t)}
    {rect(0, 0, t, 12)}
    {rect(64 - t, 0, t, 12)}
    {rect(32 - T / 2, 0, T, 100)}
  </> },
}

const TRACK = 16 // letter spacing

/**
 * Wordmark — "MAGICALMENTE" drawn from the custom deco capitals above,
 * filled with a fuchsia gradient that fades left → right.
 *
 * Props:
 *   width   CSS width (default '100%')
 *   tone    'dark' (on black: fades to blush) | 'light' (on cream: fades to plum)
 */
export default function Wordmark({ width = '100%', tone = 'dark', style }) {
  const id = useId().replace(/:/g, '')
  const fadeTo = tone === 'dark' ? '#FBD3E6' : '#7A1046'

  let x = 0
  const letters = [...CLIENT.wordmark.toUpperCase()].map((ch, i) => {
    const g = GLYPHS[ch]
    const el = <g key={i} transform={`translate(${x} 0)`}>{g.draw(`${id}-${i}`)}</g>
    x += g.w + TRACK
    return el
  })
  const total = x - TRACK

  return (
    <svg
      viewBox={`-8 -4 ${total + 16} 108`}
      role="img"
      aria-label={CLIENT.name}
      style={{ width, height: 'auto', display: 'block', overflow: 'visible', ...style }}
    >
      <defs>
        <linearGradient id={`${id}-fade`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={total} y2="0">
          <stop offset="0%" stopColor="#EC1F80" />
          <stop offset="40%" stopColor="#EC1F80" />
          <stop offset="100%" stopColor={fadeTo} />
        </linearGradient>
        {/* letters as a mask so one gradient runs across the whole word */}
        <mask id={`${id}-word`} maskUnits="userSpaceOnUse" x="-8" y="-4" width={total + 16} height="108">
          <g fill="#fff">{letters}</g>
        </mask>
      </defs>
      <rect x="-8" y="-4" width={total + 16} height="108" fill={`url(#${id}-fade)`} mask={`url(#${id}-word)`} />
    </svg>
  )
}
