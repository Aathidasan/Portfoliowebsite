"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Sparkles,
  MapPin,
  ExternalLink,
  Award,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        if (displayText === currentTagline) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTagline.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden">
      {/* Background radial purple glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-900/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Avatar / Monogram Visual with Purple Aura (Ibrahim Memon Style) */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto flex-shrink-0">
            <div className="relative">
              {/* Floating Speech Bubble with Pointer */}
              <div className="absolute -top-12 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 z-20 whitespace-nowrap">
                <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-500/40 shadow-lg shadow-purple-950/50 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-white text-sm">
                    Hello! I Am <span className="text-purple-400 font-semibold">{PERSONAL_INFO.name}</span>
                  </p>
                </div>
                <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-purple-500/40 mx-auto mt-[-1px] lg:ml-8" />
              </div>

              {/* Glowing Avatar Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center p-2 bg-gradient-to-tr from-purple-800/40 via-violet-600/30 to-transparent border border-purple-500/30 shadow-2xl shadow-purple-900/40 group">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-2xl pointer-events-none" />

                <div className="w-full h-full rounded-full bg-[#1A0A30] flex flex-col items-center justify-center text-center border border-white/10 relative overflow-hidden">
                  {!imageError && PERSONAL_INFO.avatar ? (
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={PERSONAL_INFO.avatar}
                        alt={PERSONAL_INFO.name}
                        fill
                        sizes="(max-width: 640px) 256px, 320px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageError(true)}
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <div className="p-6 flex flex-col items-center justify-center">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-900 mb-3">
                        <span className="text-4xl font-extrabold text-white">AR</span>
                      </div>
                      <h3 className="font-bold text-lg text-white">Aathidasan R</h3>
                      <p className="text-xs text-purple-300 font-mono mt-0.5">B.Sc. IT • CGPA 8.8/10</p>
                      <span className="mt-2 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                        Java Full Stack Fresher
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Headline Content */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <p className="text-xl sm:text-2xl text-white/90">A Developer who</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white leading-tight tracking-tight">
              Judges code<br />
              by its{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400 bg-clip-text text-transparent font-bold">
                  architecture
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-500/50 rounded-full" />
              </span>
              ...
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto lg:mx-0">
              Because if the foundation is not solid, what else can stand?
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#lab"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/50 transition-all flex items-center gap-2 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Aathidasan_R_Resume.pdf"
                className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-purple-500/30 hover:border-purple-500/50 transition-all flex items-center gap-2 active:scale-95"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>

              {PERSONAL_INFO.linkedin && (
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white font-mono text-sm border border-white/10 transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Lower Subtitle Section (Matching Reference Site) */}
        <div className="space-y-3 pt-14 text-center lg:text-left border-t border-white/10 mt-14">
          <p className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            I'm a <span className="text-purple-400">{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-base lg:text-lg text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Currently undergoing Java Full Stack Training at</span>
            <span className="text-purple-400 font-semibold">QSpiders, Velachery (Chennai)</span>
            <span>• Graduated B.Sc. IT (CGPA: 8.8/10)</span>
          </p>

          <p className="text-base text-white/80 max-w-3xl mx-auto lg:mx-0 leading-relaxed pt-2">
            "{PERSONAL_INFO.summary}"
          </p>
        </div>
      </div>
    </section>
  );
}
