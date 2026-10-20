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
    <section id="skills" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
              02 / TECHNICAL PROFICIENCIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Stack
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xl">
              Verified skills spanning object-oriented Java programming, modern web technologies, relational databases, and computer vision workflows.
            </p>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-md transition-colors border ${
                    isSelected
                      ? "bg-white text-black border-white font-semibold"
                      : "bg-zinc-950 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-8">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  <span>{group.category}</span>
                </h3>
                <span className="text-[10px] font-mono text-zinc-500">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Grid for skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.skills.map((skill, idx) => {
                  const Icon = ICON_MAP[skill.icon] || Code;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04, duration: 0.3 }}
                      className="studio-card p-4 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:border-white/30 transition-colors">
                            <Icon className="w-4 h-4 text-zinc-300" />
                          </div>
                          <span className="studio-tag">
                            {skill.badge}
                          </span>
                        </div>

                        <h4 className="font-semibold text-white text-sm">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                        <CheckCircle className="w-3 h-3 text-zinc-400" />
                        <span>Verified learning</span>
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
