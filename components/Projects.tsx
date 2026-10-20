"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import TheftDetectionPipelineVisualizer from "./ui/TheftDetectionPipelineVisualizer";

export default function Projects() {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
            04 / FEATURED WORK & SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Prototypes
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl">
            Practical software systems engineered with computer vision, object-oriented Core Java programming, relational databases, and modern web interfaces.
          </p>
        </div>

        {/* Featured Project Showcase */}
        <div className="mb-8">
          <div className="studio-card p-6 sm:p-8 lg:p-10 border-white/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="studio-tag flex items-center gap-1.5 text-white bg-zinc-900">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    FEATURED AI SYSTEM
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    Computer Vision
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                    {featuredProject.tagline}
                  </p>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Core Capabilities */}
                <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide">
                    System Architecture & Features:
                  </span>
                  <div className="space-y-1.5 text-xs text-zinc-300">
                    {featuredProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {featuredProject.technologies.map((t) => (
                    <span key={t} className="studio-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Interactive Studio Visualizer */}
              <div className="lg:col-span-7">
                <TheftDetectionPipelineVisualizer />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              className="studio-card p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="studio-tag">{project.badge}</span>
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] space-y-1.5">
                  {project.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-zinc-300">
                      <span className="w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-5 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="studio-tag">
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
