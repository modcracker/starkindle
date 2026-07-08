import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aerospace & Space Telemetry Etymology - StarKindle',
  description: 'Celestial tracking metrics and aerospace alignment analysis. Explore deep-space transceiver node naming and coordinate systems under the StarKindle namespace.',
  alternates: {
    canonical: 'https://www.starkindle.com/etymology-space',
  }
};
import { 
  ArrowLeft, 
  Map, 
  Compass, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  Radio,
  MapPin,
  Heart
} from 'lucide-react';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

export default function EtymologySpace() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-between selection:bg-indigo-500/30 font-sans" id="space_etymology_layout">
      {/* Top Multi-color Edge Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-pink-400 via-purple-500 to-indigo-600" id="header_rainbow_bar" />

      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to StarKindle.com</span>
          </Link>

          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest hidden sm:inline">
            AEROSPACE METADATA &amp; ALIGNMENT
          </span>
        </div>
      </header>

      {/* Main Content Container with Space Theme */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex-grow space-y-16 relative">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-650/10 blur-3xl pointer-events-none" />

        {/* Hero Area */}
        <div className="space-y-6 text-left border-b border-neutral-800 pb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1 text-[11px] font-mono text-indigo-400 tracking-wide uppercase">
            <Radio className="h-4 w-4 text-indigo-400 animate-pulse" />
            <span>Telemetry &amp; Orbital Navigation System Node</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            StarKindle <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-indigo-405 font-mono">.Space</span>
          </h1>

          <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl font-serif italic text-left">
            &ldquo;Harnessing celestial tracking metrics to align orbital communication, positioning grids, and deep-space telemetry pathways under a single, authoritative namespace.&rdquo;
          </p>
        </div>

        {/* Core Analysis Fields */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* LHS Sidebar details */}
          <div className="md:col-span-4 bg-neutral-950 border border-neutral-800 p-6 rounded-2.5xl space-y-6 text-left font-mono">
            <div>
              <span className="block text-[10px] text-neutral-500 uppercase">Astro Category</span>
              <span className="font-bold text-white text-xs">Orbital Transceiver Node</span>
            </div>
            <div>
              <span className="block text-[10px] text-neutral-500 uppercase">Target Coordinates</span>
              <span className="font-bold text-white text-xs">RA 04h 26m / Dec +15° 52&apos;</span>
            </div>
            <div>
              <span className="block text-[10px] text-neutral-500 uppercase">Primary Application</span>
              <span className="font-bold text-white text-xs">Satcom Telemetry Core</span>
            </div>
            <div>
              <span className="block text-[10px] text-neutral-500 uppercase">Indexing authority</span>
              <span className="font-bold text-emerald-400 text-xs">Verified Class AAA (2009)</span>
            </div>
          </div>

          {/* RHS Analysis Copy */}
          <div className="md:col-span-8 space-y-6 text-left text-neutral-300 text-xs leading-relaxed font-sans">
            <h3 className="text-white text-lg font-bold">Integrating Celestial trajectories with Ignition Principles</h3>
            <p>
              Under cosmic mapping guidelines, the term <strong>StarKindle</strong> serves as a robust compound for deep space, navigation metrics, aerospace tracking channels, and ground station receivers. By linking the absolute scale of starlight coordinates with generative spark acceleration (kindling), developers establish a highly authoritative baseline.
            </p>
            <p>
              For aerospace developers, incorporating lightweight satcom coordination boards, coordinate trackers, real-time telemetry pipelines, and planetary constellation maps within the domain footprint provides complete market differentiation. This asset allows new space projects to immediately bypass early indexing delays.
            </p>

            <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-3">
              <span className="font-bold text-white text-xs flex items-center gap-1.5 font-mono uppercase tracking-wide">
                <Cpu className="h-4 w-4 text-amber-500" /> Space Tech Use Cases
              </span>
              <ul className="list-disc pl-5 mt-1 space-y-1.5 text-neutral-400 text-[11px]">
                <li><strong>Constellation Mapping:</strong> Interactive coordinates for custom astronomy trackers.</li>
                <li><strong>Telemetry Pipelines:</strong> High-bandwidth stream monitors for orbital sensor grids.</li>
                <li><strong>Satellite Transceiver Nodes:</strong> Ground-to-air network link management suites.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Area for the fold */}
        <div className="bg-gradient-to-r from-indigo-950/40 via-neutral-950 to-neutral-950 border border-neutral-800 rounded-2.5xl p-6 sm:p-8 text-center space-y-4">
          <p className="text-xs text-neutral-300 max-w-lg mx-auto leading-relaxed">
            Acquire pristine authority for your aerospace platform. StarKindle.com is fully escrowed by GoDaddy and instantly ready for transfer to active Namecheap or GoDaddy client accounts.
          </p>
          <a
            href={GODADDY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-3 rounded-xl transition-all shadow-md"
          >
            <span>Initiate Secure Escrow Transfer</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </main>

      {/* Curator Profile in dark theme to match layout */}
      <div className="max-w-4xl mx-auto px-6 pb-12 w-full">
        <section className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8" id="who_am_i_profile_dark">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-indigo-500 rounded-2xl blur-xs opacity-30 group-hover:opacity-60 transition duration-500" />
                <img 
                  src="https://www.kataf.com/assets/domainer_profile_1780292036644-Cb2rsnUU.png" 
                  alt="Mateo Silva" 
                  referrerPolicy="no-referrer"
                  className="relative rounded-2xl w-32 h-32 object-cover border border-neutral-800 shadow-md grayscale" 
                />
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-3 text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider block">
                  Preserved by Domain Practitioner
                </span>
                <h3 className="text-lg font-bold text-white">Mateo Silva — Algarve, Portugal</h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                &ldquo;Having spent over a decade safeguarding aged digital properties here on the Portuguese coast, I recognized StarKindle&apos;s immense scope early on. The convergence of aerospace coordinates and technological spark makes this a robust authority node.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-12 text-xs text-neutral-500">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <p className="font-mono text-[11px]">
            © {currentYear} {CORE_DOMAIN} Aerospace Portal. Escrow brokered under standard GoDaddy API registries.
          </p>
          <div className="text-[10px] tracking-wide font-semibold text-neutral-400">
            Website curated by{' '}
            <a 
              href="https://feelize.com/start" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline font-extrabold text-neutral-300 hover:text-indigo-400 transition-all font-sans"
            >
              Feelize
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
