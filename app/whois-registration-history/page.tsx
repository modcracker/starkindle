'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Clock, 
  Award, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Server
} from 'lucide-react';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

export default function WhoisRegistrationHistory() {
  const currentYear = new Date().getFullYear();
  const domainAge = currentYear - 2009;

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="whois_history_layout">
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
            REGISTRANT RECORD LEDGER
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex-grow space-y-12">
        <div className="space-y-4 text-left border-b border-neutral-200/60 pb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 via-pink-500/10 to-amber-500/10 border border-indigo-200/40 rounded-full px-4 py-1 text-[11px] font-mono text-indigo-950 tracking-wide uppercase shadow-3xs">
            <Calendar className="h-3.5 w-3.5 text-indigo-600" />
            <span>Continuous Registry Registry Tenure Metrics</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-none">
            Registry &amp; WHOIS History
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Tracing the historic registration timestamps, server configurations, and tenure stability of StarKindle.com since its initial birth in 2009.
          </p>
        </div>

        {/* Timeline Log */}
        <div className="bg-white border border-neutral-200/70 p-6 rounded-2.5xl space-y-6 text-left shadow-3xs font-mono text-xs">
          <h3 className="font-sans font-extrabold text-neutral-950 text-sm flex items-center gap-1.5">
            <Server className="w-4 h-4 text-indigo-600" /> Domain Epoch Auditing Coordinates
          </h3>
          
          <div className="space-y-4 border-l border-neutral-150 pl-4 ml-2">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-indigo-650 rounded-full" />
              <span className="block text-[10px] text-neutral-400 font-bold uppercase">October 2009</span>
              <span className="font-semibold text-neutral-900 block">Initial Registrar Registration Epoch</span>
              <span className="text-[10px] text-neutral-400">Authenticated and captured in regional database vaults.</span>
            </div>

            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-neutral-300 rounded-full" />
              <span className="block text-[10px] text-neutral-400 font-bold uppercase">2010 - 2024</span>
              <span className="font-semibold text-neutral-900 block">Uninterrupted Namespace Security Checks</span>
              <span className="text-[10px] text-neutral-400">Maintained as standard clear status by ICANN standards.</span>
            </div>

            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
              <span className="block text-[10px] text-neutral-400 font-bold uppercase">Current Epoch</span>
              <span className="font-semibold text-neutral-900 block">Instant Automated Push-Ready Escrow Status</span>
              <span className="text-[10px] text-emerald-600 font-semibold">Asset perfectly primed for direct API pushing.</span>
            </div>
          </div>
        </div>

        {/* Informative Copy */}
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed text-left max-w-3xl">
          <h3 className="text-sm font-bold text-neutral-950">Why Clear Registry History is Essential</h3>
          <p>
            Many aged properties on the market today have histories involving high-bounce redirects, spam email campaigns, or affiliate scraping patterns. This can result in domains being blacklisted in system engines or mail servers. StarKindle.com represents an uncompromised path. Verified clear of spam filters, it provides developers and businesses with a clean, reputable brand foundation.
          </p>
        </div>

        {/* Secure Link Banner */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 rounded-2.5xl p-6 sm:p-8 text-center space-y-4 text-white">
          <p className="text-xs text-white/80 max-w-lg mx-auto leading-relaxed font-sans">
            Secure an asset with an pristine {domainAge}-year security track record. Ready for immediate push.
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
            © {currentYear} {CORE_DOMAIN} Registry Records. Verified since inception in 2009.
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
