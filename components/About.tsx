"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  Sparkles,
  Building2,
  Cpu,
  Layers,
  MapPin,
  BookOpen,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION, EXPERIENCES } from "@/lib/constants";

export default function About() {
  const trainingItem = EXPERIENCES.find((e) => e.type === "training");
  const internships = EXPERIENCES.filter((e) => e.type === "internship");

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-accent">Me</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-2">
            A motivated fresher committed to building software solutions with solid Java fundamentals, verified internships, and practical AI implementations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Bento Card 1: Narrative Journey (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Passionate Developer & Continuous Learner
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  I am a fresh Information Technology graduate from{" "}
                  <strong className="text-white font-semibold">PRIST University, Thanjavur (Class of 2026)</strong>
                  . My focus is centered on software development, object-oriented design, relational databases, and applying modern AI solutions to real-world tasks.
                </p>

                <p>
                  To transition smoothly from academic theory to industry-standard engineering, I am currently enrolled in the intensive{" "}
                  <strong className="text-indigo-300 font-semibold">
                    6-Month Java Development Course at QSpiders, Velachery (Chennai)
                  </strong>
                  . Here, I write structured code, solve data-structure algorithms, and master relational database query optimization.
                </p>

                <p>
                  Through dual internships at <strong className="text-cyan-300">The Mind IT</strong> and{" "}
                  <strong className="text-purple-300">Novi Tech</strong>, I have worked directly on AI-driven computer vision and full-stack web applications, sharpening my ability to learn rapidly and contribute effectively.
                </p>
              </div>
            </div>

            {/* Competency Checkmarks */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Core Java & OOP Principles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>SQL & Relational Databases</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Python & Computer Vision (YOLO)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Modern Web & React Components</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Higher Education (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      Undergraduate Degree
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {EDUCATION.degree}
                    </h4>
                  </div>
                </div>

                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {EDUCATION.year}
                </span>
              </div>

              <div className="py-4 space-y-2">
                <p className="text-xs font-semibold text-slate-200">
                  {EDUCATION.university} • {EDUCATION.location}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {EDUCATION.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wide">
                    Core Academic Highlights:
                  </span>
                  <div className="space-y-1 text-xs text-slate-300">
                    {EDUCATION.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
              {EDUCATION.skills.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 3: Current Professional Training (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 bento-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Java Development Training</h4>
                    <p className="text-xs text-indigo-300">QSpiders — Velachery, Chennai</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  Current Course
                </span>
              </div>

              <div className="py-4 space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rigorous 6-month hands-on immersion in object-oriented programming, data structures, SQL, and enterprise database fundamentals.
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
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 pt-2 border-t border-white/5 flex items-center justify-between">
              <span>Status: Active Professional Training</span>
              <span className="text-cyan-400 font-mono">6 Months</span>
            </div>
          </motion.div>

          {/* Bento Card 4: Internship Exposure (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 bento-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Internship Exposure</h4>
                    <p className="text-xs text-purple-300">2 Verified Industry Placements</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  Practical Exposure
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-300">01 • AI Intern</span>
                  <h5 className="font-semibold text-white text-xs">The Mind IT — Trichy</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    AI fundamentals, Python scripting, computer vision workflows, and practical problem solving.
                  </p>
                </div>

                <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-purple-300">02 • Full Stack Intern</span>
                  <h5 className="font-semibold text-white text-xs">Novi Tech</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Frontend web technologies, responsive styling, backend fundamentals, and REST API flows.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 pt-2 border-t border-white/5 flex items-center justify-between">
              <span>Verified internship learning experiences</span>
              <a href="#experience" className="text-indigo-400 hover:text-cyan-300 font-mono flex items-center gap-1">
                <span>View Timeline</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
