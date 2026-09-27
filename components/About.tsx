"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  Sparkles,
  Award,
  BookOpen,
  Building2,
  Code,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO, STATISTICS, EDUCATION } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-accent">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            A motivated fresher committed to building software solutions with solid Java fundamentals, real internship learning, and practical AI implementations.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Passionate Developer & Continuous Learner</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  I am a fresh Information Technology graduate from{" "}
                  <strong className="text-white font-semibold">PRIST University, Thanjavur (Class of 2026)</strong>
                  . My core objective is to apply my programming logic, web development knowledge, and artificial intelligence curiosity to solve practical computational problems.
                </p>

                <p>
                  To elevate my technical caliber, I am currently undergoing intensive{" "}
                  <strong className="text-indigo-300 font-semibold">
                    6-Month Java Development Training at QSpiders, Velachery (Chennai)
                  </strong>
                  . This structured immersion covers Core Java, Object-Oriented Programming (OOP) paradigms, relational databases, Oracle, and complex SQL data modeling.
                </p>

                <p>
                  Beyond academic theory, I have gained hands-on practical exposure through dual internships: exploring{" "}
                  <strong className="text-cyan-300 font-semibold">Artificial Intelligence & computer vision workflows at The Mind IT</strong>{" "}
                  and modern{" "}
                  <strong className="text-purple-300 font-semibold">Full Stack web development concepts at Novi Tech</strong>.
                </p>
              </div>

              {/* Truthful Fresher Value Proposition */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  What I Bring to an Entry-Level Engineering Team
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Strong Core Java & OOP Mindset</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>SQL & Relational DB Structuring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Python & Computer Vision (YOLO/OpenCV)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Eager, fast learner ready for production code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Professional Training Card */}
            <div className="glass-panel rounded-2xl p-6 border border-indigo-500/25 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-mono uppercase px-3 py-1 rounded-bl-lg font-bold tracking-wider">
                Current Training
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base">
                    Java Development Training
                  </h4>
                  <p className="text-xs font-semibold text-indigo-300">
                    QSpiders — Velachery, Chennai
                  </p>
                  <p className="text-xs text-slate-400">
                    6-Month Intensive Course • Active Professional Training
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-xs text-slate-300 mb-2.5">
                  Specialized learning curriculum:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Core Java",
                    "Object-Oriented Programming",
                    "Java Programming",
                    "SQL",
                    "Oracle",
                    "Problem Solving",
                    "Programming Fundamentals",
                    "Database Concepts",
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Statistics & Education Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* 4 Animated Metric Cards (Honest numbers only) */}
            <div className="grid grid-cols-2 gap-4">
              {STATISTICS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-white/10 hover:border-indigo-500/40"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-cyan-300 font-mono">
                    {stat.value}
                  </span>
                  <div className="mt-2">
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {stat.subtext}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Education Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-cyan-500/25 relative overflow-hidden shadow-2xl">
              {/* Decorative gradient corner */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider font-semibold">
                      Higher Education
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {EDUCATION.degree}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {EDUCATION.university} • {EDUCATION.location}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {EDUCATION.year}
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1 font-mono">
                    {EDUCATION.status}
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {EDUCATION.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                    Academic Focus Areas:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {EDUCATION.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {EDUCATION.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
