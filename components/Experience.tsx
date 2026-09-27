"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Building2,
  Clock,
} from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>TRAINING & INTERNSHIP MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="gradient-accent">Training</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Practical development immersion through verified internships and active professional Java training, clearly distinguished for hiring transparency.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 -translate-x-1/2 opacity-40 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((item, idx) => {
              const isTraining = item.type === "training";
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-10`}
                >
                  {/* Central Node Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-[#0F172A] border-2 border-indigo-500 items-center justify-center shadow-lg shadow-indigo-500/40 z-10">
                    {isTraining ? (
                      <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    )}
                  </div>

                  {/* Empty Spacer Column for Alternating Side on Desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content Column */}
                  <div className="w-full sm:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`glass-card rounded-2xl p-6 sm:p-7 relative border transition-all duration-300 ${
                        isTraining
                          ? "border-indigo-500/40 shadow-neon-indigo"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                        <span
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold ${
                            isTraining
                              ? "bg-indigo-500/20 text-cyan-300 border border-indigo-500/30"
                              : "bg-white/5 text-purple-300 border border-white/10"
                          }`}
                        >
                          {isTraining ? "Professional Training" : "Internship"}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Clock className="w-3 h-3 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Main Title & Organization */}
                      <div className="mt-3.5 space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{item.organization}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-400">{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="mt-4 space-y-1.5 pt-3 border-t border-white/5">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                          Key Focus & Exposure:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technology Chips */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
