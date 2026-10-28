"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-5 pointer-events-none">
      <nav className="pointer-events-auto bg-[#121216]/80 backdrop-blur-xl border border-white/[0.08] rounded-full px-4 sm:px-6 py-2.5 shadow-2xl shadow-black/60 flex items-center gap-6 sm:gap-8 max-w-full">
        {/* Brand / Status Pill */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 text-white hover:text-zinc-200 transition-colors group"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-zinc-100">
            {PERSONAL_INFO.name.split(" ")[0]}
          </span>
        </a>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-5 list-none m-0 p-0 text-xs">
          {NAV_ITEMS.map((item) => {
            const currentId = item.href.replace("#", "");
            const isActive = activeSection === currentId;

            return (
              <li key={item.name} className="m-0 p-0">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors py-1 px-2.5 rounded-full ${
                    isActive
                      ? "text-white font-medium bg-white/10"
                      : "text-zinc-400 hover:text-white"
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
            className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
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
            className="fixed top-20 left-6 right-6 pointer-events-auto bg-[#141418] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl z-50 md:hidden"
          >
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-2 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="w-full py-2 rounded-xl bg-white text-black text-xs font-semibold text-center"
                >
                  View Full CV
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
