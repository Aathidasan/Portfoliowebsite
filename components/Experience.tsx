"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      {/* Section Header */}
      <div>
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Work History
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
          Experience & Internships
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl">
          Practical exposure gained through hands-on industry internships and focused engineering courses.
        </p>
      </div>

      {/* Experience Stack */}
      <div className="space-y-4">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.id}
            className="framer-card p-6 sm:p-7 space-y-4"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-1">
                  {exp.type === "internship" ? "Industry Internship" : "Technical Course"}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-sm text-zinc-300 font-medium mt-0.5">
                  {exp.organization}
                  <span className="text-zinc-500 font-normal"> • {exp.location}</span>
                </p>
              </div>

              <span className="self-start sm:self-auto text-xs font-mono text-zinc-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06] whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed">
              {exp.description}
            </p>

            {/* Highlights */}
            <div className="space-y-1.5 pt-1">
              {exp.highlights.map((item, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
              {exp.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="framer-badge"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
