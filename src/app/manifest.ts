import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ravi Kumar Verma — Full-Stack Developer & Product Engineer',
    short_name: 'Ravi Kumar Verma',
    description:
      'Personal portfolio of Ravi Kumar Verma — Computer Science Engineering student and product-oriented software engineer building practical web applications from Bengaluru, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08090B',
    theme_color: '#08090B',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
