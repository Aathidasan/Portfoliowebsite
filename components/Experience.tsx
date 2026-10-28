"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";
import TiltCard3D from "@/components/ui/TiltCard3D";

export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-2">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE // SPATIAL CARDS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
          Work History &amp; Internships
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl">
          Hover to interact with each timeline node in 3D perspective.
        </p>
      </div>

      {/* Experience Stack */}
      <div className="space-y-5">
        {EXPERIENCES.map((exp, idx) => (
          <TiltCard3D
            key={exp.id}
            intensity={8}
            glowColor={idx % 2 === 0 ? "rgba(139, 92, 246, 0.2)" : "rgba(6, 182, 212, 0.2)"}
            className="p-6 sm:p-7"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                    {exp.type === "internship" ? "Industry Internship" : "Technical Program"}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-zinc-300 font-medium mt-0.5">
                    {exp.organization}
                    <span className="text-zinc-500 font-normal"> • {exp.location}</span>
                  </p>
                </div>

                <span className="self-start sm:self-auto text-xs font-mono text-zinc-300 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08] whitespace-nowrap">
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
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.08]">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard3D>
        ))}
      </div>
    </section>
  );
}
