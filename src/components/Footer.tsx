"use client";

import { colors, PHONE_NUMBER } from "@/lib/constants";

export default function Footer() {
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
          電話: {PHONE_NUMBER} ／ 受付: 9:00〜18:00
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
