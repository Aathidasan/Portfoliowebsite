"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION, EXPERIENCES } from "@/lib/constants";

export default function About() {
  const trainingItem = EXPERIENCES.find((e) => e.type === "training");
  const internships = EXPERIENCES.filter((e) => e.type === "internship");

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
            01 / CANDIDATE BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About & Education
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl">
            A motivated fresher with solid Core Java fundamentals, active professional training, and practical exposure to AI computer vision and web development.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Narrative Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 studio-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Software Developer Fresher & Java Engineer
                </h3>
              </div>

              <div className="space-y-4 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  I am a fresh Information Technology graduate from{" "}
                  <strong className="text-white font-semibold">PRIST University, Thanjavur (Class of 2026)</strong>
                  . My engineering focus lies in Java programming, clean object-oriented architecture, database query structures, and practical AI applications.
                </p>

                <p>
                  To bridge academic concepts with production-standard engineering, I am currently undergoing intensive{" "}
                  <strong className="text-white font-semibold">
                    6-Month Java Development Training at QSpiders, Velachery (Chennai)
                  </strong>
                  . My daily training includes Core Java, collections, exception handling, data structures, and relational Oracle SQL optimization.
                </p>

                <p>
                  My internship exposures at <strong className="text-zinc-100">The Mind IT</strong> (AI & Python workflows) and{" "}
                  <strong className="text-zinc-100">Novi Tech</strong> (Full-stack web applications) provided valuable practical exposure to development workflows and engineering collaboration.
                </p>
              </div>
            </div>

            {/* Competency Checkmarks */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span>Core Java & OOP Principles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span>SQL & Relational Schema Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span>Python & Computer Vision (YOLO)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span>Modern Web & React Components</span>
              </div>
            </div>
          </motion.div>

          {/* Education Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 studio-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Undergraduate Degree
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {EDUCATION.degree}
                    </h4>
                  </div>
                </div>

                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-zinc-200 border border-white/10">
                  {EDUCATION.year}
                </span>
              </div>

              <div className="py-4 space-y-2">
                <p className="text-xs font-semibold text-zinc-200">
                  {EDUCATION.university} • {EDUCATION.location}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {EDUCATION.description}
                </p>

                <div className="space-y-1 pt-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">
                    Academic Focus Areas:
                  </span>
                  <div className="space-y-1 text-xs text-zinc-300">
                    {EDUCATION.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-zinc-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
              {EDUCATION.skills.map((s) => (
                <span key={s} className="studio-tag">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Professional Training Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-6 studio-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Java Development Training</h4>
                    <p className="text-xs text-zinc-400 font-mono">QSpiders — Velachery, Chennai</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-white/10">
                  Current Course
                </span>
              </div>

              <div className="py-4 space-y-3">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Intensive 6-month hands-on immersion in object-oriented programming, algorithmic problem solving, relational SQL queries, and Oracle database fundamentals.
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
                    <span key={topic} className="studio-tag">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <span>Status: Active Professional Training</span>
              <span className="text-white">6 Months</span>
            </div>
          </motion.div>

          {/* Internship Exposure Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-6 studio-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Internship Exposure</h4>
                    <p className="text-xs text-zinc-400 font-mono">2 Verified Placements</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-white/10">
                  Practical Learning
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
                <div className="bg-zinc-950 p-3 rounded-lg border border-white/[0.08] space-y-1">
                  <span className="text-[10px] font-mono text-zinc-400">01 / AI Intern</span>
                  <h5 className="font-semibold text-white text-xs">The Mind IT — Trichy</h5>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    AI fundamentals, Python scripting, computer vision workflows, and technical problem solving.
                  </p>
                </div>

                <div className="bg-zinc-950 p-3 rounded-lg border border-white/[0.08] space-y-1">
                  <span className="text-[10px] font-mono text-zinc-400">02 / Full Stack Intern</span>
                  <h5 className="font-semibold text-white text-xs">Novi Tech</h5>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Frontend web development, responsive CSS, backend fundamentals, and REST API flows.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <span>Verified internship experiences</span>
              <a href="#experience" className="text-white hover:underline flex items-center gap-1">
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
