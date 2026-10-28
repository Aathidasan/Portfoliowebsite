"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight, Zap, Sparkles } from "lucide-react";
import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useScrollAnimation";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds, 150);

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-5 pointer-events-none">
      <nav className="pointer-events-auto bg-[#0C0C14]/85 backdrop-blur-2xl border border-white/[0.12] rounded-full px-4 sm:px-6 py-2 shadow-2xl shadow-black/80 flex items-center gap-5 sm:gap-8 max-w-full hologram-border">
        {/* Brand / 3D Node Status */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 text-white hover:text-cyan-300 transition-colors group"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
          </div>
          <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-white">
            <span>{PERSONAL_INFO.name.split(" ")[0]}</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hidden sm:inline">
              3D // AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-3 list-none m-0 p-0 text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const currentId = item.href.replace("#", "");
            const isActive = activeSection === currentId;

            return (
              <li key={item.name} className="m-0 p-0">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-all py-1 px-3 rounded-full ${
                    isActive
                      ? "text-cyan-300 font-bold bg-cyan-500/15 border border-cyan-500/30 shadow-sm shadow-cyan-950"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="text-xs font-mono font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 transition-all flex items-center gap-1.5 shadow-md shadow-purple-950/50"
          >
            <FileText className="w-3 h-3" />
            <span>RESUME</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-6 right-6 pointer-events-auto bg-[#0C0C14]/95 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl z-50 md:hidden"
          >
            <ul className="flex flex-col gap-3 list-none p-0 m-0 font-mono">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-2 text-zinc-300 hover:text-cyan-400 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold text-center"
                >
                  VIEW RESUME MODAL
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
