import { ImageResponse } from 'next/og'

export const alt = 'Using Reliability Boundaries - TO2D'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export function generateImageMetadata() {
  return [
    {
      id: 'default',
      alt,
      size,
      contentType,
    },
  ]
}

export function generateStaticParams() {
  return [{}]
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background:
            'radial-gradient(circle at 20% 8%, rgba(255,255,255,0.42), transparent 34%), radial-gradient(circle at 84% 88%, rgba(171,129,70,0.14), transparent 38%), linear-gradient(180deg, #f7f0df 0%, #efe4cf 100%)',
          color: '#251f19',
          padding: '42px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to bottom, rgba(51,43,36,0.05) 1px, transparent 1px)',
            backgroundSize: '100% 34px',
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: 'relative',
            width: '100%',
            border: '1px solid rgba(101,75,43,0.24)',
            backgroundColor: 'rgba(255,252,245,0.78)',
            boxShadow: '0 24px 60px rgba(38, 28, 14, 0.22), inset 0 0 0 1px rgba(255,255,255,0.45)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '44px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                fontSize: 18,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(91,65,38,0.8)',
              }}
            >
              Correctness / Page 4
            </div>
            <div
              style={{
                fontSize: 78,
                lineHeight: 1.04,
                fontWeight: 700,
                maxWidth: 900,
              }}
            >
              Using Reliability Boundaries
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.3,
                maxWidth: 920,
                color: '#2f261d',
              }}
            >
              Reliability boundaries localize failures and turn automation errors into structured domain knowledge.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(91,65,38,0.25)',
              paddingTop: '20px',
            }}
          >
            <div style={{ fontSize: 24, color: '#3b2a19' }}>TO2D</div>
            <div style={{ fontSize: 20, color: 'rgba(91,65,38,0.9)' }}>Architectures for Reliable AI Systems</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
