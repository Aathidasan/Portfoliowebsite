"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  MapPin,
  Clock,
  Copy,
  Check,
  Code2,
  Terminal,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  ChevronDown,
} from "lucide-react";
import { PERSONAL_INFO, STATISTICS } from "@/lib/constants";
import CodeSnippetWorkspace from "./ui/CodeSnippetWorkspace";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  // Animated typewriter / rotating title
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 35 : 75;

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

  // Live Chennai clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Bento Card 1: Main Introduction (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bento-card p-6 sm:p-8 md:p-10 flex flex-col justify-between"
          >
            {/* Top Bar with Availability Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Entry-Level Opportunities</span>
              </div>

              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 mb-6">
              <span className="text-xs sm:text-sm font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-indigo-400" />
                Hi, I'm Aathidasan R
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Java <span className="gradient-accent">Developer</span>
              </h1>

              {/* Dynamic Typewriter text */}
              <div className="h-8 flex items-center">
                <span className="text-base sm:text-xl font-mono text-slate-300 font-medium">
                  {displayText}
                  <span className="inline-block w-[2px] h-5 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Exact Required Hero Bio */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-2xl bg-white/[0.02] p-4 rounded-xl border border-white/5">
              "{PERSONAL_INFO.heroBio}"
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50 flex items-center gap-2 active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Aathidasan_R_Resume.pdf"
                className="px-5 py-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] text-slate-200 border border-white/10 font-semibold text-xs sm:text-sm transition-all hover:border-cyan-500/40 flex items-center gap-2 active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-all flex items-center gap-1.5 text-xs font-mono"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">aathidasan7@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Bento Card 2: Developer Profile & Real-Time Presence (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bento-card p-6 flex flex-col justify-between"
          >
            {/* Top Monogram Avatar */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-600/30">
                      <div className="w-full h-full bg-[#080D1A] rounded-[14px] flex items-center justify-center">
                        <span className="font-mono font-bold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-200 via-white to-cyan-300">
                          AR
                        </span>
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0B1120] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-base">Aathidasan R</h3>
                    <p className="text-xs font-semibold text-indigo-400">Java Developer</p>
                    <span className="text-[10px] font-mono text-slate-400">Software Developer Fresher</span>
                  </div>
                </div>
              </div>

              {/* Status & Local Time Feed */}
              <div className="py-4 space-y-3">
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Chennai Local Time
                  </span>
                  <span className="font-mono text-cyan-300 font-semibold">
                    {currentTime || "IST"}
                  </span>
                </div>

                <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                      Active Training
                    </span>
                    <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                      Current
                    </span>
                  </div>
                  <p className="font-semibold text-white">QSpiders — Velachery</p>
                  <p className="text-[11px] text-slate-400">6-Month Intensive Java Course</p>
                </div>

                <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1 text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                      Graduation
                    </span>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">
                      2026
                    </span>
                  </div>
                  <p className="font-semibold text-white">B.Sc. Information Technology</p>
                  <p className="text-[11px] text-slate-400">PRIST University, Thanjavur</p>
                </div>
              </div>
            </div>

            {/* Quick Live Portfolio Link */}
            <a
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-mono flex items-center justify-between transition-colors"
            >
              <span className="truncate">aathidasan-ai-portfoli-craft.lovable.app</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            </a>
          </motion.div>

          {/* Bento Card 3: Interactive Developer Code Sandbox (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            <CodeSnippetWorkspace />
          </motion.div>

          {/* Bento Card 4: Verified Metrics & Fresher Highlights (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-5 bento-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Candidate Overview
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Ready to Deploy
                </span>
              </div>

              {/* 4 Micro-Bento Stat Cards */}
              <div className="grid grid-cols-2 gap-3 my-4">
                {STATISTICS.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-colors"
                  >
                    <span className="font-mono font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-cyan-300">
                      {stat.value}
                    </span>
                    <p className="text-xs font-semibold text-white mt-1">{stat.label}</p>
                    <p className="text-[10px] text-slate-400">{stat.subtext}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition Note */}
            <div className="pt-3 border-t border-white/5">
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Fresher Advantage:</strong> Solid algorithmic fundamentals in Core Java, active internship experience in AI & Web Development, and an eager readiness to contribute immediately to engineering teams.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-10">
          <a
            href="#about"
            aria-label="Scroll down to About section"
            className="text-slate-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 text-xs font-mono"
          >
            <span>Explore Experience & Skills</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
