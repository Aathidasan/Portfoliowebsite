"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION, EXPERIENCES } from "@/lib/constants";

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
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-white/15 rounded-xl shadow-2xl overflow-hidden my-auto z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-black border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <h3 className="font-mono font-bold text-white text-xs sm:text-sm">
                CURRICULUM VITAE • AATHIDASAN R
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="btn-secondary-outline px-3 py-1.5 text-xs flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-zinc-400" />
                <span>Print</span>
              </button>
              <a
                href="/resume.pdf"
                download="Aathidasan_R_Resume.pdf"
                className="btn-primary-white px-3.5 py-1.5 text-xs flex items-center gap-1.5 font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-300 font-sans text-xs sm:text-sm">
            {/* Header */}
            <div className="border-b border-white/[0.08] pb-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-zinc-400 font-mono text-xs sm:text-sm mt-0.5">
                    Java Developer | Software Developer Fresher | AI Enthusiast
                  </p>
                </div>
                <div className="space-y-1 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-zinc-300" />
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-zinc-300" />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-300" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-zinc-300 leading-relaxed text-xs sm:text-sm bg-black p-3 rounded border border-white/[0.08]">
                "{PERSONAL_INFO.heroBio}"
              </p>
            </div>

            {/* Current Professional Training */}
            <div>
              <div className="flex items-center gap-2 text-white font-mono font-bold uppercase tracking-wider text-xs mb-2.5">
                <Briefcase className="w-4 h-4 text-zinc-400" />
                <span>Professional Training</span>
              </div>
              <div className="bg-black p-4 rounded-lg border border-white/[0.08] space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-sm">Java Development Training</h4>
                    <p className="text-zinc-400 font-mono text-xs">QSpiders — Velachery, Chennai</p>
                  </div>
                  <span className="studio-tag">
                    6-MONTH COURSE (CURRENT)
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 pt-1">
                  <li>In-depth Core Java, Object-Oriented Programming (OOP) paradigms, and collections</li>
                  <li>Relational database modeling, complex SQL queries, and Oracle concepts</li>
                  <li>Algorithmic problem-solving and clean modular code writing</li>
                </ul>
              </div>
            </div>

            {/* Internship Experience */}
            <div>
              <div className="flex items-center gap-2 text-white font-mono font-bold uppercase tracking-wider text-xs mb-2.5">
                <Briefcase className="w-4 h-4 text-zinc-400" />
                <span>Internship Experience</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-black p-3.5 rounded-lg border border-white/[0.08] space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-white text-xs">Artificial Intelligence Intern</h4>
                    <span className="text-[10px] font-mono text-zinc-500">The Mind IT</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Practical exposure to AI fundamentals, Python development, workflow modeling, and computer vision concepts.
                  </p>
                </div>
                <div className="bg-black p-3.5 rounded-lg border border-white/[0.08] space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-white text-xs">Full Stack Developer Intern</h4>
                    <span className="text-[10px] font-mono text-zinc-500">Novi Tech</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Hands-on exposure to frontend web interfaces (HTML, CSS, JS), backend fundamentals, and full-stack software development workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-white font-mono font-bold uppercase tracking-wider text-xs mb-2.5">
                <GraduationCap className="w-4 h-4 text-zinc-400" />
                <span>Education</span>
              </div>
              <div className="bg-black p-4 rounded-lg border border-white/[0.08] flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white text-sm">{EDUCATION.degree}</h4>
                  <p className="text-zinc-400 text-xs font-mono">{EDUCATION.university}, {EDUCATION.location}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-white font-bold">{EDUCATION.year}</span>
                  <p className="text-[11px] text-zinc-500 font-mono">{EDUCATION.status}</p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-2 text-white font-mono font-bold uppercase tracking-wider text-xs mb-2.5">
                <Code className="w-4 h-4 text-zinc-400" />
                <span>Technical Skills</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-black rounded border border-white/[0.08]">
                  <span className="font-semibold text-white">Programming: </span>
                  <span className="text-zinc-400 font-mono text-[11px]">Java (Core, OOP), Python, JavaScript</span>
                </div>
                <div className="p-3 bg-black rounded border border-white/[0.08]">
                  <span className="font-semibold text-white">Web & UI: </span>
                  <span className="text-zinc-400 font-mono text-[11px]">React, HTML5, CSS3, REST APIs</span>
                </div>
                <div className="p-3 bg-black rounded border border-white/[0.08]">
                  <span className="font-semibold text-white">Databases: </span>
                  <span className="text-zinc-400 font-mono text-[11px]">SQL, Oracle, SQLite</span>
                </div>
                <div className="p-3 bg-black rounded border border-white/[0.08]">
                  <span className="font-semibold text-white">AI & Tools: </span>
                  <span className="text-zinc-400 font-mono text-[11px]">YOLO, OpenCV, Git, GitHub, VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
