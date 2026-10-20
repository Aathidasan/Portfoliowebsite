"use client";

import { ArrowUp, Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-10 px-6 border-t border-white/10 bg-[#0E061B]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white font-semibold text-base">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-white/60 text-xs font-mono mt-0.5">
              Java Full Stack Developer • Nagapattinam / Chennai, Tamil Nadu
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-white/70">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-purple-400 transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <p className="text-white/50 text-xs">
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
