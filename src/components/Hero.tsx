"use client";

import { colors, PHONE_NUMBER, PHONE_TEL_LINK, LINE_URL } from "@/lib/constants";
import {
  CentralDottedCircle,
  SmallLeafIcon,
  SmallToolIcon,
  SmallBroomIcon,
  SmallCircleDecor,
} from "./Decorations";

export default function Hero() {
  const goldBeige = "#C4A962";
  const softGold = "rgba(196, 169, 98, 0.5)";

  const photos = [
    "/images/IMG_5878.webp",
    "/images/IMG_5876.webp",
    "/images/IMG_5888.webp",
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: colors.cream,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* メインエリア */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "100px 24px 40px",
        }}
      >
        {/* 左の縦書き「ご近所の」 */}
        <div
          className="vertical-text-left"
          style={{
            position: "absolute",
            left: "clamp(20px, 8vw, 100px)",
            top: "50%",
            transform: "translateY(-50%)",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontFamily: "var(--font-shippori), serif",
            color: softGold,
            fontWeight: 400,
            letterSpacing: "8px",
            lineHeight: 1.5,
          }}
        >
          ご近所の
        </div>

        {/* 右の縦書き「便利屋」 */}
        <div
          className="vertical-text-right"
          style={{
            position: "absolute",
            right: "clamp(20px, 8vw, 100px)",
            top: "50%",
            transform: "translateY(-50%)",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontFamily: "var(--font-shippori), serif",
            color: softGold,
            fontWeight: 400,
            letterSpacing: "8px",
            lineHeight: 1.5,
          }}
        >
          便利屋
        </div>

        {/* 中央の円とロゴ */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* 装飾：葉っぱ、工具など */}
          <SmallLeafIcon style={{ top: "-30px", left: "-80px", transform: "rotate(-20deg)" }} />
          <SmallLeafIcon style={{ bottom: "-20px", right: "-70px", transform: "rotate(30deg) scaleX(-1)" }} />
          <SmallToolIcon style={{ top: "20px", right: "-90px", transform: "rotate(15deg)" }} />
          <SmallBroomIcon style={{ bottom: "40px", left: "-85px", transform: "rotate(-10deg)" }} />
          <SmallCircleDecor style={{ top: "-50px", right: "-30px" }} />
          <SmallCircleDecor style={{ bottom: "-40px", left: "-20px" }} />

          {/* 中央の大きな点線の円 */}
          <CentralDottedCircle />

          {/* 円の中のロゴ */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(22px, 4.5vw, 38px)",
                fontFamily: "var(--font-shippori), serif",
                fontWeight: 500,
                color: colors.darkGreen,
                letterSpacing: "3px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <span style={{ whiteSpace: "nowrap", display: "block" }}>くるめ</span>
              <span style={{ whiteSpace: "nowrap", display: "block" }}>生活サポート</span>
            </h1>
            <div
              style={{
                marginTop: "16px",
                fontSize: "14px",
                letterSpacing: "3px",
                color: goldBeige,
                fontWeight: 500,
              }}
            >
              LOCAL HANDYMAN
            </div>
          </div>
        </div>
      </div>

      {/* キャッチコピー */}
      <div
        style={{
          textAlign: "center",
          padding: "0 24px 40px",
        }}
      >
        <p
          style={{
            fontSize: "clamp(18px, 3vw, 22px)",
            fontFamily: "var(--font-shippori), serif",
            color: colors.text,
            lineHeight: 2,
            fontWeight: 400,
            margin: 0,
            letterSpacing: "0.5px",
          }}
        >
          介護保険外の「ちょっと困った」もご相談ください
        </p>
        <p
          style={{
            fontSize: "16px",
            color: colors.lightText,
            marginTop: "16px",
            letterSpacing: "0.5px",
            lineHeight: 1.8,
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          電球交換・片付け・草取りなど、制度では対応しにくい軽作業を出張でお手伝いします。
        </p>
        <p
          style={{
            fontSize: "16px",
            color: colors.lightText,
            marginTop: "12px",
            letterSpacing: "1px",
            lineHeight: 1.8,
          }}
        >
          東久留米市・小平市・西東京市
        </p>
      </div>

      {/* CTAボタン */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          padding: "0 24px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={PHONE_TEL_LINK}
            style={{
              backgroundColor: colors.amber,
              color: colors.white,
              padding: "18px 36px",
              borderRadius: "4px",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 4px 15px rgba(212, 137, 42, 0.3)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "20px", height: "20px" }}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            {PHONE_NUMBER}
          </a>
          <a
            href="#contact"
            style={{
              backgroundColor: "transparent",
              color: colors.darkGreen,
              padding: "18px 36px",
              borderRadius: "4px",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
              border: `1px solid ${colors.lightGreen}`,
            }}
          >
            お見積り無料
          </a>
        </div>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#06C755",
            color: colors.white,
            padding: "18px 36px",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: 600,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 4px 15px rgba(6, 199, 85, 0.3)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}>
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          LINEで相談する
        </a>
      </div>

      {/* 下部の3枚写真 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "4px",
        }}
        className="hero-photos"
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{
              aspectRatio: "4/3",
              backgroundImage: `url(${photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .vertical-text-left,
          .vertical-text-right {
            display: none !important;
          }
          .hero-photos {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .vertical-text-left {
            left: 10px !important;
            font-size: 24px !important;
          }
          .vertical-text-right {
            right: 10px !important;
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
