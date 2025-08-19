import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'GrnLYFT - Sustainable B2B EV Transportation Solutions in India',
  description:
    "Transform your business transportation with GrnLYFT's eco-friendly electric vehicle fleet services in India. Reduce costs, lower emissions, and improve operational efficiency with our sustainable B2B transportation solutions.",
  keywords:
    'EV transportation, electric fleet, business transportation, sustainable transport, B2B transportation, green transportation, India transportation, electric vehicles, EV fleet management, corporate transportation, zero-emission fleet, sustainable business solutions, Atmanirbhar Bharat, Make in India, eco-friendly transportation',
  authors: [{ name: 'GrnLYFT', url: 'https://grnlyft-landingpage.vercel.app' }],
  robots: 'index, follow',
  metadataBase: new URL('https://grnlyft-landingpage.vercel.app'),
  alternates: {
    canonical: 'https://grnlyft-landingpage.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://grnlyft-landingpage.vercel.app',
    siteName: 'GrnLYFT',
    title: 'GrnLYFT - Sustainable B2B EV Transportation Solutions in India',
    description:
      'Transform your business transportation with sustainable electric vehicle fleet solutions. Eco-friendly, efficient, and reliable corporate transportation services across India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GrnLYFT - Sustainable B2B EV Transportation for Indian Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrnLYFT - Sustainable B2B EV Transportation Solutions',
    description:
      'Transform your business transportation with sustainable electric vehicle fleet solutions across India.',
    images: ['/og-image.jpg'],
    site: '@grnlyft',
    creator: '@grnlyft',
  },
  category: 'Transportation',
  icons: {
    icon: [
      { url: '/favicon.svg' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GrnLYFT',
              url: 'https://grnlyft-landingpage.vercel.app',
              logo: 'https://grnlyft-landingpage.vercel.app/logo.png',
              description: 'Sustainable B2B EV Transportation Solutions in India',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1, Meher Ali Road, 1st Floor',
                addressLocality: 'Kolkata',
                addressRegion: 'West Bengal',
                postalCode: '700017',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-96633-77673',
                contactType: 'customer service',
                email: 'info@grnlyft.com',
              },
              sameAs: [
                'https://www.facebook.com/grnlyft',
                'https://www.twitter.com/grnlyft',
                'https://www.linkedin.com/company/grnlyft',
                'https://www.instagram.com/grnlyft',
              ],
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
              offers: {
                '@type': 'Offer',
                description: 'Sustainable B2B transportation solutions with electric vehicles',
              },
            }),
          }}
        />
        <script src="/register-sw.js" async></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Toaster position="bottom-right" reverseOrder={false} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
