import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://draps.cat'),
  title: {
    default: 'DRAPS - Teles i Roba a metres | La Bisbal d\'Empordà',
    template: '%s | DRAPS',
  },
  description: 'Botiga especialitzada en teles i teixits a La Bisbal d\'Empordà (Girona). Més de 40 anys d\'experiència en teixits per vestir, decoració, carnaval, patchwork i manualitats. Compra teles a metres.',
  keywords: [
    'teles', 'teixits', 'roba a metres', 'La Bisbal d\'Empordà', 'Girona',
    'botiga de teles', 'patchwork', 'decoració', 'carnaval', 'teles per vestir',
    'teles per la llar', 'manualitats', 'costura', 'confecció', 'DRAPS',
    'telas', 'tejidos', 'telas a metros', 'tienda de telas',
  ],
  authors: [{ name: 'DRAPS - Carme Ros Noguer' }],
  creator: 'DRAPS',
  publisher: 'DRAPS',
  openGraph: {
    type: 'website',
    locale: 'ca_ES',
    url: 'https://draps.cat',
    siteName: 'DRAPS - Teles i Teixits',
    title: 'DRAPS - Teles i Roba a metres | La Bisbal d\'Empordà',
    description: 'Especialistes en teixits des de fa 40 anys a La Bisbal d\'Empordà (Girona). Teles per vestir, decoració, carnaval i manualitats.',
    images: [
      {
        url: '/img-draps.png',
        width: 800,
        height: 600,
        alt: 'DRAPS - Botiga de teles i teixits a La Bisbal d\'Empordà',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DRAPS - Teles i Roba a metres',
    description: 'Especialistes en teixits des de fa 40 anys a La Bisbal d\'Empordà (Girona)',
    images: ['/img-draps.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://draps.cat',
  },
  category: 'shopping',
}

// Schema.org JSON-LD per a LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://draps.cat',
  name: 'DRAPS - Teles i Teixits',
  description: 'Botiga especialitzada en teles i teixits a La Bisbal d\'Empordà. Més de 40 anys d\'experiència.',
  url: 'https://draps.cat',
  telephone: '+34627900477',
  email: 'info@draps.cat',
  image: 'https://draps.cat/img-draps.png',
  logo: 'https://draps.cat/logo-draps.png',
  priceRange: '€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Carrer Cavallers, 12',
    addressLocality: 'La Bisbal d\'Empordà',
    addressRegion: 'Girona',
    postalCode: '17100',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.9592097,
    longitude: 3.0374373,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '17:00',
      closes: '20:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '17:00',
      closes: '20:30',
    },
  ],
  sameAs: [],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 41.9592097,
      longitude: 3.0374373,
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Teles i Teixits',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Teixits per vestir i bàsics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Teixits per carnaval i espectacles' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Teixits per la llar i decoració' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Teixits per manualitats i patchwork' } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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