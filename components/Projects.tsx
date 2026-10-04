"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  Code2,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight,
  FolderGit2,
} from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import TheftDetectionPipelineVisualizer from "./ui/TheftDetectionPipelineVisualizer";

export default function Projects() {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-accent">Projects</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-2">
            Practical applications built with computer vision, Core Java programming, relational databases, and modern web interfaces.
          </p>
        </div>

        {/* Featured Project Bento (Full Width 12 cols) */}
        <div className="mb-8">
          <div className="bento-card p-6 sm:p-8 lg:p-10 border-indigo-500/35 relative overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Featured AI System
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Computer Vision
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm font-medium text-indigo-300 mt-1">
                    {featuredProject.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                    Core Architectural Capabilities:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {featuredProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {featuredProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/40 text-slate-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Interactive Visual Flow Visualizer */}
              <div className="lg:col-span-7">
                <TheftDetectionPipelineVisualizer />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Bento Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.45 }}
              className="bento-card p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-cyan-300 border border-white/10">
                    {project.badge}
                  </span>
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="text-xs text-indigo-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-indigo-300/90 font-medium mt-1">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                  {project.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
