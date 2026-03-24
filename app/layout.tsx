import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Luxury Tampa Turf — Premium Artificial Turf Installation',
    template: '%s — Luxury Tampa Turf',
  },
  description:
    'Premium artificial turf and paver installation in Tampa, FL. Get a free quote with our proprietary real-time visualization software.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Luxury Tampa Turf — Premium Artificial Turf Installation',
    description:
      'Premium artificial turf and paver installation in Tampa, FL. Get a free quote with our proprietary real-time visualization software.',
    url: 'https://luxurytampaturf.com',
    siteName: 'Luxury Tampa Turf',
    images: [
      {
        url: 'https://luxurytampaturf.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luxury Tampa Turf',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Tampa Turf — Premium Artificial Turf Installation',
    description:
      'Premium artificial turf and paver installation in Tampa, FL. Get a free quote with our proprietary real-time visualization software.',
    images: ['https://luxurytampaturf.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}