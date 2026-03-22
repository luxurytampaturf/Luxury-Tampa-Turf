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
