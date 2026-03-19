"use client";

import { colors, PHONE_NUMBER, PHONE_TEL_LINK, LINE_URL } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "140px 24px",
        textAlign: "center",
        overflow: "hidden",
        backgroundColor: colors.cream,
      }}
    >
      {/* 中央の大きな装飾円 */}
      <svg
        viewBox="0 0 500 500"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "clamp(400px, 80vw, 600px)",
          height: "clamp(400px, 80vw, 600px)",
          opacity: 0.15,
        }}
      >
        <circle
          cx="250"
          cy="250"
          r="230"
          fill="none"
          stroke="#C4A962"
          strokeWidth="1"
          strokeDasharray="8 6"
        />
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="none"
          stroke="#C4A962"
          strokeWidth="0.5"
          strokeDasharray="4 8"
        />
      </svg>

      <AnimatedSection style={{ position: "relative", maxWidth: "500px", margin: "0 auto", zIndex: 1 }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "14px",
            letterSpacing: "4px",
            color: "rgba(180, 160, 120, 0.7)",
            marginBottom: "24px",
          }}
        >
          CONTACT
        </span>
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 500,
            marginBottom: "28px",
            lineHeight: 1.6,
            color: colors.darkGreen,
            fontFamily: "var(--font-shippori), serif",
            letterSpacing: "2px",
          }}
        >
          まずはお気軽に
          <br />
          ご相談ください
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "20px", color: colors.lightText, lineHeight: 2, letterSpacing: "0.5px" }}>
          お見積りは無料です。
          <br />
          ご相談だけでもお気軽にどうぞ。
        </p>
        <p style={{ fontSize: "16px", marginBottom: "40px", color: colors.text, lineHeight: 1.8 }}>
          お電話またはSMS（ショートメッセージ）で<br />お気軽にご相談ください。
        </p>

        <a
          href={PHONE_TEL_LINK}
          style={{
            display: "inline-block",
            fontSize: "clamp(32px, 7vw, 48px)",
            fontWeight: 500,
            color: colors.darkGreen,
            fontFamily: "var(--font-shippori), serif",
            letterSpacing: "3px",
            textDecoration: "none",
            marginBottom: "36px",
          }}
        >
          {PHONE_NUMBER}
        </a>

        <div>
          <a
            href={PHONE_TEL_LINK}
            style={{
              display: "inline-block",
              backgroundColor: colors.amber,
              color: colors.white,
              padding: "20px 56px",
              borderRadius: "4px",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(212, 137, 42, 0.25)",
            }}
          >
            電話で相談する
          </a>
        </div>

        <div style={{ marginTop: "32px" }}>
          <p style={{ fontSize: "16px", color: colors.text, marginBottom: "16px" }}>
            LINEでもご相談いただけます
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#06C755",
              color: colors.white,
              padding: "18px 40px",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(6, 199, 85, 0.25)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}>
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで相談する
          </a>
        </div>

        <p style={{ fontSize: "16px", color: colors.lightText, marginTop: "36px", letterSpacing: "1px", lineHeight: 1.8 }}>
          受付 9:00〜18:00 ／ 主に金・土・日（予約制）
        </p>
      </AnimatedSection>
    </section>
  );
}
