import { useId } from 'react'
import { CLIENT } from '../../config/client.js'

/**
 * Wordmark — moon mark (full-moon outline + filled crescent) followed by the
 * brand name in high-contrast Italiana caps, filled with a fuchsia gradient
 * that fades to blush left → right.
 *
 * Props:
 *   width   CSS width (default '100%')
 *   tone    'dark' (on black: fades to blush) | 'light' (on cream: fades to plum)
 */
export default function Wordmark({ width = '100%', tone = 'dark', style }) {
  const id = useId().replace(/:/g, '')
  const fadeTo = tone === 'dark' ? '#FBD3E6' : '#7A1046'
  return (
    <svg
      viewBox="0 0 1040 124"
      role="img"
      aria-label={CLIENT.name}
      style={{ width, height: 'auto', display: 'block', overflow: 'visible', ...style }}
    >
      <defs>
        <linearGradient id={`${id}-fade`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1040" y2="0">
          <stop offset="0%" stopColor="#EC1F80" />
          <stop offset="45%" stopColor="#EC1F80" />
          <stop offset="100%" stopColor={fadeTo} />
        </linearGradient>
        <mask id={`${id}-crescent`}>
          <circle cx="40" cy="40" r="30" fill="#fff" />
          <circle cx="54" cy="32" r="26" fill="#000" />
        </mask>
      </defs>
      {/* Moon mark, raised like the asterisk in a superscript position */}
      <g fill={`url(#${id}-fade)`}>
        <circle cx="40" cy="40" r="36" fill="none" stroke={`url(#${id}-fade)`} strokeWidth="3" />
        <circle cx="40" cy="40" r="30" mask={`url(#${id}-crescent)`} />
      </g>
      <text
        x="96"
        y="116"
        fill={`url(#${id}-fade)`}
        style={{ fontFamily: 'var(--font-wordmark)', fontWeight: 400, fontSize: '128px', letterSpacing: '4px' }}
      >
        {CLIENT.name.toUpperCase()}
      </text>
    </svg>
  )
}
