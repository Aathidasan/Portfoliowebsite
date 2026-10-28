"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import {
  Code2,
  Play,
  Terminal,
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  Layers,
  Database,
  Cpu,
  RefreshCw,
} from "lucide-react";

interface CodeTab {
  id: string;
  name: string;
  lang: string;
  code: string;
  runOutput: string;
}

const TABS: CodeTab[] = [
  {
    id: "java",
    name: "Main.java",
    lang: "java",
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
        // Training: 6-Month Intensive Java Full Stack Course
    }
}`,
    runOutput: `[BUILD] javac Main.java (compiled in 0.18s)
[EXEC]  java AathidasanProfile
Output: Building practical solutions with Java & AI
Status: Ready for Entry-Level Software Roles (Chennai, India)`,
  },
  {
    id: "python",
    name: "theft_detection.py",
    lang: "python",
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
    runOutput: `[YOLOv8] Weights loaded: yolov8n.pt (CPU/GPU inference)
[STREAM] Ingesting CAM_01_STORE_FRONT: 1920x1080 @ 30 FPS
[DETECTION] person: 0.958 | merchandise: 0.914
[STATE] NORMAL -> Monitoring spatial distance to pocket boundary`,
  },
  {
    id: "sql",
    name: "schema.sql",
    lang: "sql",
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
    runOutput: `[SQL] Database schema indexed successfully.
[QUERY] Executed SELECT on table 'security_incidents'.
Records: 5 timestamped incident logs retrieved.`,
  },
  {
    id: "react",
    name: "Portfolio.tsx",
    lang: "typescript",
    code: `export default function DeveloperGreeting() {
  const [fresher, setFresher] = useState(true);

  return (
    <section className="studio-card p-6">
      <h2>Aathidasan R</h2>
      <p>Java • Python • Web • AI Enthusiast</p>
      <span className="badge">Available for Roles</span>
    </section>
  );
}`,
    runOutput: `[NEXT.JS 16] Compiled in 94ms
Route: / (App Router static prerendered)
TypeScript: 0 type errors`,
  },
];

const STUDIO_CHIPS = [
  "Java", "Python", "SQL", "React", "OpenCV", "YOLO", "Oracle", "Git", "VS Code"
];

export default function CodeSnippetWorkspace() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallax = useMouseParallax(containerRef, { maxRotation: 5 });
  const [activeTabId, setActiveTabId] = useState<string>("java");
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 450);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto perspective-1000 select-none"
    >
      {/* 3D Motion Container */}
      <motion.div
        animate={{
          rotateX: parallax.rotateX,
          rotateY: parallax.rotateY,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        className="w-full flex flex-col gap-3.5"
      >
        {/* Studio Workspace Header Card */}
        <div className="studio-card p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-white">
              AR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-white">Aathidasan R</h3>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-white/10">
                  Fresher
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                Java Developer • B.Sc. IT (2026)
              </p>
            </div>
          </div>

          {/* Quick Studio Tags */}
          <div className="flex flex-wrap gap-1">
            {STUDIO_CHIPS.slice(0, 5).map((chip) => (
              <span key={chip} className="studio-tag">
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Code Editor Studio Window */}
        <div className="studio-card border-white/10 shadow-2xl">
          {/* Mac/Unix Window Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="text-[11px] font-mono text-zinc-400 ml-2">
                studio-workspace/{activeTab.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                aria-label="Copy snippet"
                className="text-xs text-zinc-400 hover:text-white p-1 rounded transition-colors"
                title="Copy code"
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
                className="text-xs font-mono px-2.5 py-1 rounded bg-white text-black hover:bg-zinc-200 transition-colors flex items-center gap-1 font-semibold disabled:opacity-50"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isRunning ? "Running..." : "Run"}</span>
              </button>
            </div>
          </div>

          {/* Editor Tabs */}
          <div className="flex items-center bg-black border-b border-white/[0.06] px-2 py-1 overflow-x-auto scrollbar-none">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? "bg-zinc-900 text-white border border-white/10 font-semibold"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
                  }`}
                >
                  <Code2 className="w-3 h-3 text-zinc-400" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Code Viewer */}
          <div className="p-4 bg-black/90 overflow-x-auto max-h-[200px] font-mono text-xs leading-relaxed text-zinc-300">
            <pre className="text-left">
              <code>{activeTab.code}</code>
            </pre>
          </div>

          {/* Console Output Drawer */}
          <div className="border-t border-white/[0.08] bg-zinc-950 p-3 text-xs font-mono">
            <div className="flex items-center justify-between text-zinc-500 pb-1.5 mb-1.5 border-b border-white/[0.05] text-[10px]">
              <div className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                <Terminal className="w-3 h-3 text-white" />
                <span>STUDIO TERMINAL</span>
              </div>
              <span>Live Code Execution</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id + (isRunning ? "-run" : "-idle")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-1 text-zinc-300 whitespace-pre-wrap text-[11px]"
              >
                {isRunning ? (
                  <div className="flex items-center gap-2 text-zinc-400">
                    <RefreshCw className="w-3 h-3 animate-spin text-white" />
                    <span>Compiling & Executing {activeTab.name}...</span>
                  </div>
                ) : (
                  activeTab.runOutput
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
