"use client";

import { colors } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { SectionDottedCircle } from "./Decorations";

export default function Problems() {
  const problems = [
    "電球交換、高い場所は不安...",
    "家具が重くて動かせない",
    "物が多くて片付けられない",
    "草取りが大変...",
    "誰に頼めばいいかわからない",
  ];

  return (
    <section
      style={{
        backgroundColor: colors.white,
        padding: "140px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 装飾の大きな点線円 */}
      <SectionDottedCircle style={{ width: "400px", top: "-100px", right: "-100px" }} />
      <SectionDottedCircle style={{ width: "300px", bottom: "-80px", left: "-80px" }} />

      <AnimatedSection style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
        <SectionTitle en="PROBLEM" ja="こんなお困りごと、ありませんか？" />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {problems.map((problem, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.cream,
                padding: "28px 36px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: colors.lightGreen,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  style={{ width: "18px", height: "18px" }}
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span
                style={{
                  fontSize: "18px",
                  color: colors.text,
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  lineHeight: 1.8,
                }}
              >
                {problem}
              </span>
            </div>
          ))}
        </div>

        {/* 締めのメッセージ */}
        <div
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(90, 143, 60, 0.08)",
              padding: "24px 56px",
              borderRadius: "60px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: colors.mediumGreen,
                margin: 0,
                fontFamily: "var(--font-shippori), serif",
                letterSpacing: "1px",
              }}
            >
              小さなことでも大丈夫です
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
