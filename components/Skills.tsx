"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Coffee,
  FileCode,
  Layers,
  Database,
  Cpu,
  GitBranch,
  Terminal,
  Send,
  Eye,
  Camera,
  Scan,
  HardDrive,
  Server,
  Network,
  Atom,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/constants";

const ICON_MAP: Record<string, any> = {
  Coffee,
  FileCode,
  Code,
  Atom,
  Layers,
  Network,
  Database,
  HardDrive,
  Server,
  Cpu,
  Eye,
  Camera,
  Scan,
  GitBranch,
  Terminal,
  Send,
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    activeFilter === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeFilter);

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 -right-48 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-accent">Tech Matrix</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-2">
            Structured competency matrix spanning object-oriented Java programming, modern web technologies, relational databases, and computer vision workflows.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl transition-all border font-medium ${
                    isSelected
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30"
                      : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Skill Categories */}
        <div className="space-y-8">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{group.category}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{group.description}</p>
                </div>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Bento Grid for this category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, idx) => {
                  const Icon = ICON_MAP[skill.icon] || Code;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.35 }}
                      className="bento-card p-5 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:border-cyan-500/50 flex items-center justify-center text-indigo-400 group-hover:text-cyan-300 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-cyan-300 border border-white/10">
                            {skill.badge}
                          </span>
                        </div>

                        <h4 className="font-bold text-white text-base group-hover:text-indigo-200 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors font-mono">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Practical exposure</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
