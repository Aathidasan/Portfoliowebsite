"use client";

import { useState } from "react";
import InteractiveCanvas from "@/components/ui/InteractiveCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ui/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black">
      {/* Monochromatic Constellation Canvas */}
      <InteractiveCanvas />

      {/* Primary Sticky Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Studio Content */}
      <main id="main-content" className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Resume onOpenResume={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
