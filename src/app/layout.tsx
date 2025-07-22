import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '../components/providers/providers'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SwissCode - Empresa Suiza de Software y Ciberseguridad',
    template: '%s | SwissCode'
  },
  description: 'SwissCode: Empresa líder suiza especializada en desarrollo de software de alta calidad, ciberseguridad avanzada y transformación digital para el mercado suizo.',
  keywords: ['empresa software suiza', 'ciberseguridad Suiza', 'desarrollo software Zurich', 'transformación digital Suiza'],
  authors: [{ name: 'SwissCode Team' }],
  creator: 'SwissCode Software & Cybersecurity',
  publisher: 'SwissCode',
  metadataBase: new URL('https://swisscode.ch'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
      'de-CH': '/de',
      'fr-CH': '/fr',
      'it-CH': '/it',
      'en-US': '/en'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://swisscode.ch',
    siteName: 'SwissCode Software',
    title: 'SwissCode - Empresa Suiza de Software y Ciberseguridad',
    description: 'SwissCode: Empresa líder suiza especializada en desarrollo de software de alta calidad, ciberseguridad avanzada y transformación digital para el mercado suizo.',
    images: [
      {
        url: '/swisscode-logo.svg',
        width: 1200,
        height: 630,
        alt: 'SwissCode - Premium Software & Cybersecurity'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwissCode - Empresa Suiza de Software y Ciberseguridad',
    description: 'SwissCode: Empresa líder suiza especializada en desarrollo de software de alta calidad, ciberseguridad avanzada y transformación digital para el mercado suizo.',
    images: ['/swisscode-logo.svg'],
    creator: '@SwissCode'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
