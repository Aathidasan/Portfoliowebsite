"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useScrollAnimation";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-5 py-2.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-[#090D1A]/85 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50"
              : "bg-white/[0.03] backdrop-blur-md border border-white/[0.06]"
          }`}
        >
          {/* Brand Left */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-xl"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-600/30">
                <div className="w-full h-full bg-[#070B16] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-cyan-300">
                    AR
                  </span>
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#090D1A]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-indigo-200 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  Fresher
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                {PERSONAL_INFO.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-black/40 p-1.5 rounded-full border border-white/5">
            {NAV_ITEMS.map((item) => {
              const currentId = item.href.replace("#", "");
              const isActive = activeSection === currentId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-cyan-600/50 rounded-full border border-white/15 -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 transition-all hover:border-indigo-500/40 flex items-center gap-1.5 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-md shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40 flex items-center gap-1.5 active:scale-95"
            >
              <span>Connect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="bg-[#090D1A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const currentId = item.href.replace("#", "");
                const isActive = activeSection === currentId;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="py-2.5 rounded-xl bg-white/5 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>View Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
