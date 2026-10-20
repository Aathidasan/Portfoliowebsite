"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Clock,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { PERSONAL_INFO, STATISTICS } from "@/lib/constants";
import CodeSnippetWorkspace from "./ui/CodeSnippetWorkspace";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        if (displayText === currentTagline) {
          setTimeout(() => setIsDeleting(true), 1900);
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
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/[0.08] bg-studio-dots"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Studio Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OPEN FOR ROLES • ENTRY-LEVEL DEVELOPER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                SOFTWARE DEVELOPER FRESHER
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Aathidasan R
              </h1>

              {/* Dynamic Typewriter */}
              <div className="h-8 flex items-center font-mono text-base sm:text-lg text-zinc-300">
                <span className="text-zinc-500 mr-2">$</span>
                <span>{displayText}</span>
                <span className="inline-block w-[2px] h-4 ml-1 bg-white animate-pulse" />
              </div>
            </div>

            {/* Exact Required Hero Bio */}
            <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed bg-zinc-950/70 p-4 rounded-xl border border-white/[0.08] max-w-xl">
              "{PERSONAL_INFO.heroBio}"
            </p>

            {/* Studio Meta Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-300" />
                <span>Chennai, India</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-300" />
                <span>{currentTime || "IST"}</span>
              </div>
              <span>•</span>
              <span className="text-zinc-200">PRIST 2026</span>
            </div>

            {/* Action Buttons Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-primary-white px-5 py-2.5 text-xs sm:text-sm flex items-center gap-1.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Aathidasan_R_Resume.pdf"
                className="btn-secondary-outline px-4 py-2.5 text-xs sm:text-sm flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-lg text-zinc-400 hover:text-white text-xs sm:text-sm font-mono transition-colors"
              >
                Contact Me
              </a>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email"
                className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors flex items-center gap-1 text-xs font-mono"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Interactive Developer Studio Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 flex justify-center"
          >
            <CodeSnippetWorkspace />
          </motion.div>
        </div>

        {/* Metrics Grid Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-white/[0.08]">
          {STATISTICS.map((stat) => (
            <div
              key={stat.label}
              className="studio-card p-4 flex flex-col justify-between"
            >
              <span className="font-mono font-bold text-2xl text-white">
                {stat.value}
              </span>
              <div className="mt-1">
                <p className="text-xs font-semibold text-zinc-200">{stat.label}</p>
                <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{stat.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
