"use client";

import { colors } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function Process() {
  const steps = [
    { num: "01", title: "電話／SMSでご相談", desc: "まずはお気軽に" },
    { num: "02", title: "内容確認", desc: "ご要望をお聞きします" },
    { num: "03", title: "料金提示", desc: "目安をお伝えします" },
    { num: "04", title: "ご同意", desc: "ご納得いただいてから" },
    { num: "05", title: "作業開始", desc: "現地でお手伝い" },
  ];

  // 点線矢印SVG
  const DottedArrow = () => (
    <svg
      viewBox="0 0 60 20"
      style={{
        width: "40px",
        height: "16px",
        position: "absolute",
        top: "40px",
        right: "-20px",
        opacity: 0.4,
      }}
      className="process-arrow"
    >
      <path
        d="M0 10h50M45 5l5 5-5 5"
        fill="none"
        stroke="#8B9A7D"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section style={{ backgroundColor: colors.cream, padding: "140px 24px", position: "relative" }}>
      <div id="process" style={{ position: "absolute", top: "-100px" }} />

      <AnimatedSection style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle en="FLOW" ja="ご利用の流れ" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "16px",
            position: "relative",
          }}
          className="process-grid"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* 矢印（最後以外） */}
              {index < steps.length - 1 && <DottedArrow />}

              {/* 番号 */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(196, 169, 98, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                    color: colors.darkGreen,
                    fontFamily: "var(--font-shippori), serif",
                  }}
                >
                  {step.num}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: colors.darkGreen,
                  marginBottom: "10px",
                  fontFamily: "var(--font-shippori), serif",
                  letterSpacing: "1px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: colors.lightText,
                  margin: 0,
                  lineHeight: 1.8,
                  letterSpacing: "0.5px",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 40px 16px !important;
          }
          .process-arrow {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 400px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
