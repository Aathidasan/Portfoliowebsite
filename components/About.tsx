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

export default function About() {
  return (
    <section id="about" className="space-y-12">
      {/* Section Header */}
      <div>
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          About & Background
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
          Education & Skill Matrix
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl">
          Academic foundation in Information Technology combined with practical industry training in Full Stack engineering.
        </p>
      </div>

      {/* Education Card */}
      <div className="framer-card p-6 sm:p-7 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {EDUCATION.degree}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                {EDUCATION.university} • {EDUCATION.location}
              </p>
            </div>
          </div>
          <span className="self-start sm:self-center text-xs font-mono text-zinc-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
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
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Grouped Grid */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white">
          Technical Proficiencies
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="framer-card p-5 space-y-3"
            >
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {cat.category}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="framer-badge hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Strip */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">
          Certifications & Learning
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#121216]/60 border border-white/[0.06] flex flex-col justify-between gap-2"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">
                  {cert.badge}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-white mt-1">
                  {cert.title}
                </h4>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
