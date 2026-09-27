"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from "@/lib/constants";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0D1527] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#0A101D] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <h3 className="font-semibold text-white text-base">
                Curriculum Vitae • Aathidasan R
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
              <a
                href="/resume.pdf"
                download="Aathidasan_R_Resume.pdf"
                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 font-sans text-xs sm:text-sm">
            {/* Header */}
            <div className="border-b border-white/10 pb-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-indigo-400 font-semibold text-sm sm:text-base mt-0.5">
                    Java Developer | Software Developer Fresher | AI Enthusiast
                  </p>
                </div>
                <div className="space-y-1 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-slate-300 leading-relaxed text-xs sm:text-sm bg-white/[0.02] p-3 rounded-lg border border-white/5">
                "{PERSONAL_INFO.heroBio}"
              </p>
            </div>

            {/* Current Professional Training */}
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-wider text-xs mb-3">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                <span>Professional Training</span>
              </div>
              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-sm">Java Development Training</h4>
                    <p className="text-indigo-300 text-xs">QSpiders — Velachery, Chennai</p>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    6-Month Java Course (Current)
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pt-1">
                  <li>In-depth Core Java, Object-Oriented Programming (OOP) principles, and collections</li>
                  <li>Relational database modeling, complex SQL queries, and Oracle concepts</li>
                  <li>Algorithmic problem-solving and clean software architecture</li>
                </ul>
              </div>
            </div>

            {/* Internship Experience */}
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-wider text-xs mb-3">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                <span>Internship Experience</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white/[0.02] p-3.5 rounded-xl border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-white text-xs">Artificial Intelligence Intern</h4>
                    <span className="text-[10px] text-slate-400">The Mind IT, Trichy</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Practical exposure to AI fundamentals, Python development, workflow modeling, and computer vision concepts.
                  </p>
                </div>
                <div className="bg-white/[0.02] p-3.5 rounded-xl border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-white text-xs">Full Stack Developer Intern</h4>
                    <span className="text-[10px] text-slate-400">Novi Tech</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Hands-on exposure to frontend web interfaces (HTML, CSS, JS), backend fundamentals, and full-stack software development workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-xs mb-3">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Education</span>
              </div>
              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white text-sm">{EDUCATION.degree}</h4>
                  <p className="text-slate-400 text-xs">{EDUCATION.university}, {EDUCATION.location}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-cyan-300 font-semibold">{EDUCATION.year}</span>
                  <p className="text-[11px] text-slate-400">{EDUCATION.status}</p>
                </div>
              </div>
            </div>

            {/* Key Technical Skills */}
            <div>
              <div className="flex items-center gap-2 text-purple-400 font-bold uppercase tracking-wider text-xs mb-3">
                <Code className="w-4 h-4 text-purple-400" />
                <span>Technical Skills</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
                  <span className="font-semibold text-white">Programming: </span>
                  <span className="text-slate-400">Java (Core, OOP), Python, JavaScript</span>
                </div>
                <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
                  <span className="font-semibold text-white">Web & UI: </span>
                  <span className="text-slate-400">React, HTML5, CSS3, REST APIs</span>
                </div>
                <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
                  <span className="font-semibold text-white">Databases: </span>
                  <span className="text-slate-400">SQL, Oracle, SQLite</span>
                </div>
                <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
                  <span className="font-semibold text-white">AI & Tools: </span>
                  <span className="text-slate-400">YOLO, OpenCV, Git, GitHub, VS Code</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Featured Projects</span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 bg-white/[0.02] rounded-xl border border-white/5">
                  <div className="flex justify-between">
                    <h5 className="font-bold text-white text-xs sm:text-sm">AI Theft Detection System</h5>
                    <span className="text-[11px] font-mono text-cyan-300">Python • YOLO • OpenCV • Flask • SQLite</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Computer vision system for real-time person/object monitoring, concealment behavior detection, automated Telegram alert dispatch, and SQLite event logging.
                  </p>
                </div>
                <div className="p-3.5 bg-white/[0.02] rounded-xl border border-white/5">
                  <div className="flex justify-between">
                    <h5 className="font-bold text-white text-xs sm:text-sm">AI Smart Portfolio Generator</h5>
                    <span className="text-[11px] font-mono text-purple-300">Python • AI APIs • Web Tech</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    AI-driven platform concept to assist developers in synthesizing personalized developer profiles and web showcases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
