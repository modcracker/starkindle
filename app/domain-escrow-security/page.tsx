import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Settlement, Escrow Brokerage & Registry Pushes - StarKindle',
  description: 'Brokerage safeguards, automated API registry pushes, and ICANN policy fulfillment parameters. Acquire domains safely via secure GoDaddy broker escrow.',
  alternates: {
    canonical: 'https://www.starkindle.com/domain-escrow-security',
  }
};
import { 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Building, 
  CheckCircle2, 
  ExternalLink,
  Lock,
  Globe,
  Award
} from 'lucide-react';
import Header from '@/components/Header';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

export default function DomainEscrowSecurity() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="escrow_security_layout">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-10 flex-grow space-y-10">
        <div className="space-y-3 text-left border-b border-neutral-200/60 pb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-200/40 rounded-full px-3.5 py-1 text-[11px] font-mono text-emerald-800 tracking-wide uppercase shadow-3xs">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Guaranteed Brokerage Escrow Integration</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-none">
            Secure Escrow &amp; Transfer Protocols
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Acquiring premium digital real estate requires bulletproof commercial infrastructure. Learn how GoDaddy brokers starmark and StarKindle domain assets safely to active buyer registry accounts.
          </p>
        </div>

        {/* Informative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-3xs">
            <Lock className="w-8 h-8 text-indigo-600 mb-4" />
            <h4 className="font-extrabold text-neutral-950 text-sm mb-2">1. Locked Escrow Holder</h4>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              When checkout is initiated, GoDaddy holds the acquiring fees in secure bank-level holding vaults. Funds are never settled directly to the seller until the domain is safely held in your registrar namespace.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-3xs">
            <Clock className="w-8 h-8 text-amber-500 mb-4" />
            <h4 className="font-extrabold text-neutral-950 text-sm mb-2">2. Registry Push Authority</h4>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              Upon holding verification, starmark assets are instantly pushed via registry system APIs to active Namecheap, GoDaddy, or Cloudflare portal namespaces, bypassing typical transfer block windows.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-3xs">
            <Building className="w-8 h-8 text-emerald-600 mb-4" />
            <h4 className="font-extrabold text-neutral-950 text-sm mb-2">3. ICANN Compliant Push</h4>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              Every step matches strict Internet Corporation for Assigned Names and Numbers compliance guidelines. Guaranteed 100% clean title release to the acquiring entity.
            </p>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed text-left max-w-3xl">
          <h3 className="text-sm font-bold text-neutral-950">Systematic Transfer Flow Optimization</h3>
          <p>
            When purchasing StarKindle.com, you are partnering with legal title experts. The process utilizes standard automated authorization codes (EPP transfer keys). Once you obtain this secure code from the broker console, your chosen registrar of record manages the server migration effortlessly. This eliminates manual coordination, ensuring immediate DNS server configuration capability.
          </p>
          <p>
            Our infrastructure maintains zero-downtime DNS standards, allowing developers to configure cloud hosting buckets (such as Amazon S3, Vercel, or Google Cloud Run) during the acquisition window itself.
          </p>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 border border-indigo-805 rounded-2.5xl p-6 sm:p-8 text-center space-y-4 text-white">
          <p className="text-xs text-white/80 max-w-lg mx-auto leading-relaxed font-sans">
            Protect your next project&apos;s digital runway with absolute secure settlement guarantees. Get instant control of the StarKindle.com registry page.
          </p>
          <a
            href={GODADDY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-3 rounded-xl transition-all shadow-md"
          >
            <span>Proceed to GoDaddy Settlement Terminal</span>
            <ExternalLink className="w-3.5 h-3.5 font-bold" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12 text-xs text-neutral-400">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <p className="font-mono text-[11px]">
            © {currentYear} {CORE_DOMAIN} Escrow Standards. Powered by authenticated ICANN registrars.
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
