"use client";

import { colors } from "@/lib/constants";

export default function TrustBadges() {
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
    {
      text: "損害賠償保険加入済み",
      sub: "万一に備えています",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "24px", height: "24px" }}>
          <path d="M12 2l7 3v6c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      text: "各種お支払いに対応",
      sub: "現金・振込・PayPay・カード",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "24px", height: "24px" }}>
          <rect x="2" y="6" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
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
            {badge.sub ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: colors.darkGreen,
                    letterSpacing: "0.5px",
                    lineHeight: 1.6,
                    wordBreak: "keep-all",
                  }}
                >
                  {badge.text}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: colors.lightText,
                    letterSpacing: "0.3px",
                    lineHeight: 1.5,
                    wordBreak: "keep-all",
                  }}
                >
                  {badge.sub}
                </span>
              </div>
            ) : (
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
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
