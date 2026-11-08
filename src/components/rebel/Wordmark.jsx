import { useId } from 'react'
import { CLIENT } from '../../config/client.js'

/** 4-point sparkle path centred on (cx, cy) with arm length r. */
const sparkle = (cx, cy, r) => {
  const k = r * 0.16
  return `M${cx} ${cy - r} C${cx + k} ${cy - k} ${cx + k} ${cy - k} ${cx + r} ${cy} C${cx + k} ${cy + k} ${cx + k} ${cy + k} ${cx} ${cy + r} C${cx - k} ${cy + k} ${cx - k} ${cy + k} ${cx - r} ${cy} C${cx - k} ${cy - k} ${cx - k} ${cy - k} ${cx} ${cy - r} Z`
}

/**
 * Wordmark — "MAGICALMENTE" in deco Italiana caps, thickened with a matching
 * stroke so the fuchsia gradient (fading left → right) reads clearly.
 * Flourishes: a calligraphic swash under the word that starts in a curl and
 * ends in a sparkle, plus a larger sparkle top-right as the brand mark.
 *
 * Props:
 *   width   CSS width (default '100%')
 *   tone    'dark' (on black: fades to blush) | 'light' (on cream: fades to plum)
 */
export default function Wordmark({ width = '100%', tone = 'dark', style }) {
  const id = useId().replace(/:/g, '')
  const fadeTo = tone === 'dark' ? '#FBD3E6' : '#7A1046'
  const paint = `url(#${id}-fade)`
  return (
    <svg
      viewBox="-14 -30 1170 212"
      role="img"
      aria-label={CLIENT.name}
      style={{ width, height: 'auto', display: 'block', overflow: 'visible', ...style }}
    >
      <defs>
        <linearGradient id={`${id}-fade`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1124" y2="0">
          <stop offset="0%" stopColor="#EC1F80" />
          <stop offset="40%" stopColor="#EC1F80" />
          <stop offset="100%" stopColor={fadeTo} />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="118"
        fill={paint}
        stroke={paint}
        strokeWidth="3.5"
        strokeLinejoin="round"
        style={{ fontFamily: 'var(--font-wordmark)', fontWeight: 400, fontSize: '150px', letterSpacing: '6px' }}
      >
        {CLIENT.wordmark.toUpperCase()}
      </text>
      {/* swash: curl on the left, tapered sweep under the word */}
      <path d="M90 152 C52 168 4 174 -4 156 C-10 138 26 128 36 146 C42 160 18 174 0 168" fill="none" stroke={paint} strokeWidth="5" strokeLinecap="round" />
      <path d="M88 148 C330 174 720 162 1064 134 C720 180 330 200 88 154 Z" fill={paint} />
      <path d={sparkle(1090, 132, 18)} fill={paint} />
      {/* brand sparkle */}
      <path d={sparkle(1130, -4, 30)} fill={paint} />
      <circle cx="1100" cy="-22" r="3.5" fill={paint} />
    </svg>
  )
}
