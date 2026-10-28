"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Eye,
  Github,
  ChevronDown,
  ChevronUp,
  Cpu,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/lib/constants";
import TheftDetectionPipelineVisualizer from "./ui/TheftDetectionPipelineVisualizer";
import CodeSnippetWorkspace from "./ui/CodeSnippetWorkspace";
import TiltCard3D from "@/components/ui/TiltCard3D";

export default function Projects() {
  const [activeVisualizer, setActiveVisualizer] = useState<string | null>(null);

  const toggleVisualizer = (id: string) => {
    setActiveVisualizer((prev) => (prev === id ? null : id));
  };

  return (
    <section id="lab" className="space-y-8 relative">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>PRODUCTION BUILDS // 3D ARTIFACTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
          Featured Engineering Projects
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl">
          Hover over each project card to experience real-time 3D tilt perspective and inspect interactive live visualizers.
        </p>
      </div>

      {/* 3D Projects Stack */}
      <div className="space-y-6">
        {PROJECTS.map((project, idx) => (
          <TiltCard3D
            key={project.id}
            intensity={10}
            glowColor={idx === 0 ? "rgba(6, 182, 212, 0.25)" : idx === 1 ? "rgba(139, 92, 246, 0.25)" : "rgba(236, 72, 153, 0.25)"}
            className="p-6 sm:p-8"
          >
            <div className="space-y-5">
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                    {project.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                {/* Status Pill */}
                <span className="self-start sm:self-auto text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 whitespace-nowrap shadow-sm shadow-cyan-950/50">
                  ● PRODUCTION VERIFIED
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {project.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.08]">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions & Interactive Toggles */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
                <div className="flex items-center gap-2">
                  {project.id === "ai-theft-detection" && (
                    <button
                      onClick={() => toggleVisualizer(project.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 text-xs font-mono font-medium border border-cyan-500/30 transition-all shadow-sm shadow-cyan-950/40"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>
                        {activeVisualizer === project.id
                          ? "Hide Pipeline Sim"
                          : "Launch Pipeline Sim"}
                      </span>
                      {activeVisualizer === project.id ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}

                  {project.id === "java-programming-projects" && (
                    <button
                      onClick={() => toggleVisualizer(project.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 text-xs font-mono font-medium border border-purple-500/30 transition-all shadow-sm shadow-purple-950/40"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>
                        {activeVisualizer === project.id
                          ? "Hide Code Terminal"
                          : "Launch Code Terminal"}
                      </span>
                      {activeVisualizer === project.id ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3 ml-auto text-xs font-mono">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      <span>{project.liveUrlLabel || "Live Platform"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Expandable Visualizer */}
              <AnimatePresence>
                {activeVisualizer === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-white/[0.08] overflow-hidden"
                  >
                    {project.id === "ai-theft-detection" && (
                      <TheftDetectionPipelineVisualizer />
                    )}
                    {project.id === "java-programming-projects" && (
                      <CodeSnippetWorkspace />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </TiltCard3D>
        ))}
      </div>
    </section>
  );
}
