"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Scan,
  Cpu,
  Bell,
  Database,
  Play,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  Send,
  Eye,
  Radio,
} from "lucide-react";

interface PipelineStep {
  id: number;
  label: string;
  icon: any;
  title: string;
  detail: string;
  tech: string;
}

const STEPS: PipelineStep[] = [
  {
    id: 1,
    label: "01",
    icon: Camera,
    title: "Camera Stream",
    detail: "OpenCV frame capture ingest from CCTV feed (1920x1080 @ 30 FPS).",
    tech: "OpenCV + VideoCapture",
  },
  {
    id: 2,
    label: "02",
    icon: Scan,
    title: "AI Detection",
    detail: "YOLO inference generates bounding boxes for persons and handheld items.",
    tech: "YOLO Neural Weights",
  },
  {
    id: 3,
    label: "03",
    icon: Cpu,
    title: "Behavior Analysis",
    detail: "Tracks trajectory vectors to detect suspicious object-concealment motions.",
    tech: "Python Spatial Logic",
  },
  {
    id: 4,
    label: "04",
    icon: Bell,
    title: "Instant Alert",
    detail: "Dispatches snapshot image with telemetry payload via Telegram Bot API.",
    tech: "Telegram Bot API",
  },
  {
    id: 5,
    label: "05",
    icon: Database,
    title: "Event Ledger",
    detail: "Records persistent incident record into SQLite database with timestamp.",
    tech: "SQLite Storage",
  },
];

