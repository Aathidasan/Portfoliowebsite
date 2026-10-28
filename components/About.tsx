"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from "@/lib/constants";
import TiltCard3D from "@/components/ui/TiltCard3D";

export default function About() {
  return (
    <section id="about" className="space-y-12">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC FOUNDATION // KNOWLEDGE BASE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
          Education &amp; Technical Matrix
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl">
          Core degree in Information Technology paired with full stack competencies.
        </p>
      </div>

      {/* 3D Education Card */}
      <TiltCard3D
        intensity={8}
        glowColor="rgba(6, 182, 212, 0.25)"
        className="p-6 sm:p-8"
      >
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-md shadow-cyan-950/40">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {EDUCATION.degree}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-0.5">
                  {EDUCATION.university} • {EDUCATION.location}
                </p>
              </div>
            </div>
            <span className="self-start sm:self-center text-xs font-mono text-zinc-300 bg-white/[0.06] px-3.5 py-1 rounded-full border border-white/[0.1]">
              {EDUCATION.period}
            </span>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {EDUCATION.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {EDUCATION.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </TiltCard3D>

      {/* Skills Grouped Grid with 3D Tilt */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-purple-400" />
          <span>Core Engineering Skillsets</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <TiltCard3D
              key={idx}
              intensity={7}
              glowColor="rgba(139, 92, 246, 0.2)"
              className="p-5"
            >
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{cat.category}</span>
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:border-cyan-400/50 hover:text-white transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>

      {/* Certifications Strip */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-pink-400" />
          <span>Industry Certifications</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {CERTIFICATIONS.map((cert, i) => (
            <TiltCard3D
              key={i}
              intensity={6}
              glowColor="rgba(236, 72, 153, 0.2)"
              className="p-4"
            >
              <div className="flex flex-col justify-between gap-2 h-full">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-pink-400 font-semibold">
                    {cert.badge}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white mt-1">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-[11px] text-zinc-500 font-mono">
                  {cert.issuer}
                </p>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}
