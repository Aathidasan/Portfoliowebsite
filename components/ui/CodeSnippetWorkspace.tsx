"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import {
  Code2,
  Play,
  Terminal,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Cpu,
  Database,
  Layers,
  FileCode2,
} from "lucide-react";

interface CodeTab {
  id: string;
  name: string;
  lang: string;
  icon: string;
  code: string;
  runOutput: string;
}

const TABS: CodeTab[] = [
  {
    id: "java",
    name: "Main.java",
    lang: "java",
    icon: "Coffee",
    code: `public class AathidasanProfile {
    private final String name = "Aathidasan R";
    private final String role = "Java Developer";
    private final String status = "Software Developer Fresher";

    public void displayMission() {
        System.out.println("Building practical solutions with Java & AI");
    }

    public static void main(String[] args) {
        AathidasanProfile dev = new AathidasanProfile();
        dev.displayMission();
        // Training: QSpiders 6-Month Java Course
    }
}`,
    runOutput: `[BUILD] javac Main.java -> Success (0.24s)
[EXEC] java AathidasanProfile
Output: Building practical solutions with Java & AI
Status: Ready for Entry-Level Software Roles (Chennai)`,
  },
  {
    id: "python",
    name: "theft_detection.py",
    lang: "python",
    icon: "FileCode",
    code: `import cv2
from ultralytics import YOLO

class SecurityMonitor:
    def __init__(self, weights="yolov8n.pt"):
        self.model = YOLO(weights)
        self.telegram_alert_enabled = True

    def analyze_frame(self, frame):
        results = self.model.predict(frame, conf=0.75)
        # Tracking person & handheld item vectors
        is_concealed = self.evaluate_behavior(results)
        if is_concealed:
            self.dispatch_telegram_alert(frame)
        return results`,
    runOutput: `[INFO] Initializing YOLOv8 Neural Weights...
[STREAM] Video feed captured: 1920x1080 @ 30 FPS
[DETECTION] Person detected (94.2%) | Item detected (89.6%)
[ANALYSIS] Behavior state: NORMAL (Zero suspicious concealment)`,
  },
  {
    id: "sql",
    name: "schema.sql",
    lang: "sql",
    icon: "Database",
    code: `CREATE TABLE security_incidents (
    incident_id INTEGER PRIMARY KEY AUTOINCREMENT,
    detection_timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    confidence_score DECIMAL(5,2) NOT NULL,
    alert_dispatched BOOLEAN DEFAULT TRUE,
    evidence_snapshot_path TEXT NOT NULL
);

SELECT incident_id, detection_timestamp, confidence_score
FROM security_incidents
ORDER BY detection_timestamp DESC
LIMIT 5;`,
    runOutput: `[SQL] Query executed against SQLite event ledger.
Rows returned: 5 records retrieved successfully.
Status: Database schema normalized & indexed.`,
  },
  {
    id: "react",
    name: "App.tsx",
    lang: "typescript",
    icon: "Atom",
    code: `export default function DeveloperGreeting() {
  const [learning, setLearning] = useState(true);

  return (
    <section className="developer-showcase">
      <h1>Aathidasan R</h1>
      <p>Java • Python • Web • AI Enthusiast</p>
      <div className="status-badge">Available for Roles</div>
    </section>
  );
}`,
    runOutput: `[NEXT.JS] Compiled successfully in 142ms
Ready on http://localhost:3000
TypeScript types verified: 0 errors`,
  },
];

const TECH_BADGES = [
  { name: "Java", color: "from-amber-500/20 to-orange-500/10 text-amber-300 border-amber-500/30" },
  { name: "Python", color: "from-blue-500/20 to-cyan-500/10 text-cyan-300 border-cyan-500/30" },
  { name: "JavaScript", color: "from-yellow-500/20 to-amber-500/10 text-yellow-300 border-yellow-500/30" },
  { name: "React", color: "from-sky-500/20 to-blue-500/10 text-sky-300 border-sky-500/30" },
  { name: "SQL", color: "from-emerald-500/20 to-teal-500/10 text-emerald-300 border-emerald-500/30" },
  { name: "Git", color: "from-red-500/20 to-orange-500/10 text-red-300 border-red-500/30" },
  { name: "GitHub", color: "from-purple-500/20 to-indigo-500/10 text-purple-300 border-purple-500/30" },
  { name: "AI", color: "from-pink-500/20 to-rose-500/10 text-rose-300 border-rose-500/30" },
  { name: "VS Code", color: "from-blue-600/20 to-indigo-600/10 text-blue-300 border-blue-500/30" },
];

