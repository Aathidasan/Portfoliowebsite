"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowRight, Terminal } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/[0.08] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Studio Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-white/40 transition-colors">
              AR
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-sm tracking-tight">
                  {PERSONAL_INFO.name}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-400 bg-zinc-900 px-1.5 py-0.2 rounded border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  fresher
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 -mt-0.5">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/80 px-3 py-1.5 rounded-full border border-white/[0.08]">
            {NAV_ITEMS.map((item) => {
              const currentId = item.href.replace("#", "");
              const isActive = activeSection === currentId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1 text-xs font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-studio-pill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/15 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
              className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors flex items-center gap-1 active:scale-95 font-semibold"
            >
              <span>Connect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="bg-zinc-950 border border-white/10 rounded-xl p-4 shadow-2xl space-y-1">
              {NAV_ITEMS.map((item) => {
                const currentId = item.href.replace("#", "");
                const isActive = activeSection === currentId;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-white/10 text-white font-semibold"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="py-2 rounded-lg bg-zinc-900 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/5"
                >
                  <FileText className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="py-2 rounded-lg bg-white text-black text-xs font-semibold flex items-center justify-center gap-1"
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
