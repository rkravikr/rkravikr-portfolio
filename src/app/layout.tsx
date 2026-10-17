import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.scss';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Ravi Kumar Verma — Full-Stack Developer & Product Engineer',
  description:
    'Personal portfolio of Ravi Kumar Verma — a Computer Science Engineering student, full-stack developer, and product-oriented software engineer building practical web applications from Bengaluru, India.',
  keywords: [
    'Ravi Kumar Verma',
    'Full-Stack Developer',
    'Product Engineer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Bengaluru',
  ],
  authors: [{ name: 'Ravi Kumar Verma' }],
  creator: 'Ravi Kumar Verma',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Ravi Kumar Verma — Full-Stack Developer & Product Engineer',
    description:
      'Personal portfolio of Ravi Kumar Verma — building practical web applications and products.',
    siteName: 'Ravi Kumar Verma',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravi Kumar Verma — Full-Stack Developer & Product Engineer',
    description:
      'Personal portfolio of Ravi Kumar Verma — building practical web applications and products.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ravi Kumar Verma',
    jobTitle: 'Full-Stack Developer & Product Engineer',
    url: 'https://ravikumarverma.dev',
    sameAs: [
      'https://github.com/rkravikr',
      'https://linkedin.com/in/rkravikr',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'India',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Atria Institute of Technology',
    },
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Product Engineering',
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
