"use client";

import { useState } from "react";
import { colors } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { SmallLeafIcon } from "./Decorations";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "電球・照明の交換",
      desc: "※電気工事を伴わない範囲",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
        </svg>
      ),
    },
    {
      title: "家具の移動／組み立て",
      desc: "軽作業",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="10" rx="1" />
          <path d="M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2M7 18v2M17 18v2" />
        </svg>
      ),
    },
    {
      title: "お部屋・物置の片付け",
      desc: "分別サポート",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 10h20M8 4v6M16 4v6" />
        </svg>
      ),
    },
    {
      title: "草取り／簡単な庭掃除",
      desc: "通路・ブロック際など",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c-4-2-7-6-7-10 0-3 2-6 5-7 2 3 2 6 2 9" />
          <path d="M12 22c4-2 7-6 7-10 0-3-2-6-5-7-2 3-2 6-2 9" />
          <path d="M12 22V8" />
        </svg>
      ),
    },
    {
      title: "買い物代行／見守り同席",
      desc: "内容により応相談",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      title: "その他のお困りごと",
      desc: "まずはご相談ください",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
  ];

  return (
    <section style={{ backgroundColor: colors.cream, padding: "140px 24px", position: "relative" }}>
      <div id="services" style={{ position: "absolute", top: "-100px" }} />
      <SmallLeafIcon style={{ top: "80px", left: "5%", width: "40px", opacity: 0.2 }} />
      <SmallLeafIcon style={{ bottom: "100px", right: "8%", width: "35px", opacity: 0.15, transform: "scaleX(-1)" }} />

      <AnimatedSection style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionTitle en="SERVICE" ja="対応サービス" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: colors.white,
                padding: "48px 36px",
                borderRadius: "8px",
                textAlign: "center",
                transition: "all 0.3s ease",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* ホバー時の上辺グリーンライン */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  backgroundColor: colors.lightGreen,
                  transform: hoveredIndex === index ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.3s ease",
                }}
              />
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  margin: "0 auto 28px",
                  color: colors.lightGreen,
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: colors.darkGreen,
                  marginBottom: "16px",
                  fontFamily: "var(--font-shippori), serif",
                  letterSpacing: "1px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: colors.lightText,
                  margin: 0,
                  lineHeight: 2,
                  letterSpacing: "0.5px",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: colors.lightText,
            marginTop: "48px",
            letterSpacing: "0.5px",
            lineHeight: 1.8,
          }}
        >
          ※内容によりお受けできない場合があります。
        </p>
      </AnimatedSection>
    </section>
  );
}
