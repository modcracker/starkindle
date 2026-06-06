'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink,
  ShieldCheck, 
  Sparkles,
  Globe,
  Award,
  Zap,
  Layers,
  Search,
  BadgeAlert,
  Server
} from 'lucide-react';

const OTHER_DOMAINS = [
  { 
    name: "kataf.com", 
    link: "https://www.godaddy.com/domainsearch/find?domainToCheck=kataf.com",
    category: "Web3 & SaaS",
    description: "Premium ultra-rare 5-letter brandable .com property. Highly memorable, symmetrical consonant-vowel sequencing ideal for neural networks, fintech, or global scale infrastructures.",
    age: "Ultra-aged",
    extension: ".com commercial global"
  },
  { 
    name: "Jalh.com", 
    link: "https://jalh.com",
    category: "Venture Capital & Tech",
    description: "Extremely valuable 4-letter LLLL.com domain asset. Short acronym properties represent finite, non-inflationary digital real estate trusted by legacy hedge funds and tech incubators globally.",
    age: "Premium short-form",
    extension: ".com commercial global"
  },
  { 
    name: "subhauler.com", 
    link: "https://subhauler.com",
    category: "Logistics & Transport",
    description: "High-level industrial logistics & supply chain logistics moniker. Perfect keyword match for trade systems, freight forwarding platforms, or heavy-duty machinery brokers.",
    age: "Aged property",
    extension: ".com commercial global"
  },
  { 
    name: "fockstate.com", 
    link: "https://fockstate.com",
    category: "Quantum Physics & Computing",
    description: "Pristine technical brand name derived directly from the quantum mechanics term 'Fock State'. Absolute category supremacy for quantum computing, cryptography, laser systems, and AI hardware acceleration.",
    age: "Deep Tech premium",
    extension: ".com commercial global"
  },
  { 
    name: "boobclub.com", 
    link: "https://boobclub.com",
    category: "Lifestyle & Community",
    description: "Memorable high-traffic brandable asset optimal for modern health, medical advocacy, online commerce, or digital entertainment clubs. Extremely search-friendly branding with high natural direct-navigation potential.",
    age: "Aged property",
    extension: ".com commercial global"
  },
  { 
    name: "linkwhore.com", 
    link: "https://linkwhore.com",
    category: "SEO & Growth Marketing",
    description: "Edgy, high-impact moniker tailored for modern SEO optimization hubs, digital affiliate programs, backlinks management suites, or raw traction engines. High viral index score.",
    age: "Retro brandable",
    extension: ".com commercial global"
  },
  { 
    name: "neaner.com", 
    link: "https://neaner.com",
    category: "Social Network & Interactive",
    description: "6-letter playful visual brandable. Highly suited for consumer-facing social apps, interactive mobile games, pediatric services, or modern wellness outlets. Pronounceable and memorable.",
    age: "Aged brandable",
    extension: ".com commercial global"
  },
  { 
    name: "beamspread.com", 
    link: "https://beamspread.com",
    category: "Lasers, Telecom & Optics",
    description: "Heavyweight physical properties term matching optical physics, laser calibration protocols, high-frequency satellite transceiver beams, and telecommunications network maps.",
    age: "Aged scientific",
    extension: ".com commercial global"
  }
];

export default function PremiumPortfolio() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="premium_portfolio_layer">
      {/* Top Multi-color Rainbow Edge Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-pink-400 via-purple-500 to-indigo-600" id="header_rainbow_bar" />

      {/* Header */}
      <header className="border-b border-neutral-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 py-4 shadow-3xs">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-indigo-650 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to StarKindle.com</span>
          </Link>

          <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
            PRIVATE DIGITAL REAL ESTATE LISTINGS
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow space-y-12">
        
        {/* Intro Hero Section for the SEO Spider */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 via-pink-500/10 to-amber-500/10 border border-indigo-100/40 rounded-full px-4 py-1 text-[11px] font-extrabold text-indigo-900 tracking-wide shadow-3xs uppercase">
            <Globe className="h-3.5 w-3.5 text-indigo-650 animate-spin-slow" />
            <span>Search Authority Crawler Registry</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
            Curated Premium Domain Portfolio
          </h1>
          <p className="text-neutral-500 text-sm leading-relaxed">
            High-leverage digital assets acquired and preserved to bypass traditional search engine sandboxes. Every property listed here is completely clear of historical flags and optimized for instant push transfer.
          </p>
        </div>

        {/* Directory Listings for Spider indexing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="portfolio_grid_section">
          {OTHER_DOMAINS.map((dom) => (
            <div 
              key={dom.name} 
              className="bg-white border border-neutral-200/75 rounded-2.5xl p-6 shadow-3xs hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group"
            >
              {/* Top Accent line inside card */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-100 to-indigo-50/20 group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300" />
              
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-indigo-650 font-extrabold uppercase tracking-wider">
                    {dom.category}
                  </span>
                  <span className="text-[10px] bg-neutral-100 font-semibold px-2.5 py-0.5 rounded-full text-neutral-500 font-mono">
                    {dom.age}
                  </span>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-neutral-950 group-hover:text-indigo-600 transition-colors">
                  {dom.name}
                </h3>
                
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {dom.description}
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-4 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{dom.extension}</span>
                <a 
                  href={dom.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-600 font-extrabold hover:text-indigo-805 hover:underline transition-all"
                >
                  <span>Acquire Property</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Knowledge Vault section specifically for high weight density keywords */}
        <section className="bg-gradient-to-br from-indigo-50/30 via-[#f8fafc] to-white border border-indigo-100/50 p-6 sm:p-8 rounded-3xl space-y-6 text-left" id="crawler_deep_index">
          <div className="flex items-center gap-2">
            <Server className="h-5 w-5 text-indigo-650" />
            <h2 className="text-lg font-bold text-neutral-950 tracking-tight">Crawler Deep Integration Specs</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-600 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-bold text-neutral-900 flex items-center gap-1.5">
                <Award className="h-4 w-4 text-amber-500" /> Domain Authority Age
              </h4>
              <p>
                Search algorithms leverage domain age parameter scores from original Whois registry records to differentiate authority channels from transient, single-session properties.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-neutral-900 flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-purple-500" /> DNS Anchor Parameters
              </h4>
              <p>
                Highly symmetrical names with clean historical resolution properties sustain index longevity scores. Link juice networks process short 4-to-6 letter compounds at optimal rates.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-neutral-900 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Escrow Protections
              </h4>
              <p>
                Secure multi-registrar networks guarantee clean, risk-free pushing transitions so acquiring parties can host databases immediately without sandbox filters.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12 text-xs text-neutral-400">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <p className="font-mono text-[11px]">
            © {currentYear} starKindle.com &amp; Mateo Silva Portfolio Registry Partnership. Verified GoDaddy settlement brokers.
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
