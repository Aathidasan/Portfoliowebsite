"use client";

import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { PERSONAL_INFO, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-black relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white">
                AR
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {PERSONAL_INFO.role} • Software Developer Fresher
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Focused on Core Java, object-oriented programming, modern web technologies, and practical AI applications. Built with Next.js 16, TypeScript, and Tailwind CSS.
            </p>

            <div className="text-xs text-zinc-400 space-y-1 pt-1 font-mono">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-white hover:underline"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </p>
              <p>Location: {PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms & Verification */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Platforms & Verification
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={PERSONAL_INFO.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
              >
                <span>Portfolio App</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
              <p className="text-[11px] text-zinc-500 pt-2 leading-relaxed">
                Fresher profile with verified academic degree from PRIST University (2026) and active 6-Month Java Training at QSpiders.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
