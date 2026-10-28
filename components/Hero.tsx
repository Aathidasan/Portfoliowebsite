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
  Zap,
  Cpu,
  Eye,
  Radio,
} from "lucide-react";
import { PERSONAL_INFO, STATISTICS } from "@/lib/constants";
import TiltCard3D from "@/components/ui/TiltCard3D";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-6 sm:pt-12">
      {/* Higgsfield Holographic Ambient Light */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-purple-600/20 to-pink-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-10">
        {/* Top HUD Cyber Status Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-cyan-400 uppercase tracking-widest font-semibold">
              HIGGSFIELD ARCHITECTURE // CORE V3.4
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-500">
            <span className="hidden sm:inline">SYS_STATUS: OPTIMAL</span>
            <span className="text-purple-400 font-semibold">OPEN TO OPPORTUNITIES</span>
          </div>
        </div>

        {/* 3D Holographic Hero Presentation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Left: Bio & Kinetic Headlines */}
          <div className="flex-1 space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-zinc-300">
                Spatial & Full-Stack Creative Developer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">intelligent 3D</span> software &amp; robust Java systems.
            </h1>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Hello! I'm <strong className="text-white">{PERSONAL_INFO.name}</strong>, a Java Full Stack Developer & AI Computer Vision Engineer. Building high-performance backends, reactive web interfaces, and automated neural perception pipelines.
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="/resume.pdf"
                download="Aathidasan_R_Resume.pdf"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-purple-900/40 hover:shadow-cyan-500/25 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Download className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#12121E]/80 hover:bg-white/[0.08] text-zinc-200 border border-white/10 font-medium text-xs sm:text-sm backdrop-blur-md transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#12121E]/80 hover:bg-white/[0.08] text-zinc-200 border border-white/10 font-medium text-xs sm:text-sm backdrop-blur-md transition-colors"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                <span>Contact Me</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white border border-white/[0.08] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white border border-white/[0.08] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: 3D Holographic Gyroscope Orb & Avatar */}
          <div className="relative flex items-center justify-center flex-shrink-0">
            {/* 3D Outer Rotating Rings */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              {/* Ring 1 (X-Y Axis Tilt) */}
              <div
                className="animate-3d-ring-1 absolute inset-0 rounded-full border border-cyan-400/40 pointer-events-none"
                style={{
                  borderTopColor: "rgba(6, 182, 212, 0.9)",
                  borderBottomColor: "rgba(139, 92, 246, 0.2)",
                  boxShadow: "0 0 25px rgba(6, 182, 212, 0.2)",
                }}
              />

              {/* Ring 2 (Counter Y Axis Tilt) */}
              <div
                className="animate-3d-ring-2 absolute inset-2 rounded-full border border-pink-500/40 pointer-events-none"
                style={{
                  borderLeftColor: "rgba(236, 72, 153, 0.9)",
                  borderRightColor: "rgba(139, 92, 246, 0.3)",
                  boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
                }}
              />

              {/* Ring 3 (Static Neon Bezel) */}
              <div className="absolute inset-5 rounded-full border border-white/[0.15] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-transparent pointer-events-none" />

              {/* Center Floating Photo Core */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-2xl shadow-purple-950/80 group">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                  {!imageError && PERSONAL_INFO.avatar ? (
                    <>
                      <Image
                        src={PERSONAL_INFO.avatar}
                        alt={PERSONAL_INFO.name}
                        fill
                        sizes="176px"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                        onError={() => setImageError(true)}
                        priority
                      />
                      {/* Holographic liquid light glare */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/40 via-transparent to-cyan-400/20 pointer-events-none" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-white text-3xl bg-zinc-900">
                      AR
                    </div>
                  )}
                </div>
              </div>

              {/* Orbiting Satellite Data Pill */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 sm:-bottom-3 bg-[#12121E]/90 border border-cyan-400/30 rounded-full px-3 py-1 shadow-lg shadow-cyan-950/50 flex items-center gap-1.5 backdrop-blur-md"
              >
                <Cpu className="w-3 h-3 text-cyan-400 animate-spin-slow" />
                <span className="text-[10px] font-mono text-zinc-300 font-medium">
                  NEURAL VISION // 30 FPS
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3D Holographic Statistics Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          {STATISTICS.map((stat, i) => (
            <TiltCard3D
              key={i}
              intensity={8}
              glowColor="rgba(6, 182, 212, 0.2)"
              className="p-4"
            >
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-cyan-300 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-zinc-300">
                  {stat.label}
                </p>
                <p className="text-[11px] text-zinc-500 font-mono truncate">
                  {stat.subtext}
                </p>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}
