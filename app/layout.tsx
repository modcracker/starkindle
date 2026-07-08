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
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${lora.variable}`}>
      <body suppressHydrationWarning className="bg-[#fbfcfa] text-neutral-900 font-sans min-h-screen selection:bg-neutral-250">
        {children}
      </body>
    </html>
  );
}
