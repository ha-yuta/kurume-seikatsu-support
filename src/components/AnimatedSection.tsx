"use client";

import { useState, useEffect, useRef, CSSProperties, ReactNode } from "react";

// ===== アニメーション用Hook =====
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// ===== アニメーション付きセクション =====
interface AnimatedSectionProps {
  children: ReactNode;
  style?: CSSProperties;
  delay?: number;
}

export default function AnimatedSection({ children, style, delay = 0 }: AnimatedSectionProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
