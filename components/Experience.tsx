"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building2,
  Clock,
  Sparkles,
  CheckCircle2,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>TRAINING & INTERNSHIP MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="gradient-accent">Training</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-2">
            Practical development immersion through verified internships and active professional Java training, clearly distinguished for hiring transparency.
          </p>
        </div>

        {/* Bento Timeline Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {EXPERIENCES.map((item, idx) => {
            const isTraining = item.type === "training";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`bento-card p-6 sm:p-8 ${
                  isTraining ? "border-indigo-500/40 shadow-neon-indigo" : ""
                }`}
              >
                {/* Card Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold ${
                        isTraining
                          ? "bg-indigo-500/20 text-cyan-300 border border-indigo-500/40"
                          : "bg-white/5 text-purple-300 border border-white/10"
                      }`}
                    >
                      {isTraining ? "Professional Training" : "Internship Experience"}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role & Org */}
                <div className="mt-4 space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-300 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-white font-semibold">{item.organization}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{item.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 space-y-2 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                    Key Practical Learning & Responsibilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-5 pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-black/40 text-slate-300 border border-white/10"
                    >
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
