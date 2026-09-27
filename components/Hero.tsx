"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  MapPin,
  ChevronDown,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import CodeSnippetWorkspace from "./ui/CodeSnippetWorkspace";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  // Animated typewriter / rotating title
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        if (displayText === currentTagline) {
          setTimeout(() => setIsDeleting(true), 1800);
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
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Entry-Level Opportunities</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-wider font-mono text-cyan-400 font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                Hi, I'm Aathidasan R
              </h2>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Java <span className="gradient-accent">Developer</span>
              </h1>

              {/* Animated Typewriter Sub-headline */}
              <div className="h-8 flex items-center">
                <span className="text-lg sm:text-xl font-mono text-slate-300 font-medium">
                  {displayText}
                  <span className="inline-block w-[2px] h-5 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Exact Required Hero Bio */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              "{PERSONAL_INFO.heroBio}"
            </p>

            {/* Location & Quick Meta */}
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-300 font-mono">B.Sc. IT (2026)</span>
            </div>

            {/* Buttons Group */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Primary: View Projects */}
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50 flex items-center gap-2 active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Secondary: Download / View Resume */}
              <a
                href="/resume.pdf"
                download="Aathidasan_R_Resume.pdf"
                onClick={(e) => {
                  // If resume modal is provided, also let user view directly
                  if (onOpenResume) {
                    // allows direct action while modal option exists
                  }
                }}
                className="px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-slate-200 border border-white/15 font-semibold text-sm transition-all hover:border-cyan-500/40 flex items-center gap-2 active:scale-95 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Ghost: Contact Me */}
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-1.5 active:scale-95"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Animated Developer Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center"
          >
            <CodeSnippetWorkspace />
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex justify-center mt-12"
        >
          <a
            href="#about"
            aria-label="Scroll down to About section"
            className="text-slate-500 hover:text-indigo-400 transition-colors flex flex-col items-center gap-1 text-xs"
          >
            <span>Explore Journey</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
