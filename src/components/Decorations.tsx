"use client";

import { CSSProperties } from "react";
import { colors } from "@/lib/constants";

// ===== SVG装飾 =====
export const HandDrawnCircle = ({ style, animated = false }: { style?: CSSProperties; animated?: boolean }) => (
  <svg
    viewBox="0 0 100 100"
    style={{ position: "absolute", opacity: 0.15, ...style }}
    className={animated ? "float-animation" : ""}
  >
    <path
      d="M50 5C25 5 5 25 5 50s20 45 45 45 45-20 45-45c0-12-5-23-13-31"
      fill="none"
      stroke={colors.lightGreen}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const LeafDecoration = ({ style, animated = false }: { style?: CSSProperties; animated?: boolean }) => (
  <svg
    viewBox="0 0 60 80"
    style={{ position: "absolute", opacity: 0.12, ...style }}
    className={animated ? "rotate-animation" : ""}
  >
    <path
      d="M30 5c-15 20-25 40-20 60 5-15 15-25 25-35-5 15-5 30 0 45 10-20 15-45 5-70"
      fill={colors.lightGreen}
    />
  </svg>
);

export const DottedLine = ({ style }: { style?: CSSProperties }) => (
  <svg
    viewBox="0 0 200 10"
    style={{ position: "absolute", opacity: 0.3, ...style }}
  >
    <path
      d="M0 5h200"
      fill="none"
      stroke={colors.lightGreen}
      strokeWidth="2"
      strokeDasharray="8 8"
      strokeLinecap="round"
    />
  </svg>
);

// ===== Hero用 中央の大きな点線の円 =====
export const CentralDottedCircle = () => (
  <svg
    viewBox="0 0 400 400"
    style={{
      width: "clamp(280px, 50vw, 400px)",
      height: "clamp(280px, 50vw, 400px)",
    }}
  >
    <circle
      cx="200"
      cy="200"
      r="180"
      fill="none"
      stroke="#C4A962"
      strokeWidth="1.5"
      strokeDasharray="8 6"
      opacity="0.5"
    />
    <circle
      cx="200"
      cy="200"
      r="160"
      fill="none"
      stroke="#C4A962"
      strokeWidth="1"
      strokeDasharray="4 8"
      opacity="0.3"
    />
  </svg>
);

// ===== Hero用 小さな装飾アイコン =====
export const SmallLeafIcon = ({ style }: { style?: CSSProperties }) => (
  <svg viewBox="0 0 40 50" style={{ position: "absolute", width: "35px", opacity: 0.4, ...style }}>
    <path
      d="M20 5c-10 12-15 25-12 38 3-10 10-18 15-24-3 10-3 20 0 30 8-15 10-32 3-44"
      fill="#8B9A7D"
    />
  </svg>
);

export const SmallToolIcon = ({ style }: { style?: CSSProperties }) => (
  <svg viewBox="0 0 40 40" style={{ position: "absolute", width: "30px", opacity: 0.35, ...style }}>
    <path
      d="M8 32l16-16M24 16l8-8c2-2 2-4 0-6s-4-2-6 0l-8 8M12 28l-6 6c-1 1-1 3 0 4s3 1 4 0l6-6"
      fill="none"
      stroke="#8B9A7D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const SmallBroomIcon = ({ style }: { style?: CSSProperties }) => (
  <svg viewBox="0 0 40 50" style={{ position: "absolute", width: "28px", opacity: 0.35, ...style }}>
    <path d="M20 5v25" stroke="#8B9A7D" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M10 30c0 10 5 15 10 15s10-5 10-15c-3 2-7 3-10 3s-7-1-10-3z" fill="#8B9A7D" />
  </svg>
);

export const SmallCircleDecor = ({ style }: { style?: CSSProperties }) => (
  <svg viewBox="0 0 30 30" style={{ position: "absolute", width: "25px", opacity: 0.3, ...style }}>
    <circle cx="15" cy="15" r="12" fill="none" stroke="#C4A962" strokeWidth="1.5" strokeDasharray="4 3" />
  </svg>
);

// ===== セクション装飾用の大きな点線円 =====
export const SectionDottedCircle = ({ style }: { style?: CSSProperties }) => (
  <svg
    viewBox="0 0 300 300"
    style={{ position: "absolute", opacity: 0.08, ...style }}
  >
    <circle
      cx="150"
      cy="150"
      r="140"
      fill="none"
      stroke="#8B9A7D"
      strokeWidth="1"
      strokeDasharray="6 8"
    />
  </svg>
);
