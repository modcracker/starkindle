'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  Sparkles, 
  Compass, 
  Map, 
  Lock, 
  Zap, 
  HelpCircle, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const CORE_DOMAIN = "starkindle.com";
const GODADDY_LINK = "https://www.godaddy.com/domainsearch/find?domainToCheck=starkindle.com";

interface MenuLink {
  name: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Megamenu state
  const [activeDropdown, setActiveDropdown] = useState<'showcase' | 'security' | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showcaseLinks: MenuLink[] = [
    { 
      name: 'StarKindle Overview', 
      href: '/', 
      description: 'Primary domain showroom, origin details, and curation metrics.',
      icon: Compass,
      iconColor: 'text-amber-500 bg-amber-50'
    },
    { 
      name: 'Premium Portfolio', 
      href: '/premium-portfolio', 
      description: 'A handpicked ledger of aged, high-authority brandable portfolios.',
      icon: Sparkles,
      iconColor: 'text-indigo-600 bg-indigo-50'
    },
    { 
      name: 'Visual Sitemap Index', 
      href: '/sitemap', 
      description: 'A crawl-ready indexing tree pointing to all key system nodes.',
      icon: Map,
      iconColor: 'text-emerald-600 bg-emerald-50'
    },
  ];

  const securityLinks: MenuLink[] = [
    { 
      name: 'Escrow & Transfer Safeguards', 
      href: '/domain-escrow-security', 
      description: '100% secure transactional settlement via GoDaddy Escrow channels.',
      icon: ShieldCheck,
      iconColor: 'text-emerald-600 bg-emerald-55'
    },
    { 
      name: 'SEO & Aging Spec Value', 
      href: '/domain-age-seo-value', 
      description: 'Unlocking Google search sandbox exemptions since 2009.',
      icon: Zap,
      iconColor: 'text-amber-500 bg-amber-50'
    },
    { 
      name: 'IP & Trademark Status', 
      href: '/trademark-availability-guide', 
      description: 'Uncompromised legal clearance under WIPO & USPTO protocols.',
      icon: Lock,
      iconColor: 'text-indigo-600 bg-indigo-50'
    },
    { 
      name: 'Acquisition Support FAQ', 
      href: '/faq-domain-acquisition', 
      description: 'Clear details regarding transfer speeds, escrow terms, and registrar tips.',
      icon: HelpCircle,
      iconColor: 'text-neutral-500 bg-neutral-100'
    },
  ];

  // Hover handlers to manage buttery-smooth megamenu entrance/exit delays
  const handleMouseEnter = (dropdown: 'showcase' | 'security') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const clearDropdownImmediately = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Multi-color Edge Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-pink-400 via-purple-500 to-indigo-600 sticky top-0 z-[60]" id="global_rainbow_bar" />

