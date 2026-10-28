"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ShieldAlert,
  Camera,
  Play,
  RotateCcw,
  CheckCircle2,
  Terminal,
  Coffee,
  Globe,
  Sparkles,
  Lock,
  ExternalLink,
  ChevronRight,
  Send,
  Zap,
  Radio,
  Activity,
  Cpu,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export default function LaptopInterface() {
  const [activeTab, setActiveTab] = useState<"ai" | "portfolio" | "java">("ai");
  const [alertTriggered, setAlertTriggered] = useState(false);
  const [javaRun, setJavaRun] = useState(false);

  // 3D Tilt for Laptop
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full my-8 perspective-1000"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>SPATIAL CONSOLE // 3D TILT ENGINE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Interactive Neural Laptop Interface
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg mx-auto">
          Hover to steer the 3D perspective in real time. Switch between active vision models and bytecode execution.
        </p>
      </div>

      {/* 3D Tilting Laptop Frame */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative mx-auto max-w-2xl sm:max-w-3xl transition-shadow duration-300"
      >
        {/* Holographic Plasma Aurora Behind Display */}
        <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-purple-600/25 to-pink-500/20 rounded-[32px] blur-3xl pointer-events-none" />

        {/* Laptop Display Lid */}
        <div className="relative bg-[#161622] rounded-t-2xl sm:rounded-t-[22px] p-2.5 sm:p-3.5 pb-0 border border-white/[0.12] shadow-2xl">
          {/* Top Bezel with Camera & Sensor */}
          <div className="flex items-center justify-between px-3 pb-2 text-[10px] font-mono text-zinc-500">
            <span className="text-cyan-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              LIVE TELEMETRY
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-black border border-zinc-700 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <span>FPS: 60.0 // 1080P</span>
          </div>

          {/* Screen Display Area */}
          <div className="relative bg-[#090910] rounded-t-lg overflow-hidden border border-white/[0.08] flex flex-col min-h-[380px] sm:min-h-[460px]">
            {/* Holographic Top Window Bar */}
            <div className="bg-[#10101A] border-b border-white/[0.08] px-3.5 py-2 flex items-center justify-between gap-2">
              {/* macOS Traffic Lights */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm shadow-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm shadow-amber-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm shadow-emerald-500/50" />
              </div>

              {/* Holographic Tab Selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === "ai"
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-md shadow-cyan-950/40"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>theft_detect.py</span>
                </button>

                <button
                  onClick={() => setActiveTab("portfolio")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === "portfolio"
                      ? "bg-purple-500/15 text-purple-300 border border-purple-500/30 shadow-md shadow-purple-950/40"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>portfolio-engine.app</span>
                </button>

                <button
                  onClick={() => setActiveTab("java")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === "java"
                      ? "bg-pink-500/15 text-pink-300 border border-pink-500/30 shadow-md shadow-pink-950/40"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Main.java</span>
                </button>
              </div>

              {/* URL Security Pill */}
              <div className="hidden md:flex items-center gap-1.5 bg-black/60 border border-white/[0.08] rounded-md px-2.5 py-0.5 text-[11px] font-mono text-zinc-400">
                <Lock className="w-3 h-3 text-cyan-400" />
                <span className="text-zinc-300">
                  {activeTab === "ai" && "cv.aathidasan.dev"}
                  {activeTab === "portfolio" && "ai.portfolio.dev"}
                  {activeTab === "java" && "jvm.enterprise.internal"}
                </span>
              </div>
            </div>

            {/* Screen Inner Viewport */}
            <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto">
              <AnimatePresence mode="wait">
                {/* TAB 1: AI SURVEILLANCE & POSE DETECTOR */}
                {activeTab === "ai" && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                          <h4 className="font-bold text-sm text-white">
                            YOLOv8 Computer Vision &amp; Pose Spatial Engine
                          </h4>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                          Inference: 14.8ms • Neural Pose Grid • OpenCV Ingestion
                        </p>
                      </div>

                      <button
                        onClick={() => setAlertTriggered(!alertTriggered)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                          alertTriggered
                            ? "bg-red-500/25 text-red-200 border border-red-500 shadow-lg shadow-red-500/30"
                            : "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-300 border border-cyan-500/40"
                        }`}
                      >
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>{alertTriggered ? "Reset Trigger" : "Trigger Concealment Event"}</span>
                      </button>
                    </div>

                    {/* Camera Feed Canvas HUD */}
                    <div className="relative h-48 sm:h-56 rounded-xl bg-black/90 border border-cyan-500/30 overflow-hidden flex items-center justify-center">
                      {/* Grid background & Holographic Scanning Line */}
                      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:18px_18px]" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-16 animate-pulse pointer-events-none" />

                      {/* HUD Overlays */}
                      <div className="absolute top-2.5 left-3.5 font-mono text-[10px] text-cyan-400 space-y-0.5 z-10">
                        <p className="font-bold">● SURVEILLANCE_ACTIVE // CAM_01</p>
                        <p className="text-zinc-400">RESOLUTION: 1920x1080 @ 30 FPS</p>
                      </div>

                      <div className="absolute top-2.5 right-3.5 font-mono text-[10px] z-10">
                        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-bold">
                          CONFIDENCE: 98.6%
                        </span>
                      </div>

                      {/* 3D Bounding Box Hologram */}
                      <div className="relative border-2 border-cyan-400 bg-cyan-500/10 rounded-lg p-4 text-center max-w-xs shadow-xl shadow-cyan-500/20">
                        <span className="absolute -top-3 left-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                          PERSON_TARGET (0.98)
                        </span>

                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto mb-2 text-cyan-300">
                          <Camera className="w-6 h-6" />
                        </div>
                        <p className="text-xs font-bold text-white">
                          Human Keypoint Pose Vectors Normal
                        </p>
                        <p className="text-[11px] text-zinc-300 mt-1 font-mono">
                          Hand-to-pocket distance tracked across 18 keypoints.
                        </p>
                      </div>

                      {/* Trigger Alert Overlay */}
                      {alertTriggered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 bg-red-950/90 backdrop-blur-md border-2 border-red-500 flex flex-col items-center justify-center p-4 text-center z-20"
                        >
                          <ShieldAlert className="w-10 h-10 text-red-400 animate-bounce mb-2" />
                          <h5 className="text-base font-extrabold text-white tracking-wider">
                            THEFT EVENT DISPATCHED
                          </h5>
                          <p className="text-xs text-red-200 font-mono mt-1 max-w-sm">
                            High-confidence concealment detected. Incident snapshot & GPS timestamp dispatched to Telegram Security Bot.
                          </p>
                        </motion.div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400 font-mono">
                      <span>Stack: Python • YOLOv8 • OpenCV • Flask • SQLite</span>
                      <span className="text-cyan-400 font-semibold">Ready for Deployment</span>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: PORTFOLIO ENGINE */}
                {activeTab === "portfolio" && (
                  <motion.div
                    key="portfolio"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                      <div>
                        <h4 className="font-bold text-sm text-white">
                          AI Developer Profile &amp; Layout Synthesizer
                        </h4>
                        <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                          Generative content synthesis & dynamic responsive styling
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-mono">
                        Engine Active
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-4 rounded-xl bg-black/70 border border-zinc-800 space-y-2">
                        <span className="text-[10px] font-mono uppercase text-cyan-400">
                          INPUT PROFILE METRICS
                        </span>
                        <div className="space-y-1.5 text-xs text-zinc-300 font-mono">
                          <p><span className="text-zinc-500">Name:</span> {PERSONAL_INFO.name}</p>
                          <p><span className="text-zinc-500">Specialization:</span> Java, Python, AI, React</p>
                          <p><span className="text-zinc-500">Academic:</span> B.Sc. IT (2026)</p>
                          <p><span className="text-zinc-500">Internships:</span> AI & Full Stack</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-500/30 space-y-2">
                        <span className="text-[10px] font-mono uppercase text-pink-400">
                          GENERATIVE SYNTHESIS
                        </span>
                        <p className="text-xs text-zinc-200 leading-relaxed">
                          "Entry-level software engineer with demonstrable expertise across object-oriented backend microservices and real-time computer vision."
                        </p>
                        <div className="flex gap-2 pt-1">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            recruiter-ready
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            responsive
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/[0.08] text-xs text-zinc-300 flex items-center justify-between font-mono">
                      <span>Export Target: Lovable Web Platform</span>
                      <a
                        href={PERSONAL_INFO.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-medium"
                      >
                        <span>Launch Live App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: JVM RUNNER */}
                {activeTab === "java" && (
                  <motion.div
                    key="java"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <h4 className="font-bold text-xs sm:text-sm text-white font-mono">
                          Main.java — JVM 21 Core Runtime
                        </h4>
                      </div>

                      <button
                        onClick={() => setJavaRun(!javaRun)}
                        className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xs font-mono font-medium flex items-center gap-1.5 shadow-md shadow-purple-900/40 transition-all"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>{javaRun ? "Recompile" : "Run javac"}</span>
                      </button>
                    </div>

                    {/* Syntax Highlighted Java Code */}
                    <div className="bg-black/90 p-4 rounded-lg border border-zinc-800 font-mono text-[11px] sm:text-xs leading-relaxed text-zinc-300 overflow-x-auto">
                      <p><span className="text-pink-400">public class</span> <span className="text-amber-300">AathidasanPortfolio</span> &#123;</p>
                      <p className="pl-4"><span className="text-pink-400">public static void</span> <span className="text-cyan-400">main</span>(String[] args) &#123;</p>
                      <p className="pl-8 text-zinc-500">// Object-Oriented Principles, Collections, JDBC &amp; SQL</p>
                      <p className="pl-8">Developer dev = <span className="text-pink-400">new</span> Developer(<span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>);</p>
                      <p className="pl-8">dev.connectDatabase(<span className="text-emerald-300">"jdbc:oracle:thin:@localhost:1521"</span>);</p>
                      <p className="pl-8">dev.launchEnterpriseService();</p>
                      <p className="pl-4">&#125;</p>
                      <p>&#125;</p>
                    </div>

                    {/* Output Console */}
                    <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-400">
                      <p className="text-zinc-500">$ javac Main.java &amp;&amp; java AathidasanPortfolio</p>
                      {javaRun ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-cyan-400 pt-1 space-y-0.5"
                        >
                          <p>✔ [JVM] Build successful in 0.12s</p>
                          <p>✔ [JDBC] Relational database connection verified</p>
                          <p className="text-emerald-400 font-bold">✔ Status: Ready for Java Full Stack Engineering Roles</p>
                        </motion.div>
                      ) : (
                        <p className="text-zinc-500 pt-0.5">Click 'Run javac' to execute bytecode in JVM runtime.</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Laptop Hinge & Base Chassis with Thumb Notch */}
        <div className="relative">
          {/* Display Hinge */}
          <div className="w-28 sm:w-40 h-2 bg-[#1C1C26] rounded-b-md mx-auto shadow-inner border-x border-b border-white/[0.08]" />

          {/* Aluminum Lower Deck */}
          <div className="relative bg-gradient-to-b from-[#252535] via-[#1C1C28] to-[#14141E] h-4 sm:h-5 rounded-b-xl sm:rounded-b-2xl border-t border-white/20 shadow-2xl flex items-center justify-center">
            {/* Front Opening Thumb Notch */}
            <div className="w-20 sm:w-28 h-1.5 bg-[#0C0C12] rounded-full mx-auto" />
          </div>

          {/* Under-Chassis Neon Ground Reflection */}
          <div className="h-3 w-4/5 mx-auto bg-cyan-500/20 blur-lg rounded-full mt-1 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
