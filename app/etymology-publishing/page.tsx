import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Literature & Creator Platform Etymology - StarKindle',
  description: 'Analyzing independent literary development, NLP suites, e-reading distribution, and digital publishing under the StarKindle domain authority.',
  alternates: {
    canonical: 'https://www.starkindle.com/etymology-publishing',
  }
};
import { 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  ExternalLink,
  Award,
  ChevronRight,
  Heart,
  Bookmark,
  Edit3
} from 'lucide-react';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

export default function EtymologyPublishing() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-800 flex flex-col justify-between selection:bg-amber-100 font-sans" id="publishing_etymology_layout">
      {/* Top Multi-color Edge Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-pink-400 via-purple-500 to-indigo-600" id="header_rainbow_bar" />

      {/* Header with Warm Linen styling */}
      <header className="border-b border-amber-100/40 bg-white/90 backdrop-blur-md sticky top-0 z-50 py-4 shadow-3xs">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-amber-700 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to StarKindle.com</span>
          </Link>

          <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest hidden sm:inline">
            LITERATURE &amp; READER KNOWLEDGE ARCHIVE
          </span>
        </div>
      </header>

      {/* Main Content Container with Editorial/Serif Theme */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex-grow space-y-16 relative">
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-amber-200/10 blur-3xl pointer-events-none" />

        {/* Hero Area */}
        <div className="space-y-6 text-left border-b border-amber-200/40 pb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100/50 border border-amber-200/30 rounded-full px-4 py-1 text-[11px] font-mono text-amber-800 tracking-wide uppercase">
            <Bookmark className="h-3.5 w-3.5 text-amber-700" />
            <span>Independent Literature &amp; Dynamic Reader Hub</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-neutral-950 tracking-tight leading-none">
            StarKindle <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent font-sans">.Reader</span>
          </h1>

          <p className="text-neutral-700 text-lg sm:text-2xl leading-relaxed max-w-2xl font-serif italic text-left">
            &ldquo;Forging a distraction-free home for classic literature, storytelling interfaces, collaborative AI writing companions, and digital e-readers.&rdquo;
          </p>
        </div>

        {/* Core Analysis Fields */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* LHS Sidebar details */}
          <div className="md:col-span-4 bg-white border border-amber-200/50 p-6 rounded-2.5xl space-y-6 text-left font-serif shadow-3xs">
            <div>
              <span className="block text-[10px] text-neutral-400 uppercase font-mono tracking-wider">Literary Category</span>
              <span className="font-bold text-neutral-900 text-sm">Distraction-Free Publishing</span>
            </div>
            <div>
              <span className="block text-[10px] text-neutral-400 uppercase font-mono tracking-wider">Linguistic Roots</span>
              <span className="font-bold text-neutral-900 text-sm">Star (Aspiration) • Kindle (Illumination)</span>
            </div>
            <div>
              <span className="block text-[10px] text-neutral-400 uppercase font-mono tracking-wider">System Integration</span>
              <span className="font-bold text-neutral-900 text-sm">EPUB, Markdown &amp; NLP Software</span>
            </div>
            <div>
              <span className="block text-[10px] text-neutral-400 uppercase font-mono tracking-wider">Authority Weight</span>
              <span className="font-semibold text-emerald-600 flex items-center gap-1 text-xs">
                <Award className="w-3.5 h-3.5 text-emerald-500" /> High Age Authoritative (2009)
              </span>
            </div>
          </div>

          {/* RHS Analysis Copy */}
          <div className="md:col-span-8 space-y-6 text-left text-neutral-600 text-xs leading-relaxed font-sans">
            <h3 className="text-neutral-950 text-xl font-bold font-serif">Redefining the digital workspace for modern literature advocates</h3>
            <p>
              The compound naming structure of <strong>StarKindle</strong> draws immediate parallels with e-readers, distributors, and writing suites. Combining the cosmic vision of <strong className="text-neutral-900">&ldquo;Star&rdquo;</strong> with the kindle paradigm encapsulates an interactive workspace built around active reading, storytelling, compilation, and linguistic development.
            </p>
            <p>
              For e-book creators, indy authors, digital publishers, and educational platforms, aligning under StarKindle.com adds a layer of established, mature credibility that traditional, newly registered terms simply cannot provide. This asset is fully cleared of corporate blocklists and is ready for immediate marketplace deployment.
            </p>

            <div className="p-5 bg-white border border-amber-100 rounded-2xl space-y-3 shadow-3xs">
              <span className="font-bold text-amber-900 text-xs flex items-center gap-1.5 font-serif uppercase tracking-wide">
                <Edit3 className="h-4 w-4 text-rose-500" /> Publishing Capabilities
              </span>
              <ul className="list-disc pl-5 mt-1 space-y-1.5 text-neutral-600 text-[11px]">
                <li><strong>Markdown Integration:</strong> Highly organized story directories with custom tags.</li>
                <li><strong>Typography Frameworks:</strong> Pre-compiled, premium optical sizing selectors for authors.</li>
                <li><strong>Writing Accelerators:</strong> Offline-safe word processors, lexical structures, and dictionary plugins.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Area for the fold */}
        <div className="bg-gradient-to-r from-amber-50 to-[#fffbf2]/90 border border-amber-200/40 rounded-2.5xl p-6 sm:p-8 text-center space-y-4 shadow-3xs">
          <p className="text-xs text-neutral-700 max-w-lg mx-auto leading-relaxed">
            Acquire pristine authority for your literary brand. StarKindle.com is fully escrowed by GoDaddy and instantly ready for transfer to active Namecheap or GoDaddy client accounts.
          </p>
          <a
            href={GODADDY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-xl transition-all shadow-md"
          >
            <span>Initiate Secure Escrow Transfer</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </main>

      {/* Curator Profile in editor mode */}
      <div className="max-w-4xl mx-auto px-6 pb-12 w-full">
        <section className="bg-white border border-neutral-200/60 rounded-3xl p-6 sm:p-8 shadow-3xs" id="who_am_i_profile_publishing">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-rose-400 rounded-2xl blur-xs opacity-30 group-hover:opacity-60 transition duration-500" />
                <img 
                  src="https://www.kataf.com/assets/domainer_profile_1780292036644-Cb2rsnUU.png" 
                  alt="Mateo Silva" 
                  referrerPolicy="no-referrer"
                  className="relative rounded-2xl w-32 h-32 object-cover border border-neutral-200 shadow-md" 
                />
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-3 text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-amber-700 font-bold uppercase tracking-wider block">
                  Curated with care in Algarve, Portugal
                </span>
                <h3 className="text-lg font-bold text-neutral-900 font-serif">Mateo Silva — Portfolio Curator</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                &ldquo;I registered StarKindle over ten years ago to preserve its literary rhythm and symmetrical phonetics. As my wife and I focus our efforts on planting vineyards in beautiful southern Portugal, this asset is waiting for its forever home.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-amber-100 bg-white py-12 text-xs text-neutral-400">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <p className="font-mono text-[11px]">
            © {currentYear} {CORE_DOMAIN} Literature Portal. Escrow brokered under standard GoDaddy API registries.
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
