import { ImageResponse } from 'next/og';
import { profile } from '@/data/portfolio';

export const runtime = 'edge';
export const alt = `${profile.name} — ${profile.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#08090B',
          color: '#F1F0EB',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(241, 240, 235, 0.12)',
            paddingBottom: '24px',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B5A6FF',
            }}
          >
            00 // THE SIGNAL
          </span>
          <span
            style={{
              fontSize: '18px',
              letterSpacing: '0.1em',
              color: 'rgba(241, 240, 235, 0.6)',
            }}
          >
            {profile.location}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '74px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#F1F0EB',
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#B5A6FF',
              fontWeight: 400,
            }}
          >
            {profile.title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(241, 240, 235, 0.12)',
            paddingTop: '24px',
            fontSize: '20px',
            color: 'rgba(241, 240, 235, 0.65)',
          }}
        >
          <span>{profile.headline}</span>
          <span style={{ color: '#FF3B46' }}>AFTER DARK</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
