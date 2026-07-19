'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const TICKER_ITEMS = [
  { label: "starkindle.com", status: "Premium Asset Listed", type: "Active Portfolio" },
  { label: "Institutional Trust", status: "GoDaddy Escrow Secured", type: "100% Guaranteed" },
  { label: "feelize.com", status: "Acquired", price: "$14,500", type: "Recent Sale" },
  { label: "stellarignition.com", status: "Acquired", price: "$9,200", type: "Recent Sale" },
  { label: "kindlenode.com", status: "Acquired", price: "$6,800", type: "Recent Sale" },
  { label: "Domain Age Authority", status: "Age Tenure: 17 Years (2009)", type: "SEO Trust" },
  { label: "Registry Clearance", status: "No Trademark Infringements", type: "Clean Title" },
  { label: "starorbit.com", status: "Acquired", price: "$18,500", type: "Recent Sale" },
  { label: "aerospacenaming.com", status: "Acquired", price: "$12,400", type: "Recent Sale" },
];
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

  // Interactive Brand Lab States
  const [activeTab, setActiveTab] = React.useState<'purchase' | 'simulator' | 'specs'>('purchase');
  const [simSubdomain, setSimSubdomain] = React.useState<string>('');
  const [simIndustry, setSimIndustry] = React.useState<string>('tech');

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col justify-between selection:bg-indigo-500/20 font-sans" id="domain_land_clean">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      {/* 2. LAYER: Premium Edge-to-Edge Architectural Hero Section */}
      <div className="w-full relative overflow-hidden bg-[#fafbfc] border-b border-slate-200/50 py-16 sm:py-24" id="top_vibrant_fold">
        {/* Luminous Warm/Indigo Celestial Glow - spans edge-to-edge */}
        <div className="absolute top-[-20%] left-[10%] w-[1200px] h-[800px] rounded-full bg-gradient-to-tr from-indigo-100/30 via-amber-100/10 to-purple-100/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[5%] w-[800px] h-[600px] rounded-full bg-gradient-to-tl from-indigo-100/20 via-pink-100/10 to-transparent blur-3xl pointer-events-none" />
        
        {/* Fine Architectural Dot Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_30%,#000_80%,transparent_100%)] opacity-60 pointer-events-none" />

        {/* Cinematic Edge-to-Edge Grid Container */}
        <main className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            
            {/* Left Column: Premium Editorial Canvas */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Premium Status Pill */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="inline-flex items-center gap-2 bg-white/90 border border-slate-200/80 rounded-full px-4 py-1.5 text-[10px] font-bold text-slate-750 tracking-widest uppercase font-mono shadow-3xs"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse" />
                <span>Premium Asset Release</span>
              </motion.div>

              {/* Master Editorial Typography */}
              <div className="space-y-5">
                <motion.h1 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-sans"
                >
                  Acquire the premium domain <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-950 font-black">starkindle.com</span>
                </motion.h1>
                <motion.h2 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="text-lg sm:text-xl font-serif italic text-slate-600 font-normal leading-relaxed max-w-2xl"
                >
                  A rare, 17-year aged digital asset crafted for technology innovators, media publishing houses, and global deep-tech ventures.
                </motion.h2>
              </div>

              {/* High-Impact Copywriting with fine borders */}
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-sans"
              >
                In the digital economy, trust is your ultimate asset. Registered first in <span className="font-semibold text-slate-800">2009</span>, starkindle.com offers instant corporate authority, pristine search history, and direct registry clearance—bypassing traditional sandbox cycles entirely.
              </motion.p>

              {/* Modern Minimalist Horizontal Metric Dashboard */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/60 max-w-xl"
              >
                <div>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Domain Age</span>
                  <span className="text-sm sm:text-base font-extrabold text-slate-800 font-mono">{ageTenure} Years (2009)</span>
                </div>
                <div className="border-l border-slate-200/60 pl-6">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Registry Status</span>
                  <span className="text-sm sm:text-base font-extrabold text-emerald-650 flex items-center gap-1.5 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Verified Clear
                  </span>
                </div>
                <div className="border-l border-slate-200/60 pl-6">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Registry Partner</span>
                  <span className="text-sm sm:text-base font-extrabold text-indigo-650 font-mono">GoDaddy Escrow</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Authority & Checkout Hub (Widescreen Floating Card) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="w-full max-w-md bg-white/80 border border-slate-200/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col" id="hero_tabbed_hub">
                {/* Hub Navigation Tabs */}
                <div className="grid grid-cols-3 bg-slate-50/50 border-b border-slate-200/60 p-1" id="hub_tabs">
                  <button
                    onClick={() => setActiveTab('purchase')}
                    className={`py-2.5 px-1 text-center rounded-lg text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'purchase'
                        ? 'bg-white text-indigo-950 shadow-sm border border-slate-200/30 font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Purchase</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('simulator')}
                    className={`py-2.5 px-1 text-center rounded-lg text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'simulator'
                        ? 'bg-white text-indigo-950 shadow-sm border border-slate-200/30 font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Brand Lab</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`py-2.5 px-1 text-center rounded-lg text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'specs'
                        ? 'bg-white text-indigo-950 shadow-sm border border-slate-200/30 font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Domain Specs</span>
                  </button>
                </div>

                {/* Tab content wrapper */}
                <div className="p-5 sm:p-6 min-h-[360px] flex flex-col justify-between">
                  
                  {activeTab === 'purchase' && (
                    <motion.div
                      key="purchase_tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 flex flex-col justify-between h-full flex-1"
                    >
                      <div className="space-y-4">
                        {/* Streamlined minimal representation */}
                        <div className="flex justify-center py-6">
                          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 shadow-3xs">
                            <Globe className="w-5 h-5 text-indigo-650 animate-pulse" />
                            <span className="text-lg font-black text-slate-900 font-mono tracking-tight">starkindle.com</span>
                          </div>
                        </div>

                        <div className="text-center space-y-1">
                          <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">Direct Acquisition Channel</h3>
                          <p className="text-[11px] text-slate-500 max-w-sm mx-auto leading-relaxed">
                            Secure standard transfer is handled immediately with total protection. Fully secured escrow release is managed by our official partner GoDaddy.
                          </p>
                        </div>

                        <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-3 flex items-center justify-between">
                          <div className="text-left">
                            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">ESTABLISHED ON REGISTRY</span>
                            <span className="text-[10px] font-extrabold text-slate-700 font-mono">July 2009 (Aged)</span>
                          </div>
                          <div className="text-right">
                            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">TRANSFER SPEED</span>
                            <span className="text-[10px] font-extrabold text-emerald-655 flex items-center gap-1 justify-end font-mono">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Instant Push
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <a 
                          href={GODADDY_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-4 px-6 rounded-xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                          id="main_godaddy_cta_hub"
                        >
                          <span>Secure Purchase at GoDaddy</span>
                          <ArrowRight className="h-4 w-4 text-slate-400 shrink-0" />
                        </a>

                        <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 font-medium font-mono">
                          <span className="flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> GoDaddy Escrow
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-indigo-600" /> Instant Push
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'simulator' && (
                    <motion.div
                      key="simulator_tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 flex flex-col justify-between h-full flex-1"
                    >
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">Interactive Brand Sandbox</h3>
                          <p className="text-[11px] text-slate-500">
                            Simulate subdomains and see how this 17-year aged authority asset matches your product identity.
                          </p>
                        </div>

                        {/* Interactive Subdomain input */}
                        <div className="space-y-1">
                          <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">SIMULATE SUBDOMAIN</label>
                          <div className="flex rounded-lg border border-slate-200 bg-white shadow-3xs overflow-hidden focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                            <input 
                              type="text" 
                              placeholder="e.g. app, api, ventures" 
                              value={simSubdomain}
                              onChange={(e) => setSimSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                              className="px-3 py-1.5 text-xs text-slate-800 bg-transparent flex-1 focus:outline-none placeholder-slate-350"
                            />
                            <span className="bg-slate-50 px-3 py-1.5 text-[11px] text-slate-500 border-l border-slate-200 font-bold flex items-center shrink-0 font-mono">
                              .starkindle.com
                            </span>
                          </div>
                        </div>

                        {/* Industry Preset selectors */}
                        <div className="space-y-1">
                          <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">TARGET SECTOR</label>
                          <div className="grid grid-cols-2 gap-1.5">
                            {[
                              { id: 'tech', label: '🚀 Deep Tech & Space' },
                              { id: 'publishing', label: '📚 Media & Publishing' },
                              { id: 'ai', label: '🧠 AI & Analytics' },
                              { id: 'finance', label: '💼 Venture Capital' }
                            ].map((ind) => (
                              <button
                                key={ind.id}
                                onClick={() => setSimIndustry(ind.id)}
                                className={`px-2 py-1 text-[10px] font-semibold rounded-lg text-left border transition-all cursor-pointer ${
                                  simIndustry === ind.id
                                    ? 'bg-indigo-50/50 border-indigo-200 text-indigo-950 font-extrabold'
                                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                }`}
                              >
                                {ind.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Live Brand Visualizer Card */}
                      <div className="bg-slate-950 text-slate-100 p-4 rounded-xl border border-neutral-800 space-y-2.5 shadow-xs relative overflow-hidden mt-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-xl pointer-events-none" />
                        <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5">
                          <span className="text-[8px] font-bold text-slate-400 font-mono tracking-widest uppercase flex items-center gap-1">
                            <span className="h-1 w-1 rounded-full bg-indigo-400 animate-ping" /> LIVE BRAND PREVIEW
                          </span>
                          <span className="text-[8px] bg-indigo-500/15 text-indigo-300 font-bold px-1.5 py-0.5 rounded uppercase font-mono border border-indigo-400/20">
                            SEO TRUST ASSURED
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-white tracking-tight truncate font-mono">
                            {simSubdomain ? `${simSubdomain}.` : ''}starkindle.com
                          </div>
                          <p className="text-[10px] text-slate-400 italic leading-relaxed font-serif">
                            &ldquo;{
                              simIndustry === 'tech' ? "Igniting the next frontier of galactic infrastructure." :
                              simIndustry === 'publishing' ? "Curating timeless wisdom with high-integrity literature." :
                              simIndustry === 'ai' ? "Powering neural intelligence with massive telemetry engines." :
                              "Seeding disruptive founders across deep-domain horizons."
                            }&rdquo;
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-900 text-[9px] font-mono text-slate-350">
                          <div>
                            <span className="block text-slate-500 text-[8px]">SANDBOX TIME</span>
                            <span className="font-bold text-emerald-400">0 Days (Bypassed)</span>
                          </div>
                          <div>
                            <span className="block text-slate-500 text-[8px]">TENURE POWER</span>
                            <span className="font-bold text-indigo-300">17 Years Authority</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'specs' && (
                    <motion.div
                      key="specs_tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 flex flex-col justify-between h-full flex-1"
                    >
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">Technical Credentials &amp; Verification</h3>
                          <p className="text-[11px] text-slate-500">
                            Comprehensive properties verified directly from the central domain registry databases.
                          </p>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-slate-50 border border-slate-150 p-2 rounded-lg text-left">
                            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">REGISTRY AGE</span>
                            <span className="font-extrabold text-slate-800">17 Years (2009)</span>
                          </div>
                          <div className="bg-slate-50 border border-slate-150 p-2 rounded-lg text-left">
                            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">CLEAN TITLE</span>
                            <span className="font-extrabold text-emerald-650 flex items-center gap-1">
                              Vetted &amp; Clear
                            </span>
                          </div>
                          <div className="bg-slate-50 border border-slate-150 p-2 rounded-lg text-left">
                            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">METRIC CLASS</span>
                            <span className="font-extrabold text-slate-800">High Rhythm Compound</span>
                          </div>
                          <div className="bg-slate-50 border border-slate-150 p-2 rounded-lg text-left">
                            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">MEMORABILITY</span>
                            <span className="font-extrabold text-indigo-650 font-mono">9.8 / 10 Score</span>
                          </div>
                        </div>

                        {/* Security check banner */}
                        <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg flex items-start gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-[9px] font-extrabold text-emerald-950 font-mono tracking-wide uppercase">TRADEMARK &amp; RESTRICTION CLEARANCE</span>
                            <p className="text-[10px] text-emerald-800 leading-normal mt-0.5">
                              Certified clean title. No trademark limits, registry holds, or spam blocklists. Unrestricted globally.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <a 
                          href={GODADDY_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all cursor-pointer"
                        >
                          <span>Review on GoDaddy Central Registry</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                      </div>
                    </motion.div>
                  )}

                </div>
              </div>
            </div>

          </motion.div>
        </main>
      </div>

      {/* Subtle Scrolling Ticker component */}
      <div className="w-full bg-neutral-900 text-white py-3 overflow-hidden relative border-y border-neutral-800" id="trust-ticker-container">
        {/* Left and right gradient masks for a smooth fade edge */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          {/* Label */}
          <div className="shrink-0 flex items-center gap-1.5 bg-indigo-500/20 border border-indigo-400/30 px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider text-indigo-300 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Authority Indicators
          </div>
          
          {/* Marquee Track */}
          <div className="overflow-hidden flex w-full relative">
            <motion.div 
              className="flex gap-8 shrink-0 min-w-full"
              animate={{ x: [0, "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {/* Render items twice for infinite loop seamless scroll */}
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 shrink-0 text-xs font-sans">
                  <span className="font-bold text-slate-100">{item.label}</span>
                  <span className="text-[10px] bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700 text-slate-400 flex items-center gap-1">
                    {item.type || item.status} 
                    {item.price && <strong className="text-emerald-400 font-mono font-bold">{item.price}</strong>}
                    {!item.price && item.status && <span className="text-indigo-300">{item.status}</span>}
                  </span>
                  <span className="text-neutral-600 font-extrabold text-xs ml-2">•</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
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
