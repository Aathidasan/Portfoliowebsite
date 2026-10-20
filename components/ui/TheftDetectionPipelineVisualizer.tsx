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
  Radio,
  Send,
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
    detail: "OpenCV frame capture ingestion from CCTV stream (1920x1080 @ 30 FPS).",
    tech: "OpenCV VideoCapture",
  },
  {
    id: 2,
    label: "02",
    icon: Scan,
    title: "AI Detection",
    detail: "YOLOv8 neural weights identify person and handheld items simultaneously.",
    tech: "YOLO Neural Weights",
  },
  {
    id: 3,
    label: "03",
    icon: Cpu,
    title: "Behavior Analysis",
    detail: "Calculates spatial distance vectors to detect object-concealment motions.",
    tech: "Spatial Logic Engine",
  },
  {
    id: 4,
    label: "04",
    icon: Bell,
    title: "Instant Alert",
    detail: "Dispatches captured incident frame with timestamp payload to Telegram.",
    tech: "Telegram Bot API",
  },
  {
    id: 5,
    label: "05",
    icon: Database,
    title: "Event Ledger",
    detail: "Appends persistent structured incident record into SQLite database.",
    tech: "SQLite Database",
  },
];

export default function TheftDetectionPipelineVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

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
    }, 1100);
  };

  const resetSimulation = () => {
    setActiveStep(1);
    setIsSimulating(false);
  };

  return (
    <div className="w-full bg-[#09090B] border border-white/10 rounded-xl p-5 sm:p-6 shadow-2xl">
      {/* Studio Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <h4 className="font-mono font-bold text-white text-xs sm:text-sm tracking-wide">
              AI DETECTION TELEMETRY CONSOLE
            </h4>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300 border border-white/10">
              Interactive
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 font-mono mt-1">
            Pipeline: Camera ➔ YOLO Detection ➔ Behavior Analysis ➔ Telegram Alert ➔ SQLite Log
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="btn-primary-white px-3 py-1.5 text-xs flex items-center gap-1.5 font-semibold active:scale-95 disabled:opacity-50"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>{isSimulating ? `Step ${activeStep}/5...` : "Run Pipeline"}</span>
          </button>
          <button
            onClick={resetSimulation}
            aria-label="Reset simulation"
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10"
            title="Reset"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* 5-Step Navigation Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-4">
        {STEPS.map((s) => {
          const Icon = s.icon;
          const isSelected = activeStep === s.id;
          const isPast = activeStep > s.id;

          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`text-left p-2.5 rounded-lg border transition-all flex flex-col justify-between gap-1 ${
                isSelected
                  ? "bg-zinc-800 border-white text-white"
                  : isPast
                  ? "bg-zinc-900/60 border-white/20 text-zinc-300"
                  : "bg-black/40 border-white/5 text-zinc-500 hover:bg-zinc-900"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <Icon className="w-3.5 h-3.5 text-zinc-300" />
                <span className="text-[10px] font-mono text-zinc-500">{s.label}</span>
              </div>
              <div>
                <p className="text-xs font-semibold leading-tight line-clamp-1">{s.title}</p>
                <p className="text-[10px] font-mono text-zinc-400 truncate mt-0.5">{s.tech}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Display Panel */}
      <div className="bg-black border border-white/[0.08] rounded-lg p-4 sm:p-5 relative min-h-[190px]">
        <AnimatePresence mode="wait">
          {activeStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded bg-zinc-950 p-4 font-mono text-xs text-zinc-300 border border-white/10">
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10 text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                    <span>FEED: CAM_01_STORE_FRONT</span>
                  </div>
                  <span>LIVE • 30.0 FPS</span>
                </div>
                <div className="py-6 flex flex-col items-center justify-center text-center">
                  <Camera className="w-8 h-8 text-zinc-400 mb-2" />
                  <p className="text-white font-medium">OpenCV VideoCapture Ingest</p>
                  <p className="text-[11px] text-zinc-500">1920x1080 Frame Queue Active</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 text-xs text-zinc-300 space-y-2">
                <h5 className="font-semibold text-white">Stream Ingestion</h5>
                <p className="text-zinc-400 leading-relaxed text-[11px]">
                  High-throughput background thread captures frames from security video feeds without blocking inference threads.
                </p>
                <div className="text-[11px] font-mono text-zinc-300 bg-zinc-900 p-2 rounded border border-white/10">
                  cv2.VideoCapture(0) ➔ frame_buffer
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded bg-zinc-950 p-4 font-mono text-xs border border-white/10">
                <div className="border border-dashed border-white/30 p-2.5 rounded bg-white/[0.02] mb-2">
                  <div className="flex justify-between text-[11px] text-white">
                    <span>[BBox 1] person</span>
                    <span>confidence: 0.958</span>
                  </div>
                  <p className="text-[10px] text-zinc-500">Coords: [140, 220, 310, 680]</p>
                </div>
                <div className="border border-dashed border-white/30 p-2.5 rounded bg-white/[0.02]">
                  <div className="flex justify-between text-[11px] text-white">
                    <span>[BBox 2] item / merchandise</span>
                    <span>confidence: 0.914</span>
                  </div>
                  <p className="text-[10px] text-zinc-500">Coords: [230, 390, 85, 120]</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 text-xs text-zinc-300 space-y-2">
                <h5 className="font-semibold text-white">YOLO Inference</h5>
                <p className="text-zinc-400 leading-relaxed text-[11px]">
                  YOLOv8 weights simultaneously track human targets and handheld objects within the boundary perimeter.
                </p>
                <div className="text-[11px] font-mono text-zinc-300 bg-zinc-900 p-2 rounded border border-white/10">
                  results = model.predict(frame, conf=0.75)
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded bg-zinc-950 p-4 font-mono text-xs border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>SUSPICIOUS CONCEALMENT TRIGGERED</span>
                </div>
                <div className="space-y-1 text-zinc-400 text-[11px]">
                  <p>• Object distance to pocket threshold: &lt; 15px</p>
                  <p>• Concealment duration: &gt; 1.2s</p>
                  <div className="mt-2 text-white font-semibold bg-zinc-900 p-2 rounded border border-white/10">
                    State: MONITORED ➔ SUSPICIOUS_ALERT
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 text-xs text-zinc-300 space-y-2">
                <h5 className="font-semibold text-white">Spatial Logic Engine</h5>
                <p className="text-zinc-400 leading-relaxed text-[11px]">
                  Calculates velocity and distance vectors between object coordinates and body/pocket zones.
                </p>
                <div className="text-[11px] font-mono text-zinc-300 bg-zinc-900 p-2 rounded border border-white/10">
                  evaluate_concealment(person_bbox, item_bbox)
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded bg-zinc-950 p-4 font-mono text-xs border border-white/10">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>Telegram Security Bot</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">ID: -100482910</span>
                </div>
                <div className="mt-2 p-2 bg-black rounded text-[11px] text-zinc-300 space-y-1">
                  <p className="text-white font-bold">⚠️ INCIDENT DISPATCH #2041</p>
                  <p>Zone: Store Front (CAM 01)</p>
                  <p>Timestamp: 2026-10-20 16:00:26</p>
                  <p className="text-emerald-400">Telegram Bot API: 200 OK</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 text-xs text-zinc-300 space-y-2">
                <h5 className="font-semibold text-white">Automated Alert Dispatch</h5>
                <p className="text-zinc-400 leading-relaxed text-[11px]">
                  Instantly sends the captured snapshot and incident metadata to security personnel via Telegram API.
                </p>
                <div className="text-[11px] font-mono text-zinc-300 bg-zinc-900 p-2 rounded border border-white/10">
                  bot.send_photo(chat_id, photo=evidence)
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="w-full md:w-3/5 rounded bg-zinc-950 p-4 font-mono text-xs border border-white/10">
                <div className="flex items-center gap-1.5 text-white font-semibold mb-2">
                  <Database className="w-3.5 h-3.5" />
                  <span>SQLite Event Ledger</span>
                </div>
                <table className="w-full text-left text-[10px] text-zinc-400">
                  <thead>
                    <tr className="border-b border-white/10 text-zinc-300">
                      <th className="py-1">ID</th>
                      <th className="py-1">TIMESTAMP</th>
                      <th className="py-1">STATE</th>
                      <th className="py-1">ALERT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 text-white bg-zinc-900">
                      <td className="py-1 font-bold">#2041</td>
                      <td className="py-1">16:00:26</td>
                      <td className="py-1">Concealment</td>
                      <td className="py-1 text-emerald-400">SENT</td>
                    </tr>
                    <tr className="text-zinc-500">
                      <td className="py-1">#2040</td>
                      <td className="py-1">15:52:10</td>
                      <td className="py-1">Normal</td>
                      <td className="py-1">NONE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full md:w-2/5 text-xs text-zinc-300 space-y-2">
                <h5 className="font-semibold text-white">SQLite Persistence</h5>
                <p className="text-zinc-400 leading-relaxed text-[11px]">
                  Archives persistent audit telemetry into a lightweight embedded SQLite database for post-incident review.
                </p>
                <div className="text-[11px] font-mono text-zinc-300 bg-zinc-900 p-2 rounded border border-white/10">
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
