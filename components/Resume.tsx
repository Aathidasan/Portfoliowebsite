"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  GraduationCap,
  Briefcase,
  Layers,
} from "lucide-react";

interface ResumeProps {
  onOpenResume?: () => void;
}

export default function Resume({ onOpenResume }: ResumeProps) {
  return (
    <section className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="studio-card p-8 sm:p-10 border-white/15 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-8 space-y-3">
              <span className="studio-tag">OFFICIAL CURRICULUM VITAE</span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Want to know more about my journey?
              </h2>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                View my education, technical skills, internships, projects, and training experience.
              </p>

              {/* Highlights row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-zinc-300" />
                  <span>B.Sc. IT (2026)</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-zinc-300" />
                  <span>Java Full Stack Training</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-zinc-300" />
                  <span>2 Internships</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5 justify-center">
              <a
                href="/resume.pdf"
                download="Aathidasan_R_Resume.pdf"
                className="btn-primary-white px-5 py-3 text-xs sm:text-sm flex items-center justify-center gap-2 font-semibold active:scale-95 text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="btn-secondary-outline px-5 py-3 text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95"
                >
                  <Eye className="w-4 h-4 text-zinc-400" />
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
