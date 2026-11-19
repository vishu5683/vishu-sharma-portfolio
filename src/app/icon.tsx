import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b1120',
          borderRadius: 14,
          color: '#e6ebf5',
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        VS<span style={{ color: '#2dd4bf' }}>.</span>
      </div>
    ),
    size,
  )
}
