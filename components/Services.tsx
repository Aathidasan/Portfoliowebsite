"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Layout,
  Cpu,
  Zap,
  Database,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, any> = {
  Coffee,
  Layout,
  Cpu,
  Zap,
  Database,
  Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-36 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Code2 className="w-3 h-3 text-cyan-400" />
            <span>SOLUTIONS & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I <span className="gradient-accent">Can Build</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Targeted software solutions built with strong programming fundamentals, modern web standards, and reliable database structures.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Code2;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 group hover:shadow-neon-cyan transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {t}
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