export default function CodeSnippetWorkspace() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallax = useMouseParallax(containerRef, { maxRotation: 8 });
  const [activeTabId, setActiveTabId] = useState<string>("java");
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setShowTerminal(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 600);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto perspective-1000 select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* 3D Parallax Outer Container */}
      <motion.div
        animate={{
          rotateX: parallax.rotateX,
          rotateY: parallax.rotateY,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full flex flex-col gap-4"
      >
        {/* Glass Developer Profile Card (Required: No fake headshot) */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Subtle top border gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              {/* Initials Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-[1.5px] shadow-lg shadow-indigo-500/25">
                  <div className="w-full h-full bg-[#0F172A] rounded-[14px] flex items-center justify-center">
                    <span className="font-mono font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-200 via-white to-cyan-200">
                      AR
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0F172A] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-white tracking-tight">
                    Aathidasan R
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    Verified Fresher
                  </span>
                </div>
                <p className="text-sm font-semibold text-indigo-300/90">
                  Java Developer
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Fresher | B.Sc. IT (2026) | AI Enthusiast
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-1 text-xs text-slate-400 border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0 w-full sm:w-auto justify-between sm:justify-center">
              <span className="text-[11px] text-slate-500">Location</span>
              <span className="text-slate-300 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Chennai, TN
              </span>
            </div>
          </div>

          {/* Floating Technology Badges Row */}
          <div className="mt-4 pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5 items-center">
            {TECH_BADGES.map((badge) => (
              <span
                key={badge.name}
                className={`text-[11px] font-mono px-2 py-0.5 rounded-md border bg-gradient-to-r ${badge.color} transition-transform hover:scale-105`}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>

        {/* Code Editor Window */}
        <div className="glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Mac OS Style Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0F172A]/80 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
              </div>
              <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline-block">
                ~/workspace/aathidasan-dev
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopy}
                aria-label="Copy code snippet"
                className="text-xs text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1"
                title="Copy Code"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>

              <button
                onClick={handleRun}
                disabled={isRunning}
                className="text-xs px-2.5 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium shadow-sm transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
              >
                <Play className="w-3 h-3 fill-current" />
                {isRunning ? "Running..." : "Run"}
              </button>
            </div>
          </div>

          {/* Editor Tabs */}
          <div className="flex items-center overflow-x-auto bg-[#0B1120]/90 border-b border-white/5 px-2 py-1 scrollbar-none">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? "bg-white/10 text-cyan-300 border border-white/10 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <Code2 className="w-3 h-3 text-indigo-400" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Code Viewer Body */}
          <div className="p-4 bg-[#0B1120]/70 overflow-x-auto max-h-[220px] font-mono text-xs leading-relaxed text-slate-300">
            <pre className="text-left">
              <code>{activeTab.code}</code>
            </pre>
          </div>

          {/* Interactive Terminal Output Drawer */}
          {showTerminal && (
            <div className="border-t border-white/10 bg-[#090D1A] p-3 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-400 pb-1.5 mb-1.5 border-b border-white/5 text-[11px]">
                <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                  <Terminal className="w-3 h-3" />
                  <span>OUTPUT CONSOLE</span>
                </div>
                <span className="text-[10px] text-slate-500">Live Simulation</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id + (isRunning ? "-running" : "-done")}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-1 text-slate-300 whitespace-pre-wrap"
                >
                  {isRunning ? (
                    <div className="flex items-center gap-2 text-indigo-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      Executing {activeTab.name}...
                    </div>
                  ) : (
                    activeTab.runOutput
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
