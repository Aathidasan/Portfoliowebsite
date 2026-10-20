"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight,
  Globe,
  Database,
  Terminal,
} from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import TheftDetectionPipelineVisualizer from "./ui/TheftDetectionPipelineVisualizer";

export default function Projects() {
  const theftProject = PROJECTS.find((p) => p.id === "ai-theft-detection") || PROJECTS[0];
  const portfolioProject = PROJECTS.find((p) => p.id === "ai-portfolio-builder") || PROJECTS[1];
  const javaProject = PROJECTS.find((p) => p.id === "java-programming-projects") || PROJECTS[2];

  return (
    <section id="lab" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-purple-400 font-mono text-sm uppercase tracking-wider mb-2">
            Selected Lab Work & Systems
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Practical applications built with computer vision, human pose analysis, Flask, and Java Full Stack technologies.
          </p>
        </div>

        {/* Project 1: AI Theft Detection System (Overlapping Card Layout) */}
        <div className="mb-28">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content with Overlapping Glass Card */}
            <div>
              <p className="text-purple-400 text-base sm:text-lg mb-2 font-medium">
                Featured Project
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {theftProject.title}
              </h3>

              {/* Overlapping Glass Card (Signature Reference Style) */}
              <div className="relative z-10 mb-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/15 shadow-2xl lg:w-[calc(100%+12%)]">
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
                    {theftProject.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-purple-200">
                    {theftProject.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {theftProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4">
                <a
                  href="#experience"
                  className="text-white hover:text-purple-400 transition-colors flex items-center gap-1.5 text-sm font-semibold"
                >
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>Interactive Telemetry Below</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Telemetry Console */}
            <div>
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl border border-white/10">
                <TheftDetectionPipelineVisualizer />
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: AI Portfolio Builder (Alternating Reverse Layout) */}
        <div className="mb-24">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:grid-flow-dense">
            {/* Right on Desktop (col-start-2) */}
            <div className="lg:col-start-2">
              <p className="text-purple-400 text-base sm:text-lg mb-2 font-medium">
                Featured Project
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {portfolioProject.title}
              </h3>

              {/* Overlapping Glass Card */}
              <div className="relative z-10 mb-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/15 shadow-2xl lg:ml-[-12%]">
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
                    {portfolioProject.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-purple-200">
                    {portfolioProject.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {portfolioProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={portfolioProject.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors flex items-center gap-1.5 text-sm font-semibold"
                >
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>Visit Project Website</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Left on Desktop (col-start-1) */}
            <div className="lg:col-start-1 lg:row-start-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-4 lg:p-6 shadow-2xl border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-purple-300">
                    aathidasan-ai-portfoli-craft.lovable.app
                  </span>
                </div>

                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-purple-900/50 border border-purple-500/40 flex items-center justify-center mx-auto text-purple-300">
                    <Code2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">AI Portfolio Builder</h4>
                  <p className="text-xs text-white/70 max-w-sm mx-auto">
                    AI-powered workflow generating structured professional developer profiles and responsive portfolio templates.
                  </p>
                  <a
                    href={portfolioProject.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-900/50 transition-all"
                  >
                    <span>Launch Live Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-3 border-t border-white/10 text-center text-xs font-mono text-white/50">
                  Live deployed platform • Production preview
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Java Full Stack Suite */}
        <div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-purple-400 text-base sm:text-lg mb-2 font-medium">
                Core Engineering
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {javaProject.title}
              </h3>

              <div className="relative z-10 mb-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/15 shadow-2xl lg:w-[calc(100%+12%)]">
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
                    {javaProject.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-purple-200">
                    {javaProject.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {javaProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 p-6 shadow-2xl border border-white/10">
                <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs font-mono text-purple-300">
                  <Terminal className="w-4 h-4" />
                  <span>~/projects/java-fullstack-suite</span>
                </div>
                <div className="py-6 font-mono text-xs text-white/80 space-y-2">
                  <p className="text-purple-400">// Core Java & OOP Class Structure</p>
                  <p className="text-white">public class StudentManager implements DatabaseConnector &#123;</p>
                  <p className="pl-4 text-purple-200">private Connection conn;</p>
                  <p className="pl-4 text-purple-200">public List&lt;Record&gt; fetchAuditLedger() &#123;</p>
                  <p className="pl-8 text-white/70">PreparedStatement stmt = conn.prepareStatement(...);</p>
                  <p className="pl-8 text-white/70">return executeQueryWithTransaction(stmt);</p>
                  <p className="pl-4 text-purple-200">&#125;</p>
                  <p className="text-white">&#125;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
