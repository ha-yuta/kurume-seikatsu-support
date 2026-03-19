"use client";

import { colors } from "@/lib/constants";

interface SectionTitleProps {
  en: string;
  ja: string;
  light?: boolean;
}

export default function SectionTitle({ en, ja, light = false }: SectionTitleProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: "72px" }}>
      <span
        style={{
          display: "block",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "4px",
          color: light ? "rgba(255,255,255,0.6)" : "rgba(180, 160, 120, 0.7)",
          marginBottom: "16px",
          textTransform: "uppercase",
        }}
      >
        {en}
      </span>
      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: 500,
          color: light ? colors.white : colors.darkGreen,
          margin: 0,
          lineHeight: 1.5,
          fontFamily: "var(--font-shippori), serif",
          letterSpacing: "2px",
        }}
      >
        {ja}
      </h2>
    </div>
  );
}
