'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Map, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  Award,
  Zap,
  Globe,
  Radio,
  BookOpen,
  Calendar,
  HelpCircle
} from 'lucide-react';
import Header from '@/components/Header';

const CORE_DOMAIN = "starkindle.com";

const SITEMAP_PAGES = [
  {
    title: "StarKindle Root Index",
    url: "/",
    description: "Official acquisition showroom landing pad for StarKindle.com.",
    category: "Master Index"
  },
  {
    title: "Premium Hand-picked Portfolio",
    url: "/premium-portfolio",
    description: "Private list of ultra-aged, premium brandable commercial .com digital properties.",
    category: "Investments"
  },
  {
    title: "Etymology Mapping: Aerospace",
    url: "/etymology-space",
    description: "Comprehensive terminology, coordinates, and aerospace track system alignment analysis.",
    category: "Niche Spec"
  },
  {
    title: "Etymology Mapping: Publishing",
    url: "/etymology-publishing",
    description: "Reviewing independent literary development, NLP suites, e-reading distribution, and markdown companion fits.",
    category: "Niche Spec"
  },
  {
    title: "Secure Settlement &amp; Escrow",
    url: "/domain-escrow-security",
    description: "Brokerage safeguards, automated API registry pushes, and ICANN policy fulfillment parameters.",
    category: "Security"
  },
  {
    title: "Algorithmic Domain Age SEO Guide",
    url: "/domain-age-seo-value",
    description: "Technical profile explaining sandbox exemption benefits and crawler priority indexing for over-decade registered naming channels.",
    category: "Search Authority"
  },
  {
    title: "Linguistic Compound Naming Science",
    url: "/brand-naming-synergy",
    description: "Symmetry, phonetics memorability metrics, prefix and suffix pairings to capture target market share.",
    category: "Branding"
  },
  {
    title: "Aerospace Telemetry Core Specifications",
    url: "/aerospace-telemetry-branding",
    description: "Deep-dive specifications targeting ground stations, star maps, coordinate trackers, and telescope calibration platforms.",
    category: "Applications"
  },
  {
    title: "E-book &amp; Creator Platform Advantages",
    url: "/digital-publishing-growth",
    description: "Optimizing growth channels for digital document delivery interfaces, independent author ecosystems, and lexical suites.",
    category: "Applications"
  },
  {
    title: "IP, USPTO &amp; Title Verification Clearances",
    url: "/trademark-availability-guide",
    description: "Legal compliance check verify 100% clean title release to acquiring commercial legal teams.",
    category: "Compliance"
  },
  {
    title: "Historic WHOIS Registrant Timber Timeline",
    url: "/whois-registration-history",
    description: "Detailing original registered epoch from October 2009, server coordinate permanence, and clear background check logs.",
    category: "History"
  },
  {
    title: "Acquisition Purchaser Guidelines FAQ",
    url: "/faq-domain-acquisition",
    description: "Direct reference faq regarding transfer timelines, cost details, and automated escrow brokering operations.",
    category: "Help Center"
  }
];

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="html_sitemap_layout">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-10 flex-grow space-y-10">
        <div className="space-y-3 text-left border-b border-neutral-200/60 pb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-indigo-505/15 border border-indigo-200/40 rounded-full px-3.5 py-1 text-[11px] font-mono text-indigo-900 tracking-wide uppercase shadow-3xs">
            <Map className="h-3.5 w-3.5 text-indigo-600 animate-pulse" />
            <span>Canonical Namespace Mapping Tree</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-none">
            SEO Index Directory &amp; Graph Map
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            A comprehensive, clean visual map pointing directly to all secondary authority nodes, specialized industry pages, historic documentation archives, and domain transaction guides.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-sans text-xs">
          {SITEMAP_PAGES.map((page, idx) => (
            <Link 
              key={idx}
              href={page.url}
              className="bg-white border border-neutral-200/60 rounded-2xl p-5 shadow-3xs hover:border-indigo-400 hover:shadow-2xs transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-indigo-600 font-extrabold uppercase bg-neutral-100 px-2 py-0.5 rounded-full">
                    {page.category}
                  </span>
                  <span className="text-[9px] text-neutral-400 font-mono group-hover:text-indigo-600 transition-colors">
                    {page.url}
                  </span>
                </div>
                <h4 className="font-black text-neutral-950 text-sm group-hover:text-indigo-650 transition-colors">
                  {page.title}
                </h4>
                <p className="text-neutral-500 text-[11px] leading-relaxed">
                  {page.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12 text-xs text-neutral-400">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <p className="font-mono text-[11px]">
            © {currentYear} {CORE_DOMAIN} Directories. Structured schema-level maps verified for web standards.
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
