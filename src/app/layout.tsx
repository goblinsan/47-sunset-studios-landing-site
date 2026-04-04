import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://47sunsetstudios.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '47 Sunset Studios',
    template: '%s · 47 Sunset Studios',
  },
  description:
    'Digital solutions studio working at the intersection of software engineering, product design, and creative technology.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: '47 Sunset Studios',
    title: '47 Sunset Studios',
    description:
      'Digital solutions studio working at the intersection of software engineering, product design, and creative technology.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '47 Sunset Studios — Digital solutions forged in the dark.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '47 Sunset Studios',
    description:
      'Digital solutions studio working at the intersection of software engineering, product design, and creative technology.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
