"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Signature Header from Reference Site */}
        <div className="text-center mb-16">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white max-w-4xl mx-auto leading-relaxed">
            I'm currently looking to join a{" "}
            <span className="text-purple-400">cross-functional engineering team</span>
            <br />
            <span className="text-sm sm:text-base text-white/70 font-normal">
              that values building reliable software systems and solving practical business challenges
            </span>
          </p>
        </div>

        {/* Education & Certifications Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Education Card (7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {EDUCATION.degree}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-mono font-bold">
                    CGPA: 8.8 / 10
                  </span>
                  <p className="text-[11px] font-mono text-white/60 mt-1">{EDUCATION.period}</p>
                </div>
              </div>

              <div className="py-4 space-y-2">
                <p className="text-sm font-semibold text-purple-200">
                  {EDUCATION.university} • {EDUCATION.location}
                </p>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {EDUCATION.description}
                </p>

                <div className="space-y-1.5 pt-3">
                  <span className="text-xs font-mono text-white/50 uppercase tracking-wide block">
                    Core Academic Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                    {EDUCATION.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
              {EDUCATION.skills.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-purple-200 border border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications & MasterClass Badges (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/10 mb-4">
                <Award className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Certifications & Training</h3>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-white/60 font-mono mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 flex-shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] font-mono text-purple-300 pt-3 border-t border-white/10 mt-3">
              Verified certifications & MasterClass completion
            </p>
          </div>
        </div>

        {/* Technical Skills Showcase Grid */}
        <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 rounded-2xl p-8 border-t-3 border-purple-700 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Technical Proficiencies</h3>
            <p className="text-white/70 text-sm max-w-xl mx-auto">
              Primary languages, frontend & backend frameworks, databases, and AI computer vision libraries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category} className="p-4 rounded-xl bg-black/40 border border-white/10">
                <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-2">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-white font-medium border border-white/10 flex items-center gap-1.5"
                    >
                      <span>{s.name}</span>
                      <span className="text-[10px] text-purple-300 font-mono opacity-80">({s.badge})</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
