"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ui/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white selection:bg-purple-500/30 selection:text-white">
      {/* Framer Minimal Floating Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single Column Container */}
      <main id="main-content" className="max-w-3xl mx-auto px-6 pt-32 pb-24 space-y-24">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
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
