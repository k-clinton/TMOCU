"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-[1060px] z-50 rounded-full transition-all duration-300 ease-out px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? "bg-[#121417]/90 text-white backdrop-blur-md border border-white/20 shadow-2xl"
            : "bg-white/10 text-white backdrop-blur-[6px] border border-transparent shadow-none"
        }`}
        aria-label="Main Navigation"
      >
        {/* Left: Minimal Wordmark Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 group tracking-tight pl-1"
          aria-label="TMOCU Home"
        >
          <span className="text-base sm:text-lg font-bold text-white tracking-tight">
            tmocu<span className="text-gold">°</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-medium tracking-widest uppercase text-white/70">
            / USA
          </span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-charcoal font-semibold shadow-sm"
                    : "text-white/80 hover:text-white hover:bg-white/15"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-2 pr-1">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full bg-white text-charcoal hover:bg-gold hover:text-white transition-all duration-200 shadow-sm"
          >
            <span>Get Started</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
            aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <div
        className={`md:hidden fixed inset-x-4 top-20 bg-[#121417] text-white p-6 rounded-3xl border border-white/15 shadow-2xl transition-all duration-300 z-40 ${
          mobileOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? "bg-white text-charcoal font-semibold"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 mt-2 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center py-3 bg-white text-charcoal rounded-xl font-semibold text-sm hover:bg-gold hover:text-white transition-colors"
            >
              Get Free Class Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