export default function TheftDetectionPipelineVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [detectionState, setDetectionState] = useState<"normal" | "concealment">("concealment");

  const runSimulation = () => {
    setIsSimulating(true);
    let step = 1;
    setActiveStep(1);

    const interval = setInterval(() => {
      step++;
      if (step <= 5) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  const resetSimulation = () => {
    setActiveStep(1);
    setIsSimulating(false);
  };

  return (
    <div className="w-full bg-[#070D18]/90 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl shadow-xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="font-semibold text-white text-sm sm:text-base">
              Interactive AI Detection Flow Visualizer
            </h4>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              Live Simulation
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Visual pipeline: Camera → AI Detection → Behavior Analysis → Alert → Event Log
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-all flex items-center gap-1.5 shadow-md shadow-indigo-600/30 active:scale-95 disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {isSimulating ? `Step ${activeStep}/5 Running...` : "Run Pipeline"}
          </button>
          <button
            onClick={resetSimulation}
            aria-label="Reset simulation"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Step Pills Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-5">
        {STEPS.map((s) => {
          const Icon = s.icon;
          const isSelected = activeStep === s.id;
          const isPast = activeStep > s.id;

          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`text-left p-2.5 rounded-xl border transition-all flex flex-col justify-between gap-1.5 relative overflow-hidden ${
                isSelected
                  ? "bg-indigo-950/60 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : isPast
                  ? "bg-white/[0.04] border-emerald-500/30 text-slate-300"
                  : "bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    isSelected
                      ? "bg-indigo-500 text-white"
                      : isPast
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-white/5 text-slate-400"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono opacity-60">
                  {s.label}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold leading-tight line-clamp-1">
                  {s.title}
                </p>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">
                  {s.tech}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Stage Visualizer Display */}
      <div className="bg-[#0A101D] border border-white/10 rounded-xl p-4 sm:p-5 relative min-h-[220px]">
        <AnimatePresence mode="wait">
          {activeStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded-lg border border-white/10 bg-black/60 p-4 font-mono text-xs text-slate-300 relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10 text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" />
                    <span>FEED: CAM_01_STORE_FRONT</span>
                  </div>
                  <span>LIVE • 30.0 FPS</span>
                </div>
                <div className="py-6 flex flex-col items-center justify-center text-center">
                  <Camera className="w-10 h-10 text-indigo-400 mb-2 opacity-80" />
                  <p className="text-white font-medium">OpenCV VideoCapture Thread Active</p>
                  <p className="text-[11px] text-slate-400">Stream buffer: 1920x1080 • Hardware Accelerated</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 text-xs text-slate-300 space-y-2">
                <h5 className="font-semibold text-white text-sm">Ingestion Pipeline</h5>
                <p className="text-slate-400 leading-relaxed">
                  OpenCV captures frame streams in an asynchronous background thread to prevent GUI lag.
                </p>
                <div className="text-[11px] font-mono text-cyan-300 bg-white/5 p-2 rounded border border-white/10">
                  cv2.VideoCapture(0) → frame_queue
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded-lg border border-indigo-500/30 bg-black/60 p-4 font-mono text-xs relative">
                <div className="border border-dashed border-cyan-400/70 p-3 rounded bg-cyan-950/20 mb-2">
                  <div className="flex justify-between text-[11px] text-cyan-300">
                    <span>[BBox 1] person</span>
                    <span>conf: 0.958</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Coord: [x: 140, y: 220, w: 310, h: 680]</p>
                </div>
                <div className="border border-dashed border-amber-400/70 p-3 rounded bg-amber-950/20">
                  <div className="flex justify-between text-[11px] text-amber-300">
                    <span>[BBox 2] item / merchandise</span>
                    <span>conf: 0.914</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Coord: [x: 230, y: 390, w: 85, h: 120]</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 text-xs text-slate-300 space-y-2">
                <h5 className="font-semibold text-white text-sm">YOLO Object Detection</h5>
                <p className="text-slate-400 leading-relaxed">
                  Neural network processes bounding boxes for human subjects and handheld objects simultaneously.
                </p>
                <div className="text-[11px] font-mono text-amber-300 bg-white/5 p-2 rounded border border-white/10">
                  results = model.predict(frame, conf=0.75)
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded-lg border border-amber-500/40 bg-amber-950/10 p-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>SUSPICIOUS CONCEALMENT DETECTED</span>
                </div>
                <div className="space-y-1.5 text-slate-300 text-[11px]">
                  <p>• Object distance to torso boundary: &lt; 15px</p>
                  <p>• Handheld item occlusion rate: 87.5%</p>
                  <p>• Concealment duration threshold: &gt; 1.2s</p>
                  <div className="mt-2 text-rose-300 font-semibold bg-rose-500/10 p-2 rounded border border-rose-500/20">
                    State transition: MONITORED → SUSPICIOUS_ALERT
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 text-xs text-slate-300 space-y-2">
                <h5 className="font-semibold text-white text-sm">Behavior Analysis Engine</h5>
                <p className="text-slate-400 leading-relaxed">
                  Calculates spatial proximity vectors between handheld item bounding boxes and pocket/bag zones.
                </p>
                <div className="text-[11px] font-mono text-rose-300 bg-white/5 p-2 rounded border border-white/10">
                  evaluate_concealment(person_box, item_box)
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded-lg border border-cyan-500/30 bg-[#0F2236] p-4 text-xs font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-cyan-500/20 text-cyan-300">
                  <div className="flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram Security Bot</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Chat ID: -100482910</span>
                </div>
                <div className="mt-2.5 p-2.5 bg-black/40 rounded border border-white/5 text-[11px] text-slate-200">
                  <p className="text-rose-400 font-bold">⚠️ INCIDENT DISPATCH #2041</p>
                  <p className="mt-1">Zone: Store Front (CAM 01)</p>
                  <p>Time: 2026-09-27 12:35:54</p>
                  <p>Attachment: [captured_evidence_2041.jpg]</p>
                  <p className="text-emerald-400 mt-1">Status: Dispatched via Telegram Bot API (HTTP 200 OK)</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 text-xs text-slate-300 space-y-2">
                <h5 className="font-semibold text-white text-sm">Automated Alert Dispatch</h5>
                <p className="text-slate-400 leading-relaxed">
                  Sends snapshot evidence and metadata to designated security personnel instantly via Telegram Bot API.
                </p>
                <div className="text-[11px] font-mono text-cyan-300 bg-white/5 p-2 rounded border border-white/10">
                  bot.send_photo(chat_id, photo=evidence)
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded-lg border border-emerald-500/30 bg-black/60 p-4 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-2">
                  <Database className="w-3.5 h-3.5" />
                  <span>SQLite Event Ledger (Audit Trail)</span>
                </div>
                <div className="overflow-x-auto text-[10px] text-slate-300">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-400">
                        <th className="py-1">ID</th>
                        <th className="py-1">TIMESTAMP</th>
                        <th className="py-1">STATE</th>
                        <th className="py-1">ALERT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5 text-rose-300 bg-rose-500/10">
                        <td className="py-1">#2041</td>
                        <td className="py-1">12:35:54</td>
                        <td className="py-1">Concealment</td>
                        <td className="py-1">SENT</td>
                      </tr>
                      <tr className="border-b border-white/5 text-slate-400">
                        <td className="py-1">#2040</td>
                        <td className="py-1">12:31:10</td>
                        <td className="py-1">Normal</td>
                        <td className="py-1">NONE</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full md:w-2/5 text-xs text-slate-300 space-y-2">
                <h5 className="font-semibold text-white text-sm">SQLite Event Persistence</h5>
                <p className="text-slate-400 leading-relaxed">
                  Every monitored event and trigger is archived in a lightweight SQLite database for auditing.
                </p>
                <div className="text-[11px] font-mono text-emerald-300 bg-white/5 p-2 rounded border border-white/10">
                  INSERT INTO security_incidents VALUES (...)
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
