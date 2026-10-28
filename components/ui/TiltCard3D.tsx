"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

export default function TiltCard3D({
  children,
  className = "",
  glowColor = "rgba(139, 92, 246, 0.25)",
  intensity = 15,
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse normalized position (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery-smooth 3D inertia
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig);

  // Dynamic light glare position
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize from -0.5 to 0.5
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative rounded-2xl higgs-glass overflow-hidden transition-shadow duration-300 ${
          isHovered ? "shadow-2xl shadow-purple-950/50" : ""
        } ${className}`}
      >
        {/* Dynamic Holographic Glare Overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${glareX} ${glareY}, ${glowColor}, transparent 70%)`,
          }}
        />

        {/* Content with 3D Depth */}
        <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
