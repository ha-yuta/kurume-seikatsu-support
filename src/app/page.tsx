"use client";

import { useState, useEffect, useRef, CSSProperties, ReactNode } from "react";

// ===== カラーパレット =====
const colors = {
  darkGreen: "#1E2E1A",
  mediumGreen: "#2D5016",
  lightGreen: "#5A8F3C",
  paleGreen: "#E8F0E3",
  brightGreen: "#7CB662",
  amber: "#D4892A",
  cream: "#FBF7F0",
  white: "#FFFFFF",
  text: "#333333",
  lightText: "#666666",
  warningRed: "#C75050",
  warningBg: "#FDF6F6",
};

// ===== SVG装飾 =====
const HandDrawnCircle = ({ style, animated = false }: { style?: CSSProperties; animated?: boolean }) => (
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

const LeafDecoration = ({ style, animated = false }: { style?: CSSProperties; animated?: boolean }) => (
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

const DottedLine = ({ style }: { style?: CSSProperties }) => (
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
const CentralDottedCircle = () => (
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
const SmallLeafIcon = ({ style }: { style?: CSSProperties }) => (
  <svg viewBox="0 0 40 50" style={{ position: "absolute", width: "35px", opacity: 0.4, ...style }}>
    <path
      d="M20 5c-10 12-15 25-12 38 3-10 10-18 15-24-3 10-3 20 0 30 8-15 10-32 3-44"
      fill="#8B9A7D"
    />
  </svg>
);

const SmallToolIcon = ({ style }: { style?: CSSProperties }) => (
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

const SmallBroomIcon = ({ style }: { style?: CSSProperties }) => (
  <svg viewBox="0 0 40 50" style={{ position: "absolute", width: "28px", opacity: 0.35, ...style }}>
    <path d="M20 5v25" stroke="#8B9A7D" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M10 30c0 10 5 15 10 15s10-5 10-15c-3 2-7 3-10 3s-7-1-10-3z" fill="#8B9A7D" />
  </svg>
);

const SmallCircleDecor = ({ style }: { style?: CSSProperties }) => (
  <svg viewBox="0 0 30 30" style={{ position: "absolute", width: "25px", opacity: 0.3, ...style }}>
    <circle cx="15" cy="15" r="12" fill="none" stroke="#C4A962" strokeWidth="1.5" strokeDasharray="4 3" />
  </svg>
);

// ===== 写真バナーコンポーネント =====
function PhotoBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        height: "300px",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(to right, rgba(90, 143, 60, 0.1), rgba(90, 143, 60, 0.05))`,
        }}
      />
    </div>
  );
}

// ===== 共通コンポーネント =====
function SectionTitle({
  en,
  ja,
  light = false,
}: {
  en: string;
  ja: string;
  light?: boolean;
}) {
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

// ===== セクション装飾用の大きな点線円 =====
const SectionDottedCircle = ({ style }: { style?: CSSProperties }) => (
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

// ===== アニメーション用Hook =====
function useInView(threshold = 0.1) {
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
function AnimatedSection({
  children,
  style,
  delay = 0,
}: {
  children: ReactNode;
  style?: CSSProperties;
  delay?: number;
}) {
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

// ===== Header（シンプル・右上配置スタイル） =====
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "サービス", href: "#services" },
    { label: "料金", href: "#pricing" },
    { label: "流れ", href: "#process" },
    { label: "質問", href: "#faq" },
  ];

  return (
    <>
      {/* 固定ヘッダー（スクロール後に表示） */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "12px 24px",
          backgroundColor: scrolled ? "rgba(251, 247, 240, 0.98)" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
          transition: "all 0.4s ease",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          pointerEvents: scrolled ? "auto" : "none",
          opacity: scrolled ? 1 : 0,
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: colors.darkGreen,
              textDecoration: "none",
              fontFamily: "var(--font-shippori), serif",
              letterSpacing: "2px",
            }}
          >
            くるめ生活サポート
          </a>

          <div style={{ display: "flex", gap: "24px", alignItems: "center" }} className="desktop-menu">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: colors.text,
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:070-2493-5340"
              style={{
                backgroundColor: colors.amber,
                color: colors.white,
                padding: "12px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              電話相談
            </a>
            <a
              href="https://lin.ee/0YYiaRw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#06C755",
                color: colors.white,
                padding: "12px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "18px", height: "18px" }}>
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINE
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
            className="hamburger"
            aria-label="メニュー"
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "22px",
                  height: "2px",
                  backgroundColor: colors.darkGreen,
                  marginBottom: i < 2 ? "5px" : 0,
                  transition: "all 0.3s",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Hero内 右上ナビ（スクロール前に表示） */}
      <nav
        className="hero-top-nav"
        style={{
          position: "fixed",
          top: "24px",
          right: "24px",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "16px",
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? "none" : "auto",
          transition: "opacity 0.4s ease",
        }}
      >
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              color: colors.text,
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "1px",
              opacity: 0.7,
              transition: "opacity 0.3s",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: "16px",
            right: "16px",
            zIndex: 1001,
            backgroundColor: colors.white,
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: colors.darkGreen,
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 500,
                padding: "16px 0",
                borderBottom: `1px solid ${colors.cream}`,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:070-2493-5340"
            style={{
              display: "block",
              backgroundColor: colors.amber,
              color: colors.white,
              padding: "18px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            電話で相談する
          </a>
          <a
            href="https://lin.ee/0YYiaRw"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              backgroundColor: "#06C755",
              color: colors.white,
              padding: "18px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px" }}>
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで相談する
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger { display: block !important; }
          .hero-top-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}

// ===== Hero（ie-tsukuru.comスタイル 和風・シンプル） =====
function Hero() {
  const goldBeige = "#C4A962";
  const softGold = "rgba(196, 169, 98, 0.5)";

  const photos = [
    "/images/IMG_5878.JPG",
    "/images/IMG_5876.JPG",
    "/images/IMG_5888.JPG",
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
            href="tel:070-2493-5340"
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
            070-2493-5340
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
          href="https://lin.ee/0YYiaRw"
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

// ===== TrustBadges =====
function TrustBadges() {
  const badges = [
    {
      text: "お見積り無料",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "24px", height: "24px" }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M9 9h6M9 15h6" />
        </svg>
      ),
    },
    {
      text: "作業前に料金説明 → ご同意後に開始",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "24px", height: "24px" }}>
          <path d="M9 12l2 2 4-4" />
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
      ),
    },
    {
      text: "相談だけでもOK",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "24px", height: "24px" }}>
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      ),
    },
    {
      text: "追加作業は都度確認",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "24px", height: "24px" }}>
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "rgba(90, 143, 60, 0.04)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "clamp(24px, 5vw, 60px)",
          maxWidth: "1000px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {badges.map((badge, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              color: colors.mediumGreen,
            }}
          >
            {badge.icon}
            <span
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: colors.darkGreen,
                letterSpacing: "0.5px",
                lineHeight: 1.6,
              }}
            >
              {badge.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ===== Problems =====
function Problems() {
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

// ===== Services =====
function Services() {
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

// ===== Pricing =====
function Pricing() {
  const priceItems = [
    { label: "出張費", price: "1,000", unit: "円", note: "東久留米・小平・西東京市内" },
    { label: "作業費（1時間）", price: "3,500", unit: "円", note: "" },
    { label: "延長（30分）", price: "1,500", unit: "円", note: "" },
  ];

  const exampleCategories = [
    {
      title: "草取り・庭まわり",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
          <path d="M12 22c-4-2-7-6-7-10 0-3 2-6 5-7 2 3 2 6 2 9" />
          <path d="M12 22c4-2 7-6 7-10 0-3-2-6-5-7-2 3-2 6-2 9" />
          <path d="M12 22V8" />
        </svg>
      ),
      items: [
        { desc: "スポット草取り（通路・ブロック際など／〜1時間）", price: "4,500円" },
        { desc: "草取り（少なめ／〜1.5時間）", price: "6,000円" },
        { desc: "草取り（多め／〜2時間）", price: "7,500円" },
        { desc: "庭全体など量が多い場合", price: "現地見積（目安 9,000円〜）" },
      ],
      note: null,
    },
    {
      title: "簡易剪定（低木・生け垣）",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      items: [
        { desc: "お試し剪定（〜1時間）", price: "6,000円" },
        { desc: "しっかり剪定（〜2時間）", price: "9,000円" },
        { desc: "量が多い場合", price: "現地見積（目安 12,000円〜）" },
      ],
      note: "※安全のため、脚立で安全に届く範囲（目安〜2m）の簡易剪定に限ります。",
    },
    {
      title: "片付け・家具移動（軽作業）",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
          <rect x="3" y="8" width="18" height="10" rx="1" />
          <path d="M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2M7 18v2M17 18v2" />
        </svg>
      ),
      items: [
        { desc: "〜1時間", price: "4,500円" },
        { desc: "〜1.5時間", price: "6,000円" },
        { desc: "〜2時間", price: "7,500円" },
      ],
      note: null,
    },
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
      <div id="pricing" style={{ position: "absolute", top: "-100px" }} />
      <SectionDottedCircle style={{ width: "350px", top: "-80px", left: "-100px" }} />

      <AnimatedSection style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionTitle en="PRICE" ja="料金の目安（税込）" />

        {/* お見積り無料バッジ */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: colors.amber,
              color: colors.white,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(212, 137, 42, 0.25)",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: 500, opacity: 0.9 }}>お見積り</span>
            <span style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "2px" }}>無料</span>
          </div>
        </div>

        {/* 基本料金テーブル */}
        <div
          style={{
            backgroundColor: colors.cream,
            borderRadius: "16px",
            padding: "8px 0",
            marginBottom: "24px",
          }}
        >
          {priceItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "32px 40px",
                borderBottom: index < priceItems.length - 1 ? `1px solid rgba(0,0,0,0.06)` : "none",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: colors.darkGreen,
                  }}
                >
                  {item.label}
                </span>
                {item.note && (
                  <span
                    style={{
                      fontSize: "14px",
                      color: colors.lightText,
                      marginLeft: "12px",
                    }}
                  >
                    {item.note}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span
                  style={{
                    fontSize: "clamp(28px, 5vw, 36px)",
                    fontWeight: 500,
                    color: colors.darkGreen,
                    fontFamily: "var(--font-shippori), serif",
                  }}
                >
                  {item.price}
                </span>
                <span style={{ fontSize: "16px", color: colors.text }}>
                  {item.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 最低料金 */}
        <div
          style={{
            backgroundColor: "rgba(90, 143, 60, 0.08)",
            padding: "40px",
            borderRadius: "16px",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <div style={{ fontSize: "16px", color: colors.lightText, marginBottom: "16px", letterSpacing: "2px" }}>
            最低料金
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "6px" }}>
            <span
              style={{
                fontSize: "clamp(42px, 10vw, 56px)",
                fontWeight: 500,
                color: colors.darkGreen,
                fontFamily: "var(--font-shippori), serif",
                lineHeight: 1,
              }}
            >
              4,500
            </span>
            <span style={{ fontSize: "20px", color: colors.darkGreen, fontWeight: 500 }}>円（税込）</span>
          </div>
          <div style={{ fontSize: "16px", color: colors.lightText, marginTop: "16px", lineHeight: 1.8 }}>
            出張費＋作業1時間相当
          </div>
        </div>

        {/* 補足 */}
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: colors.text,
            marginBottom: "80px",
            lineHeight: 1.8,
            backgroundColor: colors.cream,
            padding: "20px 24px",
            borderRadius: "8px",
          }}
        >
          ※作業前に必ず料金を提示し、ご同意後に開始します。追加作業は都度確認します。
        </p>

        {/* よくあるご依頼の料金目安 */}
        <h3
          style={{
            fontSize: "clamp(22px, 4vw, 28px)",
            fontWeight: 500,
            color: colors.darkGreen,
            textAlign: "center",
            marginBottom: "48px",
            fontFamily: "var(--font-shippori), serif",
            letterSpacing: "2px",
          }}
        >
          よくあるご依頼の料金目安
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {exampleCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              style={{
                backgroundColor: colors.cream,
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                minWidth: "320px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "24px",
                  color: colors.lightGreen,
                }}
              >
                {category.icon}
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: colors.darkGreen,
                    margin: 0,
                    fontFamily: "var(--font-shippori), serif",
                    wordBreak: "keep-all",
                  }}
                >
                  {category.title}
                </h4>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    style={{
                      paddingBottom: itemIndex < category.items.length - 1 ? "16px" : 0,
                      borderBottom: itemIndex < category.items.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        color: colors.text,
                        lineHeight: 1.6,
                        marginBottom: "6px",
                        wordBreak: "keep-all",
                        overflowWrap: "break-word",
                      }}
                    >
                      {item.desc}
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: colors.darkGreen,
                        textAlign: "right",
                        wordBreak: "keep-all",
                      }}
                    >
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
              {category.note && (
                <p
                  style={{
                    fontSize: "14px",
                    color: colors.lightText,
                    marginTop: "16px",
                    lineHeight: 1.6,
                    wordBreak: "keep-all",
                  }}
                >
                  {category.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ごみについて */}
        <div
          style={{
            backgroundColor: colors.white,
            border: `1px solid rgba(0,0,0,0.08)`,
            borderRadius: "12px",
            padding: "24px 32px",
            marginBottom: "40px",
          }}
        >
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: colors.darkGreen,
              marginBottom: "16px",
            }}
          >
            ごみについて
          </h4>
          <p style={{ fontSize: "16px", color: colors.text, margin: "0 0 8px 0", lineHeight: 1.8 }}>
            お客様の家庭ゴミとして出す場合：<strong>無料</strong>（袋はお客様側でご用意）
          </p>
          <p style={{ fontSize: "14px", color: colors.lightText, margin: 0, lineHeight: 1.8 }}>
            ※不用品回収・処分（持ち帰り処分）は許可が必要なため対応しておりません。
          </p>
        </div>

        {/* 最下部注記 */}
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: colors.lightText,
            lineHeight: 1.8,
          }}
        >
          表示料金は目安です。作業内容・量・難易度により変動する場合があります。<br />
          作業前に必ずご説明し、ご同意のうえ作業します。
        </p>
      </AnimatedSection>
    </section>
  );
}

// ===== Process =====
function Process() {
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

// ===== AreaHours =====
function AreaHours() {
  const items = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "28px", height: "28px" }}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "対応エリア",
      main: <>東久留米市・小平市<br />西東京市</>,
      sub: "（近隣は応相談）",
      link: null,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "28px", height: "28px" }}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "受付時間",
      main: "9:00〜18:00",
      sub: null,
      link: null,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "28px", height: "28px" }}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: "作業日",
      main: "主に金・土・日",
      sub: "（予約制）",
      link: null,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "28px", height: "28px" }}>
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
      ),
      title: "LINE相談",
      main: "LINEで相談する",
      sub: "（お気軽にどうぞ）",
      link: "https://lin.ee/0YYiaRw",
    },
  ];

  return (
    <section style={{ backgroundColor: colors.white, padding: "140px 24px" }}>
      <AnimatedSection style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionTitle en="INFORMATION" ja="対応エリア・受付時間" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="info-grid"
        >
          {items.map((item, index) => {
            const cardContent = (
              <>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    margin: "0 auto 24px",
                    color: item.link ? "#06C755" : colors.lightGreen,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(180, 160, 120, 0.8)",
                    marginBottom: "14px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(18px, 3vw, 22px)",
                    fontWeight: 500,
                    color: item.link ? "#06C755" : colors.darkGreen,
                    margin: 0,
                    fontFamily: "var(--font-shippori), serif",
                    letterSpacing: "1px",
                    lineHeight: 1.5,
                  }}
                >
                  {item.main}
                </p>
                {item.sub && (
                  <p style={{ fontSize: "15px", color: colors.lightText, marginTop: "12px", lineHeight: 1.8 }}>
                    {item.sub}
                  </p>
                )}
              </>
            );

            if (item.link) {
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: colors.white,
                    padding: "48px 24px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    border: "2px solid #06C755",
                    textDecoration: "none",
                    display: "block",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(6, 199, 85, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                  }}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div
                key={index}
                style={{
                  backgroundColor: colors.white,
                  padding: "48px 24px",
                  borderRadius: "20px",
                  textAlign: "center",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </AnimatedSection>

      <style>{`
        @media (max-width: 900px) {
          .info-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

// ===== NotAccepted（お受けできない内容） =====
function NotAccepted() {
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

// ===== FAQ =====
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "どんなことをお願いできますか？",
      a: "電球交換、家具の移動、片付け（軽作業）、草取り・簡単な庭掃除、買い物代行など、日常の「ちょっと困った」軽作業に出張で対応します。",
    },
    {
      q: "介護保険外（制度外）のお手伝いとは何ですか？",
      a: "介護保険のサービスでは対応が難しい軽作業を、有償でお手伝いするものです。作業前に内容と料金をご説明し、ご同意をいただいてから作業します。",
    },
    {
      q: "対応エリアはどこですか？",
      a: "東久留米市・小平市・西東京市を中心に対応しています（近隣は応相談）。",
    },
    {
      q: "料金はどのように決まりますか？",
      a: "出張費と作業時間を基本に算出します。作業前に必ず金額を提示し、ご同意をいただいてから開始します。追加作業が必要な場合も都度確認します。",
    },
    {
      q: "最低料金はありますか？",
      a: "はい。出張費込みで4,500円（税込）が最低料金です。",
    },
    {
      q: "見積は無料ですか？",
      a: "内容が軽作業の範囲であれば、電話/SMSで目安をご案内できます。現地確認が必要な場合は事前にお伝えします。",
    },
    {
      q: "当日すぐ来てもらえますか？",
      a: "可能な範囲で調整しますが、基本は予約制です。まずはご希望日時をお知らせください。",
    },
    {
      q: "支払い方法は？",
      a: "現金／銀行振込に対応しています。領収書も発行します。",
    },
    {
      q: "キャンセル料はかかりますか？",
      a: "体調不良など事情がある場合は柔軟に対応します。分かった時点でご連絡ください。",
    },
    {
      q: "お受けできない作業はありますか？",
      a: "安全・法令遵守のため、電気工事、高所危険作業、重量物の単独運搬、不用品回収・処分、水回り分解修理などはお受けできません。",
    },
  ];

  return (
    <section style={{ backgroundColor: colors.cream, padding: "140px 24px", position: "relative", overflow: "hidden" }}>
      <div id="faq" style={{ position: "absolute", top: "-100px" }} />
      <SectionDottedCircle style={{ width: "400px", bottom: "-150px", right: "-150px" }} />

      <AnimatedSection style={{ maxWidth: "750px", margin: "0 auto" }}>
        <SectionTitle en="FAQ" ja="よくある質問" />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.white,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: "100%",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "16px",
                }}
              >
                {/* Qバッジ */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: colors.lightGreen,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "white", fontSize: "14px", fontWeight: 600 }}>Q</span>
                </div>
                <span
                  style={{
                    flex: 1,
                    fontSize: "17px",
                    fontWeight: 500,
                    color: colors.darkGreen,
                    lineHeight: 1.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  {faq.q}
                </span>
                {/* シェブロン */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.lightText}
                  strokeWidth="2"
                  style={{
                    width: "20px",
                    height: "20px",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: openIndex === index ? "rotate(180deg)" : "none",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                style={{
                  maxHeight: openIndex === index ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div
                  style={{
                    padding: "0 28px 24px 76px",
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  {/* Aバッジ */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(196, 169, 98, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: "rgba(180, 160, 120, 0.9)", fontSize: "14px", fontWeight: 600 }}>A</span>
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      color: colors.text,
                      lineHeight: 1.9,
                      margin: 0,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ===== CTA =====
function CTA() {
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
          href="tel:070-2493-5340"
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
          070-2493-5340
        </a>

        <div>
          <a
            href="tel:070-2493-5340"
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
            href="https://lin.ee/0YYiaRw"
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

// ===== Footer =====
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111D0E",
        padding: "0",
        textAlign: "center",
        color: colors.white,
      }}
    >
      {/* 上部の装飾ライン */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(196, 169, 98, 0.4), transparent)",
        }}
      />

      <div style={{ padding: "72px 24px 48px", maxWidth: "600px", margin: "0 auto" }}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 500,
            marginBottom: "24px",
            fontFamily: "var(--font-shippori), serif",
            letterSpacing: "3px",
          }}
        >
          くるめ生活サポート
        </h3>
        <p style={{ fontSize: "15px", opacity: 0.6, marginBottom: "12px", lineHeight: 1.8, letterSpacing: "1px" }}>
          東久留米市・小平市・西東京市エリアの<br />便利屋サービス
        </p>
        <p style={{ fontSize: "15px", opacity: 0.6, marginBottom: "32px", letterSpacing: "1px" }}>
          電話: 070-2493-5340 ／ 受付: 9:00〜18:00
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "サービス", href: "#services" },
            { label: "料金", href: "#pricing" },
            { label: "流れ", href: "#process" },
            { label: "質問", href: "#faq" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "1px",
                transition: "color 0.3s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 個人情報の取り扱い */}
        <p
          style={{
            fontSize: "13px",
            opacity: 0.4,
            lineHeight: 1.8,
            marginBottom: "32px",
            padding: "0 16px",
          }}
        >
          個人情報の取り扱い：ご相談・作業対応に必要な範囲で個人情報を取り扱い、目的外での使用はいたしません。
        </p>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "32px",
          }}
        >
          <p style={{ fontSize: "14px", opacity: 0.4, letterSpacing: "0.5px" }}>
            &copy; {new Date().getFullYear()} くるめ生活サポート
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===== メインページ =====
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <Problems />
      <Services />
      <Pricing />
      <Process />
      <AreaHours />
      <NotAccepted />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
