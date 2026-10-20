"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/85 backdrop-blur-md border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 text-white hover:text-purple-400 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 to-violet-500 p-[1.5px] shadow-lg shadow-purple-900/50">
              <div className="w-full h-full bg-[#110720] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-base text-purple-300 group-hover:text-white transition-colors">
                  AR
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-white text-base leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-purple-400 font-mono">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_ITEMS.map((item) => {
              const currentId = item.href.replace("#", "");
              const isActive = activeSection === currentId;

              return (
                <li key={item.name} className="m-0 p-0">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`transition-colors text-base font-normal ${
                      isActive ? "text-purple-400 font-semibold" : "text-white hover:text-purple-400"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-purple-500/30 hover:border-purple-500/60 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-md shadow-purple-900/50 transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-4 pb-2 border-t border-white/10 mt-3"
            >
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block py-1.5 text-white hover:text-purple-400 text-base font-normal transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2 flex gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume?.();
                    }}
                    className="flex-1 py-2 rounded-lg bg-white/10 text-white text-xs font-semibold text-center border border-purple-500/30"
                  >
                    View Resume
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="flex-1 py-2 rounded-lg bg-purple-600 text-white text-xs font-semibold text-center"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
