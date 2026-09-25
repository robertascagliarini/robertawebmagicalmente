import { CLIENT } from '../../config/client.js'

/**
 * Wordmark — the brand name set in expanded black Archivo, stretched to
 * fill its box exactly (SVG textLength), like the REBEL wordmark.
 *
 * Props:
 *   width   CSS width (default '100%')
 *   color   fill colour (default cream)
 */
export default function Wordmark({ width = '100%', color = 'var(--cream)', style }) {
  const text = CLIENT.name.toUpperCase()
  return (
    <svg
      viewBox="0 0 1000 118"
      role="img"
      aria-label={CLIENT.name}
      style={{ width, height: 'auto', display: 'block', overflow: 'visible', ...style }}
    >
      <text
        x="0"
        y="104"
        textLength="1000"
        lengthAdjust="spacingAndGlyphs"
        fill={color}
        style={{ fontFamily: 'var(--font-wordmark)', fontWeight: 900, fontStretch: '125%', fontSize: '138px', letterSpacing: '-2px' }}
      >
        {text}
      </text>
    </svg>
  )
}
