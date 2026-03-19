"use client";

import { colors, LINE_URL } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function AreaHours() {
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
      link: LINE_URL,
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