      {/* Header Container */}
      <header className="border-b border-neutral-100 bg-white/95 backdrop-blur-md sticky top-1 z-50 py-3 shadow-3xs" id="global_header">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand Area */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0" onClick={clearDropdownImmediately}>
            <div className="relative flex items-center justify-center bg-gradient-to-br from-amber-50 to-indigo-50 border border-indigo-150/40 p-1.5 rounded-lg transition-transform group-hover:scale-105">
              <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L19 12L27 13L21 19L23 27L16 22L9 27L11 19L5 13L13 12L16 4Z" stroke="url(#header-logo-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="16" r="2" fill="#F59E0B" />
                <defs>
                  <linearGradient id="header-logo-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F59E0B" />
                    <stop offset="0.5" stopColor="#EC4899" />
                    <stop offset="1" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="font-extrabold text-base tracking-tight font-sans bg-gradient-to-r from-neutral-900 to-indigo-950 bg-clip-text text-transparent">
                  StarKindle
                </span>
                <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent font-black text-xs ml-0.5 font-mono">
                  .com
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Category Links with Megamenus */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold relative" id="desktop_nav_menu">
            {/* Category 1 Dropdown trigger */}
            <div 
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('showcase')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 transition-colors focus:outline-none cursor-pointer ${
                activeDropdown === 'showcase' || showcaseLinks.some(l => pathname === l.href)
                  ? 'text-indigo-650' 
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}>
                <span>Brand Showcase</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'showcase' ? 'rotate-180 text-indigo-500' : 'text-neutral-400'
                }`} />
              </button>

              {/* Megamenu 1: Showcase Dropdown menu */}
              {activeDropdown === 'showcase' && (
                <div className="absolute left-1/2 -translate-x-12 top-full w-80 bg-white border border-neutral-100 rounded-2xl p-4 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2 px-1">
                    IDENTITY &amp; DIRECTORIES
                  </span>
                  <div className="space-y-1">
                    {showcaseLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={clearDropdownImmediately}
                          className={`flex items-start gap-3 p-2 rounded-xl transition-all hover:bg-neutral-50 ${
                            isActive ? 'bg-indigo-50/50' : ''
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg shrink-0 ${link.iconColor}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className={`block text-xs font-bold leading-none mb-1 ${
                              isActive ? 'text-indigo-700' : 'text-neutral-850'
                            }`}>
                              {link.name}
                            </span>
                            <span className="block text-[10px] text-neutral-400 leading-normal font-normal">
                              {link.description}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Category 2 Dropdown trigger */}
            <div 
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('security')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 transition-colors focus:outline-none cursor-pointer ${
                activeDropdown === 'security' || securityLinks.some(l => pathname === l.href)
                  ? 'text-indigo-650' 
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}>
                <span>Acquisition Assurance</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'security' ? 'rotate-180 text-indigo-500' : 'text-neutral-400'
                }`} />
              </button>

              {/* Megamenu 2: Security & Transfer Dropdown menu */}
              {activeDropdown === 'security' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[360px] bg-white border border-neutral-100 rounded-2xl p-4 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2 px-1">
                    ESCROW, LAWS &amp; SEO
                  </span>
                  <div className="grid grid-cols-1 gap-1">
                    {securityLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={clearDropdownImmediately}
                          className={`flex items-start gap-3 p-2 rounded-xl transition-all hover:bg-neutral-50 ${
                            isActive ? 'bg-indigo-50/50' : ''
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg shrink-0 ${link.iconColor}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className={`block text-xs font-bold leading-none mb-1 ${
                              isActive ? 'text-indigo-700' : 'text-neutral-850'
                            }`}>
                              {link.name}
                            </span>
                            <span className="block text-[10px] text-neutral-400 leading-normal font-normal">
                              {link.description}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Call to Action Button & Mobile Hamburguer */}
          <div className="flex items-center gap-3 shrink-0">
            {/* CTA action button */}
            <a 
              href={GODADDY_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-750 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100/60 px-4 py-2 rounded-full transition-all shadow-3xs hover:-translate-y-0.5"
            >
              <span className="hidden sm:inline">Acquire Domain</span>
              <span className="inline sm:hidden">Buy</span>
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
            </a>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50 cursor-pointer transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-100 bg-white/98 backdrop-blur-md w-full py-4 px-6 absolute left-0 right-0 top-full shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-y-auto max-h-[85vh]">
            <div className="space-y-4">
              
              {/* Showcase list section */}
              <div>
                <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-2 px-1">
                  Brand Showcase
                </span>
                <div className="grid grid-cols-1 gap-1">
                  {showcaseLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-start gap-3 p-2 rounded-xl transition-all ${
                          pathname === link.href ? 'bg-indigo-50/50 text-indigo-805' : 'text-neutral-600 active:bg-neutral-50'
                        }`}
                      >
                        <div className={`p-1 rounded-lg shrink-0 ${link.iconColor}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold leading-none mb-0.5">
                            {link.name}
                          </span>
                          <span className="block text-[10px] text-neutral-400 font-normal">
                            {link.description}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Security list section */}
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest block mb-2 px-1">
                  Trust &amp; Technical value
                </span>
                <div className="grid grid-cols-1 gap-1">
                  {securityLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-start gap-3 p-2 rounded-xl transition-all ${
                          pathname === link.href ? 'bg-indigo-50/50 text-indigo-805' : 'text-neutral-600 active:bg-neutral-50'
                        }`}
                      >
                        <div className={`p-1 rounded-lg shrink-0 ${link.iconColor}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold leading-none mb-0.5">
                            {link.name}
                          </span>
                          <span className="block text-[10px] text-neutral-400 font-normal">
                            {link.description}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-neutral-100 pt-3 flex items-center justify-between px-1 text-[10px] text-neutral-400 font-mono">
                <span>© {new Date().getFullYear()} {CORE_DOMAIN}</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  ● Push-Ready Safe Escrow
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
