import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acquisition Guidelines & Purchaser FAQ - StarKindle',
  description: 'Direct reference FAQ regarding transfer timelines, cost details, and automated escrow brokering operations for premium domains.',
  alternates: {
    canonical: 'https://www.starkindle.com/faq-domain-acquisition',
  }
};
import { 
  ArrowLeft, 
  HelpCircle, 
  Award, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ChevronRight
} from 'lucide-react';
import Header from '@/components/Header';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

const FAQS = [
  {
    question: "How long does it take to transfer the domain to my account?",
    answer: "If you transfer the domain within GoDaddy (where the domain is registered of record), the push is instantaneous. For external transfers (e.g. migrating to Namecheap, Cloudflare, Route 53), it can take 1 to 5 days under standard ICANN registry transfer regulations."
  },
  {
    question: "Is the payment secure?",
    answer: "Yes, 100%. The checkout link leads directly to GoDaddy. We utilize standard escrow brokers, meaning the transaction is fully governed by legal domain settlement contracts. Your funds are only released to us once you verify that you have full, active control of the domain name."
  },
  {
    question: "Are there any annual renewal costs?",
    answer: "Standard base domain registration renewals typically run about $10 to $20 USD annually depending on your chosen registrar. There are zero other hidden maintenance fees associated with this asset."
  },
  {
    question: "Can I host this app on Vercel, Firebase, or Google Cloud Run?",
    answer: "Yes. Once the domain is in your account, you can point the DNS zone file records (A, AAAA, CNAMEs, TXT) to any cloud host on the web."
  }
];

export default function FaqDomainAcquisition() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="faq_acquisition_layout">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-10 flex-grow space-y-10">
        <div className="space-y-3 text-left border-b border-neutral-200/60 pb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-indigo-500/10 border border-teal-200/40 rounded-full px-3.5 py-1 text-[11px] font-mono text-teal-850 tracking-wide uppercase shadow-3xs">
            <HelpCircle className="h-3.5 w-3.5 text-teal-655" />
            <span>Buyer Assurance FAQ System Node</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-none">
            Domain Acquisition FAQ
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Clear, transparent answers regarding escrow processes, transfer speeds, fee structures, renewal guidelines, and registrar configurations.
          </p>
        </div>

        {/* FAQs list */}
        <div className="space-y-6 text-left" id="faq_container_list">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-neutral-200/70 rounded-2.5xl p-6 shadow-3xs hover:border-indigo-400 transition-all duration-300"
            >
              <h4 className="font-extrabold text-neutral-950 text-sm mb-2 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-neutral-500 text-xs sm:text-xs leading-relaxed font-sans pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Secure Link */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 rounded-2.5xl p-6 sm:p-8 text-center space-y-4 text-white">
          <p className="text-xs text-white/80 max-w-lg mx-auto leading-relaxed font-sans">
            Ready to secure StarKindle.com? GoDaddy manages secure escrow integrations seamlessly.
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
            © {currentYear} {CORE_DOMAIN} Support. Backed by verified escrow brokerage services.
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
