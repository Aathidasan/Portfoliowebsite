"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Layout,
  Cpu,
  Zap,
  Database,
  Sparkles,
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
    <section id="services" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
            05 / CAPABILITIES & OUTPUTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Can Build
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl">
            Targeted software solutions built with strong programming fundamentals, modern web standards, and reliable database structures.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Code2;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="studio-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:border-white/30 transition-colors">
                    <Icon className="w-5 h-5 text-zinc-300" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.technologies.map((t) => (
                    <span key={t} className="studio-tag">
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
