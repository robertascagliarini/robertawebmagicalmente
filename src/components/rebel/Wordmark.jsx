import { useId } from 'react'
import { CLIENT } from '../../config/client.js'

/**
 * Wordmark — "MagicalMente" in deco high-contrast Bellefair (capital M on both
 * halves), filled with a fuchsia gradient that fades left → right.
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
      viewBox="0 0 815 150"
      role="img"
      aria-label={CLIENT.name}
      style={{ width, height: 'auto', display: 'block', overflow: 'visible', ...style }}
    >
      <defs>
        <linearGradient id={`${id}-fade`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="815" y2="0">
          <stop offset="0%" stopColor="#EC1F80" />
          <stop offset="40%" stopColor="#EC1F80" />
          <stop offset="100%" stopColor={fadeTo} />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="118"
        fill={`url(#${id}-fade)`}
        stroke={`url(#${id}-fade)`}
        strokeWidth="2.5"
        style={{ fontFamily: 'var(--font-wordmark)', fontWeight: 400, fontSize: '150px' }}
      >
        {CLIENT.wordmark}
      </text>
    </svg>
  )
}
