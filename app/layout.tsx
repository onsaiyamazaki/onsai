import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'ONSAI - Japanese Fortune & Power Spots',
  description:
    'Discover Japanese shrines, fortune telling, and power spots. Your guide to spiritual travel in Japan.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://onsai.com'),
  openGraph: {
    title: 'ONSAI',
    description: 'Discover Japanese shrines, fortune telling, and power spots',
    url: '/',
    siteName: 'ONSAI',
    locale: 'en_US',
    type: 'website',
  },
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col bg-cream text-charcoal antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
