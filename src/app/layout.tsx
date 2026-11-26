import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { siteUrl } from '@/lib/site';
import { profile } from '@/data/portfolio';
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

const seoTitle = 'Ravi Kumar Verma | Software Developer & Portfolio';
const seoDescription =
  'Official portfolio of Ravi Kumar Verma, a software developer focused on full-stack development, modern web technologies, and building digital products.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Ravi Kumar Verma',
    'Ravi Kumar Verma Developer',
    'Ravi Kumar Verma Portfolio',
    'Ravi Kumar Verma GitHub',
    'Software Developer',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Python',
    'Supabase',
    'Bengaluru',
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: seoTitle,
    description: seoDescription,
    siteName: profile.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoTitle,
    description: seoDescription,
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
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}/images/profile_pic_portfolio.png`,
    jobTitle: 'Software Developer & Full-Stack Developer',
    description: seoDescription,
    sameAs: [
      siteUrl,
      profile.links.linkedin,
      profile.links.github,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: profile.education.institution,
    },
    knowsAbout: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Python',
      'Supabase',
      'Node.js',
      'PostgreSQL',
      'Full-Stack Development',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: `${profile.name} Portfolio`,
    url: siteUrl,
    author: {
      '@id': `${siteUrl}/#person`,
    },
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
