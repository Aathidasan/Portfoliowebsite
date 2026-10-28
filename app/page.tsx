"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LaptopInterface from "@/components/LaptopInterface";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ui/ResumeModal";
import InteractiveCanvas from "@/components/ui/InteractiveCanvas";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-cyan-500/30 selection:text-white relative overflow-x-hidden">
      {/* 3D Quantum Particle Nebula Canvas */}
      <InteractiveCanvas />

      {/* Higgsfield Holographic Floating Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single Column Container with Spatial Depth */}
      <main id="main-content" className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-24 space-y-28">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <LaptopInterface />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
