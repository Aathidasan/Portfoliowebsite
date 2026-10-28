"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
  FileText,
  Linkedin,
  Github,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO, STATISTICS } from "@/lib/constants";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="pt-6 sm:pt-10">
      <div className="space-y-8">
        {/* Top Profile & Status Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Framer Minimal Avatar with subtle rotating ring */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex-shrink-0 group">
              {/* Subtle animated border */}
              <div
                className="avatar-ring-spin absolute inset-0 rounded-full p-[2px]"
                style={{
                  background:
                    "conic-gradient(from 0deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0A0A0C]" />
              </div>

              {/* Photo */}
              <div className="relative w-[calc(100%-8px)] h-[calc(100%-8px)] m-[4px] rounded-full overflow-hidden bg-zinc-900 border border-white/10">
                {!imageError && PERSONAL_INFO.avatar ? (
                  <Image
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="96px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-bold text-white text-xl bg-zinc-800">
                    AR
                  </div>
                )}
              </div>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 font-medium">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex items-center gap-2 mt-1.5 text-xs text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Framer "Available for work" Pill */}
          <div className="flex items-center self-start sm:self-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </span>
          </div>
        </div>

        {/* Headline & Description */}
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed font-normal">
            Software engineer passionate about building reliable{" "}
            <span className="text-white font-medium">Java Full Stack systems</span>,{" "}
            scalable web architectures, and practical{" "}
            <span className="text-white font-medium">Computer Vision & AI pipelines</span>.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            {PERSONAL_INFO.summary}
          </p>
        </div>

        {/* Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/resume.pdf"
            download="Aathidasan_R_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 font-medium text-xs sm:text-sm transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-medium text-xs sm:text-sm transition-colors"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>View CV</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-medium text-xs sm:text-sm transition-colors"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Get in Touch</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Minimal Framer Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.06]">
          {STATISTICS.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-[#121216]/60 border border-white/[0.06]"
            >
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-zinc-400 mt-0.5 font-medium">
                {stat.label}
              </p>
              <p className="text-[11px] text-zinc-500 font-mono mt-0.5 truncate">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
