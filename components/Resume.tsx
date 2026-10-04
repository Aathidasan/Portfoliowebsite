"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
} from "lucide-react";

interface ResumeProps {
  onOpenResume?: () => void;
}

export default function Resume({ onOpenResume }: ResumeProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-600/15 via-purple-600/15 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bento-card p-8 sm:p-12 border-white/15 text-center md:text-left relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Want to know more about my journey?
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                View my education, technical skills, internships, projects, and training experience.
              </p>

              {/* Highlights pills */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>B.Sc. IT (2026)</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                  <span>QSpiders Java Course</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>2 Internships</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href="/resume.pdf"
                download="Aathidasan_R_Resume.pdf"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50 flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Preview in Browser</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
