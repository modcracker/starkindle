import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-book & Digital Creator Platform Growth Channels - StarKindle',
  description: 'Optimizing growth channels for digital document delivery interfaces, independent author ecosystems, and lexical suites under the StarKindle banner.',
  alternates: {
    canonical: 'https://www.starkindle.com/digital-publishing-growth',
  }
};
import { 
  ArrowLeft, 
  BookOpen, 
  Edit3, 
  Award, 
  Compass, 
  ExternalLink,
  ShieldCheck,
  Globe
} from 'lucide-react';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

export default function DigitalPublishingGrowth() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-800 flex flex-col justify-between selection:bg-amber-100 font-sans" id="publishing_growth_layout">
      {/* Top Multi-color Edge Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-pink-400 via-purple-500 to-indigo-600" id="header_rainbow_bar" />

      {/* Header */}
      <header className="border-b border-amber-100/40 bg-white/90 backdrop-blur-md sticky top-0 z-50 py-4 shadow-3xs">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-amber-700 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to StarKindle.com</span>
          </Link>

          <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
            DIGITAL LITERARY STRATEGY
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex-grow space-y-12">
        <div className="space-y-4 text-left border-b border-amber-200/40 pb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100/60 border border-amber-200/40 rounded-full px-4 py-1 text-[11px] font-mono text-amber-900 tracking-wide uppercase shadow-3xs">
            <BookOpen className="h-3.5 w-3.5 text-amber-700" />
            <span>Publishing Innovation &amp; Creator Platforms</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-black text-neutral-950 tracking-tight leading-none">
            E-book Distribution &amp; Literary Tech
          </h1>

          <p className="text-neutral-705 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
            How e-readers, indie author collectives, writing software, and structured reader libraries leverage StarKindle&apos;s direct associations.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left font-serif">
          <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-3xs">
            <Edit3 className="w-6 h-6 text-rose-500 mb-3" />
            <h4 className="font-bold text-neutral-950 text-sm mb-1">Author Suite &amp; Markdown</h4>
            <p className="text-neutral-600 text-[11px] leading-relaxed">
              Perfect brand fit for distraction-free markdown journals, structured vocabulary compilers, offline dictionaries, and modern character-mapping portals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-3xs">
            <BookOpen className="w-6 h-6 text-amber-600 mb-3" />
            <h4 className="font-bold text-neutral-950 text-sm mb-1">EPUB Distributors</h4>
            <p className="text-neutral-600 text-[11px] leading-relaxed">
              Provides absolute categories authority for independent writing hubs, local physical book clubs, online publishing guides, and reading mentors.
            </p>
          </div>
        </div>

        {/* Informative text */}
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed text-left max-w-3xl font-sans">
          <h3 className="text-sm font-bold text-neutral-950">Capturing the Publishing Horizon</h3>
          <p>
            With the rapid growth of EPUB/MOBI e-reading formats and collaborative NLP writing engines, the term <strong>Kindle</strong> remains a dominant market benchmark. StarKindle.com coordinates beautifully with this paradigm. It offers digital book distribution channels, private manuscript vaults, and writing metrics dashboards a rare chance to build direct, continuous organic reach from day one.
          </p>
        </div>

        {/* Secure Link */}
        <div className="bg-gradient-to-r from-amber-50 to-[#fffbf2]/90 border border-amber-200/45 rounded-2.5xl p-6 sm:p-8 text-center space-y-4 shadow-3xs">
          <p className="text-xs text-neutral-750 max-w-lg mx-auto leading-relaxed font-sans">
            Secure the most poetic brand name in the digital reading marketplace. Secure checkout handled by GoDaddy Escrow.
          </p>
          <a
            href={GODADDY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-xl transition-all shadow-md font-sans"
          >
            <span>Proceed to GoDaddy Settlement</span>
            <ExternalLink className="w-3.5 h-3.5 font-bold" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-100 bg-white py-12 text-xs text-neutral-400">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <p className="font-mono text-[11px]">
            © {currentYear} {CORE_DOMAIN} Publishing Archive. Managed securely using top tier registrars.
          </p>
          <div className="text-[10px] tracking-wide font-semibold text-neutral-500">
            Website curated by{' '}
            <a 
              href="https://feelize.com/start" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline font-extrabold text-neutral-700 hover:text-indigo-650 transition-all font-sans"
            >
              Feelize
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
