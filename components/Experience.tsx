"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Cpu,
  Layers,
  BarChart3,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";

const ICON_MAP: Record<string, any> = {
  "training-fullstack": Coffee,
  "internship-the-mind-it": Cpu,
  "internship-novitech-fullstack": Layers,
  "internship-novitech-analytics": BarChart3,
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Work Experience
        </h2>
        <p className="text-center text-white/70 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
          Industry-oriented internships and professional full stack development training.
        </p>

        {/* 2x2 Grid Matching Ibrahim Memon Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCES.map((item, idx) => {
            const Icon = ICON_MAP[item.id] || Coffee;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-gradient-to-r from-slate-950 via-purple-950/80 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-950 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0 group-hover:border-purple-400 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-purple-300 border border-purple-500/30">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-1">
                    {item.role}
                  </h3>
                  <p className="text-purple-400 font-medium text-xs mb-3">
                    {item.organization} • {item.location}
                  </p>

                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 mb-4 text-xs text-white/80">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-purple-200 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#lab"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-flex items-center gap-1 group-hover:translate-x-0.5"
                  >
                    <span>LEARN MORE</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
