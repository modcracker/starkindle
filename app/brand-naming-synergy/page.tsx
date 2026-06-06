'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Sparkles, 
  Award, 
  Compass, 
  Bookmark,
  ExternalLink,
  ShieldCheck,
  Globe
} from 'lucide-react';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

export default function BrandNamingSynergy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="brand_naming_layout">
      {/* Top Multi-color Edge Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-pink-400 via-purple-500 to-indigo-600" id="header_rainbow_bar" />

      {/* Header */}
      <header className="border-b border-neutral-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 py-4 shadow-3xs">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-indigo-650 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to StarKindle.com</span>
          </Link>

          <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
            COGNITIVE LINGUISTIC ANALYSIS
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex-grow space-y-12">
        <div className="space-y-4 text-left border-b border-neutral-200/60 pb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-pink-200/40 rounded-full px-4 py-1 text-[11px] font-mono text-indigo-900 tracking-wide uppercase shadow-3xs">
            <Sparkles className="h-3.5 w-3.5 text-pink-600" />
            <span>Brand Naming Science &amp; Compound Phonetics</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
            Brand Naming Symmetry &amp; Science
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Why balanced compounds have captured global mindshare, and how StarKindle pairs cosmic aspiration with ignition triggers.
          </p>
        </div>

        {/* Compound pairing visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 rounded-2.5xl border border-neutral-200/60 shadow-3xs hover:border-indigo-100 transition-all">
            <span className="font-mono text-[9px] text-indigo-600 font-extrabold uppercase">PREFIX MORPHEME</span>
            <h3 className="text-2xl font-black text-neutral-950 mt-1 mb-2">Star-</h3>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              Evokes celestial coordinates, positioning navigation, aerospace telemetry, and universe-scale clarity. Highly stable under cross-language pronunciation systems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2.5xl border border-neutral-200/60 shadow-3xs hover:border-indigo-100 transition-all">
            <span className="font-mono text-[9px] text-pink-600 font-extrabold uppercase font-sans">SUFFIX MORPHEME</span>
            <h3 className="text-2xl font-black text-neutral-950 mt-1 mb-2">-Kindle</h3>
            <p className="text-neutral-500 text-[11px] leading-relaxed font-sans">
              Implies active ignition, starting literary fires, catalyst generation, e-reading distribution, mentoring portals, and digital document delivery systems.
            </p>
          </div>
        </div>

        {/* Detailed linguistic profile */}
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed text-left max-w-3xl">
          <h3 className="text-sm font-bold text-neutral-950">Phonetic Memorability Index</h3>
          <p>
            The compound is perfectly balanced with alternating hard consonant stops and soft vowels: <strong>Star • Kin • dle</strong>. This creates a balanced, highly memorable cadence during verbal communication, elevating the name&apos;s direct radio-test rating. When users hear the name, there is exactly one way to spell it. This avoids spelling errors that trigger traffic leakage to secondary domains.
          </p>
          <p>
            In consumer psychology, symmetrical associations yield higher trust levels. StarKindle fits alongside modern tech giants and literary leaders by combining premium credibility with simple spelling parameters.
          </p>
        </div>

        {/* Secure Link */}
        <div className="bg-gradient-to-r from-indigo-950 via-purple-900 to-indigo-950 border border-indigo-100/10 rounded-2.5xl p-6 sm:p-8 text-center space-y-4 text-white">
          <p className="text-xs text-white/80 max-w-lg mx-auto leading-relaxed font-sans">
            Own the supreme visual and phonetic pedigree of StarKindle.com. Secured via official GoDaddy broker services.
          </p>
          <a
            href={GODADDY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-3 rounded-xl transition-all shadow-md"
          >
            <span>Proceed to GoDaddy Settlement</span>
            <ExternalLink className="w-3.5 h-3.5 font-bold" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12 text-xs text-neutral-400">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <p className="font-mono text-[11px]">
            © {currentYear} {CORE_DOMAIN} Naming Authority. Built on secure linguistic research foundations.
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
