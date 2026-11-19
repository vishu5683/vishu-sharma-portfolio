import { ImageResponse } from 'next/og'
import { profile, stats } from '@/data/profile'

export const alt = `${profile.name} | ${profile.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 64px',
          background: 'linear-gradient(135deg, #0b1120 0%, #111a2e 60%, #0f2a3a 100%)',
          color: '#e6ebf5',
        }}
      >
        <div style={{ display: 'flex', fontSize: 32, fontWeight: 800 }}>
          VS<span style={{ color: '#2dd4bf' }}>.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -3 }}>{profile.name}</div>
          <div style={{ fontSize: 46, fontWeight: 700, color: '#2dd4bf', marginTop: 8 }}>{profile.role}</div>
          <div style={{ fontSize: 30, color: '#94a3b8', marginTop: 20 }}>
            C# · ASP.NET Core · React · TypeScript · Oracle · AWS
          </div>
        </div>
        <div style={{ display: 'flex', gap: 36 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 40, fontWeight: 800 }}>{s.value}</div>
              <div style={{ fontSize: 19, color: '#94a3b8' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
