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
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/lib/constants";
import TheftDetectionPipelineVisualizer from "./ui/TheftDetectionPipelineVisualizer";
import CodeSnippetWorkspace from "./ui/CodeSnippetWorkspace";

export default function Projects() {
  const [activeVisualizer, setActiveVisualizer] = useState<string | null>(null);

  const toggleVisualizer = (id: string) => {
    setActiveVisualizer((prev) => (prev === id ? null : id));
  };

  return (
    <section id="lab" className="space-y-8">
      {/* Section Header */}
      <div>
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Featured Builds
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
          Projects & Code Artifacts
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl">
          Engineered systems across Computer Vision, Automated Web Builders, and Java Full Stack architectures.
        </p>
      </div>

      {/* Projects Stack */}
      <div className="space-y-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="framer-card p-6 sm:p-7 space-y-5"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-1">
                  {project.badge}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  {project.tagline}
                </p>
              </div>

              {/* Status Pill */}
              <span className="self-start sm:self-auto text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 whitespace-nowrap">
                Production Ready
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
              {project.technologies.map((tech, tIdx) => (
                <span key={tIdx} className="framer-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions & Interactive Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                {project.id === "ai-theft-detection" && (
                  <button
                    onClick={() => toggleVisualizer(project.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 text-xs font-medium border border-purple-500/30 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>
                      {activeVisualizer === project.id
                        ? "Hide Pipeline Sim"
                        : "Run Pipeline Sim"}
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 text-xs font-medium border border-purple-500/30 transition-colors"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>
                      {activeVisualizer === project.id
                        ? "Hide Code Terminal"
                        : "Inspect Source Terminal"}
                    </span>
                    {activeVisualizer === project.id ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 ml-auto text-xs">
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
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    <span>{project.liveUrlLabel || "Live Preview"}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Expandable Visualizer / Code Terminal */}
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
        ))}
      </div>
    </section>
  );
}
