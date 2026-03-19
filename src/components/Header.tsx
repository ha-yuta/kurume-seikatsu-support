"use client";

import { useState, useEffect } from "react";
import { colors, PHONE_NUMBER, PHONE_TEL_LINK, LINE_URL } from "@/lib/constants";

export default function Header() {
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
              href={PHONE_TEL_LINK}
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
              href={LINE_URL}
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
            href={PHONE_TEL_LINK}
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
            href={LINE_URL}
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
