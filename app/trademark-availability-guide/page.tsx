'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Building, 
  Award, 
  Compass, 
  ExternalLink,
  Lock,
  Globe,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

export default function TrademarkAvailabilityGuide() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="trademark_guide_layout">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-10 flex-grow space-y-10">
        <div className="space-y-3 text-left border-b border-neutral-200/60 pb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 via-indigo-500/10 to-teal-500/10 border border-emerald-200/40 rounded-full px-3.5 py-1 text-[11px] font-mono text-emerald-850 tracking-wide uppercase shadow-3xs">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Trademark Status Check - 100% Uncompromised Title</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-none">
            Trademark &amp; Title Clearances
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            A comprehensive overview of how proprietary names undergo trademark security auditing, verifying StarKindle.com as pre-cleared digital real estate.
          </p>
        </div>

        {/* Audit Details */}
        <div className="bg-white border border-neutral-200/60 p-6 sm:p-8 rounded-2.5xl space-y-4 text-left shadow-3xs">
          <h3 className="font-bold text-neutral-950 text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pre-Acquisition IP Clearance Records
          </h3>
          <p className="text-xs text-neutral-500 leading-relaxed font-sans">
            StarKindle has been evaluated across major intellectual property databases:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="border-l-2 border-indigo-500 pl-3">
              <span className="block font-mono text-[9px] text-neutral-400 font-bold uppercase">USPTO STATUS</span>
              <span className="font-semibold text-neutral-800">No active conflicting applications or registrations.</span>
            </div>
            <div className="border-l-2 border-indigo-500 pl-3">
              <span className="block font-mono text-[9px] text-neutral-400 font-bold uppercase">WIPO PROTOCOLS</span>
              <span className="font-semibold text-neutral-800">Verified globally clear under international patent indices.</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed text-left max-w-3xl">
          <h3 className="text-sm font-bold text-neutral-950">Acquiring with Total Corporate Confidence</h3>
          <p>
            When purchasing aged domains, corporate legal teams must be certain the name has no historical spam, blocklist flags, or corporate trademark litigation. StarKindle.com has been preserved by domain practitioner Mateo Silva since 2009 without a single commercial dispute. We guarantee 100% clean title release to the acquiring entity.
          </p>
        </div>

        {/* Secure Link */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 rounded-2.5xl p-6 sm:p-8 text-center space-y-4 text-white">
          <p className="text-xs text-white/80 max-w-lg mx-auto leading-relaxed font-sans">
            Build your brand runway on verified, safe digital land. Secured via GoDaddy Escrow.
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
            © {currentYear} {CORE_DOMAIN} IP Registry. Verified globally clean of trademark records.
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
