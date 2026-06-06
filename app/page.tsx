'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Sparkles,
  MapPin,
  Heart,
  Compass,
  HelpCircle,
  Clock,
  ChevronDown,
  Globe,
  BookOpen,
  CheckCircle,
  Award,
  Zap
} from 'lucide-react';
import Header from '@/components/Header';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";


export default function Home() {
  const currentYear = new Date().getFullYear();
  const ageTenure = currentYear - 2009; // starKindle registered tenure

  // FAQ interactive state
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How secure is the domain transfer process?",
      answer: "The transaction is fully brokered by GoDaddy. Upon secure checkout, your funds are held safely in escrow until the domain ownership is successfully modified and pushed directly to your personal registrar account."
    },
    {
      question: "Why does a domain registered in 2009 carry premium value?",
      answer: "Established domains have high domain age authority. This allows your new project to bypass standard search engine 'sandbox' delays, ranking faster on major indexing networks from day one."
    },
    {
      question: "Are there any annual fees after purchasing?",
      answer: "No. You pay a single, one-time acquisition price for full ownership. After that, you only pay standard annual registrar renewals (typically $10–$15/year) to your current registrar of choice."
    },
    {
      question: "Can I make an offer option or rent-to-own?",
      answer: "Yes, the GoDaddy landing page offers flexible checkout tools, including standard buy-now, payment installment options, and official offer submissions reviewed securely."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="domain_land_clean">
      <Header />

      {/* 2. LAYER: High-Impact, Vibrant, Colorful & Bright Hero Section */}
      <div className="relative overflow-hidden py-14 sm:py-20 bg-gradient-to-b from-indigo-105/40 via-purple-50/15 to-white border-b border-indigo-100/20" id="top_vibrant_fold">
        {/* Dynamic Colorful glows and aura meshes */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-rose-350/20 via-pink-200/10 to-transparent blur-4xl pointer-events-none animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-205/20 via-indigo-200/15 to-transparent blur-4xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />

        <main className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center">
          {/* Sparse Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 via-pink-500/10 to-indigo-500/10 border border-pink-200/40 rounded-full px-3.5 py-1 text-[11px] font-extrabold text-indigo-900 tracking-wide mb-6 shadow-3xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-spin-slow" />
            <span>PREMIUM DIGITAL REAL ESTATE</span>
          </div>

          {/* AMAZING BALANCED HERO LOGO */}
          <div className="relative mb-6 group" id="hero_massive_logo">
            {/* Pulsing cosmic halo ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 scale-95 hover:scale-105 transition duration-700 animate-pulse pointer-events-none" />
            
            {/* The Glass Badge Container */}
            <div className="relative bg-white/85 border border-white/65 p-5 sm:p-6 rounded-full shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 flex items-center justify-center">
              <svg className="h-16 w-16 sm:h-20 sm:w-20 filter drop-shadow-sm" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                {/* Rotating Outer Planetary Tracker Ring */}
                <circle cx="32" cy="32" r="29" stroke="url(#huge-ring-grad)" strokeWidth="1" strokeDasharray="3 4">
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    from="0 32 32" 
                    to="360 32 32" 
                    dur="35s" 
                    repeatCount="indefinite" 
                  />
                </circle>

                {/* Counter-Rotating Mid Ring */}
                <circle cx="32" cy="32" r="23" stroke="url(#huge-ring-grad)" strokeWidth="1.5" strokeDasharray="30 15">
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    from="360 32 32" 
                    to="0 32 32" 
                    dur="20s" 
                    repeatCount="indefinite" 
                  />
                </circle>

                {/* Intricate Inner Radar Spokes */}
                <line x1="14" y1="32" x2="50" y2="32" stroke="url(#spoke-grad)" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="32" y1="14" x2="32" y2="50" stroke="url(#spoke-grad)" strokeWidth="0.5" strokeDasharray="2 2" />

                {/* Massive Celestial Glowing Star Element */}
                <path 
                  d="M32 3L37.5 21.5L56 21.5L41.5 31.5L47 49L32 39L17 49L22.5 31.5L8 21.5L26.5 21.5L32 3Z" 
                  fill="url(#huge-star-grad)" 
                  className="filter drop-shadow-[0_0_14px_rgba(245,158,11,0.6)]"
                />

                {/* Overlapping Inner Geometric Diamond Shield */}
                <path 
                  d="M32 12L36 24.5L48.5 28.5L36 32.5L32 45L28 32.5L15.5 28.5L28 24.5L32 12Z" 
                  fill="url(#inner-diamond-grad)" 
                  opacity="0.9"
                />

                {/* Core Spark Ignite Orb */}
                <circle cx="32" cy="28.5" r="5" fill="url(#core-ignite)" />
                <circle cx="32" cy="28.5" r="2" fill="#ffffff" />

                <defs>
                  <linearGradient id="huge-star-grad" x1="8" y1="3" x2="56" y2="49" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FBBF24" /> {/* Sunburst Gold */}
                    <stop offset="0.33" stopColor="#F59E0B" />
                    <stop offset="0.66" stopColor="#EC4899" /> {/* Celestial Pink */}
                    <stop offset="1" stopColor="#6366F1" /> {/* Deep Indigo */}
                  </linearGradient>

                  <linearGradient id="inner-diamond-grad" x1="15.5" y1="12" x2="48.5" y2="45" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFF" stopOpacity="0.9" />
                    <stop offset="0.5" stopColor="#FFE082" />
                    <stop offset="1" stopColor="#F48FB1" />
                  </linearGradient>

                  <linearGradient id="huge-ring-grad" x1="2" y1="2" x2="62" y2="62" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E2E8F0" />
                    <stop offset="0.5" stopColor="#A5F3FC" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#C7D2FE" />
                  </linearGradient>

                  <linearGradient id="spoke-grad" x1="14" y1="14" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F59E0B" stopOpacity="0.1" />
                    <stop offset="0.5" stopColor="#EC4899" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#6366F1" stopOpacity="0.1" />
                  </linearGradient>

                  <radialGradient id="core-ignite" cx="32" cy="28.5" r="5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FEE2E2" />
                    <stop offset="0.4" stopColor="#EF4444" />
                    <stop offset="1" stopColor="#B91C1C" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Majestic Balanced Domain Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-neutral-950 tracking-tighter leading-tight mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 via-indigo-950 to-neutral-800">starkindle</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-pink-500 to-amber-500 font-black font-sans text-4xl sm:text-5xl md:text-6xl">.com</span>
          </h1>

          {/* Core Descriptive Pitch */}
          <p className="font-serif italic text-base sm:text-lg md:text-2xl text-neutral-750 leading-relaxed max-w-2xl mb-5">
            &ldquo;An uncompromised naming asset establishing instantaneous market authority, credibility, and brand recognition.&rdquo;
          </p>

          <p className="text-neutral-500 text-xs sm:text-sm max-w-lg mb-6 leading-relaxed">
            Registered first in <span className="font-semibold text-neutral-900">2009</span>. A celestial, highly rhythmic compound linking universe-scale vision with active ignition. Verified free from trademark bounds.
          </p>

          {/* Secure Purchase Card with bright clean tones */}
          <div className="w-full max-w-md bg-white border border-indigo-100/80 p-5 sm:p-6 rounded-2xl shadow-sm text-center hover:border-indigo-200 transition-all duration-300">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-indigo-550 mb-2.5 font-mono">
              Brokerage &amp; Escrow Guaranteed by GoDaddy
            </span>
            
            <a 
              href={GODADDY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-extrabold text-xs py-3.5 px-6 rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              id="main_godaddy_cta"
            >
              <span>Instant Buy Domain via GoDaddy</span>
              <ArrowRight className="h-4.5 w-4.5 text-amber-300 shrink-0" />
            </a>

            <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-neutral-500 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Secure Escrow
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-600" /> Instant push
              </span>
            </div>
          </div>
        </main>
      </div>

      {/* 3. LAYER: Brand Advantages (Key Pedigree Pillars) */}
      <div className="bg-gradient-to-b from-[#fafbfc] via-[#f5f6fa]/60 to-white py-12 border-b border-indigo-100/10" id="three_attributes_layer">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-6 space-y-1.5">
            <span className="px-3 py-1 bg-indigo-50 border border-indigo-100/40 rounded-full text-[10px] font-extrabold text-indigo-700 tracking-widest uppercase font-mono">
              Pedigree Credentials
            </span>
            <h2 className="text-2xl font-black text-neutral-950 tracking-tight">Three absolute components of domain value</h2>
          </div>

          {/* Unified Slate Card Bed Box */}
          <div className="bg-slate-100/65 border border-slate-200/60 p-5 sm:p-6 rounded-3xl mt-5 shadow-3xs" id="three_attributes_backdrop_cell">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" id="three_attributes_clean">
              <div className="bg-white border border-neutral-150 p-5 rounded-2xl shadow-3xs hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-1">
                <Compass className="h-6 w-6 text-indigo-600 mb-3" />
                <h4 className="font-extrabold text-neutral-950 text-sm mb-1.5 text-left">The Celestial Advantage</h4>
                <p className="text-neutral-500 text-[11px] leading-relaxed text-left font-sans">
                  Pairs stellar coordinates (<strong className="text-neutral-700">scale, trajectory, coordinates</strong>) with an ignition catalyst for active projects.
                </p>
              </div>

              <div className="bg-white border border-neutral-150 p-5 rounded-2xl shadow-3xs hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-1">
                <Calendar className="h-6 w-6 text-amber-500 mb-3" />
                <h4 className="font-extrabold text-neutral-950 text-sm mb-1.5 text-left">Aged Registry Node</h4>
                <p className="text-neutral-500 text-[11px] leading-relaxed text-left font-sans">
                  Continuously registered registry record since <strong className="text-neutral-700">2009</strong>. Unlocked ranking benefits &amp; immediate SEO trust.
                </p>
              </div>

              <div className="bg-white border border-neutral-150 p-5 rounded-2xl shadow-3xs hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-1">
                <ShieldCheck className="h-6 w-6 text-emerald-600 mb-3" />
                <h4 className="font-extrabold text-neutral-950 text-sm mb-1.5 text-left">Registry Clearances</h4>
                <p className="text-neutral-500 text-[11px] leading-relaxed text-left font-sans">
                  Full legal clearances verified. Totally uncompromised by historical trademark queries, blocklists, or spam histories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator block 1 */}
      <div className="relative w-full flex items-center justify-center my-3 max-w-4xl mx-auto px-6" id="sep_pillar_etymology">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-200/70"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-slate-50 px-3.5 py-1 text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 border border-slate-200/60 rounded-full shadow-3xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" /> Alignment Vectors
          </span>
        </div>
      </div>

      {/* 4. LAYER: Etymology & Curation Grid (Soft Amber/Lavender canvas layer) */}
      <div className="bg-gradient-to-r from-amber-50/15 via-[#fbfcfa] to-indigo-50/15 py-12 border-b border-indigo-100/10" id="etymology_layer">
        <div className="max-w-4xl mx-auto px-6">
          <section className="space-y-4" id="semantic_curation_section">
            <div className="flex items-center gap-2">
              <div className="h-5 w-1 bg-indigo-600 rounded-full" />
              <h2 className="text-xl font-extrabold text-neutral-950 text-left tracking-tight">Etymology &amp; Strategic Value Curation</h2>
            </div>
            
            <div className="space-y-3 text-xs text-neutral-600 leading-relaxed text-left font-sans">
              <p>
                The compound naming structure <strong className="text-neutral-900">StarKindle</strong> pairs two highly resonant concepts: celestial scale and creator ignition. This symmetric identity spans critical growth vectors, eliminating standard naming overhead:
              </p>

              {/* Grouped Links nested in a beautiful pale-grey / slate backdrop cell */}
              <div className="bg-slate-100/50 border border-slate-200/50 p-4 rounded-3xl my-4 shadow-3xs" id="etymology_backdrop">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link 
                    href="/etymology-space"
                    className="bg-white p-5 rounded-2xl border border-neutral-200/60 shadow-3xs hover:border-indigo-400 hover:shadow-2xs transition-all block text-left group"
                  >
                    <span className="font-mono text-indigo-600 group-hover:text-indigo-808 font-extrabold text-[10px] uppercase tracking-wider flex items-center justify-between mb-1.5">
                      <span>Space, Aerospace &amp; Networks</span>
                      <span className="text-[9px] lowercase font-normal text-neutral-400 group-hover:text-indigo-600 transition-colors">read analysis &rarr;</span>
                    </span>
                    <p className="text-neutral-750 leading-relaxed">
                      Integrating <strong className="text-neutral-950">&ldquo;Star&rdquo;</strong> into telemetry software, ground stations, orbital tracking networks, satellite positioning, and space exploration communications.
                    </p>
                  </Link>

                  <Link
                    href="/etymology-publishing"
                    className="bg-white p-5 rounded-2xl border border-neutral-200/60 shadow-3xs hover:border-indigo-400 hover:shadow-2xs transition-all block text-left group"
                  >
                    <span className="font-mono text-indigo-600 group-hover:text-indigo-808 font-extrabold text-[10px] uppercase tracking-wider flex items-center justify-between mb-1.5">
                      <span>Book Publishing &amp; AI Readers</span>
                      <span className="text-[9px] lowercase font-normal text-neutral-400 group-hover:text-indigo-600 transition-colors">read analysis &rarr;</span>
                    </span>
                    <p className="text-neutral-750 leading-relaxed">
                      Leveraging <strong className="text-neutral-950">&ldquo;Kindle&rdquo;</strong> to represent ebook distributors, distraction-free reading interfaces, modern literature, writing mentors, and educational apps.
                    </p>
                  </Link>
                </div>
              </div>

              <p>This authoritative brand footprint builds absolute category authority across three core industries:</p>
              <ul className="list-disc pl-5 mt-1.5 space-y-1.5 text-neutral-500">
                <li>
                  <strong className="text-neutral-855">Advanced Artificial Intelligence:</strong> Powering clean, rapid compilation utilities, offline dictionary layers, neural readers, and secure databases.
                </li>
                <li>
                  <strong className="text-neutral-855">Independent Media:</strong> Creating community platforms for authors, custom story journals, curated readouts, and text generation suites.
                </li>
                <li>
                  <strong className="text-neutral-855">Astronomy &amp; Astrophotography:</strong> Developing automated star trackers, planetary coordinate libraries, and orbital mapping software.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Separator block 2 */}
      <div className="relative w-full flex items-center justify-center my-3 max-w-4xl mx-auto px-6" id="sep_etymology_seo">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-200/70"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-slate-50 px-3.5 py-1 text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 border border-slate-200/60 rounded-full shadow-3xs">
            <Zap className="w-3.5 h-3.5 text-indigo-505" /> Authority Matrix
          </span>
        </div>
      </div>

      {/* 5. LAYER: Dense SEO Semantic Factsheet Ledger (Polished factsheet with contrasting parameters) */}
      <div className="bg-gradient-to-b from-[#f9fafc] via-white to-slate-50 py-12 border-b border-indigo-100/10" id="seo_semantic_layer">
        <div className="max-w-4xl mx-auto px-6">
          {/* Factsheet cradled inside a subtle grey bed frame cell */}
          <div className="bg-slate-100/65 border border-slate-200/60 p-4.5 sm:p-5 rounded-3xl shadow-3xs" id="seo_semantic_backdrop">
            <div className="bg-white border border-neutral-200/75 rounded-2.5xl p-5 sm:p-6 space-y-4 shadow-xs" id="seo_semantic_ledger">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-650 font-mono block">
                  Official Registry Appraisal Record
                </span>
                <h3 className="text-md font-bold text-neutral-950 text-left">StarKindle.com SEO Authority Specs</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-left">
                <div className="space-y-3">
                  <div className="border-b border-neutral-100 pb-2">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Registered Domain Node</span>
                    <span className="font-extrabold text-neutral-900 text-sm">starkindle.com</span>
                  </div>
                  <div className="border-b border-neutral-100 pb-2">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Original Epoch Year</span>
                    <span className="font-extrabold text-neutral-900 text-sm">2009 (Continuous Registrar Tenure)</span>
                  </div>
                  <div className="border-b border-neutral-100 pb-2">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Top Level Domain Priority</span>
                    <span className="font-extrabold text-neutral-900 text-sm">Commercial Core (.com Global Namespace)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="border-b border-neutral-100 pb-2">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Acquiring Intended Niches</span>
                    <span className="font-semibold text-neutral-800 text-xs">Space Exploration SaaS, AI Knowledge Models, Astronomy Tools</span>
                  </div>
                  <div className="border-b border-neutral-100 pb-2">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Linguistic Rhythm / Syllables</span>
                    <span className="font-semibold text-neutral-800 text-xs">Balanced Symmetrical Compound (Star • Kin • dle)</span>
                  </div>
                  <div className="border-b border-neutral-100 pb-2">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Trademark Clearances</span>
                    <span className="font-semibold text-emerald-600 text-xs flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-50" /> 100% Uncompromised Title
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-1.5 text-[10px] text-neutral-400 leading-normal text-left max-w-2xl font-sans">
                <strong>SEO Relevance Fact Sheet:</strong> Domain registration longevity plays an essential role in early indexing priority algorithms on major crawl networks. Purchasing an authenticated 2009 commercial asset like StarKindle.com minimizes crawl delay overheads and establishes instantaneous brand authority globally.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator block 3 */}
      <div className="relative w-full flex items-center justify-center my-3 max-w-4xl mx-auto px-6" id="sep_seo_faq">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-200/70"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-slate-50 px-3.5 py-1 text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 border border-slate-200/60 rounded-full shadow-3xs">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" /> Verification Help
          </span>
        </div>
      </div>

      {/* 6. LAYER: Frequently Asked Questions (Distinct visual layers) */}
      <div className="bg-white py-12 border-b border-neutral-200/50" id="faq_layer">
        <div className="max-w-4xl mx-auto px-6">
          <section className="space-y-4" id="faq_section">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-neutral-950 tracking-tight">Frequently Asked Questions</h2>
            </div>

            <div className="divide-y divide-neutral-100 text-left">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="py-3 first:pt-0 last:pb-0">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left text-neutral-900 font-bold text-sm hover:text-indigo-600 transition-colors py-1 focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="mt-1.5 text-xs text-neutral-600 leading-relaxed pl-1 transition-all duration-300 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Separator block 4 */}
      <div className="relative w-full flex items-center justify-center my-3 max-w-4xl mx-auto px-6" id="sep_faq_curator">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-200/70"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-slate-50 px-3.5 py-1 text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 border border-slate-200/60 rounded-full shadow-3xs">
            <Compass className="w-3.5 h-3.5 text-amber-500" /> Ownership Context
          </span>
        </div>
      </div>

      {/* 7. LAYER: Portuguese Countryside Curator Profile (Warm olive sunset styling) */}
      <div className="bg-gradient-to-br from-amber-50/45 via-white to-emerald-50/20 py-12 border-b border-neutral-200/40" id="curator_layer">
        <div className="max-w-4xl mx-auto px-6">
          <section className="bg-white border border-neutral-200/65 rounded-2xl p-5 sm:p-6 shadow-3xs" id="who_am_i_profile">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-indigo-500 rounded-2xl blur-xs opacity-40 group-hover:opacity-75 transition duration-500" />
                  <img 
                    src="https://www.kataf.com/assets/domainer_profile_1780292036644-Cb2rsnUU.png" 
                    alt="Mateo Silva - Portfolio Curator" 
                    referrerPolicy="no-referrer"
                    className="relative rounded-2xl w-32 h-32 object-cover border border-neutral-200/60 shadow-md" 
                  />
                </div>
              </div>
              
              <div className="md:col-span-3 space-y-3 text-left">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50/75 px-2.5 py-0.5 rounded-full border border-indigo-100/50">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Meet the Curator</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-neutral-950">Mateo Silva — Digital Asset Investor</h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-neutral-500 text-xs font-mono">
                    <span className="flex items-center gap-1 font-medium text-neutral-600">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      Portugal (Algarve Coast)
                    </span>
                    <span>•</span>
                    <span>31 Years Old</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-100" />
                      Married
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  &ldquo;Hi there. I&apos;m Mateo. I&apos;m an independent domain practitioner originally from Porto, now living in a countryside farmhouse with my wonderful wife and our rescue retriever. Having turned 31 this year, I&apos;ve spent the better part of my twenties hunting down and preserving high-leverage 5-letter and aged .com properties.&rdquo;
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  &ldquo;To me, acquiring a pristine name holds the same weight as buying raw beachfront land prior to city expansions. I registered <strong className="text-indigo-600">{CORE_DOMAIN}</strong> over a decade ago because of its short, symmetric phonetics and etymology within support systems. As my wife and I transition our focus into planting organic vineyards and supporting local physical trades here in Portugal, this high-yield branding asset is looking for its forever home.&rdquo;
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Separator block 5 */}
      <div className="relative w-full flex items-center justify-center my-3 max-w-4xl mx-auto px-6" id="sep_curator_footer">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-200/70"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-slate-50 px-3.5 py-1 text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 border border-slate-200/60 rounded-full shadow-3xs">
            <ArrowRight className="w-3.5 h-3.5 text-neutral-450" /> End of Directory
          </span>
        </div>
      </div>

      {/* 8. Footer (Curated links & references) */}
      <footer className="border-t border-neutral-200 bg-white py-16" id="footer_clean">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Top Info & Callout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* LHS Portfolio info */}
            <div className="space-y-1.5 text-left max-w-sm">
              <p className="font-semibold text-neutral-800 font-mono text-xs">
                {CORE_DOMAIN} <span className="font-normal text-neutral-400">/ Registrar Portfolio Listing</span>
              </p>
              <p className="leading-relaxed text-left text-neutral-500 text-[11px]">
                Automated domain acquisition. This property is instantly push-enabled directly to active Namecheap or GoDaddy client registries. Secure holding guarantees active DNS zone configurations immediately.
              </p>
            </div>

            {/* RHS link to the premium portfolio page for deep search spider crawlers */}
            <div className="space-y-3 text-left md:text-right max-w-xs md:ml-auto">
              <p className="font-bold text-neutral-800 font-sans text-xs">Additional Premium Assets</p>
              <p className="text-neutral-500 leading-relaxed text-[11px] mb-2">
                Explore our full, private, aged commercial domain directory, curated for enterprise systems.
              </p>
              <Link 
                href="/premium-portfolio"
                className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-808 hover:underline text-xs"
              >
                <span>View Full Premium Portfolio</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Canonical SEO Link Directory Columns */}
          <div className="border-t border-b border-neutral-100 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left text-xs">
            {/* Column 1 */}
            <div className="space-y-3">
              <h5 className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Acquisition &amp; Security</h5>
              <ul className="space-y-2 text-neutral-550">
                <li>
                  <Link href="/domain-escrow-security" className="hover:text-indigo-600 hover:underline transition-all">
                    Secure Escrow &amp; Transfer
                  </Link>
                </li>
                <li>
                  <Link href="/faq-domain-acquisition" className="hover:text-indigo-600 hover:underline transition-all">
                    Buyer Guidelines FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/trademark-availability-guide" className="hover:text-indigo-600 hover:underline transition-all">
                    Clearance &amp; IP Status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <h5 className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Authority &amp; Brand science</h5>
              <ul className="space-y-2 text-neutral-550">
                <li>
                  <Link href="/domain-age-seo-value" className="hover:text-indigo-600 hover:underline transition-all">
                    Aged Domain SEO Values
                  </Link>
                </li>
                <li>
                  <Link href="/brand-naming-synergy" className="hover:text-indigo-600 hover:underline transition-all">
                    Linguistic Compound Symmetry
                  </Link>
                </li>
                <li>
                  <Link href="/whois-registration-history" className="hover:text-indigo-600 hover:underline transition-all">
                    WHOIS Records &amp; Logs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <h5 className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Deep Niche Analysis</h5>
              <ul className="space-y-2 text-neutral-550">
                <li>
                  <Link href="/etymology-space" className="hover:text-indigo-600 hover:underline transition-all">
                    Space &amp; Telemetry Etymology
                  </Link>
                </li>
                <li>
                  <Link href="/etymology-publishing" className="hover:text-indigo-600 hover:underline transition-all">
                    Literature &amp; Reading Etymology
                  </Link>
                </li>
                <li>
                  <Link href="/aerospace-telemetry-branding" className="hover:text-indigo-600 hover:underline transition-all">
                    Aerospace Industry Specs
                  </Link>
                </li>
                <li>
                  <Link href="/digital-publishing-growth" className="hover:text-indigo-600 hover:underline transition-all">
                    Digital Publishing Systems
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="font-bold text-indigo-600 hover:text-indigo-808 hover:underline transition-all flex items-center gap-1">
                    <span>Visual HTML Sitemap Directory</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-neutral-450 font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-left text-neutral-400">
              © {currentYear} {CORE_DOMAIN} Registry. Independent domain curation partnership by Mateo Silva. All rights reserved.
            </span>
            <span className="text-[10px] tracking-wider font-semibold text-neutral-500 hover:text-indigo-600 transition-colors">
              Website by{' '}
              <a 
                href="https://feelize.com/start" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline font-extrabold text-neutral-700 hover:text-indigo-600 transition-all font-sans"
              >
                Feelize
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
