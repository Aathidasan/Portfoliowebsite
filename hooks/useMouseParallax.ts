"use client";

import { useState, useEffect, useCallback, RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
}

export function useMouseParallax(
  ref: RefObject<HTMLElement | null>,
  options = { maxRotation: 10 }
): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized between -1 and 1
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      // Clamped
      const clampedX = Math.max(-1, Math.min(1, normalizedX));
      const clampedY = Math.max(-1, Math.min(1, normalizedY));

      setPosition({
        x: clampedX,
        y: clampedY,
        rotateX: -clampedY * options.maxRotation,
        rotateY: clampedX * options.maxRotation,
      });
    },
    [ref, options.maxRotation]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove as EventListener);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove as EventListener);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, handleMouseMove, handleMouseLeave]);

  return position;
}
