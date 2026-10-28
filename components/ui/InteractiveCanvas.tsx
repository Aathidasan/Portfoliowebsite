"use client";

import { useEffect, useRef } from "react";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  color: string;
  alpha: number;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fov = 400; // 3D Field of view
    const particleCount = width > 768 ? 75 : 35;
    const particles: Particle3D[] = [];

    // Higgsfield color spectrum
    const colors = ["#06B6D4", "#8B5CF6", "#C084FC", "#38BDF8", "#EC4899"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * fov + 50,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        baseRadius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - width / 2) * 0.3;
      mouse.targetY = (e.clientY - height / 2) * 0.3;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouse.x * 0.2;
      const centerY = height / 2 + mouse.y * 0.2;

      // Update and project 3D particles
      const projected: { x: number; y: number; r: number; color: string; alpha: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around boundaries
        if (p.z <= 10) p.z = fov;
        if (p.z > fov) p.z = 10;
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;

        // 3D Perspective Projection formula
        const scale = fov / (fov + p.z);
        const projX = centerX + p.x * scale;
        const projY = centerY + p.y * scale;
        const projR = p.baseRadius * scale;

        projected.push({
          x: projX,
          y: projY,
          r: projR,
          color: p.color,
          alpha: p.alpha * (scale * 1.2),
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(0.5, projR), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, Math.max(0.05, p.alpha * scale));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw connective quantum filaments between nearby nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = projected[i].color;
            ctx.globalAlpha = (1 - dist / 110) * 0.18;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ filter: "blur(0.2px)" }}
    />
  );
}
