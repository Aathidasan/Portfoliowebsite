"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export default function LaptopInterface() {
  const [activeTab, setActiveTab] = useState<"ai" | "portfolio" | "java">("ai");
  const [alertTriggered, setAlertTriggered] = useState(false);
  const [javaRun, setJavaRun] = useState(false);

  return (
    <div className="w-full my-6">
      <div className="text-center mb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Interactive Device Mockup
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
          Laptop System Console
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg mx-auto">
          Explore live application environments running directly inside this interactive laptop display.
        </p>
      </div>

      {/* Laptop Frame Container */}
      <div className="relative mx-auto max-w-2xl sm:max-w-3xl">
        {/* Ambient Glow behind Laptop */}
        <div className="absolute -inset-4 bg-purple-600/15 rounded-3xl blur-3xl pointer-events-none" />

        {/* Laptop Screen Lid / Top Chassis */}
        <div className="relative bg-[#18181D] rounded-t-2xl sm:rounded-t-[20px] p-2 sm:p-3 pb-0 border border-zinc-700/60 shadow-2xl">
          {/* Top Bezel with Camera */}
          <div className="flex items-center justify-center pb-2 relative">
            {/* Center Webcam Dot */}
            <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          {/* Screen Display Area */}
          <div className="relative bg-[#0D0D11] rounded-t-lg overflow-hidden border border-white/[0.08] flex flex-col min-h-[360px] sm:min-h-[440px]">
            {/* Browser Top Window Bar */}
            <div className="bg-[#141418] border-b border-white/[0.06] px-3 py-2 flex items-center justify-between gap-2">
              {/* macOS Window Controls */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              {/* Tab Selector Buttons */}
              <div className="flex items-center gap-1 overflow-x-auto py-0.5">
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    activeTab === "ai"
                      ? "bg-[#1E1E24] text-white border border-white/10"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Camera className="w-3 h-3 text-purple-400" />
                  <span>theft_detect.py</span>
                </button>

                <button
                  onClick={() => setActiveTab("portfolio")}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    activeTab === "portfolio"
                      ? "bg-[#1E1E24] text-white border border-white/10"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Globe className="w-3 h-3 text-emerald-400" />
                  <span>portfolio-craft.app</span>
                </button>

                <button
                  onClick={() => setActiveTab("java")}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    activeTab === "java"
                      ? "bg-[#1E1E24] text-white border border-white/10"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Coffee className="w-3 h-3 text-amber-400" />
                  <span>Main.java</span>
                </button>
              </div>

              {/* URL Address Bar */}
              <div className="hidden md:flex items-center gap-1.5 bg-black/40 border border-white/[0.06] rounded-md px-2.5 py-0.5 text-[10px] font-mono text-zinc-400 max-w-[200px] truncate">
                <Lock className="w-2.5 h-2.5 text-emerald-400" />
                <span className="truncate">
                  {activeTab === "ai" && "localhost:5000/stream"}
                  {activeTab === "portfolio" && "craft.aathidasan.dev"}
                  {activeTab === "java" && "jvm://localhost:8080"}
                </span>
              </div>
            </div>

            {/* Screen Inner Viewport */}
            <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto">
              <AnimatePresence mode="wait">
                {/* TAB 1: AI THEFT DETECTION SURVEILLANCE */}
                {activeTab === "ai" && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                          <h4 className="font-bold text-sm text-white">
                            YOLOv8 Real-Time Video Ingestion
                          </h4>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                          Inference: 18.2ms • 30 FPS • OpenCV Stream
                        </p>
                      </div>

                      <button
                        onClick={() => setAlertTriggered(!alertTriggered)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                          alertTriggered
                            ? "bg-red-500/20 text-red-300 border border-red-500/40"
                            : "bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30"
                        }`}
                      >
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>{alertTriggered ? "Reset Trigger" : "Simulate Concealment"}</span>
                      </button>
                    </div>

                    {/* Camera Feed Simulator Canvas */}
                    <div className="relative h-44 sm:h-52 rounded-xl bg-black/80 border border-zinc-800 overflow-hidden flex items-center justify-center">
                      {/* Grid background representing sensor */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]" />

                      {/* Video Camera Telemetry Watermark */}
                      <div className="absolute top-2 left-3 font-mono text-[10px] text-zinc-400 space-y-0.5 z-10">
                        <p className="text-emerald-400 font-semibold">● CAM_01 [FRONT_AISLE]</p>
                        <p>RES: 1920x1080 @ 30FPS</p>
                      </div>

                      <div className="absolute top-2 right-3 font-mono text-[10px] text-zinc-400 z-10">
                        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700">
                          CONF: 97.4%
                        </span>
                      </div>

                      {/* Bounding Box Simulation */}
                      <div className="relative border-2 border-emerald-400/80 bg-emerald-500/10 rounded-lg p-3 sm:p-4 text-center max-w-xs shadow-lg shadow-emerald-500/20">
                        <span className="absolute -top-3 left-2 bg-emerald-500 text-black font-mono text-[10px] font-bold px-1.5 py-0.5 rounded">
                          person (0.97)
                        </span>

                        <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center mx-auto mb-2 text-purple-300">
                          <Camera className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-semibold text-white">
                          Subject Tracking Active
                        </p>
                        <p className="text-[11px] text-zinc-300 mt-1 font-mono">
                          Pose vectors within normal perimeter bounds.
                        </p>
                      </div>

                      {/* Alert Overlay if triggered */}
                      {alertTriggered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 bg-red-950/80 backdrop-blur-sm border-2 border-red-500 flex flex-col items-center justify-center p-4 text-center z-20"
                        >
                          <ShieldAlert className="w-8 h-8 text-red-400 animate-bounce mb-1" />
                          <h5 className="text-sm font-bold text-white uppercase tracking-wider">
                            Concealment Event Flagged
                          </h5>
                          <p className="text-xs text-red-200 font-mono mt-1">
                            Snapshot dispatched to Telegram Security Bot with timestamp & location log.
                          </p>
                        </motion.div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400 font-mono">
                      <span>Stack: Python • YOLO • OpenCV • Flask • SQLite</span>
                      <span className="text-emerald-400">Status: Automated Dispatch Ready</span>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: AI PORTFOLIO BUILDER */}
                {activeTab === "portfolio" && (
                  <motion.div
                    key="portfolio"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                      <div>
                        <h4 className="font-bold text-sm text-white">
                          AI Developer Profile Synthesizer
                        </h4>
                        <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                          Generative content structuring & real-time theme rendering
                        </p>
                      </div>
                      <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                        Live Engine
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 space-y-2">
                        <span className="text-[10px] font-mono uppercase text-purple-400">
                          INPUT PROFILE
                        </span>
                        <div className="space-y-1.5 text-xs text-zinc-300 font-mono">
                          <p><span className="text-zinc-500">Name:</span> {PERSONAL_INFO.name}</p>
                          <p><span className="text-zinc-500">Role:</span> {PERSONAL_INFO.role}</p>
                          <p><span className="text-zinc-500">Degree:</span> B.Sc. IT (2026)</p>
                          <p><span className="text-zinc-500">Skills:</span> Java, Python, React, SQL</p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2">
                        <span className="text-[10px] font-mono uppercase text-emerald-400">
                          AI GENERATED SYNTHESIS
                        </span>
                        <p className="text-xs text-zinc-200 leading-relaxed">
                          "Software engineer fresher building high-availability enterprise services and computer vision models."
                        </p>
                        <div className="flex gap-1.5 pt-1">
                          <span className="framer-badge text-[10px]">recruiter-ready</span>
                          <span className="framer-badge text-[10px]">auto-layout</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/[0.06] text-xs text-zinc-400 flex items-center justify-between font-mono">
                      <span>Live Site: Lovable App Export</span>
                      <a
                        href={PERSONAL_INFO.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
                      >
                        <span>Open Preview</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: JAVA ENTERPRISE CODE RUNNER */}
                {activeTab === "java" && (
                  <motion.div
                    key="java"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-purple-400" />
                        <h4 className="font-bold text-xs sm:text-sm text-white font-mono">
                          Main.java — JVM 21
                        </h4>
                      </div>

                      <button
                        onClick={() => setJavaRun(!javaRun)}
                        className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <Play className="w-3 h-3" />
                        <span>{javaRun ? "Re-execute" : "Run javac"}</span>
                      </button>
                    </div>

                    {/* Code Editor Window */}
                    <div className="bg-black/90 p-3.5 rounded-lg border border-zinc-800 font-mono text-[11px] sm:text-xs leading-relaxed text-zinc-300 overflow-x-auto">
                      <p><span className="text-purple-400">public class</span> <span className="text-amber-300">AathidasanPortfolio</span> &#123;</p>
                      <p className="pl-4"><span className="text-purple-400">public static void</span> <span className="text-blue-400">main</span>(String[] args) &#123;</p>
                      <p className="pl-8 text-zinc-400">// Core Java, OOP & SQL Architecture</p>
                      <p className="pl-8">Developer dev = <span className="text-purple-400">new</span> Developer(<span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>);</p>
                      <p className="pl-8">dev.connectDatabase(<span className="text-emerald-300">"jdbc:oracle:thin:@localhost:1521"</span>);</p>
                      <p className="pl-8">dev.launchService();</p>
                      <p className="pl-4">&#125;</p>
                      <p>&#125;</p>
                    </div>

                    {/* Run Output Terminal */}
                    <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-[11px] text-zinc-400">
                      <p className="text-zinc-500">$ javac Main.java &amp;&amp; java AathidasanPortfolio</p>
                      {javaRun ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-emerald-400 pt-1 space-y-0.5"
                        >
                          <p>✔ [JVM] Build successful in 0.14s</p>
                          <p>✔ [JDBC] Connected to Relational DB</p>
                          <p>✔ Status: Ready for Full Stack Engineering Roles</p>
                        </motion.div>
                      ) : (
                        <p className="text-zinc-500 pt-0.5">Click 'Run javac' to execute bytecode in JVM.</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Laptop Hinge & Base Chassis */}
        <div className="relative">
          {/* Display Hinge Notch */}
          <div className="w-24 sm:w-36 h-1.5 sm:h-2 bg-[#25252B] rounded-b-md mx-auto shadow-inner" />

          {/* Lower Aluminum Base Deck */}
          <div className="relative bg-gradient-to-b from-[#222228] to-[#1A1A20] h-3 sm:h-4 rounded-b-xl sm:rounded-b-2xl border-t border-white/10 shadow-2xl flex items-center justify-center">
            {/* Front Opening Thumb Notch */}
            <div className="w-16 sm:w-20 h-1 bg-[#121216] rounded-full mx-auto" />
          </div>

          {/* Laptop Base Table Reflection */}
          <div className="h-2 w-4/5 mx-auto bg-black/40 blur-md rounded-full mt-1" />
        </div>
      </div>
    </div>
  );
}
