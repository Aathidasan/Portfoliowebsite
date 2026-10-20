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
    <div className="min-h-screen bg-[#110720] text-white selection:bg-purple-500/40 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
