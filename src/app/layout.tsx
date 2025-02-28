import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DRAPS - Teles i Roba a metres | La Bisbal d\'Empordà',
  description: 'Botiga especialitzada en teles i teixits a La Bisbal d\'Empordà. Més de 40 anys d\'experiència en teixits per vestir, decoració, carnaval i manualitats.',
  keywords: 'teles, teixits, roba a metres, La Bisbal d\'Empordà, botiga de teles, patchwork, decoració',
  openGraph: {
    title: 'DRAPS - Teles i Roba a metres',
    description: 'Especialistes en teixits des de fa 40 anys a La Bisbal d\'Empordà (Girona)',
    images: ['/img-draps.png'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://draps.cat'
  },
  icons: {
    icon: '/app/favicon.ico',
    shortcut: '/app/favicon.ico',
    apple: '/app/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca">
      <head>
        <link rel="icon" href="/app/favicon.ico" />
        <link rel="shortcut icon" href="/app/favicon.ico" />
        <link rel="apple-touch-icon" href="/app/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
      </body>
    </html>
  )
}