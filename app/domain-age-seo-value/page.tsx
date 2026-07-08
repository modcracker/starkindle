import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domain Age SEO Authority & Sandbox Exemption Guide - StarKindle',
  description: 'Technical profile explaining domain age benefits, crawler priority indexing, and sandbox exemption guidelines for over-decade registered naming channels.',
  alternates: {
    canonical: 'https://www.starkindle.com/domain-age-seo-value',
  }
};
import { 
  ArrowLeft, 
  Award, 
  TrendingUp, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Compass,
  Clock
} from 'lucide-react';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

export default function DomainAgeSeoValue() {
  const currentYear = new Date().getFullYear();
  const domainAge = currentYear - 2009;

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="domain_age_seo_layout">
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
            SEO SANDBOX EXEMPTION RESEARCH
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex-grow space-y-12">
        <div className="space-y-4 text-left border-b border-neutral-200/60 pb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-indigo-500/10 border border-amber-200/40 rounded-full px-4 py-1 text-[11px] font-mono text-amber-850 tracking-wide uppercase shadow-3xs">
            <TrendingUp className="h-3.5 w-3.5 text-amber-600" />
            <span>Aged Domain Authority Metric Profile - Registered 2009</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
            Algorithmic Value of Domain Age
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Unpacking why a domain continuously registered since 2009 ({domainAge}+ years of trust history) is one of the highest leverage assets a marketing and product roadmap can incorporate.
          </p>
        </div>

        {/* Dynamic Metric Display */}
        <div className="bg-white border border-neutral-200/75 rounded-2.5xl p-6 sm:p-8 shadow-xs text-left grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border-b sm:border-b-0 sm:border-r border-neutral-100 pb-4 sm:pb-0 sm:pr-6">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase">Trust Rank Core Score</span>
            <span className="block text-3xl font-black text-indigo-650 mt-1">Class-AAA</span>
            <span className="block text-[10px] text-neutral-400 mt-1">Based on uninterrupted WHOIS epoch timeline records.</span>
          </div>

          <div className="border-b sm:border-b-0 sm:border-r border-neutral-100 pb-4 sm:pb-0 sm:pr-6">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase">SEO Sandbox Delays</span>
            <span className="block text-3xl font-black text-emerald-650 mt-1">0 Days</span>
            <span className="block text-[10px] text-neutral-400 mt-1">Bypass standard search quarantine windows.</span>
          </div>

          <div>
            <span className="block text-[10px] font-mono text-neutral-400 uppercase">Indexing Priority Score</span>
            <span className="block text-3xl font-black text-amber-650 mt-1">Instantaneous</span>
            <span className="block text-[10px] text-neutral-400 mt-1">Continuous ping longevity yields higher crawler rates.</span>
          </div>
        </div>

        {/* Technical Deep Dive */}
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed text-left max-w-3xl">
          <h3 className="text-sm font-bold text-neutral-950">How Age Mitigates Ranking Friction</h3>
          <p>
            When a completely new domain is registered, search engine indexing cycles subject the site to a period often called the <em>&ldquo;SEO Sandbox&rdquo;</em>. This algorithmic filter exists to prevent low-value, transient, auto-generated content from spamming search channels. A freshly registered domain can take 6 to 12 months to earn baseline ranking credibility, regardless of content quality.
          </p>
          <p>
            An asset registered in <strong>2009</strong> like StarKindle.com bypasses this sandbox completely. Because the core DNS registry has recorded this endpoint as a stable node for over {domainAge} years, crawlers treat incoming content updates with absolute priority.
          </p>
        </div>

        {/* Secure Link */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 rounded-2.5xl p-6 sm:p-8 text-center space-y-4 text-white">
          <p className="text-xs text-white/80 max-w-lg mx-auto leading-relaxed font-sans">
            Do not waste critical product dev cycles in sandbox jail. Claim the search-prioritized footprint of StarKindle.com immediately on GoDaddy.
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
            © {currentYear} {CORE_DOMAIN} SEO Authority. Structured for optimal search ranking metrics.
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
