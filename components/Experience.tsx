"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
            03 / EXPERIENCE & TRAINING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Milestones & Internships
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl">
            Practical development immersion through verified internships and active professional Java training, clearly distinguished for hiring transparency.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-4 max-w-4xl">
          {EXPERIENCES.map((item, idx) => {
            const isTraining = item.type === "training";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="studio-card p-6"
              >
                {/* Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="studio-tag">
                      {isTraining ? "PROFESSIONAL TRAINING" : "INTERNSHIP"}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-white/10">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Main Role & Org */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono">
                    <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-zinc-200 font-medium">{item.organization}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-1.5 pt-3.5 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">
                    Practical Focus & Key Learnings:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="studio-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
