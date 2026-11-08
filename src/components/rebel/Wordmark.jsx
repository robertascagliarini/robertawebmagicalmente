import { CLIENT } from '../../config/client.js'

/**
 * Wordmark — the client's "MAGICALMENTE" logo artwork (fuchsia → cream fade)
 * on a transparent background, from public/brand_assets/.
 *
 * Props:
 *   width   CSS width (default '100%')
 */
export default function Wordmark({ width = '100%', style }) {
  return (
    <img
      src={CLIENT.logoSrc}
      alt={CLIENT.logoAlt}
      width="1343"
      height="144"
      style={{ width, height: 'auto', display: 'block', ...style }}
    />
  )
}
