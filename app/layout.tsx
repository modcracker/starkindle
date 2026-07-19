import type {Metadata} from 'next';
import { Inter, Space_Grotesk, Lora } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.starkindle.com'),
  alternates: {
    canonical: '/',
  },
  title: 'starkindle.com is for Sale | Premium Domain Portfolio',
  description: 'The premium domain name starkindle.com is available for immediate acquisition. Explore potential business use cases, brand value analysis, and buy securely on GoDaddy.',
  keywords: ['starkindle', 'starkindle.com', 'domain for sale', 'buy domain', 'premium domain', 'GoDaddy domain', 'feelize', 'brandable domain'],
  openGraph: {
    title: 'starkindle.com | Premium Domain Name for Sale',
    description: 'Establish a powerful, memorable presence. starkindle.com is available for strategic acquisition.',
    type: 'website',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "starkindle.com - Premium Domain Name",
    "image": "https://www.starkindle.com/og-image.png",
    "description": "The premium, brandable domain name starkindle.com is available for secure acquisition. Registered first in 2009, this aged authority asset is fully cleared and ready for immediate push to your registrar.",
    "sku": "starkindle-com",
    "mpn": "starkindle-com",
    "brand": {
      "@type": "Brand",
      "name": "StarKindle"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com",
      "priceCurrency": "USD",
      "price": "9850",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "GoDaddy Domain Brokerage",
        "url": "https://www.godaddy.com"
      }
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "StarKindle",
    "url": "https://www.starkindle.com",
    "description": "A premium global brandable domain portfolio featuring over-a-decade aged digital real estate, SEO authority profiles, and verified trademark-clean assets.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.starkindle.com/premium-portfolio?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#fbfcfa] text-neutral-900 font-sans min-h-screen selection:bg-neutral-250">
        {children}
      </body>
    </html>
  );
}
