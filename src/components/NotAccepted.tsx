"use client";

import { colors } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function NotAccepted() {
  const items = [
    "電気工事（配線作業、スイッチ／コンセント交換、分電盤等）",
    "高所危険作業（屋根・2階外側など）",
    "重量物の単独運搬（冷蔵庫・洗濯機・金庫等）",
    "不用品回収・処分（許可が必要なため）",
    "水回り分解修理、害虫駆除、感染リスクの高い作業",
  ];

  return (
    <section
      style={{
        backgroundColor: colors.warningBg,
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <AnimatedSection style={{ maxWidth: "700px", margin: "0 auto" }}>
        <SectionTitle en="NOTICE" ja="安全・法令遵守のため、お受けできない内容" />

        <div
          style={{
            backgroundColor: colors.white,
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(199, 80, 80, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={colors.warningRed}
                    strokeWidth="2"
                    style={{ width: "14px", height: "14px" }}
                  >
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "16px",
                    color: colors.text,
                    lineHeight: 1.8,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "14px",
              color: colors.lightText,
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              lineHeight: 1.8,
            }}
          >
            ※内容により専門業者をご案内する場合があります。
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
